import { PRODUCT_PAGES } from "../data/product-pages"
import { featureContent } from "../data/seo-content"
import { canonicalPath } from "./paths"

export type PublicRoute = { path: string; indexable: boolean; lastmod: string }

// Update this date when published marketing content changes, not on every build.
const contentUpdated = "2026-10-24"
export const legacyRoutes: Record<string, string> = {
  "/solutions/passenger-transport/": "/solutions/taxi-cab-fleets/",
  "/solutions/self-drive-rental/": "/solutions/self-drive-rentals/",
  "/features/customer-review-collection/": "/features/whatsapp-review-management/",
}

export const publicRoutes: PublicRoute[] = [
  "/", "/fleet-management-software-india", "/product", "/pricing", "/faq", "/contact",
  ...["taxi-cab-fleets", "travel-tour-operators", "corporate-transport", "self-drive-rentals", "goods-transport", "fleet-management"].map(slug => `/solutions/${slug}`),
  ...PRODUCT_PAGES.map(page => `/product/${page.slug}`),
  ...Object.keys(featureContent).map(slug => `/features/${slug}`),
  "/preview", "/fleet-map",
].map(path => ({
  path: canonicalPath(path),
  indexable: !["/preview/", "/fleet-map/"].includes(canonicalPath(path)) && !legacyRoutes[canonicalPath(path)],
  lastmod: contentUpdated,
})).filter(route => !legacyRoutes[route.path])
