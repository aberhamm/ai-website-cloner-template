"use client";

import Image from "next/image";
import Link from "next/link";
import { CardReadMore } from "./CardReadMore";
import { springProgress } from "@/lib/readable-motion";
import { useEffect, useRef } from "react";
import "./Blog.css";

const articles = [
  {
    title: "Why Your Mood Deserves Better Content",
    description:
      "Your state of mind changes—and your reading list should change with it.",
    image: "YtBNnctAaK8lfsFbQ75lrDNZ2o.png",
    slug: "why-your-mood-deserves-better-content",
    color: "lavender",
  },
  {
    title: "Article Summaries That Make Sense",
    description:
      "Save time, skip the fluff, and get straight to what matters with AI.",
    image: "ZAYWdkz5FfXxjVTZea2UrR2ka4.png",
    slug: "article-summaries-that-make-sense",
    color: "pink",
  },
  {
    title: "Why Scrolling Is Out and Speaking Is In",
    description:
      "Discover how voice-powered search is reshaping the way we read articles.",
    image: "5cN3ZeEcXxbQ3ldWSVp5N2UkPY.png",
    slug: "why-scrolling-is-out-and-speaking-is-in",
    color: "blue",
  },
  {
    title: "How To Do Online Dating As Weebs",
    description:
      "Is Sharing Anime Love a Match Made in Heaven? Feel free to check it out.",
    image: "ODqFvAtsFJ7r6eNp2bdHjpxHnz4.png",
    slug: "how-to-do-online-dating-as-weebs",
    color: "lavender",
  },
];

export function Blog() {
  const viewport = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const animating = useRef(false);
  const pendingTarget = useRef<number | null>(null);

  function stepSize() {
    const card = viewport.current?.querySelector<HTMLElement>(
      ".readable-blog-card",
    );
    const gap = viewport.current
      ? Number.parseFloat(getComputedStyle(viewport.current).columnGap)
      : 30;
    return card ? card.getBoundingClientRect().width + gap : 430;
  }

  function normalize() {
    const element = viewport.current;
    if (!element) return;
    const cycle = stepSize() * articles.length;
    if (element.scrollLeft < cycle) element.scrollLeft += cycle;
    else if (element.scrollLeft >= cycle * 2) element.scrollLeft -= cycle;
  }

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const resize = new ResizeObserver(() => {
      cancelAnimationFrame(frame.current);
      animating.current = false;
      pendingTarget.current = null;
      element.scrollLeft = stepSize() * articles.length;
    });
    resize.observe(element);
    return () => {
      resize.disconnect();
      cancelAnimationFrame(frame.current);
    };
  }, []);

  function move(direction: number) {
    const element = viewport.current;
    if (!element) return;
    cancelAnimationFrame(frame.current);
    const step = stepSize();
    const cycle = step * articles.length;
    if (pendingTarget.current !== null) {
      while (pendingTarget.current < cycle) {
        element.scrollLeft += cycle;
        pendingTarget.current += cycle;
      }
      while (pendingTarget.current >= cycle * 2) {
        element.scrollLeft -= cycle;
        pendingTarget.current -= cycle;
      }
    } else normalize();
    const start = element.scrollLeft;
    const target =
      pendingTarget.current !== null
        ? pendingTarget.current + direction * step
        : (Math.round(start / step) + direction) * step;
    pendingTarget.current = target;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const began = performance.now();
    animating.current = true;
    function animate(now: number) {
      if (!element) return;
      const elapsed = (now - began) / 1000;
      const progress = reduced ? 1 : springProgress(elapsed);
      element.scrollLeft = start + (target - start) * progress;
      if (
        !reduced &&
        elapsed < 2 &&
        Math.abs(target - element.scrollLeft) > 0.1
      )
        frame.current = requestAnimationFrame(animate);
      else {
        element.scrollLeft = target;
        animating.current = false;
        pendingTarget.current = null;
        normalize();
      }
    }
    frame.current = requestAnimationFrame(animate);
  }

  return (
    <section
      id="blog"
      className="section readable-blog"
      aria-labelledby="blog-title"
    >
      <div className="container readable-blog-container">
        <div
          data-motion="rise"
          className="section-heading readable-blog-heading"
        >
          <div className="eyebrow">
            <span>
              <Image
                src="/readable/s2MHfZebUoon0iQxB2MiLlw6S0.svg"
                width={24}
                height={24}
                alt=""
              />
              Blog
            </span>
          </div>
          <h2 id="blog-title">Fresh Takes, Fun Reads, and AI-Curated Topics</h2>
        </div>
        <div className="readable-blog-controls">
          <button
            type="button"
            aria-label="Previous articles"
            aria-controls="readable-blog-carousel"
            onClick={() => move(-1)}
          >
            <Image
              src="/readable/lZzPoM4mcVMnBSiE0mtrHb97c1A.svg"
              width={64}
              height={64}
              alt=""
            />
          </button>
          <button
            type="button"
            aria-label="Next articles"
            aria-controls="readable-blog-carousel"
            onClick={() => move(1)}
          >
            <Image
              src="/readable/Al9OEfRf24c9MuyiuB8GoG6puCw.svg"
              width={64}
              height={64}
              alt=""
            />
          </button>
        </div>
        <div
          id="readable-blog-carousel"
          data-motion="rise"
          className="readable-blog-viewport"
          ref={viewport}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              move(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
          aria-label="Articles"
          aria-roledescription="carousel"
          tabIndex={0}
        >
          {[0, 1, 2].flatMap((copy) =>
            articles.map((article) => (
              <Link
                href={`/blog-index/${article.slug}`}
                aria-label={`Read more: ${article.title}`}
                tabIndex={copy !== 1 ? -1 : undefined}
                key={`${copy}-${article.slug}`}
                className={`readable-blog-card readable-blog-${article.color}`}
                aria-hidden={copy !== 1 ? true : undefined}
              >
                <div className="readable-blog-card-content">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <CardReadMore />
                </div>
                <Image
                  src={`/readable/${article.image}`}
                  width={400}
                  height={400}
                  alt=""
                  className="readable-blog-illustration"
                />
              </Link>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
