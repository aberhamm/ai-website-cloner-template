# Folio FAQs

Source: https://folio-topaz-delta.vercel.app/ (2026-10-22).

All ten answers were extracted by clicking the original question buttons. The source computes trigger text at 16px, line height 24px, weight 500; the introduction uses 18px/28px. The heading uses 36px/40px, weight 600, Tiempos Headline. Source classes and SVG retained. Container max width 1280px with 24px gutters and 32px at lg; desktop 2/5 sidebar, 3/5 accordion. Outer vertical padding 64px then 96px at md. Group gap 48px; items horizontal padding 24px, vertical 4px with 16px trigger padding. Open cards use 12px radius, card background, 1px border ring and subtle shadow. Mobile category navigation is horizontal and sticky at top with background foreground/2 and backdrop blur; desktop sticky top 48px.

The groups remain simultaneously present. Category buttons smoothly scroll; an IntersectionObserver updates the active category as groups enter the viewport. One optional open question per category; only the first General question is initially open. Trigger/heading/item/region data states and ARIA state stay synchronized. Unique IDs come from React useId. Native buttons support Space/Enter and arrow/Home/End focus navigation within each category. Answer heights are measured for the original accordion animation classes.

## General

### What is Folio?

Folio is an AI-powered data workspace that lets teams query databases, build dashboards, and share insights in plain English — no SQL required. Connect your warehouse and start asking questions in minutes.

### Which databases does Folio support?

Folio connects to Postgres, MySQL, Snowflake, BigQuery, Redshift, and most popular warehouses out of the box. We also support CSV uploads and read-only views into production data with column-level permissions.

### Is my data sent to a third-party AI provider?

Folio uses AI to generate SQL, but your query results and underlying tables stay in your warehouse. Only schema metadata is sent for context — never row-level data. Enterprise plans include a private model deployment option.

### How do I get started?

Sign up, connect your warehouse with read-only credentials, and ask your first question. Most teams have a useful dashboard live within an hour.

## Customization

### Can I edit the SQL Folio generates?

Yes — every generated query is editable, version-controlled, and reviewable. Analysts can refine the SQL before saving it as a reusable view, and the AI learns from edits to improve future suggestions.

### Does Folio support our team’s semantic layer?

Folio reads dbt models, Cube definitions, and LookML if you’ve already invested in a semantic layer. If you haven’t, the AI builds one as you go — every saved query becomes a reusable concept.

### Can I theme dashboards to match our brand?

Dashboards support custom palettes, logo placement, and exportable themes. Embed them in your app, share them publicly, or pin them to a Slack channel with a single URL.

## Support

### Is there documentation and support available?

Yes — Folio ships with comprehensive docs, query examples for common schemas, and tutorials. Pro plans include a dedicated Slack channel with our team; Enterprise gets a named solutions engineer.

### Does Folio integrate with our existing tools?

Folio integrates with Slack, Notion, Linear, GitHub, and most BI exporters. Pin a chart to a Slack channel, embed it in Notion, or post a query result on a Linear ticket — pick the surface your team already uses.

### How can I report bugs or request features?

Open an issue on our GitHub or reach out in our community channel. We triage bugs quickly and ship a fresh release roughly every two weeks.

