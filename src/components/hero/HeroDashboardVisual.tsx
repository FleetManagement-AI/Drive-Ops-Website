import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { HeroDashboardHeader } from "./HeroDashboardHeader"
import { HeroDashboardSidebar } from "./HeroDashboardSidebar"
import { HeroDashboardKpis } from "./HeroDashboardKpis"
import { HeroFleetMap } from "./HeroFleetMap"
import { HeroTripsOverview } from "./HeroTripsOverview"
import { HeroRecentAlerts } from "./HeroRecentAlerts"
import { HeroFinancialCards } from "./HeroFinancialCards"

export const HeroDashboardVisual: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-full bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-blue-900/10 overflow-hidden flex flex-col select-none relative z-10"
    >
      {/* 1. Header Bar */}
      <HeroDashboardHeader />

      {/* 2. Main Workspace (Sidebar + Dashboard Canvas) */}
      <div className="flex flex-1 min-h-0 bg-slate-50/40">
        {/* Left Navigation Sidebar (Desktop) */}
        <HeroDashboardSidebar />

        {/* Dashboard Content Grid */}
        <div className="flex-1 p-2.5 sm:p-3.5 space-y-2.5 sm:space-y-3 overflow-hidden">
          {/* Top Row: 4 KPI Cards */}
          <HeroDashboardKpis />

          {/* Middle Row: Live Map (Left) + Trips Overview & Alerts (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 sm:gap-3 items-stretch">
            {/* Live Fleet Map (approx 58% on desktop) */}
            <div className="lg:col-span-7 h-full">
              <HeroFleetMap />
            </div>

            {/* Right Column: Trips Overview & Alerts */}
            <div className="lg:col-span-5 flex flex-col gap-2.5 sm:gap-3 justify-between">
              <HeroTripsOverview />
              <HeroRecentAlerts />
            </div>
          </div>

          {/* Bottom Row: 3 Financial & Cost Trend Cards */}
          <HeroFinancialCards />
        </div>
      </div>
    </motion.div>
  )
}
export default HeroDashboardVisual
