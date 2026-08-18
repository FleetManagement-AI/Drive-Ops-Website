import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  Fuel, 
  Users, 
  Wrench, 
  FileText, 
  IndianRupee, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react"
import { financialMetrics } from "@/data/financialData"

interface ProfitFlowVisualizationProps {
  activeExpenseId?: string | null
  onHoverExpense?: (id: string | null) => void
}

export const ProfitFlowVisualization: React.FC<ProfitFlowVisualizationProps> = ({
  activeExpenseId,
  onHoverExpense,
}) => {
  const { kpis, expenseBreakdown } = financialMetrics

  const getExpenseIcon = (id: string) => {
    switch (id) {
      case "fuel":
        return <Fuel className="w-4 h-4 text-amber-600" />
      case "payroll":
        return <Users className="w-4 h-4 text-amber-600" />
      case "maintenance":
        return <Wrench className="w-4 h-4 text-amber-600" />
      case "other":
        return <FileText className="w-4 h-4 text-amber-600" />
      default:
        return <IndianRupee className="w-4 h-4 text-amber-600" />
    }
  }

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xs relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute -top-10 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Flow Grid */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
        
        {/* 1. REVENUE NODE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[220px] shrink-0 bg-emerald-50/40 border-2 border-emerald-400/60 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-xs relative group"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-100/90 text-emerald-700 flex items-center justify-center font-bold text-lg shrink-0 border border-emerald-300/50 shadow-xs">
            <IndianRupee className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <div className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">
              REVENUE
            </div>
            <div className="text-base sm:text-xl font-black font-heading text-slate-900 tracking-tight">
              {kpis.revenue.formatted}
            </div>
          </div>
        </motion.div>

        {/* 2. MIDDLE SVG CONNECTOR / DESKTOP FLOW LINES */}
        <div className="hidden lg:block relative flex-1 h-[170px] max-w-[560px] mx-2">
          <svg
            viewBox="0 0 560 170"
            className="w-full h-full overflow-visible pointer-events-none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="flowRevGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8" />
              </linearGradient>

              <linearGradient id="flowProfitGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#10B981" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
              </linearGradient>

              <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Left Flow Lines: Revenue (x=0, y=85) to 4 expenses */}
            {/* Top strand to Fuel (y=20) */}
            <motion.path
              d="M 0 85 C 40 85, 50 22, 90 22"
              fill="none"
              stroke="#10B981"
              strokeWidth={activeExpenseId === "fuel" ? "3" : "1.8"}
              strokeDasharray={activeExpenseId === "fuel" ? "none" : "4 3"}
              strokeOpacity={!activeExpenseId || activeExpenseId === "fuel" ? 0.85 : 0.2}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />

            {/* Upper middle strand to Payroll (y=62) */}
            <motion.path
              d="M 0 85 C 40 85, 50 64, 90 64"
              fill="none"
              stroke="#10B981"
              strokeWidth={activeExpenseId === "payroll" ? "3" : "1.8"}
              strokeDasharray={activeExpenseId === "payroll" ? "none" : "4 3"}
              strokeOpacity={!activeExpenseId || activeExpenseId === "payroll" ? 0.85 : 0.2}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
            />

            {/* Lower middle strand to Maintenance (y=106) */}
            <motion.path
              d="M 0 85 C 40 85, 50 106, 90 106"
              fill="none"
              stroke="#10B981"
              strokeWidth={activeExpenseId === "maintenance" ? "3" : "1.8"}
              strokeDasharray={activeExpenseId === "maintenance" ? "none" : "4 3"}
              strokeOpacity={!activeExpenseId || activeExpenseId === "maintenance" ? 0.85 : 0.2}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            />

            {/* Bottom strand to Other Expenses (y=148) */}
            <motion.path
              d="M 0 85 C 40 85, 50 148, 90 148"
              fill="none"
              stroke="#10B981"
              strokeWidth={activeExpenseId === "other" ? "3" : "1.8"}
              strokeDasharray={activeExpenseId === "other" ? "none" : "4 3"}
              strokeOpacity={!activeExpenseId || activeExpenseId === "other" ? 0.85 : 0.2}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            />

            {/* Right Flow Lines: 4 expenses converging to Net Profit (x=560, y=85) */}
            {/* From Fuel (x=470, y=22) */}
            <motion.path
              d="M 470 22 C 510 22, 520 85, 560 85"
              fill="none"
              stroke="#10B981"
              strokeWidth={activeExpenseId === "fuel" ? "3" : "1.8"}
              strokeDasharray={activeExpenseId === "fuel" ? "none" : "4 3"}
              strokeOpacity={!activeExpenseId || activeExpenseId === "fuel" ? 0.85 : 0.2}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />

            {/* From Payroll (x=470, y=64) */}
            <motion.path
              d="M 470 64 C 510 64, 520 85, 560 85"
              fill="none"
              stroke="#10B981"
              strokeWidth={activeExpenseId === "payroll" ? "3" : "1.8"}
              strokeDasharray={activeExpenseId === "payroll" ? "none" : "4 3"}
              strokeOpacity={!activeExpenseId || activeExpenseId === "payroll" ? 0.85 : 0.2}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
            />

            {/* From Maintenance (x=470, y=106) */}
            <motion.path
              d="M 470 106 C 510 106, 520 85, 560 85"
              fill="none"
              stroke="#10B981"
              strokeWidth={activeExpenseId === "maintenance" ? "3" : "1.8"}
              strokeDasharray={activeExpenseId === "maintenance" ? "none" : "4 3"}
              strokeOpacity={!activeExpenseId || activeExpenseId === "maintenance" ? 0.85 : 0.2}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            />

            {/* From Other Expenses (x=470, y=148) */}
            <motion.path
              d="M 470 148 C 510 148, 520 85, 560 85"
              fill="none"
              stroke="#10B981"
              strokeWidth={activeExpenseId === "other" ? "3" : "1.8"}
              strokeDasharray={activeExpenseId === "other" ? "none" : "4 3"}
              strokeOpacity={!activeExpenseId || activeExpenseId === "other" ? 0.85 : 0.2}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            />
          </svg>

          {/* Centered Expense Nodes Container on Desktop */}
          <div className="absolute inset-0 flex flex-col justify-between py-1 px-[90px] pointer-events-auto">
            {expenseBreakdown.map((item) => {
              const isSelected = activeExpenseId === item.id
              const isAnySelected = Boolean(activeExpenseId)
              const opacity = !isAnySelected || isSelected ? 1 : 0.4

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => onHoverExpense?.(item.id)}
                  onMouseLeave={() => onHoverExpense?.(null)}
                  className={`flex items-center justify-between px-3 py-1.5 rounded-xl border transition-all duration-200 cursor-pointer bg-white/90 backdrop-blur-xs ${
                    isSelected
                      ? "border-amber-400 bg-amber-50/50 shadow-sm scale-[1.02]"
                      : "border-amber-200/80 hover:border-amber-300"
                  }`}
                  style={{ opacity }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-amber-50 flex items-center justify-center">
                      {getExpenseIcon(item.id)}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wide text-amber-800">
                      {item.flowLabel}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-mono text-slate-800">
                      {item.formatted}
                    </span>
                    <span className="text-[10px] font-semibold text-amber-700 bg-amber-100/60 px-1.5 py-0.2 rounded">
                      {item.percentage}%
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 3. MOBILE EXPENSE CARDS (Stacked for small viewports) */}
        <div className="grid grid-cols-2 gap-2.5 w-full lg:hidden">
          {expenseBreakdown.map((item) => {
            const isSelected = activeExpenseId === item.id

            return (
              <div
                key={item.id}
                onClick={() => onHoverExpense?.(isSelected ? null : item.id)}
                className={`p-3 rounded-xl border transition-all cursor-pointer bg-white ${
                  isSelected
                    ? "border-amber-400 bg-amber-50/50 shadow-xs"
                    : "border-amber-200/70"
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-5 h-5 rounded bg-amber-50 flex items-center justify-center">
                    {getExpenseIcon(item.id)}
                  </div>
                  <span className="text-[9px] font-extrabold uppercase tracking-wide text-amber-800 truncate">
                    {item.flowLabel}
                  </span>
                </div>
                <div className="text-xs font-bold font-mono text-slate-900">{item.formatted}</div>
                <div className="text-[10px] text-amber-600 font-semibold">{item.percentage}%</div>
              </div>
            )
          })}
        </div>

        {/* 4. NET PROFIT NODE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[230px] shrink-0 bg-emerald-50/60 border-2 border-emerald-500 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 shadow-sm relative group overflow-hidden"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
            <IndianRupee className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-emerald-800">
              NET PROFIT
            </div>
            <div className="text-base sm:text-xl font-black font-heading text-slate-900 tracking-tight">
              {kpis.profit.formatted}
            </div>
            <div className="text-[10px] sm:text-[11px] font-bold text-emerald-700 mt-0.5">
              {kpis.profit.margin} Margin
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
