# FolioHeader specification
- Target: src/components/folio/FolioHeader.tsx
- Screenshot: docs/design-references/folio/home-desktop.png
- Structure/content: generated JSX retains original element hierarchy, text, utility classes, SVG paths and locally downloaded assets.
- Interaction model: click and scroll state.
- Exact computed container styles: [{"cls": "fixed z-20 w-full px-2", "css": {"backgroundColor": "rgba(0, 0, 0, 0)", "borderRadius": "0px", "color": "rgb(235, 235, 235)", "display": "block", "fontFamily": "Geist, \"Geist Fallback\"", "fontSize": "16px", "fontWeight": "400", "gap": "normal", "gridTemplateColumns": "none", "letterSpacing": "normal", "lineHeight": "24px", "margin": "0px", "maxWidth": "none", "padding": "0px 8px", "position": "fixed", "top": "0px", "transition": "all"}, "id": "", "rect": {"bottom": 76, "height": 76, "left": 0, "right": 1429, "top": 0, "width": 1429, "x": 0, "y": 0}, "tag": "NAV", "text": "FolioFeaturesSolutionPricingAboutFeaturesSolutionPricingAboutLoginSign UpGet Started"}]
- Asset manifest: docs/research/folio/asset-manifest.json. 36 local assets, Geist/Geist Mono plus source serif heading rules.
- Responsive: original utility classes switch grid at md (768), desktop nav at lg (1024); desktop 1440, tablet 768, mobile 390.
- States: theme light/dark, mobile menu open/closed, floating header beyond scroll threshold.
