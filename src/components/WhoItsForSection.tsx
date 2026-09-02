import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Car, Plane, Building, MapPin, CheckCircle2, ArrowRight } from "lucide-react"

const PERSONAS = [
  {
    title: "Taxi & Travel Operators",
    subtitle: "Chauffeur, Outstation & Sightseeing",
    icon: Car,
    summary: "Manage daily allocations and driver duty without the chaos of spreadsheet tracking and WhatsApp groups.",
    highlights: [
      "Quick trip creation for ad-hoc customer requests",
      "Real-time driver availability and assignment",
      "Driver mobile app for on-road trip execution",
    ],
  },
  {
    title: "Airport Transfer Operators",
    subtitle: "Punctual Terminal & Hotel Shuttles",
    icon: Plane,
    summary: "Handle recurring flight arrivals and hotel pickups with fixed package templates and verified vehicle readiness.",
    highlights: [
      "Standard airport-to-city package templates",
      "Clean queue of incoming and ongoing transfers",
      "Automated document compliance to prevent RTO stops",
    ],
  },
  {
    title: "Corporate Transport Providers",
    subtitle: "Employee Commute & Enterprise Rosters",
    icon: Building,
    summary: "Coordinate scheduled passenger transport across dedicated company vehicles, rostered drivers, and repeat routes.",
    highlights: [
      "Repeat commute schedules and vehicle allocations",
      "Driver duty and shift attendance logs",
      "Central command center for office operations teams",
    ],
  },
  {
    title: "Multi-location Fleets",
    subtitle: "Regional Branches & Multiple Depots",
    icon: MapPin,
    summary: "Run multiple depots or city branches from one shared workspace with localized dispatch control.",
    highlights: [
      "Branch-scoped vehicle and driver allocation",
      "Centralized document repository and renewal oversight",
      "Consolidated operational visibility across all sites",
    ],
  },
]

export default function WhoItsForSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="who-its-for" className="py-20 sm:py-28 bg-white border-b border-slate-200/70 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-4"
          >
            <span>TARGET PASSENGER FLEETS</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Built specifically for <span className="gradient-text">passenger transport operators.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            DriveOps is focused on fleet businesses operating roughly 15–100 passenger vehicles with an office dispatch team and on-road drivers.
          </motion.p>
        </div>

        {/* 4 Focused Personas Grid */}
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
