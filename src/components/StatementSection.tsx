import Image from "next/image";

const STATEMENTS = [
  "We’re trying something different with mymind. It’s a refreshing approach to remembering the things you care about.",
  "One place for everything.",
  "We put privacy first.",
  "We love beautiful, simple design that considers and respects how you naturally think and work.",
  "We’d rather you spend less time managing your life, and more time doing what makes you happy.",
] as const;

export function StatementSection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-24 md:py-32 lg:py-[120px]"
      style={{
        background: "linear-gradient(180deg, #FFF1F1 0%, #ffffff 100%)",
      }}
    >
      {/* Decorative arc / circle */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
        style={{
          width: "min(900px, 90vw)",
          height: "min(900px, 90vw)",
          borderRadius: "50%",
          border: "1px solid rgba(0, 0, 0, 0.06)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[900px]">
        {/* Character illustration */}
        <div className="mb-10 flex justify-center">
          <Image
            src="/images/mymind/statement_mymind_guy.svg"
            alt="mymind character illustration"
            width={46}
            height={72}
            className="h-[72px] w-[46px]"
          />
        </div>

        {/* Statement paragraphs */}
        <div className="space-y-8 text-center md:space-y-10">
          {STATEMENTS.map((text, i) => (
            <p
              key={i}
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                lineHeight: 1.2,
                fontWeight: 400,
                color: "#1a1a1a",
              }}
            >
              {text}
            </p>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-14 flex justify-center">
          <a
            href="#"
            className="inline-block transition-opacity hover:opacity-90"
            style={{
              fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#fff",
              background: "linear-gradient(135deg, #1a1a1a 0%, #333 100%)",
              padding: "16px 36px",
              borderRadius: "999px",
            }}
          >
            Sign up for free
          </a>
        </div>
      </div>
    </section>
  );
}
