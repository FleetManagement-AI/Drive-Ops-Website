import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import { Link } from "react-router-dom"
import {
  Calendar,
  CalendarCheck,
  Users,
  FileText,
  IndianRupee,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronDown
} from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    q: "How does DriveOps support self-drive car rental businesses?",
    a: "DriveOps provides an availability calendar, booking management, customer ID & driving license verification, automated security deposit tracking, and vehicle return inspection checklists."
  },
  {
    q: "Can I manage security deposits and damage penalties?",
    a: "Yes. You can log security deposits, track advance payments, calculate extra hour/km charges automatically, and refund balances upon seamless check-in."
  },
  {
    q: "How does DriveOps track vehicle availability?",
    a: "Our visual availability grid shows booked, available, and undergoing-maintenance vehicles in real-time, preventing double-bookings."
  }
]

export default function SelfDriveRental() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "DriveOps Vehicle Rental Management Software",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "description": "End-to-end self-drive and car rental management software for rental companies, booking agencies, and vehicle leasing fleets in India."
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
        title="Vehicle Rental Management Software | DriveOps"
        description="Manage rental vehicles, bookings, availability, customers, contracts, payments and vehicle utilization from one platform with DriveOps."
        keywords="vehicle rental management software, self drive car rental software, car rental software India, fleet leasing system"
        canonicalUrl="/solutions/self-drive-rental"
        structuredData={structuredData}
      />

      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/20 to-transparent border-b border-slate-200/60 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 mb-5 bg-purple-50 border border-purple-200 px-3.5 py-1.5 rounded-full">
              <Calendar className="w-4 h-4 text-purple-600" />
              <span>SELF-DRIVE RENTAL MANAGEMENT</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Manage rentals with ease.<br />
              <span className="text-purple-600">Maximize vehicle utilization.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8 font-sans">
              DriveOps Vehicle Rental Management Software provides self-drive operators and car leasing businesses with end-to-end booking calendars, customer verification vaults, digital rental contracts, and automated payment tracking.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://driveops.chatserve.in/signup"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-purple-500/25 transition-all flex items-center gap-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="bg-white border border-slate-200 text-slate-700 font-semibold px-6 py-3.5 rounded-xl hover:bg-slate-50 transition-all shadow-xs"
              >
                Book Rental Demo
              </Link>
            </div>
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block mb-2">
              BUILT FOR SELF-DRIVE & LEASING
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Streamlined rental workflows from check-out to check-in
            </h2>
            <p className="text-slate-600">
              Eliminate double-booking headaches, collect advance deposits, and protect your vehicle fleet.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:border-purple-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Availability Calendar</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Interactive daily and monthly timeline shows vehicle bookings, upcoming returns, and scheduled service slots.
              </p>
              <Link to="/features/vehicle-management" className="text-purple-600 text-sm font-semibold inline-flex items-center gap-1 hover:underline">
                Explore vehicle registry <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:border-purple-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Contracts & ID Vault</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Securely store driving licenses, Aadhaar/passport copies, digital signatures, and rental terms in one place.
              </p>
              <Link to="/features/fleet-compliance" className="text-purple-600 text-sm font-semibold inline-flex items-center gap-1 hover:underline">
                Explore compliance vault <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:border-purple-300 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                <IndianRupee className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Payments & Deposits</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Track rental booking advances, refundable security deposits, excess mileage billing, and fuel reconciliation.
              </p>
              <Link to="/features/fleet-profitability" className="text-purple-600 text-sm font-semibold inline-flex items-center gap-1 hover:underline">
                Explore profitability <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKING */}
        <section className="py-16 px-4 bg-slate-900 text-white">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
              Explore the complete DriveOps ecosystem
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
              Learn how DriveOps powers diverse transportation workflows across India.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/solutions/passenger-transport" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-colors">
                Passenger Transport →
              </Link>
              <Link to="/solutions/goods-transport" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-colors">
                Goods Transport →
              </Link>
              <Link to="/features/vehicle-maintenance" className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm transition-colors">
                Fleet Maintenance →
              </Link>
              <Link to="/fleet-management-software-india" className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                Fleet Management India →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 px-4 container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-3">
              Self-Drive Rental FAQs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Common questions about managing self-drive and vehicle rentals with DriveOps.
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
                  <div className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform ${openFaq === idx ? "rotate-180 bg-purple-50 text-purple-600" : ""}`}>
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
