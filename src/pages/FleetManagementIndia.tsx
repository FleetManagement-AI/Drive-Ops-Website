import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import { Link } from "react-router-dom"
import {
  Car,
  Truck,
  MapPin,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Fuel,
  Wrench,
  FileCheck,
  Calendar,
  ChevronDown,
  Building2
} from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    q: "Why is DriveOps suited to Indian fleet operators?",
    a: "DriveOps is a multi-tenant fleet operations platform for chauffeur trips and self-drive rentals. It supports trip types used by Indian operators, compliance document vaulting with expiry alerts, WhatsApp ops messaging, and a multilingual Driver App (English, Malayalam, Hindi)."
  },
  {
    q: "Can DriveOps handle passenger trips and goods-style multi-stop work?",
    a: "Yes. You can run one-way, round-trip, and full-day trips with stops, plus recurring daily/weekly/monthly schedules. Dispatch uses allocation with candidate and conflict checks, and drivers accept or reject via the Driver App or WhatsApp."
  },
  {
    q: "Does DriveOps require GPS hardware trackers?",
    a: "No. Live fleet visibility uses Driver App GPS on a Mapbox ops map (poll + WebSocket). DriveOps does not require hardware telematics devices."
  },
  {
    q: "How does DriveOps help with fuel and maintenance costs?",
    a: "Drivers and ops can capture fuel logs (quantity, price, odometer, receipts). Maintenance jobs support start/complete/cancel with due scans. DriveOps does not include FASTag integration or a vehicle P&L engine."
  }
]

const indiaModules = [
  {
    icon: Car,
    title: "Vehicle Fleet Management",
    desc: "Maintain a cloud registry for commercial vehicles. Vault RC, permits, PUC, insurance, and fitness documents with expiry alerts. Import vehicles to onboard fleets faster.",
    link: "/features/vehicle-management"
  },
  {
    icon: MapPin,
    title: "Live Fleet Tracking",
    desc: "Monitor active vehicles on a Mapbox ops map fed by Driver App GPS. Share secure customer tracking links. No hardware GPS trackers required.",
    link: "/features/fleet-tracking"
  },
  {
    icon: Users,
    title: "Driver Management & Duty",
    desc: "Manage driver records, shifts/duty, and license documents. Assign work via Driver App or WhatsApp with accept/reject. App languages: English, Malayalam, Hindi.",
    link: "/features/driver-management"
  },
  {
    icon: Wrench,
    title: "Vehicle Maintenance Tracking",
    desc: "Log maintenance jobs, capture costs and history, and use due scans. Everyday upkeep tracking—not predictive maintenance.",
    link: "/features/vehicle-maintenance"
  },
  {
    icon: Fuel,
    title: "Fuel Logs & Cost Visibility",
    desc: "Capture diesel and petrol fuel logs from drivers and ops. Pair with maintenance spend for day-to-day visibility. No FASTag product.",
    link: "/features/fleet-expenses"
  },
  {
    icon: TrendingUp,
    title: "Operational Summaries",
    desc: "See trip activity, fuel, and maintenance in context for day-to-day decisions. Not a vehicle P&L or advanced BI suite.",
    link: "/features/fleet-profitability"
  }
]

export default function FleetManagementIndia() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "DriveOps Fleet Management Software India",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "description": "All-in-one cloud fleet management software for transport operators, taxi businesses, logistics companies, and rental fleets in India."
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
        title="Fleet Management Software India | DriveOps"
        description="DriveOps is fleet operations software for Indian operators. Manage vehicles, trips, dispatch, drivers, live tracking, fuel logs, maintenance, compliance, and self-drive rentals."
        keywords="fleet management software India, fleet management system India, vehicle fleet management software, taxi fleet management software India, truck fleet tracking India"
        canonicalUrl="/fleet-management-software-india"
        structuredData={structuredData}
      />

      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-transparent border-b border-slate-200/60 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-5 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span>BUILT FOR TRANSPORT BUSINESSES IN INDIA 🇮🇳</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Fleet Management Software for<br />
              <span className="gradient-text">Businesses in India</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8 font-sans">
              DriveOps is a cloud fleet operations platform for Indian commercial operators. Whether you run taxis, goods trips, or self-drive rentals, you get trips and dispatch, live tracking from the Driver App, WhatsApp ops messaging, fuel and maintenance logs, and a compliance document vault—without claiming a finance or P&L suite.
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
                View Plans & Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE CAPABILITIES GRID */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              ALL-IN-ONE OPERATIONAL SUITE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              How DriveOps powers Indian fleet operations
            </h2>
            <p className="text-slate-600">
              Explore the core modules built to streamline your day-to-day transport workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {indiaModules.map((module, idx) => {
              const Icon = module.icon
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                      {module.desc}
                    </p>
                  </div>
                  <Link
                    to={module.link}
                    className="text-blue-600 text-sm font-semibold inline-flex items-center gap-1 hover:underline mt-auto"
                  >
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )
            })}
          </div>
        </section>

        {/* INDUSTRIES SERVED */}
        <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-slate-50 to-white border-t border-b border-slate-200/60">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
                INDUSTRY SOLUTIONS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                Tailored for every commercial vehicle segment
              </h2>
              <p className="text-slate-600">
                Explore our specialized workflows for taxi businesses, goods transport, and rental agencies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">Passenger & Taxi Fleets</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Trip dispatch with accept/reject, digital trip sheets, driver duty, live tracking links, and WhatsApp review requests into the ops inbox.
                </p>
                <Link to="/solutions/taxi-cab-fleets" className="text-blue-600 text-sm font-semibold hover:underline">
                  See passenger transport features →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">Goods & Cargo Logistics</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Multi-stop trips, live Driver App tracking, trip sheets, fuel logs, and maintenance due scans for commercial vehicles.
                </p>
                <Link to="/solutions/goods-transport" className="text-emerald-600 text-sm font-semibold hover:underline">
                  See goods transport features →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">Self-Drive Car Rentals</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Self-drive rental lifecycle from hold to settle, with manual payment recording (cash, UPI, card, bank transfer, or other).
                </p>
                <Link to="/solutions/self-drive-rentals" className="text-purple-600 text-sm font-semibold hover:underline">
                  See rental management features →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 px-4 bg-slate-900 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4">
              Ready to modernize your fleet operations in India?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
              Use DriveOps to replace scattered phone and spreadsheet coordination with trips, dispatch, live tracking, and WhatsApp-native ops.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://driveops.chatserve.in/signup"
                className="gradient-accent text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 hover:opacity-95 transition-all flex items-center gap-2"
              >
                <span>Start Free 30-Day Trial</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all"
              >
                Contact Indian Sales Team
              </Link>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-16 sm:py-20 px-4 container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-3">
              Fleet Management in India FAQs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Common questions from fleet owners and transport managers across India.
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
