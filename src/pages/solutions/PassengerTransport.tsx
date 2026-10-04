import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import { Link } from "react-router-dom"
import {
  Car,
  Send,
  Users,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Star,
  ChevronDown,
  Sparkles
} from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    q: "How does DriveOps help passenger transport and taxi companies?",
    a: "DriveOps supports trip create → allocate → driver accept/reject → execute → trip sheet. Ops can assign via WhatsApp or the Driver App, share customer tracking links, and collect WhatsApp review replies into the ops inbox."
  },
  {
    q: "What trip types are supported?",
    a: "One-way, round-trip, and full-day trips with pickup/drop/waypoint stops. Recurring schedules can run daily, weekly, or monthly with automatic materialization."
  },
  {
    q: "How does WhatsApp review collection work?",
    a: "DriveOps can send WhatsApp review requests after trips and ingest inbound feedback into the ops inbox. It is not a Google Business review autopilot."
  },
  {
    q: "Can multiple dispatchers operate from different locations?",
    a: "Yes. DriveOps is multi-tenant with role-based access and multi-location scope so dispatchers and managers can work with the right branch context."
  }
]

export default function PassengerTransport() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "DriveOps Passenger Transport Fleet Management Software",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "description": "Comprehensive fleet management and taxi dispatch software for taxi operators, cab aggregators, and passenger transport fleets in India."
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }
    ]
  }

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-foreground flex flex-col antialiased">
      <SEO
        title="Passenger Transport Fleet Management Software | DriveOps"
        description="Manage taxis, cabs, and passenger fleets with DriveOps. Trip dispatch with accept/reject, driver duty, live GPS from the Driver App, and WhatsApp review collection."
        keywords="passenger transport fleet management software, taxi fleet management software, cab dispatch software India, taxi operations platform"
        canonicalUrl="/solutions/passenger-transport"
        structuredData={structuredData}
      />

      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/20 to-transparent border-b border-slate-200/60 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-5 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full">
              <Car className="w-4 h-4 text-blue-600" />
              <span>PASSENGER TRANSPORT FLEET MANAGEMENT</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Run every passenger trip.<br />
              <span className="gradient-text">Dispatch with clarity.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8 font-sans">
              DriveOps helps taxi operators, corporate cab providers, and tour operators create trips, allocate with conflict checks, confirm via Driver App or WhatsApp accept/reject, share tracking links, and collect reviews into the ops inbox—not Google Business automation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://driveops.chatserve.in/signup"
                className="gradient-accent text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 hover:opacity-95 transition-all flex items-center gap-2"
              >
                <span>Start Free 30-Day Trial</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="bg-white border border-slate-200 text-slate-700 font-semibold px-6 py-3.5 rounded-xl hover:bg-slate-50 transition-all shadow-xs"
              >
                Book a Live Demo
              </Link>
            </div>
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              PURPOSE-BUILT FOR PASSENGER MOBILITY
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Everything taxi and passenger operators need
            </h2>
            <p className="text-slate-600">
              Replace disjointed spreadsheets and WhatsApp coordination with a single connected platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:border-blue-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Trip Dispatch</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Allocate trips with candidate and conflict checks. Drivers accept or reject on the Driver App or WhatsApp. No nearest-vehicle auto-dispatch claim.
              </p>
              <Link to="/features/taxi-dispatch" className="text-blue-600 text-sm font-semibold inline-flex items-center gap-1 hover:underline">
                Explore taxi dispatch <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:border-blue-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Drivers, Duty & App</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Manage driver records, shifts/duty, and license documents. Drivers use the app for GPS, navigation, trip sheets, fuel, and issues (en/ml/hi).
              </p>
              <Link to="/features/driver-management" className="text-blue-600 text-sm font-semibold inline-flex items-center gap-1 hover:underline">
                Explore driver management <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:border-blue-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">WhatsApp Review Collection</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Request feedback via WhatsApp after trips and review inbound replies in the ops inbox—not Google Business autopilot.
              </p>
              <Link to="/features/whatsapp-review-management" className="text-blue-600 text-sm font-semibold inline-flex items-center gap-1 hover:underline">
                Explore review collection <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKING & INTEGRATIONS */}
        <section className="py-16 px-4 bg-slate-900 text-white">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Connected with core fleet operations
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
              Passenger transport connects to vehicle registries, live Driver App tracking, maintenance, and day-to-day operational summaries.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/features/fleet-tracking" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-colors">
                Explore vehicle tracking →
              </Link>
              <Link to="/features/vehicle-maintenance" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-colors">
                Maintenance tracking →
              </Link>
              <Link to="/features/fleet-profitability" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-colors">
                Operational summaries →
              </Link>
              <Link to="/fleet-management-software-india" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                Fleet management India →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 sm:py-20 px-4 container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-3">
              Passenger Transport FAQs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Common questions about managing taxis and passenger fleets with DriveOps.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200/90 rounded-xl bg-white overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 focus:outline-none"
                  aria-expanded={openFaq === idx}
                >
                  <span className="font-heading font-semibold text-slate-900 text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform ${openFaq === idx ? "rotate-180 bg-blue-50 text-blue-600" : ""}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
