import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import { Link } from "react-router-dom"
import {
  Truck,
  Package,
  Layers,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  MapPin,
  ChevronDown
} from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    q: "How does DriveOps help commercial goods and cargo fleets?",
    a: "DriveOps enables logistics operators to manage delivery routes, assign drivers to vehicles, track proof of delivery (POD), monitor fuel consumption, and calculate gross margin per trip."
  },
  {
    q: "Can I manage multi-drop delivery routes?",
    a: "Yes. Dispatchers can plan multi-stop delivery schedules and track when drivers complete loading, reach transit waypoints, and finish final deliveries."
  },
  {
    q: "How does DriveOps track truck maintenance and fuel costs?",
    a: "DriveOps captures itemized fuel refill entries and odometer milestones, triggering proactive service alerts before engine failures or tyre blowouts occur."
  }
]

export default function GoodsTransport() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "DriveOps Goods Transport Fleet Management Software",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "description": "Logistics and truck fleet management software for goods transport businesses, courier fleets, and commercial cargo operators in India."
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
        title="Goods Transport Fleet Management Software | DriveOps"
        description="Manage trucks and delivery vehicles with DriveOps fleet tracking, driver management, trip operations, maintenance, expenses and delivery visibility."
        keywords="goods transport fleet management software, truck fleet management software, logistics fleet tracking India, commercial vehicle software"
        canonicalUrl="/solutions/goods-transport"
        structuredData={structuredData}
      />

      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/20 to-transparent border-b border-slate-200/60 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-5 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full">
              <Truck className="w-4 h-4 text-emerald-600" />
              <span>GOODS TRANSPORT FLEET MANAGEMENT</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Streamline cargo delivery.<br />
              <span className="text-emerald-600">Maximize truck profitability.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8 font-sans">
              DriveOps Goods Transport Fleet Management Software empowers commercial truck operators, courier fleets, and freight movers to manage trips, drivers, proof of delivery, and vehicle maintenance from one central hub.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://driveops.chatserve.in/signup"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="bg-white border border-slate-200 text-slate-700 font-semibold px-6 py-3.5 rounded-xl hover:bg-slate-50 transition-all shadow-xs"
              >
                Schedule Fleet Demo
              </Link>
            </div>
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              DESIGNED FOR CARGO & LOGISTICS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Complete operational control for commercial trucks
            </h2>
            <p className="text-slate-600">
              Cut dead kilometers, eliminate billing discrepancies, and keep your commercial vehicles on schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:border-emerald-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Cargo & Trip Operations</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Assign consignment orders, record cargo weights, and track delivery progress in real time.
              </p>
              <Link to="/features/fleet-tracking" className="text-emerald-600 text-sm font-semibold inline-flex items-center gap-1 hover:underline">
                Explore route tracking <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:border-emerald-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Proof of Delivery (POD)</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Collect digital signatures and delivery photos to speed up corporate invoice clearances.
              </p>
              <Link to="/features/vehicle-management" className="text-emerald-600 text-sm font-semibold inline-flex items-center gap-1 hover:underline">
                Explore vehicle ledger <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:border-emerald-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Fuel & Maintenance Control</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Monitor diesel consumption per kilometer, audit toll bills, and enforce preventive garage servicing.
              </p>
              <Link to="/features/fleet-expenses" className="text-emerald-600 text-sm font-semibold inline-flex items-center gap-1 hover:underline">
                Explore expense control <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKING */}
        <section className="py-16 px-4 bg-slate-900 text-white">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Explore more DriveOps solutions
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
              Learn how DriveOps powers diverse transportation workflows across India.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/solutions/passenger-transport" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-colors">
                Passenger Transport →
              </Link>
              <Link to="/solutions/self-drive-rental" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-colors">
                Self-Drive Rental →
              </Link>
              <Link to="/solutions/fleet-management" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-colors">
                Fleet Management Platform →
              </Link>
              <Link to="/fleet-management-software-india" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                Fleet Software India →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 px-4 container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-3">
              Goods Transport FAQs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Answers to common logistics and truck fleet management questions.
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
                  <div className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform ${openFaq === idx ? "rotate-180 bg-emerald-50 text-emerald-600" : ""}`}>
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
