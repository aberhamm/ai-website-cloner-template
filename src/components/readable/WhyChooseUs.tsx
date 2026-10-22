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
  {
    value: 55,
    speed: 23,
    suffix: "M+",
    prefix: "$",
    label: "Fewer Search Frustrations",
  },
  {
    value: 96,
    speed: 8,
    suffix: "%",
    prefix: "",
    label: "Our Customer Retention",
  },
  {
    value: 85,
    speed: 8,
    suffix: "%",
    prefix: "",
    label: "Report Feeling More Informed",
  },
  {
    value: 100,
    speed: 8,
    suffix: "%",
    prefix: "",
    label: "Less Time Wasted Searching",
  },
];
function Count({ end, speed }: { end: number; speed: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(1);
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    let finished = false;
    let count = 1;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const stop = () => {
      if (timer) clearInterval(timer);
      timer = undefined;
    };
    const reduced = () => {
      if (preference.matches) {
        stop();
        finished = true;
        setValue(end);
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      stop();
      if (preference.matches) {
        reduced();
        return;
      }
      if (entry.isIntersecting && !finished)
        timer = setInterval(() => {
          count = Math.min(end, count + 1);
          if (count === end) {
            finished = true;
            stop();
          }
          setValue(count);
        }, speed);
    });
    if (ref.current) observer.observe(ref.current);
    reduced();
    preference.addEventListener("change", reduced);
    return () => {
      stop();
      observer.disconnect();
      preference.removeEventListener("change", reduced);
    };
  }, [end, speed]);
  return <span ref={ref}>{value}</span>;
}
export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="why-section">
      <div data-motion="rise" className="why-heading">
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
          {reasons.map(({ title, number, Icon }, index) => (
            <div
              data-motion="drop"
              data-motion-delay={String(Number((0.8 - index * 0.2).toFixed(1)))}
              className="why-bar"
              key={title}
            >
              <span className="why-icon">
                <Icon />
              </span>
              <span>{title}</span>
              <span className="why-number">{number}</span>
            </div>
          ))}
        </div>
      </div>
      <div data-motion="rise" className="why-stats">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>
              <ArrowUp />
              {stat.prefix}
              <Count end={stat.value} speed={stat.speed} />
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
