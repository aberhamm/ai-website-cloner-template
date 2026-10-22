/* Source DOM and utility styles transcribed from Folio. */
export function FaqSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-end gap-8 md:grid-cols-2 md:gap-12">
          <h2 className="font-semibold text-4xl text-foreground">
{"FAQs"}
          </h2>
          <p className="max-w-md text-balance text-lg text-muted-foreground">
{"Everything you need to know about Folio. Can't find what you're looking for? Reach out to our"}
{" "}
            <a className="font-medium text-foreground hover:underline" href="#">
{"support team"}
            </a>
{" "}
{"for assistance."}
          </p>
        </div>
        <div className="@container mt-6 grid md:mt-20 md:grid-cols-5">
          <nav aria-label="FAQ categories" className="md:-mt-3 sticky top-0 z-10 h-fit max-md:flex max-md:justify-center max-md:bg-foreground/2 max-md:p-2 max-md:backdrop-blur md:top-12 md:col-span-2 md:block">
            <button aria-current="true" className="block w-fit cursor-pointer py-2 text-left text-sm transition-colors max-md:px-2 md:py-1.5 font-medium text-foreground" type="button">
{"General"}
            </button>
            <button className="block w-fit cursor-pointer py-2 text-left text-sm transition-colors max-md:px-2 md:py-1.5 text-muted-foreground hover:text-foreground" type="button">
{"Customization"}
            </button>
            <button className="block w-fit cursor-pointer py-2 text-left text-sm transition-colors max-md:px-2 md:py-1.5 text-muted-foreground hover:text-foreground" type="button">
{"Support"}
            </button>
          </nav>
          <div className="space-y-12 max-md:mt-6 md:col-span-3">
            <div className="scroll-mt-20 space-y-4" data-faq-group="general" id="general">
              <h3 className="pl-6 font-semibold text-foreground text-lg">
{"General"}
              </h3>
              <div className="-space-y-1" data-orientation="vertical" data-slot="accordion">
                <div className="border-b last:border-b-0 peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:bg-card data-[state=open]:shadow-black/[0.065] data-[state=open]:shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-border" data-orientation="vertical" data-slot="accordion-item" data-state="open">
                  <h3 className="flex" data-orientation="vertical" data-state="open">
                    <button aria-controls="radix-_R_9jahbt5v9lb_" aria-expanded="true" className="flex flex-1 items-start justify-between gap-4 text-left font-medium outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer rounded-none border-b py-4 text-base transition-none hover:no-underline data-[state=open]:border-transparent" data-orientation="vertical" data-radix-collection-item="" data-slot="accordion-trigger" data-state="open" id="radix-_R_1jahbt5v9lb_" type="button">
{"What is Folio?"}
                      <svg className="lucide lucide-chevron-down pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                  <div aria-labelledby="radix-_R_1jahbt5v9lb_" className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down folio-s64" data-orientation="vertical" data-slot="accordion-content" data-state="open" id="radix-_R_9jahbt5v9lb_" role="region">
                    <div className="pt-0 pb-4">
                      <p className="text-base text-muted-foreground">
{"Folio is an AI-powered data workspace that lets teams query databases, build dashboards, and share insights in plain English — no SQL required. Connect your warehouse and start asking questions in minutes."}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-b last:border-b-0 peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:bg-card data-[state=open]:shadow-black/[0.065] data-[state=open]:shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-border" data-orientation="vertical" data-slot="accordion-item" data-state="closed">
                  <h3 className="flex" data-orientation="vertical" data-state="closed">
                    <button aria-controls="radix-_R_ajahbt5v9lb_" aria-expanded="false" className="flex flex-1 items-start justify-between gap-4 text-left font-medium outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer rounded-none border-b py-4 text-base transition-none hover:no-underline data-[state=open]:border-transparent" data-orientation="vertical" data-radix-collection-item="" data-slot="accordion-trigger" data-state="closed" id="radix-_R_2jahbt5v9lb_" type="button">
{"Which databases does Folio support?"}
                      <svg className="lucide lucide-chevron-down pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                  <div aria-labelledby="radix-_R_2jahbt5v9lb_" className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down folio-s65" data-orientation="vertical" data-slot="accordion-content" data-state="closed" hidden id="radix-_R_ajahbt5v9lb_" role="region"></div>
                </div>
                <div className="border-b last:border-b-0 peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:bg-card data-[state=open]:shadow-black/[0.065] data-[state=open]:shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-border" data-orientation="vertical" data-slot="accordion-item" data-state="closed">
                  <h3 className="flex" data-orientation="vertical" data-state="closed">
                    <button aria-controls="radix-_R_bjahbt5v9lb_" aria-expanded="false" className="flex flex-1 items-start justify-between gap-4 text-left font-medium outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer rounded-none border-b py-4 text-base transition-none hover:no-underline data-[state=open]:border-transparent" data-orientation="vertical" data-radix-collection-item="" data-slot="accordion-trigger" data-state="closed" id="radix-_R_3jahbt5v9lb_" type="button">
{"Is my data sent to a third-party AI provider?"}
                      <svg className="lucide lucide-chevron-down pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                  <div aria-labelledby="radix-_R_3jahbt5v9lb_" className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down folio-s65" data-orientation="vertical" data-slot="accordion-content" data-state="closed" hidden id="radix-_R_bjahbt5v9lb_" role="region"></div>
                </div>
                <div className="border-b last:border-b-0 peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:bg-card data-[state=open]:shadow-black/[0.065] data-[state=open]:shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-border" data-orientation="vertical" data-slot="accordion-item" data-state="closed">
                  <h3 className="flex" data-orientation="vertical" data-state="closed">
                    <button aria-controls="radix-_R_cjahbt5v9lb_" aria-expanded="false" className="flex flex-1 items-start justify-between gap-4 text-left font-medium outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer rounded-none border-b py-4 text-base transition-none hover:no-underline data-[state=open]:border-transparent" data-orientation="vertical" data-radix-collection-item="" data-slot="accordion-trigger" data-state="closed" id="radix-_R_4jahbt5v9lb_" type="button">
{"How do I get started?"}
                      <svg className="lucide lucide-chevron-down pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                  <div aria-labelledby="radix-_R_4jahbt5v9lb_" className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down folio-s65" data-orientation="vertical" data-slot="accordion-content" data-state="closed" hidden id="radix-_R_cjahbt5v9lb_" role="region"></div>
                </div>
              </div>
            </div>
            <div className="scroll-mt-20 space-y-4" data-faq-group="customization" id="customization">
              <h3 className="pl-6 font-semibold text-foreground text-lg">
{"Customization"}
              </h3>
              <div className="-space-y-1" data-orientation="vertical" data-slot="accordion">
                <div className="border-b last:border-b-0 peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:bg-card data-[state=open]:shadow-black/[0.065] data-[state=open]:shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-border" data-orientation="vertical" data-slot="accordion-item" data-state="closed">
                  <h3 className="flex" data-orientation="vertical" data-state="closed">
                    <button aria-controls="radix-_R_5lahbt5v9lb_" aria-expanded="false" className="flex flex-1 items-start justify-between gap-4 text-left font-medium outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer rounded-none border-b py-4 text-base transition-none hover:no-underline data-[state=open]:border-transparent" data-orientation="vertical" data-radix-collection-item="" data-slot="accordion-trigger" data-state="closed" id="radix-_R_1lahbt5v9lb_" type="button">
{"Can I edit the SQL Folio generates?"}
                      <svg className="lucide lucide-chevron-down pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                  <div aria-labelledby="radix-_R_1lahbt5v9lb_" className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down folio-s65" data-orientation="vertical" data-slot="accordion-content" data-state="closed" hidden id="radix-_R_5lahbt5v9lb_" role="region"></div>
                </div>
                <div className="border-b last:border-b-0 peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:bg-card data-[state=open]:shadow-black/[0.065] data-[state=open]:shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-border" data-orientation="vertical" data-slot="accordion-item" data-state="closed">
                  <h3 className="flex" data-orientation="vertical" data-state="closed">
                    <button aria-controls="radix-_R_6lahbt5v9lb_" aria-expanded="false" className="flex flex-1 items-start justify-between gap-4 text-left font-medium outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer rounded-none border-b py-4 text-base transition-none hover:no-underline data-[state=open]:border-transparent" data-orientation="vertical" data-radix-collection-item="" data-slot="accordion-trigger" data-state="closed" id="radix-_R_2lahbt5v9lb_" type="button">
{"Does Folio support our team’s semantic layer?"}
                      <svg className="lucide lucide-chevron-down pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                  <div aria-labelledby="radix-_R_2lahbt5v9lb_" className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down folio-s65" data-orientation="vertical" data-slot="accordion-content" data-state="closed" hidden id="radix-_R_6lahbt5v9lb_" role="region"></div>
                </div>
                <div className="border-b last:border-b-0 peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:bg-card data-[state=open]:shadow-black/[0.065] data-[state=open]:shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-border" data-orientation="vertical" data-slot="accordion-item" data-state="closed">
                  <h3 className="flex" data-orientation="vertical" data-state="closed">
                    <button aria-controls="radix-_R_7lahbt5v9lb_" aria-expanded="false" className="flex flex-1 items-start justify-between gap-4 text-left font-medium outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer rounded-none border-b py-4 text-base transition-none hover:no-underline data-[state=open]:border-transparent" data-orientation="vertical" data-radix-collection-item="" data-slot="accordion-trigger" data-state="closed" id="radix-_R_3lahbt5v9lb_" type="button">
{"Can I theme dashboards to match our brand?"}
                      <svg className="lucide lucide-chevron-down pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                  <div aria-labelledby="radix-_R_3lahbt5v9lb_" className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down folio-s65" data-orientation="vertical" data-slot="accordion-content" data-state="closed" hidden id="radix-_R_7lahbt5v9lb_" role="region"></div>
                </div>
              </div>
            </div>
            <div className="scroll-mt-20 space-y-4" data-faq-group="support" id="support">
              <h3 className="pl-6 font-semibold text-foreground text-lg">
{"Support"}
              </h3>
              <div className="-space-y-1" data-orientation="vertical" data-slot="accordion">
                <div className="border-b last:border-b-0 peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:bg-card data-[state=open]:shadow-black/[0.065] data-[state=open]:shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-border" data-orientation="vertical" data-slot="accordion-item" data-state="closed">
                  <h3 className="flex" data-orientation="vertical" data-state="closed">
                    <button aria-controls="radix-_R_5nahbt5v9lb_" aria-expanded="false" className="flex flex-1 items-start justify-between gap-4 text-left font-medium outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer rounded-none border-b py-4 text-base transition-none hover:no-underline data-[state=open]:border-transparent" data-orientation="vertical" data-radix-collection-item="" data-slot="accordion-trigger" data-state="closed" id="radix-_R_1nahbt5v9lb_" type="button">
{"Is there documentation and support available?"}
                      <svg className="lucide lucide-chevron-down pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                  <div aria-labelledby="radix-_R_1nahbt5v9lb_" className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down folio-s65" data-orientation="vertical" data-slot="accordion-content" data-state="closed" hidden id="radix-_R_5nahbt5v9lb_" role="region"></div>
                </div>
                <div className="border-b last:border-b-0 peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:bg-card data-[state=open]:shadow-black/[0.065] data-[state=open]:shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-border" data-orientation="vertical" data-slot="accordion-item" data-state="closed">
                  <h3 className="flex" data-orientation="vertical" data-state="closed">
                    <button aria-controls="radix-_R_6nahbt5v9lb_" aria-expanded="false" className="flex flex-1 items-start justify-between gap-4 text-left font-medium outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer rounded-none border-b py-4 text-base transition-none hover:no-underline data-[state=open]:border-transparent" data-orientation="vertical" data-radix-collection-item="" data-slot="accordion-trigger" data-state="closed" id="radix-_R_2nahbt5v9lb_" type="button">
{"Does Folio integrate with our existing tools?"}
                      <svg className="lucide lucide-chevron-down pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                  <div aria-labelledby="radix-_R_2nahbt5v9lb_" className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down folio-s65" data-orientation="vertical" data-slot="accordion-content" data-state="closed" hidden id="radix-_R_6nahbt5v9lb_" role="region"></div>
                </div>
                <div className="border-b last:border-b-0 peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:bg-card data-[state=open]:shadow-black/[0.065] data-[state=open]:shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-border" data-orientation="vertical" data-slot="accordion-item" data-state="closed">
                  <h3 className="flex" data-orientation="vertical" data-state="closed">
                    <button aria-controls="radix-_R_7nahbt5v9lb_" aria-expanded="false" className="flex flex-1 items-start justify-between gap-4 text-left font-medium outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer rounded-none border-b py-4 text-base transition-none hover:no-underline data-[state=open]:border-transparent" data-orientation="vertical" data-radix-collection-item="" data-slot="accordion-trigger" data-state="closed" id="radix-_R_3nahbt5v9lb_" type="button">
{"How can I report bugs or request features?"}
                      <svg className="lucide lucide-chevron-down pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                  <div aria-labelledby="radix-_R_3nahbt5v9lb_" className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down folio-s65" data-orientation="vertical" data-slot="accordion-content" data-state="closed" hidden id="radix-_R_7nahbt5v9lb_" role="region"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
