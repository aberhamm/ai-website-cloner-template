/* eslint-disable @next/next/no-img-element */
export function Visit() {
  return (
    <section id="visit" className="bg-muted">
      <div className="mx-auto w-full max-w-[1600px] px-gutter flex flex-col gap-12 py-20 max-tablet:py-16 max-mobile:gap-8 max-mobile:py-14">
        <h2>
          <span>{"See"}</span>
          {" "}
          <span>{"you"}</span>
          {" "}
          <span>{"in"}</span>
          {" "}
          <span>{"South"}</span>
          {" "}
          <span>{"Austin."}</span>
        </h2>
        <div className="grid grid-cols-[1fr_320px_320px] gap-20 max-compact:grid-cols-3 max-compact:gap-12 max-tablet:gap-6 max-mobile:grid-cols-1 max-mobile:gap-9">
          <div className="flex flex-col items-start gap-2">
            <address className="text-[13px]/5 not-italic max-mobile:text-[15px]/6">
              {"145 Westwood Avenue"}
              <br />
              {"Austin, TX 78704"}
            </address>
            <p className="text-[13px]/5 text-muted-foreground">{"Free parking behind the studio."}</p>
            <a href="https://www.google.com/maps/search/?api=1&query=145+Westwood+Avenue+Austin+TX+78704" target="_blank" rel="noreferrer" data-slot="button" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full border border-transparent text-sm/4 font-medium no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-mobile:min-h-9 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5] bg-control text-foreground not-disabled:hover:bg-control-hover not-disabled:focus-visible:bg-control-hover min-h-[34px] px-3 py-2 mt-4" tabIndex={0}>
              {"Get directions "}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div>
            <h3 className="mb-6 text-[15px]/6 font-semibold tracking-normal max-mobile:mb-4">{"Studio hours"}</h3>
            <dl className="flex flex-col gap-2 text-[13px]/5 max-mobile:text-[15px]/6">
              <div className="flex justify-between gap-4 max-tablet:flex-col max-tablet:gap-0 max-mobile:max-w-[360px] max-mobile:flex-row">
                <dt>{"Monday–Friday"}</dt>
                <dd>{"6:30 AM–8 PM"}</dd>
              </div>
              <div className="flex justify-between gap-4 max-tablet:flex-col max-tablet:gap-0 max-mobile:max-w-[360px] max-mobile:flex-row">
                <dt>{"Saturday"}</dt>
                <dd>{"8 AM–2 PM"}</dd>
              </div>
              <div className="flex justify-between gap-4 max-tablet:flex-col max-tablet:gap-0 max-mobile:max-w-[360px] max-mobile:flex-row">
                <dt>{"Sunday"}</dt>
                <dd>{"9 AM–1 PM"}</dd>
              </div>
            </dl>
          </div>
          <div>
            <h3 className="mb-6 text-[15px]/6 font-semibold tracking-normal max-mobile:mb-4">{"Say hello"}</h3>
            <div className="flex flex-col gap-2 text-[13px]/5 max-mobile:text-[15px]/6">
              <a className="wrap-anywhere underline-offset-4 hover:underline" href="mailto:hello@formapilates.example">{"hello@formapilates.example"}</a>
              <a className="wrap-anywhere underline-offset-4 hover:underline" href="tel:+15125550148">{"(512) 555-0148"}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
