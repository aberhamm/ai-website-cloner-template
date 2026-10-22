/* eslint-disable @next/next/no-img-element */
import {
  ArrowDown,
  ArrowUpRight,
  AudioLines,
  BookOpen,
  Sparkles,
} from "lucide-react";
import "./Hero.css";
const checkout =
  "https://buy.polar.sh/polar_cl_fDPipgYkKQBrQPiTxQvLdLqKdnqoNn1zL41Zj2t24LR";
export function DownloadButton() {
  return (
    <a className="dark-button" href={checkout}>
      Download For Free <ArrowUpRight aria-hidden="true" />
    </a>
  );
}
export function Nav() {
  return (
    <header className="readable-nav">
      <nav aria-label="Main navigation">
        <a href="#" aria-label="Readable home" className="nav-logo">
          <img src="/readable/aTHWZjlwriiOo8Qpy2DtD6NQD4.png" alt="" />
        </a>
        <a href="https://readable.framer.website/blog-index">Blog</a>
        <a href="https://readable.framer.website/contact">Contact</a>
        <a className="nav-template" href={checkout}>
          Get Template <ArrowUpRight size={12} />
        </a>
      </nav>
    </header>
  );
}
export function Glow() {
  return (
    <div className="readable-glow" aria-hidden="true">
      <img
        className="glow-left"
        src="/readable/UH0Ycf3jr6Lbwyn8QMDSBsNX2GY.png"
        alt=""
      />
      <img
        className="glow-right"
        src="/readable/nYBoYcByVgryXnjwHanyMSCqBEw.png"
        alt=""
      />
      <svg
        className="glow-line"
        viewBox="0 0 1735 544"
        preserveAspectRatio="none"
      >
        <path
          d="M0 44H325C370 44 410 70 429 110L582 434C601 474 641 500 685 500H1076C1122 500 1164 472 1182 430L1313 114C1331 72 1373 44 1419 44H1735"
          fill="none"
          stroke="white"
          strokeWidth="88"
        />
      </svg>
    </div>
  );
}
export function Hero() {
  return (
    <section className="hero">
      <div className="hero-panel">
        <Glow />
        <div className="hero-copy">
          <a href="https://x.com/BreejeAnadkat" className="hero-offer">
            <span>
              <Sparkles size={12} />
              Get Pro 15%
            </span>
            Join our waitlist and claim instant offer <ArrowUpRight size={12} />
          </a>
          <h1>Seamless Article Discovery with AI-Powered Search</h1>
          <p>
            Our pre recorded sessions contain all the essentials to help you fix
            your mood in few sessions
          </p>
          <DownloadButton />
        </div>
        <div className="hero-phones">
          <img
            className="phone-side phone-left"
            src="/readable/caIbuA14IPud7VuW2KKgPE7Tg08.png"
            alt="Readable article discovery screen"
          />
          <img
            className="phone-center"
            src="/readable/k6V56eW3J98gR9GPbAmEhLz09Y.png"
            alt="Readable voice assistant — Speak your thoughts homie"
          />
          <img
            className="phone-side phone-right"
            src="/readable/lGXalFq0h2cU7KSIRP6XgYOPCC4.png"
            alt="Readable article summary screen"
          />
        </div>
      </div>
    </section>
  );
}
export function CTA() {
  return (
    <section className="readable-cta" id="download">
      <Glow />
      <div className="cta-copy">
        <div className="cta-icons" aria-hidden="true">
          <span>
            <BookOpen />
          </span>
          <span>
            <AudioLines />
          </span>
          <span>
            <Sparkles />
          </span>
        </div>
        <h2>Discover a Smarter, Simpler Way to Read Articles</h2>
        <DownloadButton />
      </div>
      <div className="cta-phone">
        <img
          src="/readable/k6V56eW3J98gR9GPbAmEhLz09Y.png"
          alt="Readable voice assistant app"
        />
      </div>
      <a href="#" className="back-top" aria-label="Back to top">
        <ArrowDown />
      </a>
    </section>
  );
}
