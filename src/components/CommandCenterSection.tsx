import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { LayoutDashboard, AlertCircle, Users, Car, Clock, ShieldCheck, ArrowRight } from "lucide-react"
import dashboardScreenshot from "@/assets/dashboard.jpg"

const OPERATIONAL_SIGNALS = [
  {
    title: "Active & Upcoming Trips",
    desc: "See every trip scheduled for today, categorized by status: Pending, Dispatched, In Progress, and Completed.",
    icon: Clock,
  },
  {
    title: "Driver Duty Status",
    desc: "Instant breakdown of who is currently On Duty, Off Duty, or resting between passenger trips.",
    icon: Users,
  },
  {
    title: "Vehicle Readiness",
    desc: "Immediate clarity on which vehicles are out on trips, stationed at depot, or scheduled for service.",
    icon: Car,
  },
  {
    title: "Attention & Compliance Alerts",
    desc: "Actionable warnings for upcoming document renewals, unassigned bookings, or operational delays.",
    icon: AlertCircle,
  },
]

export default function CommandCenterSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="command-center" className="py-20 sm:py-28 bg-[#0B0F19] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full mb-4"
          >
            <LayoutDashboard className="w-3.5 h-3.5 text-blue-400" />
            <span>OPERATIONAL CONTROL ROOM</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Your transport operation, <span className="text-blue-400">at a glance.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Consolidate your daily transport pulse into one central control room. Monitor active dispatches, driver duty state, and pending attention items without chasing staff.
          </motion.p>
        </div>

        {/* Real Product Showcase: Command Center Screenshot */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl p-2.5 sm:p-4 mb-12 overflow-hidden"
        >
          {/* Mock Browser Titlebar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-xs text-slate-400 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="ml-2 font-mono text-[11px] text-slate-400">DriveOps Command Center v4.2</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 text-[10px] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Operational Status: Normal
              </span>
            </div>
          </div>

          {/* Genuine Command Center Screenshot */}
          <div className="rounded-xl overflow-hidden bg-slate-950">
            <img
              src={dashboardScreenshot}
              alt="DriveOps Command Center Dashboard"
              className="w-full h-auto object-cover opacity-95"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* 4 Operational Signals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OPERATIONAL_SIGNALS.map((signal, idx) => {
            const Icon = signal.icon
            return (
              <motion.div
                key={signal.title}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-white mb-1.5">
                    {signal.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {signal.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
