import NotFound from "./NotFound"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { featureContent } from "@/data/seo-content"
import FAQList from "@/components/FAQList"

/** Maps SEO feature landings to primary product pages + OG imagery */
const FEATURE_PRODUCT_LINKS: Record<string, { productSlug: string; ogImage: string }> = {
  "fleet-tracking": {
    productSlug: "live-fleet",
    ogImage: "/images/features/Live Fleet Tracking Dashboard.webp",
  },
  "gps-vehicle-tracking": {
    productSlug: "live-fleet",
    ogImage: "/images/features/Live Fleet Tracking Dashboard.webp",
  },
  "vehicle-management": {
    productSlug: "vehicles",
    ogImage: "/images/features/Vehicle Availability and New Reservation.webp",
  },
  "fleet-management": {
    productSlug: "trips-dispatch",
    ogImage: "/images/hero/DriveOps Live Fleet Management Dashboard.webp",
  },
  "driver-management": {
    productSlug: "drivers",
    ogImage: "/images/features/Modern Driver Fleet App Interface.webp",
  },
  "vehicle-maintenance": {
    productSlug: "maintenance",
    ogImage: "/images/features/Vehicle Maintenance Dashboard.webp",
  },
  "fleet-maintenance": {
    productSlug: "maintenance",
    ogImage: "/images/features/Vehicle Maintenance Dashboard.webp",
  },
  "fleet-expenses": {
    productSlug: "fuel",
    ogImage: "/images/hero/fleet-care-fuel-transparent.webp",
  },
  "fleet-profitability": {
    productSlug: "analytics",
    ogImage: "/images/hero/DriveOps Live Fleet Dashboard and app.webp",
  },
  "fleet-analytics": {
    productSlug: "analytics",
    ogImage: "/images/hero/DriveOps Live Fleet Dashboard and app.webp",
  },
  "taxi-dispatch": {
    productSlug: "trips-dispatch",
    ogImage: "/images/features/Create Trip Dashboard Mockup.webp",
  },
  "whatsapp-review-management": {
    productSlug: "reviews",
    ogImage: "/images/hero/Fleet Management Dashboard Cards review alerts.webp",
  },
  "customer-review-collection": {
    productSlug: "reviews",
    ogImage: "/images/features/Connected Taxi Tracking Journey.webp",
  },
  "fleet-compliance": {
    productSlug: "compliance",
    ogImage: "/images/features/Vehicle Maintenance Dashboard.webp",
  },
}

const FeatureDetail = () => {
  const { featureId } = useParams()
  const content = featureId && featureContent[featureId]
    ? featureContent[featureId]
    : null

  const productLink = featureId ? FEATURE_PRODUCT_LINKS[featureId] : undefined

  if (!content) return <NotFound />

  // AEO: FAQPage JSON-LD via Helmet
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: content.title,
        description: content.description,
        url: `https://driveops.info.chatserve.in/features/${featureId}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-foreground flex flex-col antialiased">
      <SEO
        title={content.title}
        description={content.description}
        keywords={content.keyword}
        canonicalUrl={`/features/${featureId}`}
        ogImage={productLink?.ogImage}
        structuredData={structuredData}
      />

      <Navbar />

      <main className="flex-1 pb-24">
        <section className="pt-32 pb-16 px-4 bg-white border-b border-slate-200/60 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay pointer-events-none"></div>
          <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <Link to="/product/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-8 bg-blue-50 px-3 py-1.5 rounded-full">
              <ArrowLeft size={14} /> Back to Product
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              {content.h1}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {content.h2}
            </p>
          </div>
        </section>

        <section className="py-16 px-4 container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Why {content.keyword}?</h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                {content.heroCopy}
              </p>

              <div className="bg-slate-900 p-8 rounded-2xl text-white shadow-xl">
                <h3 className="text-xl font-bold mb-3">Ready to run clearer fleet ops?</h3>
                {productLink && <Link className="mb-4 block text-blue-200 underline" to={`/product/${productLink.productSlug}/`}>Explore this DriveOps capability</Link>}
                <p className="text-slate-400 mb-6 text-sm">Trips, dispatch, live tracking, Driver App, and WhatsApp—in one platform.</p>
                <a
                  href="https://driveops.chatserve.in/signup"
                  className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Start Your Free Trial
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Core Capabilities</h3>
              {content.benefits.map((b, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white border border-slate-200/60 rounded-xl shadow-sm">
                  <div className="shrink-0 mt-0.5">
                    <CheckCircle2 className="text-emerald-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{b.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white border-t border-slate-200/60">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">{content.keyword} FAQs</h2>
              <p className="text-slate-600">Common questions about our {content.keyword.toLowerCase()}.</p>
            </div>
            <FAQList faqs={content.faqs} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default FeatureDetail
