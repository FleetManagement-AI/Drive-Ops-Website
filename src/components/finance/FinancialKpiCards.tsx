import React from "react"
import { motion } from "framer-motion"
import { TrendingUp, ArrowUpRight, ShieldCheck, Percent, ArrowUpDown } from "lucide-react"
import { financialMetrics } from "@/data/financialData"

export const FinancialKpiCards: React.FC = () => {
  const { revenue, expenses, profit, margin } = financialMetrics.kpis

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
      {/* 1. Revenue Card */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-slate-100 shadow-xs hover:border-slate-200 transition-all flex flex-col justify-between"
      >
        <div className="flex items-start justify-between">
          <span className="text-[11px] sm:text-xs font-semibold text-slate-500">{revenue.label}</span>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
          </div>
        </div>
        <div className="mt-2.5">
          <div className="text-base sm:text-xl font-bold font-heading text-slate-900 tracking-tight">
            {revenue.formatted}
          </div>
          <div className="flex items-center gap-1 mt-1 text-[10px] sm:text-[11px] text-emerald-600 font-medium">
            <span>↑ {revenue.change}</span>
            <span className="text-slate-400 font-normal">{revenue.period}</span>
          </div>
        </div>
      </motion.div>

      {/* 2. Total Expenses Card */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-slate-100 shadow-xs hover:border-slate-200 transition-all flex flex-col justify-between"
      >
        <div className="flex items-start justify-between">
          <span className="text-[11px] sm:text-xs font-semibold text-slate-500">{expenses.label}</span>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
            <ArrowUpDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
          </div>
        </div>
        <div className="mt-2.5">
          <div className="text-base sm:text-xl font-bold font-heading text-slate-900 tracking-tight">
            {expenses.formatted}
          </div>
          <div className="flex items-center gap-1 mt-1 text-[10px] sm:text-[11px] text-amber-600 font-medium">
            <span>↑ {expenses.change}</span>
            <span className="text-slate-400 font-normal">{expenses.period}</span>
          </div>
        </div>
      </motion.div>

      {/* 3. Net Profit Card — Strongest Visual Prominence */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border-2 border-emerald-500/40 shadow-sm bg-gradient-to-b from-emerald-50/30 to-transparent relative overflow-hidden transition-all flex flex-col justify-between"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] sm:text-xs font-bold text-slate-900">{profit.label}</span>
          </div>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
          </div>
        </div>
        <div className="mt-2.5">
          <div className="text-base sm:text-xl font-extrabold font-heading text-slate-900 tracking-tight">
            {profit.formatted}
          </div>
          <div className="flex items-center gap-1 mt-1 text-[10px] sm:text-[11px] text-emerald-600 font-bold">
            <span>↑ {profit.change}</span>
            <span className="text-slate-400 font-normal">{profit.period}</span>
          </div>
        </div>
      </motion.div>

      {/* 4. Profit Margin Card */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-slate-100 shadow-xs hover:border-slate-200 transition-all flex flex-col justify-between"
      >
        <div className="flex items-start justify-between">
          <span className="text-[11px] sm:text-xs font-semibold text-slate-500">{margin.label}</span>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
            <Percent className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
          </div>
        </div>
        <div className="mt-2.5">
          <div className="text-base sm:text-xl font-bold font-heading text-slate-900 tracking-tight">
            {margin.formatted}
          </div>
          <div className="flex items-center gap-1 mt-1 text-[10px] sm:text-[11px] text-emerald-600 font-medium">
            <span>↑ {margin.change}</span>
            <span className="text-slate-400 font-normal">{margin.period}</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
