/**
 * SearchSection — Centered text block with a looping search-demo video
 * and an orange "watch the video" CTA button.
 */

export function SearchSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1100px] px-6 py-[100px]">
        {/* ---- Section label ---- */}
        <p
          className="mb-6 text-center"
          style={{
            fontFamily:
              "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "3px",
            textTransform: "uppercase" as const,
            color: "#FF5924",
          }}
        >
          No wasted time or energy
        </p>

        {/* ---- Main heading ---- */}
        <h2
          className="mx-auto mb-8 text-center text-black"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(36px, 4.2vw, 56px)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          Folders are dead.
          <br />
          This is your personal search engine.
        </h2>

        {/* ---- Body text ---- */}
        <p
          className="mx-auto max-w-[700px] text-center text-[#4A5465]"
          style={{
            fontFamily:
              "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: 20,
            lineHeight: "36px",
          }}
        >
          Search by color, keyword, brand, date &ndash; whatever you think of
          first. Associative search &amp; visual cues work with your brain to
          find it instantly.
        </p>

        {/* ---- Video ---- */}
        <div className="mt-[60px] overflow-hidden rounded-2xl">
          <video
            className="block w-full"
            src="/videos/mymind/search-video.webm"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* ---- Video CTA ---- */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="group flex items-center gap-3 bg-transparent border-none cursor-pointer"
          >
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110"
              style={{ backgroundColor: "#FF5924" }}
            >
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 8L0 16V0L14 8Z" fill="white" />
              </svg>
            </span>
            <span
              className="text-black"
              style={{
                fontFamily:
                  "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "2px",
                textTransform: "uppercase" as const,
              }}
            >
              Watch the video
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
