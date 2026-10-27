# Forma clone verification

Source: https://21st-pilates.vercel.app/

Built ten main sections, header, footer, and a shared interaction controller. Thirteen component specifications preserve the extracted DOM/classes and computed styles. Thirteen assets are local: four PNG images, two SVG marks, and seven variable font subsets. The source's exact compiled stylesheet is retained so its responsive utility values remain faithful.

Desktop screenshots at 1440×1000 and mobile screenshots at 390×844 match the original hero crop, typography, colors, spacing, cards, and portraits. Full desktop page height matches at 6477px. No horizontal document overflow at 390, 768, or 1440px. Images and local fonts load successfully.

Browser checks passed: four class description dialogs; Escape dismissal; mobile menu open/close; class filter; combined class/instructor empty state; next week navigation; selected-day highlight; FAQ question switching; pricing dialog; cancellation-policy link opening the correct FAQ. No browser runtime errors observed.

Booking and policy dialogs use concise demo content. The source has no configured checkout backend. Schedule availability follows America/Chicago studio time. Text reveal timing and native filter menus approximate the source's animation and dropdown implementation.

Lint, TypeScript, and Next.js production build pass.

Worktree cleanup: the four task-owned Pilates worktrees (pilates-clone, pilates-schedule, pilates-faq, and pilates-pricing) have been removed after integration. The preview process was stopped. Evidence and assets are preserved in the main checkout. Unrelated active worktrees remain untouched.

## Integration

Pilates is integrated at `/pilates` with a separate route-group root layout and stylesheet. A concurrent Folio merge superseded the Readable site on master; Folio keeps `/`, `/contact`, `/pricing`, `/privacy`, and `/terms` exactly as that merge configured them. Both active sites preserve their own fonts and metadata. The default repository branch is `master`. The combined project passed lint, TypeScript, production build, and browser checks for both active sites. Integration commit `cf5a8b1` was pushed to `origin/master` before the final Pilates worktree was removed.
