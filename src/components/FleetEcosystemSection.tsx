import React, { useState, useRef } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ShieldCheck } from "lucide-react"
import { CAPABILITIES, CapabilityData } from "./ecosystem/ecosystemData"
import FleetCapabilityCard from "./ecosystem/FleetCapabilityCard"
import DriveOpsCentralHub from "./ecosystem/DriveOpsCentralHub"
import FleetProductPreview from "./ecosystem/FleetProductPreview"
import FleetBenefits from "./ecosystem/FleetBenefits"
import FleetCTA from "./ecosystem/FleetCTA"

export default function FleetEcosystemSection() {
  const [activeCapability, setActiveCapability] = useState<string>("fleet")
  const shouldReduceMotion = useReducedMotion()

  const leftCapabilities = CAPABILITIES.filter((c) => c.side === "left")
  const midCapabilities = CAPABILITIES.filter((c) => c.side === "mid")

  const fade = (delay: number) => ({
    initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 } as const,
    transition: { duration: 0.5, delay: shouldReduceMotion ? 0 : delay, ease: [0.16, 1, 0.3, 1] as const },
  })

  // Determine active item data
  const currentActive = CAPABILITIES.find((c) => c.id === activeCapability) || CAPABILITIES[0]

  return (
    <section
      id="ecosystem"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] border-b border-slate-200/60 overflow-hidden"
      aria-labelledby="ecosystem-heading"
    >
      {/* Background Ambient Radial Glow */}
      <div
        className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1520px] mx-auto space-y-12 sm:space-y-16">

        {/* ── 1. SECTION HEADER ── */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <motion.div
            {...fade(0)}
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-blue-700 bg-blue-50/90 border border-blue-200/80 px-3.5 py-1.5 rounded-full shadow-2xs"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" aria-hidden="true" />
            <span>ALL-IN-ONE FLEET MANAGEMENT</span>
          </motion.div>

          <motion.h2
            {...fade(0.06)}
            id="ecosystem-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight"
          >
            Everything you need to<br />
            <span className="gradient-text">run your fleet</span> efficiently
          </motion.h2>

          <motion.p
            {...fade(0.12)}
            className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto font-sans"
          >
            DriveOps brings all aspects of fleet management together in one platform
            so you can save time, reduce costs and stay in complete control.
          </motion.p>
        </div>

        {/* ── 2. MAIN ECOSYSTEM VISUALIZATION ── */}
        <div className="relative">
          {/* Desktop & Large Screen Layout (2-Zone / 3-Column Visual Canvas) */}
          <div className="hidden xl:grid grid-cols-12 gap-5 items-center">
            
            {/* Column 1: Left 4 Feature Cards (Col span 3) */}
            <div className="col-span-3 flex flex-col gap-3 z-10">
              {leftCapabilities.map((cap, i) => (
                <FleetCapabilityCard
                  key={cap.id}
                  capability={cap}
                  isActive={activeCapability === cap.id}
                  onClick={() => setActiveCapability(cap.id)}
                  side="left"
                  index={i}
                />
              ))}
            </div>

            {/* Column 2: Central DriveOps Hub + Middle 3 Feature Cards (Col span 4) */}
            <div className="col-span-4 relative flex items-center justify-between min-h-[490px] px-2 z-10">
              
              {/* SVG Connectors Overlay */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ overflow: "visible" }}
                aria-hidden="true"
              >
                {/* Left Card 0 (Fleet) -> Hub */}
                <path
                  d="M -15 65 C 20 65, 30 200, 75 220"
                  fill="none"
                  stroke={activeCapability === "fleet" ? "#3B82F6" : "#CBD5E1"}
                  strokeWidth={activeCapability === "fleet" ? 2 : 1.2}
                  strokeDasharray={activeCapability === "fleet" ? "none" : "4 3"}
                  strokeOpacity={activeCapability === "fleet" ? 0.9 : 0.45}
                />

                {/* Left Card 1 (Drivers) -> Hub */}
                <path
                  d="M -15 175 C 25 175, 40 220, 75 235"
                  fill="none"
                  stroke={activeCapability === "drivers" ? "#10B981" : "#CBD5E1"}
                  strokeWidth={activeCapability === "drivers" ? 2 : 1.2}
                  strokeDasharray={activeCapability === "drivers" ? "none" : "4 3"}
                  strokeOpacity={activeCapability === "drivers" ? 0.9 : 0.45}
                />

                {/* Left Card 2 (Trips) -> Hub */}
                <path
                  d="M -15 285 C 25 285, 40 260, 75 255"
                  fill="none"
                  stroke={activeCapability === "trips" ? "#A855F7" : "#CBD5E1"}
                  strokeWidth={activeCapability === "trips" ? 2 : 1.2}
                  strokeDasharray={activeCapability === "trips" ? "none" : "4 3"}
                  strokeOpacity={activeCapability === "trips" ? 0.9 : 0.45}
                />

                {/* Left Card 3 (Maintenance) -> Hub */}
                <path
                  d="M -15 395 C 20 395, 30 290, 75 270"
                  fill="none"
                  stroke={activeCapability === "maintenance" ? "#F59E0B" : "#CBD5E1"}
                  strokeWidth={activeCapability === "maintenance" ? 2 : 1.2}
                  strokeDasharray={activeCapability === "maintenance" ? "none" : "4 3"}
                  strokeOpacity={activeCapability === "maintenance" ? 0.9 : 0.45}
                />

                {/* Hub -> Mid Card 0 (Fuel) */}
                <path
                  d="M 125 220 C 150 200, 160 90, 195 90"
                  fill="none"
                  stroke={activeCapability === "fuel" ? "#059669" : "#CBD5E1"}
                  strokeWidth={activeCapability === "fuel" ? 2 : 1.2}
                  strokeDasharray={activeCapability === "fuel" ? "none" : "4 3"}
                  strokeOpacity={activeCapability === "fuel" ? 0.9 : 0.45}
                />

                {/* Hub -> Mid Card 1 (Expenses) */}
                <path
                  d="M 125 245 C 150 245, 165 245, 195 245"
                  fill="none"
                  stroke={activeCapability === "expenses" ? "#D97706" : "#CBD5E1"}
                  strokeWidth={activeCapability === "expenses" ? 2 : 1.2}
                  strokeDasharray={activeCapability === "expenses" ? "none" : "4 3"}
                  strokeOpacity={activeCapability === "expenses" ? 0.9 : 0.45}
                />

                {/* Hub -> Mid Card 2 (Reports) */}
                <path
                  d="M 125 270 C 150 290, 160 400, 195 400"
                  fill="none"
                  stroke={activeCapability === "reports" ? "#6366F1" : "#CBD5E1"}
                  strokeWidth={activeCapability === "reports" ? 2 : 1.2}
                  strokeDasharray={activeCapability === "reports" ? "none" : "4 3"}
                  strokeOpacity={activeCapability === "reports" ? 0.9 : 0.45}
                />

                {/* Connection Line from Right side of Mid-area directly to Product UI Preview */}
                <path
                  d="M 395 245 C 415 245, 420 245, 435 245"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth={1.8}
                  strokeDasharray="4 3"
                  strokeOpacity={0.65}
                />
                <circle cx="435" cy="245" r="3" fill="#3B82F6" opacity={0.8} />
              </svg>

              {/* Central DriveOps Core Hub Node */}
              <div className="w-[120px] flex justify-center shrink-0">
                <DriveOpsCentralHub activeCapabilityId={activeCapability} />
              </div>

              {/* Middle 3 Feature Cards */}
              <div className="w-[200px] flex flex-col gap-4.5 shrink-0 z-10">
                {midCapabilities.map((cap, i) => (
                  <FleetCapabilityCard
                    key={cap.id}
                    capability={cap}
                    isActive={activeCapability === cap.id}
                    onClick={() => setActiveCapability(cap.id)}
                    side="mid"
                    index={i + 4}
                  />
                ))}
              </div>

            </div>

            {/* Column 3: Live Product UI Preview (Col span 5) */}
            <div className="col-span-5 relative z-10 pl-2">
              <FleetProductPreview activeCapability={activeCapability} />
            </div>

          </div>

          {/* Mobile & Tablet Responsive Layout (< 1280px) */}
          <div className="xl:hidden space-y-6">
            {/* Center Node on Mobile */}
            <div className="flex justify-center py-2">
              <DriveOpsCentralHub activeCapabilityId={activeCapability} />
            </div>

            {/* Horizontal Scroll / Grid of Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {CAPABILITIES.map((cap, i) => (
                <FleetCapabilityCard
                  key={cap.id}
                  capability={cap}
                  isActive={activeCapability === cap.id}
                  onClick={() => setActiveCapability(cap.id)}
                  side="left"
                  index={i}
                />
              ))}
            </div>

            {/* Live Product Preview */}
            <div className="pt-2">
              <FleetProductPreview activeCapability={activeCapability} />
            </div>
          </div>
        </div>

        {/* ── 3. FOUR BENEFIT CARDS HORIZONTAL STRIP ── */}
        <FleetBenefits />

        {/* ── 4. BOTTOM FULL-WIDTH CTA STRIP ── */}
        <FleetCTA />

      </div>
    </section>
  )
}
