const PROMISES = [
  "social features",
  "vanity metrics",
  "invasive tracking",
  "social pressure",
  "collaboration",
  "ads",
] as const;

function PlayIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="16" cy="16" r="16" fill="#FF5924" />
      <polygon points="13,10 23,16 13,22" fill="#fff" />
    </svg>
  );
}

export function ManifestoSection() {
  return (
    <section className="w-full px-4 py-[100px]">
      <div className="mx-auto max-w-[900px] text-center">
        {/* Section label */}
        <p
          className="mb-8 text-center text-sm font-medium uppercase tracking-[3px]"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            color: "#FF5924",
          }}
        >
          OUR MANIFESTO
        </p>

        {/* Large mymind wordmark */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mymind/newmymind_type.svg"
          alt="mymind"
          className="mx-auto mb-10 block w-full max-w-[500px]"
        />

        {/* Manifesto paragraphs */}
        <div
          className="mx-auto max-w-[780px]"
          style={{
            fontFamily: "var(--font-heading), Georgia, serif",
            fontSize: "28px",
            lineHeight: 1.6,
            color: "#000",
          }}
        >
          <p className="mb-8">
            In a time when every company has a bid on our data, when we exchange
            our privacy for information, when every move we make is influenced by
            how others will perceive it, we have little space to call our own.
          </p>
          <p className="mb-8">
            Our minds have been taken captive &ndash; by social approval systems,
            by newsfeeds and timelines, by advertisements and corporate agendas.
            Our information is scattered across platforms, bound by terms and
            conditions.
          </p>
          <p className="mb-8">
            What should have never been lost is now yours again. We promise:
          </p>
        </div>

        {/* Crossed-out promises */}
        <ul className="mx-auto mb-12 flex max-w-[400px] flex-col items-center gap-3">
          {PROMISES.map((item) => (
            <li
              key={item}
              className="line-through"
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontSize: "24px",
                color: "#666",
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <div className="mb-10">
          <a
            href="#"
            className="inline-block rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[2px] text-white"
            style={{
              background: "linear-gradient(#000, rgb(47,52,60))",
              fontFamily: "Nunito, sans-serif",
              fontSize: "14px",
            }}
          >
            TRY IT OUT
          </a>
        </div>

        {/* Video play buttons */}
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-8">
          <a
            href="#"
            className="inline-flex items-center gap-3"
          >
            <PlayIcon />
            <span
              className="text-left uppercase"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                letterSpacing: "2px",
                color: "#000",
              }}
            >
              SEE THE MAGIC OF SMART BOOKMARKING
            </span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-3"
          >
            <PlayIcon />
            <span
              className="text-left uppercase"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                letterSpacing: "2px",
                color: "#000",
              }}
            >
              HOW TO SAVE ANYTHING TO YOUR NEW MIND
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
