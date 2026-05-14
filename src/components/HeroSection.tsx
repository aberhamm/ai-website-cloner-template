const HERO_LETTERS = "LOOKBOOK".split("");
const HERO_BASE_DELAY = 100; // ms — fires after the intro fade-out begins
const HERO_STAGGER = 80;     // ms per letter

export function HeroSection() {
  return (
    <section className="px-4 lg:px-6">
      <div className="mt-26 mb-6">
        {/* Title — each letter rises from its own overflow-hidden mask with a
         * left-to-right stagger. The ® mark is a separate small mask at the
         * top right that lands just after the last letter. */}
        <h1 className="relative mb-6 flex flex-wrap font-[800] uppercase leading-[0.85] tracking-[-0.06em] text-[clamp(4.5rem,15.5vw,15rem)]">
          {HERO_LETTERS.map((ch, i) => (
            <span key={i} className="overflow-hidden inline-block leading-[0.85]">
              <span
                className="wordmark-letter inline-block"
                style={{ animationDelay: `${HERO_BASE_DELAY + i * HERO_STAGGER}ms` }}
              >
                {ch}
              </span>
            </span>
          ))}
          <span className="overflow-hidden inline-block leading-[0.85] self-start">
            <span
              className="wordmark-letter inline-block text-[0.22em] font-[800] tracking-normal"
              style={{ animationDelay: `${HERO_BASE_DELAY + HERO_LETTERS.length * HERO_STAGGER}ms` }}
            >
              ®
            </span>
          </span>
        </h1>

        <div className="hero-line mb-6 h-[5px] w-full origin-left bg-current" aria-hidden />

        <div className="mb-10 grid grid-cols-8 gap-x-6 gap-y-10 text-xs font-bold md:grid-cols-16 md:gap-6">
          <div className="col-span-3 md:col-span-4">
            <h2 className="uppercase">Lookbook</h2>
          </div>
          <div className="col-span-5 md:col-span-8">
            <h2 className="mb-4 uppercase">Why</h2>
            <p className="text-sm leading-4 tracking-tight md:max-w-[60%]">
              Created by the ++hellohello team, this store and signature collection
              celebrates our collective creativity and passion for apparel.
              Carefully designed.
            </p>
          </div>
          <div className="col-span-3 md:col-span-3">
            <h2 className="mb-4 uppercase">Visit ++ Website</h2>
            <h2 className="uppercase">Shipping &amp; Returns</h2>
          </div>
          <div className="col-span-1 text-right">
            <p className="uppercase">© 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
