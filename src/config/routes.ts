import { PRODUCT_PAGES } from "../data/product-pages"
import { featureContent } from "../data/seo-content"
import { canonicalPath } from "./paths"

export type PublicRoute = { path: string; indexable: boolean; lastmod: string }

// Update this date when published marketing content changes, not on every build.
const contentUpdated = "2026-11-24"

/**
 * Permanent redirects (trailing-slash keys).
 * Served as nginx HTTP 301 in production; HTML aliases still exported for static checks.
 */
export const legacyRoutes: Record<string, string> = {
  // Existing aliases
  "/solutions/passenger-transport/": "/solutions/taxi-cab-fleets/",
  "/solutions/self-drive-rental/": "/solutions/self-drive-rentals/",
  "/features/customer-review-collection/": "/features/whatsapp-review-management/",
  "/privacy/": "/privacy-policy/",
  "/terms/": "/terms-and-conditions/",
  // Tier 1 short SEO URLs
  "/fleet-management-software/": "/fleet-management-software-india/",
  "/vehicle-management/": "/features/vehicle-management/",
  "/driver-management/": "/features/driver-management/",
  "/trip-management/": "/product/trips-dispatch/",
  // Tier 2 audience short URLs
  "/taxi-management-software/": "/solutions/taxi-cab-fleets/",
  "/taxi-management/": "/solutions/taxi-cab-fleets/",
  "/cab-fleet-management/": "/solutions/taxi-cab-fleets/",
  "/corporate-fleet-management/": "/solutions/corporate-transport/",
  "/corporate-transport-software/": "/solutions/corporate-transport/",
  "/goods-transport-software/": "/solutions/goods-transport/",
  "/truck-fleet-management/": "/solutions/goods-transport/",
  "/tour-operator-software/": "/solutions/travel-tour-operators/",
  "/self-drive-rental-software/": "/solutions/self-drive-rentals/",
  // Tier 3 product short URLs
  "/compliance-management/": "/product/compliance/",
  "/fleet-compliance-software/": "/product/compliance/",
  "/vehicle-document-management/": "/product/compliance/",
  "/vehicle-maintenance-software/": "/product/maintenance/",
  "/fleet-maintenance-software/": "/product/maintenance/",
  "/driver-app/": "/product/driver-app/",
  "/fleet-driver-app/": "/product/driver-app/",
  "/live-fleet-tracking/": "/product/live-fleet/",
  "/gps-fleet-tracking/": "/product/live-fleet/",
  "/fleet-fuel-management/": "/product/fuel/",
  "/fuel-log-software/": "/product/fuel/",
  "/fleet-review-management/": "/product/reviews/",
}

/**
 * Pages that stay live (HTTP 200) but consolidate ranking signals to a primary URL.
 */
export const canonicalOverrides: Record<string, string> = {
  "/features/fleet-management/": "/fleet-management-software-india/",
  "/solutions/fleet-management/": "/fleet-management-software-india/",
  "/product/vehicles/": "/features/vehicle-management/",
  "/product/drivers/": "/features/driver-management/",
  "/features/taxi-dispatch/": "/product/trips-dispatch/",
  "/features/fleet-compliance/": "/product/compliance/",
  "/features/fleet-expenses/": "/product/fuel/",
  "/features/whatsapp-review-management/": "/product/reviews/",
  "/features/fleet-tracking/": "/product/live-fleet/",
  "/features/gps-vehicle-tracking/": "/product/live-fleet/",
  "/features/vehicle-maintenance/": "/product/maintenance/",
  "/features/fleet-maintenance/": "/product/maintenance/",
}

export function resolveCanonicalPath(path: string): string {
  const normalized = canonicalPath(path)
  return canonicalOverrides[normalized] || normalized
}

/** Indexable routes that should appear in sitemap (self-canonical only). */
export function isSitemapRoute(route: PublicRoute): boolean {
  return route.indexable && !canonicalOverrides[route.path]
}

export const publicRoutes: PublicRoute[] = [
  "/", "/fleet-management-software-india", "/product", "/pricing", "/faq", "/contact",
  "/privacy-policy", "/terms-and-conditions",
  ...["taxi-cab-fleets", "travel-tour-operators", "corporate-transport", "self-drive-rentals", "goods-transport", "fleet-management"].map(slug => `/solutions/${slug}`),
  ...PRODUCT_PAGES.map(page => `/product/${page.slug}`),
  ...Object.keys(featureContent).map(slug => `/features/${slug}`),
  "/preview", "/fleet-map",
].map(path => ({
  path: canonicalPath(path),
  indexable: !["/preview/", "/fleet-map/"].includes(canonicalPath(path)) && !legacyRoutes[canonicalPath(path)],
  lastmod: contentUpdated,
})).filter(route => !legacyRoutes[route.path])
