/* eslint-disable @next/next/no-img-element */
export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[max(900px,calc(100svh-152px))] items-end bg-[#e2e9d2] max-tablet:min-h-[820px] max-mobile:min-h-[max(860px,calc(100svh+160px))] max-[361px]:min-h-[max(880px,calc(100svh+180px))]"
      aria-labelledby="hero-heading"
    >
      <img
        alt="A woman practicing Pilates in a softly sunlit studio"
        decoding="async"
        data-nimg="fill"
        className="hero-image -z-10 object-cover object-center max-mobile:object-[54%_30%]"
        sizes="100vw"
        src="/images/pilates-hero.png"
      />
      <div className="relative flex min-h-[450px] w-full items-end after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(180deg,#e2e9d200,#e2e9d2)] max-mobile:min-h-[510px] max-mobile:after:bg-[linear-gradient(180deg,#e2e9d200,#e2e9d2_75%)]">
        <div className="mx-auto w-full max-w-[1600px] px-gutter relative z-1 flex items-end justify-between gap-12 py-20 max-tablet:py-14 max-mobile:flex-col max-mobile:items-start max-mobile:gap-9 max-mobile:pt-20 max-mobile:pb-10">
          <div>
            <h1 id="hero-heading" className="max-mobile:text-[56px]/none">
              <span>{"Pilates,"}</span>
              <br />
              <span>{"redefined"}</span>
            </h1>
            <p className="mt-6 max-mobile:mt-5">
              <span>{"Small-group"}</span> <span>{"reformer"}</span>{" "}
              <span>{"Pilates."}</span>
              <br />
              <span>{"Right"}</span> <span>{"here"}</span> <span>{"in"}</span>{" "}
              <span>{"South"}</span> <span>{"Austin."}</span>
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 max-tablet:max-w-[330px] max-mobile:max-w-full max-mobile:gap-3">
            <h2 className="text-[28px]/9 font-normal tracking-[-0.03em] max-mobile:text-2xl/8">
              <span>{"3"}</span> <span>{"classes"}</span> <span>{"for"}</span>{" "}
              <span>{"$49"}</span>
            </h2>
            <div>
              <button
                data-slot="dialog-trigger"
                className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full border border-transparent text-sm/4 font-medium no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-mobile:min-h-9 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5] bg-sage text-foreground not-disabled:hover:bg-[#98b880] not-disabled:focus-visible:bg-[#98b880] min-h-[34px] px-3 py-2"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                data-state="closed"
                tabIndex={0}
              >
                {"Book a class"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <p className="text-[13px]/5 max-mobile:text-xs/5">
              <span>{"New"}</span> <span>{"clients"}</span>{" "}
              <span>{"only."}</span> <span>{"Use"}</span>{" "}
              <span>{"within"}</span> <span>{"21"}</span> <span>{"days."}</span>{" "}
              <span>{"No"}</span> <span>{"experience"}</span>{" "}
              <span>{"needed."}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
