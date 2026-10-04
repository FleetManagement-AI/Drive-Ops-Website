import React, { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle, Mail } from "lucide-react"

const FAQS = [
  {
    q: "What is DriveOps?",
    a: "DriveOps is a fleet operations platform that helps operators plan trips, assign drivers and vehicles, run a Driver App, track live fleet location from driver GPS, manage fuel, maintenance, and compliance documents, communicate on WhatsApp, collect reviews, and run self-drive rentals.",
  },
  {
    q: "Who is DriveOps for?",
    a: "Fleet owners, fleet managers, dispatchers, operations teams, drivers, and rental desks—especially passenger transport and mixed fleets that also offer self-drive rentals.",
  },
  {
    q: "Can DriveOps manage recurring trips?",
    a: "Yes. You can create recurring schedules with daily, weekly, or monthly recurrence. DriveOps materializes upcoming trip instances automatically so dispatch can assign them.",
  },
  {
    q: "Can I assign drivers and vehicles?",
    a: "Yes. Dispatch supports candidate review, conflict-aware allocation, reassignment workflows, and driver accept/reject—via the Driver App and WhatsApp assignment actions.",
  },
  {
    q: "Does DriveOps have a Driver App?",
    a: "Yes. Drivers can log in (password or WhatsApp OTP), go on/off duty, see assigned trips, accept or reject, navigate, start and complete trips, submit trip sheets, log fuel, report vehicle issues, and receive push notifications. The app supports English, Malayalam, and Hindi.",
  },
  {
    q: "Can drivers receive WhatsApp assignments?",
    a: "Yes. After allocation, drivers can receive WhatsApp assignment messages with Accept / Reject actions, in addition to Driver App notifications.",
  },
  {
    q: "Can I track active vehicles?",
    a: "Yes. The ops live fleet map shows vehicle locations from Driver App GPS while drivers are on duty. Location updates combine periodic snapshots with live WebSocket events—not a hardware telematics box.",
  },
  {
    q: "Can customers track their trips?",
    a: "Yes. Customers can open a secure public tracking link for a trip. They do not need a DriveOps account.",
  },
  {
    q: "Does DriveOps support rentals?",
    a: "Yes. Self-drive rental vehicles support availability, calendar, hold/confirm, handover, return, settlement, and manual payment recording (cash, UPI, card, bank transfer, or other). Online payment gateways and automated invoicing are not included today.",
  },
  {
    q: "Can I manage fuel, maintenance, and compliance?",
    a: "Yes. Fuel logs capture quantity, price, odometer, receipts, and associations. Maintenance jobs support start/complete/cancel with due scans. Compliance provides a document vault, expiry tracking, and alerts. OCR field extraction is optional and depends on configuration.",
  },
  {
    q: "Does DriveOps support customer reviews?",
    a: "Yes. After trips, you can send WhatsApp review requests and collect inbound feedback into the ops inbox. DriveOps is not a Google Business review automation product.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. You can start from the free trial signup link. Plans also include a Free tier for small fleets so you can test the core trip and dispatch workflow.",
  },
]

export default function FAQSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-showcase bg-white border-b border-slate-200/70 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-14"
        >
          <div className="text-showcase-eyebrow inline-flex items-center gap-2 text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-5">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-showcase-h1 text-slate-900 mb-5">
            Straight answers about <span className="gradient-text">what DriveOps does today.</span>
          </h2>
          <p className="text-showcase-desc mx-auto text-slate-600">
            Grounded in the product as implemented—trips, dispatch, Driver App, live fleet, WhatsApp, rentals, and fleet care.
          </p>
        </motion.div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
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

        <div className="mt-12 text-center p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-sm text-slate-900">
              Have a specific question about your fleet?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Tell us how you run trips today and we will map it to DriveOps.
            </p>
          </div>
          <a
            href="/contact"
            className="px-4 py-2 bg-white border border-slate-200 hover:border-slate-300 rounded-xl text-xs font-bold text-slate-700 shadow-2xs hover:text-blue-600 transition-all shrink-0 flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact us</span>
          </a>
        </div>
      </div>
    </section>
  )
}
