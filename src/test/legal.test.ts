import { describe, expect, it } from "vitest"
import { legacyRoutes, publicRoutes } from "../config/routes"
import { privacyPolicy } from "../data/legal/privacy-policy"
import { termsAndConditions } from "../data/legal/terms-and-conditions"

describe("legal pages contract", () => {
  it("registers canonical privacy and terms routes as indexable", () => {
    const paths = publicRoutes.map((route) => route.path)
    expect(paths).toContain("/privacy-policy/")
    expect(paths).toContain("/terms-and-conditions/")
    expect(publicRoutes.find((route) => route.path === "/privacy-policy/")?.indexable).toBe(true)
    expect(publicRoutes.find((route) => route.path === "/terms-and-conditions/")?.indexable).toBe(true)
  })

  it("redirects legacy /privacy and /terms aliases to canonical paths", () => {
    expect(legacyRoutes["/privacy/"]).toBe("/privacy-policy/")
    expect(legacyRoutes["/terms/"]).toBe("/terms-and-conditions/")
  })

  it("keeps unique section anchors on privacy and terms documents", () => {
    for (const doc of [privacyPolicy, termsAndConditions]) {
      const ids = doc.sections.map((section) => section.id)
      expect(new Set(ids).size).toBe(ids.length)
      expect(doc.version).toBeTruthy()
      expect(doc.effectiveDate).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(doc.lastUpdated).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(doc.sections.length).toBeGreaterThan(5)
    }
  })
})
