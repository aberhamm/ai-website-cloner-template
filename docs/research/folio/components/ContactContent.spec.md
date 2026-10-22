# ContactContent specification
- Target: src/components/folio/ContactContent.tsx
- Screenshot: docs/design-references/folio/contact-desktop.png
- Structure/content: generated JSX retains original element hierarchy, text, utility classes, SVG paths and locally downloaded assets.
- Interaction model: static CSS presentation, hover/animation; form/pricing state where applicable.
- Exact computed container styles: [{"cls": "max-w-xs sm:max-w-lg md:max-w-2xl text-center font-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter animate-fade-in-up", "css": {"backgroundColor": "rgba(0, 0, 0, 0)", "borderRadius": "0px", "color": "rgb(235, 235, 235)", "display": "block", "fontFamily": "\"Tiempos Headline\", Georgia, serif", "fontSize": "60px", "fontWeight": "400", "gap": "normal", "gridTemplateColumns": "none", "letterSpacing": "-3px", "lineHeight": "60px", "margin": "0px", "maxWidth": "672px", "padding": "0px", "position": "static", "top": "auto", "transition": "all"}, "id": "", "rect": {"bottom": 188, "height": 60, "left": 378.5, "right": 1050.5, "top": 128, "width": 672, "x": 378.5, "y": 128}, "tag": "H1", "text": "Get in Touch"}]
- Asset manifest: docs/research/folio/asset-manifest.json. 36 local assets, Geist/Geist Mono plus source serif heading rules.
- Responsive: original utility classes switch grid at md (768), desktop nav at lg (1024); desktop 1440, tablet 768, mobile 390.
- States: retain original source hover rules and responsive classes.
