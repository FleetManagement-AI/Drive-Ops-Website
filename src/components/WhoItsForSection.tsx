import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Building2, Headset, Smartphone, KeyRound, CheckCircle2 } from "lucide-react"

const PERSONAS = [
  {
    title: "Fleet owners & managers",
    subtitle: "One operational system of record",
    icon: Building2,
    summary: "See trips, vehicles, drivers, compliance, fuel, and rentals in one place instead of chasing status across chats and spreadsheets.",
    highlights: [
      "Trip, vehicle, and driver registries",
      "Live fleet visibility from Driver App GPS",
      "Document vault and expiry alerts",
    ],
  },
  {
    title: "Dispatchers & ops teams",
    subtitle: "Assign and monitor the day",
    icon: Headset,
    summary: "Create trips, allocate drivers and vehicles with conflict-aware dispatch, and keep the day moving with WhatsApp and app notifications.",
    highlights: [
      "Dispatch allocation workspace",
      "Unassigned trip attention",
      "Customer tracking links after assignment",
    ],
  },
  {
    title: "Drivers",
    subtitle: "Execute work from the road",
    icon: Smartphone,
    summary: "Use the Driver App for duty, assigned trips, navigation, trip sheets, fuel logs, and vehicle issue reports—with WhatsApp assignment support.",
    highlights: [
      "Accept / reject assignments",
      "Start and complete trips",
      "English, Malayalam, and Hindi",
    ],
  },
  {
    title: "Rental desks",
    subtitle: "Self-drive alongside chauffeur ops",
    icon: KeyRound,
    summary: "Run self-drive rental availability, bookings, handover/return, and manual payment recording in the same platform.",
    highlights: [
      "Rental calendar and availability",
      "Hold → confirm → handover → settle",
      "Recorded payments (cash, UPI, card, and more)",
    ],
  },
]

export default function WhoItsForSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="who-its-for" className="section-showcase bg-white border-b border-slate-200/70 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-showcase-eyebrow inline-flex items-center gap-2 text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-5"
          >
            <span>Who DriveOps Serves</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-showcase-h1 text-slate-900"
          >
            Built for the people who{" "}
            <span className="gradient-text">run the fleet every day.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-showcase-desc mx-auto mt-5 text-slate-600"
          >
            From the office desk to the driver on the road—and the rental counter when you need it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PERSONAS.map((persona, idx) => {
            const Icon = persona.icon
            return (
              <motion.div
                key={persona.title}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-slate-50/60 rounded-3xl border border-slate-200/90 p-7 sm:p-8 hover:bg-white hover:border-blue-200 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-100/80 text-blue-700 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                        {persona.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {persona.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {persona.summary}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-slate-200/70">
                    {persona.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-xs text-slate-700 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
