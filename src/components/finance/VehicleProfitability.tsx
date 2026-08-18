import React from "react"
import { motion } from "framer-motion"
import { Truck, Car, Navigation, AlertTriangle, TrendingUp } from "lucide-react"
import { financialMetrics } from "@/data/financialData"

export const VehicleProfitability: React.FC = () => {
  const { profitableVehicles, highestCostVehicle } = financialMetrics

  const renderVehicleIcon = (type: string) => {
    switch (type) {
      case "truck":
        return (
          <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0">
            <Truck className="w-4 h-4 text-slate-700" />
          </div>
        )
      case "car":
        return (
          <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0">
            <Car className="w-4 h-4 text-slate-700" />
          </div>
        )
      default:
        return (
          <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-700 shrink-0">
            <Navigation className="w-4 h-4 text-slate-700" />
          </div>
        )
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
      {/* 1. Most Profitable Vehicles */}
      <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-xs flex flex-col justify-between">
        <h3 className="text-xs sm:text-sm font-bold font-heading text-slate-800 tracking-tight mb-3">
          Most Profitable Vehicles
        </h3>

        <div className="space-y-2.5">
          {profitableVehicles.map((veh) => (
            <div
              key={veh.reg}
              className="flex items-center justify-between p-2 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-slate-200 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                {renderVehicleIcon(veh.icon)}
                <div>
                  <div className="text-xs font-bold font-mono text-slate-800">{veh.reg}</div>
                  <div className="text-[10px] text-slate-400 font-medium">{veh.type}</div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs font-bold font-heading text-slate-900">{veh.profit}</div>
                <div className="text-[10px] font-semibold text-emerald-600 flex items-center justify-end gap-0.5">
                  <span>↑ {veh.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Highest Cost Vehicle */}
      <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-xs flex flex-col justify-between">
        <h3 className="text-xs sm:text-sm font-bold font-heading text-slate-800 tracking-tight mb-3">
          Highest Cost Vehicle
        </h3>

        <div className="p-3 rounded-xl bg-rose-50/30 border border-rose-100 flex flex-col justify-between h-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100/70 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold font-mono text-slate-900">
                {highestCostVehicle.reg}
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                {highestCostVehicle.model}
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-rose-100/80">
            <div className="text-[10px] font-medium text-slate-500">
              {highestCostVehicle.label}
            </div>
            <div className="flex items-baseline justify-between mt-1">
              <div className="text-base sm:text-lg font-bold font-heading text-rose-600">
                {highestCostVehicle.cost}
              </div>
              <div className="flex items-center gap-1 text-[10px] font-semibold text-rose-600 bg-rose-100/70 px-2 py-0.5 rounded-full">
                <span>vs fleet avg</span>
                <span>{highestCostVehicle.vsFleetAvg}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
