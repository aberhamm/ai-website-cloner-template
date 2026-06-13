/**
 * AISection — Centered text with an inline orange "AI" badge in the heading,
 * followed by a full-width auto-playing video (plays once, no loop).
 */

export function AISection() {
  return (
    <section className="w-full bg-[#FAFAFA]">
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
          It just works
        </p>

        {/* ---- Main heading ---- */}
        <h2
          className="mx-auto mb-8 max-w-[900px] text-center text-black"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
          }}
        >
          Just save it. Artificial Intelligence{" "}
          <span
            className="relative -top-[0.05em] inline-flex items-center rounded-lg text-white"
            style={{
              backgroundColor: "#FF5924",
              borderRadius: 8,
              padding: "4px 12px",
              fontSize: "clamp(24px, 3.1vw, 40px)",
              fontFamily:
                "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontWeight: 600,
              lineHeight: 1.2,
              verticalAlign: "middle",
            }}
          >
            AI
          </span>{" "}
          takes care of the rest.
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
          Save anything with a click and stay in the flow. mymind understands
          what it is and remembers the important details, so you don&apos;t have
          to.
        </p>

        {/* ---- Video ---- */}
        <div className="mt-[60px] overflow-hidden rounded-2xl">
          <video
            className="block w-full"
            src="/videos/mymind/ai-video.webm"
            autoPlay
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
              How to save anything to your new mind
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
