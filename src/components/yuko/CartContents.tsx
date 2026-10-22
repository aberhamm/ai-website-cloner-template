"use client";
/* eslint-disable @next/next/no-img-element */
import { createPortal } from "react-dom";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useShop } from "./Store";
import { products, formatPrice } from "@/types/product";
export function CartContents({ close }: { close: () => void }) {
  const { cart, subtotal, changeQuantity, loaded } = useShop();
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const node = dialog.current;
    if (!node) return;
    const restore = () => document.body.classList.remove("yuko-dialog-open");
    node.addEventListener("close", restore);
    return () => {
      node.removeEventListener("close", restore);
      restore();
    };
  }, [loaded]);
  return (
    <>
      <div className="flex shrink-0 flex-col gap-2">
        {cart.length ? (
          <>
            <div className="flex flex-col gap-3">
              {cart.map((item) => {
                const p = products.find((p) => p.id === item.id);
                if (!p) return null;
                const label =
                  item.purchaseMode === "subscription"
                    ? item.subscriptionFrequency === "bi-weekly"
                      ? "Bi-weekly"
                      : "Monthly"
                    : "Once";
                const price =
                  item.purchaseMode === "subscription"
                    ? p.subscription.price
                    : p.price;
                return (
                  <div
                    className="flex items-start gap-2"
                    data-morph-reveal="true"
                    key={`${item.id}-${item.purchaseMode}-${item.subscriptionFrequency}`}
                  >
                    <img
                      src={p.gallery[0].src}
                      alt={p.name}
                      width={88}
                      height={112}
                      className="h-20 w-16 flex-[0_0_64px] rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h3>
                        <Link href={`/products/${p.slug}`} onClick={close}>
                          {p.name}
                        </Link>
                      </h3>
                      <p className="text-muted">
                        {formatPrice(price)} each / {label}
                      </p>
                      <div className="mt-1 flex h-header-control w-[calc(var(--header-control-height)*2+32px)] items-center justify-between rounded-full bg-control [&_button]:size-header-control">
                        <button
                          type="button"
                          aria-label={`Remove one ${p.name}, ${label}`}
                          onClick={() =>
                            changeQuantity(
                              item.id,
                              -1,
                              item.purchaseMode,
                              item.subscriptionFrequency,
                            )
                          }
                        >
                          −
                        </button>
                        <span aria-live="polite">{item.quantity}</span>
                        <button
                          type="button"
                          aria-label={`Add one ${p.name}, ${label}`}
                          disabled={item.quantity >= 99}
                          onClick={() =>
                            changeQuantity(
                              item.id,
                              1,
                              item.purchaseMode,
                              item.subscriptionFrequency,
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <span>{formatPrice(price * item.quantity)}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-2 flex flex-col" data-morph-reveal="true">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span aria-live="polite" aria-atomic="true">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-muted">
                {subtotal > 100
                  ? "Your order qualifies for free US shipping."
                  : "Free shipping on US orders over $100."}
              </p>
            </div>
            <div data-morph-reveal="true">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-foreground text-white min-h-[calc(var(--header-control-height)*1.5)] w-full gap-2 px-4 py-1 text-[15px] leading-6"
                onClick={() => {
                  close();
                  document.body.classList.add("yuko-dialog-open");
                  dialog.current?.showModal();
                }}
              >
                Checkout{" "}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  fill="none"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <div
            className="flex flex-col items-start gap-4"
            data-morph-reveal="true"
          >
            <p className="text-muted">There are no items in your cart</p>
            <Link
              href="/#shop"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 rounded-full px-4 whitespace-nowrap transition-colors duration-180 ease-[ease] motion-reduce:transition-none max-md:min-h-10 bg-foreground text-white hover:bg-[#454545] min-h-[calc(var(--header-control-height)*1.5)] w-full py-1 text-[15px] leading-6"
            >
              Browse shop
            </Link>
          </div>
        )}
      </div>
      {loaded &&
        createPortal(
          <dialog
            ref={dialog}
            className="yuko-checkout-dialog m-auto max-h-[calc(100svh-24px)] w-[min(520px,calc(100%-32px))] overscroll-contain rounded-3xl border-0 bg-canvas p-0 text-foreground backdrop:bg-[#20202050] backdrop:backdrop-blur-[8px] md:max-h-[calc(100svh-48px)] md:rounded-[32px]"
            aria-labelledby="checkout-preview-title"
            onClick={(e) => {
              if (e.target === e.currentTarget) dialog.current?.close();
            }}
          >
            <div className="flex flex-col gap-5 p-5 md:p-7">
              <div className="flex items-center justify-between gap-4">
                <h2 id="checkout-preview-title" className="text-2xl">
                  Checkout preview
                </h2>
                <button
                  type="button"
                  className="grid size-10 place-items-center rounded-full bg-control"
                  aria-label="Close dialog"
                  onClick={() => dialog.current?.close()}
                >
                  ×
                </button>
              </div>
              <p className="pt-2 pb-6 text-muted">
                Checkout is not connected in this template. No order has been
                placed and no payment has been collected. Your cart stays on
                this device when browser storage is available.
              </p>
            </div>
          </dialog>,
          document.body,
        )}
    </>
  );
}
