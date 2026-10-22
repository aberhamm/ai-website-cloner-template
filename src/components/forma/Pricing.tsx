"use client";

import type { PointerEvent } from "react";
import type { StudioDialog } from "@/types/forma";

function resetCard(event: PointerEvent<HTMLDivElement>) {
  const card = event.currentTarget.querySelector<HTMLElement>(".membership-card-object");
  if (!card) return;
  for (const property of ["--card-x", "--card-y", "--card-lift", "--shine-x", "--shine-y"]) {
    card.style.removeProperty(property);
  }
}

function tiltCard(event: PointerEvent<HTMLDivElement>) {
  if (
    event.pointerType === "touch" ||
    window.matchMedia("(prefers-reduced-motion: reduce), (hover: none), (pointer: coarse)").matches
  ) {
    resetCard(event);
    return;
  }

  const card = event.currentTarget.querySelector<HTMLElement>(".membership-card-object");
  if (!card) return;
  const bounds = event.currentTarget.getBoundingClientRect();
  const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
  const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
  card.style.setProperty("--card-x", `${(x - 0.5) * 16}deg`);
  card.style.setProperty("--card-y", `${(0.5 - y) * 16}deg`);
  card.style.setProperty("--card-lift", "1");
  card.style.setProperty("--shine-x", `${x * 100}%`);
  card.style.setProperty("--shine-y", `${y * 100}%`);
}

