import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Feature card data                                                  */
/* ------------------------------------------------------------------ */

interface FeatureCard {
  title: string;
  body: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  wide: boolean;
  /** Card 5 (Synced across devices) uses a background image layout */
  variant?: "background";
  badgesImage?: string;
}

const FEATURES: FeatureCard[] = [
  {
    title: "Frictionless notetaking",
    body: "Ideas no longer slip away. Take quick notes on the go and enter Focus Mode to expand on them later. Clean and simple.",
    image: "/images/mymind/NOTE.png",
    imageWidth: 880,
    imageHeight: 896,
    wide: false,
  },
  {
    title: "Smart bookmarking",
    body: "No URL is treated the same. Your new mind knows if an item is an article, a product, a book or even a recipe. Every link is saved in a beautiful way that makes sense.",
    image: "/images/mymind/BKMRK.webp",
    imageWidth: 1420,
    imageHeight: 896,
    wide: true,
  },
  {
    title: "Read without distractions",
    body: "Save entire articles to your mind to read without clutter, ads or annoying pop-ups. mymind strips out the excess so you can focus.",
    image: "/images/mymind/READ.webp",
    imageWidth: 1420,
    imageHeight: 896,
    wide: true,
  },
  {
    title: "Instant collections",
    body: "Create Smart Spaces that auto-sort what you save, on your terms. Your mind automatically knows where it goes.",
    image: "/images/mymind/COL.webp",
    imageWidth: 880,
    imageHeight: 896,
    wide: false,
  },
  {
    title: "Synced across devices",
    body: "All your notes, bookmarks, inspiration, articles and images in one single, private place. Always with you, synced across devices.",
    image: "/images/mymind/mobile.webp",
    imageWidth: 1420,
    imageHeight: 896,
    wide: true,
    variant: "background",
    badgesImage: "/images/mymind/Badges.svg",
  },
  {
    title: "AI summaries",
    body: "Your new mind summarizes and enriches content you save with more context, making it easier to find later.",
    image: "/images/mymind/AI.webp",
    imageWidth: 880,
    imageHeight: 914,
    wide: false,
  },
  {
    title: "Bidirectional linking",
    body: "Add links between notes as you research and build out your ideas. No need to stop and organize or hunt things down. Your mind is your growing knowledge system.",
    image: "/images/mymind/LNKS.webp",
    imageWidth: 1420,
    imageHeight: 896,
    wide: true,
  },
  {
    title: "Rediscover with Serendipity",
    body: "A purposefully slow and peaceful experience, Serendipity resurfaces forgotten things in your mind so you can keep or forget them.",
    image: "/images/mymind/SEREN.webp",
    imageWidth: 1420,
    imageHeight: 896,
    wide: true,
  },
  {
    title: "Top of Mind",
    body: "A focused space to pin your shifting priorities and inspiration, so you see them every time you open your mind.",
    image: "/images/mymind/TOMFIN.webp",
    imageWidth: 900,
    imageHeight: 846,
    wide: false,
  },
];

const PILLS = [
  "Same Vibe",
  "Focus Mode",
  "Saving Highlights",
  "Text Recognition",
];

/* ------------------------------------------------------------------ */
/*  Grid layout mapping                                                */
/*                                                                     */
/*  Row 0: [notetaking 1col]  [bookmarking 1col]                      */
/*  Row 1: [read ---------------------- 2col]                         */
/*  Row 2: [collections 1col] [synced 1col]                           */
/*  Row 3: [AI 1col]          [linking 1col]                          */
/*  Row 4: [serendipity ------------------- 2col]                     */
/*  Row 5: [top-of-mind 1col] [pills 1col]                           */
/* ------------------------------------------------------------------ */

function gridSpan(index: number): string {
  // Only "Read without distractions" (index 2) and
  // "Rediscover with Serendipity" (index 7) span 2 columns on desktop.
  // All other cards sit side-by-side in a single grid column.
  if (index === 2 || index === 7) {
    return "md:col-span-2";
  }
  return "md:col-span-1";
}

/* ------------------------------------------------------------------ */
/*  Standard feature card                                              */
/* ------------------------------------------------------------------ */

