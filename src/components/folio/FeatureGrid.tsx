/* Source DOM and utility styles transcribed from Folio. */
export function FeatureGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-end gap-8 md:grid-cols-2 md:gap-12">
          <h2 className="text-balance font-bold text-4xl text-foreground tracking-tight md:text-5xl">
{"Every angle of your data, in one workspace"}
          </h2>
          <p className="max-w-md text-base text-muted-foreground leading-relaxed">
{"Connect your warehouse, ask in plain English, and ship dashboards your team will actually open — no SQL, no setup calls."}
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="relative flex min-h-[540px] flex-col overflow-hidden rounded-2xl border border-border bg-background lg:col-span-2">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-foreground/[0.06] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:14px_14px]"></div>
            <div className="relative p-8">
              <h3 className="font-semibold text-foreground text-lg leading-tight">
{"Data automations"}
              </h3>
              <p className="mt-2 text-base text-foreground/75 leading-relaxed">
{"Build multi-step automations that route every metric to exactly the right place. Chain triggers, conditions, and connected tools like Slack — then watch each branch update in real time as data flows through your pipeline."}
              </p>
            </div>
            <div className="relative flex-1">
              <div className="pointer-events-none relative flex h-full w-full select-none items-center justify-center overflow-hidden bg-background">
                <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-foreground/[0.06] dark:text-foreground/[0.08]">
                  <title>
{"workflow grid"}
                  </title>
                  <defs>
                    <pattern height="10" id="workflow-dot-pattern" patternUnits="userSpaceOnUse" width="10">
                      <rect fill="currentColor" height="1" width="1" x="5.5" y="5.5"></rect>
                    </pattern>
                  </defs>
                  <rect fill="url(#workflow-dot-pattern)" height="100%" width="100%"></rect>
                </svg>
                <div className="relative h-[216px] w-[480px] max-w-full shrink-0 overflow-hidden xl:h-[324px] xl:w-[720px] folio-s12">
                  <div className="origin-top-left scale-[0.6] xl:scale-[0.9] folio-s13">
                    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" fill="none" viewBox="0 0 800 360">
                      <title>
{"workflow connectors"}
                      </title>
                      <path className="stroke-border" d="M 360 180 H 400 C 410 180 420 170 420 160 V 80 C 420 70 430 60 440 60 H 480" opacity="0.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                      <path className="stroke-emerald-500/60" d="M 40 180 H 120" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                      <path className="stroke-emerald-500/60" d="M 116 176 L 120 180 L 116 184" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                      <path className="stroke-emerald-500/60" d="M 360 180 H 400 C 410 180 420 190 420 200 V 260 C 420 270 430 280 440 280 H 480" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                      <path className="stroke-emerald-500/60" d="M 476 276 L 480 280 L 476 284" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                      <line className="stroke-border" strokeDasharray="2 3" strokeLinecap="round" strokeWidth="1.2" x1="725" x2="750" y1="280" y2="280"></line>
                    </svg>
                    <div className="absolute folio-s14">
                      <div className="flex h-5 items-center gap-1 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-1.5 -top-6 absolute right-0">
                        <svg aria-hidden="true" fill="none" height="12" viewBox="0 0 12 12" width="12">
                          <title>
{"completed"}
                          </title>
                          <path className="stroke-emerald-600 dark:stroke-emerald-400" d="M3 5.727 3.742 6.9c.442.699.663 1.048.947 1.17a1 1 0 0 0 .778.007c.286-.118.512-.464.965-1.156L9 3" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <span className="font-medium text-[11px] text-emerald-700 dark:text-emerald-400">
{"Completed"}
                        </span>
                      </div>
                      <div className="relative h-full w-full overflow-hidden rounded-xl bg-card shadow-black/5 shadow-sm border border-emerald-500/40 ring-1 ring-emerald-500/10">
                        <div className="relative flex h-full flex-col px-3 py-2.5">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex min-w-0 items-center gap-x-1.5">
                              <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 20 20" width="20">
                                <title>
{"slack"}
                                </title>
                                <rect className="fill-card stroke-border" height="19" rx="5.5" width="19" x="0.5" y="0.5"></rect>
                                <rect fill="#36C5F0" height="3" rx="1.5" width="6" x="3.5" y="3.5"></rect>
                                <rect fill="#ECB22E" height="6" rx="1.5" width="3" x="13.5" y="3.5"></rect>
                                <rect fill="#2EB67D" height="3" rx="1.5" width="6" x="10.5" y="13.5"></rect>
                                <rect fill="#E01E5A" height="6" rx="1.5" width="3" x="3.5" y="10.5"></rect>
                              </svg>
                              <p className="truncate font-semibold text-[15px] text-foreground tracking-tight">
{"Post Message to Slack"}
                              </p>
                            </div>
                            <span className="inline-flex shrink-0 items-center rounded-md border border-border bg-muted/50 px-1.5 py-px font-normal text-[11px] text-muted-foreground">
{"Slack"}
                            </span>
                          </div>
                          <hr className="mt-2 mb-auto border-border" />
                          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[12px] text-muted-foreground">
{"Sends a message to your Slack channel."}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-5 items-center justify-center rounded-md border border-emerald-500/40 bg-background px-1.5 folio-s15">
                      <span className="whitespace-nowrap font-medium text-[11px] text-emerald-700 dark:text-emerald-400">
{"Anomaly detected"}
                      </span>
                    </div>
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-5 items-center justify-center rounded-md border border-border bg-background px-1.5 opacity-60 folio-s16">
                      <span className="whitespace-nowrap font-medium text-[11px] text-muted-foreground">
{"Normal range"}
                      </span>
                    </div>
                    <div className="absolute folio-s17">
                      <div className="flex h-5 items-center gap-1 rounded-md border border-blue-500/40 bg-blue-500/10 px-1.5 -top-6 absolute right-0">
                        <svg aria-hidden="true" fill="none" height="12" viewBox="0 0 12 12" width="12">
                          <title>
{"in progress"}
                          </title>
                          <circle className="stroke-blue-600 dark:stroke-blue-400" cx="6" cy="6" r="4" strokeDasharray="6 4" strokeLinecap="round" strokeWidth="1.5"></circle>
                        </svg>
                        <span className="font-medium text-[11px] text-blue-700 dark:text-blue-400">
{"In progress"}
                        </span>
                      </div>
                      <div className="relative h-full w-full overflow-hidden rounded-xl bg-card shadow-black/5 shadow-sm border border-emerald-500/40 ring-1 ring-emerald-500/10">
                        <div className="relative flex h-full flex-col px-3 py-2.5">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex min-w-0 items-center gap-x-1.5">
                              <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 20 20" width="20">
                                <title>
{"mixmax"}
                                </title>
                                <rect className="fill-violet-500/15 stroke-violet-500/30" height="19" rx="5.5" width="19" x="0.5" y="0.5"></rect>
                                <path className="stroke-violet-600 dark:stroke-violet-400" d="M5 14 L7 6 L10 11 L13 6 L15 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                              </svg>
                              <p className="truncate font-semibold text-[15px] text-foreground tracking-tight">
{"Alert revenue team"}
                              </p>
                            </div>
                            <span className="inline-flex shrink-0 items-center rounded-md border border-border bg-muted/50 px-1.5 py-px font-normal text-[11px] text-muted-foreground">
{"Slack"}
                            </span>
                          </div>
                          <hr className="mt-2 mb-auto border-border" />
                          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[12px] text-muted-foreground">
{"Posts the chart and a summary to #revenue."}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute opacity-60 folio-s18">
                      <div className="relative h-full w-full overflow-hidden rounded-xl bg-card shadow-black/5 shadow-sm border border-border">
                        <div className="relative flex h-full flex-col px-3 py-2.5">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex min-w-0 items-center gap-x-1.5">
                              <svg aria-hidden="true" fill="none" height="20" viewBox="0 0 20 20" width="20">
                                <title>
{"mixmax"}
                                </title>
                                <rect className="fill-violet-500/15 stroke-violet-500/30" height="19" rx="5.5" width="19" x="0.5" y="0.5"></rect>
                                <path className="stroke-violet-600 dark:stroke-violet-400" d="M5 14 L7 6 L10 11 L13 6 L15 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                              </svg>
                              <p className="truncate font-semibold text-[15px] text-foreground tracking-tight">
{"Log to history"}
                              </p>
                            </div>
                            <span className="inline-flex shrink-0 items-center rounded-md border border-border bg-muted/50 px-1.5 py-px font-normal text-[11px] text-muted-foreground">
{"Webhook"}
                            </span>
                          </div>
                          <hr className="mt-2 mb-auto border-border" />
                          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-[12px] text-muted-foreground">
{"Records the run for monthly reporting."}
                          </p>
                        </div>
                      </div>
                    </div>
                    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" fill="none" viewBox="0 0 800 360">
                      <title>
{"connector dots"}
                      </title>
                      <circle className="fill-card stroke-emerald-500/60" cx="40" cy="180" r="5" strokeWidth="1.5"></circle>
                      <circle className="fill-card stroke-emerald-500/60" cx="360" cy="180" r="5" strokeWidth="1.5"></circle>
                      <circle className="fill-card stroke-emerald-500/60" cx="720" cy="280" r="5" strokeWidth="1.5"></circle>
                      <circle className="fill-card stroke-border" cx="720" cy="60" opacity="0.6" r="5" strokeWidth="1.5"></circle>
                    </svg>
                    <div className="absolute flex items-center justify-center folio-s19">
                      <div className="absolute inset-0 rounded-full bg-blue-500/10"></div>
                      <div className="absolute inset-2 rounded-full bg-blue-500/20"></div>
                      <div className="relative flex size-7 items-center justify-center rounded-full bg-blue-500/70 text-white shadow-sm">
                        <svg aria-hidden="true" fill="none" height="14" viewBox="0 0 14 14" width="14">
                          <title>
{"add step"}
                          </title>
                          <path d="M7 3v8M3 7h8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex min-h-[540px] flex-col overflow-hidden rounded-2xl border border-border bg-background">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-foreground/[0.06] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:14px_14px]"></div>
            <div className="relative p-8">
              <h3 className="font-semibold text-foreground text-lg leading-tight">
{"Suggested queries"}
              </h3>
              <p className="mt-2 text-base text-foreground/75 leading-relaxed">
{"Pre-built query templates for dashboards, forecasting, and anomaly detection — start exploring with one click."}
              </p>
            </div>
            <div className="relative flex-1">
              <div className="pointer-events-none relative h-full w-full select-none overflow-hidden rounded-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[251px] overflow-visible">
                    <svg aria-hidden="true" className="-translate-y-1/2 absolute top-1/2 left-0 h-[400px] text-border" height="400" width="1">
                      <title>
{"left rail"}
                      </title>
                      <line stroke="currentColor" strokeDasharray="4 6" strokeLinecap="round" x1="0.5" x2="0.5" y1="0" y2="100%"></line>
                    </svg>
                    <svg aria-hidden="true" className="-translate-y-1/2 absolute top-1/2 right-0 h-[400px] text-border" height="400" width="1">
                      <title>
{"right rail"}
                      </title>
                      <line stroke="currentColor" strokeDasharray="4 6" strokeLinecap="round" x1="0.5" x2="0.5" y1="0" y2="100%"></line>
                    </svg>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 flex w-[251px] items-center gap-2 rounded-[12px] border bg-card p-2 folio-s20">
                  <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[8px] border folio-s21">
                    <svg aria-hidden="true" fill="none" height="12" viewBox="0 0 12 12" width="12">
                      <title>
{"workflow"}
                      </title>
                      <rect height="4" rx="1.5" stroke="#75777C" strokeLinecap="round" strokeLinejoin="round" width="4" x="1.25" y="1.25"></rect>
                      <rect height="4" rx="2" stroke="#75777C" strokeLinecap="round" strokeLinejoin="round" width="4" x="6.75" y="6.75"></rect>
                      <path d="M2 7.25V8.00084C2 9.10541 2.89543 10.0008 4 10.0008H4.75" stroke="#75777C" strokeLinecap="round"></path>
                      <path d="M10 4.75L10 3.99916C10 2.89459 9.10457 1.99916 8 1.99916L7.25 1.99916" stroke="#75777C" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap font-normal text-[14px] text-foreground tracking-[-0.02em]">
{"Build executive dashboard"}
                  </span>
                </div>
                <div className="absolute top-1/2 left-1/2 flex w-[251px] items-center gap-2 rounded-[12px] border bg-card p-2 folio-s22">
                  <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[8px] border folio-s23">
                    <svg aria-hidden="true" fill="none" height="12" viewBox="0 0 12 12" width="12">
                      <title>
{"workflow"}
                      </title>
                      <rect height="4" rx="1.5" stroke="#772322" strokeLinecap="round" strokeLinejoin="round" width="4" x="1.25" y="1.25"></rect>
                      <rect height="4" rx="2" stroke="#772322" strokeLinecap="round" strokeLinejoin="round" width="4" x="6.75" y="6.75"></rect>
                      <path d="M2 7.25V8.00084C2 9.10541 2.89543 10.0008 4 10.0008H4.75" stroke="#772322" strokeLinecap="round"></path>
                      <path d="M10 4.75L10 3.99916C10 2.89459 9.10457 1.99916 8 1.99916L7.25 1.99916" stroke="#772322" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap font-normal text-[14px] text-foreground tracking-[-0.02em]">
{"Forecast Q2 revenue"}
                  </span>
                </div>
                <div className="absolute top-1/2 left-1/2 flex w-[251px] items-center gap-2 rounded-[12px] border bg-card p-2 folio-s24">
                  <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[8px] border folio-s25">
                    <svg aria-hidden="true" fill="none" height="12" viewBox="0 0 12 12" width="12">
                      <title>
{"workflow"}
                      </title>
                      <rect height="4" rx="1.5" stroke="#705500" strokeLinecap="round" strokeLinejoin="round" width="4" x="1.25" y="1.25"></rect>
                      <rect height="4" rx="2" stroke="#705500" strokeLinecap="round" strokeLinejoin="round" width="4" x="6.75" y="6.75"></rect>
                      <path d="M2 7.25V8.00084C2 9.10541 2.89543 10.0008 4 10.0008H4.75" stroke="#705500" strokeLinecap="round"></path>
                      <path d="M10 4.75L10 3.99916C10 2.89459 9.10457 1.99916 8 1.99916L7.25 1.99916" stroke="#705500" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap font-normal text-[14px] text-foreground tracking-[-0.02em]">
{"Find churn risk customers"}
                  </span>
                </div>
                <div className="absolute top-1/2 left-1/2 flex w-[251px] items-center gap-2 rounded-[12px] border bg-card p-2 folio-s26">
                  <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[8px] border folio-s27">
                    <svg aria-hidden="true" fill="none" height="12" viewBox="0 0 12 12" width="12">
                      <title>
{"workflow"}
                      </title>
                      <rect height="4" rx="1.5" stroke="#0A5A70" strokeLinecap="round" strokeLinejoin="round" width="4" x="1.25" y="1.25"></rect>
                      <rect height="4" rx="2" stroke="#0A5A70" strokeLinecap="round" strokeLinejoin="round" width="4" x="6.75" y="6.75"></rect>
                      <path d="M2 7.25V8.00084C2 9.10541 2.89543 10.0008 4 10.0008H4.75" stroke="#0A5A70" strokeLinecap="round"></path>
                      <path d="M10 4.75L10 3.99916C10 2.89459 9.10457 1.99916 8 1.99916L7.25 1.99916" stroke="#0A5A70" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap font-normal text-[14px] text-foreground tracking-[-0.02em]">
{"Compare regional sales"}
                  </span>
                </div>
                <div className="absolute top-1/2 left-1/2 flex w-[251px] items-center gap-2 rounded-[12px] border bg-card p-2 folio-s28">
                  <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[8px] border folio-s29">
                    <svg aria-hidden="true" fill="none" height="12" viewBox="0 0 12 12" width="12">
                      <title>
{"workflow"}
                      </title>
                      <rect height="4" rx="1.5" stroke="#075A39" strokeLinecap="round" strokeLinejoin="round" width="4" x="1.25" y="1.25"></rect>
                      <rect height="4" rx="2" stroke="#075A39" strokeLinecap="round" strokeLinejoin="round" width="4" x="6.75" y="6.75"></rect>
                      <path d="M2 7.25V8.00084C2 9.10541 2.89543 10.0008 4 10.0008H4.75" stroke="#075A39" strokeLinecap="round"></path>
                      <path d="M10 4.75L10 3.99916C10 2.89459 9.10457 1.99916 8 1.99916L7.25 1.99916" stroke="#075A39" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap font-normal text-[14px] text-foreground tracking-[-0.02em]">
{"Top 10 products by revenue"}
                  </span>
                </div>
                <div className="absolute top-1/2 left-1/2 flex w-[251px] items-center gap-2 rounded-[12px] border bg-card p-2 folio-s30">
                  <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[8px] border folio-s31">
                    <svg aria-hidden="true" fill="none" height="12" viewBox="0 0 12 12" width="12">
                      <title>
{"workflow"}
                      </title>
                      <rect height="4" rx="1.5" stroke="#4711BB" strokeLinecap="round" strokeLinejoin="round" width="4" x="1.25" y="1.25"></rect>
                      <rect height="4" rx="2" stroke="#4711BB" strokeLinecap="round" strokeLinejoin="round" width="4" x="6.75" y="6.75"></rect>
                      <path d="M2 7.25V8.00084C2 9.10541 2.89543 10.0008 4 10.0008H4.75" stroke="#4711BB" strokeLinecap="round"></path>
                      <path d="M10 4.75L10 3.99916C10 2.89459 9.10457 1.99916 8 1.99916L7.25 1.99916" stroke="#4711BB" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap font-normal text-[14px] text-foreground tracking-[-0.02em]">
{"Track signup funnel drop-off"}
                  </span>
                </div>
                <div className="absolute top-1/2 left-1/2 flex w-[251px] items-center gap-2 rounded-[12px] border bg-card p-2 folio-s32">
                  <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[8px] border folio-s33">
                    <svg aria-hidden="true" fill="none" height="12" viewBox="0 0 12 12" width="12">
                      <title>
{"workflow"}
                      </title>
                      <rect height="4" rx="1.5" stroke="#6F065D" strokeLinecap="round" strokeLinejoin="round" width="4" x="1.25" y="1.25"></rect>
                      <rect height="4" rx="2" stroke="#6F065D" strokeLinecap="round" strokeLinejoin="round" width="4" x="6.75" y="6.75"></rect>
                      <path d="M2 7.25V8.00084C2 9.10541 2.89543 10.0008 4 10.0008H4.75" stroke="#6F065D" strokeLinecap="round"></path>
                      <path d="M10 4.75L10 3.99916C10 2.89459 9.10457 1.99916 8 1.99916L7.25 1.99916" stroke="#6F065D" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap font-normal text-[14px] text-foreground tracking-[-0.02em]">
{"Detect order anomalies"}
                  </span>
                </div>
                <div className="absolute top-1/2 left-1/2 flex w-[251px] items-center gap-2 rounded-[12px] border bg-card p-2 folio-s34">
                  <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[8px] border folio-s29">
                    <svg aria-hidden="true" fill="none" height="12" viewBox="0 0 12 12" width="12">
                      <title>
{"workflow"}
                      </title>
                      <rect height="4" rx="1.5" stroke="#075A39" strokeLinecap="round" strokeLinejoin="round" width="4" x="1.25" y="1.25"></rect>
                      <rect height="4" rx="2" stroke="#075A39" strokeLinecap="round" strokeLinejoin="round" width="4" x="6.75" y="6.75"></rect>
                      <path d="M2 7.25V8.00084C2 9.10541 2.89543 10.0008 4 10.0008H4.75" stroke="#075A39" strokeLinecap="round"></path>
                      <path d="M10 4.75L10 3.99916C10 2.89459 9.10457 1.99916 8 1.99916L7.25 1.99916" stroke="#075A39" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap font-normal text-[14px] text-foreground tracking-[-0.02em]">
{"Audit data quality issues"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex min-h-[540px] flex-col overflow-hidden rounded-2xl border border-border bg-background">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-foreground/[0.06] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:14px_14px]"></div>
            <div className="relative p-8">
              <h3 className="font-semibold text-foreground text-lg leading-tight">
{"Connect anywhere"}
              </h3>
              <p className="mt-2 text-base text-foreground/75 leading-relaxed">
{"Plug in Postgres, Snowflake, BigQuery, MySQL, or CSVs — Folio reads your schema and starts answering questions in minutes, with read-only credentials."}
              </p>
            </div>
            <div className="relative flex-1">
              <div className="absolute inset-0 flex flex-col items-center justify-center pb-28">
                <div className="relative z-10 flex size-16 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-border/60">
                  <svg className="size-8" fill="currentColor" height="1em" role="img" stroke="currentColor" strokeWidth="0" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.53 2.13 0 7.75h5.53zm.398 0v5.62h7.608v3.65l5.47-4.45c-.014-1.22.031-2.25-.025-3.46-.148-1.09-1.287-1.47-2.236-1.36zM23.1 4.32c-.802.295-1.358.995-2.047 1.49-2.506 2.05-4.982 4.12-7.468 6.19 3.025 2.59 6.04 5.18 9.065 7.76 1.218.671 1.428-.814 1.328-1.64v-13a.828.828 0 0 0-.877-.825zM.038 8.15v7.7h5.53v-7.7zm13.577 8.1H6.008v5.62c3.864-.006 7.737.011 11.58-.009 1.02-.07 1.618-1.12 1.468-2.07v-2.51l-5.47-4.68v3.65zm-13.577 0c.02 1.44-.041 2.88.033 4.31.162.948 1.158 1.43 2.047 1.31h3.464v-5.62z"></path>
                  </svg>
                </div>
                <div className="relative z-10 h-12 w-px bg-foreground/20"></div>
                <div className="relative flex items-center justify-center">
                  <div className="-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute top-1/2 left-1/2 size-32 rounded-full border border-foreground/20 border-dashed"></div>
                  <div className="-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute top-1/2 left-1/2 size-44 rounded-full border border-foreground/15 border-dashed"></div>
                  <div className="-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute top-1/2 left-1/2 size-56 rounded-full border border-foreground/10 border-dashed"></div>
                  <div className="relative flex size-16 items-center justify-center rounded-2xl bg-zinc-900 shadow-md">
                    <svg className="lucide lucide-zap size-7 text-emerald-400" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg>
                    <div className="-right-1 -bottom-1 absolute size-6 rounded-full bg-gradient-to-br from-rose-300 to-pink-400 shadow ring-2 ring-background"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex min-h-[540px] flex-col overflow-hidden rounded-2xl border border-border bg-background">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-foreground/[0.06] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:14px_14px]"></div>
            <div className="relative p-8">
              <h3 className="font-semibold text-foreground text-lg leading-tight">
{"Web Search Chat"}
              </h3>
              <p className="mt-2 text-base text-foreground/75 leading-relaxed">
{"Ask anything and watch the assistant search the web, cite sources, and stream a clean answer in real time."}
              </p>
            </div>
            <div className="relative flex-1">
              <div className="pointer-events-none relative flex h-full w-full select-none items-center justify-center overflow-hidden bg-background p-8 folio-s35">
                <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full text-border opacity-60 dark:opacity-30">
                  <defs>
                    <pattern height="12" id="web-search-chat-dots" patternUnits="userSpaceOnUse" width="12" x="0" y="0">
                      <circle cx="1" cy="1" fill="currentColor" r="0.8"></circle>
                    </pattern>
                  </defs>
                  <rect fill="url(#web-search-chat-dots)" height="100%" width="100%"></rect>
                </svg>
                <div className="relative w-full max-w-xs space-y-4">
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-l-xl rounded-tr-xl rounded-br-sm bg-muted px-3.5 py-2.5 text-foreground text-sm leading-5 shadow-sm ring-1 ring-border/50">
{"summarize the latest news about Acme Corp"}
                    </div>
                  </div>
                  <div className="flex w-fit items-center gap-2 rounded-xl border border-border/50 bg-card px-2.5 py-1.5 shadow-sm">
                    <svg className="lucide lucide-globe size-3.5 shrink-0 text-muted-foreground" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                    <div className="text-xs leading-none">
                      <span className="text-muted-foreground">
{"Searched web:"}
                      </span>
{" "}
                      <span className="font-semibold text-foreground">
{"5 results"}
                      </span>
                    </div>
                    <div className="-space-x-1 flex items-center">
                      <div className="flex size-4 items-center justify-center rounded-sm bg-zinc-900 ring-2 ring-card">
                        <span className="font-bold text-[7px] text-white">
{"X"}
                        </span>
                      </div>
                      <div className="flex size-4 items-center justify-center rounded-sm bg-sky-500 ring-2 ring-card">
                        <span className="font-bold text-[7px] text-white">
{"in"}
                        </span>
                      </div>
                      <div className="flex size-4 items-center justify-center rounded-sm bg-orange-500 ring-2 ring-card">
                        <span className="font-bold text-[7px] text-white">
{"N"}
                        </span>
                      </div>
                      <div className="flex size-4 items-center justify-center rounded-sm bg-muted text-muted-foreground ring-2 ring-card">
                        <span className="font-bold text-[8px]">
{"2"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="font-medium text-foreground text-sm leading-5">
{"Here's the quick rundown:"}
                  </p>
                  <div className="space-y-3 text-foreground text-xs leading-relaxed">
                    <p>
{"Acme closed a $40M Series B led by Sequoia, funding a European expansion and a new agent SDK shipping next quarter."}
                    </p>
                    <p>
{"Their CTO previewed multi-tenant architecture for enterprise."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex min-h-[540px] flex-col overflow-hidden rounded-2xl border border-border bg-background">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 text-foreground/[0.06] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:14px_14px]"></div>
            <div className="relative p-8">
              <h3 className="font-semibold text-foreground text-lg leading-tight">
{"Activity timeline"}
              </h3>
              <p className="mt-2 text-base text-foreground/75 leading-relaxed">
{"Every query, every chart pinned, every dashboard update in a clean vertical timeline — so the team always knows what just shipped."}
              </p>
            </div>
            <div className="relative flex-1">
              <div className="pointer-events-none relative flex h-full w-full select-none items-center justify-center overflow-hidden bg-background p-4">
                <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full text-border opacity-60 dark:opacity-30">
                  <defs>
                    <pattern height="10" id="workflow-timeline-dots" patternUnits="userSpaceOnUse" width="10" x="0" y="0">
                      <rect fill="currentColor" height="1" width="1" x="4.5" y="4.5"></rect>
                    </pattern>
                  </defs>
                  <rect fill="url(#workflow-timeline-dots)" height="100%" width="100%"></rect>
                </svg>
                <div className="relative w-full max-w-[340px]">
                  <div className="relative pl-12">
                    <div className="absolute top-0 bottom-0 left-6 border-foreground/15 border-l border-dashed"></div>
                    <div className="relative">
                      <div className="-left-9 absolute top-0 z-10 flex size-6 items-center justify-center rounded-md bg-blue-100 ring-1 ring-blue-200/60 dark:bg-blue-950/40 dark:ring-blue-900/40">
                        <svg className="lucide lucide-calendar size-3 text-blue-600 dark:text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect height="18" rx="2" width="18" x="3" y="4"></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5 pl-1 text-[11px]">
                          <img alt="" className="size-4 shrink-0 rounded-full object-cover folio-s0" decoding="async" height="16" loading="lazy" src="/folio/avatar-images/avatar-02.jpg" width="16" />
                          <span className="min-w-0 truncate text-muted-foreground">
                            <span className="font-semibold text-foreground">
{"Sofia Rivera"}
                            </span>
{" "}
{"pinned a chart"}
                          </span>
                          <span className="ml-auto shrink-0 whitespace-nowrap text-[10px] text-muted-foreground/70">
{"1 hour ago"}
                          </span>
                        </div>
                        <div className="ml-1 rounded-md border border-border bg-card p-2.5 shadow-sm">
                          <div className="flex items-center justify-between">
                            <span className="inline-flex items-center gap-0.5 rounded-md bg-emerald-100 px-1.5 py-px font-medium text-[10px] text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                              <svg className="lucide lucide-badge-check size-2.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
{"Published"}
                            </span>
                            <div className="-space-x-1 flex">
                              <span className="flex size-4 items-center justify-center rounded-full bg-blue-500 font-bold text-[8px] text-white ring-2 ring-card">
{"R"}
                              </span>
                              <span className="flex size-4 items-center justify-center rounded-full bg-amber-500 font-bold text-[8px] text-white ring-2 ring-card">
{"E"}
                              </span>
                            </div>
                          </div>
                          <p className="mt-1.5 font-semibold text-[11px] text-foreground leading-snug">
{"Revenue by region – Q3 review"}
                          </p>
                          <p className="mt-0.5 text-[10px] text-muted-foreground">
{"Pinned to #revenue"}
                          </p>
                        </div>
                        <div className="relative pt-1">
                          <div className="-left-6 absolute top-0 h-1/2 w-6 rounded-bl-full border-foreground/15 border-b border-l border-dashed"></div>
                          <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                            <svg className="lucide lucide-chevrons-up-down size-2.5 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="m7 15 5 5 5-5"></path>
                              <path d="m7 9 5-5 5 5"></path>
                            </svg>
{"Show 4 more events"}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-3"></div>
                    <div className="relative">
                      <div className="-left-9 absolute top-0 z-10 flex size-6 items-center justify-center rounded-md bg-blue-100 ring-1 ring-blue-200/60 dark:bg-blue-950/40 dark:ring-blue-900/40">
                        <svg className="lucide lucide-copy size-3 text-blue-600 dark:text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect>
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                        </svg>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5 pl-1 text-[11px]">
                          <img alt="" className="size-4 shrink-0 rounded-full object-cover folio-s0" decoding="async" height="16" loading="lazy" src="/folio/avatar-images/avatar-04.jpg" width="16" />
                          <span className="inline-flex min-w-0 items-center gap-1 truncate text-muted-foreground">
                            <span className="shrink-0 font-semibold text-foreground">
{"Nicole Smith"}
                            </span>
                            <span className="shrink-0">
{"saved"}
                            </span>
                            <span className="inline-flex size-3.5 shrink-0 items-center justify-center rounded-sm bg-violet-600 font-bold text-[8px] text-white">
{"Q"}
                            </span>
                            <span className="shrink-0 font-semibold text-foreground">
{"Top 10 customers"}
                            </span>
                            <span className="shrink-0">
{"as a view"}
                            </span>
                          </span>
                          <span className="ml-auto shrink-0 whitespace-nowrap text-[10px] text-muted-foreground/70">
{"5 hours ago"}
                          </span>
                        </div>
                        <div className="relative pt-1">
                          <div className="-left-6 absolute top-0 h-1/2 w-6 rounded-bl-full border-foreground/15 border-b border-l border-dashed"></div>
                          <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                            <svg className="lucide lucide-chevrons-up-down size-2.5 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="m7 15 5 5 5-5"></path>
                              <path d="m7 9 5-5 5 5"></path>
                            </svg>
{"Show all saved queries"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
