# Compliance, fuel and reviews: search strategy

Audience: Indian taxi, travel, corporate transport, goods and rental operators
searching in English. Keep the existing DriveOps domain and product positioning.

| Primary URL | Primary intent | Supporting phrases |
| --- | --- | --- |
| `/product/compliance/` | Fleet compliance management software | Vehicle compliance management India; fleet document management; vehicle and driver document tracking |
| `/features/fleet-compliance/` | Vehicle document expiry tracking | Insurance expiry reminders; permit renewal reminders; PUC/fitness certificate tracking; driving licence expiry alerts |
| `/product/fuel/` | Fleet fuel management software | Fleet fuel log software; vehicle fuel records; diesel log management; fleet fuel cost tracking |
| `/features/fleet-expenses/` | Digital fuel logs | Driver fuel logging app; fuel receipt records; odometer and refuelling logs |
| `/product/reviews/` | Customer review management for fleets | Passenger feedback management; taxi customer feedback software; post-trip review management |
| `/features/whatsapp-review-management/` | WhatsApp review collection | Post-trip feedback requests; passenger feedback; customer review inbox |

Product pages explain capability, workflow and operator benefits. Feature guides
answer narrower practical questions. Use natural terms in headings, copy, FAQs,
link labels and image descriptions. Do not create near-identical keyword pages
or add misspellings and keyword stuffing. Meta keywords do not establish rankings.
The previous customer-review-collection guide redirects to the WhatsApp guide;
customer records and operational alerts retain distinct product pages.

## Product claim boundaries

Follow `DRIVEOPS_PRODUCT_FEATURE_AUDIT.md` and the documented marketing scope.
Compliance covers document storage, expiry tracking and configured WhatsApp
alerts. OCR is optional, and staff arrange renewals. Fuel covers entered logs,
quantity, price, odometer readings, receipts and recorded cost context. Reviews
cover configured WhatsApp requests, inbound replies and staff review in the
operations inbox. Do not imply regulatory guarantees, automatic renewal, fuel
sensors, theft detection, advanced accounting, sentiment scoring or public
Google review publishing. Verify changed capabilities before expanding claims.

## Technical acceptance

`npm run build` must finish with no failed route captures or SEO assertions.
`npm run test:marketing` serves the output without an SPA fallback, checks every
public URL, real 404s, redirects, no-JavaScript priority-page FAQs, mobile review
navigation, responsive layouts and a single signup CTA event. Browser QA writes
desktop/mobile review-page screenshots to `/tmp` for local inspection.

On deployment, check canonical URLs and the XML sitemap on the actual domain.
Slashless directory URLs may redirect to trailing-slash URLs. Verify unknown
URLs still return HTTP 404, rather than a success response containing an error.
Use Search Console URL Inspection for the three primary product pages and submit
`/sitemap.xml`. Repository checks cannot prove production indexation.

## Reporting

Baseline and review around 28 and 56 days after deployment:

- Search Console: impressions, clicks, CTR, average position, country and landing
  page for compliance, document expiry, fuel logs and reviews query clusters.
- GA4: `marketing_cta_click`, with `page_path`, `topic`, `cta_type` and
  `destination`. CTA types are `signup`, `contact` and `pricing`; priority topics
  are `compliance`, `fuel`, `reviews`, with `general` elsewhere. One document
  listener handles links to avoid duplicate event handlers on route changes.
- A signup link click measures outbound signup intent, not a completed signup.
  Confirmed conversions require instrumentation in the separate product app.

Search Console access, production deployment and reporting remain operational
steps. No ranking, traffic, AI citation or conversion improvement is guaranteed.
