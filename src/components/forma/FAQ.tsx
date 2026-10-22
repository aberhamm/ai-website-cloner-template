"use client";

import { useEffect, useState } from "react";

const questions = [
  {
    "id": "experience",
    "question": "Do I need Pilates experience?",
    "answer": "None at all. Start with Reformer Foundations.\nWe'll introduce you to the equipment and guide you through."
  },
  {
    "id": "bring",
    "question": "What should I bring?",
    "answer": "Bring water, grip socks, and comfortable clothes you can move in. We provide the reformer and all the equipment you'll need."
  },
  {
    "id": "arrival",
    "question": "When should I arrive?",
    "answer": "For your first class, arrive 10 minutes early so we can show you around and help you get comfortable on the reformer."
  },
  {
    "id": "cancellation",
    "question": "What if I need to cancel?",
    "answer": "Please cancel at least 12 hours before class so someone else can take your spot. Late cancellations and missed classes use a class credit. Check the terms at booking for your chosen class."
  },
  {
    "id": "private",
    "question": "Do you offer private sessions?",
    "answer": "Yes. Private sessions are 55 minutes of one-on-one instruction, shaped around you. Get in touch with the studio to find a time."
  },
  {
    "id": "intro",
    "question": "How does the intro offer work?",
    "answer": "3 classes for $49. New clients only. Use within 21 days. No experience needed.. Choose your first class to see the full offer details and terms before booking."
  }
];

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>("experience");

  useEffect(() => {
    let scrollFrame: number | undefined;
    const openCancellation = () => {
      setOpenId("cancellation");
      scrollFrame = window.requestAnimationFrame(() => {
        document.getElementById("cancellation")?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
          block: "center",
        });
      });
    };
    window.addEventListener("forma:faq-cancel", openCancellation);
    return () => {
      window.removeEventListener("forma:faq-cancel", openCancellation);
      if (scrollFrame !== undefined) window.cancelAnimationFrame(scrollFrame);
    };
  }, []);

  return (
    <section id="faq">
      <div className="mx-auto w-full max-w-[1600px] px-gutter grid min-h-[727px] grid-cols-[416px_minmax(0,1fr)] gap-20 py-section max-compact:grid-cols-[34%_1fr] max-compact:gap-12 max-tablet:min-h-[650px] max-tablet:grid-cols-[32%_1fr] max-tablet:gap-8 max-mobile:min-h-0 max-mobile:grid-cols-1 max-mobile:gap-9 max-mobile:py-16">
        <h2>
          <span>Before</span>{" "}<span>your</span>
          <br />
          <span>first</span>{" "}<span>class.</span>
        </h2>
        <div>
          <div data-slot="accordion" data-orientation="vertical">
            {questions.map(({ id, question, answer }) => {
              const isOpen = openId === id;
              const state = isOpen ? "open" : "closed";
              const triggerId = `faq-${id}-trigger`;
              const answerId = `faq-${id}-answer`;

              return (
                <div key={id} id={id} data-state={state} data-orientation="vertical" data-slot="accordion-item" className="border-b scroll-mt-8 border-border last:border-b">
                  <h3 data-orientation="vertical" data-state={state} className="flex">
                    <button
                      type="button"
                      id={triggerId}
                      aria-controls={answerId}
                      aria-expanded={isOpen}
                      data-state={state}
                      data-orientation="vertical"
                      data-slot="accordion-trigger"
                      className="flex flex-1 justify-between gap-4 text-left transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 group items-center rounded-none py-6 text-[17px]/6 font-medium hover:text-[#526c3d] hover:no-underline focus-visible:text-[#526c3d] focus-visible:no-underline max-mobile:py-4 max-mobile:text-base [&>svg]:hidden motion-reduce:transition-none"
                      onClick={() => setOpenId((current) => current === id ? null : id)}
                    >
                      {question}
                      <span className="relative size-5 shrink-0 before:absolute before:top-[5px] before:left-[5px] before:size-[9px] before:-rotate-45 before:border-r-[1.5px] before:border-b-[1.5px] before:border-current before:transition-transform before:duration-200 group-data-[state=open]:before:rotate-45 motion-reduce:before:transition-none" aria-hidden="true" />
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 motion-reduce:transition-none" aria-hidden="true">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </h3>
                  <div data-state={state} id={answerId} hidden={!isOpen} role="region" aria-labelledby={triggerId} data-orientation="vertical" data-slot="accordion-content" className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down motion-reduce:animate-none">
                    <div className="pt-0 pb-6 whitespace-pre-line text-[15px]/6 text-muted-foreground">{answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
