"use client";

import { useState } from "react";

interface TabData {
  id: string;
  label: string;
  sectionLabel: string;
  heading: string;
}

const TABS: TabData[] = [
  {
    id: "designers",
    label: "Designers",
    sectionLabel: "MADE FOR DESIGNERS",
    heading: "Create instant, boundless visual moodboards.",
  },
  {
    id: "writers",
    label: "Writers",
    sectionLabel: "MADE FOR WRITERS",
    heading: "Write without distractions.",
  },
  {
    id: "marketers",
    label: "Marketers",
    sectionLabel: "MADE FOR MARKETERS",
    heading: "Save & find quotes & highlights that inspire you.",
  },
  {
    id: "researchers",
    label: "Researchers",
    sectionLabel: "MADE FOR RESEARCHERS",
    heading: "Collect all your research & references in one place.",
  },
  {
    id: "developers",
    label: "Developers",
    sectionLabel: "MADE FOR DEVELOPERS",
    heading: "Your private resource & reference hub.",
  },
  {
    id: "everyone",
    label: "Everyone",
    sectionLabel: "MADE FOR EVERYONE",
    heading: "A place for everything you want to remember.",
  },
];

export function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("designers");

  const activeData = TABS.find((t) => t.id === activeTab) ?? TABS[0];

  return (
    <section
      className="px-6 py-16 md:py-20 lg:py-[80px]"
      style={{ backgroundColor: "#FFF1F1" }}
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section label */}
        <p
          className="text-center"
          style={{
            fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#FF5924",
          }}
        >
          Use Cases
        </p>

        {/* Section heading */}
        <h2
          className="mx-auto mt-4 max-w-[700px] text-center"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.2,
            fontWeight: 400,
            color: "#1a1a1a",
          }}
        >
          For visual minds of all kinds.
        </h2>

        {/* Tab pills */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          role="tablist"
          aria-label="Use case categories"
        >
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className="cursor-pointer transition-colors duration-200"
                style={{
                  fontFamily: "Nunito, Inter, 'Helvetica Neue', Arial, sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  padding: "10px 24px",
                  borderRadius: "24px",
                  border: isActive ? "1px solid #FF5924" : "1px solid #ddd",
                  backgroundColor: isActive ? "#FF5924" : "transparent",
                  color: isActive ? "#fff" : "#1a1a1a",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div
          id={`panel-${activeData.id}`}
          role="tabpanel"
          aria-labelledby={activeData.id}
          className="mt-12 text-center"
        >
          <p
            style={{
              fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#FF5924",
            }}
          >
            {activeData.sectionLabel}
          </p>
          <h3
            className="mx-auto mt-4 max-w-[700px]"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              lineHeight: 1.2,
              fontWeight: 400,
              color: "#1a1a1a",
            }}
          >
            {activeData.heading}
          </h3>
        </div>
      </div>
    </section>
  );
}
