# Upstream workflow integration — October 28, 2026

Merged upstream `JCodesMore/ai-website-cloner-template` master at `ee3f5a2f31fd549b9593fa4f7cf6d2955ee593bb` (v0.6.1) into the fork based on `9be69a2`.

## Result

- The canonical `.agents/skills/clone-website/` skill, both inspection references, and the thin Claude command bridge match upstream byte for byte.
- Removed superseded platform workflow copies and synchronization scripts. Project instructions and contributor documentation now identify the canonical workflow directly.
- Updated root Next.js and eslint-config-next to upstream's exact `16.3.5` pins and adopted the upstream lockfile dependency updates.
- Preserved all existing `src/`, `public/`, and `clones/` files without changes, including the standalone CRM dependency lockfile. Preserved clone-specific download/export helpers and `npm run detach`.
- Preserved the combined route-group layouts, build configuration and lint/TypeScript exclusions for independent clones and worktrees. Existing clone documentation is retained in `docs/EXISTING_CLONES.md`.
- Omitted upstream's unrelated token-badge publishing workflow: it force-pushes a separate `badges` branch, outside this task's authorized push to master. This does not affect cloning logic or quality checks.

## Verification

- Root: clean `npm ci`, followed by `npm run check` (ESLint, TypeScript, Next.js 16.3.5 production build), passed.
- Standalone `clones/crm`: clean `npm ci` and `npm run check`, passed with its existing dependencies unchanged.
- Existing clone download/export scripts passed `node --check`.
- Git comparisons confirmed zero changes to existing clone source/assets/standalone apps and exact upstream equality for the canonical workflow and Claude bridge.
- All 12 main app routes and 67 CRM routes returned HTTP 200. The CRM catch-all accepts arbitrary paths, so HTTP checks were complemented by rendered browser checks.
- Before/after browser measurements at 1440 × 900 and 390 × 900 matched exactly for Folio, Pilates and Yuko homepage document dimensions, heading text, and heading font family/size/weight/line height. No horizontal overflow or broken images were found in those views.
- Viewport screenshot comparisons: Pilates and Yuko were identical at both sizes; Folio differed in 0.001% of desktop and 0.033% of mobile pixels at a luminance difference threshold above 10/255. Screenshots support viewport regression checks, not a new whole-site pixel-perfect claim.
- Fresh browser session: no runtime errors on all 12 main routes plus CRM tasks and accounts.
- Browser interactions passed: Folio monthly ($29/$99) and annual ($24/$79) billing and mobile menu; Pilates menu, FAQ switching, next-week navigation, class dialog and Escape dismissal; Yuko menu, product navigation, gallery selection, subscription purchase mode, add to cart and cart persistence on the legal page; CRM task creation persisted after reload. The temporary CRM test task was removed from the test browser's local storage.

Machine-readable route, runtime and comparison reports are in `docs/research/upstream-20261028/`. Before/after viewport screenshots are in `docs/design-references/upstream-20261028/`.

## Integration and cleanup ownership

Work was performed in the detached task worktree `.worktrees/upstream-workflow-20261028`. The root agent owns fast-forward integration into master, push verification, stopping all task-owned previews/browser sessions, and worktree removal after the changes and evidence are safely retained on master.
