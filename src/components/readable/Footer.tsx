"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import "./Footer.css";

const linkGroups = [
  {
    heading: "Sections",
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Why Choose Us", href: "#why-choose-us" },
      { label: "Testimonials", href: "#testimonials" },
    ],
  },
  {
    heading: "Social",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/breeje.work/" },
      { label: "Linkedin", href: "https://www.linkedin.com/in/rehan-ahmed-a97042285/" },
      { label: "Threads", href: "https://www.threads.net/@breeje.work" },
      { label: "Twitter", href: "https://x.com/rehanxahmed" },
    ],
  },
  {
    heading: "Pages",
    links: [
      { label: "Contact Us", href: "https://readable.framer.website/contact" },
      { label: "Blogs", href: "https://readable.framer.website/blog-index" },
    ],
  },
];

export function Footer() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <footer className="readable-footer">
      <div className="readable-footer-panel">
        <div className="readable-footer-newsletter">
          <Image className="readable-footer-logo" src="/readable/qusHmeKBaT6wkyPpdsdNTqbZWCw.png" alt="Readable" width={64} height={64} />
          <div className="readable-footer-copy">
            <h2>Stay in the Loop with Readable</h2>
            <p>Subscribe to our newsletter for smart article picks, updates, and tips—delivered fresh to your inbox.</p>
          </div>
          <form className="readable-footer-form" onSubmit={handleSubmit}>
            <label className="readable-footer-email-label" htmlFor="readable-newsletter-email">Email address</label>
            <input id="readable-newsletter-email" name="email" type="email" placeholder="Enter email" autoComplete="email" required />
            <button type="submit">Subscribe <ChevronRight size={14} aria-hidden="true" /></button>
          </form>
          {submitted && <p className="readable-footer-notice" role="status">Demo preview — newsletter signup is not connected.</p>}
        </div>
        <nav className="readable-footer-navigation" aria-label="Footer navigation">
          {linkGroups.map(({ heading, links }) => (
            <div className="readable-footer-link-group" key={heading}>
              <h3>{heading}</h3>
              <ul>{links.map(({ label, href }) => <li key={label}><a href={href}>{label}</a></li>)}</ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
