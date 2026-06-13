import Image from "next/image";

const REVIEW_CARDS = [
  {
    src: "/images/mymind/mymind-review-001.png",
    alt: "mymind review screenshot 1",
    width: 380,
    height: 240,
    rotate: "-3deg",
    top: "8%",
    left: "4%",
    zIndex: 2,
  },
  {
    src: "/images/mymind/mymind-review-002.png",
    alt: "mymind review screenshot 2",
    width: 360,
    height: 220,
    rotate: "2.5deg",
    top: "2%",
    left: "32%",
    zIndex: 3,
  },
  {
    src: "/images/mymind/mymind-review-003.png",
    alt: "mymind review screenshot 3",
    width: 400,
    height: 260,
    rotate: "-1.5deg",
    top: "38%",
    left: "18%",
    zIndex: 4,
  },
  {
    src: "/images/mymind/mymind-review-004.png",
    alt: "mymind review screenshot 4",
    width: 350,
    height: 230,
    rotate: "4deg",
    top: "32%",
    left: "55%",
    zIndex: 1,
  },
  {
    src: "/images/mymind/mymind-review-005.png",
    alt: "mymind review screenshot 5",
    width: 370,
    height: 250,
    rotate: "-2deg",
    top: "58%",
    left: "42%",
    zIndex: 5,
  },
] as const;

export function ReviewsSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#FFF1F1" }}
    >
      {/* Decorative background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mymind/mymind_review_neue-1.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 px-6 py-24 md:py-32 lg:py-[100px]">
        {/* Heading */}
        <h2
          className="mx-auto max-w-[800px] text-center text-white"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            lineHeight: 1.1,
            fontWeight: 400,
          }}
        >
          Trusted by thinkers &amp; doers everywhere.
        </h2>

        {/* Scattered review cards */}
        <div className="relative mx-auto mt-12 h-[500px] max-w-[1000px] md:h-[600px] lg:h-[700px]">
          {REVIEW_CARDS.map((card) => (
            <div
              key={card.src}
              className="absolute rounded-xl bg-white p-1 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              style={{
                transform: `rotate(${card.rotate})`,
                top: card.top,
                left: card.left,
                zIndex: card.zIndex,
                maxWidth: `${card.width}px`,
                width: "40%",
              }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                width={card.width}
                height={card.height}
                className="h-auto w-full rounded-lg"
                sizes="(min-width: 1024px) 400px, (min-width: 768px) 300px, 200px"
              />
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <a
            href="#"
            className="group inline-flex items-center gap-2 transition-opacity hover:opacity-70"
            style={{
              fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#333",
            }}
          >
            Not convinced? We have more
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
