# CRM clone

Reproduction of [21st CRM](https://21st-crm.vercel.app/tasks) and its linked pages. Includes 67 routes: Tasks, Up next, Accounts, Contacts, Opportunities, three saved lists, two chat pages, 54 record details, and Profile, Company, and Team settings.

## Run locally

```sh
npm ci
npm run dev -- --webpack --port 3108
```

Open [the task page](http://localhost:3108/tasks). `npm run check` runs ESLint, TypeScript, and the production build.

## Behavior

Editable fields, notes, task statuses, record creation and deletion, search, filters, column visibility, opportunity dragging, and saved lists use local browser state. CRM records and profile/company settings persist in localStorage under `crm-clone-v1`. Chat preserves the source's disabled AI demo. Authentication, a database, email delivery, and AI services are outside this clone's scope. Team changes and profile photo previews last for the current page session.

## Implementation

- React components: `src/components/crm/`
- Original font and favicon: `public/crm/`
- Source captures, measured specifications, and verification: `docs/research/`
- Reference and comparison screenshots: `docs/design-references/`

This standalone app is tracked in `clones/crm`. Run the commands above from that directory. The root project remains the Readable clone.
