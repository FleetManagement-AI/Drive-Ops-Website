import React from "react"
import { 
  LayoutDashboard, 
  Car, 
  Navigation, 
  Users, 
  Wrench, 
  Fuel, 
  CreditCard, 
  Bell, 
  BarChart3, 
  Settings 
} from "lucide-react"

const sidebarItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Vehicles", icon: Car, active: false },
  { label: "Trips", icon: Navigation, active: false },
  { label: "Drivers", icon: Users, active: false },
  { label: "Maintenance", icon: Wrench, active: false },
  { label: "Fuel", icon: Fuel, active: false },
  { label: "Expenses", icon: CreditCard, active: false },
  { label: "Alerts", icon: Bell, active: false },
  { label: "Reports", icon: BarChart3, active: false },
  { label: "Settings", icon: Settings, active: false },
]

export const HeroDashboardSidebar: React.FC = () => {
  return (
    <aside className="w-[108px] bg-slate-50/70 border-r border-slate-100 p-2 hidden md:flex flex-col gap-0.5 shrink-0 select-none">
      {sidebarItems.map((item) => {
        const Icon = item.icon
        return (
          <div
            key={item.label}
            className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[11px] font-medium transition-all cursor-pointer ${
              item.active
                ? "bg-blue-50 text-blue-600 font-semibold shadow-xs"
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/70"
            }`}
          >
            <Icon className={`w-3.5 h-3.5 shrink-0 ${item.active ? "text-blue-600" : "text-slate-400"}`} />
            <span className="truncate">{item.label}</span>
          </div>
        )
      })}
    </aside>
  )
}
