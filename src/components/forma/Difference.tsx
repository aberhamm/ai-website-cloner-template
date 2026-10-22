/* eslint-disable @next/next/no-img-element */
export function Difference() {
  return (
    <section className="bg-muted" aria-label="The Forma difference">
      <div className="mx-auto w-full max-w-[1600px] px-gutter flex items-center gap-20 py-10 max-compact:gap-10 max-tablet:flex-col max-tablet:items-start max-tablet:gap-8 max-mobile:gap-7 max-mobile:py-9">
        <h2 className="flex-[0_0_400px] text-[28px]/9 font-normal tracking-[-0.03em] max-compact:basis-[30%] max-mobile:text-[26px]/8">
          <span>{"More"}</span> <span>{"attention."}</span>
          <br />
          <span>{"Better"}</span> <span>{"movement."}</span>
        </h2>
        <div className="flex flex-1 justify-between gap-7 max-tablet:w-full max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-6">
          <div>
            <p className="text-[28px]/9 tracking-[-0.03em] max-mobile:whitespace-nowrap max-mobile:text-[21px]/7 max-[361px]:text-[19px]">
              {"12 people"}
            </p>
            <span className="mt-2 block text-[13px]/5 text-muted-foreground max-mobile:mt-1 max-mobile:text-xs/[18px]">
              {"Maximum per class"}
            </span>
          </div>
          <div>
            <p className="text-[28px]/9 tracking-[-0.03em] max-mobile:whitespace-nowrap max-mobile:text-[21px]/7 max-[361px]:text-[19px]">
              {"All levels"}
            </p>
            <span className="mt-2 block text-[13px]/5 text-muted-foreground max-mobile:mt-1 max-mobile:text-xs/[18px]">
              {"A place to start. Room to grow."}
            </span>
          </div>
          <div>
            <p className="text-[28px]/9 tracking-[-0.03em] max-mobile:whitespace-nowrap max-mobile:text-[21px]/7 max-[361px]:text-[19px]">
              {"4.9 / 5"}
            </p>
            <span className="mt-2 block text-[13px]/5 text-muted-foreground max-mobile:mt-1 max-mobile:text-xs/[18px]">
              {"From our community"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
