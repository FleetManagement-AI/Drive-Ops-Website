import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Shield, Lock, Users, WifiOff, Bell, Server } from "lucide-react"

const TRUST_PILLARS = [
  {
    title: "Multi-Tenant Architecture",
    desc: "Strict tenant isolation guarantees your fleet data, passenger records, and driver logs remain private and secure.",
    icon: Server,
  },
  {
    title: "Role-Based Access Control",
    desc: "Granular permissions for business owners, dispatchers, and field drivers ensure team members see only what they need.",
    icon: Users,
  },
  {
    title: "Secure Authentication",
    desc: "Token-based session authentication with encrypted transmission protects credentials across web and mobile devices.",
    icon: Lock,
  },
  {
    title: "Offline Driver Workflow",
    desc: "Local data persistence allows drivers to operate through dead zones without losing trip progression or notes.",
    icon: WifiOff,
  },
  {
    title: "Document Vault Integrity",
    desc: "Centralized digital storage for vehicle RC, commercial insurance, and licenses with verified metadata extraction.",
    icon: Shield,
  },
  {
    title: "Real-Time Notifications",
    desc: "Direct push delivery ensures dispatch orders and schedule updates reach drivers reliably on the road.",
    icon: Bell,
  },
]

export default function TrustSection() {
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
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            <span>PLATFORM INTEGRITY & ARCHITECTURE</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Built on dependable <span className="gradient-text">software foundations.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Grounded operational engineering designed for the daily realities of transport operators and drivers.
          </motion.p>
        </div>

        {/* Trust Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TRUST_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-slate-900 mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
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
