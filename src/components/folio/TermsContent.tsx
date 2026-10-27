import { PlusIcon } from '@/components/icons';
/* Source DOM and utility styles transcribed from Folio. */
export function TermsContent() {
  return (
    <main className="flex min-h-screen flex-col">
      <section>
        <div className="container relative mx-auto">
          <div className="border-border border-dashed sm:border-x p-4 text-center lg:p-6">
            <h1 className="mb-2 font-bold text-3xl leading-tight tracking-tighter md:text-4xl">
{"Terms of Service"}
            </h1>
            <p className="text-muted-foreground text-sm">
{"Last updated: "}
{"March 2, 2025"}
            </p>
          </div>
          <div className="-bottom-3 -left-3 absolute z-10 hidden h-6 sm:block">
            <div className="relative h-6 w-6">
              <div className="absolute left-3 h-6 w-px bg-background"></div>
              <div className="absolute top-3 h-px w-6 bg-background"></div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
                <PlusIcon className="lucide lucide-plus text-border/70 dark:text-border" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" />
              </div>
            </div>
          </div>
          <div className="-bottom-3 -right-3 -translate-x-px absolute z-10 hidden h-6 sm:block">
            <div className="relative h-6 w-6">
              <div className="absolute left-3 h-6 w-px bg-background"></div>
              <div className="absolute top-3 h-px w-6 bg-background"></div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
                <PlusIcon className="lucide lucide-plus text-border/70 dark:text-border" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container relative mx-auto">
          <div className="border-border border-dashed sm:border-x">
            <div className="grid divide-y divide-dashed divide-border">
              <div className="group p-6 transition-all">
                <h2 className="mb-4 font-semibold text-xl tracking-tight">
{"Overview"}
                </h2>
                <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none">
                  <p>
{"Folio is an AI-powered data intelligence platform that helps teams connect their data warehouses, ask questions in plain English, and ship dashboards without writing SQL. By using our platform, you agree to these terms."}
                  </p>
                </div>
              </div>
              <div className="group p-6 transition-all">
                <h2 className="mb-4 font-semibold text-xl tracking-tight">
{"Service Description"}
                </h2>
                <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none">
                  <div className="space-y-8">
                    <div>
                      <h3 className="mb-3 font-medium text-card-foreground text-xl">
{"Data Intelligence Services"}
                      </h3>
                      <ul className="ml-4 list-disc space-y-2">
                        <li>
{"Our platform provides natural-language query generation, AI-drafted SQL, automatic chart selection, and connectors for 20+ data warehouses and BI tools."}
                        </li>
                        <li>
{"We offer features including saved queries, scheduled dashboards, semantic-layer integration (dbt, Cube, LookML), and team collaboration surfaces."}
                        </li>
                        <li>
{"Queries and dashboard renders are billed on a usage-based model with guaranteed uptime SLAs."}
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-3 font-medium text-card-foreground text-xl">
{"API and Integrations"}
                      </h3>
                      <ul className="ml-4 list-disc space-y-2">
                        <li>
{"Our platform provides APIs and webhooks for programmatic access to queries, chart embeds, and dashboard exports."}
                        </li>
                        <li>
{"Users must comply with rate limits and fair usage policies for API access."}
                        </li>
                        <li>
{"Third-party integrations are subject to their respective terms of service."}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group p-6 transition-all">
                <h2 className="mb-4 font-semibold text-xl tracking-tight">
{"User Responsibilities"}
                </h2>
                <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none">
                  <div className="mt-4 space-y-3 text-muted-foreground">
                    <p>
{"By using our platform, you agree to:"}
                    </p>
                    <ul className="ml-4 list-disc space-y-2">
                      <li>
{"Comply with all applicable laws and regulations."}
                      </li>
                      <li>
{"Maintain the security of your API keys and warehouse credentials."}
                      </li>
                      <li>
{"Use generated queries responsibly and review them before running on production data."}
                      </li>
                      <li>
{"Not use the platform for harmful, deceptive, or malicious purposes."}
                      </li>
                      <li>
{"Report any security vulnerabilities or misuse promptly."}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="group p-6 transition-all">
                <h2 className="mb-4 font-semibold text-xl tracking-tight">
{"Usage Terms"}
                </h2>
                <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none">
                  <div className="mt-4 space-y-3 text-muted-foreground">
                    <p>
{"Our usage terms include:"}
                    </p>
                    <ul className="ml-4 list-disc space-y-2">
                      <li>
{"Fair usage policies for query volume and API calls."}
                      </li>
                      <li>
{"99.9% uptime SLA for production dashboards."}
                      </li>
                      <li>
{"Query history retention based on your plan."}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="group p-6 transition-all">
                <h2 className="mb-4 font-semibold text-xl tracking-tight">
{"Data Policies"}
                </h2>
                <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none">
                  <div className="mt-4 space-y-3 text-muted-foreground">
                    <p>
{"Our data handling policies ensure:"}
                    </p>
                    <ul className="ml-4 list-disc space-y-2">
                      <li>
{"Your query results and underlying tables stay in your warehouse — only schema metadata is processed by Folio for query generation."}
                      </li>
                      <li>
{"Compliance with GDPR, CCPA, and other data protection regulations."}
                      </li>
                      <li>
{"Data isolation between customers for all queries and saved views."}
                      </li>
                      <li>
{"Clear data retention and deletion policies."}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="group p-6 transition-all">
                <h2 className="mb-4 font-semibold text-xl tracking-tight">
{"Contact Information"}
                </h2>
                <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none">
                  <div className="mt-4 space-y-3 text-muted-foreground">
                    <p>
{"For any questions or concerns regarding these terms, please reach out to our team:"}
                    </p>
                    <div className="flex flex-col space-y-2">
                      <a className="inline-flex items-center text-fd-primary underline duration-300 hover:text-fd-primary/70" href="/contact">
{"Contact Support"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-bottom-3 -left-3 absolute z-10 hidden h-6 sm:block">
            <div className="relative h-6 w-6">
              <div className="absolute left-3 h-6 w-px bg-background"></div>
              <div className="absolute top-3 h-px w-6 bg-background"></div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
                <PlusIcon className="lucide lucide-plus text-border/70 dark:text-border" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" />
              </div>
            </div>
          </div>
          <div className="-bottom-3 -right-3 -translate-x-px absolute z-10 hidden h-6 sm:block">
            <div className="relative h-6 w-6">
              <div className="absolute left-3 h-6 w-px bg-background"></div>
              <div className="absolute top-3 h-px w-6 bg-background"></div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
                <PlusIcon className="lucide lucide-plus text-border/70 dark:text-border" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
