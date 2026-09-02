import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, CheckCircle2, Clock, Users, Car, Check } from "lucide-react"
import dispatchScreenshot from "@/assets/trip-dispatch.jpg"

const DISPATCH_FLOW = [
  {
    step: "1",
    label: "Unassigned Trips",
    desc: "Incoming requests queued with pickup time and route requirements.",
    icon: Clock,
  },
  {
    step: "2",
    label: "Available Vehicles",
    desc: "Filtered by vehicle type, seat capacity, depot location, and compliance.",
    icon: Car,
  },
  {
    step: "3",
    label: "Available Drivers",
    desc: "Filtered by duty shift, license validity, and assignment readiness.",
    icon: Users,
  },
  {
    step: "4",
    label: "Assigned Trip",
    desc: "Directly pushed to the driver app; office calendar updated in real time.",
    icon: Check,
  },
]

export default function DispatchSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="dispatch" className="py-20 sm:py-28 bg-white border-b border-slate-200/70 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-4"
          >
            <span>INTELLIGENT DISPATCH WORKSPACE</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Know what needs a driver <span className="gradient-text">before the day starts.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Turn scattered calls, spreadsheets and WhatsApp messages into one clear dispatch workflow.
          </motion.p>
        </div>

        {/* Visual Flow Strip: Unassigned Trips → Available Vehicles → Available Drivers → Assigned Trip */}
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

        {/* Real Product Showcase: Dispatch UI Screenshot & Outcomes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Real Dispatch Screenshot Frame */}
          <div className="lg:col-span-7">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900 p-2 sm:p-3 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                  <span className="ml-2 font-mono text-[10px] text-slate-400">ops.driveops.in / dispatch</span>
                </div>
                <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Live Dispatch Board
                </span>
              </div>

              {/* Real Screenshot */}
              <div className="relative rounded-xl overflow-hidden bg-slate-950">
                <img
                  src={dispatchScreenshot}
                  alt="DriveOps Trip Dispatch Workspace"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Key Operational Outcomes */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                DISPATCH EFFICIENCY
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 mb-4 leading-tight">
                Clear operational ownership for every scheduled trip.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Dispatchers get an uncluttered board of upcoming rides. Match drivers based on proximity, duty hours, and assigned vehicles without leaving the screen.
              </p>
            </div>

            {/* Business Outcomes List */}
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800">Faster allocation</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Assign drivers in seconds without opening WhatsApp or cross-checking paper files.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800">Less phone coordination</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Drivers receive full passenger and pickup details directly on their smartphone.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800">Clear operational ownership</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Everyone in the office knows who is handling which passenger and which vehicle.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800">Fewer missed assignments</h4>
                  <p className="text-slate-500 text-xs mt-0.5">Unassigned trips remain visibly flagged so nothing falls through the cracks.</p>
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
