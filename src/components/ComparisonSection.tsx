import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { X, Check, ArrowRight } from "lucide-react"

const COMPARISONS = [
  {
    area: "Trip Management",
    before: "WhatsApp groups & phone calls to relay passenger pickup locations.",
    after: "Centralized trip queue with instant dispatch to driver mobile app.",
  },
  {
    area: "Vehicle & Driver Allocation",
    before: "Disorganized memory and manual checks to see who is available.",
    after: "Single dispatch board matching compliant vehicles with active drivers.",
  },
  {
    area: "Driver Field Execution",
    before: "Paper trip sheets that get crumpled, lost, or submitted days late.",
    after: "Mobile app workflow with duty toggle, trip milestones, and offline support.",
  },
  {
    area: "Document Compliance",
    before: "Sticky notes and spreadsheets; documents lapse until traffic checks.",
    after: "OCR document vault with proactive 30-day countdown renewal alerts.",
  },
  {
    area: "Operational Visibility",
    before: "Scattered information across multiple staff members' private phones.",
    after: "One Command Center giving everyone the same real-time operational pulse.",
  },
]

export default function ComparisonSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/70 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-4"
          >
            <span>OPERATIONAL TRANSFORMATION</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            From scattered tools to <span className="gradient-text">one operating system.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            See how replacing ad-hoc WhatsApp coordination with DriveOps transforms your daily operations.
          </motion.p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-12 bg-slate-900 text-white px-6 py-4 text-xs font-bold uppercase tracking-wider">
            <div className="col-span-3 text-slate-400">Operational Area</div>
            <div className="col-span-4 text-rose-400">Before DriveOps</div>
            <div className="col-span-5 text-emerald-400">With DriveOps</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100">
            {COMPARISONS.map((row, idx) => (
              <div
                key={row.area}
                className={`p-5 sm:p-6 transition-colors ${
                  idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                } hover:bg-blue-50/20`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center">
                  {/* Area */}
                  <div className="md:col-span-3">
                    <span className="font-heading font-bold text-sm text-slate-900 block">
                      {row.area}
                    </span>
                  </div>

                  {/* Before */}
                  <div className="md:col-span-4 flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {row.before}
                    </span>
                  </div>

                  {/* After */}
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

          {/* Bottom Conversion Bar */}
          <div className="bg-slate-50 p-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-heading font-bold text-sm text-slate-900">
                Ready to stop running operations through chat groups?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Setup your passenger fleet in 5 minutes with our guided onboarding.
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
