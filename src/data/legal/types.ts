export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string }

export type LegalSection = {
  id: string
  title: string
  blocks: LegalBlock[]
}

export type LegalDocument = {
  slug: "privacy-policy" | "terms-and-conditions"
  title: string
  shortTitle: string
  description: string
  version: string
  effectiveDate: string
  lastUpdated: string
  reviewNote: string
  sections: LegalSection[]
}
