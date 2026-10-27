# Validation

- Eight sections, eight React components and eight component specifications; 16 local assets.
- Original and clone inspected at 1440px, 768px, 390px.
- Desktop document dimensions: 1425 × 4929, matching exactly. Mobile: 375 × 7509, matching exactly (stable scrollbar gutter accounts for width difference).
- Screenshot comparison after image decoding: 0.58% desktop and 0.044% mobile color channels differed by more than 10/255, including the development indicator. This is a practical visual comparison, not a guarantee of identical browser rasterization.
- Cart open/close, mobile menu open/Escape, single-open FAQ, shipping notice dismissal and newsletter feedback verified in browser.
- All 14 image instances load; no horizontal overflow at desktop, tablet or mobile. Browser error log empty.
- Lint, TypeScript and production build passed.
- Product and legal pages are now local. Newsletter and checkout match the original coming-soon/preview behavior; no order/payment backend is implemented.

## Product and legal page extension

- Recovered the source pages via .html URLs; extensionless paths on the source deployment fall back to the homepage. All source HTML and route runtime evidence are in docs/research/routes.
- Added three product pages and two legal pages, preserving original content and draft policy placeholders. Downloaded three additional Probiotics detail photographs.
- Desktop and mobile document dimensions agree with the source on all five new pages. No horizontal overflow, missing image assets, unresolved same-page anchors or links back to the original storefront.
- Verified subscription price/frequency, independent cart lines, quantity updates, cart persistence between product/privacy pages, gallery selection, disclosures, sold-out controls, and checkout-preview modal.
- Header/footer links return to the correct local homepage section. Existing shipping anchor now resolves. Editorial links and Instagram remain external by design.
- The original working copy was retained for preview until integration; see the integration record below.

Product photograph rendering was verified with viewport screenshots. Chromium full-page capture omitted some off-screen image paints despite successful image loading, so those incomplete clone PNGs were discarded; the source full-page references, dimension reports, and local viewport evidence are retained. Legal page screenshot comparisons differ by less than 0.005% of color channels at the >10/255 threshold.

## Integration — October 27, 2026

Yuko is integrated under `/yuko`, with product pages under `/yuko/products/{probiotics,hand-lotion,hair-growth}` and legal pages at `/yuko/privacy` and `/yuko/terms`. A separate `(yuko)` route-group root layout and stylesheet preserve the existing Folio and Pilates pages. All Yuko internal navigation and product-route detection use the new prefix.

The combined application passed ESLint, TypeScript and production build checks. All 12 site routes returned HTTP 200. Browser checks covered Yuko internal links, cart persistence from a product page to privacy, image loading and horizontal overflow, plus existing Folio and Pilates pages. The preview is stopped before cleanup; all unique reference screenshots, source evidence and assets are tracked and retained by the merge. The root agent owns removal of the integrated worktree.
