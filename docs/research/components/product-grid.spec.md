# ProductCard + ProductGrid Specification

## Overview
- **Target files:** `src/components/ProductCard.tsx`, `src/components/ProductGrids.tsx`
- **Live URL:** https://outfit.hellohello.is/ (the 4 product grids below the hero)
- **Interaction model:** static layout, hover-driven image swap on each card
- **Imports:** `Image` from `next/image`, `cn` from `@/lib/utils`, types/products data from `@/types` and `@/data/products`.

## DOM Structure for ONE ProductCard
```html
<a class="group block" href="#">
  <div class="relative overflow-hidden">
    {/* default image */}
    <Image class="aspect-large w-full h-full object-cover" src={images[0]} alt={title} />
    {/* hover image, scale-[1.2] by default, scales down to 1 on group-hover */}
    <Image
      class="aspect-large absolute inset-0 h-full w-full object-cover ease-[cubic-bezier(0.87,0,0.13,1)] transition-all duration-500 scale-[1.2] group-hover:scale-[1]"
      src={images[1]} alt={title}
    />
    {/* low-fi placeholder behind */}
    <div class="absolute inset-0 -z-10 h-full w-full bg-[#d2cac3] dark:bg-neutral-800" />
  </div>
  <div class="mt-3 flex flex-col justify-between gap-2 text-lg leading-5 md:flex-row">
    <p>{title}</p>
    <p><span>{price}</span></p>
  </div>
  <div class="mt-[6px] flex items-center gap-1 text-[11px] uppercase">
    <div class="h-2 w-2 rounded-full bg-current" />
    <span>{category}</span>
  </div>
</a>
```

## Computed Styles (verified via getComputedStyle)
- Card outer `<a>`: display block, no padding, group hover utility
- Image container: position relative, overflow hidden (clips zoomed hover image)
- Default `<img>`: `aspect-ratio: 9 / 12`, `object-fit: cover`, fills width
- Hover `<img>`: same but absolutely positioned over default, starts at scale 1.2 and scales to 1 on hover (500ms cubic-bezier(0.87,0,0.13,1))
- Title row: margin-top 12px (`mt-3`), gap 8px, font-size 18px (`text-lg`), line-height 20px
  - Mobile: stacks vertically; md+: `flex-row` so title left, price right
- Category row: margin-top 6px, font-size 11px, uppercase, with a 8px (h-2 w-2) circle
- Circle: `bg-current` so it adopts the body text color (`#ff0001` red on cream, etc.)

## Grid Layouts (4 grids)
The 4 grids are configured by `productGrids` in `src/data/products.ts`. Use a single component `ProductGrids` that maps over the data and renders each grid:

```tsx
{productGrids.map((g, i) => (
  <div key={i} className={g.layout}>
    {g.products.map((p) => (
      <ProductCard key={p.id} product={p} className={p.colSpan} />
    ))}
  </div>
))}
```

### Grid 1 — uniform 4-col
- Classes: `mb-34 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6`
- 4 cards (Off by Design, Kerned Confidence, Specimen No. HH01, Grid System Go), each `aspect-large` (9:12).

### Grids 2-4 — 16-col irregular (only ≥md)
- Classes: `mb-34 grid grid-cols-8 gap-6 md:grid-cols-16`
- Cards have explicit `col-span-3`, `col-span-5`, `col-span-8` etc. (already encoded in `productGrids` data).
- The `Gridlocked` product (grid 2 idx 2) uses `col-span-8 col-start-9` — places it on the right side, double-wide.
- `Positive Space` (grid 4 idx 0) uses `col-span-5` — slightly wider than peers.
- All other irregular cards use `col-span-3`.

### Mobile fallback
- All grids reduce to `grid-cols-8` on mobile (8-column flow with 24px gaps). Cards keep their col-span values, so on mobile they wrap naturally.

## Hover Behavior
- Use Tailwind `group-hover:` modifiers on the second image
- Transition: `transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]`
- Default state: `scale-[1.2]` (zoomed-in view of hover image)
- Hover state: `scale-[1]` (settles to normal size)
- The first image is always visible underneath; the second image overlays it, so on hover the second image "rezooms in" smoothly. (Both images are loaded, no opacity swap.)

## Component Props
```ts
interface ProductCardProps {
  product: Product; // from @/types
  className?: string; // for col-span overrides
}
```

## Notes for builder
- Use `next/image`. Add `width={400} height={533}` (or equivalent matching aspect-large) and `sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"` for performance.
- Convert the placeholder `<div>` into a non-interactive background — set `-z-10` so it sits behind both images.
- `<a href="#">` is fine — products are not real (clone scope).
- Export both `ProductCard` and `ProductGrids` (named exports) from their respective files.
- Verify with `npx tsc --noEmit`.
