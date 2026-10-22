# HowItWorks specification
- Target: src/components/folio/HowItWorks.tsx
- Screenshot: docs/design-references/folio/home-desktop.png
- Structure/content: generated JSX retains original element hierarchy, text, utility classes, SVG paths and locally downloaded assets.
- Interaction model: static CSS presentation, hover/animation; form/pricing state where applicable.
- Exact computed container styles: [{"cls": "text-balance font-bold text-3xl text-foreground tracking-tight sm:text-4xl md:text-5xl", "css": {"backgroundColor": "rgba(0, 0, 0, 0)", "borderRadius": "0px", "color": "rgb(235, 235, 235)", "display": "block", "fontFamily": "\"Tiempos Headline\", Georgia, serif", "fontSize": "48px", "fontWeight": "700", "gap": "normal", "gridTemplateColumns": "none", "letterSpacing": "-1.2px", "lineHeight": "48px", "margin": "0px", "maxWidth": "none", "padding": "0px", "position": "static", "top": "auto", "transition": "all"}, "id": "", "rect": {"bottom": 1917.5, "height": 96, "left": 106.5, "right": 690.5, "top": 1821.5, "width": 584, "x": 106.5, "y": 1821.5}, "tag": "H2", "text": "Everything around your data, in one workspace"}]
- Asset manifest: docs/research/folio/asset-manifest.json. 36 local assets, Geist/Geist Mono plus source serif heading rules.
- Responsive: original utility classes switch grid at md (768), desktop nav at lg (1024); desktop 1440, tablet 768, mobile 390.
- States: retain original source hover rules and responsive classes.
