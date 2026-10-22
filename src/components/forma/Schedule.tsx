/* eslint-disable @next/next/no-img-element */
export function Schedule() {
  return (
    <section id="schedule" className="mx-auto w-full max-w-[1600px] px-gutter flex flex-col gap-10 py-section max-mobile:gap-8">
      <h2>
        <span>{"Upcoming"}</span>
        {" "}
        <span>{"classes"}</span>
      </h2>
      <div className="flex flex-col gap-6" aria-busy="false">
        <div className="flex items-center justify-between gap-6 max-tablet:flex-col max-tablet:items-start max-mobile:gap-5">
          <div className="flex items-center gap-6 max-mobile:w-full max-mobile:flex-wrap max-mobile:justify-between max-mobile:gap-3">
            <h3 className="whitespace-nowrap max-mobile:text-[23px]/8 max-[361px]:text-[21px]" torph-root="">
              <span torph-sr="">{"Oct 19–25"}</span>
              <span torph-item="" torph-id="Oct~0" aria-hidden="true">{"O"}</span>
              <span torph-item="" torph-id="Oct~1" aria-hidden="true">{"c"}</span>
              <span torph-item="" torph-id="Oct~2" aria-hidden="true">{"t"}</span>
              <span torph-item="" torph-id="space-3" aria-hidden="true">{" "}</span>
              <span torph-item="" torph-id="19–25" aria-hidden="true">{"19–25"}</span>
            </h3>
            <div className="flex shrink-0 gap-2 max-mobile:gap-1">
              <button data-slot="button" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full border border-transparent text-sm/4 font-medium no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-mobile:min-h-9 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5] text-foreground not-disabled:hover:bg-control-hover not-disabled:focus-visible:bg-control-hover size-9 p-2 bg-muted" aria-label="Previous week" tabIndex={0}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left" aria-hidden="true">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
              </button>
              <button data-slot="button" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full border border-transparent text-sm/4 font-medium no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-mobile:min-h-9 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5] text-foreground not-disabled:hover:bg-control-hover not-disabled:focus-visible:bg-control-hover size-9 p-2 bg-muted" aria-label="Next week" tabIndex={0}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex gap-4 max-tablet:w-full max-mobile:gap-2">
            <button type="button" role="combobox" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-slot="select-trigger" data-size="default" className="rounded-full border-0 bg-muted px-3 py-2 text-[13px] text-foreground outline-none transition-colors duration-200 not-disabled:hover:bg-control-hover not-disabled:focus-visible:bg-control-hover not-disabled:data-[state=open]:bg-control-hover aria-invalid:border aria-invalid:border-[#b42318] [&>svg]:transition-transform [&>svg]:duration-200 data-[state=open]:[&>svg]:rotate-180 flex w-fit items-center justify-between gap-2 whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 max-w-[230px] max-tablet:max-w-none max-mobile:min-h-11 max-mobile:w-[calc(50%-4px)] max-mobile:text-xs" aria-label="Filter by class">
              <span data-slot="select-value">{"All classes"}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down size-4 opacity-50" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <button type="button" role="combobox" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-slot="select-trigger" data-size="default" className="rounded-full border-0 bg-muted px-3 py-2 text-[13px] text-foreground outline-none transition-colors duration-200 not-disabled:hover:bg-control-hover not-disabled:focus-visible:bg-control-hover not-disabled:data-[state=open]:bg-control-hover aria-invalid:border aria-invalid:border-[#b42318] [&>svg]:transition-transform [&>svg]:duration-200 data-[state=open]:[&>svg]:rotate-180 flex w-fit items-center justify-between gap-2 whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 max-w-[230px] max-tablet:max-w-none max-mobile:min-h-11 max-mobile:w-[calc(50%-4px)] max-mobile:text-xs" aria-label="Filter by instructor">
              <span data-slot="select-value">{"All instructors"}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down size-4 opacity-50" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="min-w-0 max-mobile:overflow-x-auto max-mobile:overscroll-x-contain max-mobile:[scrollbar-width:none] max-mobile:[mask-image:linear-gradient(to_right,#000_0%,#000_calc(100%-24px),transparent_100%)] max-mobile:[&::-webkit-scrollbar]:hidden">
          <fieldset className="relative isolate grid grid-cols-7 rounded-2xl bg-muted max-mobile:w-max max-mobile:grid-cols-[repeat(7,72px)] max-mobile:rounded-xl" aria-label="Choose a class date">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-1 w-[calc(100%/7)] rounded-xl bg-sage max-mobile:w-[72px]" aria-hidden="true"></div>
            <button type="button" className="flex min-w-0 items-center justify-center gap-2 rounded-xl border-0 bg-transparent px-2.5 py-[22px] transition-colors duration-200 hover:not-aria-pressed:bg-[#e8ecdf] max-mobile:flex-col max-mobile:gap-1 max-mobile:px-2 max-mobile:py-3.5" data-date="2026-10-19" aria-pressed="false" aria-label="Mon, 2026-10-19">
              <span className="relative z-2 text-[13px]/5 max-mobile:text-[11px]/4">{"Mon"}</span>
              <span className="relative z-2 text-[28px]/9 tracking-[-0.03em] max-mobile:text-2xl/7">{"19"}</span>
            </button>
            <button type="button" className="flex min-w-0 items-center justify-center gap-2 rounded-xl border-0 bg-transparent px-2.5 py-[22px] transition-colors duration-200 hover:not-aria-pressed:bg-[#e8ecdf] max-mobile:flex-col max-mobile:gap-1 max-mobile:px-2 max-mobile:py-3.5" data-date="2026-10-20" aria-pressed="false" aria-label="Tue, 2026-10-20">
              <span className="relative z-2 text-[13px]/5 max-mobile:text-[11px]/4">{"Tue"}</span>
              <span className="relative z-2 text-[28px]/9 tracking-[-0.03em] max-mobile:text-2xl/7">{"20"}</span>
            </button>
            <button type="button" className="flex min-w-0 items-center justify-center gap-2 rounded-xl border-0 bg-transparent px-2.5 py-[22px] transition-colors duration-200 hover:not-aria-pressed:bg-[#e8ecdf] max-mobile:flex-col max-mobile:gap-1 max-mobile:px-2 max-mobile:py-3.5" data-date="2026-10-21" aria-pressed="false" aria-label="Wed, 2026-10-21">
              <span className="relative z-2 text-[13px]/5 max-mobile:text-[11px]/4">{"Wed"}</span>
              <span className="relative z-2 text-[28px]/9 tracking-[-0.03em] max-mobile:text-2xl/7">{"21"}</span>
            </button>
            <button type="button" className="flex min-w-0 items-center justify-center gap-2 rounded-xl border-0 bg-transparent px-2.5 py-[22px] transition-colors duration-200 hover:not-aria-pressed:bg-[#e8ecdf] max-mobile:flex-col max-mobile:gap-1 max-mobile:px-2 max-mobile:py-3.5" data-date="2026-10-22" aria-pressed="true" aria-label="Thu, 2026-10-22">
              <span className="relative z-2 text-[13px]/5 max-mobile:text-[11px]/4">{"Thu"}</span>
              <span className="relative z-2 text-[28px]/9 tracking-[-0.03em] max-mobile:text-2xl/7">{"22"}</span>
            </button>
            <button type="button" className="flex min-w-0 items-center justify-center gap-2 rounded-xl border-0 bg-transparent px-2.5 py-[22px] transition-colors duration-200 hover:not-aria-pressed:bg-[#e8ecdf] max-mobile:flex-col max-mobile:gap-1 max-mobile:px-2 max-mobile:py-3.5" data-date="2026-10-23" aria-pressed="false" aria-label="Fri, 2026-10-23">
              <span className="relative z-2 text-[13px]/5 max-mobile:text-[11px]/4">{"Fri"}</span>
              <span className="relative z-2 text-[28px]/9 tracking-[-0.03em] max-mobile:text-2xl/7">{"23"}</span>
            </button>
            <button type="button" className="flex min-w-0 items-center justify-center gap-2 rounded-xl border-0 bg-transparent px-2.5 py-[22px] transition-colors duration-200 hover:not-aria-pressed:bg-[#e8ecdf] max-mobile:flex-col max-mobile:gap-1 max-mobile:px-2 max-mobile:py-3.5" data-date="2026-10-24" aria-pressed="false" aria-label="Sat, 2026-10-24">
              <span className="relative z-2 text-[13px]/5 max-mobile:text-[11px]/4">{"Sat"}</span>
              <span className="relative z-2 text-[28px]/9 tracking-[-0.03em] max-mobile:text-2xl/7">{"24"}</span>
            </button>
            <button type="button" className="flex min-w-0 items-center justify-center gap-2 rounded-xl border-0 bg-transparent px-2.5 py-[22px] transition-colors duration-200 hover:not-aria-pressed:bg-[#e8ecdf] max-mobile:flex-col max-mobile:gap-1 max-mobile:px-2 max-mobile:py-3.5" data-date="2026-10-25" aria-pressed="false" aria-label="Sun, 2026-10-25">
              <span className="relative z-2 text-[13px]/5 max-mobile:text-[11px]/4">{"Sun"}</span>
              <span className="relative z-2 text-[28px]/9 tracking-[-0.03em] max-mobile:text-2xl/7">{"25"}</span>
            </button>
          </fieldset>
        </div>
        <div className="mt-4 overflow-hidden max-mobile:mt-1" aria-live="polite">
          <div>
            <div className="grid grid-cols-[112px_minmax(160px,1fr)_160px_64px_112px_136px] items-center gap-8 border-b border-border py-4 text-[13px]/5 text-muted-foreground max-compact:grid-cols-[90px_minmax(130px,1fr)_140px_54px_94px_136px] max-compact:gap-4 max-tablet:grid-cols-[75px_minmax(120px,1fr)_120px_52px_80px_128px] max-tablet:gap-3 max-mobile:hidden" aria-hidden="true">
              <span>{"Time"}</span>
              <span>{"Class"}</span>
              <span>{"Instructor"}</span>
              <span>{"Length"}</span>
              <span>{"Availability"}</span>
              <span></span>
            </div>
            <article className="grid min-h-[68px] grid-cols-[112px_minmax(160px,1fr)_160px_64px_112px_136px] items-center gap-8 border-b border-border py-4 text-[15px]/6 last:border-b-0 max-compact:grid-cols-[90px_minmax(130px,1fr)_140px_54px_94px_136px] max-compact:gap-4 max-tablet:grid-cols-[75px_minmax(120px,1fr)_120px_52px_80px_128px] max-tablet:gap-3 max-tablet:text-[13px] max-mobile:grid-cols-[1fr_auto] max-mobile:gap-x-4 max-mobile:gap-y-1 max-mobile:py-6 max-mobile:text-[15px]">
              <time className="max-mobile:col-start-1 max-mobile:text-[13px]/5 max-mobile:text-muted-foreground" dateTime="2026-10-22T06:30">{"6:30 AM"}</time>
              <h4 className="text-inherit font-normal max-mobile:col-start-1 max-mobile:row-start-2 max-mobile:text-xl/7 max-mobile:tracking-[-0.025em] max-[361px]:text-lg">{"Reformer Flow"}</h4>
              <span className="max-mobile:col-start-1 max-mobile:row-start-3 max-mobile:-mt-1 max-mobile:text-[13px] max-mobile:text-muted-foreground">
                <span className="hidden max-mobile:inline">{"with "}</span>
                {"Maya Bennett"}
              </span>
              <span className="text-[13px] text-muted-foreground max-mobile:col-start-1 max-mobile:row-start-4 max-mobile:self-center">{"50"}{" min"}</span>
              <span data-available="false" data-slot="schedule-availability" className="text-[13px] text-muted-foreground data-[available=true]:text-foreground data-[available=true]:before:mr-2 data-[available=true]:before:inline-block data-[available=true]:before:size-1 data-[available=true]:before:rounded-full data-[available=true]:before:bg-[#729755] data-[available=true]:before:align-middle max-mobile:col-start-2 max-mobile:row-start-1 max-mobile:text-right"></span>
              <button data-slot="button" className="inline-flex shrink-0 items-center rounded-full border border-transparent text-sm/4 font-medium no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-mobile:min-h-9 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5] bg-primary text-primary-foreground not-disabled:hover:bg-[#343b30] not-disabled:focus-visible:bg-[#343b30] min-h-[34px] px-3 py-2 w-full justify-between gap-2 whitespace-nowrap max-mobile:col-start-2 max-mobile:row-start-4 max-mobile:w-auto max-mobile:min-w-[136px] max-mobile:self-center max-mobile:text-[13px]" disabled={true}>{"Started"}</button>
            </article>
            <article className="grid min-h-[68px] grid-cols-[112px_minmax(160px,1fr)_160px_64px_112px_136px] items-center gap-8 border-b border-border py-4 text-[15px]/6 last:border-b-0 max-compact:grid-cols-[90px_minmax(130px,1fr)_140px_54px_94px_136px] max-compact:gap-4 max-tablet:grid-cols-[75px_minmax(120px,1fr)_120px_52px_80px_128px] max-tablet:gap-3 max-tablet:text-[13px] max-mobile:grid-cols-[1fr_auto] max-mobile:gap-x-4 max-mobile:gap-y-1 max-mobile:py-6 max-mobile:text-[15px]">
              <time className="max-mobile:col-start-1 max-mobile:text-[13px]/5 max-mobile:text-muted-foreground" dateTime="2026-10-22T09:00">{"9:00 AM"}</time>
              <h4 className="text-inherit font-normal max-mobile:col-start-1 max-mobile:row-start-2 max-mobile:text-xl/7 max-mobile:tracking-[-0.025em] max-[361px]:text-lg">{"Reformer Foundations"}</h4>
              <span className="max-mobile:col-start-1 max-mobile:row-start-3 max-mobile:-mt-1 max-mobile:text-[13px] max-mobile:text-muted-foreground">
                <span className="hidden max-mobile:inline">{"with "}</span>
                {"Sofia Martinez"}
              </span>
              <span className="text-[13px] text-muted-foreground max-mobile:col-start-1 max-mobile:row-start-4 max-mobile:self-center">{"50"}{" min"}</span>
              <span data-available="false" data-slot="schedule-availability" className="text-[13px] text-muted-foreground data-[available=true]:text-foreground data-[available=true]:before:mr-2 data-[available=true]:before:inline-block data-[available=true]:before:size-1 data-[available=true]:before:rounded-full data-[available=true]:before:bg-[#729755] data-[available=true]:before:align-middle max-mobile:col-start-2 max-mobile:row-start-1 max-mobile:text-right"></span>
              <button data-slot="button" className="inline-flex shrink-0 items-center rounded-full border border-transparent text-sm/4 font-medium no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-mobile:min-h-9 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5] bg-primary text-primary-foreground not-disabled:hover:bg-[#343b30] not-disabled:focus-visible:bg-[#343b30] min-h-[34px] px-3 py-2 w-full justify-between gap-2 whitespace-nowrap max-mobile:col-start-2 max-mobile:row-start-4 max-mobile:w-auto max-mobile:min-w-[136px] max-mobile:self-center max-mobile:text-[13px]" disabled={true}>{"Started"}</button>
            </article>
            <article className="grid min-h-[68px] grid-cols-[112px_minmax(160px,1fr)_160px_64px_112px_136px] items-center gap-8 border-b border-border py-4 text-[15px]/6 last:border-b-0 max-compact:grid-cols-[90px_minmax(130px,1fr)_140px_54px_94px_136px] max-compact:gap-4 max-tablet:grid-cols-[75px_minmax(120px,1fr)_120px_52px_80px_128px] max-tablet:gap-3 max-tablet:text-[13px] max-mobile:grid-cols-[1fr_auto] max-mobile:gap-x-4 max-mobile:gap-y-1 max-mobile:py-6 max-mobile:text-[15px]">
              <time className="max-mobile:col-start-1 max-mobile:text-[13px]/5 max-mobile:text-muted-foreground" dateTime="2026-10-22T12:00">{"12:00 PM"}</time>
              <h4 className="text-inherit font-normal max-mobile:col-start-1 max-mobile:row-start-2 max-mobile:text-xl/7 max-mobile:tracking-[-0.025em] max-[361px]:text-lg">{"Reformer Flow"}</h4>
              <span className="max-mobile:col-start-1 max-mobile:row-start-3 max-mobile:-mt-1 max-mobile:text-[13px] max-mobile:text-muted-foreground">
                <span className="hidden max-mobile:inline">{"with "}</span>
                {"Chloe Nguyen"}
              </span>
              <span className="text-[13px] text-muted-foreground max-mobile:col-start-1 max-mobile:row-start-4 max-mobile:self-center">{"50"}{" min"}</span>
              <span data-available="true" data-slot="schedule-availability" className="text-[13px] text-muted-foreground data-[available=true]:text-foreground data-[available=true]:before:mr-2 data-[available=true]:before:inline-block data-[available=true]:before:size-1 data-[available=true]:before:rounded-full data-[available=true]:before:bg-[#729755] data-[available=true]:before:align-middle max-mobile:col-start-2 max-mobile:row-start-1 max-mobile:text-right">{"2 spots left"}</span>
              <button data-slot="dialog-trigger" className="inline-flex shrink-0 items-center rounded-full border border-transparent text-sm/4 font-medium no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-mobile:min-h-9 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5] bg-primary text-primary-foreground not-disabled:hover:bg-[#343b30] not-disabled:focus-visible:bg-[#343b30] min-h-[34px] px-3 py-2 w-full justify-between gap-2 whitespace-nowrap max-mobile:col-start-2 max-mobile:row-start-4 max-mobile:w-auto max-mobile:min-w-[136px] max-mobile:self-center max-mobile:text-[13px]" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed" tabIndex={0}>
                {"Book"}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </article>
            <article className="grid min-h-[68px] grid-cols-[112px_minmax(160px,1fr)_160px_64px_112px_136px] items-center gap-8 border-b border-border py-4 text-[15px]/6 last:border-b-0 max-compact:grid-cols-[90px_minmax(130px,1fr)_140px_54px_94px_136px] max-compact:gap-4 max-tablet:grid-cols-[75px_minmax(120px,1fr)_120px_52px_80px_128px] max-tablet:gap-3 max-tablet:text-[13px] max-mobile:grid-cols-[1fr_auto] max-mobile:gap-x-4 max-mobile:gap-y-1 max-mobile:py-6 max-mobile:text-[15px]">
              <time className="max-mobile:col-start-1 max-mobile:text-[13px]/5 max-mobile:text-muted-foreground" dateTime="2026-10-22T17:30">{"5:30 PM"}</time>
              <h4 className="text-inherit font-normal max-mobile:col-start-1 max-mobile:row-start-2 max-mobile:text-xl/7 max-mobile:tracking-[-0.025em] max-[361px]:text-lg">{"Reformer Sculpt"}</h4>
              <span className="max-mobile:col-start-1 max-mobile:row-start-3 max-mobile:-mt-1 max-mobile:text-[13px] max-mobile:text-muted-foreground">
                <span className="hidden max-mobile:inline">{"with "}</span>
                {"Chloe Nguyen"}
              </span>
              <span className="text-[13px] text-muted-foreground max-mobile:col-start-1 max-mobile:row-start-4 max-mobile:self-center">{"50"}{" min"}</span>
              <span data-available="true" data-slot="schedule-availability" className="text-[13px] text-muted-foreground data-[available=true]:text-foreground data-[available=true]:before:mr-2 data-[available=true]:before:inline-block data-[available=true]:before:size-1 data-[available=true]:before:rounded-full data-[available=true]:before:bg-[#729755] data-[available=true]:before:align-middle max-mobile:col-start-2 max-mobile:row-start-1 max-mobile:text-right">{"1 spot left"}</span>
              <button data-slot="dialog-trigger" className="inline-flex shrink-0 items-center rounded-full border border-transparent text-sm/4 font-medium no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-mobile:min-h-9 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5] bg-primary text-primary-foreground not-disabled:hover:bg-[#343b30] not-disabled:focus-visible:bg-[#343b30] min-h-[34px] px-3 py-2 w-full justify-between gap-2 whitespace-nowrap max-mobile:col-start-2 max-mobile:row-start-4 max-mobile:w-auto max-mobile:min-w-[136px] max-mobile:self-center max-mobile:text-[13px]" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed" tabIndex={0}>
                {"Book"}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </article>
            <article className="grid min-h-[68px] grid-cols-[112px_minmax(160px,1fr)_160px_64px_112px_136px] items-center gap-8 border-b border-border py-4 text-[15px]/6 last:border-b-0 max-compact:grid-cols-[90px_minmax(130px,1fr)_140px_54px_94px_136px] max-compact:gap-4 max-tablet:grid-cols-[75px_minmax(120px,1fr)_120px_52px_80px_128px] max-tablet:gap-3 max-tablet:text-[13px] max-mobile:grid-cols-[1fr_auto] max-mobile:gap-x-4 max-mobile:gap-y-1 max-mobile:py-6 max-mobile:text-[15px]">
              <time className="max-mobile:col-start-1 max-mobile:text-[13px]/5 max-mobile:text-muted-foreground" dateTime="2026-10-22T18:45">{"6:45 PM"}</time>
              <h4 className="text-inherit font-normal max-mobile:col-start-1 max-mobile:row-start-2 max-mobile:text-xl/7 max-mobile:tracking-[-0.025em] max-[361px]:text-lg">{"Reformer Flow"}</h4>
              <span className="max-mobile:col-start-1 max-mobile:row-start-3 max-mobile:-mt-1 max-mobile:text-[13px] max-mobile:text-muted-foreground">
                <span className="hidden max-mobile:inline">{"with "}</span>
                {"Maya Bennett"}
              </span>
              <span className="text-[13px] text-muted-foreground max-mobile:col-start-1 max-mobile:row-start-4 max-mobile:self-center">{"50"}{" min"}</span>
              <span data-available="false" data-slot="schedule-availability" className="text-[13px] text-muted-foreground data-[available=true]:text-foreground data-[available=true]:before:mr-2 data-[available=true]:before:inline-block data-[available=true]:before:size-1 data-[available=true]:before:rounded-full data-[available=true]:before:bg-[#729755] data-[available=true]:before:align-middle max-mobile:col-start-2 max-mobile:row-start-1 max-mobile:text-right">{"Waitlist"}</span>
              <button data-slot="dialog-trigger" className="inline-flex shrink-0 items-center rounded-full border border-transparent text-sm/4 font-medium no-underline transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 max-mobile:min-h-9 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-[1.5] bg-control text-foreground not-disabled:hover:bg-control-hover not-disabled:focus-visible:bg-control-hover min-h-[34px] px-3 py-2 w-full justify-between gap-2 whitespace-nowrap max-mobile:col-start-2 max-mobile:row-start-4 max-mobile:w-auto max-mobile:min-w-[136px] max-mobile:self-center max-mobile:text-[13px]" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed" tabIndex={0}>
                {"Join waitlist"}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