function choosePlan(title: string, subtitle: string) {
  window.dispatchEvent(new CustomEvent<StudioDialog>("forma:dialog", {
    detail: {
      title,
      subtitle,
      description: "Contact the studio to choose this class option.",
      action: "Contact the studio",
    },
  }));
}

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto w-full max-w-[1600px] px-gutter flex flex-col gap-10 pb-section max-mobile:gap-8">
      <div className="flex flex-col gap-4">
        <h2>
          <span>{"Make"}</span>
          {" "}
          <span>{"it"}</span>
          {" "}
          <span>{"a"}</span>
          {" "}
          <span>{"practice."}</span>
        </h2>
        <p className="text-muted-foreground">
          <span>{"One"}</span>
          {" "}
          <span>{"class"}</span>
          {" "}
          <span>{"or"}</span>
          {" "}
          <span>{"a"}</span>
          {" "}
          <span>{"regular"}</span>
          {" "}
          <span>{"rhythm."}</span>
          <br />
          <span>{"Find"}</span>
          {" "}
          <span>{"the"}</span>
          {" "}
          <span>{"option"}</span>
          {" "}
          <span>{"that"}</span>
          {" "}
          <span>{"fits"}</span>
          {" "}
          <span>{"you."}</span>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 max-tablet:grid-cols-1 max-tablet:gap-5 max-mobile:mx-auto max-mobile:w-full max-mobile:max-w-[480px] max-mobile:gap-6">
        <article data-slot="price-card" className="group flex min-w-0 flex-col gap-8 rounded-lg p-7 max-compact:p-[22px] max-tablet:grid max-tablet:grid-cols-2 max-tablet:items-center max-tablet:gap-10 max-tablet:p-8 max-mobile:flex max-mobile:items-stretch max-mobile:gap-7 max-mobile:p-5 bg-[#f6f6f3]">
          <div className="membership-card" aria-hidden="true" onPointerMove={tiltCard} onPointerLeave={resetCard} onPointerCancel={resetCard}>
            <div className="membership-card-object ">
              <div className="membership-card-edge"></div>
              <div className="membership-card-face">
                <span className="brand-mark membership-card-emblem" aria-hidden="true"></span>
                <div className="membership-card-grain"></div>
                <div className="membership-card-content">
                  <span className="inline-flex items-center gap-3 text-[28px]/9 font-semibold tracking-[-0.05em] max-mobile:gap-1.5 max-mobile:text-[26px] max-[361px]:text-2xl/9 membership-card-brand">
                    <span className="brand-mark" aria-hidden="true"></span>
                    <span>{"forma"}</span>
                  </span>
                  <span className="membership-card-contactless" aria-hidden="true"></span>
                  <div className="flex w-full items-center justify-between gap-2.5">
                    <div className="flex min-w-0 flex-col gap-[1.6cqw]">
                      <span className="line-clamp-2 wrap-anywhere text-[6.1cqw]/[1.15] font-medium tracking-[-0.035em]">{"Drop-in"}</span>
                      <span className="membership-card-location">
                        <span>{"Pilates"}</span>
                        <span>{"South Austin"}</span>
                      </span>
                    </div>
                    <span className="membership-card-chip">
                      <svg viewBox="0 0 132 176" fill="none" aria-hidden="true">
                        <path d="M32 0v40c0 4 2 7 5 10l12 8h34l12-8c3-3 5-6 5-10V0M66 0v60M49 58c4 3 4 8-2 12H0M83 58c-4 3-4 8 2 12h47"></path>
                        <path d="M32 68v42m68-42v42"></path>
                        <path d="M32 176v-40c0-4 2-7 5-10l12-8h34l12 8c3 3 5 6 5 10v40M66 116v60M49 118c4-3 4-7-2-10H0M83 118c-4-3-4-7 2-10h47"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="membership-card-reflection"></div>
              </div>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-6 max-tablet:gap-5">
            <h3 className="text-2xl/8 max-tablet:text-xl/7 max-mobile:text-2xl/8">{"Drop-in"}</h3>
            <p className="flex flex-wrap items-baseline gap-2">
              <strong className="text-5xl/12 font-medium tracking-[-0.04em] max-tablet:text-[40px]/10 max-mobile:text-5xl/12">{"$32"}</strong>
              <span className="text-muted-foreground group-data-[featured=true]:text-[#26331e] max-tablet:text-[13px] max-mobile:text-[15px]">{"/ "}{"one class"}</span>
            </p>
            <p className="mt-auto text-muted-foreground group-data-[featured=true]:text-[#26331e]">
              {"One reformer class."}
              <br className="max-mobile:hidden" />
              {" "}
              {"A little room for movement."}
            </p>
            <button data-slot="dialog-trigger" className="inline-flex shrink-0 items-center gap-3 rounded-full border border-transparent text-sm/4 font-medium no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-mobile:min-h-9 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5] bg-control text-foreground not-disabled:hover:bg-control-hover not-disabled:focus-visible:bg-control-hover py-2 min-h-11 w-full justify-between px-4 max-tablet:gap-1.5 max-tablet:text-[13px] max-mobile:text-sm/4" onClick={() => choosePlan("Drop-in", "$32 · one class")} type="button" aria-haspopup="dialog">
              {"Book a class"}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </article>
        <article data-slot="price-card" className="group flex min-w-0 flex-col gap-8 rounded-lg p-7 max-compact:p-[22px] max-tablet:grid max-tablet:grid-cols-2 max-tablet:items-center max-tablet:gap-10 max-tablet:p-8 max-mobile:flex max-mobile:items-stretch max-mobile:gap-7 max-mobile:p-5 bg-[#f6f6f3]">
          <div className="membership-card" aria-hidden="true" onPointerMove={tiltCard} onPointerLeave={resetCard} onPointerCancel={resetCard}>
            <div className="membership-card-object membership-card-sage">
              <div className="membership-card-edge"></div>
              <div className="membership-card-face">
                <span className="brand-mark membership-card-emblem" aria-hidden="true"></span>
                <div className="membership-card-grain"></div>
                <div className="membership-card-content">
                  <span className="inline-flex items-center gap-3 text-[28px]/9 font-semibold tracking-[-0.05em] max-mobile:gap-1.5 max-mobile:text-[26px] max-[361px]:text-2xl/9 membership-card-brand">
                    <span className="brand-mark" aria-hidden="true"></span>
                    <span>{"forma"}</span>
                  </span>
                  <span className="membership-card-contactless" aria-hidden="true"></span>
                  <div className="flex w-full items-center justify-between gap-2.5">
                    <div className="flex min-w-0 flex-col gap-[1.6cqw]">
                      <span className="line-clamp-2 wrap-anywhere text-[6.1cqw]/[1.15] font-medium tracking-[-0.035em]">{"4 classes"}</span>
                      <span className="membership-card-location">
                        <span>{"Pilates"}</span>
                        <span>{"South Austin"}</span>
                      </span>
                    </div>
                    <span className="membership-card-chip">
                      <svg viewBox="0 0 132 176" fill="none" aria-hidden="true">
                        <path d="M32 0v40c0 4 2 7 5 10l12 8h34l12-8c3-3 5-6 5-10V0M66 0v60M49 58c4 3 4 8-2 12H0M83 58c-4 3-4 8 2 12h47"></path>
                        <path d="M32 68v42m68-42v42"></path>
                        <path d="M32 176v-40c0-4 2-7 5-10l12-8h34l12 8c3 3 5 6 5 10v40M66 116v60M49 118c4-3 4-7-2-10H0M83 118c-4-3-4-7 2-10h47"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="membership-card-reflection"></div>
              </div>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-6 max-tablet:gap-5">
            <h3 className="text-2xl/8 max-tablet:text-xl/7 max-mobile:text-2xl/8">{"4 classes"}</h3>
            <p className="flex flex-wrap items-baseline gap-2">
              <strong className="text-5xl/12 font-medium tracking-[-0.04em] max-tablet:text-[40px]/10 max-mobile:text-5xl/12">{"$109"}</strong>
              <span className="text-muted-foreground group-data-[featured=true]:text-[#26331e] max-tablet:text-[13px] max-mobile:text-[15px]">{"/ "}{"month"}</span>
            </p>
            <p className="mt-auto text-muted-foreground group-data-[featured=true]:text-[#26331e]">
              {"4 reformer classes each month."}
              <br className="max-mobile:hidden" />
              {" "}
              {"Make movement a weekly ritual."}
            </p>
            <button data-slot="dialog-trigger" className="inline-flex shrink-0 items-center gap-3 rounded-full border border-transparent text-sm/4 font-medium no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-mobile:min-h-9 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5] bg-control text-foreground not-disabled:hover:bg-control-hover not-disabled:focus-visible:bg-control-hover py-2 min-h-11 w-full justify-between px-4 max-tablet:gap-1.5 max-tablet:text-[13px] max-mobile:text-sm/4" onClick={() => choosePlan("4 classes", "$109 · month")} type="button" aria-haspopup="dialog">
              {"Choose 4 classes"}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </article>
        <article data-slot="price-card" data-featured="true" className="group flex min-w-0 flex-col gap-8 rounded-lg p-7 max-compact:p-[22px] max-tablet:grid max-tablet:grid-cols-2 max-tablet:items-center max-tablet:gap-10 max-tablet:p-8 max-mobile:flex max-mobile:items-stretch max-mobile:gap-7 max-mobile:p-5 bg-[#edf1e8]">
          <div className="membership-card" aria-hidden="true" onPointerMove={tiltCard} onPointerLeave={resetCard} onPointerCancel={resetCard}>
            <div className="membership-card-object membership-card-obsidian">
              <div className="membership-card-edge"></div>
              <div className="membership-card-face">
                <span className="brand-mark membership-card-emblem" aria-hidden="true"></span>
                <div className="membership-card-grain"></div>
                <div className="membership-card-content">
                  <span className="inline-flex items-center gap-3 text-[28px]/9 font-semibold tracking-[-0.05em] max-mobile:gap-1.5 max-mobile:text-[26px] max-[361px]:text-2xl/9 membership-card-brand">
                    <span className="brand-mark" aria-hidden="true"></span>
                    <span>{"forma"}</span>
                  </span>
                  <span className="membership-card-contactless" aria-hidden="true"></span>
                  <div className="flex w-full items-center justify-between gap-2.5">
                    <div className="flex min-w-0 flex-col gap-[1.6cqw]">
                      <span className="line-clamp-2 wrap-anywhere text-[6.1cqw]/[1.15] font-medium tracking-[-0.035em]">{"8 classes"}</span>
                      <span className="membership-card-location">
                        <span>{"Pilates"}</span>
                        <span>{"South Austin"}</span>
                      </span>
                    </div>
                    <span className="membership-card-chip">
                      <svg viewBox="0 0 132 176" fill="none" aria-hidden="true">
                        <path d="M32 0v40c0 4 2 7 5 10l12 8h34l12-8c3-3 5-6 5-10V0M66 0v60M49 58c4 3 4 8-2 12H0M83 58c-4 3-4 8 2 12h47"></path>
                        <path d="M32 68v42m68-42v42"></path>
                        <path d="M32 176v-40c0-4 2-7 5-10l12-8h34l12 8c3 3 5 6 5 10v40M66 116v60M49 118c4-3 4-7-2-10H0M83 118c-4-3-4-7 2-10h47"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="membership-card-reflection"></div>
              </div>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-6 max-tablet:gap-5">
            <h3 className="text-2xl/8 max-tablet:text-xl/7 max-mobile:text-2xl/8">{"8 classes"}</h3>
            <p className="flex flex-wrap items-baseline gap-2">
              <strong className="text-5xl/12 font-medium tracking-[-0.04em] max-tablet:text-[40px]/10 max-mobile:text-5xl/12">{"$189"}</strong>
              <span className="text-muted-foreground group-data-[featured=true]:text-[#26331e] max-tablet:text-[13px] max-mobile:text-[15px]">{"/ "}{"month"}</span>
            </p>
            <p className="mt-auto text-muted-foreground group-data-[featured=true]:text-[#26331e]">
              {"8 reformer classes each month."}
              <br className="max-mobile:hidden" />
              {" "}
              {"Keep showing up for yourself."}
            </p>
            <button data-slot="dialog-trigger" className="inline-flex shrink-0 items-center gap-3 rounded-full border border-transparent text-sm/4 font-medium no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-mobile:min-h-9 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5] bg-primary text-primary-foreground not-disabled:hover:bg-[#343b30] not-disabled:focus-visible:bg-[#343b30] py-2 min-h-11 w-full justify-between px-4 max-tablet:gap-1.5 max-tablet:text-[13px] max-mobile:text-sm/4" onClick={() => choosePlan("8 classes", "$189 · month")} type="button" aria-haspopup="dialog">
              {"Choose 8 classes"}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
