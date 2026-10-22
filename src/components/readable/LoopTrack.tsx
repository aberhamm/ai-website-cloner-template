"use client";
import { useEffect, useRef, type ReactNode } from "react";

interface LoopTrackProps {
  children: ReactNode;
  className: string;
  speed: number;
  axis?: "x" | "y";
  reverse?: boolean;
}
/** Source ticker rates are pixels/second, independent of words or viewport size. */
export function LoopTrack({
  children,
  className,
  speed,
  axis = "x",
  reverse = false,
}: LoopTrackProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    const group = element?.firstElementChild;
    if (!element || !group) return;
    let animation: Animation | undefined;
    let visible = false;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      const duration = animation?.effect?.getTiming().duration;
      const progress =
        animation && typeof duration === "number"
          ? Number(animation.currentTime ?? 0) / duration
          : 0;
      animation?.cancel();
      animation = undefined;
      if (preference.matches) return;
      const rect = group.getBoundingClientRect();
      const distance = axis === "x" ? rect.width : rect.height;
      if (!distance) return;
      animation = element.animate(
        [
          { transform: "translate(0,0)" },
          {
            transform:
              axis === "x"
                ? `translateX(-${distance}px)`
                : `translateY(-${distance}px)`,
          },
        ],
        {
          duration: (distance / speed) * 1000,
          easing: "linear",
          iterations: Infinity,
          direction: reverse ? "reverse" : "normal",
        },
      );
      animation.currentTime = (progress % 1) * ((distance / speed) * 1000);
      if (!visible) animation.pause();
    };
    const resize = new ResizeObserver(update);
    resize.observe(group);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) animation?.play();
      else animation?.pause();
    });
    observer.observe(element);
    preference.addEventListener("change", update);
    update();
    return () => {
      animation?.cancel();
      resize.disconnect();
      observer.disconnect();
      preference.removeEventListener("change", update);
    };
  }, [axis, reverse, speed]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
