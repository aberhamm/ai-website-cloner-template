# Settings specification

Target: `SettingsPage` in `crm-app.tsx` and its CSS. Interactions are driven by clicks and keyboard input.

The sidebar provides Back to CRM, Profile, Company, and Team. The header is 41px high. Main content has a maximum width of 816px, centered with 64px top padding and 24px horizontal padding. Its visible content starts at x=464 on a 1440px viewport. Headings are 18px/28px at weight 500. Descriptions are 14px gray text with a 6px top margin. Forms have a 576px maximum width.

Profile shows a 48px avatar and Change photo control, followed by Display name and Verified email. The email is read-only. Company shows the name Northwind. Inputs are 32px high with #e5e5e5 borders and 4px radii. Save changes is a black 32px button. Exact source copy is in `settings.json`.

Team lists Alex Morgan, Jamie Rivera, and Sofia Nguyen, with search, role selection, removal, and a local member creation dialog. The clone does not deliver invitation emails. Profile/company values persist in browser storage. Team edits and photo previews are session-local. On mobile, horizontal padding becomes 20px.
