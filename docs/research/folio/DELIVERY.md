# Folio clone

A standalone Next.js 16 / React 19 reconstruction of https://folio-topaz-delta.vercel.app/, inspected October 22, 2026.

## Run

Requires Node 24 or later.

```sh
npm ci
npm run dev
```

`npm run check` runs ESLint, TypeScript, and the production build. `npm start -- --port 3107` serves a production build.

## Included

All five routes discovered through same-domain links and the sitemap: `/`, `/pricing`, `/contact`, `/terms`, `/privacy`.

The home page contains seven main sections, a shared floating header and landscape footer. There are 17 page/section/dashboard components plus a shared module exporting 18 original SVG icons. Original text and vector paths are preserved. All 36 image, logo, font and favicon assets are served locally under `public/folio`; rendering makes no requests to the original domain.

Interactive behavior includes persistent light/dark themes, responsive navigation, floating header after 50px scroll, four dashboard tabs with 16-second cycling, grouped FAQ accordions and category scrolling, monthly/annual billing, and the simulated contact form. Annual prices are $24/$79; monthly prices are $29/$99. Decorative dashboard controls retain the original source's presentation.

The original utility CSS and design tokens are retained in `src/app/globals.css`. Additional styles for the dashboard deck are in `src/components/folio/showcase.css`. Font-face rules use local Geist, Geist Mono and Tiempos files. New custom styles can be added in dedicated CSS files.

## Verification and limits

Desktop (1440px) and mobile (390px) screenshots were compared for every route. All page heights and h1/h2 positions and sizes match the source at both widths. No horizontal overflow, broken visible images, or external rendering requests were found. Tablet navigation was tested at 768px. Theme persistence, menu keyboard controls, FAQ state/category scrolling, dashboard tabs/timer, billing changes and local contact-form submission were tested in a headless browser.

Contact submissions are simulated, as on the original; no message is sent. Login, most footer links and some dashboard buttons are decorative `#` controls on the source and remain placeholders. There is no authentication, payments, database or AI service. Pricing/contact navigation and missing homepage section anchors were connected locally. Dynamic illustration and marquee frames can differ by capture time. Original photo optimization/compression can cause small pixel differences.

No deployment has been made. The export has no new Git branch or repository. The template checkout is preserved separately from this clone.
