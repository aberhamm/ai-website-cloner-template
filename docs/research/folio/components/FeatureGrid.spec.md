# FeatureGrid specification
- Target: src/components/folio/FeatureGrid.tsx
- Screenshot: docs/design-references/folio/home-desktop.png
- Structure/content: generated JSX retains original element hierarchy, text, utility classes, SVG paths and locally downloaded assets.
- Interaction model: static CSS presentation, hover/animation; form/pricing state where applicable.
- Exact computed container styles: [{"cls": "py-20 md:py-28", "css": {"backgroundColor": "rgba(0, 0, 0, 0)", "borderRadius": "0px", "color": "rgb(235, 235, 235)", "display": "block", "fontFamily": "Geist, \"Geist Fallback\"", "fontSize": "16px", "fontWeight": "400", "gap": "normal", "gridTemplateColumns": "none", "letterSpacing": "normal", "lineHeight": "24px", "margin": "0px", "maxWidth": "none", "padding": "112px 0px", "position": "static", "top": "auto", "transition": "all"}, "id": "", "rect": {"bottom": 3975.5, "height": 1476, "left": 0, "right": 1429, "top": 2499.5, "width": 1429, "x": 0, "y": 2499.5}, "tag": "SECTION", "text": "Every angle of your data, in one workspaceConnect your warehouse, ask in plain English, and ship dashboards your team wi"}]
- Asset manifest: docs/research/folio/asset-manifest.json. 36 local assets, Geist/Geist Mono plus source serif heading rules.
- Responsive: original utility classes switch grid at md (768), desktop nav at lg (1024); desktop 1440, tablet 768, mobile 390.
- States: retain original source hover rules and responsive classes.
