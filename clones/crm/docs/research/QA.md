# CRM verification

All 67 routes return HTTP 200 and render the expected page: ten main destinations, 54 record details, and three settings pages.

Browser checks confirmed:

- Creating a task with a due date survives a reload and appears in localStorage.
- Editing a task title and status survives a reload.
- Global Ctrl+K search returns four matching Lumenfield records.
- At 390px, the sidebar opens, an Accounts link navigates, the drawer closes, and all 13 account rows render.

QA mutations were removed after testing. Desktop and mobile screenshots are saved in `docs/design-references/`. Visual comparison corrected card title width to 162px, title weight to 500, property labels to 13px, and task row height to 44.5px.

The production build, strict TypeScript checks, and ESLint pass. The live preview uses Webpack because changing Turbopack's root inside this linked worktree stalled development compilation. The default production Turbopack build passes.

Known differences: select and date popovers use native controls, the clone uses browser storage instead of a backend, team/photo changes last for the current page session, and AI replies remain disabled as on the source.
