# Readable animation and interaction comparison

Audited 22 October 2026 against https://readable.framer.website/ at desktop (1440 × 1000) and mobile (390 × 844).

## Coverage

All seven pages: homepage, blog index, contact, and all four articles. Compared initial load, viewport entrances, scrolling away/back, continuous movement, hover/pressed states, navigation, carousel controls and wrapping, form validation, and reduced motion. Checked the public Framer configuration to distinguish subtle timing differences from missing behavior.

## Corrections

- Recreated staggered word entrances with blur and spring easing on all page titles. Corrected the desktop hero panel/copy/phone sequence and mobile phone entrance.
- Matched viewport triggers, per-card delays, downward reason-bar entrances, repeating CTA badge scale, and the feature badge rocking animation.
- Set word marquees to 25 pixels/second and testimonial lanes to 35 pixels/second. Both pause offscreen; testimonials continue on hover as in the original.
- Matched individual statistic counter intervals rather than a shared two-second curve.
- Corrected article and index mount entrances, contact card reveals, and the static contact testimonial heading.
- Matched carousel spring movement, mobile card widths and gaps, pressed arrow states, full-card links, and expanding Read More arrows.
- Matched button gradient reversal and navigation/footer hover and active colors.

No additional source modal, accordion, image interaction, carousel autoplay, or carousel dragging was found. The source phone stack does not reverse on scroll.

## Verification

All 14 page/viewport combinations render without horizontal overflow, missing images, hidden once-only reveal content, or links accidentally pointing to original internal pages. Captured screenshots are in `docs/design-references/readable/audit/`.

Browser checks confirmed ticker rates and visibility pausing, CTA repeat behavior, carousel movement in both directions at both sizes, arrow pressed scaling, card hover geometry, image-click navigation, and reduced-motion final states. Machine-readable evidence: `final-route-checks.json` and `control-checks.json`. Lint, TypeScript, and production build pass.

Detailed findings: `home-shared-interactions.md`, `contact-index-interactions.md`, and `articles-audit.md`.

## Limits

Framer springs are recreated from extracted parameters with sampled CSS easing and analytic spring movement; the Framer runtime is not bundled. Keyboard focus outlines, keyboard carousel controls, reduced-motion support, and no-script visibility are retained. Local forms remain explicitly labeled demos and do not send email or subscribe users. Original valid forms were not submitted during the audit.
