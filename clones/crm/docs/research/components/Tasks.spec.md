# Task collection specification

Targets: `Tasks` and `TaskGroup` in `crm-app.tsx` and their CSS. Interactions use clicks, keyboard input, and native horizontal scrolling.

The toolbar is 45px high with 8px 24px padding, a 28px Filter button, a 16px search icon, and Display aligned right. Table headers are 36px high with 12px/16px muted text. Task rows are 44.5px high with 14px/20px text and 8px 16px cell padding. Desktop column widths are 40.34%, 16.38%, 15.11%, and 28.17%. A 940px minimum table width preserves horizontal scrolling on mobile.

Group rows are 44px high with a #fafafa background and 12px labels. Groups are Overdue, Today, Tomorrow, and Upcoming. The seven actual task names, dates, assignees, related records, and links come from `tables['/tasks']`. Assignees use 24px gray avatars; due dates use 14px calendar icons. Overdue dates are #ff001c.

Status controls offer Todo, In progress, Done, and Canceled and persist changes. Search filters titles. Filter offers Status, Assignee, and Due date submenus; chips remove filters. Display controls column visibility and can reset it. Task and Due date headers sort. Reference screenshots: `_tasks.png` and `tasks-mobile.png`.
