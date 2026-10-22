# HeroSection specification
- Target: src/components/folio/HeroSection.tsx
- Screenshot: docs/design-references/folio/home-desktop.png
- Structure/content: generated JSX retains original element hierarchy, text, utility classes, SVG paths and locally downloaded assets.
- Interaction model: static CSS presentation, hover/animation; form/pricing state where applicable.
- Exact computed container styles: [{"cls": "text-balance font-semibold text-4xl sm:text-5xl lg:text-6xl", "css": {"backgroundColor": "rgba(0, 0, 0, 0)", "borderRadius": "0px", "color": "rgb(235, 235, 235)", "display": "block", "fontFamily": "\"Tiempos Headline\", Georgia, serif", "fontSize": "60px", "fontWeight": "600", "gap": "normal", "gridTemplateColumns": "none", "letterSpacing": "normal", "lineHeight": "60px", "margin": "0px", "maxWidth": "none", "padding": "0px", "position": "static", "top": "auto", "transition": "all"}, "id": "", "rect": {"bottom": 330, "height": 120, "left": 226.5, "right": 1202.5, "top": 210, "width": 976, "x": 226.5, "y": 210}, "tag": "H1", "text": "Making Data Intelligence Accessible"}]
- Asset manifest: docs/research/folio/asset-manifest.json. 36 local assets, Geist/Geist Mono plus source serif heading rules.
- Responsive: original utility classes switch grid at md (768), desktop nav at lg (1024); desktop 1440, tablet 768, mobile 390.
- States: retain original source hover rules and responsive classes.
