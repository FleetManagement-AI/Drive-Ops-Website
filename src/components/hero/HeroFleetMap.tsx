import React from "react"
import { ChevronRight } from "lucide-react"
import FleetTrackingMap from "@/components/FleetTrackingMap"

export const HeroFleetMap: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-150/80 p-3 flex flex-col justify-between shadow-xs relative overflow-hidden h-full min-h-[220px]">
      {/* Map Header */}
      <div className="flex items-center justify-between z-10 pb-2 border-b border-slate-100">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <h4 className="text-xs font-bold text-slate-800">Live Fleet Tracking</h4>
        </div>
        <button
          type="button"
          className="text-[10px] font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-0.5 transition-colors cursor-pointer"
        >
          <span>View All Trips</span>
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* Map Canvas Visual Area */}
      <div className="relative flex-1 w-full min-h-[170px] rounded-lg mt-2 overflow-hidden border border-slate-100/90 flex items-center justify-center">
        <FleetTrackingMap />
      </div>
    </div>
  )
}

export default HeroFleetMap
