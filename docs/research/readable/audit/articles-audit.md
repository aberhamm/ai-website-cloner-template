# Readable article motion / interaction audit

Date: 2026-10-22. Read-only audit of original vs running clone at http://localhost:3107.

All four routes were opened at 1440×1000 and 390×1000, scrolled from top through article body to related cards before interacting. Per-route runtime measurements are in `articles-route-evidence.json`; exact Framer source motion values are in `articles-motion-spec.json`.

Routes:
- /blog-index/why-your-mood-deserves-better-content
- /blog-index/article-summaries-that-make-sense
- /blog-index/why-scrolling-is-out-and-speaking-is-in
- /blog-index/how-to-do-online-dating-as-weebs

## Verified shared gaps

1. **Title animation:** original H1 splits into word spans, rising 50px and clearing 6px blur; clone is plain text in an 85px whole-intro reveal. Start delay .2s, per-word delay .05s; spring damping100/mass3/stiffness500. Original intro container itself only fades over1.2s cubic(.68,0,0,1), without translation. All routes and both widths use the same article template.
2. **Cover entrance:** original optimized mount animation rises85px, fades from .001, waits .6s, spring damping40/mass1/stiffness150. Clone uses generic IntersectionObserver reveal with no delay and1.1s cubic. It should mount even when initially below mobile fold; it is not a scroll-reveal target in original metadata.
3. **Section reveals:** original rises85px once at threshold0 with spring damping40/mass1/stiffness150. Clone offset matches but starts at -5% viewport margin and uses1.1s cubic. This is an approximation, not an absent animation.
4. **Full-card links:** original related-card title, image and background are all inside `a.framer-pnlJV`. Clone has an ARTICLE with only the Read More label linked.
5. **Read More hover:** hovering anywhere on original card switches nested Learn More Button to Hover: label moves off left (absolute left:-94px, top50%, translateY(-50%)); arrow container fills the148px button (flex1,width1px), spring bounce.2/duration.4. Image and card stay still. Clone button has no such animation.
6. **Carousel arrow feedback and travel:** original whileTap scales to .9 in .15s; clone scales1.06 on hover and lacks pressed effect. Browser pointer-down captured source matrix(.9) and local matrix(1.06). Source travel uses spring damping40/mass1/stiffness200; clone uses400ms cubic.
7. **Mobile carousel sizing:** source cards320px, gap20px, step340px, left20px. Clone cards342px, gap30px, step372px, left24px. Desktop400px+30px step430 matches.
8. **Navigation base color:** original article-page Blog and Contact use#d2d2d2; local uses white. Neither original nor local marks Blog current on article routes.

## Interactions that match / no extra behavior found

- Author portrait/name and cover have no links or hover transforms in original; no missing author profile/image interaction.
- No article-specific accordion, share tool, table of contents, modal or pagination exists in original DOM.
- Related carousel does not autoplay and is not draggable on desktop or mobile (`autoPlayControl:false`, `dragControl:false` in source). Browser mobile horizontal mouse drag released over card navigated to that card, rather than advancing slides. Clone button next/previous works and has no autoplay; its native horizontal scroll is an extra affordance.
- Carousel loops; original Next activates expected subsequent card. Clone Next likewise advances, though timing and mobile stride differ.
- CTA, newsletter and footer are shared with homepage and audited by parent; original newsletter was not submitted, checkout/social actions were not activated.

## Evidence limits

Computed styles captured after each command show progression, not frame-exact timing, because CLI invocation overhead varies. Exact timing/trigger values above come from original published Framer template/component modules, validated against original runtime word spans, appear IDs, scroll transforms and pressed states. A real touch swipe was not simulated; drag-disabled claim comes from published component properties plus mouse-drag behavior.
