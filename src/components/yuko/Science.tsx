/* eslint-disable @next/next/no-img-element */
export function Science() {
  return (
    <section
      className="grid grid-cols-1 [&>*]:min-w-0 gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-column xl:grid-cols-3"
      id="science"
      aria-labelledby="science-title"
    >
      <div className="flex flex-col items-start gap-5 px-1 md:px-0 md:py-4 xl:gap-6 xl:p-6 [&>p]:w-full md:max-xl:gap-5 [&_h2]:max-md:text-[28px]">
        <h2
          id="science-title"
          className="text-2xl leading-8 tracking-[-0.03em]"
        >
          {"Know what goes in."}
        </h2>
        <p>
          {"An ingredient name is only the beginning."}
          <br className="max-[1199px]:hidden" />
          {" The amount, the formula and the research matter too."}
        </p>
        <div className="w-full">
          <details
            className="group border-t border-border py-4 last:border-b"
            name="science"
            open={true}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[13px] leading-6 max-md:min-h-7 [&::-webkit-details-marker]:hidden">
              {"Why this ingredient?"}
              <span
                className="relative size-6 flex-[0_0_24px] before:absolute before:top-[11.5px] before:left-[9px] before:h-px before:w-1.5 before:bg-current before:content-[''] after:absolute after:top-[11.5px] after:left-[9px] after:h-px after:w-1.5 after:rotate-90 after:bg-current after:content-[''] group-open:after:rotate-0"
                aria-hidden="true"
              ></span>
            </summary>
            <p className="max-w-[344px] pt-2 text-muted max-md:max-w-full max-md:pr-6">
              {
                "Research on one ingredient doesn’t establish what a finished product can do. We keep that distinction clear."
              }
            </p>
          </details>
          <details
            className="group border-t border-border py-4 last:border-b"
            name="science"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[13px] leading-6 max-md:min-h-7 [&::-webkit-details-marker]:hidden">
              {"Why this combination?"}
              <span
                className="relative size-6 flex-[0_0_24px] before:absolute before:top-[11.5px] before:left-[9px] before:h-px before:w-1.5 before:bg-current before:content-[''] after:absolute after:top-[11.5px] after:left-[9px] after:h-px after:w-1.5 after:rotate-90 after:bg-current after:content-[''] group-open:after:rotate-0"
                aria-hidden="true"
              ></span>
            </summary>
            <p className="max-w-[344px] pt-2 text-muted max-md:max-w-full max-md:pr-6">
              {
                "A formula is more than a list of ingredients. The amount of each ingredient and the complete formulation matter too."
              }
            </p>
          </details>
          <details
            className="group border-t border-border py-4 last:border-b"
            name="science"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[13px] leading-6 max-md:min-h-7 [&::-webkit-details-marker]:hidden">
              {"What can you expect?"}
              <span
                className="relative size-6 flex-[0_0_24px] before:absolute before:top-[11.5px] before:left-[9px] before:h-px before:w-1.5 before:bg-current before:content-[''] after:absolute after:top-[11.5px] after:left-[9px] after:h-px after:w-1.5 after:rotate-90 after:bg-current after:content-[''] group-open:after:rotate-0"
                aria-hidden="true"
              ></span>
            </summary>
            <p className="max-w-[344px] pt-2 text-muted max-md:max-w-full max-md:pr-6">
              {
                "Start with the label and the evidence behind the finished formula. Our care notes link to sources you can explore for yourself."
              }
            </p>
          </details>
        </div>
        <a
          className="inline-flex min-h-8 items-center justify-center rounded-full px-4 py-2 text-[13px] leading-4 whitespace-nowrap transition-colors duration-180 ease-[ease] motion-reduce:transition-none max-md:min-h-10 bg-control hover:bg-[#20202016] w-fit gap-6 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-180 [&_svg]:ease-[ease] hover:[&_svg]:translate-x-0.5 motion-reduce:[&_svg]:transition-none"
          tabIndex={0}
          href="#care-notes"
        >
          {"Read the science "}
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="none"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
      </div>
      <div className="relative w-full overflow-hidden rounded-card bg-white md:self-center xl:col-span-2 xl:self-start aspect-[904/516]">
        <div className="absolute inset-0 [&_img]:object-cover">
          <img
            alt="A softly lit side profile in muted natural tones"
            loading="lazy"
            decoding="async"
            src="/images/science-muted.webp"
            className="extracted-fill"
          />
        </div>
      </div>
    </section>
  );
}
