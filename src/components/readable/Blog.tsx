"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "./Blog.css";

const articles = [
  { title: "Why Your Mood Deserves Better Content", description: "Your state of mind changes—and your reading list should change with it.", image: "YtBNnctAaK8lfsFbQ75lrDNZ2o.png", slug: "why-your-mood-deserves-better-content", color: "lavender" },
  { title: "Article Summaries That Make Sense", description: "Save time, skip the fluff, and get straight to what matters with AI.", image: "ZAYWdkz5FfXxjVTZea2UrR2ka4.png", slug: "article-summaries-that-make-sense", color: "pink" },
  { title: "Why Scrolling Is Out and Speaking Is In", description: "Discover how voice-powered search is reshaping the way we read articles.", image: "5cN3ZeEcXxbQ3ldWSVp5N2UkPY.png", slug: "why-scrolling-is-out-and-speaking-is-in", color: "blue" },
  { title: "How To Do Online Dating As Weebs", description: "Is Sharing Anime Love a Match Made in Heaven? Feel free to check it out.", image: "ODqFvAtsFJ7r6eNp2bdHjpxHnz4.png", slug: "how-to-do-online-dating-as-weebs", color: "lavender" },
];

export function Blog() {
  const viewport = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animating = useRef(false);

  function stepSize() {
    const card = viewport.current?.querySelector<HTMLElement>(".readable-blog-card");
    return card ? card.getBoundingClientRect().width + 30 : 430;
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
      element.scrollLeft = stepSize() * articles.length;
    });
    resize.observe(element);
    return () => {
      resize.disconnect();
      cancelAnimationFrame(frame.current);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  function move(direction: number) {
    const element = viewport.current;
    if (!element || animating.current) return;
    if (timer.current) clearTimeout(timer.current);
    normalize();
    const step = stepSize();
    const start = element.scrollLeft;
    const target = (Math.round(start / step) + direction) * step;
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 400;
    const began = performance.now();
    animating.current = true;
    function animate(now: number) {
      if (!element) return;
      const progress = duration === 0 ? 1 : Math.min(1, (now - began) / duration);
      const eased = progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;
      element.scrollLeft = start + (target - start) * eased;
      if (progress < 1) frame.current = requestAnimationFrame(animate);
      else { animating.current = false; normalize(); }
    }
    frame.current = requestAnimationFrame(animate);
  }

  function handleScroll() {
    if (animating.current) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(normalize, 160);
  }

  function cancelAnimation() {
    cancelAnimationFrame(frame.current);
    animating.current = false;
  }

  return (
    <section id="blog" className="section readable-blog" aria-labelledby="blog-title">
      <div className="container readable-blog-container">
        <div className="section-heading readable-blog-heading">
          <div className="eyebrow"><span><Image src="/readable/s2MHfZebUoon0iQxB2MiLlw6S0.svg" width={24} height={24} alt="" />Blog</span></div>
          <h2 id="blog-title">Fresh Takes, Fun Reads, and AI-Curated Topics</h2>
        </div>
        <div className="readable-blog-controls">
          <button type="button" aria-label="Previous articles" aria-controls="readable-blog-carousel" onClick={() => move(-1)}><Image src="/readable/lZzPoM4mcVMnBSiE0mtrHb97c1A.svg" width={64} height={64} alt="" /></button>
          <button type="button" aria-label="Next articles" aria-controls="readable-blog-carousel" onClick={() => move(1)}><Image src="/readable/Al9OEfRf24c9MuyiuB8GoG6puCw.svg" width={64} height={64} alt="" /></button>
        </div>
        <div id="readable-blog-carousel" className="readable-blog-viewport" ref={viewport} onScroll={handleScroll} onPointerDown={cancelAnimation} onWheel={cancelAnimation} onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }} aria-label="Articles" aria-roledescription="carousel" tabIndex={0}>
          {[0, 1, 2].flatMap((copy) => articles.map((article) => (
            <article key={`${copy}-${article.slug}`} className={`readable-blog-card readable-blog-${article.color}`} aria-hidden={copy !== 1 ? true : undefined}>
              <div className="readable-blog-card-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={`https://readable.framer.website/blog-index/${article.slug}`} className="readable-blog-read-more" aria-label={`Read more: ${article.title}`} tabIndex={copy !== 1 ? -1 : undefined}>Read More<span aria-hidden="true">↗</span></a>
              </div>
              <Image src={`/readable/${article.image}`} width={400} height={400} alt="" className="readable-blog-illustration" />
            </article>
          )))}
        </div>
      </div>
    </section>
  );
}
