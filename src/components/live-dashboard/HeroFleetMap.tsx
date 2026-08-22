import React from "react"
import FleetTrackingMap from "@/components/FleetTrackingMap"

export const HeroFleetMap: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm h-full flex flex-col overflow-hidden">
      {/* Card Header */}
      <div className="flex items-center justify-between px-3.5 pt-3 pb-2 flex-shrink-0">
        <span className="text-[12px] font-semibold text-slate-700">Live Fleet Tracking</span>
        <button className="text-[10px] text-indigo-600 font-medium border border-indigo-200 rounded-md px-2 py-0.5 hover:bg-indigo-50 transition-colors">
          View All Trips
        </button>
      </div>

      {/* Map Body */}
      <div className="flex-1 relative overflow-hidden mx-3 mb-3 rounded-lg min-h-[160px] flex items-center justify-center">
        <FleetTrackingMap />
      </div>
    </div>
  )
}

export default HeroFleetMap
