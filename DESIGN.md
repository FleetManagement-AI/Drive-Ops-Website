---
version: alpha
colors:
  primary: "#c93d2b"
  ink: "#20251f"
  body: "#424a42"
  paper: "#faf8f2"
  surface: "#ffffff"
  muted: "#626a60"
  line: "#d5d8ca"
  accent: "#e5ed9a"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, Inter, Arial, sans-serif"
  body:
    fontFamily: "Inter, Arial, sans-serif"
rounded:
  panel: "8px"
  control: "6px"
omitted:
  - section: spacing
    reason: "Responsive spacing is owned by canonical runtime CSS."
  - section: components
    reason: "Shared Astro components own semantic recipes."
---

# DriveOps — Dispatch in Colour

## Overview

Selected direction A, Signal coral. The user approved implementation after reviewing the research and selected design brief. This replaces the former bright blue fleet illustration direction. A marketing website for Indian taxi and travel operators, inviting qualified demo enquiries. Business claims follow docs/DRIVEOPS_PRODUCT_FEATURE_AUDIT.md; do not inherit capabilities from reference companies.

Signature: the operator → driver → customer handoff, expressed as one purposeful connecting line. This is a conceptual explanation of communication, not a promise of autonomous allocation or enforced notification order. A dispatcher selects resources; drivers respond. No invented testimonials, client logos, statistics or savings claims.

Reference influences: Voi (human mobility context), Samsara (operator relevance), Fleetio (task-specific product evidence). Adopt their clarity, not artwork, layout copies or capabilities. Avoid giant gradient heroes, floating dashboards, repeated feature-card grids and unrelated 3D.

## Colors

Runtime ownership: astro/styles/global.css is canonical. Frontmatter primary maps to --brand; other colour keys map to the same-named CSS variables. --brand-hover is #a62d20; --tint is #f0f0e5; --on-dark is #d5ddce. Semantic --success remains distinct. Coral identifies primary actions. Chartreuse is a small annotation/connection field, carrying dark text. White reading surfaces and ivory page grounds support long-form content. Dark panels use white headings and --on-dark text.

Keep authentic logo files unchanged, with original colours and proportions. The blue emblem is a deliberate counterpoint, not a reason to return the website to blue. Do not modify the existing wordmark structure without separate brand evidence.

Calculated solid-colour contrast: headings/ivory 14.69:1; body/ivory 8.64:1; muted/ivory 5.27:1; CTA label/coral 5.02:1; charcoal/chartreuse 12.57:1. --line is decorative; interactive boundaries and focus use stronger foreground colours. Status always includes text or icons.

## Typography

--font-display: Plus Jakarta Sans, loaded as a variable Google Font for weights 400–800. --font-body: Inter, loaded as a variable Google Font for weights 400–700. Base.astro preconnects to Google Fonts and requests both families with display=optional to avoid late font swaps and layout shifts. Inter is the fallback for Plus Jakarta Sans, followed by Arial/sans-serif. Hero H1 uses weight 800; section H2 uses 700; H3 uses 600–700; body copy stays 400–450; navigation uses 500–600; buttons use 600. Keep headline tracking restrained and line heights responsive; ordinary copy keeps readable natural line breaks. Use tabular numerals for time and metadata. Marketing language is en-IN.

## Layout

1200px maximum with 40px desktop gutters and 20px phone gutters. Homepage is an asymmetric headline/handoff hero, a task demonstration, paired office/road views, tracking explanation, an editorial working-day interlude, an open fleet-care index, customer feedback, audience routes, FAQ and contact close. Interior routes keep their own content purpose and share the identity rather than repeating the homepage hero.

Mobile: headline → actions → handoff; diagrams and records remain readable. Trip playback stacks map and details below 520px. Navigation collapses below 900px, with natural document scrolling and visible no-script fallback. No scroll hijacking or mandatory swipe.

## Elevation & Depth

Mostly flat. Structural dividers group related information; product records get a simple border. Reserve a restrained shadow for open navigation only. Do not put every section into a card.

## Shapes

8px panel and 6px control radius. The handoff line and its stages encode actual roles. Numbers appear only when describing a meaningful sequence. No decorative pill labels.

## Components

Header owns grouped disclosures; WorkflowVisual owns truthful static sample records; TripDemo owns user-triggered playback; ProductShowcase owns accessible product tabs; PageHero, Section, FAQ and CTA own shared marketing composition. All use semantic CSS variables. The former generated fleet artwork remains available on disk for preservation, but is not the rendered marketing visual system. Existing Open Graph image is retained until a replacement is approved.

## Motion

--motion-fast 180ms; --motion-standard 260ms. Trip playback starts paused, advances only after explicit Play, stops offscreen/hidden and preserves manual pause. Reduced motion gets a complete static state. Do not hide essential text until an entrance animation runs.

## Accessibility

WCAG 2.2 AA target; visible keyboard focus, semantic controls, accessible tab/disclosure behaviour, truthful demonstration labels and reserved layout geometry. No-JavaScript pages retain useful navigation, product content and FAQ. Scrollbars remain visible; forced colours use system contrast. No colour-only status communication.

## Do's and Don'ts

Preserve routes, trailing-slash/canonical rules, schema, sitemap/indexability and legacy aliases. Keep preview/map pages noindex. Preserve login, contact destinations and marketing_cta_click payload. Contact actions open email/WhatsApp/phone; never invent a submitted-enquiry success. Retain unrelated uncommitted work.

No suitable original photography has been provided: use useful editorial/workflow compositions for v1. Do not present generated people as documentary photography. Do not download reference artwork. No background video or new animation/framework dependency is needed.

## Homepage hero reference exception

The homepage header and hero now follow the user-supplied blue fleet illustration reference. This supersedes the former homepage hero direction only; lower sections and interior pages retain their current runtime styling. `HomepageHero.astro` and the existing Header's `.home-header` variant own the scoped blue (#1765f5), navy (#101b35), muted (#536582), border (#dfe8f5), and pale blue (#eff7ff) values. Global tokens remain owned by `astro/styles/global.css`.

Use Plus Jakarta Sans for the sentence-case hero headline and Inter for its body and controls, consistent with the site-wide typography system. Keep the supplied `/images/illustrations/Modern Fleet Management Dashboard.png` intact at its 1774 × 887 aspect ratio. Keep the hero focused on its heading, CTAs and illustration; the nine product routes appear in the feature overview below. Preserve existing CTA destinations and analytics, authentic logo proportions, and navigation disclosure behavior.

## Homepage feature overview

`FeatureOverview.astro` follows the homepage hero with nine illustrated links to the existing product routes. Keep the three-column desktop, two-column tablet, and one-column mobile layout, transparent WebP illustrations, and restrained pastel card colours. The original illustrations remain untouched in `public/images/illustrations/feature_cards/`; optimized outputs and source mappings live in `public/images/driveops/features/asset-manifest.json`. Keep claims aligned with product capability copy, including phone-GPS/on-duty requirements for live tracking, manual fuel entries, and WhatsApp feedback replies reviewed in the operations inbox.

## Homepage spreadsheet comparison

`SpreadsheetComparison.astro` follows the feature overview in place of the former journey-step section and retains its `#how-it-works` anchor. Use the supplied transparent `/images/illustrations/From Scattered Records to DriveOps.webp` at its 1777 × 885 proportions; keep the full transformation visible on phones. Its blue palette is scoped to this comparison composition and should not change the global green brand tokens. Keep entrance/cloud motion subtle and fully disabled for reduced-motion users.
