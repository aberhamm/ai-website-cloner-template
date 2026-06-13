/**
 * ExtensionSection — Two-column layout: serif heading + body text on left,
 * phone-shaped video mockup on right. Includes a "smart bookmarking" video CTA.
 */

export function ExtensionSection() {
  return (
    <section className="w-full bg-white">
      <div
        className="mx-auto flex max-w-[1100px] flex-col items-center gap-12 px-6 py-[100px] lg:flex-row lg:items-center lg:gap-16"
      >
        {/* ---- Left column: text ---- */}
        <div className="flex-1 lg:max-w-[540px]">
          <h2
            className="mb-8 text-black"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(36px, 4.2vw, 56px)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            The first and only
            <br />
            extension for your
            <br />
            real mind.
          </h2>

          <p
            className="text-[#4A5465]"
            style={{
              fontFamily:
                "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: 20,
              lineHeight: "36px",
            }}
          >
            One place for everything you care about. You don&apos;t need to file
            it, label or even tag it.{" "}
            <span
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontStyle: "italic",
              }}
            >
              magically organized and visualized for you.
            </span>
          </p>
        </div>

        {/* ---- Right column: phone video mockup ---- */}
        <div className="flex flex-1 justify-center">
          <div
            className="relative overflow-hidden bg-black"
            style={{
              width: "min(320px, 80vw)",
              aspectRatio: "456 / 972",
              borderRadius: 40,
              boxShadow:
                "0 25px 60px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(0, 0, 0, 0.08)",
            }}
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/mymind/phone-video.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>

      {/* ---- Video CTA ---- */}
      <div className="mx-auto flex max-w-[1100px] justify-center px-6 pb-16">
        <button
          type="button"
          className="group flex items-center gap-3 bg-transparent border-none cursor-pointer"
        >
          {/* Orange play circle */}
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
            See the magic of smart bookmarking
          </span>
        </button>
      </div>
    </section>
  );
}
