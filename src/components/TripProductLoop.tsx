import React, { useState } from "react"
import { motion, useReducedMotion, AnimatePresence } from "framer-motion"
import { CalendarPlus, Send, Smartphone, LayoutDashboard, CheckCircle2, ArrowRight, MapPin, Users, Car, ShieldCheck } from "lucide-react"

const STAGES = [
  {
    id: "plan",
    step: "01",
    name: "PLAN",
    title: "Create the trip",
    description: "Capture one-way, round-trip, or full-day trips with pickup, drop, and waypoint stops. Use recurring daily, weekly, or monthly schedules when the work repeats.",
    icon: CalendarPlus,
    badge: "Office / Dispatch",
    color: "blue",
    previewData: {
      tag: "NEW TRIP CREATED",
      title: "Trip #TR-5219 — Airport Transfer",
      meta: "Pickup: 09:30 AM • Cochin Int'l Airport → Infopark Phase 2",
      passenger: "Customer linked • Stops configured",
      actionLabel: "Move to Dispatch Queue",
      status: "Unassigned",
    },
  },
  {
    id: "dispatch",
    step: "02",
    name: "ASSIGN",
    title: "Assign driver and vehicle",
    description: "Review candidates, check conflicts, allocate the trip, and notify the driver on WhatsApp and the Driver App. Drivers can accept or reject the assignment.",
    icon: Send,
    badge: "Dispatcher Workspace",
    color: "emerald",
    previewData: {
      tag: "DISPATCH ALLOCATION",
      title: "Matched Vehicle & Driver",
      meta: "Vehicle: Toyota Innova (KL-07-CD-9012)",
      passenger: "Assigned Driver: Rajesh Kumar (Duty: Active)",
      actionLabel: "Notify driver",
      status: "Assigned",
    },
  },
  {
    id: "execute",
    step: "03",
    name: "OPERATE",
    title: "Driver executes on mobile",
    description: "Drivers go on duty, accept trips, navigate, start and complete work, submit trip sheets, and log fuel or vehicle issues from the Driver App.",
    icon: Smartphone,
    badge: "Driver Mobile App",
    color: "amber",
    previewData: {
      tag: "MOBILE EXECUTION",
      title: "Trip In Progress (Driver View)",
      meta: "Status: En route • Navigation active",
      passenger: "Trip sheet ready after completion",
      actionLabel: "Complete Trip",
      status: "In Progress",
    },
  },
  {
    id: "control",
    step: "04",
    name: "TRACK & CLOSE",
    title: "Track, complete, and follow up",
    description: "Ops watch live fleet location from Driver App GPS. Customers can use a tracking link. After completion, close with trip sheets and optional WhatsApp review requests.",
    icon: LayoutDashboard,
    badge: "Live Ops",
    color: "purple",
    previewData: {
      tag: "OPERATIONAL CLOSURE",
      title: "Trip Completed & Logged",
      meta: "Trip sheet submitted • Customer review requested",
      passenger: "Live tracking session closed",
      actionLabel: "Ready for next trip",
      status: "Completed",
    },
  },
]

export default function TripProductLoop() {
  const [activeStageId, setActiveStageId] = useState("plan")
  const shouldReduceMotion = useReducedMotion()

  const currentStage = STAGES.find((s) => s.id === activeStageId) || STAGES[0]

  return (
    <section id="workflow" className="section-showcase bg-[#F8FAFC] border-b border-slate-200/70 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(37,99,235,0.05),transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-showcase-eyebrow inline-flex items-center gap-2 text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-5"
          >
            <span>The Operational Loop</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-showcase-h1 text-slate-900"
          >
            From trip request to <span className="gradient-text">trip completion.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-showcase-desc mx-auto mt-5 text-slate-600"
          >
            DriveOps connects the entire lifecycle of a passenger transport job. Plan in the office, dispatch to drivers, and stay in control of execution.
          </motion.p>
        </div>

        {/* 4 Connected Stages Flow (Clickable Steps) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {STAGES.map((stage) => {
            const isSelected = activeStageId === stage.id
            const Icon = stage.icon
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 relative cursor-pointer ${
                  isSelected
                    ? "bg-white border-blue-500 shadow-md shadow-blue-500/10 ring-2 ring-blue-500/20"
                    : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-black ${isSelected ? "text-blue-600" : "text-slate-400"}`}>
                    STAGE {stage.step}
                  </span>
                  <span className={`p-1.5 rounded-lg ${isSelected ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-500"}`}>
                    <Icon className="w-4 h-4" />
                  </span>
                </div>
                <h3 className={`font-heading text-base font-bold mb-1 ${isSelected ? "text-slate-900" : "text-slate-700"}`}>
                  {stage.name}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {stage.title}
                </p>

                {isSelected && (
                  <motion.div
                    layoutId="active-step-bar"
                    className="absolute -bottom-[2px] left-5 right-5 h-[3px] bg-blue-600 rounded-full"
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Active Stage Detailed Spotlight */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">

            {/* Left Description Column */}
            <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-lg text-slate-700 text-xs font-bold uppercase tracking-wider">
                <span>{currentStage.badge}</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                {currentStage.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {currentStage.description}
              </p>

              <div className="pt-2 space-y-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Structured workflow prevents dropped assignments</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Connected handoff between office and field drivers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Zero WhatsApp chat searching or manual paperwork</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href="https://driveops.chatserve.in/signup"
                  className="gradient-accent text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm hover:opacity-95 transition-all flex items-center gap-1.5"
                >
                  <span>Experience this workflow</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Interactive Card Preview */}
            <div className="lg:col-span-6 bg-slate-900 p-6 sm:p-10 lg:p-12 text-white h-full flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-800">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="bg-slate-950 rounded-2xl border border-slate-800 p-6 shadow-2xl space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-850">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                      {currentStage.previewData.tag}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {currentStage.previewData.status}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-heading text-lg font-bold text-white">
                      {currentStage.previewData.title}
                    </h4>
                    <p className="text-xs text-slate-400 flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{currentStage.previewData.meta}</span>
                    </p>
                    <p className="text-xs text-slate-300 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{currentStage.previewData.passenger}</span>
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-850 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>DriveOps Verified Stage</span>
                    </div>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 text-xs font-semibold">
                      {currentStage.previewData.actionLabel}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
