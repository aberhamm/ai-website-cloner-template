"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

const SHOWN_KEY = "outfit-intro-shown";

const subscribe = () => () => {};

function getClientShown() {
  try {
    return window.sessionStorage.getItem(SHOWN_KEY) === "1";
  } catch {
    return false;
  }
}

/** Photo cards that drop into the stack — picked from the product set so they
 * match the LOOKBOOK aesthetic. Each entry is { src, rotate, delay } where
 * rotate is the resting angle in degrees and delay is when the card lands. */
const PHOTOS = [
  { src: "/images/products/totebag-sayhello-outfit_f241d637-643f-473c-b0ee-82402efd800a.jpg", rotate: -10, delay: 200 },
  { src: "/images/products/jersey-red-square-outfit_d6d9ae9b-b22d-4eed-93e2-8b0913b773f4.jpg", rotate: 6, delay: 350 },
  { src: "/images/products/cap-_-black-outfit_9a3389f2-3570-4130-8abc-c7d891c7c073.jpg", rotate: -4, delay: 500 },
  { src: "/images/products/beanie-_-red-outfit_2c3b211f-1507-4f73-817f-2b124d7daa33.jpg", rotate: 11, delay: 650 },
  { src: "/images/products/totebag-metal-outfit-2_e18d8c17-2359-4dc2-9bf1-80277d681c17.jpg", rotate: -7, delay: 800 },
  { src: "/images/products/t-shirt-_-white-outfit.jpg", rotate: 3, delay: 950 },
];

export function IntroLoader() {
  const alreadyShown = useSyncExternalStore(subscribe, getClientShown, () => true);

  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (alreadyShown) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1800;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          try { window.sessionStorage.setItem(SHOWN_KEY, "1"); } catch {}
          setDone(true);
        }, 280);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [alreadyShown]);

  if (alreadyShown) return null;

  return (
    <div
      aria-hidden={done}
      className={cn(
        "fixed inset-0 z-[50] bg-black text-cream",
        "transition-opacity duration-500 ease-out",
        done ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      {/* wordmark — sits centered BEHIND the photo stack */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[clamp(2.5rem,6vw,5.5rem)] font-[800] tracking-tight leading-none">
        LOOKBOOK
        <sup className="align-top text-[0.3em] font-[800]">®</sup>
      </span>

      {/* photo stack — drops in card by card, rotated, on top of wordmark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[16rem] w-[12rem]">
        {PHOTOS.map((p, i) => (
          <div
            key={i}
            className="intro-photo absolute inset-0 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            style={
              {
                "--rotate": `${p.rotate}deg`,
                animationDelay: `${p.delay}ms`,
                zIndex: i + 1,
              } as React.CSSProperties
            }
          >
            <Image
              src={p.src}
              alt=""
              width={300}
              height={400}
              priority={i < 2}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* counter — small, upper-right of the photo stack */}
      <span className="absolute top-[calc(50%-0.6em)] left-[calc(50%+8rem)] select-none text-xl tabular-nums">
        {count.toString().padStart(3, "0")}
      </span>
    </div>
  );
}
