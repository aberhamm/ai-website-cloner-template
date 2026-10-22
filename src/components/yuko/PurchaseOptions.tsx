"use client";

import { useId, useState } from "react";
import { formatPrice, type Product, type PurchaseMode, type SubscriptionFrequency } from "@/types/product";
import { useShop } from "@/components/yuko/Store";

export function PurchaseOptions({ product }: { product: Product }) {
  const id = useId();
  const [mode, setMode] = useState<PurchaseMode>("one-time");
  const [frequency, setFrequency] = useState<SubscriptionFrequency>("monthly");
  const { loaded, cart, addItem } = useShop();
  const subscribed = mode === "subscription";
  const price = subscribed ? product.subscription.price : product.price;
  const discount = Math.round((1 - product.subscription.price / product.price) * 100);
  const atLimit = (cart.find(item => item.id === product.id && item.purchaseMode === mode && (!subscribed || item.subscriptionFrequency === frequency))?.quantity ?? 0) >= 99;

  return (
    <div className="mx-auto grid w-fit max-w-full gap-3">
      <div className="mb-1 flex flex-col items-center justify-center gap-1 md:mb-3 md:gap-2">
        <h1 id="product-title" className="text-[15px] leading-6 font-normal tracking-normal">{product.name}</h1>
        <span className="flex items-center justify-center text-[15px] leading-6 font-normal tracking-normal text-muted" aria-live="polite" aria-atomic="true">
          {subscribed && <s className="mr-2 whitespace-nowrap decoration-1" aria-hidden="true">{formatPrice(product.price)}</s>}
          <span className="sr-only">{subscribed ? "Subscription price: " : "Price: "}</span>
          <span>{formatPrice(price)}</span>
        </span>
      </div>
      <div className="min-w-0">
        <fieldset className="relative m-0 grid w-auto max-w-full min-w-0 grid-cols-[max-content_max-content] justify-center rounded-3xl border-0 bg-control p-[5px] disabled:opacity-50 disabled:[&_label]:cursor-not-allowed disabled:[&_input]:cursor-not-allowed" aria-label="Purchase type" disabled={product.soldOut}>
          {(["one-time", "subscription"] as const).map(option => (
            <label key={option} className="relative isolate flex min-h-8 w-max cursor-pointer items-center justify-center rounded-[20px] px-3 py-2 leading-4 has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-focus">
              <input className="absolute inset-0 m-0 size-full cursor-pointer rounded-[inherit] opacity-0" type="radio" name={id} checked={mode === option} value={option} aria-describedby={option === "subscription" ? `${id}-discount` : undefined} onChange={() => setMode(option)} />
              {mode === option && <span className="absolute inset-0 -z-1 rounded-[inherit] bg-white shadow-[0_1px_4px_#0000000a]" />}
              <span className="text-[13px]">{option === "one-time" ? "Buy once" : "Subscribe + Save"}</span>
            </label>
          ))}
          <span id={`${id}-discount`} className="pointer-events-none absolute top-0 right-0 z-1 inline-flex min-h-7 translate-x-[35%] -translate-y-[60%] items-center justify-center rounded-full border border-border bg-canvas px-2.5 py-1 text-xs leading-[18px] whitespace-nowrap text-muted">-{discount}%</span>
        </fieldset>
        <div className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-250 ease-out motion-reduce:transition-none ${subscribed ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`} aria-hidden={!subscribed} inert={!subscribed}>
          <div className="min-h-0 overflow-hidden">
            <div className="pt-3">
              <div className="relative">
                <label className="sr-only" htmlFor={`${id}-frequency`}>Delivery frequency</label>
                <select id={`${id}-frequency`} className="block min-h-10 w-full min-w-0 cursor-pointer appearance-none rounded-full border-0 bg-control py-3 pr-9 pl-4 text-[13px] leading-4 text-foreground focus-visible:outline-offset-[-3px] disabled:cursor-not-allowed" disabled={!subscribed || product.soldOut} aria-describedby={`${id}-frequency-description`} value={frequency} onChange={event => {
                  const value = event.target.value;
                  if (value === "monthly" || value === "bi-weekly") setFrequency(value);
                }}>
                  <option value="monthly">Monthly</option>
                  <option value="bi-weekly">Bi-weekly</option>
                </select>
                <svg className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span id={`${id}-frequency-description`} className="sr-only">Bi-weekly means delivery every two weeks.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" disabled={!loaded || product.soldOut || atLimit} onClick={() => addItem(product.id, mode, frequency)} className="inline-flex items-center justify-center rounded-full text-[13px] leading-4 whitespace-nowrap transition-colors duration-180 ease-[ease] motion-reduce:transition-none max-md:min-h-10 bg-foreground text-white min-h-10 w-full gap-2 px-5 py-3 hover:bg-foreground">
        {product.soldOut ? "Sold out" : atLimit ? "Cart limit reached" : "Add to cart"}
        {!product.soldOut && <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>}
      </button>
    </div>
  );
}
