import React from "react"
import { ChevronDown } from "lucide-react"

export const HeroTripsOverview: React.FC = () => {
  // SVG Donut Calculations (Circumference = 2 * PI * r = 2 * PI * 34 ≈ 213.6)
  const total = 42
  const completed = 28 // 66.6% -> strokeDasharray ~ 142.3 213.6
  const ongoing = 10   // 23.8% -> strokeDasharray ~ 50.8 213.6
  const delayed = 4    // 9.5%  -> strokeDasharray ~ 20.3 213.6

  return (
    <div className="bg-white rounded-xl border border-slate-150/80 p-3 flex flex-col justify-between shadow-xs h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="text-xs font-bold text-slate-800">Trips Overview</h4>
        <div className="flex items-center gap-1 text-[10px] text-slate-500 font-medium cursor-pointer hover:text-slate-700">
          <span>This Month</span>
          <ChevronDown className="w-2.5 h-2.5" />
        </div>
      </div>

      {/* Body: Donut Chart & Legend */}
      <div className="flex items-center justify-between gap-3 pt-2">
        {/* SVG Donut Visual */}
        <div className="relative w-18 h-18 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 80 80">
            {/* Background ring */}
            <circle
              cx="40"
              cy="40"
              r="32"
              fill="transparent"
              stroke="#F1F5F9"
              strokeWidth="7"
            />
            {/* Completed segment (Emerald) */}
            <circle
              cx="40"
              cy="40"
              r="32"
              fill="transparent"
              stroke="#10B981"
              strokeWidth="7"
              strokeDasharray="134 201"
              strokeDashoffset="0"
              strokeLinecap="round"
            />
            {/* Ongoing segment (Blue) */}
            <circle
              cx="40"
              cy="40"
              r="32"
              fill="transparent"
              stroke="#3B82F6"
              strokeWidth="7"
              strokeDasharray="48 201"
              strokeDashoffset="-138"
              strokeLinecap="round"
            />
            {/* Delayed segment (Rose) */}
            <circle
              cx="40"
              cy="40"
              r="32"
              fill="transparent"
              stroke="#F43F5E"
              strokeWidth="7"
              strokeDasharray="19 201"
              strokeDashoffset="-188"
              strokeLinecap="round"
            />
          </svg>

          {/* Centered Number */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-sm sm:text-base font-heading font-extrabold text-slate-900 leading-none">
              {total}
            </span>
            <span className="text-[8px] text-slate-400 font-medium mt-0.5">Trips</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-1.5 text-[10px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>Completed</span>
            </div>
            <span className="font-bold text-slate-800">{completed} <span className="text-[9px] text-slate-400 font-normal">(66%)</span></span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-slate-600">
              <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
              <span>Ongoing</span>
            </div>
            <span className="font-bold text-slate-800">{ongoing} <span className="text-[9px] text-slate-400 font-normal">(24%)</span></span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-slate-600">
              <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
              <span>Delayed</span>
            </div>
            <span className="font-bold text-slate-800">{delayed} <span className="text-[9px] text-slate-400 font-normal">(10%)</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}
