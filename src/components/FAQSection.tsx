import React, { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle, Mail } from "lucide-react"

const FAQS = [
  {
    q: "What type of transport companies is DriveOps for?",
    a: "DriveOps is designed for passenger transport operators managing fleets of roughly 15 to 100 vehicles. This includes taxi & travel operators, airport transfer providers, corporate employee commute operators, and multi-depot passenger fleets with an office dispatch team and on-road drivers.",
  },
  {
    q: "Does DriveOps include a driver mobile app?",
    a: "Yes. DriveOps includes a dedicated mobile application for Android and iOS. Drivers use it to view today's assigned trips, toggle their duty on or off, start and complete trips, and receive direct push alerts from dispatch.",
  },
  {
    q: "Can drivers work offline?",
    a: "Yes. The driver mobile app supports local offline execution. Drivers can start trips, navigate, and log milestones even in basement parking garages, airport terminals, or rural dead zones. Data automatically syncs with the office once cellular reception is restored.",
  },
  {
    q: "Can we manage multiple locations?",
    a: "Yes. DriveOps supports multi-depot and branch hierarchies. Dispatchers can manage their localized depot queue while business owners maintain unified operational visibility across all branches.",
  },
  {
    q: "Can DriveOps track document expiry?",
    a: "Yes. DriveOps tracks expiration dates for vehicle documents (RC, Commercial Insurance, Fitness Certificate, PUC) and driver credentials (Commercial Driving License). The system displays countdown timers and sends advance renewal alerts 30, 15, and 7 days prior to expiry.",
  },
  {
    q: "Does DriveOps support OCR?",
    a: "Yes. You can upload digital photos or scans of vehicle and driver documents. DriveOps' document OCR reads key metadata such as registration numbers, expiration dates, and policy numbers to auto-populate records and reduce manual data entry.",
  },
  {
    q: "Can we manage trips and dispatch from one place?",
    a: "Yes. The Dispatch Queue brings unassigned bookings, available compliant vehicles, and active duty drivers into a single operational board, allowing your team to allocate trips rapidly without phone tag or spreadsheet cross-referencing.",
  },
  {
    q: "How does onboarding work?",
    a: "Onboarding is quick and guided. You can bulk import your vehicle and driver rosters via Excel or CSV in minutes. Invite your dispatchers, distribute driver app login credentials, and start scheduling trips immediately.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. We offer a Free Plan for up to 2 vehicles and 2 drivers with full access to trip creation, dispatch, and the driver mobile app so you can test the entire workflow with your team before upgrading.",
  },
  {
    q: "What happens to our data?",
    a: "Your data is stored in isolated multi-tenant cloud storage with encrypted in-transit transmission. You retain full ownership of all trip records, driver profiles, and compliance documents, and can export your records at any time.",
  },
]

export default function FAQSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-b border-slate-200/70 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Everything you need to know about <span className="gradient-text">DriveOps.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Straightforward answers about our trip operations platform, driver app, compliance, and setup.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="border border-slate-200/90 rounded-2xl bg-white overflow-hidden shadow-2xs hover:border-blue-200 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-50 text-blue-600" : ""
                    }`}
                  >
                    <ChevronDown size={15} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Help Banner */}
        <div className="mt-12 text-center p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-sm text-slate-900">
              Have a specific question about your passenger fleet?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Our operations team is available to help evaluate your current workflow.
            </p>
          </div>
          <a
            href="/contact"
            className="px-4 py-2 bg-white border border-slate-200 hover:border-slate-300 rounded-xl text-xs font-bold text-slate-700 shadow-2xs hover:text-blue-600 transition-all shrink-0 flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Operations</span>
          </a>
        </div>

      </div>
    </section>
  )
}
