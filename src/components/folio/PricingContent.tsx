"use client";
import { useState } from "react";
/* Source DOM and utility styles transcribed from Folio. */
export function PricingContent() {
  const [annual, setAnnual] = useState(true);
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto">
        <div className="border-x border-dashed border-border">
          <div className="mx-3 sm:mx-4 lg:mx-6 border-x border-dashed border-border">
            <div className="pt-24 pb-12 md:pt-32 md:pb-16 px-6 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-balance text-4xl font-bold md:text-5xl lg:text-6xl lg:tracking-tight">
{"Pricing that scales with you"}
                </h1>
                <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-balance text-lg">
{"Start free with 100 queries a month. Upgrade as your team's data needs grow."}
                </p>
              </div>
            </div>
            <section>
              <div className="border-t border-dashed border-border"></div>
              <div className="px-6 sm:px-8 lg:px-12 py-16 md:py-24">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl lg:tracking-tight">
{"Simple pricing, powerful automation"}
                  </h2>
                  <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-balance text-lg">
{"Start free, scale as you grow. Pay only for the workflow executions you use."}
                  </p>
                  <div className="my-12">
                    <div className="bg-foreground/5 relative mx-auto grid w-fit grid-cols-2 rounded-full p-1">
                      <div aria-hidden="true" className={"bg-card ring-foreground/5 pointer-events-none absolute inset-1 w-1/2 rounded-full border border-transparent shadow ring-1 transition-transform duration-500 ease-in-out" + (annual ? " translate-x-full" : "")}></div>
                      <button type="button" aria-pressed={!annual} onClick={() => setAnnual(false)} className={"relative block h-8 w-24 rounded-full text-sm transition-colors hover:opacity-75 " + (!annual ? "text-foreground font-medium" : "text-foreground/75")}>
{"Monthly"}
                      </button>
                      <button type="button" aria-pressed={annual} onClick={() => setAnnual(true)} className={"relative block h-8 w-24 rounded-full text-sm transition-colors hover:opacity-75 " + (annual ? "text-foreground font-medium" : "text-foreground/75")}>
{"Annually"}
                      </button>
                    </div>
                    <div className="mt-3 text-center text-xs">
                      <span className="text-primary font-medium">
{"Save 25%"}
                      </span>
{" On Annual Billing"}
                    </div>
                  </div>
                </div>
                <div className="@container">
                  <div className="rounded-lg border">
                    <div className="grid md:grid-cols-3">
                      <div className="row-span-4 grid grid-rows-subgrid gap-8 p-8 md:border-r border-b md:border-b-0">
                        <div className="self-end">
                          <h3 className="tracking-tight text-lg font-medium">
{"Free"}
                          </h3>
                          <p className="text-muted-foreground mt-1 text-balance text-sm">
{"Perfect for exploring workflow automation"}
                          </p>
                        </div>
                        <div>
                          <span className="text-3xl font-semibold">
{"$"}
{"0"}
                          </span>
                          <div className="text-muted-foreground text-sm">
{"Per month"}
                          </div>
                        </div>
                        <a className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 px-4 py-2 w-full shadow-sm shadow-black/10 border border-transparent bg-card ring-1 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50" href="#">
{"Start Free"}
                        </a>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"100 workflow executions/month"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"5 active workflows"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Core integrations"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Community support"}
                          </li>
                        </ul>
                      </div>
                      <div className="row-span-4 grid grid-rows-subgrid gap-8 p-8 ring-border bg-card md:my-2 md:mx-0.5 shadow-xl shadow-black/5 ring-1 backdrop-blur rounded-lg">
                        <div className="self-end">
                          <h3 className="tracking-tight text-lg font-medium">
{"Pro"}
                          </h3>
                          <p className="text-muted-foreground mt-1 text-balance text-sm">
{"For teams automating critical business processes"}
                          </p>
                        </div>
                        <div>
                          <span className="text-3xl font-semibold">
{"$"}
{annual ? "24" : "29"}
                          </span>
                          <div className="text-muted-foreground text-sm">
{"Per month"}
                          </div>
                        </div>
                        <a className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 px-4 py-2 w-full shadow-md border-[0.5px] border-white/10 shadow-black/15 bg-primary text-primary-foreground hover:bg-primary/90" href="#">
{"Start Free Trial"}
                        </a>
                        <ul className="space-y-3 text-sm">
                          <li className="font-medium">
{"Everything in Free, plus:"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"5,000 executions/month"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Unlimited workflows"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"All 100+ integrations"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"AI model access (GPT-4, Claude)"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Version history"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Priority support"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Custom webhooks"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Team collaboration"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Advanced analytics"}
                          </li>
                        </ul>
                      </div>
                      <div className="row-span-4 grid grid-rows-subgrid gap-8 p-8 md:border-l border-t md:border-t-0">
                        <div className="self-end">
                          <h3 className="tracking-tight text-lg font-medium">
{"Business"}
                          </h3>
                          <p className="text-muted-foreground mt-1 text-balance text-sm">
{"For organizations with complex automation needs"}
                          </p>
                        </div>
                        <div>
                          <span className="text-3xl font-semibold">
{"$"}
{annual ? "79" : "99"}
                          </span>
                          <div className="text-muted-foreground text-sm">
{"Per month"}
                          </div>
                        </div>
                        <a className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 px-4 py-2 w-full shadow-sm shadow-black/10 border border-transparent bg-card ring-1 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50" href="/contact">
{"Contact Sales"}
                        </a>
                        <ul className="space-y-3 text-sm">
                          <li className="font-medium">
{"Everything in Pro, plus:"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"50,000 executions/month"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Unlimited team members"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Custom AI model integration"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"SSO & SAML"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Audit logs"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Dedicated support"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"SLA guarantee"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"On-premise deployment"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Custom integrations"}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border mt-6">
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
                      <div className="space-y-6 p-8">
                        <div className="self-end">
                          <h3 className="tracking-tight text-lg font-medium">
{"Enterprise"}
                          </h3>
                          <p className="text-muted-foreground mt-1 text-balance text-sm">
{"For organizations requiring dedicated infrastructure, custom integrations, and enterprise-grade security."}
                          </p>
                        </div>
                        <a className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring shadow-sm shadow-black/10 border border-transparent bg-card ring-1 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50 h-9 px-4 py-2" href="/contact">
{"Contact Sales"}
                        </a>
                      </div>
                      <div className="col-span-2 p-8">
                        <ul className="grid md:grid-cols-2 gap-x-14 gap-y-3 text-sm" role="list">
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Unlimited workflow executions"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Dedicated infrastructure"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Custom AI model training"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Advanced security & compliance"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"White-label options"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Custom SLA"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"24/7 premium support"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Dedicated success manager"}
                          </li>
                          <li className="flex items-center gap-2">
                            <svg className="lucide lucide-check text-muted-foreground size-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
{"Custom contract terms"}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="relative overflow-hidden">
              <div className="border-t border-dashed border-border"></div>
              <div className="relative z-10 px-6 sm:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
                <div className="grid gap-8 sm:grid-cols-2">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-foreground max-w-xl">
{"From question to dashboard in minutes"}
                  </h2>
                  <div className="flex w-full items-center">
                    <div className="max-w-xl space-y-4">
                      <p className="text-muted-foreground text-sm md:text-base">
{"Join thousands of teams using Folio to query their warehouse, ship dashboards, and answer data questions in plain English — no SQL required."}
                      </p>
                      <div className="flex flex-row gap-3">
                        <a className="inline-flex shrink-0 items-center justify-center whitespace-nowrap font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 group gap-4" data-slot="button" href="/contact">
{"Start Free"}
{" "}
                          <svg className="lucide lucide-arrow-up-right group-hover:-rotate-12 size-4 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 7h10v10"></path>
                            <path d="M7 17 17 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="z-0 absolute inset-0 h-full w-full pointer-events-none animate-fade-in">
                  <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[450px] sm:h-[500px] sm:w-[550px] md:h-[600px] md:w-[650px] lg:h-[700px] lg:w-[750px] translate-x-1/2 translate-y-1/2 select-none folio-s66"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
