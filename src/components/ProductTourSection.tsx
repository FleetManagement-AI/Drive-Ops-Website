import React, { useState } from "react"
import { motion, useReducedMotion, AnimatePresence } from "framer-motion"
import { LayoutDashboard, Send, Route, Smartphone, ShieldCheck, Car, Users, CheckCircle2, ArrowRight } from "lucide-react"

import dashboardImg from "@/assets/dashboard.jpg"
import dispatchImg from "@/assets/trip-dispatch.jpg"
import documentVaultImg from "@/assets/document-vault.jpg"
import vehicleImg from "@/assets/vehicle-management.jpg"
import driverImg from "@/assets/driver-management.jpg"

const TOUR_ITEMS = [
  {
    id: "command-center",
    step: "01",
    label: "Command Center",
    icon: LayoutDashboard,
    image: dashboardImg,
    headline: "Real-time pulse of your active fleet operations.",
    problemSolved: "Eliminates morning blind spots by centralizing today's trips, vehicle status, and driver duty in one clean view.",
    highlights: [
      "Active and upcoming trip timeline",
      "Driver duty counts at a glance",
      "Immediate attention items & expiry alerts",
    ],
  },
  {
    id: "dispatch",
    step: "02",
    label: "Dispatch Queue",
    icon: Send,
    image: dispatchImg,
    headline: "Fast, clear assignment of drivers and vehicles.",
    problemSolved: "Replaces chaotic WhatsApp calls with a structured queue matching available compliant vehicles to available drivers.",
    highlights: [
      "Unassigned trips clearly prioritized",
      "Instant vehicle & driver pairing",
      "Direct push notification to driver app",
    ],
  },
  {
    id: "compliance",
    step: "03",
    label: "Document Vault & OCR",
    icon: ShieldCheck,
    image: documentVaultImg,
    headline: "Automated OCR extraction and expiry alerts.",
    problemSolved: "Prevents surprise RTO challans or impoundment by tracking vehicle RC, Insurance, DL, and PUC renewals automatically.",
    highlights: [
      "Intelligent OCR data extraction from scans",
      "Proactive 30, 15, and 7-day renewal warnings",
      "Central repository accessible from anywhere",
    ],
  },
  {
    id: "vehicles",
    step: "04",
    label: "Vehicle Management",
    icon: Car,
    image: vehicleImg,
    headline: "Complete ledger of your vehicle assets.",
    problemSolved: "Maintains clear ownership of registration numbers, seating capacities, depot locations, and assigned default drivers.",
    highlights: [
      "Categorized by vehicle type (Sedan, SUV, Tempo)",
      "Linked to real-time dispatch availability",
      "Bulk CSV / Excel fleet import supported",
    ],
  },
  {
    id: "drivers",
    step: "05",
    label: "Driver Directory",
    icon: Users,
    image: driverImg,
    headline: "Organized driver profiles and duty availability.",
    problemSolved: "Removes confusion over who is licensed, on shift, or off duty, keeping operations fully compliant and staffed.",
    highlights: [
      "Driver contact and license verification",
      "Shift and duty status tracking",
      "Linked directly to the driver mobile app",
    ],
  },
]

export default function ProductTourSection() {
  const [activeTourId, setActiveTourId] = useState("command-center")
  const shouldReduceMotion = useReducedMotion()

  const currentItem = TOUR_ITEMS.find((t) => t.id === activeTourId) || TOUR_ITEMS[0]
  const Icon = currentItem.icon

  return (
    <section id="product-tour" className="py-20 sm:py-28 bg-[#090D16] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full mb-4"
          >
            <span>GENUINE PRODUCT WALKTHROUGH</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            See the software that <span className="text-blue-400">runs the day.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Explore actual DriveOps interfaces. Designed for operational clarity, speed, and real transport businesses.
          </motion.p>
        </div>

        {/* Horizontal Navigation Pills */}
        <div className="flex justify-center mb-10 overflow-x-auto py-2 no-scrollbar">
          <div className="inline-flex items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl">
            {TOUR_ITEMS.map((item) => {
              const ItemIcon = item.icon
              const isSelected = activeTourId === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTourId(item.id)}
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <ItemIcon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Active Product Screen Showcase */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: Product Screenshot */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border border-slate-800 overflow-hidden shadow-xl bg-slate-900"
                >
                  {/* Mock Window Topbar */}
                  <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800 text-[10px] font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-700" />
                      <span className="w-2 h-2 rounded-full bg-slate-700" />
                      <span className="w-2 h-2 rounded-full bg-slate-700" />
                      <span className="ml-2">ops.driveops.in / {currentItem.id}</span>
                    </div>
                    <span className="text-blue-400">DriveOps v4.2</span>
                  </div>

                  <img
                    src={currentItem.image}
                    alt={currentItem.label}
                    className="w-full h-auto object-cover max-h-[520px] opacity-95"
                    loading="lazy"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Narrative / Problem Solved */}
            <div className="lg:col-span-4 order-1 lg:order-2 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-blue-400">SCREEN {currentItem.step}</span>
                <span className="text-slate-600">•</span>
                <span className="text-xs font-semibold text-slate-400">{currentItem.label}</span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white leading-tight">
                {currentItem.headline}
              </h3>

              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  OPERATIONAL PROBLEM SOLVED
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentItem.problemSolved}
                </p>
              </div>

              <div className="space-y-2 pt-1 text-xs text-slate-300 font-medium">
                {currentItem.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="https://driveops.chatserve.in/signup"
                  className="gradient-accent text-white px-5 py-2.5 rounded-xl font-bold text-xs inline-flex items-center gap-1.5 shadow-sm hover:opacity-95 transition-all"
                >
                  <span>Start with {currentItem.label}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
