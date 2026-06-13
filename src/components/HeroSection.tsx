"use client";

const KEYWORD_BUBBLES = [
  { word: "notes", color: "rgb(233,143,83)" },
  { word: "bookmarks", color: "rgb(228,138,191)" },
  { word: "inspiration", color: "rgb(153,210,251)" },
  { word: "articles", color: "rgb(234,114,107)" },
  { word: "images", color: "rgb(255,207,39)" },
] as const;

const CTA_BUTTONS = [
  {
    label: "iPhone app",
    icon: "/images/mymind/icons/App-Store.svg",
    href: "#",
  },
  {
    label: "Browser Extension",
    icon: "/images/mymind/icons/Browsers.svg",
    href: "#",
  },
  {
    label: "Android app",
    icon: "/images/mymind/icons/Play-Store.svg",
    href: "#",
  },
] as const;

function KeywordBubble({ word, color }: { word: string; color: string }) {
  return (
    <span
      className="inline-block"
      style={{
        fontFamily: "'Nunito', var(--font-sans), sans-serif",
        fontWeight: 600,
        fontSize: 18,
        lineHeight: "25.2px",
        letterSpacing: "-0.18px",
        color,
        background: `linear-gradient(${color}0F 0%, ${color}00 100%)`,
        border: `1px solid ${color}`,
        borderRadius: 36,
        padding: "4px 18px",
        margin: "0 2px",
      }}
    >
      {word}
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="relative w-full flex justify-center overflow-hidden">
      {/* Background video — renders the animated white circle with warm gradient edges */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ top: 0, left: 0 }}
        >
          <source src="/videos/mymind/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 w-full max-w-[1180px] pt-[140px] pb-[60px] px-6 text-center">
        {/* Main heading */}
        <h1
          className="text-[48px] md:text-[80px] lg:text-[128px] mx-auto"
          style={{
            fontFamily:
              "var(--font-avenir, 'Nunito', var(--font-sans), sans-serif)",
            fontWeight: 400,
            letterSpacing: "-0.065em",
            color: "#000",
            lineHeight: "0.85em",
            textAlign: "center",
          }}
        >
          Remember everything.
          <br />
          Organize nothing.
        </h1>

        {/* Subtext with colored keyword bubbles */}
        <p
          className="mt-8 mx-auto max-w-[700px]"
          style={{
            fontFamily: "var(--font-inter, 'Inter', sans-serif)",
            fontSize: 20,
            lineHeight: "44px",
            letterSpacing: "-0.4px",
            color: "rgb(74, 84, 101)",
            textAlign: "center",
          }}
        >
          All your{" "}
          {KEYWORD_BUBBLES.map((bubble, i) => (
            <span key={bubble.word}>
              <KeywordBubble word={bubble.word} color={bubble.color} />
              {i === KEYWORD_BUBBLES.length - 2 ? " and " : " "}
            </span>
          ))}
          in one single, private place.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {CTA_BUTTONS.map(({ label, icon, href }) => (
            <a
              key={label}
              href={href}
              className="inline-flex items-center gap-2 text-black no-underline transition-opacity hover:opacity-70"
              style={{
                fontFamily: "'Nunito', var(--font-sans), sans-serif",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={icon} alt="" className="h-5 w-auto" />
              <span>{label}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/mymind/icons/Arrow-button-white.svg"
                alt=""
                className="h-2.5 w-auto opacity-40"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
