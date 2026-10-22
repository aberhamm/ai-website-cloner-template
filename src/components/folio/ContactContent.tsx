/* Source DOM and utility styles transcribed from Folio. */
export function ContactContent() {
  return (
    <main className="flex min-h-screen flex-col">
      <section>
        <div className="container relative mx-auto">
          <div className="border-border border-dashed sm:border-x relative z-0 w-full overflow-hidden bg-dashed px-4 pt-12 pb-12 sm:px-8 sm:pt-16 md:px-16 md:pt-24 lg:pt-32">
            <div className="absolute inset-0 bg-background -z-20"></div>
            <div className="z-0 absolute inset-0 h-full w-full pointer-events-none animate-fade-in">
              <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[450px] sm:h-[500px] sm:w-[550px] md:h-[600px] md:w-[650px] translate-x-1/3 -translate-y-1/3 select-none folio-s67"></div>
              <div className="pointer-events-none absolute left-0 bottom-0 h-[400px] w-[450px] sm:h-[500px] sm:w-[550px] md:h-[600px] md:w-[650px] -translate-x-1/3 translate-y-1/3 select-none folio-s68"></div>
            </div>
            <div className="mx-auto flex flex-col items-center justify-center gap-4 sm:gap-6">
              <div className="flex flex-col gap-3 sm:gap-4">
                <h1 className="max-w-xs sm:max-w-lg md:max-w-2xl text-center font-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter animate-fade-in-up">
{"Get in Touch"}
                </h1>
                <p className="max-w-xs sm:max-w-md md:max-w-2xl text-center text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed tracking-tight px-4 sm:px-0 animate-fade-in-up delay-200">
{"Have questions about querying your data with AI? Want to see a demo? Our team is here to help you get started."}
                </p>
              </div>
            </div>
          </div>
          <div className="-bottom-3 -left-3 absolute z-10 hidden h-6 sm:block">
            <div className="relative h-6 w-6">
              <div className="absolute left-3 h-6 w-px bg-background"></div>
              <div className="absolute top-3 h-px w-6 bg-background"></div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
                <svg className="lucide lucide-plus text-border/70 dark:text-border" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="-bottom-3 -right-3 -translate-x-px absolute z-10 hidden h-6 sm:block">
            <div className="relative h-6 w-6">
              <div className="absolute left-3 h-6 w-px bg-background"></div>
              <div className="absolute top-3 h-px w-6 bg-background"></div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
                <svg className="lucide lucide-plus text-border/70 dark:text-border" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container relative mx-auto">
          <div className="border-border border-dashed sm:border-x py-12 md:py-16 lg:py-20">
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 px-6 md:px-16">
              <div className="order-2 lg:order-1">
                <div className="border border-border bg-card/50 backdrop-blur-sm">
                  <div className="p-6">
                    <form className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label className="flex select-none items-center gap-2 font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50" data-slot="label" htmlFor="firstName">
{"First Name"}
                          </label>
                          <input className="flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40" data-slot="input" id="firstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <label className="flex select-none items-center gap-2 font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50" data-slot="label" htmlFor="lastName">
{"Last Name"}
                          </label>
                          <input className="flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40" data-slot="input" id="lastName" placeholder="Doe" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="flex select-none items-center gap-2 font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50" data-slot="label" htmlFor="email">
{"Email"}
                        </label>
                        <input className="flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40" data-slot="input" id="email" placeholder="john@company.com" required type="email" />
                      </div>
                      <div className="space-y-2">
                        <label className="flex select-none items-center gap-2 font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50" data-slot="label" htmlFor="company">
{"Company"}
                        </label>
                        <input className="flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40" data-slot="input" id="company" placeholder="Acme Inc." />
                      </div>
                      <div className="space-y-2">
                        <label className="flex select-none items-center gap-2 font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50" data-slot="label" htmlFor="subject">
{"Subject"}
                        </label>
                        <input className="flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40" data-slot="input" id="subject" placeholder="How can we help?" required />
                      </div>
                      <div className="space-y-2">
                        <label className="flex select-none items-center gap-2 font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50" data-slot="label" htmlFor="message">
{"Message"}
                        </label>
                        <textarea className="field-sizing-content flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40 min-h-[120px]" data-slot="textarea" id="message" placeholder="Tell us more about your needs..." required></textarea>
                      </div>
                      <button className="inline-flex shrink-0 items-center justify-center whitespace-nowrap font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-full group gap-3" data-slot="button" type="submit">
{"Send Message"}
                        <svg className="lucide lucide-send-horizontal group-hover:-rotate-12 h-4 w-4 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"></path>
                          <path d="M6 12h16"></path>
                        </svg>
                      </button>
                      <p className="text-center text-muted-foreground text-xs">
{"Demo form — submissions are simulated. Wire it to your own endpoint in "}
                        <code>
{"handleSubmit"}
                        </code>
{". Built with"}
{" "}
                        <a className="underline underline-offset-4 transition-colors hover:text-foreground" href="https://ruixen.com" rel="noopener noreferrer" target="_blank">
{"Ruixen UI"}
                        </a>
{"."}
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground">
{"Let's Start a Conversation"}
                  </h2>
                  <p className="text-muted-foreground">
{"Whether you're evaluating Folio for your data team, connecting a new warehouse, or exploring how AI can replace your SQL editor, we'd love to hear from you."}
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <a className="group border border-border bg-card/50 p-4 transition-all hover:border-primary/50 hover:bg-card" href="mailto:hello@Folio.ai">
                    <div className="space-y-1">
                      <h3 className="font-medium text-foreground">
{"Email Us"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
{"Our team typically responds within 24 hours"}
                      </p>
                      <p className="text-sm font-medium text-primary">
{"hello@Folio.ai"}
                      </p>
                    </div>
                  </a>
                  <a className="group border border-border bg-card/50 p-4 transition-all hover:border-primary/50 hover:bg-card" href="#">
                    <div className="space-y-1">
                      <h3 className="font-medium text-foreground">
{"Live Chat"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
{"Available Monday to Friday, 9am-6pm EST"}
                      </p>
                      <p className="text-sm font-medium text-primary">
{"Start a conversation"}
                      </p>
                    </div>
                  </a>
                  <a className="group border border-border bg-card/50 p-4 transition-all hover:border-primary/50 hover:bg-card" href="#">
                    <div className="space-y-1">
                      <h3 className="font-medium text-foreground">
{"Office"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
{"Visit our headquarters"}
                      </p>
                      <p className="text-sm font-medium text-primary">
{"San Francisco, CA"}
                      </p>
                    </div>
                  </a>
                  <a className="group border border-border bg-card/50 p-4 transition-all hover:border-primary/50 hover:bg-card" href="#">
                    <div className="space-y-1">
                      <h3 className="font-medium text-foreground">
{"Business Hours"}
                      </h3>
                      <p className="text-sm text-muted-foreground">
{"We work globally across timezones"}
                      </p>
                      <p className="text-sm font-medium text-primary">
{"Mon-Fri: 9am-6pm EST"}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="-bottom-3 -left-3 absolute z-10 hidden h-6 sm:block">
            <div className="relative h-6 w-6">
              <div className="absolute left-3 h-6 w-px bg-background"></div>
              <div className="absolute top-3 h-px w-6 bg-background"></div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
                <svg className="lucide lucide-plus text-border/70 dark:text-border" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="-bottom-3 -right-3 -translate-x-px absolute z-10 hidden h-6 sm:block">
            <div className="relative h-6 w-6">
              <div className="absolute left-3 h-6 w-px bg-background"></div>
              <div className="absolute top-3 h-px w-6 bg-background"></div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
                <svg className="lucide lucide-plus text-border/70 dark:text-border" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container relative mx-auto">
          <div className="border-border border-dashed sm:border-x relative overflow-hidden">
            <div className="relative z-10 mx-6 md:mx-16 border-l border-r border-border overflow-hidden">
              <div className="grid gap-8 px-6 py-16 sm:grid-cols-2 md:py-20">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground max-w-xl">
{"Ready to ship your first dashboard?"}
                </h2>
                <div className="flex w-full items-center">
                  <div className="max-w-xl space-y-4">
                    <p className="text-muted-foreground text-sm md:text-base">
{"Connect your warehouse, ask your first question, and get a chart back before the meeting ends. No SQL required."}
                    </p>
                    <div className="flex flex-row gap-3">
                      <a className="inline-flex shrink-0 items-center justify-center whitespace-nowrap font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 group gap-4" data-slot="button" href="/">
{"Explore Platform"}
{" "}
                        <svg className="lucide lucide-arrow-up-right group-hover:-rotate-12 size-4 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 7h10v10"></path>
                          <path d="M7 17 17 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="z-0 absolute inset-0 h-full w-full pointer-events-none animate-fade-in">
                  <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[450px] sm:h-[500px] sm:w-[550px] md:h-[600px] md:w-[650px] lg:h-[700px] lg:w-[750px] translate-x-1/2 translate-y-1/2 select-none folio-s66"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="-bottom-3 -left-3 absolute z-10 hidden h-6 sm:block">
            <div className="relative h-6 w-6">
              <div className="absolute left-3 h-6 w-px bg-background"></div>
              <div className="absolute top-3 h-px w-6 bg-background"></div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
                <svg className="lucide lucide-plus text-border/70 dark:text-border" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="-bottom-3 -right-3 -translate-x-px absolute z-10 hidden h-6 sm:block">
            <div className="relative h-6 w-6">
              <div className="absolute left-3 h-6 w-px bg-background"></div>
              <div className="absolute top-3 h-px w-6 bg-background"></div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
                <svg className="lucide lucide-plus text-border/70 dark:text-border" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
