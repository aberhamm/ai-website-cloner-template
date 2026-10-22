# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Live URL:** https://outfit.hellohello.is/ (top of page)
- **Interaction model:** static (no scroll/click/hover behaviors)
- **Imports:** `OutfitWordmark` from `@/components/icons`

## DOM Structure
```
<section className="px-4 lg:px-6">
  <div className="mt-26 mb-6">                      {/* margin: 104px top, 24px bottom */}
    <div className="relative">
      <OutfitWordmark className="mb-6 w-full h-auto" />  {/* SVG, viewBox 0 0 1391 296 */}
    </div>
    <div className="mb-10 grid grid-cols-8 gap-x-6 gap-y-10 text-xs font-bold md:grid-cols-16 md:gap-6">
      <div className="col-span-3 md:col-span-4">
        <h1 className="uppercase">Outfit</h1>
      </div>
      <div className="col-span-3 md:col-span-4">
        <h2 className="mb-4 uppercase">Why</h2>
        <p className="text-sm leading-4 tracking-tight md:max-w-[60%]">
          Created by the ++hellohello team, this store and signature collection
          celebrates our collective creativity and passion for apparel. Carefully designed.
        </p>
      </div>
      <div className="col-span-3 md:col-span-7 md:col-start-9">
        <h2 className="mb-4 uppercase">Visit ++ Website</h2>
        <h2 className="uppercase">Shipping &amp; Returns</h2>
      </div>
      <div className="col-span-1 md:col-span-1 text-right">
        <p className="uppercase">© 2026</p>
      </div>
    </div>
  </div>
</section>
```

## Computed Styles (extracted from getComputedStyle)

### Outer wrapper (`.px-4 lg:px-6`)
- padding: `0px 24px` (lg, 1440px viewport)
- height: 429.211px
- color: `var(--color-red)` (i.e. `#ff0001` — inherited from body.red)

### Inner block (`.mt-26 mb-6`)
- margin: `104px 0 24px`
- width: 100% of parent

### Title SVG container (`.relative`)
- height: 296px
- contains the OutfitWordmark SVG with `width: 100%; height: auto`
- The SVG fills horizontally; the small ®-trademark is the 7th path inside the SVG (already part of the viewBox, no separate element needed)

### Info-row grid
- 8 cols mobile (gap 24px x, 40px y), 16 cols ≥ md (gap 24px)
- font-size: 12px (text-xs)
- font-weight: 700 (font-bold)
- line-height: 16px
- text-transform: uppercase (on labels)

### Paragraph (`.text-sm leading-4 tracking-tight md:max-w-[60%]`)
- font-size: 14px
- font-weight: 700 (inherits font-bold from parent)
- line-height: 16px
- letter-spacing: tight
- max-width: 60% on md+

## Text Content (verbatim)
- Title (in SVG): "OUTFIT®"
- Labels: `Outfit`, `Why`, `Visit ++ Website`, `Shipping & Returns`, `© 2026`
- Paragraph: `Created by the ++hellohello team, this store and signature collection celebrates our collective creativity and passion for apparel. Carefully designed.`

## Color
- Text color: inherits from `body.red` (red `#ff0001`)
- Background: transparent (body cream `#ede4dd` shows through)

## Responsive Behavior
- **Desktop (≥1024px):** 16-col grid as defined; SVG full width.
- **Tablet (768–1023px):** Same grid, slightly tighter padding (`px-4` only).
- **Mobile (<768px):** 8-col grid, paragraph max-width: 100%, layout stacks via natural col-spans.

## Notes for builder
- Export as `HeroSection` (named export).
- Use `<section>` for the outer wrapper.
- The SVG must scale fluidly — set `className="w-full h-auto"` on the imported `OutfitWordmark`.
- Do NOT add any `style={{ ... }}` blocks — Tailwind classes only.
- Use the `<h1>OUTFIT</h1>` semantic structure as shown (real H1 only on the small "Outfit" label, since the SVG is graphic; this matches the source).
