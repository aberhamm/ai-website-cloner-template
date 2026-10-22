/* eslint-disable @next/next/no-img-element */
export function Instructors() {
  return (
    <section id="instructors" className="bg-[#ffe9ec]">
      <div className="mx-auto w-full max-w-[1600px] px-gutter flex flex-col gap-10 py-20 max-tablet:py-16 max-mobile:gap-8 max-mobile:py-14">
        <div className="flex flex-col gap-4">
          <h2>
            <span>{"You're"}</span>
            {" "}
            <span>{"in"}</span>
            {" "}
            <span>{"good"}</span>
            {" "}
            <span>{"hands."}</span>
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-20 max-compact:gap-10 max-tablet:gap-7 max-mobile:grid-cols-1 max-mobile:gap-8">
          <article className="flex flex-col gap-6 max-mobile:gap-5">
            <div className="instructor-photo" data-portrait="0">
              <div className="relative size-full overflow-hidden">
                <img alt="Maya Bennett" draggable="false" loading="lazy" width="800" height="1000" decoding="async" data-nimg="1" className="instructor-portrait" sizes="(max-width: 700px) 135vw, 45vw" src="/images/instructors/maya-bennett.png" />
              </div>
            </div>
            <div>
              <h3 className="mb-1 max-mobile:text-[28px]/9">{"Maya Bennett"}</h3>
              <p className="text-[13px]/5 text-muted-foreground">{"Founder & senior instructor"}</p>
            </div>
            <p className="whitespace-pre-line max-tablet:whitespace-normal max-mobile:whitespace-pre-line">{"Precise cues. Athletic movement.\nA thoughtful push when you need it."}</p>
            <p className="text-[13px]/5 text-muted-foreground">{"8 years teaching, Reformer Flow"}</p>
          </article>
          <article className="flex flex-col gap-6 max-mobile:gap-5">
            <div className="instructor-photo" data-portrait="1">
              <div className="relative size-full overflow-hidden">
                <img alt="Sofia Martinez" draggable="false" loading="lazy" width="800" height="1000" decoding="async" data-nimg="1" className="instructor-portrait" sizes="(max-width: 700px) 135vw, 45vw" src="/images/instructors/sofia-martinez.png" />
              </div>
            </div>
            <div>
              <h3 className="mb-1 max-mobile:text-[28px]/9">{"Sofia Martinez"}</h3>
              <p className="text-[13px]/5 text-muted-foreground">{"Pilates instructor"}</p>
            </div>
            <p className="whitespace-pre-line max-tablet:whitespace-normal max-mobile:whitespace-pre-line">{"Calm, clear guidance that makes\nyour first class feel like your fifth."}</p>
            <p className="text-[13px]/5 text-muted-foreground">{"5 years teaching, Foundations"}</p>
          </article>
          <article className="flex flex-col gap-6 max-mobile:gap-5">
            <div className="instructor-photo" data-portrait="2">
              <div className="relative size-full overflow-hidden">
                <img alt="Chloe Nguyen" draggable="false" loading="lazy" width="800" height="1000" decoding="async" data-nimg="1" className="instructor-portrait" sizes="(max-width: 700px) 179vw, 60vw" src="/images/instructors/chloe-nguyen.png" />
              </div>
            </div>
            <div>
              <h3 className="mb-1 max-mobile:text-[28px]/9">{"Chloe Nguyen"}</h3>
              <p className="text-[13px]/5 text-muted-foreground">{"Pilates instructor"}</p>
            </div>
            <p className="whitespace-pre-line max-tablet:whitespace-normal max-mobile:whitespace-pre-line">{"Creative sequences and steady\nencouragement. Expect a challenge."}</p>
            <p className="text-[13px]/5 text-muted-foreground">{"4 years teaching, Reformer Sculpt"}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
