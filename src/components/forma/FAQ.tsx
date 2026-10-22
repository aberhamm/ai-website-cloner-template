/* eslint-disable @next/next/no-img-element */
export function FAQ() {
  return (
    <section id="faq">
      <div className="mx-auto w-full max-w-[1600px] px-gutter grid min-h-[727px] grid-cols-[416px_minmax(0,1fr)] gap-20 py-section max-compact:grid-cols-[34%_1fr] max-compact:gap-12 max-tablet:min-h-[650px] max-tablet:grid-cols-[32%_1fr] max-tablet:gap-8 max-mobile:min-h-0 max-mobile:grid-cols-1 max-mobile:gap-9 max-mobile:py-16">
        <h2>
          <span>{"Before"}</span>
          {" "}
          <span>{"your"}</span>
          <br />
          <span>{"first"}</span>
          {" "}
          <span>{"class."}</span>
        </h2>
        <div>
          <div data-slot="accordion" data-orientation="vertical">
            <div data-state="open" data-orientation="vertical" data-slot="accordion-item" className="border-b scroll-mt-8 border-border last:border-b" id="experience">
              <h3 data-orientation="vertical" data-state="open" className="flex">
                <button type="button" aria-controls="radix-_R_4qbavb_" aria-expanded="true" data-state="open" data-orientation="vertical" id="radix-_R_qbavb_" data-slot="accordion-trigger" className="flex flex-1 justify-between gap-4 text-left transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 group items-center rounded-none py-6 text-[17px]/6 font-medium hover:text-[#526c3d] hover:no-underline focus-visible:text-[#526c3d] focus-visible:no-underline max-mobile:py-4 max-mobile:text-base [&>svg]:hidden" data-radix-collection-item="">
                  {"Do I need Pilates experience?"}
                  <span className="relative size-5 shrink-0 before:absolute before:top-[5px] before:left-[5px] before:size-[9px] before:-rotate-45 before:border-r-[1.5px] before:border-b-[1.5px] before:border-current before:transition-transform before:duration-200 group-data-[state=open]:before:rotate-45" aria-hidden="true"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div data-state="open" id="radix-_R_4qbavb_" role="region" aria-labelledby="radix-_R_qbavb_" data-orientation="vertical" data-slot="accordion-content" className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="pt-0 pb-6 whitespace-pre-line text-[15px]/6 text-muted-foreground">{"None at all. Start with Reformer Foundations.\nWe'll introduce you to the equipment and guide you through."}</div>
              </div>
            </div>
            <div data-state="closed" data-orientation="vertical" data-slot="accordion-item" className="border-b scroll-mt-8 border-border last:border-b" id="bring">
              <h3 data-orientation="vertical" data-state="closed" className="flex">
                <button type="button" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-_R_1abavb_" data-slot="accordion-trigger" className="flex flex-1 justify-between gap-4 text-left transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 group items-center rounded-none py-6 text-[17px]/6 font-medium hover:text-[#526c3d] hover:no-underline focus-visible:text-[#526c3d] focus-visible:no-underline max-mobile:py-4 max-mobile:text-base [&>svg]:hidden" data-radix-collection-item="">
                  {"What should I bring?"}
                  <span className="relative size-5 shrink-0 before:absolute before:top-[5px] before:left-[5px] before:size-[9px] before:-rotate-45 before:border-r-[1.5px] before:border-b-[1.5px] before:border-current before:transition-transform before:duration-200 group-data-[state=open]:before:rotate-45" aria-hidden="true"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div data-state="closed" id="radix-_R_5abavb_" hidden={true} role="region" aria-labelledby="radix-_R_1abavb_" data-orientation="vertical" data-slot="accordion-content" className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"></div>
            </div>
            <div data-state="closed" data-orientation="vertical" data-slot="accordion-item" className="border-b scroll-mt-8 border-border last:border-b" id="arrival">
              <h3 data-orientation="vertical" data-state="closed" className="flex">
                <button type="button" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-_R_1qbavb_" data-slot="accordion-trigger" className="flex flex-1 justify-between gap-4 text-left transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 group items-center rounded-none py-6 text-[17px]/6 font-medium hover:text-[#526c3d] hover:no-underline focus-visible:text-[#526c3d] focus-visible:no-underline max-mobile:py-4 max-mobile:text-base [&>svg]:hidden" data-radix-collection-item="">
                  {"When should I arrive?"}
                  <span className="relative size-5 shrink-0 before:absolute before:top-[5px] before:left-[5px] before:size-[9px] before:-rotate-45 before:border-r-[1.5px] before:border-b-[1.5px] before:border-current before:transition-transform before:duration-200 group-data-[state=open]:before:rotate-45" aria-hidden="true"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div data-state="closed" id="radix-_R_5qbavb_" hidden={true} role="region" aria-labelledby="radix-_R_1qbavb_" data-orientation="vertical" data-slot="accordion-content" className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"></div>
            </div>
            <div data-state="closed" data-orientation="vertical" data-slot="accordion-item" className="border-b scroll-mt-8 border-border last:border-b" id="cancellation">
              <h3 data-orientation="vertical" data-state="closed" className="flex">
                <button type="button" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-_R_2abavb_" data-slot="accordion-trigger" className="flex flex-1 justify-between gap-4 text-left transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 group items-center rounded-none py-6 text-[17px]/6 font-medium hover:text-[#526c3d] hover:no-underline focus-visible:text-[#526c3d] focus-visible:no-underline max-mobile:py-4 max-mobile:text-base [&>svg]:hidden" data-radix-collection-item="">
                  {"What if I need to cancel?"}
                  <span className="relative size-5 shrink-0 before:absolute before:top-[5px] before:left-[5px] before:size-[9px] before:-rotate-45 before:border-r-[1.5px] before:border-b-[1.5px] before:border-current before:transition-transform before:duration-200 group-data-[state=open]:before:rotate-45" aria-hidden="true"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div data-state="closed" id="radix-_R_6abavb_" hidden={true} role="region" aria-labelledby="radix-_R_2abavb_" data-orientation="vertical" data-slot="accordion-content" className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"></div>
            </div>
            <div data-state="closed" data-orientation="vertical" data-slot="accordion-item" className="border-b scroll-mt-8 border-border last:border-b" id="private">
              <h3 data-orientation="vertical" data-state="closed" className="flex">
                <button type="button" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-_R_2qbavb_" data-slot="accordion-trigger" className="flex flex-1 justify-between gap-4 text-left transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 group items-center rounded-none py-6 text-[17px]/6 font-medium hover:text-[#526c3d] hover:no-underline focus-visible:text-[#526c3d] focus-visible:no-underline max-mobile:py-4 max-mobile:text-base [&>svg]:hidden" data-radix-collection-item="">
                  {"Do you offer private sessions?"}
                  <span className="relative size-5 shrink-0 before:absolute before:top-[5px] before:left-[5px] before:size-[9px] before:-rotate-45 before:border-r-[1.5px] before:border-b-[1.5px] before:border-current before:transition-transform before:duration-200 group-data-[state=open]:before:rotate-45" aria-hidden="true"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div data-state="closed" id="radix-_R_6qbavb_" hidden={true} role="region" aria-labelledby="radix-_R_2qbavb_" data-orientation="vertical" data-slot="accordion-content" className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"></div>
            </div>
            <div data-state="closed" data-orientation="vertical" data-slot="accordion-item" className="border-b scroll-mt-8 border-border last:border-b" id="intro">
              <h3 data-orientation="vertical" data-state="closed" className="flex">
                <button type="button" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-_R_3abavb_" data-slot="accordion-trigger" className="flex flex-1 justify-between gap-4 text-left transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 group items-center rounded-none py-6 text-[17px]/6 font-medium hover:text-[#526c3d] hover:no-underline focus-visible:text-[#526c3d] focus-visible:no-underline max-mobile:py-4 max-mobile:text-base [&>svg]:hidden" data-radix-collection-item="">
                  {"How does the intro offer work?"}
                  <span className="relative size-5 shrink-0 before:absolute before:top-[5px] before:left-[5px] before:size-[9px] before:-rotate-45 before:border-r-[1.5px] before:border-b-[1.5px] before:border-current before:transition-transform before:duration-200 group-data-[state=open]:before:rotate-45" aria-hidden="true"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </h3>
              <div data-state="closed" id="radix-_R_7abavb_" hidden={true} role="region" aria-labelledby="radix-_R_3abavb_" data-orientation="vertical" data-slot="accordion-content" className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
