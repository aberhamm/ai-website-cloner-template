# Opening and scroll motion

Inspected the source Framer component bundle and live computed styles on 2026-10-22.

Desktop phone sequence is finite: all three cards start at top1899px, centered horizontally with268px width. After500ms the first rises; after1000ms the second; after1500ms the center phone. At2500ms the stack fans out: left card at22% of776px group, right at78%, each top62px and268px wide; center grows to309px wide and stays top0. Source transition is a one-second spring with bounce0. Mobile starts with117px cards centered, fans after500ms with side top27px and center135px. Replace previous10-second infinite fade with this finite sequence. Navigation drops from -85px after2500ms desktop/800ms mobile. Title scales.9→1 and rises40px with1.3s cubic-bezier(.68,0,0,1); supporting copy fades after400ms over1.2s.

Scroll: heading groups and feature/step cards start opacity0 and translateY85px. Source spring damping40/stiffness150/mass1; live header samples opacity0 initially,.336 at100ms,.627 at200ms,.917 at500ms,1 at1100ms. Implement once-only IntersectionObserver with bottom5% inset, approximately matching1.1s easing. Stagger step cards100ms. Why-choice bars descend from -200px retaining rotations. Testimonial lanes enter alternately from160px/-160px, keeping ticker animation independent. CTA copy and phone rise85px.

CSS individual translate preserves existing transforms. Content stays visible when scripting is disabled or reduced motion is requested. Observer unobserves completed elements and disconnects on unmount. A live preference change reveals pending elements immediately.

Validated: opening0/1000/2000/3500ms frames, hidden below-fold header → intermediate opacity/translate → fully visible after1100ms; mobile width390 without overflow; reduced-motion shows all content and zero hero animations. npm run check passes.