function StandardCard({ card }: { card: FeatureCard }) {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[20px]"
      style={{ backgroundColor: "#F8F9FB" }}
    >
      <div className="relative w-full overflow-hidden rounded-t-[20px]">
        <Image
          src={card.image}
          alt={card.title}
          width={card.imageWidth}
          height={card.imageHeight}
          sizes={card.wide ? "(min-width:768px) 1140px, 100vw" : "(min-width:768px) 558px, 100vw"}
          className="block h-auto w-full"
        />
      </div>
      <div className="px-6 pb-8 pt-6">
        <h3
          className="mb-3"
          style={{
            fontFamily: "var(--font-heading, 'Georgia'), Georgia, 'Times New Roman', serif",
            fontSize: "26px",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#1A1A2E",
          }}
        >
          {card.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-inter, 'Inter'), Inter, -apple-system, sans-serif",
            fontSize: "16px",
            lineHeight: "28px",
            color: "#4A5465",
          }}
        >
          {card.body}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Background-image card (Synced across devices)                      */
/* ------------------------------------------------------------------ */

function BackgroundCard({ card }: { card: FeatureCard }) {
  return (
    <div
      className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[20px] md:min-h-[480px]"
      style={{
        backgroundImage: `url(${card.image})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
      }}
    >
      {/* Badges overlay */}
      {card.badgesImage && (
        <div className="absolute right-6 top-6 z-10 md:right-10 md:top-10">
          <Image
            src={card.badgesImage}
            alt="Available on multiple platforms"
            width={200}
            height={60}
            className="h-auto w-[140px] md:w-[200px]"
          />
        </div>
      )}

      {/* Bottom gradient overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 40%, transparent 70%)",
        }}
      />

      {/* Text content */}
      <div className="relative z-10 px-6 pb-8 pt-6">
        <h3
          className="mb-3"
          style={{
            fontFamily: "var(--font-heading, 'Georgia'), Georgia, 'Times New Roman', serif",
            fontSize: "26px",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#FFFFFF",
          }}
        >
          {card.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-inter, 'Inter'), Inter, -apple-system, sans-serif",
            fontSize: "16px",
            lineHeight: "28px",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {card.body}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature pills                                                      */
/* ------------------------------------------------------------------ */

function FeaturePills() {
  return (
    <div
      className="flex h-full flex-col items-start justify-center gap-3 rounded-[20px] p-6"
      style={{ backgroundColor: "#F8F9FB" }}
    >
      <div className="flex flex-wrap gap-2">
        {PILLS.map((pill) => (
          <span
            key={pill}
            className="inline-block whitespace-nowrap rounded-[20px] px-4 py-2"
            style={{
              backgroundColor: "#FFF1F1",
              color: "#FF5924",
              fontFamily: "var(--font-inter, 'Inter'), Inter, -apple-system, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
            }}
          >
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main section export                                                */
/* ------------------------------------------------------------------ */

export function FeaturesSection() {
  return (
    <section
      className="w-full"
      style={{
        background:
          "linear-gradient(180deg, #FF5924 0%, #FFC0B4 20.88%, #fff 37.26%, #fff 85.07%, #FFF2F2 100%)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-4 py-20 md:py-28">
        {/* White container card */}
        <div
          className="rounded-[24px] px-4 pb-10 pt-16 md:px-10 md:pb-16 md:pt-20"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          {/* Section header */}
          <div className="mx-auto mb-14 max-w-[800px] text-center md:mb-16">
            {/* Label */}
            <p
              className="mb-5"
              style={{
                fontFamily: "var(--font-inter, 'Inter'), Inter, -apple-system, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#FF5924",
              }}
            >
              YOUR PRIVATE OASIS
            </p>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "var(--font-heading, 'Georgia'), Georgia, 'Times New Roman', serif",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 400,
                lineHeight: 1.05,
                color: "#1A1A2E",
              }}
            >
              A treasure trove of ideas, inspiration &amp; references
            </h2>
          </div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {FEATURES.map((card, i) => (
              <div key={card.title} className={gridSpan(i)}>
                {card.variant === "background" ? (
                  <BackgroundCard card={card} />
                ) : (
                  <StandardCard card={card} />
                )}
              </div>
            ))}

            {/* Feature pills in the last grid slot */}
            <div className="md:col-span-1">
              <FeaturePills />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
