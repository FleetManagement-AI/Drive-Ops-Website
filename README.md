# DriveOps marketing website

React, TypeScript, Tailwind and Vite. Production builds are prerendered HTML, packaged into an nginx Docker image, pushed to GHCR, and deployed to the VPS at `https://www.driveopsfleet.com`.

## Local development

```sh
npm ci
npm run dev
```

## Production build and checks

```sh
npx playwright install chromium
npm test
npm run build
npm run test:marketing
```

On a clean Linux CI machine, use `npx playwright install --with-deps chromium`.
`npm run build` compiles the client, captures every public route using Chromium,
generates directory HTML, redirects, `404.html`, `robots.txt` and `sitemap.xml`,
then validates SEO output. The capture blocks third-party traffic and analytics.
`npm run build:client` is available for client-only troubleshooting; it does not
produce the deployable static route files. `npm run preview` previews `dist`.

## Deployment

The [Build And Deploy](.github/workflows/deploy.yml) workflow (push to `main` or
manual dispatch) runs unit tests, full build, and browser checks, then:

1. Builds an nginx image from prebuilt `dist` + [`nginx.conf`](nginx.conf)
2. Pushes to GHCR (`production-<sha>` and `production-latest`)
3. SSHs to the VPS, pulls the image, and runs `driveops-website-production`
4. Verifies `http://$VPS_HOST:$PORT/health`

See [GitHub environment secrets](.github/GITHUB_ENVIRONMENT_SECRETS.md) for
required repository secrets (`VPS_*`, `GHCR_TOKEN`) and the `production`
Environment secret `PORT`.

Valid routes have their own prerendered files; unknown routes use nginx
`error_page 404 /404.html`. Legacy aliases use an immediate HTML redirect and a
destination canonical, not an HTTP 301.

## Content and URLs

- `src/data/priority-content.ts`: compliance, fuel and review product content,
  narrower feature guides, FAQs and primary/supporting search terms.
- `src/data/product-pages.ts` and `src/data/seo-content.ts`: other product and
  feature pages. The product hub is generated from the product data.
- `src/config/routes.ts`: canonical public route manifest, indexability, legacy
  destinations and the last substantive content-change date. Update the date
  when publishing content changes; builds do not stamp today's date.
- `src/components/SEO.tsx`: metadata and the shared organization/software graph.
  FAQs use the same data for visible native HTML accordions and structured data.

Keep canonical directory URLs ending in `/`, including internal links. Public
pages are exported from the manifest. Preview/map demonstrations are exported
with `noindex` and excluded from the sitemap. Do not add a hand-written sitemap
to `public`; the production build generates it from the route manifest.

Set `VITE_SITE_URL` at build time to override the canonical origin. Its default
(and production deploy value) is `https://www.driveopsfleet.com`.

## SEO strategy and measurement

See [the keyword and rollout guide](docs/SEO_STRATEGY.md). Keyword targets are
content-planning inputs, not a claim about current rankings or search volume.
