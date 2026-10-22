"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Glow } from "./Hero";
import { WordHeading } from "./WordHeading";
import "./ContactContent.css";

const cards = [
  {
    title: "Tell Us What’s on Your Mind",
    description:
      "Share your feedback, question, or idea. Let us know what you’re thinking—big or small.",
    icon: "LAv0AsVHZywZjJMnitpFxprmUk.svg",
  },
  {
    title: "Drop Your Details",
    description:
      "Leave your name and email (or social handle) so we can reply with answers.",
    icon: "ZX6jxBKIqoz27CSwQmkvYFZzOY.svg",
  },
  {
    title: "Hit Send & We’ll Contact You",
    description: "Once you submit your message, our team takes over.",
    icon: "l0dTciq124MxsPNiJhFxqvRs.svg",
  },
];

function Eyebrow({ children, icon }: { children: string; icon: string }) {
  return (
    <div className="contact-eyebrow">
      <span>
        <Image src={`/readable/${icon}`} alt="" width={24} height={24} />
        {children}
      </span>
    </div>
  );
}

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="contact-hero" aria-labelledby="contact-heading">
        <div className="contact-panel">
          <Glow />
          <header
            data-motion="fade"
            data-motion-trigger="mount"
            className="contact-header"
          >
            <Eyebrow icon="hO44sjUFP3idS9BBz8iwQTeyaI.svg">Contact Us</Eyebrow>
            <WordHeading id="contact-heading">
              Whether it’s a question, suggestion, or just a hello—drop it
              below.
            </WordHeading>
            <p>
              We’ll get back to you faster than your favorite anime character
              powers up.
            </p>
          </header>
          <div
            data-motion="rise"
            data-motion-trigger="mount"
            data-motion-delay="0.6"
            className="contact-form-container"
          >
            <form className="contact-form" onSubmit={submit}>
              <div className="contact-fields">
                <div className="contact-field-row">
                  <label htmlFor="contact-name">
                    Name
                    <input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      placeholder="Kratos"
                      required
                    />
                  </label>
                  <label htmlFor="contact-email">
                    Email
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="godofwar@email.com"
                      required
                    />
                  </label>
                </div>
                <label htmlFor="contact-subject">
                  Subject
                  <input
                    id="contact-subject"
                    name="subject"
                    placeholder="Save Atreus"
                    required
                  />
                </label>
                <label htmlFor="contact-description">
                  Description
                  <textarea
                    id="contact-description"
                    name="description"
                    placeholder="Freya needs your help"
                    required
                  />
                </label>
              </div>
              <button className="contact-submit" type="submit">
                <span>Send Message</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </button>
              {submitted && (
                <p role="status" className="contact-notice">
                  Demo preview — this contact form is not connected. Your
                  message has not been sent.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
      <section
        className="contact-touch"
        aria-labelledby="contact-touch-heading"
      >
        <div className="contact-touch-container">
          <header data-motion="rise" className="contact-touch-header">
            <Eyebrow icon="ZX6jxBKIqoz27CSwQmkvYFZzOY.svg">
              Get in Touch
            </Eyebrow>
            <div className="contact-touch-copy">
              <h2 id="contact-touch-heading">
                Reach out your way: voice, text, or tap.
              </h2>
              <p>
                Whether it’s feedback, questions, or a collaboration idea—we’re
                here and ready to hear you.
              </p>
            </div>
          </header>
          <div className="contact-cards">
            {cards.map((card, index) => (
              <article
                data-motion="rise"
                data-motion-delay={((index + 1) * 0.2).toFixed(1)}
                className={`contact-card contact-card-${index + 1}`}
                key={card.title}
              >
                <div className="contact-hanging-tab" aria-hidden="true" />
                <div className="contact-card-icon">
                  <Image
                    src={`/readable/${card.icon}`}
                    alt=""
                    width={65}
                    height={65}
                  />
                </div>
                <div className="contact-card-copy">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
