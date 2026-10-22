"use client";

import { useEffect } from "react";
import "./Motion.css";

/** Reveals the server-rendered content once, when it enters the viewport. */
export function Motion() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-motion]");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealAll = () => {
      if (preference.matches) {
        elements.forEach((element) =>
          element.setAttribute("data-visible", "true"),
        );
      }
    };
    revealAll();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    preference.addEventListener("change", revealAll);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", revealAll);
    };
  }, []);
  return null;
}
