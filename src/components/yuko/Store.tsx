"use client";
import { useMemo, useSyncExternalStore } from "react";
import {
  products,
  type CartItem,
  type PurchaseMode,
  type SubscriptionFrequency,
} from "@/types/product";
const key = "yuko-cart";
const changeEvent = "yuko-cart-change";
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(changeEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(changeEvent, callback);
  };
}
let fallback = "[]";
function snapshot() {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}
function readCart(raw: string): CartItem[] {
  try {
    const data: unknown = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    return data.filter((item): item is CartItem => {
      if (!item || typeof item !== "object") return false;
      const v = item as Partial<CartItem>;
      return (
        products.some((p) => p.id === v.id && !p.soldOut) &&
        Number.isInteger(v.quantity) &&
        Number(v.quantity) >= 1 &&
        Number(v.quantity) <= 99 &&
        (v.purchaseMode === "one-time" || v.purchaseMode === "subscription") &&
        (v.purchaseMode !== "subscription" ||
          v.subscriptionFrequency === "monthly" ||
          v.subscriptionFrequency === "bi-weekly")
      );
    });
  } catch {
    return [];
  }
}
function writeCart(cart: CartItem[]) {
  fallback = JSON.stringify(cart);
  try {
    localStorage.setItem(key, fallback);
  } catch {
    /* Keep the current session usable when storage is unavailable. */
  }
  window.dispatchEvent(new Event(changeEvent));
}
function changeQuantity(
  id: string,
  delta: number,
  mode: PurchaseMode = "one-time",
  frequency: SubscriptionFrequency = "monthly",
) {
  if (
    !products.some((p) => p.id === id && !p.soldOut) ||
    !Number.isInteger(delta)
  )
    return;
  const cart = readCart(snapshot());
  const index = cart.findIndex(
    (i) =>
      i.id === id &&
      i.purchaseMode === mode &&
      (mode !== "subscription" || i.subscriptionFrequency === frequency),
  );
  if (index < 0 && delta > 0)
    cart.push({
      id,
      quantity: Math.min(99, delta),
      purchaseMode: mode,
      ...(mode === "subscription" ? { subscriptionFrequency: frequency } : {}),
    });
  else if (index >= 0)
    cart[index] = {
      ...cart[index],
      quantity: Math.min(99, cart[index].quantity + delta),
    };
  writeCart(cart.filter((i) => i.quantity > 0));
}
function addItem(
  id: string,
  mode: PurchaseMode,
  frequency: SubscriptionFrequency = "monthly",
) {
  changeQuantity(id, 1, mode, frequency);
  window.dispatchEvent(new Event("yuko-open-cart"));
}
export function useShop() {
  const raw = useSyncExternalStore(subscribe, snapshot, () => "[]");
  const loaded = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const cart = useMemo(() => readCart(raw), [raw]);
  return {
    cart,
    loaded,
    addItem,
    changeQuantity,
    count: cart.reduce((n, i) => n + i.quantity, 0),
    subtotal: cart.reduce((n, i) => {
      const p = products.find((p) => p.id === i.id);
      return (
        n +
        (p
          ? i.purchaseMode === "subscription"
            ? p.subscription.price
            : p.price
          : 0) *
          i.quantity
      );
    }, 0),
  };
}
