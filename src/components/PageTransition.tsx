"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type Stage = "idle" | "covering" | "holding" | "revealing";

const TransitionContext = createContext<{ stage: Stage }>({ stage: "idle" });
export function useTransitionStage() {
  return useContext(TransitionContext).stage;
}

/** Stage durations in ms — match the original's pacing.
 *  Per-letter stagger is 130ms × 8 = ~1040ms after a 200ms head delay, so
 *  HOLD_MS needs to be long enough to keep the curtain up while letters
 *  finish landing. */
const COVER_MS = 500;
const HOLD_MS = 1100;
const REVEAL_MS = 500;

const WORDMARK_LETTERS = "LOOKBOOK".split("");

interface Props {
  children: React.ReactNode;
}

export function PageTransition({ children }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [stage, setStage] = useState<Stage>("idle");
  // Bumped each time we enter "covering" so CSS animations re-fire fresh
  const [animKey, setAnimKey] = useState(0);
  const pendingHref = useRef<string | null>(null);

  // Intercept link clicks (capture phase + stopImmediate so it beats next/link)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      const a = (e.target as HTMLElement | null)?.closest("a");
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href) return;
      if (a.dataset.transitionIgnore === "true") return;
      if (a.target && a.target !== "" && a.target !== "_self") return;
      if (a.hasAttribute("download")) return;

      let url: URL;
      try {
        url = new URL(href, window.location.origin);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === pathname) return;

      e.preventDefault();
      e.stopImmediatePropagation();
      pendingHref.current = url.pathname + url.search + url.hash;
      setAnimKey((k) => k + 1);
      setStage("covering");
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [pathname]);

  // Drive the state machine
  useEffect(() => {
    if (stage === "covering") {
      const t = setTimeout(() => {
        if (pendingHref.current) {
          router.push(pendingHref.current);
          pendingHref.current = null;
        }
        setStage("holding");
      }, COVER_MS);
      return () => clearTimeout(t);
    }
    if (stage === "holding") {
      const t = setTimeout(() => setStage("revealing"), HOLD_MS);
      return () => clearTimeout(t);
    }
    if (stage === "revealing") {
      const t = setTimeout(() => setStage("idle"), REVEAL_MS);
      return () => clearTimeout(t);
    }
  }, [stage, router]);

  // Curtain transform per stage
  const curtainTransform =
    stage === "idle"      ? "translateY(100%)"
    : stage === "covering" ? "translateY(0%)"
    : stage === "holding"  ? "translateY(0%)"
                           : "translateY(-100%)";

  const wordmarkVisible = stage === "covering" || stage === "holding";

  return (
    <TransitionContext.Provider value={{ stage }}>
      {/* Page content with a small parallax rise that runs in lockstep with
       * the curtain reveal. While the curtain is covering or holding, the
       * page sits at translate-y(40px) (hidden under the curtain anyway).
       * When stage flips to "revealing", the transform releases to 0 and the
       * CSS transition makes the new page feel carried up by the curtain. */}
      <div
        key={pathname}
        className={cn(
          "transition-transform ease-[cubic-bezier(0.16,1,0.3,1)] duration-[500ms]",
          stage === "covering" || stage === "holding"
            ? "translate-y-10"
            : "translate-y-0",
        )}
      >
        {children}
      </div>

      <div
        aria-hidden
        className={cn(
          "pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-red text-cream",
          "transition-transform ease-[cubic-bezier(0.87,0,0.13,1)]",
          stage === "covering"  && "duration-[500ms]",
          stage === "holding"   && "duration-0",
          stage === "revealing" && "duration-[500ms]",
          stage === "idle"      && "duration-0",
        )}
        style={{ transform: curtainTransform, willChange: "transform" }}
      >
        {/* wordmark — letters slide up from a clipped mask with a stagger,
         * the whole block scales subtly from 0.9 → 1 over the same window */}
        <div
          key={animKey}
          className={cn(
            "wordmark-scale flex select-none text-[10vw] leading-[1.05] font-[800] tracking-tight",
            !wordmarkVisible && "opacity-0",
          )}
        >
          {WORDMARK_LETTERS.map((ch, i) => (
            <span key={i} className="overflow-hidden inline-block leading-[1.05]">
              <span
                className="wordmark-letter inline-block"
                style={{ animationDelay: `${200 + i * 130}ms` }}
              >
                {ch}
              </span>
            </span>
          ))}
          <span className="overflow-hidden inline-block leading-[1.05] self-start">
            <span
              className="wordmark-letter inline-block text-[0.3em] font-[800]"
              style={{ animationDelay: `${200 + WORDMARK_LETTERS.length * 130}ms` }}
            >
              ®
            </span>
          </span>
        </div>
      </div>
    </TransitionContext.Provider>
  );
}
