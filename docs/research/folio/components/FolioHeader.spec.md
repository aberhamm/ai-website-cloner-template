# FolioHeader specification
- Target: src/components/folio/FolioHeader.tsx
- Screenshot: docs/design-references/folio/home-desktop.png
- Structure/content: generated JSX retains original element hierarchy, text, utility classes, SVG paths and locally downloaded assets.
- Interaction model: click and scroll state.
- Exact computed container styles: [{"cls": "fixed z-20 w-full px-2", "css": {"backgroundColor": "rgba(0, 0, 0, 0)", "borderRadius": "0px", "color": "rgb(235, 235, 235)", "display": "block", "fontFamily": "Geist, \"Geist Fallback\"", "fontSize": "16px", "fontWeight": "400", "gap": "normal", "gridTemplateColumns": "none", "letterSpacing": "normal", "lineHeight": "24px", "margin": "0px", "maxWidth": "none", "padding": "0px 8px", "position": "fixed", "top": "0px", "transition": "all"}, "id": "", "rect": {"bottom": 76, "height": 76, "left": 0, "right": 1429, "top": 0, "width": 1429, "x": 0, "y": 0}, "tag": "NAV", "text": "FolioFeaturesSolutionPricingAboutFeaturesSolutionPricingAboutLoginSign UpGet Started"}]
- Asset manifest: docs/research/folio/asset-manifest.json. 36 local assets, Geist/Geist Mono plus source serif heading rules.
- Responsive: original utility classes switch grid at md (768), desktop nav at lg (1024); desktop 1440, tablet 768, mobile 390.
- States: theme light/dark, mobile menu open/closed, floating header beyond scroll threshold.

- Verified source state: scrollY > 50 adds `max-w-4xl rounded-2xl border bg-background/50 backdrop-blur-lg lg:px-5` in place of `max-w-6xl lg:px-12`. Transition 300ms. Login and Sign Up gain `lg:hidden`; Get Started gains `lg:inline-flex` alongside `hidden`, so mobile retains both original buttons.
- Mobile toggle sets nav `data-state="active"` when open and `"false"` when closed. Button label changes Open Menu / Close Menu. Existing extracted data-state CSS rotates/fades the two original SVGs and reveals the mobile panel below 1024px.
- Theme controls preserve original sun/moon SVGs and move the `bg-accent` selection background. Clone persists `theme` in localStorage; server snapshot starts dark to match layout. Browser storage failures degrade to in-page theme controls. Escape and mobile navigation close the panel.
- Header navigation: Features /#features, Solution /#solution, Pricing /pricing, About /#about; Sign Up and Get Started /pricing. Login retains original # demo link. Footer Try Folio Free routes /pricing; footer Features points /#features.
- Local browser QA passed at 390px and 768px: menu opens with block display, Escape closes, no horizontal overflow. Light/dark buttons update HTML class and localStorage; reload preserves light. At 1440px and scroll 51px, Login/Sign Up hide and Get Started displays. Threshold checked at 0/50/51/100px. Scoped ESLint has only intentional plain-image warnings; TypeScript check passes.
