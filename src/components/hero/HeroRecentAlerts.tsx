import React from "react"
import { Wrench, AlertTriangle, Fuel, ChevronRight } from "lucide-react"

const alertsData = [
  {
    id: 1,
    title: "Maintenance due for KL07 AB 1234",
    time: "2h ago",
    icon: Wrench,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50/70 border-amber-100",
  },
  {
    id: 2,
    title: "Trip delay on MH12 XY 9876",
    time: "3h ago",
    icon: AlertTriangle,
    iconColor: "text-rose-600",
    bgColor: "bg-rose-50/70 border-rose-100",
  },
  {
    id: 3,
    title: "Low fuel alert on KA05 MN 5678",
    time: "5h ago",
    icon: Fuel,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50/70 border-blue-100",
  },
]

export const HeroRecentAlerts: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-150/80 p-3 flex flex-col justify-between shadow-xs h-full">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="text-xs font-bold text-slate-800">Recent Alerts</h4>
        <button
          type="button"
          className="text-[10px] font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-0.5 transition-colors cursor-pointer"
        >
          <span>View All</span>
          <ChevronRight className="w-2.5 h-2.5" />
        </button>
      </div>

      {/* Alert List */}
      <div className="space-y-1.5 pt-2">
        {alertsData.map((alert) => {
          const Icon = alert.icon
          return (
            <div
              key={alert.id}
              className={`p-2 rounded-lg border ${alert.bgColor} flex items-center justify-between gap-2 text-[10px]`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className="p-1 rounded bg-white shadow-2xs shrink-0">
                  <Icon className={`w-3 h-3 ${alert.iconColor}`} />
                </div>
                <span className="font-medium text-slate-800 truncate">
                  {alert.title}
                </span>
              </div>
              <span className="text-[9px] text-slate-400 font-mono shrink-0">
                {alert.time}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
