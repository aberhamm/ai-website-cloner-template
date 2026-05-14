# OUTFIT® page topology

Single-page clone of https://outfit.hellohello.is/.

## Layers (z-index, top → bottom)

1. **Custom cursor** (`fixed z-[9999]`) — small dot following pointer; size + color responds to hover/click state.
2. **Color mode toggle** (`fixed top-[2.56rem] right-6 z-[3] hidden md:block`) — three pill buttons.
3. **Top nav header** (`fixed top-0 left-0 z-[3]`) — `mix-blend-difference` over content.
4. **Menu drawer** (`fixed inset-0 z-[2]` — invisible until "Menu" pressed; full-screen overlay).
5. **Intro loader** (`fixed inset-0 z-[50]`) — counts 0 → 100 then animates out on first paint. Once dismissed it should not return.
6. **Page flow content** (static):
   - Hero (mt-26 from top, contains giant SVG OUTFIT®)
   - Product grid 1 (4-col uniform)
   - Product grid 2 (16-col irregular)
   - Product grid 3 (16-col irregular)
   - Product grid 4 (16-col irregular)
   - Footer

## Smooth scroll
Lenis is used site-wide. Wrap the app in a `LenisProvider` client component that initialises Lenis and applies `lenis lenis-smooth` classes to `<html>`.

## Color modes (body/html classes)
- `body` (no extra class): cream bg, black text, **black cursor**
- `body.red`: cream bg, red text, **red cursor** — this is the default landing state
- `html.dark`: black bg, cream text, **cream cursor**

The color toggle persists choice to localStorage.

## Page padding
All flow content lives inside `px-4 lg:px-6` wrappers. The hero adds `mt-26` (104px) on top; subsequent grids use `mb-34` (8.5rem ≈ 136px) between sections.

## Mobile breakpoint
- `md` (≥768px) reveals the color toggle and turns the irregular grids into 16-col layouts
- `lg` (≥1024px) bumps padding to 24px and grid 1 to 4 cols
