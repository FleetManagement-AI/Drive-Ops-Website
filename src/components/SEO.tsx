import { Helmet } from "react-helmet-async"
import { siteConfig } from "@/config/site"
import { canonicalPath } from "@/config/paths"

interface SEOProps {
  title: string
  description: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: "website" | "article"
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>
  noIndex?: boolean
}

export default function SEO({ title, description, canonicalUrl = "/", ogImage, ogType = "website", structuredData, noIndex = false }: SEOProps) {
  const siteUrl = siteConfig.siteUrl.replace(/\/$/, "")
  const pathname = canonicalUrl.startsWith("http") ? new URL(canonicalUrl).pathname : canonicalUrl
  const path = canonicalPath(pathname)
  const canonical = `${siteUrl}${path}`
  const imagePath = ogImage || siteConfig.ogImage
  const image = imagePath.startsWith("http") ? imagePath : `${siteUrl}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`
  const parts = path.split("/").filter(Boolean)
  const graph = Array.isArray(structuredData) ? structuredData : structuredData?.["@graph"] || (structuredData ? [structuredData] : [])
  const additional = (graph as Record<string, unknown>[]).filter(node => !["WebSite", "Organization", "SoftwareApplication", "BreadcrumbList", "WebPage"].includes(node["@type"] as string))
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: siteConfig.name, url: `${siteUrl}/`, logo: `${siteUrl}/logo/driveops-logo-blue-edited.png`, sameAs: [siteConfig.social.instagram, siteConfig.social.facebook], contactPoint: { "@type": "ContactPoint", telephone: siteConfig.contact.telephone, email: siteConfig.contact.email, contactType: "sales", areaServed: "IN" } },
      { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: siteConfig.name, url: `${siteUrl}/`, publisher: { "@id": `${siteUrl}/#organization` }, inLanguage: "en-IN" },
      { "@type": "SoftwareApplication", "@id": `${siteUrl}/#software`, name: siteConfig.name, url: `${siteUrl}/`, applicationCategory: "BusinessApplication", operatingSystem: "Web, Android", featureList: ["Trip dispatch", "Driver App", "Live fleet tracking", "Fleet compliance document management", "Fuel logs", "WhatsApp customer review collection", "Maintenance records", "Self-drive rentals"], description: siteConfig.description, provider: { "@id": `${siteUrl}/#organization` } },
      { "@type": "BreadcrumbList", "@id": `${canonical}#breadcrumb`, itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        ...parts.map((part, i) => ({ "@type": "ListItem", position: i + 2, name: i === parts.length - 1 ? title.split(" | ")[0] : part.charAt(0).toUpperCase() + part.slice(1), item: `${siteUrl}/${parts.slice(0, i + 1).join("/")}/` })),
      ].filter(item => item.item !== `${siteUrl}/features/` && item.item !== `${siteUrl}/solutions/`).map((item, i) => ({ ...item, position: i + 1 })) },
      { "@type": "WebPage", "@id": `${canonical}#webpage`, url: canonical, name: title, description, inLanguage: "en-IN", isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@id": `${siteUrl}/#software` }, breadcrumb: { "@id": `${canonical}#breadcrumb` } },
      ...additional,
    ],
  }
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noIndex ? "noindex, follow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json">{JSON.stringify(schema).replace(/</g, "\\u003c")}</script>
    </Helmet>
  )
}
