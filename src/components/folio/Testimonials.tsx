/* eslint-disable @next/next/no-img-element -- Preserve the source assets' intrinsic sizing and exact CSS presentation. */
import { PlusIcon } from '@/components/icons';
/* Source DOM and utility styles transcribed from Folio. */
export function Testimonials() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-end gap-8 md:grid-cols-2 md:gap-12">
          <h2 className="text-balance font-bold text-4xl text-foreground tracking-tight md:text-5xl">
{"Loved by teams that ship fast"}
          </h2>
          <p className="max-w-md text-base text-muted-foreground leading-relaxed">
{"From scrappy two-person teams to engineering orgs of 200, here's what people say after they switch."}
          </p>
        </div>
        <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-4">
          <div className="my-4 break-inside-avoid rounded-2xl border border-border bg-background p-4 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="relative flex overflow-hidden rounded-full size-10 shrink-0" data-slot="avatar">
                <img alt="Sarah Chen" className="aspect-square size-full object-cover" data-slot="avatar-image" src="/folio/avatar-images/avatar-01.jpg" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-foreground text-sm">
{"Sarah Chen"}
                </p>
                <p className="truncate text-muted-foreground text-xs">
{"Product Manager · Vercel"}
                </p>
              </div>
            </div>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
{"Every team used to have three tickets sitting in the analyst queue. Folio's plain-English layer means PMs and ops can pull their own numbers, and the SQL it generates is clean enough to trust. Our data team got their afternoons back."}
            </p>
          </div>
          <div className="my-4 break-inside-avoid rounded-2xl border border-border bg-background p-4 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="relative flex overflow-hidden rounded-full size-10 shrink-0" data-slot="avatar">
                <img alt="Marcus Webb" className="aspect-square size-full object-cover" data-slot="avatar-image" src="/folio/avatar-images/avatar-02.jpg" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-foreground text-sm">
{"Marcus Webb"}
                </p>
                <p className="truncate text-muted-foreground text-xs">
{"Founder · Resona"}
                </p>
              </div>
            </div>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
{"We tried Looker. We tried Metabase. Both required someone on the team to maintain semantic models. Folio just connects to the warehouse and our investors can ask 'what's MRR by cohort' in Slack and get a chart back."}
            </p>
          </div>
          <div className="my-4 break-inside-avoid rounded-2xl border border-border bg-background p-4 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="relative flex overflow-hidden rounded-full size-10 shrink-0" data-slot="avatar">
                <img alt="Priya Anand" className="aspect-square size-full object-cover" data-slot="avatar-image" src="/folio/avatar-images/avatar-05.jpg" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-foreground text-sm">
{"Priya Anand"}
                </p>
                <p className="truncate text-muted-foreground text-xs">
{"Head of Engineering · Hatch"}
                </p>
              </div>
            </div>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
{"I keep checking if our dashboards are real because they just… keep updating. Folio drafts the chart, the query, and the right visualization in one pass. We spent zero engineer hours on the latest exec dashboard."}
            </p>
          </div>
          <div className="my-4 break-inside-avoid rounded-2xl border border-border bg-background p-4 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="relative flex overflow-hidden rounded-full size-10 shrink-0" data-slot="avatar">
                <img alt="Diego Ramirez" className="aspect-square size-full object-cover" data-slot="avatar-image" src="/folio/avatar-images/avatar-03.jpg" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-foreground text-sm">
{"Diego Ramirez"}
                </p>
                <p className="truncate text-muted-foreground text-xs">
{"Designer · Northbeam"}
                </p>
              </div>
            </div>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
{"Most BI tools produce charts you'd never put in front of a customer. Folio's defaults are clean enough that I drop them straight into pitch decks. The 'why this chart type' AI nudge is genuinely smart, not gimmicky."}
            </p>
          </div>
          <div className="my-4 break-inside-avoid rounded-2xl border border-border bg-background p-4 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="relative flex overflow-hidden rounded-full size-10 shrink-0" data-slot="avatar">
                <img alt="Aisha Khalid" className="aspect-square size-full object-cover" data-slot="avatar-image" src="/folio/avatar-images/avatar-01.jpg" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-foreground text-sm">
{"Aisha Khalid"}
                </p>
                <p className="truncate text-muted-foreground text-xs">
{"Customer Success Lead · Lattice"}
                </p>
              </div>
            </div>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
{"Half my job used to be writing ad-hoc data requests for CSMs. Now they ask Folio in Slack — 'renewal rate for accounts over $50K' — and get the answer with the SQL attached, in case they want to verify. Tickets to the data team dropped 70%."}
            </p>
          </div>
          <div className="my-4 break-inside-avoid rounded-2xl border border-border bg-background p-4 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="relative flex overflow-hidden rounded-full size-10 shrink-0" data-slot="avatar">
                <img alt="Tom Vasquez" className="aspect-square size-full object-cover" data-slot="avatar-image" src="/folio/avatar-images/avatar-04.jpg" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-foreground text-sm">
{"Tom Vasquez"}
                </p>
                <p className="truncate text-muted-foreground text-xs">
{"CTO · Ledgerline"}
                </p>
              </div>
            </div>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
{"We dropped Mode, Hex, a homegrown SQL UI, and an internal chatbot we never finished. All four. Onboarding the team took about an hour and nobody has asked for the old stack back, which says everything."}
            </p>
          </div>
          <div className="my-4 break-inside-avoid rounded-2xl border border-border bg-background p-4 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="relative flex overflow-hidden rounded-full size-10 shrink-0" data-slot="avatar">
                <img alt="James O'Brien" className="aspect-square size-full object-cover" data-slot="avatar-image" src="/folio/avatar-images/avatar-03.jpg" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-foreground text-sm">
{"James O'Brien"}
                </p>
                <p className="truncate text-muted-foreground text-xs">
{"Engineering Manager · Atlas"}
                </p>
              </div>
            </div>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
{"Plugged Folio into Postgres and BigQuery, granted read-only, and we had the first dashboard the same afternoon. Onboarding took less time than reading the docs would've."}
            </p>
          </div>
          <div className="my-4 break-inside-avoid rounded-2xl border border-border bg-background p-4 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="relative flex overflow-hidden rounded-full size-10 shrink-0" data-slot="avatar">
                <img alt="Yuki Tanaka" className="aspect-square size-full object-cover" data-slot="avatar-image" src="/folio/avatar-images/avatar-05.jpg" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-foreground text-sm">
{"Yuki Tanaka"}
                </p>
                <p className="truncate text-muted-foreground text-xs">
{"Product Designer · Beam Studio"}
                </p>
              </div>
            </div>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
{"What I appreciate is that Folio doesn't force one query language on us. PMs ask in English, analysts review the SQL, engineers wire the dashboard into our app. Same tool, three workflows, all coherent."}
            </p>
          </div>
          <div className="my-4 break-inside-avoid rounded-2xl border border-border bg-background p-4 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="relative flex overflow-hidden rounded-full size-10 shrink-0" data-slot="avatar">
                <img alt="Olivia Park" className="aspect-square size-full object-cover" data-slot="avatar-image" src="/folio/avatar-images/avatar-01.jpg" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-foreground text-sm">
{"Olivia Park"}
                </p>
                <p className="truncate text-muted-foreground text-xs">
{"Growth Lead · Stride"}
                </p>
              </div>
            </div>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
{"Our growth experiments used to wait two days for the data team to write the lift query. Now I ask Folio, get the chart, get the explanation in plain English, and decide before standup ends. Cycle time on experiments dropped 70%."}
            </p>
          </div>
          <div className="my-4 break-inside-avoid rounded-2xl border border-border bg-background p-4 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="relative flex overflow-hidden rounded-full size-10 shrink-0" data-slot="avatar">
                <img alt="Rashid Mansour" className="aspect-square size-full object-cover" data-slot="avatar-image" src="/folio/avatar-images/avatar-04.jpg" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-foreground text-sm">
{"Rashid Mansour"}
                </p>
                <p className="truncate text-muted-foreground text-xs">
{"Head of Product · Helmsley"}
                </p>
              </div>
            </div>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
{"The 'explain this chart' AI is the underrated feature. Execs read the visualization and the one-sentence summary together. Board prep used to take a week of analyst time. Now it's a half-day."}
            </p>
          </div>
          <div className="my-4 break-inside-avoid rounded-2xl border border-border bg-background p-4 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="relative flex overflow-hidden rounded-full size-10 shrink-0" data-slot="avatar">
                <img alt="Emma Thornton" className="aspect-square size-full object-cover" data-slot="avatar-image" src="/folio/avatar-images/avatar-05.jpg" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-foreground text-sm">
{"Emma Thornton"}
                </p>
                <p className="truncate text-muted-foreground text-xs">
{"Founder · Nimbus"}
                </p>
              </div>
            </div>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
{"Was paying $2.4K/mo for a BI stack that did half of what Folio does on its own. Cancelled everything, switched, and used the savings to hire a part-time analyst who actually spends her time on modeling."}
            </p>
          </div>
          <div className="my-4 break-inside-avoid rounded-2xl border border-border bg-background p-4 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="relative flex overflow-hidden rounded-full size-10 shrink-0" data-slot="avatar">
                <img alt="Anil Reddy" className="aspect-square size-full object-cover" data-slot="avatar-image" src="/folio/avatar-images/avatar-02.jpg" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-foreground text-sm">
{"Anil Reddy"}
                </p>
                <p className="truncate text-muted-foreground text-xs">
{"VP Engineering · Pinch"}
                </p>
              </div>
            </div>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
{"The AI explanation layer is the underrated piece. Charts used to bounce back from stakeholders with 'what does this actually mean?' Now Folio drafts the takeaway alongside the visualization. Slack threads about charts went down to almost zero."}
            </p>
          </div>
          <div aria-hidden="true" className="my-4 flex h-44 break-inside-avoid items-center justify-center rounded-3xl border-2 border-border border-dashed bg-transparent">
            <PlusIcon className="lucide lucide-plus size-7 text-muted-foreground/40" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" />
          </div>
        </div>
      </div>
    </section>
  );
}
