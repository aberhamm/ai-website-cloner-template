# App shell specification

Target: `src/components/crm/crm-app.tsx` and `crm-app.css`.

The interaction model is driven by clicks and keyboard input. The sidebar is 256px wide with a #fafafa background and #e5e5e5 border. The page header is 41px high with 6px 24px padding, 16px icons, and a 14px/20px title at weight 500. The account control shows Alex Morgan with a 20px gray avatar; search and collapse controls are 24px wide.

Navigation groups have 8px padding and 16px gaps. Links are 32px high with 2px gaps, 12px horizontal padding, and 8px icon gaps. The active background is #ededed. Group labels are 12px. Below 768px the sidebar becomes a drawer. The collapsed desktop sidebar is 48px wide. All original links are recorded in `captures.json`.

Ctrl/Cmd+K opens search across records. Escape closes menus and dialogs. The account menu provides Settings and Logout. The clone retains demo behavior for logout.

Dialogs are 512px wide, constrained to the viewport minus 32px, with 24px padding, an 8px radius, and a translucent overlay. Titles are 16px/24px at weight 600. Form labels are 14px with a 6px gap. Inputs are 32px high with 4px radii and 4px 10px padding. Fields have 16px gaps. Tab focus is trapped; Escape and backdrop clicks close the dialog.

Creation forms use the source's task, account, contact, and opportunity fields. Records and profile/company settings persist in the versioned `crm-clone-v1` browser storage entry. Original assets are the Inter font and favicon; icons use the source's Lucide family.
