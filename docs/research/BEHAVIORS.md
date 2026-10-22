# mymind.com Behaviors

## Navigation — Scroll-Triggered Floating Pill
- Trigger: scroll position > ~100px
- State A (top): transparent bg, 87px height, padding-top 33px, full-width, no shadow, no radius
- State B (scrolled): white bg (#fff), 60px height, padding 0, border-radius 30px, box-shadow rgba(116,130,151,0.14) 0 4px 22px, centered with max-width, transform translateX(-490px from full-width origin)
- Class added: `is-sticky`
- Transition: CSS transition on all properties

## Hero Bubbles — Static Colored Tags
- Word bubbles (notes, bookmarks, inspiration, articles, images) each have colored gradient backgrounds
- orange: rgba(233,143,83,0.06), pink: rgba(228,138,191,0.06), blue: rgba(153,210,251,0.06), red: rgba(234,114,107,0.06), yellow: rgba(255,207,39,0.06)
- No scroll or hover animation observed — static display

## Videos — Autoplay/Muted/Loop
- Hero video: mp4, autoplay, loop, muted
- Extension video: mp4, autoplay, loop, muted
- Phone video: mp4, autoplay, loop, muted (in iPhone mockup)
- AI video: webm, autoplay, muted, NOT loop (plays once)
- Search video: webm, autoplay, loop, muted
- Serendipity video: webm, autoplay, loop, muted

## Use Cases — Click-Driven Tabs
- Interaction model: CLICK-driven (not scroll)
- Tab pills: Designers, Writers, Marketers, Researchers, Developers, Everyone
- Clicking each tab switches content below
- Content changes: heading text + subtext change per tab

## Button Hover States
- Sign up button: orange (#FF5924) background pill, white text
- Nav links: colored dots before text (orange, yellow, pink, green)

## Manifesto Crossed-Out Items
- Items with strikethrough: social features, vanity metrics, invasive tracking, social pressure, collaboration, ads
- Static display, no interaction

## Reviews Section
- Review screenshot images positioned as floating cards
- Background: gradient image (absolute positioned behind content)

## Scroll Libraries
- No Lenis detected
- No Locomotive Scroll detected
- No scroll-snap on body
- Standard browser scrolling

## Responsive Behavior (observed)
- Desktop 1440px: full layout
- Nav becomes pill/floating at all viewport widths when scrolled
- Features section: 2-column card grid → likely stacks on mobile
- Blog posts: 3-column → likely stacks on mobile
- Footer: 4-column → likely stacks on mobile
