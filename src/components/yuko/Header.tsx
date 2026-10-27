/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShop } from "./Store";
import { CartContents } from "./CartContents";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

// The source morphs a control into the measured panel, then staggers its content.
// Web Animations keeps these measurements out of React's inline styles.
function useMorphPanel(open: boolean, close: () => void) {
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const shell = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const previousOpen = useRef(false);
  const previousBounds = useRef<{ width: number; height: number } | null>(null);
  const closeRef = useRef(close);
  useLayoutEffect(() => {
    closeRef.current = close;
  });

  useLayoutEffect(() => {
    const control = trigger.current;
    const surface = shell.current;
    const content = panel.current;
    if (!control || !surface || !content) return;
    const changed = previousOpen.current !== open;
    previousOpen.current = open;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const animations: Animation[] = [];
    let disposed = false;
    let morphing = changed && !reduced;
    const animate = (
      element: Element,
      frames: Keyframe[],
      options: KeyframeAnimationOptions,
    ) => {
      const animation = element.animate(frames, { fill: "both", ...options });
      animations.push(animation);
      return animation;
    };
    const dimensions = () => ({
      width: `${open ? content.offsetWidth : control.offsetWidth}px`,
      height: `${open ? content.offsetHeight : control.offsetHeight}px`,
      borderRadius: open ? "28px" : "20px",
    });
    const settle = () =>
      animate(surface, [dimensions()], {
        duration: reduced ? 0 : 460,
        easing: "cubic-bezier(0.2, 0.9, 0.25, 1.12)",
      });
    if (changed && !reduced) {
      const current = previousBounds.current ?? surface.getBoundingClientRect();
      const shrink = animate(
        surface,
        [
          { width: `${current.width}px`, height: `${current.height}px` },
          {
            width: `${control.offsetWidth * 0.92}px`,
            height: `${control.offsetHeight * 0.84}px`,
            borderRadius: "20px",
          },
        ],
        {
          duration: open ? 100 : 220,
          delay: open ? 0 : 80,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        },
      );
      void shrink.finished
        .then(async () => {
          if (!disposed) {
            await settle().finished;
            morphing = false;
          }
        })
        .catch(() => {});
    } else {
      animate(surface, [dimensions()], { duration: 0 });
    }
    animate(
      control,
      [
        {
          opacity: open ? 0 : 1,
          filter: open && !reduced ? "blur(6px)" : "blur(0px)",
        },
      ],
      {
        duration: reduced ? 0 : 180,
        delay: !open && changed && !reduced ? 240 : 0,
      },
    );
    content
      .querySelectorAll("[data-morph-reveal]")
      .forEach((element, index) => {
        animate(
          element,
          open
            ? [
                {
                  opacity: changed && !reduced ? 0 : 1,
                  transform:
                    changed && !reduced ? "translateY(20px)" : "translateY(0)",
                  filter: changed && !reduced ? "blur(4px)" : "blur(0px)",
                },
                { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" },
              ]
            : [
                {
                  opacity: 0,
                  transform: reduced ? "translateY(0)" : "translateY(8px)",
                  filter: reduced ? "blur(0px)" : "blur(3px)",
                },
              ],
          {
            duration: reduced ? 0 : open ? 360 : 120,
            delay: open && changed && !reduced ? 160 + 35 * index : 0,
            easing: "cubic-bezier(0.2, 0.9, 0.25, 1.12)",
          },
        );
      });
    if (
      changed &&
      (open ||
        content.contains(document.activeElement) ||
        document.activeElement === document.body)
    ) {
      (open ? closeButton.current : control)?.focus({ preventScroll: true });
    }
    const observer = new ResizeObserver(() => {
      if (!disposed && !morphing) settle();
    });
    observer.observe(content);
    observer.observe(control);
    return () => {
      disposed = true;
      const bounds = surface.getBoundingClientRect();
      previousBounds.current = { width: bounds.width, height: bounds.height };
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !root.current?.contains(event.target))
        closeRef.current();
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeRef.current();
      }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);
  return { root, trigger, shell, panel, closeButton };
}

export function Header() {
  const isProduct = usePathname().startsWith("/yuko/products/");
  const [openPanel, setOpenPanel] = useState<"menu" | "cart" | null>(null);
  const { count } = useShop();
  useEffect(() => {
    const open = () => setOpenPanel("cart");
    window.addEventListener("yuko-open-cart", open);
    return () => window.removeEventListener("yuko-open-cart", open);
  }, []);
  const close = () => setOpenPanel(null);
  const menuOpen = openPanel === "menu";
  const cartOpen = openPanel === "cart";
  const {
    root: menuRoot,
    trigger: menuTrigger,
    shell: menuShell,
    panel: menuPanel,
    closeButton: menuCloseButton,
  } = useMorphPanel(menuOpen, close);
  const {
    root: cartRoot,
    trigger: cartTrigger,
    shell: cartShell,
    panel: cartPanel,
    closeButton: cartCloseButton,
  } = useMorphPanel(cartOpen, close);
  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-20 grid min-h-8 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 px-[max(var(--page-gutter),calc((100%-1376px)/2))] py-5 md:grid-cols-3 md:gap-column md:py-4 [&>*]:pointer-events-auto">
        <div
          className="group/panel relative isolate col-start-1 row-start-1 justify-self-start data-[open=true]:z-3 md:hidden"
          data-open={menuOpen}
          ref={menuRoot}
        >
          <button
            ref={menuTrigger}
            onClick={() => setOpenPanel("menu")}
            inert={menuOpen}
            aria-hidden={menuOpen}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu-panel"
            type="button"
            className="group/trigger relative z-1 flex gap-1"
            tabIndex={0}
          >
            <span className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-[13px] leading-4 whitespace-nowrap transition-colors duration-180 ease-[ease] motion-reduce:transition-none min-h-header-control bg-floating backdrop-blur-floating group-hover/trigger:bg-floating-hover max-[360px]:px-3 max-md:min-h-8">
              {"Menu"}
            </span>
          </button>
          <div
            ref={menuShell}
            className="pointer-events-none absolute top-0 size-full overflow-hidden rounded-[20px] bg-transparent [transition:background_180ms_ease_450ms,box-shadow_300ms_ease] group-data-[open=true]/panel:pointer-events-auto group-data-[open=true]/panel:z-2 group-data-[open=true]/panel:bg-floating group-data-[open=true]/panel:backdrop-blur-floating group-data-[open=true]/panel:delay-0 group-data-[open=true]/panel:shadow-[0_8px_32px_#20202012] motion-reduce:transition-none left-0 right-auto"
          >
            <div className="invisible absolute inset-0 transition-[visibility] duration-0 delay-450 group-data-[open=true]/panel:visible group-data-[open=true]/panel:delay-0 motion-reduce:transition-none">
              <div
                ref={menuPanel}
                id="mobile-menu-panel"
                className="absolute top-0 flex max-h-[calc(100dvh-40px)] w-[calc(100vw-var(--page-gutter)*2)] flex-col gap-3 overflow-y-auto overscroll-contain p-6 [scrollbar-width:thin] md:max-h-[calc(100dvh-32px)] md:w-[min(384px,calc(100vw-var(--page-gutter)*2))] left-0 right-auto"
                role="dialog"
                aria-labelledby="mobile-menu-title"
                aria-hidden={!menuOpen}
                inert={!menuOpen}
              >
                <div
                  className="flex shrink-0 items-center justify-between gap-4"
                  data-morph-reveal="true"
                >
                  <h2
                    id="mobile-menu-title"
                    className="text-[15px] leading-6 tracking-normal"
                  >
                    {"Menu"}
                  </h2>
                  <button
                    ref={menuCloseButton}
                    onClick={close}
                    aria-label="Close menu"
                    type="button"
                    className="grid flex-[0_0_40px] place-items-center rounded-full bg-control size-header-control basis-header-control"
                    tabIndex={0}
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                      fill="none"
                    >
                      <path
                        d="m5 5 6 6m0-6-6 6"
                        stroke="currentColor"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </button>
                </div>
                <nav
                  className="flex flex-col pt-2"
                  aria-label="Mobile navigation"
                  onClick={close}
                >
                  <Link
                    className="flex min-h-16 items-center justify-between border-t border-border hover:text-muted focus-visible:text-muted"
                    data-morph-reveal="true"
                    href="/yuko#shop"
                  >
                    {"Shop"}
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
                      ></path>
                    </svg>
                  </Link>
                  <Link
                    className="flex min-h-16 items-center justify-between border-t border-border hover:text-muted focus-visible:text-muted"
                    data-morph-reveal="true"
                    href="/yuko#science"
                  >
                    {"Science"}
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
                      ></path>
                    </svg>
                  </Link>
                  <Link
                    className="flex min-h-16 items-center justify-between border-t border-border hover:text-muted focus-visible:text-muted"
                    data-morph-reveal="true"
                    href="/yuko#about"
                  >
                    {"About"}
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
                      ></path>
                    </svg>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <nav
          className="hidden gap-2 min-[768px]:flex"
          aria-label="Main navigation"
        >
          <Link
            aria-current={isProduct ? "true" : undefined}
            className="yuko-shop-link inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-[13px] leading-4 whitespace-nowrap transition-colors duration-180 ease-[ease] motion-reduce:transition-none max-md:min-h-10 min-h-header-control bg-floating backdrop-blur-floating hover:bg-floating-hover"
            tabIndex={0}
            href="/yuko#shop"
          >
            {"Shop"}
          </Link>
          <Link
            className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-[13px] leading-4 whitespace-nowrap transition-colors duration-180 ease-[ease] motion-reduce:transition-none max-md:min-h-10 min-h-header-control bg-floating backdrop-blur-floating hover:bg-floating-hover"
            tabIndex={0}
            href="/yuko#science"
          >
            {"Science"}
          </Link>
          <Link
            className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-[13px] leading-4 whitespace-nowrap transition-colors duration-180 ease-[ease] motion-reduce:transition-none max-md:min-h-10 min-h-header-control bg-floating backdrop-blur-floating hover:bg-floating-hover"
            tabIndex={0}
            href="/yuko#about"
          >
            {"About"}
          </Link>
        </nav>
        <div
          className="group/panel relative isolate col-start-3 row-start-1 justify-self-end data-[open=true]:z-3"
          data-open={cartOpen}
          ref={cartRoot}
        >
          <button
            ref={cartTrigger}
            onClick={() => setOpenPanel("cart")}
            inert={cartOpen}
            aria-hidden={cartOpen}
            aria-expanded={cartOpen}
            aria-controls="cart-panel"
            aria-label={`Open cart, ${count} ${count === 1 ? "item" : "items"}`}
            type="button"
            className="group/trigger relative z-1 flex gap-1"
            tabIndex={0}
          >
            <span className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-[13px] leading-4 whitespace-nowrap transition-colors duration-180 ease-[ease] motion-reduce:transition-none min-h-header-control bg-floating backdrop-blur-floating group-hover/trigger:bg-floating-hover max-[360px]:px-3 max-md:min-h-8">
              {"Cart"}
            </span>
            <span
              className="inline-flex items-center justify-center gap-2 rounded-full py-2 text-[13px] leading-4 whitespace-nowrap transition-colors duration-180 ease-[ease] motion-reduce:transition-none min-h-header-control bg-floating backdrop-blur-floating group-hover/trigger:bg-floating-hover max-[360px]:px-3 max-md:min-h-8 min-w-8 px-3 tabular-nums md:min-w-[37px]"
              aria-live="polite"
            >
              <span>{count}</span>
            </span>
          </button>
          <div
            ref={cartShell}
            className="pointer-events-none absolute top-0 right-0 size-full overflow-hidden rounded-[20px] bg-transparent [transition:background_180ms_ease_450ms,box-shadow_300ms_ease] group-data-[open=true]/panel:pointer-events-auto group-data-[open=true]/panel:z-2 group-data-[open=true]/panel:bg-floating group-data-[open=true]/panel:backdrop-blur-floating group-data-[open=true]/panel:delay-0 group-data-[open=true]/panel:shadow-[0_8px_32px_#20202012] motion-reduce:transition-none"
          >
            <div className="invisible absolute inset-0 transition-[visibility] duration-0 delay-450 group-data-[open=true]/panel:visible group-data-[open=true]/panel:delay-0 motion-reduce:transition-none">
              <div
                ref={cartPanel}
                id="cart-panel"
                className="absolute top-0 right-0 flex max-h-[calc(100dvh-40px)] w-[calc(100vw-var(--page-gutter)*2)] flex-col gap-3 overflow-y-auto overscroll-contain p-6 [scrollbar-width:thin] md:max-h-[calc(100dvh-32px)] md:w-[min(384px,calc(100vw-var(--page-gutter)*2))]"
                role="dialog"
                aria-labelledby="cart-title"
                aria-hidden={!cartOpen}
                inert={!cartOpen}
              >
                <div
                  className="flex shrink-0 items-center justify-between gap-4"
                  data-morph-reveal="true"
                >
                  <h2
                    id="cart-title"
                    className="text-[15px] leading-6 tracking-normal"
                  >
                    {"Your cart"}
                  </h2>
                  <button
                    ref={cartCloseButton}
                    onClick={close}
                    aria-label="Close cart"
                    type="button"
                    className="grid flex-[0_0_40px] place-items-center rounded-full bg-control size-header-control basis-header-control"
                    tabIndex={0}
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                      fill="none"
                    >
                      <path
                        d="m5 5 6 6m0-6-6 6"
                        stroke="currentColor"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </button>
                </div>
                <CartContents close={close} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Link
        className="fixed top-5 left-1/2 z-19 flex w-max -translate-x-1/2 items-center justify-center gap-1.5 justify-self-center text-lg leading-8 tracking-[-0.03em] text-white mix-blend-difference max-[360px]:text-base md:top-4 md:gap-2 md:text-2xl"
        aria-label="YukoHealth home"
        href="/yuko#top"
      >
        <span
          className="relative block h-[16.58px] w-[16.288px] shrink-0 md:h-[20.725px] md:w-[20.36px]"
          aria-hidden="true"
        >
          <img
            alt=""
            loading="lazy"
            width="11"
            height="21"
            decoding="async"
            className="absolute top-0 h-[16.58px] w-[8.758px] invert md:h-[20.725px] md:w-[10.948px] left-0 -scale-y-100"
            src="/yuko-mark-half.svg"
          />
          <img
            alt=""
            loading="lazy"
            width="11"
            height="21"
            decoding="async"
            className="absolute top-0 h-[16.58px] w-[8.758px] invert md:h-[20.725px] md:w-[10.948px] left-[7.528px] rotate-180 md:left-[9.41px]"
            src="/yuko-mark-half.svg"
          />
        </span>
        <span>{"YukoHealth"}</span>
      </Link>
    </>
  );
}
