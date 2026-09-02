import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Plus, Check, ShieldCheck, Sparkles, ArrowRight } from "lucide-react"

const PILLARS = [
  {
    title: "Trip Operations",
    desc: "Every day starts with scheduled passenger bookings and repeat package templates.",
    color: "text-blue-600 bg-blue-50 border-blue-200",
  },
  {
    title: "Dispatch",
    desc: "Intelligent matching of available compliant vehicles with active duty drivers.",
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
  },
  {
    title: "Driver Execution",
    desc: "Simple mobile app workflow with offline support and duty attendance.",
    color: "text-amber-600 bg-amber-50 border-amber-200",
  },
  {
    title: "Compliance",
    desc: "Automated OCR extraction and proactive renewal alerts for RC, Insurance & DL.",
    color: "text-purple-600 bg-purple-50 border-purple-200",
  },
  {
    title: "Fleet Resources",
    desc: "Unified ledger keeping vehicle documents and driver records always audit-ready.",
    color: "text-indigo-600 bg-indigo-50 border-indigo-200",
  },
]

export default function WhyDriveOpsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/70 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>DIFFERENTIATION BY DESIGN</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            More than a fleet register. <span className="gradient-text">Built around the trip.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Most fleet software stops at static vehicle spreadsheets. DriveOps unifies the entire operational chain that actually moves passengers.
          </motion.p>
        </div>

        {/* The 5 Combined Pillars Equation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {PILLARS.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:bg-white hover:border-slate-300 transition-all shadow-2xs"
            >
              <div>
                <span className={`inline-block px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider mb-3 border ${p.color}`}>
                  Pillar {idx + 1}
                </span>
                <h3 className="font-heading text-base font-bold text-slate-900 mb-1.5">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Operational Outcome Callout */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl max-w-4xl mx-auto text-center space-y-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400">
            THE RESULT FOR YOUR BUSINESS
          </p>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight max-w-2xl mx-auto">
            Run 3x more trips with the same office staff and zero coordination blind spots.
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            From the moment a customer requests a booking to the moment the vehicle completes the drop-off, your team operates with clarity.
          </p>
          <div className="pt-2">
            <a
              href="https://driveops.chatserve.in/signup"
              className="gradient-accent text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-md shadow-blue-500/25 hover:opacity-95 transition-all"
            >
              <span>Get Started with DriveOps</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
