"use client";
import { ChevronDownIcon } from '@/components/icons';

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";

// Exact questions and answers extracted from the source accordion.
const groups = [
  {
    "id": "general",
    "label": "General",
    "items": [
      {
        "question": "What is Folio?",
        "answer": "Folio is an AI-powered data workspace that lets teams query databases, build dashboards, and share insights in plain English — no SQL required. Connect your warehouse and start asking questions in minutes."
      },
      {
        "question": "Which databases does Folio support?",
        "answer": "Folio connects to Postgres, MySQL, Snowflake, BigQuery, Redshift, and most popular warehouses out of the box. We also support CSV uploads and read-only views into production data with column-level permissions."
      },
      {
        "question": "Is my data sent to a third-party AI provider?",
        "answer": "Folio uses AI to generate SQL, but your query results and underlying tables stay in your warehouse. Only schema metadata is sent for context — never row-level data. Enterprise plans include a private model deployment option."
      },
      {
        "question": "How do I get started?",
        "answer": "Sign up, connect your warehouse with read-only credentials, and ask your first question. Most teams have a useful dashboard live within an hour."
      }
    ]
  },
  {
    "id": "customization",
    "label": "Customization",
    "items": [
      {
        "question": "Can I edit the SQL Folio generates?",
        "answer": "Yes — every generated query is editable, version-controlled, and reviewable. Analysts can refine the SQL before saving it as a reusable view, and the AI learns from edits to improve future suggestions."
      },
      {
        "question": "Does Folio support our team’s semantic layer?",
        "answer": "Folio reads dbt models, Cube definitions, and LookML if you’ve already invested in a semantic layer. If you haven’t, the AI builds one as you go — every saved query becomes a reusable concept."
      },
      {
        "question": "Can I theme dashboards to match our brand?",
        "answer": "Dashboards support custom palettes, logo placement, and exportable themes. Embed them in your app, share them publicly, or pin them to a Slack channel with a single URL."
      }
    ]
  },
  {
    "id": "support",
    "label": "Support",
    "items": [
      {
        "question": "Is there documentation and support available?",
        "answer": "Yes — Folio ships with comprehensive docs, query examples for common schemas, and tutorials. Pro plans include a dedicated Slack channel with our team; Enterprise gets a named solutions engineer."
      },
      {
        "question": "Does Folio integrate with our existing tools?",
        "answer": "Folio integrates with Slack, Notion, Linear, GitHub, and most BI exporters. Pin a chart to a Slack channel, embed it in Notion, or post a query result on a Linear ticket — pick the surface your team already uses."
      },
      {
        "question": "How can I report bugs or request features?",
        "answer": "Open an issue on our GitHub or reach out in our community channel. We triage bugs quickly and ship a fresh release roughly every two weeks."
      }
    ]
  }
] as const;
type GroupId = (typeof groups)[number]["id"];

function FaqItem({ question, answer, open, id, onToggle }: {
  question: string;
  answer: string;
  open: boolean;
  id: string;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [present, setPresent] = useState(open);
  const state = open ? "open" : "closed";

  useEffect(() => {
    const content = contentRef.current;
    const inner = content?.firstElementChild;
    if (!content || !inner) return;
    const measure = () => content.style.setProperty("--radix-accordion-content-height", `${inner.getBoundingClientRect().height}px`);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(inner);
    return () => observer.disconnect();
  }, [open, present]);

  function moveFocus(event: KeyboardEvent<HTMLButtonElement>) {
    const buttons = Array.from(event.currentTarget.closest('[data-slot="accordion"]')?.querySelectorAll<HTMLButtonElement>('button') ?? []);
    const index = buttons.indexOf(event.currentTarget);
    const next = event.key === "ArrowDown" ? (index + 1) % buttons.length
      : event.key === "ArrowUp" ? (index - 1 + buttons.length) % buttons.length
      : event.key === "Home" ? 0 : event.key === "End" ? buttons.length - 1 : -1;
    if (next < 0) return;
    event.preventDefault();
    buttons[next]?.focus();
  }

  return (
    <div className="border-b last:border-b-0 peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:bg-card data-[state=open]:shadow-black/[0.065] data-[state=open]:shadow-sm data-[state=open]:ring-1 data-[state=open]:ring-border" data-orientation="vertical" data-slot="accordion-item" data-state={state}>
      <h3 className="flex" data-orientation="vertical" data-state={state}>
        <button aria-controls={`${id}-content`} aria-expanded={open} className="flex flex-1 items-start justify-between gap-4 text-left font-medium outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer rounded-none border-b py-4 text-base transition-none hover:no-underline data-[state=open]:border-transparent" data-orientation="vertical" data-radix-collection-item="" data-slot="accordion-trigger" data-state={state} id={`${id}-trigger`} type="button" onKeyDown={moveFocus} onClick={() => { setPresent(true); onToggle(); }}>
          {question}
          <ChevronDownIcon className="lucide lucide-chevron-down pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" />
        </button>
      </h3>
      <div ref={contentRef} aria-labelledby={`${id}-trigger`} className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" data-orientation="vertical" data-slot="accordion-content" data-state={state} hidden={!open && !present} id={`${id}-content`} role="region" onAnimationEnd={() => { if (!open) setPresent(false); }}>
        {(open || present) && <div className="pt-0 pb-4"><p className="text-base text-muted-foreground">{answer}</p></div>}
      </div>
    </div>
  );
}

export function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const uniqueId = useId();
  const [activeCategory, setActiveCategory] = useState<GroupId>("general");
  const [openItems, setOpenItems] = useState<Record<GroupId, number | null>>({ general: 0, customization: null, support: null });

  useEffect(() => {
    const sections = Array.from(sectionRef.current?.querySelectorAll<HTMLElement>("[data-faq-group]") ?? []);
    const observer = new IntersectionObserver((entries) => {
      const entering = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      const group = entering[0]?.target.getAttribute("data-faq-group") as GroupId | undefined;
      if (group) setActiveCategory(group);
    }, { rootMargin: "-80px 0px -55% 0px", threshold: 0 });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function selectCategory(id: GroupId) {
    setActiveCategory(id);
    sectionRef.current?.querySelector(`[data-faq-group="${id}"]`)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
  }

  return (
    <section ref={sectionRef} className="bg-background py-16 md:py-24">
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
            {groups.map(group => (
              <button key={group.id} aria-current={activeCategory === group.id ? "true" : undefined} className={`block w-fit cursor-pointer py-2 text-left text-sm transition-colors max-md:px-2 md:py-1.5 ${activeCategory === group.id ? "font-medium text-foreground" : "text-muted-foreground hover:text-foreground"}`} type="button" onClick={() => selectCategory(group.id)}>
                {group.label}
              </button>
            ))}
          </nav>
          <div className="space-y-12 max-md:mt-6 md:col-span-3">
            {groups.map(group => (
              <div key={group.id} className="scroll-mt-20 space-y-4" data-faq-group={group.id} id={group.id}>
                <h3 className="pl-6 font-semibold text-foreground text-lg">{group.label}</h3>
                <div className="-space-y-1" data-orientation="vertical" data-slot="accordion">
                  {group.items.map((item, index) => (
                    <FaqItem key={item.question} {...item} id={`${uniqueId}-${group.id}-${index}`} open={openItems[group.id] === index} onToggle={() => setOpenItems(current => ({ ...current, [group.id]: current[group.id] === index ? null : index }))} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
