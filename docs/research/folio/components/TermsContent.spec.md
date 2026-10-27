# TermsContent specification
- Target: src/components/folio/TermsContent.tsx
- Screenshot: docs/design-references/folio/terms-desktop.png
- Structure/content: generated JSX retains original element hierarchy, text, utility classes, SVG paths and locally downloaded assets.
- Interaction model: static CSS presentation, hover/animation; form/pricing state where applicable.
- Exact computed container styles: [{"cls": "mb-2 font-bold text-3xl leading-tight tracking-tighter md:text-4xl", "css": {"backgroundColor": "rgba(0, 0, 0, 0)", "borderRadius": "0px", "color": "rgb(235, 235, 235)", "display": "block", "fontFamily": "\"Tiempos Headline\", Georgia, serif", "fontSize": "36px", "fontWeight": "700", "gap": "normal", "gridTemplateColumns": "none", "letterSpacing": "-1.8px", "lineHeight": "45px", "margin": "0px 0px 8px", "maxWidth": "none", "padding": "0px", "position": "static", "top": "auto", "transition": "all"}, "id": "", "rect": {"bottom": 69, "height": 45, "left": 99.5, "right": 1329.5, "top": 24, "width": 1230, "x": 99.5, "y": 24}, "tag": "H1", "text": "Terms of Service"}]
- Asset manifest: docs/research/folio/asset-manifest.json. 36 local assets, Geist/Geist Mono plus source serif heading rules.
- Responsive: original utility classes switch grid at md (768), desktop nav at lg (1024); desktop 1440, tablet 768, mobile 390.
- States: retain original source hover rules and responsive classes.
