# Readable clone validation

Source: https://readable.framer.website/

Built nine page regions: navigation, hero, How It Works, Features, Why Choose Us, Testimonials, Blog, CTA, footer. Seven component source files and seven specification files. Fifty unique local asset files (PNG/JPG/SVG/WOFF2), including source favicon and four Inter Display weights plus body Inter.

`npm run check` passes ESLint, TypeScript and production build. Baseline also passed before work. Browser reference and local captures at desktop1440,tablet768,mobile390 are preserved in docs/design-references/readable. Corrected shared heading flex layouts, mobile38px hero heading, phone sizing, card image mapping and source counter targets. No page horizontal overflow at any tested width; all local image URLs load successfully.

Interaction checks: Next and Previous each move the desktop carousel one430px step in the expected direction. Mobile controls and keyboard handlers operate with one card per step. Native required email input validates and a valid demo submission reports that signup is not connected. Footer anchors map to existing sections. External article, contact, social and checkout links retain original destinations. Moving cards/testimonials/phones disable animations for reduced-motion preferences.

Known limits: newsletter and contact form services are not connected. The homepage, blog index, four articles, and contact page now all run locally. Entrance and timed animations are recreated in CSS/IntersectionObserver rather than Framer's runtime; their timing and some icons are approximations. No deployment performed. Clone remains in the project rather than detached.

Motion follow-up: replaced looping phone fade with the source's sequential opening/fan-out. Added actual once-only viewport reveals,85px upward heading/card movement, staggered cards,200px descending reason bars, alternating160px testimonial lane entrances. Source timing/offset extraction and browser validation are in components/Motion.spec.md. Verified desktop animation keyframes, scroll intermediate/final states,390px layout, and reduced-motion fallback.
