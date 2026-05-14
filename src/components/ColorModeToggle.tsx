"use client";

import { COLOR_MODES, type ColorMode, useColorMode } from "@/hooks/useColorMode";
import { cn } from "@/lib/utils";

const SWATCH: Record<ColorMode, string> = {
  dark: "bg-black",
  default: "bg-cream",
  red: "bg-red",
};

const LABEL: Record<ColorMode, string> = {
  dark: "Dark theme",
  default: "Light theme",
  red: "Red theme",
};

export function ColorModeToggle() {
  const [mode, setMode] = useColorMode("red");
  const activeIndex = COLOR_MODES.indexOf(mode);

  return (
    <div className="fixed top-[2.56rem] right-6 z-[3] hidden md:block">
      <div className="relative flex gap-1">
        <span
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 z-10 h-1 w-1 rounded-full bg-cream transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${activeIndex * 24 + 7}px, 4px)`,
          }}
        />
        {COLOR_MODES.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            aria-label={LABEL[m]}
            aria-pressed={mode === m}
            className={cn(
              "inline-block h-[1.125rem] w-[1.125rem] rounded-full transition-all duration-200 ease-out hover:scale-110",
              SWATCH[m],
              "shadow-[inset_0_0_0_0.05em_currentColor]",
            )}
          />
        ))}
      </div>
    </div>
  );
}
