import React, { useState } from "react"
import { motion, useReducedMotion, AnimatePresence } from "framer-motion"
import { Smartphone, WifiOff, Bell, Globe, CheckCircle2, Shield, ArrowRight, ToggleLeft, ToggleRight, Play, Check } from "lucide-react"

const DRIVER_FEATURES = [
  {
    id: "duty",
    title: "Duty On / Off Toggle",
    desc: "Drivers signal their availability with a single tap. The office sees who is on duty instantly without calling.",
    badge: "Availability Control",
  },
  {
    id: "trips",
    title: "Today's Trips Queue",
    desc: "Clean chronological list of assigned bookings, passenger pickup points, and special route instructions.",
    badge: "Trip Execution",
  },
  {
    id: "offline",
    title: "Offline Trip Execution",
    desc: "Start and complete trips in basements, airports, or rural dead zones. Data automatically syncs when signal returns.",
    badge: "Network Resilient",
  },
  {
    id: "languages",
    title: "Regional Language Support",
    desc: "Designed for real drivers on Indian roads. Accessible interface with multi-language comfort.",
    badge: "Driver Accessibility",
  },
  {
    id: "notifications",
    title: "Instant Push Notifications",
    desc: "Drivers get immediate alerts when trips are dispatched or updated, ending WhatsApp group ping noise.",
    badge: "Real-time Alerts",
  },
]

export default function DriverAppSection() {
  const [activeTab, setActiveTab] = useState("duty")
  const [isDutyOn, setIsDutyOn] = useState(true)
  const [tripState, setTripState] = useState<"assigned" | "started" | "completed">("started")
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="driver-app" className="py-20 sm:py-28 bg-[#090D16] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full mb-4"
          >
            <span>FIELD EXECUTION WORKFLOW</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Built for the driver, <span className="text-emerald-400">not just the office.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Your operations team plans the work. Drivers execute it from a simple mobile workflow built for the road.
          </motion.p>
        </div>

        {/* Office-to-Driver Continuous Feedback Loop Bar */}
        <div className="mb-14 bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 sm:p-5 max-w-4xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 text-center mb-3">
            THE OFFICE ↔ DRIVER CONNECTION
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-blue-400 font-bold block mb-1">01. Dispatcher</span>
              <span className="text-slate-300 text-[11px]">Assigns trip in office</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-amber-400 font-bold block mb-1">02. Driver</span>
              <span className="text-slate-300 text-[11px]">Receives push alert</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-emerald-400 font-bold block mb-1">03. Mobile App</span>
              <span className="text-slate-300 text-[11px]">Executes pickup & drop</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-purple-400 font-bold block mb-1">04. Command Center</span>
              <span className="text-slate-300 text-[11px]">Sees trip completed</span>
            </div>
          </div>
        </div>

        {/* Mobile Showcase & Interactive Phone Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column: Interactive Mobile Phone UI */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-[310px] bg-slate-950 rounded-[38px] border-[6px] border-slate-800 p-4 shadow-2xl shadow-blue-900/20 text-white relative"
            >
              {/* Speaker / Camera Notch */}
              <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900" />
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between text-[10px] text-slate-400 mb-3 px-1">
                <span>09:41 AM</span>
                <div className="flex items-center gap-1.5 text-emerald-400 text-[9px] font-bold">
                  <WifiOff className="w-3 h-3 text-amber-400" />
                  <span>Offline Ready</span>
                </div>
              </div>

              {/* App Header & Duty Toggle */}
              <div className="bg-slate-900 rounded-2xl p-3 border border-slate-800 mb-3 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">Suresh Nair</h4>
                  <p className="text-[10px] text-slate-400">Driver #DR-108</p>
                </div>
                <button
                  onClick={() => setIsDutyOn(!isDutyOn)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                    isDutyOn
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "bg-slate-800 text-slate-400 border border-slate-700"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isDutyOn ? "bg-emerald-400 animate-ping" : "bg-slate-500"}`} />
                  {isDutyOn ? "ON DUTY" : "OFF DUTY"}
                </button>
              </div>

              {/* Today's Trips Card */}
              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between text-[10px] text-slate-400 px-1">
                  <span className="font-bold">ASSIGNED TRIP</span>
                  <span className="font-mono text-emerald-400">TR-5082</span>
                </div>

                <div className="bg-slate-900/90 rounded-2xl p-3 border border-slate-800 space-y-2.5 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                    <span className="font-bold text-white">Airport Guest Pickup</span>
                    <span className="text-[10px] text-slate-400">09:30 AM</span>
                  </div>

                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-1 shrink-0" />
                      <div>
                        <p className="text-[9px] text-slate-400">PICKUP</p>
                        <p className="font-semibold text-slate-200">Terminal 3, Arrival Gate 4</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0" />
                      <div>
                        <p className="text-[9px] text-slate-400">DROP</p>
                        <p className="font-semibold text-slate-200">Grand Hyatt, City Center</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-2 bg-slate-950 rounded-xl text-[10px] text-slate-400 flex justify-between items-center">
                    <span>Passenger: Mr. Sharma (2 Bags)</span>
                    <span className="text-slate-300 font-mono">Innova KA-03</span>
                  </div>

                  {/* Trip State Controls */}
                  <div className="pt-1">
                    {tripState === "assigned" && (
                      <button
                        onClick={() => setTripState("started")}
                        className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition-all"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Start Trip</span>
                      </button>
                    )}
                    {tripState === "started" && (
                      <button
                        onClick={() => setTripState("completed")}
                        className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition-all"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Complete Trip</span>
                      </button>
                    )}
                    {tripState === "completed" && (
                      <div className="w-full py-2 bg-slate-800 text-emerald-400 rounded-xl font-bold text-xs text-center">
                        Trip Completed & Logged
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Nav Simulation */}
              <div className="pt-2 border-t border-slate-800 text-[9px] flex justify-around text-slate-500">
                <span className="text-blue-400 font-bold">Trips</span>
                <span>Duty Log</span>
                <span>Support</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Driver App Features & Capabilities */}
          <div className="lg:col-span-7 space-y-4">
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                MOBILE CAPABILITIES
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-3">
                Everything field drivers need, zero unnecessary complexity.
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                The driver app is intentionally simple. Drivers do not need to navigate complex dashboards — they see their day's schedule, start their trips, and stay connected with dispatch.
              </p>
            </div>

            {/* Feature Cards List */}
            <div className="space-y-3">
              {DRIVER_FEATURES.map((feat) => {
                const isSelected = activeTab === feat.id
                return (
                  <div
                    key={feat.id}
                    onClick={() => setActiveTab(feat.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-slate-850/90 border-emerald-500/50 shadow-md shadow-emerald-500/5"
                        : "bg-slate-900/50 border-slate-800 hover:bg-slate-850/50 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-heading text-sm font-bold text-white">
                        {feat.title}
                      </h4>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        {feat.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Available on Android & iOS
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                No driver training required
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
