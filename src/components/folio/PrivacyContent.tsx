/* Source DOM and utility styles transcribed from Folio. */
export function PrivacyContent() {
  return (
    <main className="flex min-h-screen flex-col">
      <section>
        <div className="container relative mx-auto">
          <div className="border-border border-dashed sm:border-x p-4 text-center lg:p-6">
            <h1 className="mb-2 font-bold text-3xl leading-tight tracking-tighter md:text-4xl">
{"Privacy Policy"}
            </h1>
            <div className="flex items-center justify-center gap-2">
              <p className="text-muted-foreground text-sm">
{"Last updated: "}
{"March 2, 2025"}
              </p>
              <span className="text-muted-foreground text-sm">
{"•"}
              </span>
              <a className="text-fd-primary underline duration-300 hover:text-fd-primary/70 text-sm" href="/terms">
{"Terms of Service"}
              </a>
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
          <div className="border-border border-dashed sm:border-x">
            <div className="grid divide-y divide-dashed divide-border">
              <div className="group p-6 transition-all">
                <h2 className="mb-4 font-semibold text-xl tracking-tight">
{"Our Commitment to Privacy"}
                </h2>
                <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none">
                  <p>
{"At Folio, we take your privacy seriously. Our data intelligence platform is designed so that your warehouse data, query results, and saved views stay protected — only the minimum schema metadata Folio needs to generate SQL ever leaves your environment."}
                  </p>
                </div>
              </div>
              <div className="group p-6 transition-all">
                <h2 className="mb-4 font-semibold text-xl tracking-tight">
{"Data Collection and Usage"}
                </h2>
                <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none">
                  <ul className="ml-4 list-disc space-y-2">
                    <li>
{"We collect essential information to provide and improve the service, including account details, saved queries, and dashboard configurations."}
                    </li>
                    <li>
{"Your warehouse credentials and query results are processed securely and never shared with third parties without explicit consent."}
                    </li>
                    <li>
{"Anonymous usage analytics help us improve query generation accuracy and platform performance."}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group p-6 transition-all">
                <h2 className="mb-4 font-semibold text-xl tracking-tight">
{"Your Warehouse Data"}
                </h2>
                <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none">
                  <p>
{"Query results and underlying tables stay in your warehouse. Folio sends only schema metadata (table names, column names, types) to its AI provider for query generation — never row-level data. We implement strict isolation between customers so your saved queries remain private."}
                  </p>
                </div>
              </div>
              <div className="group p-6 transition-all">
                <h2 className="mb-4 font-semibold text-xl tracking-tight">
{"Data Security"}
                </h2>
                <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none">
                  <ul className="ml-4 list-disc space-y-2">
                    <li>
{"All data is encrypted in transit (TLS 1.3) and at rest (AES-256)."}
                    </li>
                    <li>
{"We implement regular security audits, penetration testing, and SOC 2 compliance."}
                    </li>
                    <li>
{"Warehouse credentials are stored using industry-standard vault encryption with optional Bring-Your-Own-Key on Enterprise plans."}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group p-6 transition-all">
                <h2 className="mb-4 font-semibold text-xl tracking-tight">
{"Your Rights and Controls"}
                </h2>
                <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none">
                  <ul className="ml-4 list-disc space-y-2">
                    <li>
{"Access and export your saved queries and dashboard configurations at any time."}
                    </li>
                    <li>
{"Control your privacy settings, API access, and warehouse connection permissions."}
                    </li>
                    <li>
{"Request complete data deletion upon account closure."}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group p-6 transition-all">
                <h2 className="mb-4 font-semibold text-xl tracking-tight">
{"Contact Us"}
                </h2>
                <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none">
                  <p>
{"If you have any questions about your privacy or how we handle your data, please contact us at privacy@Folio.ai or through our support channels."}
                  </p>
                </div>
              </div>
              <div className="group p-6 transition-all">
                <h2 className="mb-4 font-semibold text-xl tracking-tight">
{"Updates to This Policy"}
                </h2>
                <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none">
                  <p>
{"We may update this privacy policy periodically to reflect changes in our services. Users will be notified of any significant changes through the platform and email."}
                  </p>
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
