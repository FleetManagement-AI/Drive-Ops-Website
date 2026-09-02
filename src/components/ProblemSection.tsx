import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { MessageSquare, PhoneCall, Users, FileText, AlertTriangle, EyeOff, ArrowDown } from "lucide-react"

const PAIN_POINTS = [
  {
    icon: MessageSquare,
    title: "Trip details lost in chat threads",
    desc: "Customer bookings, pickup times, and route changes buried in disorganized WhatsApp groups.",
  },
  {
    icon: PhoneCall,
    title: "Endless phone tag with drivers",
    desc: "Calling back and forth just to verify if a driver is available, on duty, or en route.",
  },
  {
    icon: Users,
    title: "Unclear vehicle & driver assignment",
    desc: "No real-time certainty on which car or driver is already allocated or waiting idle.",
  },
  {
    icon: FileText,
    title: "Fragile paper & Excel records",
    desc: "Manual trip sheets and spreadsheets that get misplaced, delayed, or double-entered.",
  },
  {
    icon: AlertTriangle,
    title: "Surprise document expiry",
    desc: "Vehicle insurance, fitness, or driver licenses lapse unnoticed until a checkpoint stop.",
  },
  {
    icon: EyeOff,
    title: "No single operational view",
    desc: "The office has no central pulse of today's workload, leading to missed pickups and customer friction.",
  },
]

export default function ProblemSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200/60 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-rose-600 bg-rose-50 border border-rose-200/70 px-3.5 py-1.5 rounded-full mb-4"
          >
            <span>THE OPERATIONAL BOTTLENECK</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Still running transport operations through{" "}
            <span className="text-rose-600">WhatsApp, Excel and phone calls?</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            When passenger fleets grow past 10 vehicles, coordination by memory breaks down. Daily operations become a stressful scramble.
          </motion.p>
        </div>

        {/* 6 Real Pain Point Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {PAIN_POINTS.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 hover:bg-white transition-all shadow-2xs group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-100/80 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Transition Banner into DriveOps */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/90 via-indigo-50/70 to-blue-50/90 p-6 sm:p-8 text-center max-w-3xl mx-auto flex flex-col items-center shadow-xs"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-2">
            THERE IS A BETTER WAY
          </p>
          <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
            Turn scattered chaos into one connected operating system.
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mb-4">
            DriveOps unites trip booking, dispatch allocation, driver mobile execution, and document compliance in one streamlined loop.
          </p>
          <div className="flex items-center gap-1 text-xs font-bold text-blue-600">
            <span>Explore the core workflow below</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
