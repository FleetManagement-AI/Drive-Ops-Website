import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { MessageCircle, CheckCircle2 } from "lucide-react"

const FLOW = [
  { step: "01", title: "Trip assigned", desc: "Dispatcher allocates driver and vehicle." },
  { step: "02", title: "WhatsApp to driver", desc: "Driver gets assignment with Accept / Reject actions." },
  { step: "03", title: "Customer update", desc: "Trip confirmation can include driver and vehicle details." },
  { step: "04", title: "Tracking link", desc: "Customers receive a secure trip tracking URL where configured." },
  { step: "05", title: "Trip sheet", desc: "WhatsApp access links support trip sheet workflows." },
  { step: "06", title: "Review request", desc: "After completion, request feedback via WhatsApp into the ops inbox." },
]

const CAPABILITIES = [
  "Driver assignment messages with Accept / Reject",
  "Customer trip confirmation messaging",
  "Secure customer tracking URLs",
  "Trip sheet access links",
  "Driver OTP via WhatsApp",
  "Compliance expiry alerts",
  "Review requests and inbound replies",
]

export default function WhatsAppOpsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="whatsapp" className="section-showcase bg-white border-b border-slate-200/70">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-showcase-eyebrow inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full mb-5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Operations</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-showcase-h1 text-slate-900"
          >
            Keep drivers and customers informed—{" "}
            <span className="gradient-text">where they already are.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-showcase-desc mx-auto mt-5 text-slate-600"
          >
            DriveOps uses WhatsApp (via ChatServe) for operational messaging—assignments, confirmations,
            tracking links, OTP, compliance alerts, and review requests—not as a substitute for the Driver App.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
            {FLOW.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 mb-1">
                  {item.step}
                </p>
                <h3 className="font-heading text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-2 rounded-3xl border border-emerald-200 bg-emerald-50/50 p-6 sm:p-7">
            <h3 className="font-heading text-lg font-bold text-slate-900 mb-4">
              Verified WhatsApp capabilities
            </h3>
            <ul className="space-y-3">
              {CAPABILITIES.map((cap) => (
                <li key={cap} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-slate-500 leading-relaxed">
              Reviews are collected into the DriveOps ops inbox via WhatsApp—not as a Google Business autopilot.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
