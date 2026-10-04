import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { X, Check, ArrowRight } from "lucide-react"

const COMPARISONS = [
  {
    area: "Trip planning",
    before: "Bookings scattered across calls, chats, and notebooks.",
    after: "Centralized one-way, round-trip, full-day, and recurring trips.",
  },
  {
    area: "Dispatch",
    before: "Manual guesswork to find who is free and which vehicle is ready.",
    after: "Candidate filtering, conflict checks, allocation, and WhatsApp notify.",
  },
  {
    area: "Driver execution",
    before: "Paper sheets and constant phone updates from the road.",
    after: "Driver App for duty, accept/reject, navigation, trip sheets, and fuel.",
  },
  {
    area: "Fleet visibility",
    before: "A GPS tracker only answers “where is the vehicle?”",
    after: "Live ops map from Driver App GPS plus customer tracking links.",
  },
  {
    area: "Customer updates",
    before: "Status calls every few minutes.",
    after: "WhatsApp confirmation, tracking URL, and optional review request.",
  },
  {
    area: "Fleet care",
    before: "Fuel receipts and renewals living outside the operation.",
    after: "Fuel logs, maintenance jobs, document vault, and expiry alerts.",
  },
]

export default function ComparisonSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="section-showcase bg-[#F8FAFC] border-b border-slate-200/70 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-showcase-eyebrow inline-flex items-center gap-2 text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-5"
          >
            <span>More Than a GPS Tracker</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-showcase-h1 text-slate-900"
          >
            Tracking shows location.{" "}
            <span className="gradient-text">DriveOps runs the operation.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-showcase-desc mx-auto mt-5 text-slate-600"
          >
            A tracker answers where a vehicle is. DriveOps helps you plan, assign, operate, track, maintain, and connect—from trip request to trip sheet.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="hidden md:grid grid-cols-12 bg-slate-900 text-white px-6 py-4 text-xs font-bold uppercase tracking-wider">
            <div className="col-span-3 text-slate-400">Capability</div>
            <div className="col-span-4 text-rose-400">Typical GPS / chat ops</div>
            <div className="col-span-5 text-emerald-400">With DriveOps</div>
          </div>

          <div className="divide-y divide-slate-100">
            {COMPARISONS.map((row, idx) => (
              <div
                key={row.area}
                className={`p-5 sm:p-6 transition-colors ${
                  idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                } hover:bg-blue-50/20`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center">
                  <div className="md:col-span-3">
                    <span className="font-heading font-bold text-sm text-slate-900 block">
                      {row.area}
                    </span>
                  </div>
                  <div className="md:col-span-4 flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {row.before}
                    </span>
                  </div>
                  <div className="md:col-span-5 flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-900 font-semibold leading-relaxed">
                      {row.after}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 p-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-heading font-bold text-sm text-slate-900">
                Ready to run operations from one platform?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Start with trips, dispatch, and the Driver App—then add fleet care and rentals.
              </p>
            </div>
            <a
              href="https://driveops.chatserve.in/signup"
              className="gradient-accent text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-xs hover:opacity-95 transition-all flex items-center gap-1.5 shrink-0"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
