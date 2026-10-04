import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Users, MessageCircle, MapPinned, Star, CheckCircle2 } from "lucide-react"

const FLOW = [
  { title: "Trip confirmation", desc: "Customers can receive trip details over WhatsApp." },
  { title: "Driver & vehicle info", desc: "Share who is coming and what they are driving." },
  { title: "Tracking link", desc: "Secure public tracking page for the active trip." },
  { title: "Review request", desc: "Ask for feedback on WhatsApp after completion." },
]

export default function CustomerExperienceSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="customer-experience" className="section-showcase bg-[#F8FAFC] border-b border-slate-200/70">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-showcase-eyebrow inline-flex items-center gap-2 text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-5"
          >
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>Customer Experience</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-showcase-h1 text-slate-900"
          >
            Keep customers informed{" "}
            <span className="gradient-text">without the constant calls.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-showcase-desc mx-auto mt-5 text-slate-600"
          >
            Customers do not need a DriveOps account. They stay informed through WhatsApp messages,
            tracking links, and optional review requests after the trip.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {FLOW.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-2">
                Step {idx + 1}
              </p>
              <h3 className="font-heading text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: MessageCircle,
              title: "WhatsApp updates",
              desc: "Trip confirmation and operational messages through configured templates.",
            },
            {
              icon: MapPinned,
              title: "Public trip tracking",
              desc: "Token-based tracking page with live location updates for the journey.",
            },
            {
              icon: Star,
              title: "Feedback in the ops inbox",
              desc: "WhatsApp review requests and inbound replies—managed inside DriveOps.",
            },
          ].map((card) => {
            const Icon = card.icon
            return (
              <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-5 flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-slate-900 mb-1">{card.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-xs text-slate-500 text-center flex items-center justify-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
          Not a public review marketplace or Google Business review automation product.
        </p>
      </div>
    </section>
  )
}
