import { describe, expect, it } from "vitest"
import { canonicalPath } from "../config/paths"
import { legacyRoutes, publicRoutes } from "../config/routes"
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
})
