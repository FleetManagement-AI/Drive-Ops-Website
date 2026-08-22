import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import { Link } from "react-router-dom"
import {
  Layers,
  Car,
  Truck,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  MapPin,
  ChevronDown
} from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    q: "What makes DriveOps different from generic GPS tracking software?",
    a: "DriveOps is a complete fleet operating system. While basic GPS apps only show vehicle dots on a map, DriveOps links tracking directly to trip dispatching, driver payroll, preventive maintenance, fuel accounting, and customer reputation management."
  },
  {
    q: "Can I manage multi-branch fleet operations in DriveOps?",
    a: "Yes. DriveOps features enterprise-grade role-based access control (RBAC), allowing fleet managers, regional supervisors, dispatchers, and accountants to collaborate with dedicated permission levels."
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, DriveOps offers a 30-day free trial with full feature access and dedicated onboarding support. No credit card is required to get started."
  }
]

export default function FleetManagementSolution() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "DriveOps Fleet Management Software",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "description": "Complete all-in-one fleet management software platform in India for commercial passenger transport, goods logistics, and vehicle rental fleets."
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
        title="Fleet Management Software in India | DriveOps"
        description="Comprehensive cloud fleet management software for Indian fleet operators. Track vehicles, manage drivers, automate maintenance, and increase profitability."
        keywords="fleet management software India, fleet management system, commercial fleet operations, fleet software platform"
        canonicalUrl="/solutions/fleet-management"
        structuredData={structuredData}
      />

      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/20 to-transparent border-b border-slate-200/60 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-5 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>ALL-IN-ONE FLEET OPERATIONS PLATFORM</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              The complete OS for<br />
              <span className="gradient-text">modern fleet businesses.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8 font-sans">
              DriveOps brings every operational workflow into one intuitive cloud platform. From vehicle registration and dispatching to fuel monitoring, compliance tracking, and net profit analytics — everything is connected.
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
                to="/pricing"
                className="bg-white border border-slate-200 text-slate-700 font-semibold px-6 py-3.5 rounded-xl hover:bg-slate-50 transition-all shadow-xs"
              >
                View Transparent Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* 3 PILLARS */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              UNIFIED FLEET ARCHITECTURE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Built for every commercial fleet type
            </h2>
            <p className="text-slate-600">
              Select your industry solution to see how DriveOps streamlines operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:border-blue-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Passenger Transport</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Automate taxi dispatching, driver rosters, outstation rate packages, and post-trip WhatsApp review collections.
              </p>
              <Link to="/solutions/passenger-transport" className="text-blue-600 text-sm font-semibold inline-flex items-center gap-1 hover:underline">
                Explore passenger solution <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:border-emerald-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Goods Transport</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Manage commercial trucks, multi-drop delivery schedules, digital proof of delivery, and cargo trip profitability.
              </p>
              <Link to="/solutions/goods-transport" className="text-emerald-600 text-sm font-semibold inline-flex items-center gap-1 hover:underline">
                Explore goods solution <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:border-purple-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Self-Drive Rental</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Availability calendars, customer ID verification vaults, digital contracts, and advance deposit tracking.
              </p>
              <Link to="/solutions/self-drive-rental" className="text-purple-600 text-sm font-semibold inline-flex items-center gap-1 hover:underline">
                Explore rental solution <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURE NAVIGATION LINKS */}
        <section className="py-16 px-4 bg-slate-900 text-white">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Explore DriveOps platform capabilities
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
              Learn how each module in DriveOps powers your business operations.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/features/fleet-tracking" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-colors">
                Fleet Tracking →
              </Link>
              <Link to="/features/vehicle-management" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-colors">
                Vehicle Management →
              </Link>
              <Link to="/features/driver-management" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-colors">
                Driver Management →
              </Link>
              <Link to="/features/vehicle-maintenance" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-colors">
                Vehicle Maintenance →
              </Link>
              <Link to="/features/fleet-expenses" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-colors">
                Expense & Fuel Logs →
              </Link>
              <Link to="/features/fleet-profitability" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-colors">
                Profitability Analytics →
              </Link>
              <Link to="/fleet-management-software-india" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                Fleet Management India →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 px-4 container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-3">
              Platform FAQs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Frequently asked questions about DriveOps fleet software.
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
