# ShowcaseSection specification
- Target: src/components/folio/ShowcaseSection.tsx
- Screenshot: docs/design-references/folio/home-desktop.png
- Structure/content: generated JSX retains original element hierarchy, text, utility classes, SVG paths and locally downloaded assets.
- Interaction model: click and scroll state.
- Exact computed container styles: [{"cls": "py-20 md:py-28", "css": {"backgroundColor": "rgba(0, 0, 0, 0)", "borderRadius": "0px", "color": "rgb(235, 235, 235)", "display": "block", "fontFamily": "Geist, \"Geist Fallback\"", "fontSize": "16px", "fontWeight": "400", "gap": "normal", "gridTemplateColumns": "none", "letterSpacing": "normal", "lineHeight": "24px", "margin": "0px", "maxWidth": "none", "padding": "112px 0px", "position": "static", "top": "auto", "transition": "all"}, "id": "", "rect": {"bottom": 5236.5, "height": 1261, "left": 0, "right": 1429, "top": 3975.5, "width": 1429, "x": 0, "y": 3975.5}, "tag": "SECTION", "text": "Why teams prefer Folio to spreadsheets and SQL editorsPlain English over SQL, beautiful dashboards over CSV exports, and"}]
- Asset manifest: docs/research/folio/asset-manifest.json. 36 local assets, Geist/Geist Mono plus source serif heading rules.
- Responsive: original utility classes switch grid at md (768), desktop nav at lg (1024); desktop 1440, tablet 768, mobile 390.
- States: four click-driven dashboard tabs.

## Live state verification (2026-10-22)

- Source DOM contains a deliberate deck of all four dashboard cards. The current card is z-index 4, top 0, scale 1; subsequent cards are z-index 3/top -10px/scale .96 and z-index 2/top -20px/scale .92. The last card is z-index 1/top -30px/scale .88/opacity 0. Preserve these shallow backing cards rather than rendering several overlapping front-facing panels.
- Tab order/content: Conversational AI (Greenleaf deal strategy and meeting assistant); Reports & charts (Platform Analytics, query volumes, channels, pipeline and cohort charts); Pipeline runs (Run #70, branching workflow and execution history); Data modeling (stock analysis table, 2,847 records, original ticker rows).
- A tab click moves that card to the front and resets progress. Source progress increments .3125% every 50ms, confirming a 16-second rotation. Implementation uses a 16-second timeout with a matching CSS progress animation. The timer pauses while keyboard focus is within the tablist; it resumes with a fresh cycle when focus leaves.
- Original dashboard markup, SVG paths, chart data, local logo, utility classes, fixed responsive heights and clipping are preserved in the four dedicated Showcase*Panel components. No backend behavior is implied by decorative dashboard controls.
- Added tablist/tab/tabpanel relationships, roving tabIndex, ArrowLeft/ArrowRight/Home/End navigation. Inactive dashboard cards are inert and aria-hidden so their controls do not intercept pointer or keyboard input. Reduced-motion preference disables card transitions.
- Validation: `npx tsc --noEmit` passes. Targeted ESLint has zero errors and four existing source-image optimization warnings. Browser checked all four tab states, keyboard navigation, hidden card inertness, automatic rotation after 16 seconds, desktop deck rendering, and 390px mobile clipping with no horizontal document overflow.
- Local browser verification used webpack because Turbopack rejects dependency symlinks outside the worktree root. This is a development environment limitation; no project configuration was changed.
