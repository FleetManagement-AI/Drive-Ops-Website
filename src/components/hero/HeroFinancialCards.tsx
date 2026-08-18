import React from "react"
import { ChevronDown, ArrowUpRight, ArrowDownRight } from "lucide-react"

interface FinanceCardProps {
  title: string
  amount: string
  change: string
  isPositive: boolean
  sparklinePath: string
  gradientId: string
  strokeColor: string
  fillColor: string
}

const financeCards: FinanceCardProps[] = [
  {
    title: "Fuel Expenses",
    amount: "₹ 82,430",
    change: "↑ 6.4% vs last month",
    isPositive: false, // Fuel increase is cost
    sparklinePath: "M 0,22 Q 25,28 50,15 T 100,18 T 150,8 T 200,4",
    gradientId: "fuelGrad",
    strokeColor: "#3B82F6",
    fillColor: "#3B82F6",
  },
  {
    title: "Maintenance Cost",
    amount: "₹ 34,280",
    change: "↓ 4.7% vs last month",
    isPositive: true, // Maintenance cost reduced
    sparklinePath: "M 0,10 Q 25,6 50,18 T 100,12 T 150,22 T 200,16",
    gradientId: "maintGrad",
    strokeColor: "#6366F1",
    fillColor: "#6366F1",
  },
  {
    title: "Profit Overview",
    amount: "₹ 2,38,550",
    change: "↑ 12.4% vs last month",
    isPositive: true, // Profit increase
    sparklinePath: "M 0,24 Q 25,22 50,16 T 100,18 T 150,10 T 200,2",
    gradientId: "profitGrad",
    strokeColor: "#10B981",
    fillColor: "#10B981",
  },
]

export const HeroFinancialCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
      {financeCards.map((card) => {
        return (
          <div
            key={card.title}
            className="bg-white rounded-xl border border-slate-150/80 p-2.5 sm:p-3 flex flex-col justify-between shadow-xs relative overflow-hidden"
          >
            {/* Header: Title + Time Selector */}
            <div className="flex items-center justify-between text-[10px] pb-1 border-b border-slate-100">
              <span className="font-medium text-slate-500 truncate">{card.title}</span>
              <div className="flex items-center gap-0.5 text-slate-400 font-medium">
                <span>This Month</span>
                <ChevronDown className="w-2.5 h-2.5" />
              </div>
            </div>

            {/* Value & Indicator */}
            <div className="pt-2">
              <div className="text-sm sm:text-base font-heading font-extrabold text-slate-900 tracking-tight">
                {card.amount}
              </div>
              <div className="flex items-center gap-1 text-[9px] mt-0.5">
                {card.isPositive ? (
                  <span className="text-emerald-600 font-semibold flex items-center">
                    <ArrowUpRight className="w-2.5 h-2.5" />
                    {card.change}
                  </span>
                ) : (
                  <span className="text-rose-600 font-semibold flex items-center">
                    <ArrowDownRight className="w-2.5 h-2.5" />
                    {card.change}
                  </span>
                )}
              </div>
            </div>

            {/* SVG Sparkline Chart */}
            <div className="w-full h-8 mt-2 relative">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 200 30"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id={card.gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={card.fillColor} stopOpacity="0.25" />
                    <stop offset="100%" stopColor={card.fillColor} stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Area fill */}
                <path
                  d={`${card.sparklinePath} L 200,30 L 0,30 Z`}
                  fill={`url(#${card.gradientId})`}
                />
                {/* Line stroke */}
                <path
                  d={card.sparklinePath}
                  fill="none"
                  stroke={card.strokeColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        )
      })}
    </div>
  )
}
