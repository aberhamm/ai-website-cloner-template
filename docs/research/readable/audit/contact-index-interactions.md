# Contact and blog index interaction comparison

Audit 2026-10-22. Source `https://readable.framer.website/contact` and `/blog-index`; local `http://localhost:3107` same paths. Isolated agent-browser sessions `ra-contact-source` / `ra-contact-local`. Viewports 1440×1000 and 390×844. Source evidence collected through live DOM, computed styles, accessible snapshots and React fiber effect/appear props. No valid source form submission or checkout navigation.

## Verified differences

| Area | Source evidence | Existing local behavior | Action |
|---|---|---|---|
| Both H1s | Each word initial opacity .001, blur6px, y50; startDelay .2; word interval .05; spring damping100 mass3 stiffness500; onMount, repeatfalse | Plain heading inside generic rise wrapper | Add word animation; preserve accessible heading text |
| Both hero copy wrappers | Initial opacity .001, y0; duration1.2, ease [.68,0,0,1], delay0 | Rise85px, generic1.1s ease | Fade-only wrapper |
| Contact form container | Appear-id h4xqen: opacity .001/y85 →1/y0; delay .6; spring damping40 mass1 stiffness150 | Scroll reveal generic1.1s, no delay | Mount reveal with .6 delay |
| Blog index cards | All four wrappers share appear-id17cwk6z; opacity .001/y85 →1/y0; delay .6; spring40/1/150; offscreen cards already end state after mount | Individually scroll-triggered rise | Mount entrance on all cards |
| Contact Get in Touch header | Scroll reveal y85, spring40/1/150, delay0, animateOnce true | Generic1.1s ease | Match spring approximation |
| Contact cards | Scroll reveal y85, spring40/1/150; delays .2/.4/.6; animateOnce true | All generic rise without stagger | Add per-card delays |
| Blog Read More | Hover anywhere on whole linked card activates child Hover variant. Pill outer width148px stays fixed. Label slides left outside pill and clips; arrow background width40→132px, from right circle to pill inset8px, arrow centered. No image scaling, full-card lift, color change or shadow. | Static label/circle at hover | Shared Read More hover component |
| Contact Send Message | Inner gradient normal147.792deg #746e8b→#3a344f; hover reverses endpoints; no outer scale observed | Static dark gradient | Gradient crossfade/reversal on hover |
| Footer Subscribe | Same normal/hover reversal, radius50px; source does not brighten entire button | brightness1.14 | Match gradient |
| Footer links | Gray210/210/210 → pink244/209/255 on hover; no underline | White hover | Pink hover |

## Behaviors matching or intentionally retained

- Contact four fields are required; Name/Subject are text and Email is email. Empty submit focuses Name using browser native validation. Invalid email reports native typeMismatch. Local confirms same empty-submit focus and required/email validation. Neither source nor local empty/invalid tests transmit a valid message.
- Description textarea resizes vertically in both implementations. Source oddly names textarea Subject; local uses description, which is preferable internally.
- Source has no visible field focus outline/shadow change; local purple focus-visible ring should stay for accessibility.
- Contact card clip, icon wrapper and all card descendants show no hover geometry/color/shadow change on first card; all three source card component fibers expose no hover/tap/variant props. No missing clip swing or icon rotation found.
- Contact card reveal once verified at mobile: after entry transform none/opacity1 remain after scrolling top and back. Same once flag exists in desktop/mobile source effect props.
- Source and local blog index link cards contain all four corresponding article destinations. Clicking first local card at390px navigated to local `/blog-index/why-your-mood-deserves-better-content`.
- Desktop/blog card image stays scale1 on hover; no carousel/filter/pagination controls exist on index.
- Mobile visible navigation remains Blog/Contact/Get Template rather than a hamburger; no missing menu discovered.

## Source effect data

H1 word effect for contact and index:

```json
{"effect":{"filter":"blur(6px)","opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":50},"repeat":false,"startDelay":0.2,"tokenization":"word","transition":{"damping":100,"delay":0.05,"mass":3,"stiffness":500,"type":"spring"},"trigger":"onMount","type":"appear"}
```

Header outer fade: tween duration1.2/ease[.68,0,0,1]. Form and blog cards: spring damping40/mass1/stiffness150/delay.6. Contact card stagger delays .2/.4/.6.

Shared Contact testimonial title has no source entrance effect (local rise is extra). CTA header source scroll rise85 once delay0, spring40/1/150. Shared testimonial tickers/CTA icon cycles delegated to root audit. Source submit success/server behavior deliberately untested; demo-only local form is documented existing scope.

## Implementation verification

Applied page-specific fixes using the shared `WordHeading` and `Motion` foundation: both hero wrappers fade at mount; titles animate by word; contact form and all index cards use mount rise85 with .6s delay; contact scroll cards stagger .2/.4/.6. Contact button now crossfades to the reversed source gradient on hover/focus, with reduced-motion transition disabled.

`npm run typecheck` and scoped ESLint passed. Isolated preview on port3118 checked1440×1000 and390×844. Browser DOM verified title IDs/word spans, all four index cards visible after mount including offscreen cards, contact cards hidden until viewport entry with expected computed delays, button overlay0→1 on hover and exact gradient endpoints. No horizontal overflow at either viewport. Shared Read More hover, footer, and optional static Contact testimonial title remain parent integration work.
