# Homepage and shared behavior audit

Compared live source https://readable.framer.website/ and clone at1440x1000 and390x844. Original public script_main.JSUOQPMJ.mjs and page SCPOQBWA module back up observed states. Other page audits cover index/contact/four articles.

Verified missing/mismatched behavior corrected:
- Desktop hero panel begins scale2,y-460 and settles over3s after.75s; hero copy fades after1.9s, title words start2.2s (mobile.3s). Phone group starts scale1.2/y-300 desktop, mobile.8/y100 with.6 delay. Existing sequential phone rises/fan-out retained. Source does not visibly reverse phone group at scroll350/650/1050/back0; no added parallax.
- H1 word blur6px/y50/opacity.001, stagger50ms, spring100/3/500. Secondary pages start.2s. No blank-word/placeholder content.
- Source viewport threshold0, no5% inset; precise per-card stagger: home steps.2/.4/.6, features top/voice.2, summary.4 desktop/.2 mobile; reasons descend200px bottom-to-top.2/.4/.6/.8; source icon badge scales0→1 after.6 and rocks0↔20deg over1s mirror, paused offscreen.
- CTA central badge repeats1.2→1 scale when entering the viewport. All CTA instances share it. Contact testimonial heading has no source entrance; retained static there.
- Source Ticker props from live React tree: word rows speed25px/s directions left/right/left, gap20,hoverFactor1; testimonials35px/s top/bottom/top,gap32,hoverFactor1. Previous local65s testimonial duration was too slow and incorrectly paused on hover. New measured Web Animations loops use fixed pixel rates and pause offscreen/reduced motion.
- Source counters start1 and step once per interval:55 at23ms,96/85/100 at8ms; no replay; pause offscreen. Replaces shared2s progress curve.
- Source Download/Send/Subscribe button gradient reverses147.792deg endpoints rgb116,110,139 and58,52,79; no hover lift. Nav/footer links hover#f4d1ff. Exact route links show active color on index/contact, articles do not mark Blog current.
- Source related carousel: no autoplay or pointer drag,400px cards/gap30 desktop and320/gap20 mobile. Spring200/40/1; controls pressedscale.9 over.15s and no hover grow. Full-card anchors and Read More label moving left-94px while arrow grows40→132px over.4s. Both homepage and article carousels fixed; index cards share same hover.

Matched/no missing feature found: offer badge has no separate hover transform; source step/contact cards have no card/icon hover transforms; author portraits and large article images have no hover effect/link; reasons are not draggable; native form requirements/email validation/textarea vertical resize. Do not submit original valid forms. Local form submissions remain explicitly labeled demos; external email services and actual template purchase are outside clone scope.

Intentional accessible additions retained: visible keyboard focus outlines, keyboard carousel arrows, reduced-motion fallback and no-script content visibility. Springs are recreated from extracted parameters using sampled CSS easing/analytic step response; Framer runtime itself is not bundled.
