# ShowcaseSection specification
- Target: src/components/folio/ShowcaseSection.tsx
- Screenshot: docs/design-references/folio/home-desktop.png
- Structure/content: generated JSX retains original element hierarchy, text, utility classes, SVG paths and locally downloaded assets.
- Interaction model: click and scroll state.
- Exact computed container styles: [{"cls": "py-20 md:py-28", "css": {"backgroundColor": "rgba(0, 0, 0, 0)", "borderRadius": "0px", "color": "rgb(235, 235, 235)", "display": "block", "fontFamily": "Geist, \"Geist Fallback\"", "fontSize": "16px", "fontWeight": "400", "gap": "normal", "gridTemplateColumns": "none", "letterSpacing": "normal", "lineHeight": "24px", "margin": "0px", "maxWidth": "none", "padding": "112px 0px", "position": "static", "top": "auto", "transition": "all"}, "id": "", "rect": {"bottom": 5236.5, "height": 1261, "left": 0, "right": 1429, "top": 3975.5, "width": 1429, "x": 0, "y": 3975.5}, "tag": "SECTION", "text": "Why teams prefer Folio to spreadsheets and SQL editorsPlain English over SQL, beautiful dashboards over CSV exports, and"}]
- Asset manifest: docs/research/folio/asset-manifest.json. 36 local assets, Geist/Geist Mono plus source serif heading rules.
- Responsive: original utility classes switch grid at md (768), desktop nav at lg (1024); desktop 1440, tablet 768, mobile 390.
- States: four click-driven dashboard tabs.
