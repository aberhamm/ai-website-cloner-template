"use client";
import { CheckIcon } from '@/components/icons';

import { useEffect, useState } from "react";
import { ShowcaseAiPanel } from "./ShowcaseAiPanel";
import { ShowcaseReportsPanel } from "./ShowcaseReportsPanel";
import { ShowcasePipelinePanel } from "./ShowcasePipelinePanel";
import { ShowcaseModelingPanel } from "./ShowcaseModelingPanel";
import "./showcase.css";

const tabs = [
  { title: "Conversational AI", description: "Ask in plain English, get answers instantly", Panel: ShowcaseAiPanel },
  { title: "Reports & charts", description: "Built-in dashboards and revenue metrics", Panel: ShowcaseReportsPanel },
  { title: "Pipeline runs", description: "Track every scheduled query end-to-end", Panel: ShowcasePipelinePanel },
  { title: "Data modeling", description: "Map schemas and define relationships", Panel: ShowcaseModelingPanel },
];

export function ShowcaseSection() {
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [focused, setFocused] = useState(false);

  function selectTab(index: number) {
    setActive(index);
    setCycle((value) => value + 1);
  }

  useEffect(() => {
    if (focused) return;
    const timer = window.setTimeout(() => {
      setActive((index) => (index + 1) % tabs.length);
      setCycle((value) => value + 1);
    }, 16000);
    return () => window.clearTimeout(timer);
  }, [active, cycle, focused]);

  return (
    <section className="py-20 md:py-28" id="showcase">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid items-end gap-8 md:grid-cols-2 md:gap-12">
          <h2 className="text-balance font-bold text-4xl text-foreground tracking-tight md:text-5xl">
{"Why teams prefer Folio to spreadsheets and SQL editors"}
          </h2>
          <p className="max-w-md text-base text-muted-foreground leading-relaxed">
{"Plain English over SQL, beautiful dashboards over CSV exports, and AI that actually explains the chart — not just renders it."}
          </p>
        </div>
        <div
          className="mt-14 grid grid-cols-1 gap-x-4 gap-y-2 border-border border-b sm:grid-cols-2 lg:grid-cols-4"
          role="tablist"
          aria-label="Folio capabilities"
          onFocus={() => setFocused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setFocused(false);
              setCycle((value) => value + 1);
            }
          }}
        >
          {tabs.map((tab, index) => (
            <button
              className={`group relative flex flex-col px-2 pt-3 pb-4 text-left transition-opacity ${active === index ? "opacity-100" : "opacity-60 hover:opacity-100"}`}
              type="button"
              role="tab"
              id={`showcase-tab-${index}`}
              aria-selected={active === index}
              aria-controls={`showcase-panel-${index}`}
              tabIndex={active === index ? 0 : -1}
              key={tab.title}
              onClick={() => selectTab(index)}
              onKeyDown={(event) => {
                let next = index;
                if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
                else if (event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = tabs.length - 1;
                else return;
                event.preventDefault();
                selectTab(next);
                document.getElementById(`showcase-tab-${next}`)?.focus();
              }}
            >
              <p className="font-semibold text-foreground text-sm md:text-base">{tab.title}</p>
              <p className="mt-1 text-muted-foreground text-xs">{tab.description}</p>
              <span className="-bottom-px absolute right-0 left-0 h-0.5 overflow-hidden">
                {active === index && <span key={cycle} className={`block h-full bg-foreground showcase-progress ${focused ? "showcase-progress-paused" : ""}`} />}
              </span>
            </button>
          ))}
        </div>
        <div className="relative mx-auto mt-14 h-[360px] sm:h-[440px] md:h-[520px] lg:h-[640px]">
          {tabs.map(({ Panel }, index) => {
            const rank = (index - active + tabs.length) % tabs.length;
            return (
              <div
                key={index}
                className={`absolute inset-x-0 showcase-card showcase-rank-${rank}`}
                role="tabpanel"
                id={`showcase-panel-${index}`}
                aria-labelledby={`showcase-tab-${index}`}
                aria-hidden={rank !== 0}
                inert={rank !== 0}
              >
                <Panel />
              </div>
            );
          })}
        </div>
<div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span className="flex size-4 items-center justify-center rounded-full bg-emerald-500">
              <CheckIcon className="lucide lucide-check size-2.5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" />
            </span>
{"Static spreadsheet exports"}
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span className="flex size-4 items-center justify-center rounded-full bg-emerald-500">
              <CheckIcon className="lucide lucide-check size-2.5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" />
            </span>
{"Modern data intelligence with AI"}
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span className="flex size-4 items-center justify-center rounded-full bg-emerald-500">
              <CheckIcon className="lucide lucide-check size-2.5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" />
            </span>
{"SQL-only editors and BI tools"}
          </div>
        </div>
      </div>
    </section>
  );
}
