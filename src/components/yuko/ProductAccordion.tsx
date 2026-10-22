"use client";
import { useId, useState } from "react";
export function ProductAccordion({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  const id = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div>
      {items.map((item, index) => {
        const expanded = openIndex === index;
        return (
          <div
            className="border-t border-border [&_h3]:[font:inherit]"
            key={item.title}
          >
            <h3>
              <button
                type="button"
                className="group/accordion flex min-h-[72px] w-full items-center justify-between gap-4 py-[22px] text-left focus-visible:outline-offset-[-2px] md:gap-5 md:py-6"
                id={`${id}-${index}-trigger`}
                aria-expanded={expanded}
                aria-controls={`${id}-${index}-panel`}
                onClick={() => setOpenIndex(expanded ? null : index)}
              >
                {item.title}
                <span
                  className="mx-2 size-1.5 shrink-0 rotate-45 border-t-[1.5px] border-r-[1.5px] border-current transition-transform duration-180 ease-[ease] group-aria-expanded/accordion:rotate-135 motion-reduce:transition-none md:mx-[13px]"
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={`${id}-${index}-panel`}
              aria-labelledby={`${id}-${index}-trigger`}
              aria-hidden={!expanded}
              inert={!expanded}
              data-state={expanded ? "open" : "closed"}
              className="overflow-hidden product-accordion-panel"
            >
              <div className="pr-4 pb-6 md:pr-8 [&_p]:max-w-[700px] [&_p]:text-muted">
                <p>{item.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
