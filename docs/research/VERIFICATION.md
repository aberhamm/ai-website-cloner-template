# Forma clone verification

Source: https://21st-pilates.vercel.app/

Built ten main sections, header, footer, and a shared interaction controller. Thirteen component specifications preserve the extracted DOM/classes and computed styles. Thirteen assets are local: four PNG images, two SVG marks, and seven variable font subsets. The source's exact compiled stylesheet is retained so its responsive utility values remain faithful.

Desktop screenshots at 1440×1000 and mobile screenshots at 390×844 match the original hero crop, typography, colors, spacing, cards, and portraits. Full desktop page height matches at 6477px. No horizontal document overflow at 390, 768, or 1440px. Images and local fonts load successfully.

Browser checks passed: four class description dialogs; Escape dismissal; mobile menu open/close; class filter; combined class/instructor empty state; next week navigation; selected-day highlight; FAQ question switching; pricing dialog; cancellation-policy link opening the correct FAQ. No browser runtime errors observed.

Booking and policy dialogs use concise demo content. The source has no configured checkout backend. Schedule availability follows America/Chicago studio time. Text reveal timing and native filter menus approximate the source's animation and dropdown implementation.

Lint, TypeScript, and Next.js production build pass.

Worktree ownership: root created pilates-clone, pilates-schedule, pilates-faq, and pilates-pricing under the primary project's .worktrees directory. The three worker worktrees were removed after their changes were integrated into pilates-clone. The completed pilates-clone worktree is retained because it serves the active preview at localhost:3017 and the primary checkout independently advanced with another clone. Root owns its cleanup after the preview is stopped and the user integrates or discards the copy. Existing unrelated worktrees are untouched.

## Integration

Pilates is integrated at `/pilates` with a separate route-group root layout and stylesheet. Readable keeps `/`, `/blog-index`, its article URLs, and `/contact`. Both sites preserve their own fonts and metadata. The default repository branch is `master`. Root will remove the Pilates worktree after the merged commit is pushed and no preview process uses it.
