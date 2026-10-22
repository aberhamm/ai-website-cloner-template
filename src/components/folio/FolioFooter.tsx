import Link from "next/link";
/* Source DOM and utility styles transcribed from Folio. */
export function FolioFooter() {
  return (
    <footer className="relative mt-12 overflow-hidden bg-background">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <img alt="" className="object-cover folio-s2" decoding="async" loading="lazy" sizes="100vw" src="/folio/images/dashboard-bg.jpg" />
        <div className="absolute inset-0 bg-background/30 dark:bg-background/70"></div>
      </div>
      <div className="relative px-6 pt-24 pb-32 text-center md:pt-32 md:pb-40 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-balance font-bold text-5xl text-foreground tracking-tight md:text-6xl lg:text-7xl">
{"Stop waiting on the data team."}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
{"Connect your warehouse, ask in plain English, and ship the chart before the meeting ends."}
        </p>
        <Link href="/pricing" className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 has-[>svg]:px-4 mt-8 rounded-full px-6 py-5 font-medium text-sm" data-slot="button">
{"Try Folio Free"}
        </Link>
      </div>
      <div className="relative px-6 pb-3 md:pb-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-border bg-card p-8 shadow-sm md:p-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 md:grid-cols-12 md:gap-x-12">
            <div className="sm:col-span-2 md:col-span-4">
              <div className="flex items-center gap-2">
                <img alt="Folio" className="object-contain dark:invert size-11 folio-s0" decoding="async" height="64" loading="lazy" src="/folio/logo.png" width="64" />
                <span className="font-bold text-foreground text-xl">
{"Folio"}
                </span>
              </div>
              <p className="mt-5 max-w-xs text-muted-foreground text-sm leading-relaxed">
{"Folio is the AI-powered workspace that helps teams query databases, visualize data, and make faster decisions — all in one place."}
              </p>
              <a className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 font-medium text-foreground text-xs shadow-sm transition-shadow hover:shadow" href="mailto:hello@folio.app">
                <svg className="lucide lucide-mail size-3.5 text-muted-foreground" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <rect height="16" rx="2" width="20" x="2" y="4"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
{"hello@folio.app"}
              </a>
              <div className="mt-6 flex gap-2">
                <a aria-label="Facebook" className="flex size-9 items-center justify-center rounded-lg border border-border bg-background text-foreground/70 shadow-sm transition-colors hover:text-foreground" href="#">
                  <svg className="size-4" fill="currentColor" height="1em" role="img" stroke="currentColor" strokeWidth="0" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"></path>
                  </svg>
                </a>
                <a aria-label="Instagram" className="flex size-9 items-center justify-center rounded-lg border border-border bg-background text-foreground/70 shadow-sm transition-colors hover:text-foreground" href="#">
                  <svg className="size-4" fill="currentColor" height="1em" role="img" stroke="currentColor" strokeWidth="0" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"></path>
                  </svg>
                </a>
                <a aria-label="X" className="flex size-9 items-center justify-center rounded-lg border border-border bg-background text-foreground/70 shadow-sm transition-colors hover:text-foreground" href="#">
                  <svg className="size-4" fill="currentColor" height="1em" role="img" stroke="currentColor" strokeWidth="0" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                  </svg>
                </a>
                <a aria-label="LinkedIn" className="flex size-9 items-center justify-center rounded-lg border border-border bg-background text-foreground/70 shadow-sm transition-colors hover:text-foreground" href="#">
                  <svg className="size-4" fill="currentColor" height="1em" role="img" stroke="currentColor" strokeWidth="0" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="space-y-10 md:col-span-2">
              <div>
                <h4 className="font-semibold text-foreground text-sm">
{"Platform"}
                </h4>
                <ul className="mt-5 space-y-3">
                  <li>
                    <Link href="/#features">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Features"}
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Changelog"}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-blue-500 px-1.5 py-px font-medium text-[10px] text-white leading-none">
{"New"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Pricing"}
                        </span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Integrations"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noopener noreferrer" target="_blank">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"API"}
                        </span>
                        <svg className="lucide lucide-arrow-up-right size-3.5 shrink-0 opacity-70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 7h10v10"></path>
                          <path d="M7 17 17 7"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noopener noreferrer" target="_blank">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Slack app"}
                        </span>
                        <svg className="lucide lucide-arrow-up-right size-3.5 shrink-0 opacity-70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 7h10v10"></path>
                          <path d="M7 17 17 7"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">
{"Company"}
                </h4>
                <ul className="mt-5 space-y-3">
                  <li>
                    <a href="#about">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"About"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Blog"}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-blue-500 px-1.5 py-px font-medium text-[10px] text-white leading-none">
{"New"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Careers"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Customers"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Press kit"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Become a partner"}
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-10 md:col-span-2">
              <div>
                <h4 className="font-semibold text-foreground text-sm">
{"Connect to"}
                </h4>
                <ul className="mt-5 space-y-3">
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Postgres"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"MySQL"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Snowflake"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"BigQuery"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Redshift"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Databricks"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"CSV upload"}
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">
{"Folio for"}
                </h4>
                <ul className="mt-5 space-y-3">
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Data teams"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Product teams"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Engineering"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Founders"}
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-10 md:col-span-2">
              <div>
                <h4 className="font-semibold text-foreground text-sm">
{"Integrations"}
                </h4>
                <ul className="mt-5 space-y-3">
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Slack"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Notion"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"GitHub"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Linear"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Jira"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"dbt"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Cube"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Zapier"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Webhooks"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Microsoft Teams"}
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-10 md:col-span-2">
              <div>
                <h4 className="font-semibold text-foreground text-sm">
{"Resources"}
                </h4>
                <ul className="mt-5 space-y-3">
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Documentation"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Help center"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noopener noreferrer" target="_blank">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"API reference"}
                        </span>
                        <svg className="lucide lucide-arrow-up-right size-3.5 shrink-0 opacity-70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 7h10v10"></path>
                          <path d="M7 17 17 7"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noopener noreferrer" target="_blank">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"System status"}
                        </span>
                        <svg className="lucide lucide-arrow-up-right size-3.5 shrink-0 opacity-70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 7h10v10"></path>
                          <path d="M7 17 17 7"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Tutorials"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Query templates"}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-blue-500 px-1.5 py-px font-medium text-[10px] text-white leading-none">
{"New"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"Community"}
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">
{"Compare"}
                </h4>
                <ul className="mt-5 space-y-3">
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"vs Tableau"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"vs Looker"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"vs Metabase"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"vs Mode"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"vs Hex"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"vs Sigma"}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors hover:text-foreground">
                        <span>
{"vs Power BI"}
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-8" data-orientation="horizontal" data-slot="separator" role="none"></div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-muted-foreground text-sm">
{"© "}
{"2026"}
{" Folio. All rights reserved. Made with"}
{" "}
              <a className="underline underline-offset-4 transition-colors hover:text-foreground" href="https://ruixen.com" rel="noopener noreferrer" target="_blank">
{"Ruixen UI"}
              </a>
            </span>
            <div className="flex gap-6 text-sm">
              <Link className="text-muted-foreground transition-colors hover:text-foreground" href="/terms">
{"Terms & Conditions"}
              </Link>
              <Link className="text-muted-foreground transition-colors hover:text-foreground" href="/privacy">
{"Privacy Policy"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
