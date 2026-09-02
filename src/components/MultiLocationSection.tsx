import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Building2, MapPin, CheckCircle2, Layers, ShieldCheck } from "lucide-react"

export default function MultiLocationSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/70 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-[10px] font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>MULTI-DEPOT ARCHITECTURE</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                One operation. <span className="text-blue-400">Multiple locations.</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Manage vehicles, drivers and daily operations across multiple branches and depots from one central workspace. Dispatch locally, oversee globally.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Scoped operations: Dispatchers manage their local depot queue</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Central management: Business owners view overall fleet activity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Vehicle & driver rebalancing across branches as demand shifts</span>
                </div>
              </div>
            </div>

            {/* Right Location Hierarchy Visual */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-4 space-y-2.5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>Branch Hierarchy</span>
                <span className="text-emerald-400 font-bold">3 Depots Active</span>
              </div>

              {[
                { name: "Central Headquarters (Kochi)", role: "Main Hub", vehicles: "22 Vehicles", status: "Primary" },
                { name: "Airport Depot (Nedumbassery)", role: "Transfer Hub", vehicles: "14 Vehicles", status: "Active" },
                { name: "Downtown Branch (MG Road)", role: "City Fleet", vehicles: "12 Vehicles", status: "Active" },
              ].map((depot) => (
                <div key={depot.name} className="p-2.5 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-200 text-xs">{depot.name}</p>
                      <p className="text-[10px] text-slate-500">{depot.role} • {depot.vehicles}</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {depot.status}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
