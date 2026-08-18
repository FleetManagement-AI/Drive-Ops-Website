import React from "react"
import { motion } from "framer-motion"
import { financialMetrics } from "@/data/financialData"

interface ExpenseBreakdownProps {
  activeExpenseId?: string | null
  onHoverExpense?: (id: string | null) => void
}

export const ExpenseBreakdown: React.FC<ExpenseBreakdownProps> = ({
  activeExpenseId,
  onHoverExpense,
}) => {
  const { expenseBreakdown } = financialMetrics
  const totalExpenses = financialMetrics.kpis.expenses.formatted

  // Donut SVG parameters
  const cx = 60
  const cy = 60
  const r = 42
  const strokeWidth = 14
  const circ = 2 * Math.PI * r // ~263.89
  const gap = 3 // gap in px between segments

  let accumulated = 0
  const segments = expenseBreakdown.map((item) => {
    const dashLength = (item.percentage / 100) * circ - gap
    const offset = circ - accumulated + circ * 0.25 // start from top (-90 deg)
    accumulated += (item.percentage / 100) * circ
    return {
      ...item,
      dashLength: Math.max(0, dashLength),
      offset,
    }
  })

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-xs h-full flex flex-col justify-between">
      {/* Title */}
      <h3 className="text-xs sm:text-sm font-bold font-heading text-slate-800 tracking-tight mb-3">
        Expense Breakdown
      </h3>

      {/* Donut Chart and Legend Container */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center my-auto">
        {/* Donut Chart */}
        <div className="relative shrink-0 w-[120px] h-[120px] sm:w-[130px] sm:h-[130px]">
          <svg viewBox="0 0 120 120" className="w-full h-full transform -rotate-90">
            {/* Background track */}
            <circle
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke="#F1F5F9"
              strokeWidth={strokeWidth}
            />

            {/* Segments */}
            {segments.map((seg) => {
              const isSelected = activeExpenseId === seg.id
              const isAnySelected = Boolean(activeExpenseId)
              const opacity = !isAnySelected || isSelected ? 1 : 0.35
              const currentStrokeWidth = isSelected ? strokeWidth + 2 : strokeWidth

              return (
                <circle
                  key={seg.id}
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth={currentStrokeWidth}
                  strokeDasharray={`${seg.dashLength} ${circ - seg.dashLength}`}
                  strokeDashoffset={seg.offset}
                  strokeLinecap="round"
                  className="transition-all duration-200 cursor-pointer"
                  style={{ opacity }}
                  onMouseEnter={() => onHoverExpense?.(seg.id)}
                  onMouseLeave={() => onHoverExpense?.(null)}
                />
              )
            })}
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <span className="text-xs sm:text-sm font-extrabold font-heading text-slate-900 leading-tight">
              {totalExpenses}
            </span>
            <span className="text-[9px] text-slate-400 font-medium">Total Expenses</span>
          </div>
        </div>

        {/* Legend List */}
        <div className="flex flex-col gap-2 w-full max-w-[210px]">
          {expenseBreakdown.map((item) => {
            const isSelected = activeExpenseId === item.id
            const isAnySelected = Boolean(activeExpenseId)
            const opacity = !isAnySelected || isSelected ? 1 : 0.45

            return (
              <div
                key={item.id}
                onMouseEnter={() => onHoverExpense?.(item.id)}
                onMouseLeave={() => onHoverExpense?.(null)}
                className={`flex items-center justify-between p-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                  isSelected ? "bg-slate-50 font-semibold" : "hover:bg-slate-50/70"
                }`}
                style={{ opacity }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-slate-600 text-[11px] truncate">{item.name}</span>
                </div>
                <div className="flex items-center gap-2 pl-2">
                  <span className="font-semibold text-slate-800 text-[11px]">
                    {item.formatted}
                  </span>
                  <span className="text-[10px] text-slate-400 w-6 text-right font-medium">
                    {item.percentage}%
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
