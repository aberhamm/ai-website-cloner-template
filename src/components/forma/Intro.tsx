/* eslint-disable @next/next/no-img-element */
export function Intro() {
  return (
    <section className="bg-sage">
      <div className="mx-auto w-full max-w-[1600px] px-gutter flex items-end justify-between gap-10 py-20 max-tablet:py-16 max-mobile:flex-col max-mobile:items-start max-mobile:gap-8 max-mobile:py-14">
        <div>
          <h2 className="whitespace-pre-line">
            <span>{"Your"}</span>
            {" "}
            <span>{"first"}</span>
            {" "}
            <span>{"three."}</span>
            {"\n"}
            <span>{"A"}</span>
            {" "}
            <span>{"stronger"}</span>
            {" "}
            <span>{"start."}</span>
          </h2>
          <p className="mt-6 text-[28px]/9 tracking-[-0.03em] max-mobile:text-2xl/8">
            <span>{"3"}</span>
            {" "}
            <span>{"classes"}</span>
            {" "}
            <span>{"for"}</span>
            {" "}
            <span>{"$49"}</span>
          </p>
        </div>
        <div className="flex flex-col items-end gap-4 max-mobile:items-start max-mobile:gap-3">
          <button data-slot="dialog-trigger" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full border border-transparent text-sm/4 font-medium no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-mobile:min-h-9 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5] bg-primary text-primary-foreground not-disabled:hover:bg-[#343b30] not-disabled:focus-visible:bg-[#343b30] min-h-[34px] px-3 py-2 max-mobile:px-6" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed" tabIndex={0}>
            {"Book your first class"}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
          <p className="text-[13px]/5">{"New clients only"}</p>
        </div>
      </div>
    </section>
  );
}
