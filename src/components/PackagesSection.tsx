import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Plane, Building, Compass, Route, CheckCircle2, ArrowRight } from "lucide-react"

const PACKAGE_TEMPLATES = [
  {
    title: "Airport Transfer Packages",
    category: "Airport Pickup & Drop",
    icon: Plane,
    desc: "Preconfigured routes from airports to key hotels, city hubs, and tech corridors with fixed KM limits.",
    sample: "Terminal 2 ↔ City Hotels • Sedan / Innova",
  },
  {
    title: "Corporate Commute Routines",
    category: "Recurring Passenger Transport",
    icon: Building,
    desc: "Standard daily pickup schedules for enterprise client commutes, scheduled shifts, and office shuttles.",
    sample: "Residential Pickup ↔ Tech Park • Daily 08:30 AM",
  },
  {
    title: "Outstation & Tourism Trips",
    category: "Multi-Day & Leisure",
    icon: Compass,
    desc: "Multi-day sightseeing or intercity transport packages with defined starting points and vehicle allocations.",
    sample: "City Center ↔ Hill Station 2-Day Package",
  },
]

export default function PackagesSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/70 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-4"
          >
            <Route className="w-3.5 h-3.5 text-blue-600" />
            <span>REPEAT TRANSPORT EFFICIENCY</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Turn repeat trips into <span className="gradient-text">repeatable workflows.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Stop typing the same trip details every day. Save recurring routes as package templates to create and dispatch bookings in seconds.
          </motion.p>
        </div>

        {/* Package Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {PACKAGE_TEMPLATES.map((pkg, idx) => {
            const Icon = pkg.icon
            return (
              <motion.div
                key={pkg.title}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs hover:border-blue-200 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-lg">
                      {pkg.category}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
                    {pkg.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {pkg.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="text-[10px] font-mono text-blue-600 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {pkg.sample}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Workflow Progression Pill */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-2xs">
            <span className="text-blue-600 font-bold">Package Template</span>
            <span>→</span>
            <span className="text-emerald-600 font-bold">Trip Created</span>
            <span>→</span>
            <span className="text-amber-600 font-bold">Driver Assigned</span>
            <span>→</span>
            <span className="text-purple-600 font-bold">Executed</span>
          </div>
        </div>

      </div>
    </section>
  )
}
