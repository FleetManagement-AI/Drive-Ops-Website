import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"

const PILLARS = [
  {
    title: "Plan",
    desc: "Trips with one-way, round-trip, full-day types, stops, and recurring schedules.",
    color: "text-blue-600 bg-blue-50 border-blue-200",
  },
  {
    title: "Assign",
    desc: "Dispatch with candidate checks, conflict awareness, and WhatsApp assignment.",
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
  },
  {
    title: "Operate",
    desc: "Driver App for duty, accept/reject, navigation, trip sheets, fuel, and issues.",
    color: "text-amber-600 bg-amber-50 border-amber-200",
  },
  {
    title: "Track",
    desc: "Live fleet map from Driver App GPS and customer trip tracking links.",
    color: "text-cyan-600 bg-cyan-50 border-cyan-200",
  },
  {
    title: "Maintain",
    desc: "Fuel logs, maintenance jobs, document vault, and expiry alerts.",
    color: "text-indigo-600 bg-indigo-50 border-indigo-200",
  },
  {
    title: "Connect",
    desc: "WhatsApp updates for drivers and customers, plus review requests.",
    color: "text-violet-600 bg-violet-50 border-violet-200",
  },
  {
    title: "Rent",
    desc: "Self-drive rental lifecycle with calendar, handover, and recorded payments.",
    color: "text-rose-600 bg-rose-50 border-rose-200",
  },
]

export default function WhyDriveOpsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="section-showcase bg-white border-b border-slate-200/70 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-showcase-eyebrow inline-flex items-center gap-2 text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Why DriveOps</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-showcase-h1 text-slate-900"
          >
            Built to manage and operate—{" "}
            <span className="gradient-text">not just register assets.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-showcase-desc mx-auto mt-5 text-slate-600"
          >
            DriveOps connects the operational chain that actually moves your fleet day to day.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {PILLARS.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:bg-white hover:border-slate-300 transition-all shadow-2xs"
            >
              <div>
                <span className={`inline-block px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider mb-3 border ${p.color}`}>
                  {p.title}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl max-w-4xl mx-auto text-center space-y-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400">
            THE RESULT FOR YOUR TEAM
          </p>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight max-w-2xl mx-auto">
            One shared operational picture from trip request to trip completion.
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Dispatch assigns. Drivers execute. Ops track. Customers stay informed. Fleet care stays attached to the same system of record.
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
