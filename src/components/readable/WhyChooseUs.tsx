"use client";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  Award,
  Heart,
  Layers,
  Sparkles,
  Trophy,
  ShieldCheck,
} from "lucide-react";
import "./WhyChooseUs.css";
const reasons = [
  { title: "No Ads Bloated", number: "04", Icon: ShieldCheck },
  { title: "Best Layouts", number: "03", Icon: Layers },
  { title: "Award Winning Designs", number: "02", Icon: Trophy },
  { title: "Loved By Millions", number: "01", Icon: Heart },
];
const stats = [
  { value: 55, suffix: "M+", prefix: "$", label: "Fewer Search Frustrations" },
  { value: 96, suffix: "%", prefix: "", label: "Our Customer Retention" },
  { value: 85, suffix: "%", prefix: "", label: "Report Feeling More Informed" },
  { value: 100, suffix: "%", prefix: "", label: "Less Time Wasted Searching" },
];
export function WhyChooseUs() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setProgress(1);
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          const next = Math.min(1, (now - start) / 2000);
          setProgress(next);
          if (next < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <section id="why-choose-us" className="why-section">
      <div className="why-heading">
        <span className="eyebrow">
          <Award />
          Why Choose Us
        </span>
        <h2>
          Designed Around Your
          <br className="desktop-break" /> Lifestyle
        </h2>
      </div>
      <div className="why-graphic">
        <div className="why-pills" aria-hidden="true">
          {Array.from({ length: 12 }, (_, i) => (
            <span key={i} />
          ))}
        </div>
        <div className="why-bars">
          {reasons.map(({ title, number, Icon }) => (
            <div className="why-bar" key={title}>
              <span className="why-icon">
                <Icon />
              </span>
              <span>{title}</span>
              <span className="why-number">{number}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="why-stats" ref={statsRef}>
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>
              <ArrowUp />
              {stat.prefix}
              {Math.round(stat.value * progress)}
              {stat.suffix}
            </strong>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
      <Sparkles className="why-hidden" aria-hidden="true" />
    </section>
  );
}
