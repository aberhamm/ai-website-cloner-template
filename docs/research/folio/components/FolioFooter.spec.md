# FolioFooter specification
- Target: src/components/folio/FolioFooter.tsx
- Screenshot: docs/design-references/folio/home-desktop.png
- Structure/content: generated JSX retains original element hierarchy, text, utility classes, SVG paths and locally downloaded assets.
- Interaction model: static CSS presentation, hover/animation; form/pricing state where applicable.
- Exact computed container styles: [{"cls": "relative mt-12 overflow-hidden bg-background", "css": {"backgroundColor": "rgb(18, 18, 18)", "borderRadius": "0px", "color": "rgb(235, 235, 235)", "display": "block", "fontFamily": "Geist, \"Geist Fallback\"", "fontSize": "16px", "fontWeight": "400", "gap": "normal", "gridTemplateColumns": "none", "letterSpacing": "normal", "lineHeight": "24px", "margin": "48px 0px 0px", "maxWidth": "none", "padding": "0px", "position": "relative", "top": "0px", "transition": "all"}, "id": "", "rect": {"bottom": 9259.75, "height": 1391, "left": 0, "right": 1429, "top": 7868.75, "width": 1429, "x": 0, "y": 7868.75}, "tag": "FOOTER", "text": "Stop waiting on the data team.Connect your warehouse, ask in plain English, and ship the chart before the meeting ends.T"}]
- Asset manifest: docs/research/folio/asset-manifest.json. 36 local assets, Geist/Geist Mono plus source serif heading rules.
- Responsive: original utility classes switch grid at md (768), desktop nav at lg (1024); desktop 1440, tablet 768, mobile 390.
- States: retain original source hover rules and responsive classes.
