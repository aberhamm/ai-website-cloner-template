# FaqSection specification
- Target: src/components/folio/FaqSection.tsx
- Screenshot: docs/design-references/folio/home-desktop.png
- Structure/content: generated JSX retains original element hierarchy, text, utility classes, SVG paths and locally downloaded assets.
- Interaction model: click and scroll state.
- Exact computed container styles: [{"cls": "bg-background py-16 md:py-24", "css": {"backgroundColor": "rgb(18, 18, 18)", "borderRadius": "0px", "color": "rgb(235, 235, 235)", "display": "block", "fontFamily": "Geist, \"Geist Fallback\"", "fontSize": "16px", "fontWeight": "400", "gap": "normal", "gridTemplateColumns": "none", "letterSpacing": "normal", "lineHeight": "24px", "margin": "0px", "maxWidth": "none", "padding": "96px 0px", "position": "static", "top": "auto", "transition": "all"}, "id": "", "rect": {"bottom": 7820.75, "height": 1294, "left": 0, "right": 1429, "top": 6526.75, "width": 1429, "x": 0, "y": 6526.75}, "tag": "SECTION", "text": "FAQsEverything you need to know about Folio. Can't find what you're looking for? Reach out to our support team for assis"}]
- Asset manifest: docs/research/folio/asset-manifest.json. 36 local assets, Geist/Geist Mono plus source serif heading rules.
- Responsive: original utility classes switch grid at md (768), desktop nav at lg (1024); desktop 1440, tablet 768, mobile 390.
- States: General, Customization, Support categories; one open question per group; initial What is Folio open.
