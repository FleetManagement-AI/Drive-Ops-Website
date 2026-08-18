import React from "react"
import { motion } from "framer-motion"
import { Building2, ChevronDown, Bell } from "lucide-react"
import { FinancialKpiCards } from "./FinancialKpiCards"
import { RevenueExpenseChart } from "./RevenueExpenseChart"
import { ExpenseBreakdown } from "./ExpenseBreakdown"
import { VehicleProfitability } from "./VehicleProfitability"

interface FinancialDashboardMockupProps {
  activeExpenseId?: string | null
  onHoverExpense?: (id: string | null) => void
}

export const FinancialDashboardMockup: React.FC<FinancialDashboardMockupProps> = ({
  activeExpenseId,
  onHoverExpense,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="w-full bg-[#F8FAFC] border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden"
    >
      {/* Dashboard Top Navigation Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white border-b border-slate-100 shrink-0 select-none">
        {/* Left: Brand & Workspace */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <img
            src="/logo/driveops-logo-blue-edited.png"
            alt="DriveOps"
            className="h-5 sm:h-5.5 w-auto"
            width="22"
            height="22"
          />
          <span className="font-heading text-xs sm:text-sm font-bold text-slate-900 tracking-tight flex items-center gap-1">
            Drive<span className="text-blue-600">Ops</span>
          </span>
          <span className="text-[10px] sm:text-[11px] font-semibold text-blue-600 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200/60 ml-1">
            Finance Hub
          </span>
        </div>

        {/* Right Controls: Depots, Alerts, Profile */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs">
          {/* Depot Selector */}
          <div className="flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-lg px-2.5 py-1 text-[11px] font-medium text-slate-700 transition-colors cursor-pointer">
            <Building2 className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden xs:inline">All Depots</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </div>

          {/* Notification Bell */}
          <div
            className="relative p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
            title="3 New Alerts"
          >
            <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-rose-500 text-white rounded-full text-[8.5px] font-bold flex items-center justify-center border-2 border-white">
              3
            </span>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-1 pl-1 cursor-pointer">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
              AD
            </div>
            <ChevronDown className="w-3 h-3 text-slate-400 hidden sm:block" />
          </div>
        </div>
      </div>

      {/* Dashboard Body Content */}
      <div className="p-3.5 sm:p-5 lg:p-6 space-y-4 sm:space-y-5">
        {/* 1. Top KPI Metric Cards */}
        <FinancialKpiCards />

        {/* 2. Middle Row: Main Chart (Left) + Expense Breakdown & Vehicle Profitability (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* Main Revenue vs Expense Chart */}
          <div className="lg:col-span-7">
            <RevenueExpenseChart />
          </div>

          {/* Expense Breakdown & Vehicle Profitability Widgets */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <ExpenseBreakdown
              activeExpenseId={activeExpenseId}
              onHoverExpense={onHoverExpense}
            />
            <VehicleProfitability />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
