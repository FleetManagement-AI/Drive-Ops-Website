import React from "react"

// Simple inline SVG sparkline
const Sparkline: React.FC<{ points: string; color: string; fill: string }> = ({ points, color, fill }) => (
  <svg viewBox="0 0 120 40" className="w-full h-10" preserveAspectRatio="none">
    <defs>
      <linearGradient id={`sg-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity="0.18"/>
        <stop offset="100%" stopColor={color} stopOpacity="0"/>
      </linearGradient>
    </defs>
    <path
      d={`${fill} L120 40 L0 40 Z`}
      fill={`url(#sg-${color.replace("#", "")})`}
    />
    <path d={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const fuelPoints   = "M0 28 L20 24 L40 30 L60 20 L80 22 L100 14 L120 10"
const fuelFill     = "M0 28 L20 24 L40 30 L60 20 L80 22 L100 14 L120 10"
const maintPoints  = "M0 18 L20 22 L40 20 L60 28 L80 24 L100 30 L120 32"
const maintFill    = "M0 18 L20 22 L40 20 L60 28 L80 24 L100 30 L120 32"
const profitPoints = "M0 32 L20 28 L40 30 L60 22 L80 18 L100 12 L120 8"
const profitFill   = "M0 32 L20 28 L40 30 L60 22 L80 18 L100 12 L120 8"

const cards = [
  {
    title: "Fuel Expenses",
    amount: "₹ 82,430",
    badge: "↑ 6.4% vs last month",
    badgeColor: "text-red-500",
    points: fuelPoints,
    fill: fuelFill,
    color: "#4f46e5",
  },
  {
    title: "Maintenance Cost",
    amount: "₹ 34,280",
    badge: "↓ 4.7% vs last month",
    badgeColor: "text-emerald-500",
    points: maintPoints,
    fill: maintFill,
    color: "#22c55e",
  },
  {
    title: "Profit Overview",
    amount: "₹ 2,38,550",
    badge: "↑ 12.4% vs last month",
    badgeColor: "text-emerald-500",
    points: profitPoints,
    fill: profitFill,
    color: "#22c55e",
  },
]

export const HeroFinancialCards: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
      {cards.map((card) => (
        <div key={card.title} className="bg-white rounded-xl border border-slate-100 shadow-sm p-3.5 flex flex-col gap-1.5">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-slate-500">{card.title}</span>
            <button className="flex items-center gap-0.5 text-[10px] text-slate-400">
              This Month
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                <path d="M2 3.5L4.5 6L7 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Amount */}
          <p className="text-[17px] font-bold text-slate-800 leading-tight">{card.amount}</p>

          {/* Badge */}
          <p className={`text-[10px] font-medium ${card.badgeColor}`}>{card.badge}</p>

          {/* Sparkline */}
          <div className="mt-1">
            <Sparkline points={card.points} fill={card.fill} color={card.color}/>
          </div>
        </div>
      ))}
    </div>
  )
}
