import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, CheckCircle2, ChevronDown } from "lucide-react"
import { featureContent } from "@/data/seo-content"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
    productSlug: "alerts",
    ogImage: "/images/hero/Fleet Management Dashboard Cards review alerts.webp",
  },
  "customer-review-collection": {
    productSlug: "customers",
    ogImage: "/images/features/Connected Taxi Tracking Journey.webp",
  },
  "fleet-compliance": {
    productSlug: "compliance",
    ogImage: "/images/features/Vehicle Maintenance Dashboard.webp",
  },
}

const FAQItem = ({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) => (
  <div
    className="border border-slate-200/90 rounded-xl bg-white overflow-hidden shadow-sm hover:border-blue-300 transition-colors"
    itemScope
    itemProp="mainEntity"
    itemType="https://schema.org/Question"
  >
    <button
      onClick={onToggle}
      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 sm:gap-4 focus:outline-none"
      aria-expanded={isOpen}
    >
      <span itemProp="name" className="font-heading font-semibold text-sm sm:text-base text-slate-900 leading-snug">
        {q}
      </span>
      <div className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform ${isOpen ? "rotate-180 bg-blue-50 text-blue-600" : ""}`}>
        <ChevronDown size={16} />
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
          itemScope
          itemProp="acceptedAnswer"
          itemType="https://schema.org/Answer"
        >
          <div itemProp="text" className="px-4 sm:px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
            {a}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

const FeatureDetail = () => {
  const { featureId } = useParams()
  const content = featureId && featureContent[featureId]
    ? featureContent[featureId]
    : null

  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const productLink = featureId ? FEATURE_PRODUCT_LINKS[featureId] : undefined

  if (!content) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Feature not found</h1>
        <Link to="/product" className="text-blue-600 mt-4">Return to Product</Link>
      </div>
    )
  }

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
            <Link to="/product" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-8 bg-blue-50 px-3 py-1.5 rounded-full">
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
          <div className="container mx-auto max-w-3xl" itemScope itemType="https://schema.org/FAQPage">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">{content.keyword} FAQs</h2>
              <p className="text-slate-600">Common questions about our {content.keyword.toLowerCase()}.</p>
            </div>
            <div className="space-y-3">
              {content.faqs.map((faq, idx) => (
                <FAQItem
                  key={idx}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openFaq === idx}
                  onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default FeatureDetail
