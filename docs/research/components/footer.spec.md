# SiteFooter Specification

## Overview
- **Target file:** `src/components/SiteFooter.tsx`
- **Live URL:** https://outfit.hellohello.is/ (footer at bottom)
- **Interaction model:** static (links only)
- **Imports:** `HelloHelloWordmark` from `@/components/icons`

## DOM Structure
```html
<footer class="mx-auto mb-10 px-4 text-sm lg:px-6">

  {/* 1. Top thick rule */}
  <div class="mb-6 h-[5px] w-full bg-current" />

  {/* 2. Big tagline + ©26 super-mark row */}
  <div class="mb-6 flex flex-col justify-between gap-4 md:flex-row md:gap-8">
    <div class="flex-1 text-[2.75rem] leading-[1] font-[900] tracking-tighter text-balance md:text-[6vw]">
      <p>Made to be worn.</p>
      <p class="red:text-red text-[#5A5A5A]">Or judged. Or both.</p>
    </div>
    <div>
      <p class="text-[45vw] leading-[1] font-[900] tracking-tighter md:text-[12.75vw]">©26</p>
    </div>
  </div>

  {/* 3. Tagline paragraph */}
  <div class="mt-[8rem] mb-4 md:mt-[16rem]">
    <p class="max-w-[52ch] tracking-tight text-balance md:text-2xl">
      Created by the ++hellohello team, this store and signature collection celebrates our collective creativity and passion for apparel. Carefully designed.
    </p>
  </div>

  {/* 4. Thin rule */}
  <hr class="mb-6 h-[2px] w-full bg-current" />

  {/* 5. Footer grid */}
  <div class="grid grid-cols-16 gap-x-6 gap-y-20 font-bold md:gap-6">

    {/* col 1: ++hellohello wordmark + copyright */}
    <div class="order-last col-span-16 md:order-first md:col-span-4">
      <div class="flex flex-col">
        <a href="https://hellohello.is" target="_blank" rel="noopener noreferrer">
          <HelloHelloWordmark className="mb-2" />
        </a>
        <p>All rights reserved ©2026</p>
      </div>
    </div>

    {/* col 2: address */}
    <div class="col-span-8 md:col-span-3">
      <p>Libertad 2529</p>
      <p>Office 102</p>
      <p>Montevideo, Uruguay.</p>
    </div>

    {/* col 3: legal */}
    <div class="col-span-8 md:col-span-3">
      <a href="#">Privacy Policy</a>
    </div>

    {/* col 4: social */}
    <div class="col-span-8 md:col-span-2 flex flex-col gap-1">
      <a href="https://dribbble.com/hellohello" target="_blank">Dribbble</a>
      <a href="https://instagram.com/hellohello.is" target="_blank">Instagram</a>
      <a href="https://linkedin.com/company/hellohello-is" target="_blank">LinkedIn</a>
      <a href="https://twitter.com/hellohello_is" target="_blank">Twitter (X)</a>
    </div>

    {/* col 5: nav */}
    <div class="col-span-8 md:col-span-2 flex flex-col gap-1">
      <a href="https://hellohello.is/work" target="_blank">Work</a>
      <a href="https://hellohello.is/services" target="_blank">Services</a>
      <a href="https://hellohello.is/about" target="_blank">About</a>
      <a href="https://hellohello.is/careers" target="_blank">Careers</a>
    </div>

    {/* col 6: CTA */}
    <div class="col-span-8 md:col-span-2 flex flex-col">
      <a href="mailto:hello@hellohello.is">Let's talk</a>
    </div>

  </div>

</footer>
```

## Computed Styles (verified)
- Footer outer: `text-sm` (14px), padding-x 16px (mobile) / 24px (lg+), bottom margin 40px
- Color inherits from `body.red` → red `#ff0001`
- Top rule: 5px solid current color (full width)
- Big tagline: font-weight 900, line-height 1, tracking tight, fluid font-size `6vw` on md+, `2.75rem` mobile
- "Or judged. Or both." has muted color `#5A5A5A` BUT in red mode reverts to red (`red:text-red`)
- ©26: enormous fluid type, `12.75vw` md / `45vw` mobile, font-weight 900
- Footer grid: 16 cols, gap-x 24px / gap-y 80px on mobile, gap 24px on md+
- Spec text under tagline: 24px on md+ (`text-2xl`), max-width 52ch (`max-w-[52ch]`)

## Color
- Default: text inherits parent (`#ff0001` red on cream bg)
- "Or judged" muted to `#5A5A5A` except in red mode where it stays red

## Responsive Behavior
- **Desktop (≥768px):** 6-vw giant tagline, footer columns laid out left to right (HelloHello wordmark first)
- **Mobile (<768px):** tagline stacks vertically (40px font), ©26 below; footer cols stack with HelloHello wordmark moved to BOTTOM (`order-last`)

## Notes for builder
- `text-balance` is fine in modern browsers; keep it.
- `text-[45vw]` is intentional — produces a HUGE ©26 mark that nearly fills the screen height on mobile.
- For `grid-cols-16`, ensure Tailwind v4 supports it (it does via dynamic syntax).
- Use `<hr>` for the thin rule; the top thick rule is a `<div>` because it's 5px (not standard).
- Do NOT add real social URLs that don't exist; use the ones shown above (canonical hellohello.is profiles).
- Verify with `npx tsc --noEmit`.
