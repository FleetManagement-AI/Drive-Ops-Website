import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, CheckCircle2, Car, ClipboardList, Send, Users } from "lucide-react"

const DISPATCH_FLOW = [
  {
    step: "1",
    label: "Trips",
    desc: "See what needs dispatch — unassigned trips queued by pickup time and route.",
    icon: ClipboardList,
  },
  {
    step: "2",
    label: "Drivers",
    desc: "Who can drive it — filtered by availability, duty readiness, and license fit.",
    icon: Users,
  },
  {
    step: "3",
    label: "Vehicles",
    desc: "Which vehicle — match capacity, compliance, and fleet availability in one list.",
    icon: Car,
  },
  {
    step: "4",
    label: "Assign",
    desc: "Review the selected trip, route map, and confirm driver + vehicle assignment.",
    icon: Send,
  },
]

export default function DispatchSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="dispatch" className="section-showcase bg-white border-b border-slate-200/70 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-showcase-eyebrow inline-flex items-center gap-2 text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-5"
          >
            <span>Dispatch Command Center</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-showcase-h1 text-slate-900"
          >
            One board for trips, drivers, vehicles,{" "}
            <span className="gradient-text">and the assignment.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-showcase-desc mx-auto mt-5 text-slate-600"
          >
            A command-center layout so dispatchers always know what needs attention,
            who is available, which vehicle fits, and where the trip is going.
          </motion.p>
        </div>

        {/* Visual Flow Strip: Trips → Drivers → Vehicles → Assign */}
        <div className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DISPATCH_FLOW.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 relative group hover:bg-blue-50/40 hover:border-blue-200 transition-all shadow-2xs"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-blue-100/80 text-blue-700 font-bold text-xs flex items-center justify-center">
                      {item.step}
                    </span>
                    <Icon className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-slate-900 mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Product Showcase: Command Center Mockup & Outcomes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          <div className="lg:col-span-7">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900 p-2 sm:p-3 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                  <span className="ml-2 font-mono text-[10px] text-slate-400">ops.driveops.in / dispatch</span>
                </div>
                <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Dispatch Command Center
                </span>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-slate-950">
                <img
                  src="/images/features/Dispatch%20Command%20Center%20Mockup.png"
                  alt="DriveOps Dispatch Command Center — trips, drivers, vehicles, and assignment"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                DISPATCH EFFICIENCY
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 mb-4 leading-tight">
                Clear ownership from queue to assigned trip.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Dispatchers work a four-panel board: trips that need attention, available drivers,
                available vehicles, and a selected-trip panel with route context and assign.
              </p>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800">Know what needs dispatch</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Unassigned trips stay visible with pickup time, route, and customer at a glance.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800">See who and what is free</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Available drivers and vehicles sit beside the queue — no tab-hopping or spreadsheets.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800">Review before you assign</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Selected trip details, notes, and route context stay on screen while you confirm.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800">Fewer missed assignments</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Needs-assignment counts stay front and center so nothing slips through.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://driveops.chatserve.in/signup"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                <span>Try the dispatch queue</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
