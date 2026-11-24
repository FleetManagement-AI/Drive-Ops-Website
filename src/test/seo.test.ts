import { describe, expect, it } from "vitest"
import { canonicalPath } from "../config/paths"
import {
  canonicalOverrides,
  isSitemapRoute,
  legacyRoutes,
  publicRoutes,
  resolveCanonicalPath,
} from "../config/routes"
import { PRODUCT_PAGES } from "../data/product-pages"

describe("public URL contract", () => {
  it.each([
    ["/", "/"], ["product/fuel", "/product/fuel/"], ["/product/fuel/", "/product/fuel/"],
    ["/product/rentals#payments", "/product/rentals/#payments"],
    ["/product/fuel?source=nav#details", "/product/fuel/?source=nav#details"],
  ])("normalizes %s without losing URL suffixes", (input, expected) => {
    expect(canonicalPath(input)).toBe(expected)
  })

  it("exports every product and keeps aliases out of canonical routes", () => {
    const paths = publicRoutes.map(route => route.path)
    expect(new Set(paths).size).toBe(paths.length)
    for (const product of PRODUCT_PAGES) expect(paths).toContain(`/product/${product.slug}/`)
    for (const [alias, destination] of Object.entries(legacyRoutes)) {
      expect(paths).not.toContain(alias)
      expect(paths).toContain(destination)
    }
    expect(publicRoutes.filter(route => !route.indexable).map(route => route.path).sort()).toEqual(["/fleet-map/", "/preview/"])
  })

  it("maps short SEO URLs to primary pages", () => {
    expect(legacyRoutes["/fleet-management-software/"]).toBe("/fleet-management-software-india/")
    expect(legacyRoutes["/vehicle-management/"]).toBe("/features/vehicle-management/")
    expect(legacyRoutes["/driver-management/"]).toBe("/features/driver-management/")
    expect(legacyRoutes["/trip-management/"]).toBe("/product/trips-dispatch/")
    expect(legacyRoutes["/taxi-management-software/"]).toBe("/solutions/taxi-cab-fleets/")
    expect(legacyRoutes["/corporate-fleet-management/"]).toBe("/solutions/corporate-transport/")
    expect(legacyRoutes["/goods-transport-software/"]).toBe("/solutions/goods-transport/")
    expect(legacyRoutes["/compliance-management/"]).toBe("/product/compliance/")
    expect(legacyRoutes["/vehicle-maintenance-software/"]).toBe("/product/maintenance/")
    expect(legacyRoutes["/driver-app/"]).toBe("/product/driver-app/")
    expect(legacyRoutes["/live-fleet-tracking/"]).toBe("/product/live-fleet/")
    expect(legacyRoutes["/fleet-fuel-management/"]).toBe("/product/fuel/")
    expect(legacyRoutes["/fleet-review-management/"]).toBe("/product/reviews/")
  })

  it("resolves topic canonical overrides and keeps primaries self-canonical", () => {
    expect(resolveCanonicalPath("/features/vehicle-management/")).toBe("/features/vehicle-management/")
    expect(resolveCanonicalPath("/product/vehicles/")).toBe("/features/vehicle-management/")
    expect(resolveCanonicalPath("/product/trips-dispatch/")).toBe("/product/trips-dispatch/")
    expect(resolveCanonicalPath("/features/taxi-dispatch/")).toBe("/product/trips-dispatch/")
    expect(resolveCanonicalPath("/fleet-management-software-india/")).toBe("/fleet-management-software-india/")
    for (const [from, to] of Object.entries(canonicalOverrides)) {
      expect(resolveCanonicalPath(from)).toBe(to)
      expect(isSitemapRoute({ path: from, indexable: true, lastmod: "2026-11-04" })).toBe(false)
      expect(isSitemapRoute({ path: to, indexable: true, lastmod: "2026-11-04" })).toBe(true)
    }
  })
})
