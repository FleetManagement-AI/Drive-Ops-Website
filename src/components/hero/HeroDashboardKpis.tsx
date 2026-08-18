import React from "react"
import { motion } from "framer-motion"
import { Car, Navigation, Fuel, Wrench, ChevronRight } from "lucide-react"

interface KpiItem {
  title: string
  value: string
  change: string
  isPositive?: boolean
  isLive?: boolean
  isAction?: boolean
  icon: React.ElementType
  iconColor: string
  iconBg: string
}

const kpiData: KpiItem[] = [
  {
    title: "Total Vehicles",
    value: "128",
    change: "+8 this month",
    isPositive: true,
    icon: Car,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50 border-blue-100",
  },
  {
    title: "Active Trips",
    value: "42",
    change: "Live tracking",
    isLive: true,
    icon: Navigation,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50 border-emerald-100",
  },
  {
    title: "Fuel Cost (MTD)",
    value: "₹ 82,430",
    change: "↑ 6.4%",
    isPositive: false,
    icon: Fuel,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50 border-indigo-100",
  },
  {
    title: "Maintenance Due",
    value: "8",
    change: "View all",
    isAction: true,
    icon: Wrench,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50 border-amber-100",
  },
]

export const HeroDashboardKpis: React.FC = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
      {kpiData.map((item, index) => {
        const Icon = item.icon
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 + index * 0.08 }}
            className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-150/80 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between gap-1 mb-1">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 truncate">
                {item.title}
              </span>
              <div className={`p-1.5 rounded-lg border ${item.iconBg} shrink-0`}>
                <Icon className={`w-3.5 h-3.5 ${item.iconColor}`} />
              </div>
            </div>

            <div className="space-y-0.5">
              <div className="text-base sm:text-lg font-heading font-extrabold text-slate-900 tracking-tight">
                {item.value}
              </div>

              <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-medium">
                {item.isLive ? (
                  <span className="text-emerald-600 flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {item.change}
                  </span>
                ) : item.isAction ? (
                  <span className="text-amber-600 hover:text-amber-700 flex items-center font-semibold cursor-pointer">
                    {item.change}
                    <ChevronRight className="w-2.5 h-2.5 ml-0.5" />
                  </span>
                ) : (
                  <span className={item.isPositive ? "text-emerald-600 font-semibold" : "text-slate-500"}>
                    {item.change}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
