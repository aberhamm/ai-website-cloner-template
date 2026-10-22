import { AudioLines, BookOpen, Mic, Workflow } from "lucide-react";
import "./HowItWorks.css";

const steps = [
  {
    title: "Start Talking",
    description:
      "Start by tapping the mic and saying what you’re looking for—no typing needed.",
    words: ["Speak", "Record", "Send"],
    Icon: Mic,
  },
  {
    title: "Let AI Work",
    description:
      "Our system quickly finds and summarizes content that matches your mood.",
    words: ["Ask", "Receive", "Trust"],
    Icon: BookOpen,
  },
  {
    title: "Read or Listen",
    description:
      "Get short summaries, full articles, or audio versions—your call, your flow.",
    words: ["Share", "Build", "Grow"],
    Icon: AudioLines,
  },
];

export function HowItWorks() {
  return (
    <section
      className="section readable-how"
      id="how-it-works"
      aria-labelledby="how-it-works-title"
    >
      <svg
        className="readable-how-connector"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M-60 204H108L285 4M1500 204H1332L1155 4"
          stroke="currentColor"
          strokeWidth="88"
          strokeLinejoin="round"
        />
      </svg>
      <div className="container readable-how-container">
        <div className="section-heading readable-how-heading">
          <span className="eyebrow readable-how-eyebrow">
            <span>
              <Workflow size={24} aria-hidden="true" />
              How it works
            </span>
          </span>
          <div className="readable-how-heading-text">
            <h2 id="how-it-works-title">
              Find the Right Articles Without Typing a Word
            </h2>
            <p>
              Let your voice guide you—our AI listens, understands, and delivers
              exactly what you&apos;re in the mood for.
            </p>
          </div>
        </div>
        <div className="readable-how-cards">
          {steps.map(({ title, description, words, Icon }, index) => (
            <article
              className={`readable-how-card readable-how-card-${index + 1}`}
              key={title}
            >
              <span className="readable-how-number">0{index + 1}</span>
              <div className="readable-how-graphic" aria-hidden="true">
                <div className="readable-how-words">
                  {words.map((word) => (
                    <div className="readable-how-word-row" key={word}>
                      {[0, 1].map((copy) => (
                        <span className="readable-how-word-group" key={copy}>
                          {[0, 1, 2, 3].map((repeat) => (
                            <span key={repeat}>{word}</span>
                          ))}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="readable-how-icon">
                  <Icon size={62} strokeWidth={1.7} />
                </div>
              </div>
              <div className="readable-how-copy">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
