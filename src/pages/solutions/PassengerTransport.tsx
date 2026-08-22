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
    a: "DriveOps automates trip dispatching, driver shift scheduling, customer booking management, and Google review collection via WhatsApp, helping taxi businesses run smoother and acquire more organic customers."
  },
  {
    q: "Can I manage outstation and local hourly package rates?",
    a: "Yes. DriveOps allows you to configure custom rate cards including local hourly packages (e.g. 4hr/40km, 8hr/80km) and outstation round-trip pricing with extra km and driver allowances."
  },
  {
    q: "How does the automated WhatsApp review collection work?",
    a: "When a driver marks a trip completed, DriveOps automatically sends a polite WhatsApp message with a direct link to your Google Business profile, maximizing positive online reviews."
  },
  {
    q: "Can multiple dispatchers operate from different locations?",
    a: "Yes. DriveOps is a multi-tenant cloud platform with role-based access control, enabling dispatchers, accountants, and managers to coordinate from anywhere."
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
        description="Manage taxis, cabs, and passenger fleets with DriveOps. Real-time dispatch, driver duty rosters, live GPS tracking, and automated customer reviews."
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
              Scale your passenger fleet.<br />
              <span className="gradient-text">Automate taxi operations.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8 font-sans">
              DriveOps provides dedicated passenger transport fleet management software for taxi operators, corporate cab providers, and tour operators across India. Eliminate manual dispatch delays, track driver duty rosters, and grow 5-star Google reviews on autopilot.
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
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Smart Taxi Dispatch</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Automated trip queueing assigns rides based on driver proximity, duty shift compliance, and vehicle category.
              </p>
              <Link to="/features/taxi-dispatch" className="text-blue-600 text-sm font-semibold inline-flex items-center gap-1 hover:underline">
                Explore taxi dispatch <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:border-blue-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Driver Rosters & Payroll</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Manage driver shifts, attendance, automated trip settlements, allowances, and license renewal compliance.
              </p>
              <Link to="/features/driver-management" className="text-blue-600 text-sm font-semibold inline-flex items-center gap-1 hover:underline">
                Explore driver management <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:border-blue-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">WhatsApp Review Growth</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Automatically request 5-star Google reviews via WhatsApp post-trip to boost your local SEO ranking.
              </p>
              <Link to="/features/whatsapp-review-management" className="text-blue-600 text-sm font-semibold inline-flex items-center gap-1 hover:underline">
                Explore review automation <ArrowRight className="w-3.5 h-3.5" />
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
              Passenger transport integrates seamlessly with vehicle registries, live telemetry, and financial analytics.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/features/fleet-tracking" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-colors">
                Explore vehicle tracking →
              </Link>
              <Link to="/features/vehicle-maintenance" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-colors">
                Preventive maintenance →
              </Link>
              <Link to="/features/fleet-profitability" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-colors">
                Profitability analytics →
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
