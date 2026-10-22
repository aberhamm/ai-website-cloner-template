"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./Motion.css";

/** Source-style mount entrances and once-only/repeating viewport effects. */
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-motion]");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealAll = () => {
      if (preference.matches)
        elements.forEach((element) =>
          element.setAttribute("data-visible", "true"),
        );
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          const visible =
            entry.isIntersecting &&
            entry.intersectionRatio >=
              Number(element.dataset.motionThreshold || 0);
          if (visible) element.setAttribute("data-visible", "true");
          else if (
            element.dataset.motionRepeat === "true" &&
            !preference.matches
          )
            element.removeAttribute("data-visible");
          if (visible && element.dataset.motionRepeat !== "true")
            observer.unobserve(element);
        });
      },
      { threshold: [0, 1] },
    );
    elements.forEach((element) => {
      if (element.dataset.motionTrigger === "mount")
        element.setAttribute("data-visible", "true");
      else observer.observe(element);
    });
    revealAll();
    preference.addEventListener("change", revealAll);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", revealAll);
    };
  }, [pathname]);
  return null;
}
