import React from "react"
import { Bell, ChevronDown, Building2 } from "lucide-react"

export const HeroDashboardHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 bg-white border-b border-slate-100 shrink-0 select-none">
      {/* Brand & Workspace Name */}
      <div className="flex items-center gap-2">
        <img
          src="/logo/driveops-logo-blue-edited.png"
          alt="DriveOps"
          className="h-5 w-auto"
          width="20"
          height="20"
        />
        <span className="font-heading text-xs font-bold text-slate-800 tracking-tight flex items-center gap-1">
          Drive<span className="text-blue-600">Ops</span>
        </span>
        <span className="hidden sm:inline-block text-[10px] text-slate-400 font-medium px-1.5 py-0.5 rounded bg-slate-100/80 ml-1">
          Operations Hub
        </span>
      </div>

      {/* Right Controls: Depots, Alerts, Profile */}
      <div className="flex items-center gap-2 sm:gap-3 text-xs">
        {/* Depot Selector */}
        <div className="flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 rounded-lg px-2 sm:px-2.5 py-1 text-[11px] font-medium text-slate-700 transition-colors cursor-pointer">
          <Building2 className="w-3 h-3 text-slate-400" />
          <span className="hidden xs:inline">All Depots</span>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </div>

        {/* Notification Bell */}
        <div className="relative p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer" title="Notifications">
          <Bell className="w-3.5 h-3.5" />
          <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-rose-500 text-white rounded-full text-[9px] font-bold flex items-center justify-center border-2 border-white">
            3
          </span>
        </div>

        {/* User Profile Badge */}
        <div className="flex items-center gap-1.5 pl-1">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
            AD
          </div>
        </div>
      </div>
    </div>
  )
}
