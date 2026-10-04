import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Shield, Lock, Users, WifiOff, Bell, Server } from "lucide-react"

const TRUST_PILLARS = [
  {
    title: "Multi-Tenant Architecture",
    desc: "Schema-per-tenant isolation keeps each operator’s fleet data separated from other tenants.",
    icon: Server,
  },
  {
    title: "Role-Based Access Control",
    desc: "Permissions for owners, dispatchers, and ops users so people see what their role needs.",
    icon: Users,
  },
  {
    title: "Secure Authentication",
    desc: "Token-based sessions for web ops and Driver App login, including WhatsApp OTP where configured.",
    icon: Lock,
  },
  {
    title: "Resilient driver sync",
    desc: "Key Driver App actions—such as trip start/end, location batches, and fuel logs—can sync when connectivity returns.",
    icon: WifiOff,
  },
  {
    title: "Document Vault",
    desc: "Central storage for vehicle and driver documents with expiry tracking and alerts.",
    icon: Shield,
  },
  {
    title: "Operational notifications",
    desc: "In-app, push, email, and WhatsApp channels for the events DriveOps actually sends today.",
    icon: Bell,
  },
]

export default function TrustSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="section-showcase bg-[#F8FAFC] border-b border-slate-200/70 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-showcase-eyebrow inline-flex items-center gap-2 text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-5"
          >
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            <span>Platform Integrity & Architecture</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-showcase-h1 text-slate-900"
          >
            Built on dependable <span className="gradient-text">software foundations.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-showcase-desc mx-auto mt-5 text-slate-600"
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
