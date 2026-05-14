# SiteHeader + ColorModeToggle Specification

## Overview
- **Target files:** `src/components/SiteHeader.tsx`, `src/components/ColorModeToggle.tsx`
- **Live URL:** https://outfit.hellohello.is/ (top fixed bar)
- **Interaction model:**
  - SiteHeader: static layout, hover underline on links, click "Menu" to open MenuDrawer
  - ColorModeToggle: three click-targets that toggle `<html>` / `<body>` classes for theme
- **Imports:** `PlusPlusLogo` from `@/components/icons`, `useColorMode` hook (defined below)

## SiteHeader DOM Structure
```html
<nav class="red:text-[oklab(0.73_-0.14_-0.1)] fixed top-0 left-0 z-[3] flex w-full items-center justify-between text-white mix-blend-difference">
  <div class="mx-auto flex w-full items-center justify-between px-4 py-8 lg:px-6">

    {/* logo / home */}
    <a href="/" class="mr-2 lg:mr-6" aria-label="OUTFIT home">
      <PlusPlusLogo />
      <span class="sr-only">OUTFIT®</span>
    </a>

    {/* right cluster */}
    <div class="flex items-center gap-6 lg:gap-8 text-2xl">
      <a href="/" class="link-hover underline underline-offset-4">Shop</a>
      <a href="/bag" class="link-hover">Bag (0)</a>
      <button type="button" class="min-w-[2.625rem]" onClick={openMenu}>Menu</button>
    </div>
  </div>
</nav>
```

## Computed Styles
- nav: position fixed, top:0 left:0, full width, z-index 3, height ~100px (py-8 + content)
- nav: `mix-blend-difference` — when over cream bg shows dark, over red shows cyan, over black shows white. This is critical and intentional.
- inner container: padding-x 16/24 lg, padding-y 32px, flex justify-between
- logo: 54x24 SVG (`PlusPlusLogo`); margin-right 8/24 lg
- nav links: font-size 24px (text-2xl), font-weight 400
- "Shop" has underline (the active page indicator)
- Menu button: min-width 42px (`min-w-[2.625rem]`), pointer cursor
- Hover behavior: `.link-hover` should add an animated underline on hover (text-decoration becomes visible) — implement as `hover:underline underline-offset-4`

## CSS Globals to add (only if not already in globals.css)
```css
@utility link-hover {
  &:hover { text-decoration: underline; text-underline-offset: 4px; }
}
```

## ColorModeToggle DOM Structure
```html
<div class="fixed top-[2.56rem] right-6 z-[3] hidden md:block">
  <div class="relative flex gap-1">

    {/* indicator dot — small cream circle at the active button */}
    <span
      class="absolute top-0 left-0 rounded-full pointer-events-none z-10 h-1 w-1 bg-cream transition-transform duration-200 ease-out"
      style={{ transform: `translateX(${activeIndex * 24}px) translateY(2px) translateX(7px)` }}
    />

    {/* default mode (cream + black) — black circle */}
    <button class="inline-block rounded-full transition-all duration-200 ease-out h-[1.125rem] w-[1.125rem] bg-black hover:scale-110 shadow-[inset_0_0_0_0.05em_black]" aria-label="Default theme" />

    {/* cream mode — cream circle with red ring */}
    <button class="inline-block rounded-full transition-all duration-200 ease-out h-[1.125rem] w-[1.125rem] bg-cream hover:scale-110 shadow-[inset_0_0_0_0.05em_currentColor]" aria-label="Cream theme" />

    {/* red mode — red circle with red ring */}
    <button class="inline-block rounded-full transition-all duration-200 ease-out h-[1.125rem] w-[1.125rem] bg-red hover:scale-110 shadow-[inset_0_0_0_0.05em_currentColor]" aria-label="Red theme" />

  </div>
</div>
```

## Color modes
- **Default mode (no class on body):** cream bg, black text, black cursor — first button (black dot) active
- **Cream/light mode (no special class — same as default):** Note: the source seems to have only 3 modes total — black, cream, red. We treat **default = black mode (dark text on cream)**.

Actually verified from source:
- 3 modes mapped to body/html classes:
  - **black mode:** body has neither `red` nor html `dark`. Text is black on cream.
  - **cream/light mode:** body has class `red` removed, html has `dark` removed. Same as black if defaults match. Inspecting the live site, the modes are: dark (`html.dark` → black bg / cream text), default (`body.cream` or no special — cream bg + black text), red (`body.red` → cream bg + red text).
  - In the live site current state the body has `red` class active by default (because the page loads in red mode).

For our clone, implement 3 modes:
1. `dark`: `html.dark` (black bg, cream text)
2. `default`: no `dark` no `red` (cream bg, black text)
3. `red`: `body.red` (cream bg, red text) — this is the default landing state

## ColorModeToggle behavior (write a hook)
```ts
// src/hooks/useColorMode.ts
'use client';
import { useEffect, useState } from 'react';

export type ColorMode = 'dark' | 'default' | 'red';

export function useColorMode(initial: ColorMode = 'red') {
  const [mode, setMode] = useState<ColorMode>(initial);
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.classList.toggle('dark', mode === 'dark');
    body.classList.toggle('red', mode === 'red');
  }, [mode]);
  return [mode, setMode] as const;
}
```

The toggle component reads/sets via the hook. Three buttons in order: dark, default, red — and the indicator dot animates `translateX(idx * 24px)` to point to the active one.

## Notes for builder
- Add `link-hover` utility to `globals.css` if not present (the foundation already has `@utility container-px`; add a similar block).
- The `mix-blend-difference` on the nav is critical — DO NOT remove it. It's why the nav text appears cyan-blue over red mode.
- Menu button click should call a callback `onOpenMenu()` (passed as prop) — the actual MenuDrawer is built separately by orchestrator.
- ColorModeToggle is `'use client'` and uses the hook.
- Indicator dot: based on inspection, the dot animates by horizontal translation. Use Framer Motion if available, else plain CSS transition on `transform`.
- Verify with `npx tsc --noEmit`.
