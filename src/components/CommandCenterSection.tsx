import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Car, Navigation, Users, MapPin, AlertTriangle, ShieldCheck, Activity, Bell } from "lucide-react"

export default function CommandCenterSection() {
  const [pulse, setPulse] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setPulse((p) => (p + 1) % 100), 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="command-center" className="py-24 sm:py-36 bg-[#060A12] text-white border-t border-slate-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="px-5 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[1500px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">Command Center</p>
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Know what's happening<br />across your fleet.
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Live operational telemetry, active dispatches, driver duty status, and instant compliance signals in one central console.
          </p>
        </div>

        {/* Full-width Immersive Product Interface */}
        <div className="w-full bg-[#090D16] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-3.5 bg-[#060A12] border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-slate-800" />
              <span className="w-3 h-3 rounded-full bg-slate-800" />
              <span className="w-3 h-3 rounded-full bg-slate-800" />
              <span className="ml-4 text-xs font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                DriveOps Command Center v4.2
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-blue-400" /> Live Data Sync</span>
              <span className="flex items-center gap-1.5"><Bell className="w-3.5 h-3.5 text-amber-400" /> 2 Alerts</span>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Interactive Map Telemetry */}
            <div className="lg:col-span-8 bg-[#060A12] border border-slate-800 rounded-xl p-5 relative min-h-[380px] flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-center z-10">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-blue-400" /> Regional GPS Tracking
                  </h3>
                  <p className="text-[10px] text-slate-500">Live coordinates & active routes</p>
                </div>
                <span className="text-[10px] font-mono bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded border border-blue-500/20">
                  LAT: 10.0159° N, LON: 76.3419° E
                </span>
              </div>

              {/* Map Canvas Visual */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M 100 280 C 240 180 420 310 650 140" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="6 6" />
                <path d="M 150 120 C 300 250 500 120 720 280" fill="none" stroke="#10B981" strokeWidth="2.5" strokeDasharray="6 6" />
              </svg>

              {/* Moving Vehicle Markers */}
              <motion.div 
                className="absolute bg-blue-600 text-white px-2.5 py-1 rounded-md text-[10px] font-bold flex items-center gap-1.5 shadow-xl z-10"
                animate={{ x: [120, 280, 480, 620], y: [260, 200, 270, 150] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                <Car className="w-3 h-3" /> Innova KA-51-A-4839 (48 km/h)
              </motion.div>

              <motion.div 
                className="absolute bg-emerald-600 text-white px-2.5 py-1 rounded-md text-[10px] font-bold flex items-center gap-1.5 shadow-xl z-10"
                animate={{ x: [160, 320, 520, 700], y: [130, 220, 160, 270] }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              >
                <Car className="w-3 h-3" /> Ertiga DL-01-S-8822 (36 km/h)
              </motion.div>

              {/* Bottom Telemetry Bar */}
              <div className="z-10 bg-slate-900/90 border border-slate-800 p-3 rounded-lg flex flex-wrap justify-between items-center text-xs gap-3">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>38 Vehicles Active</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>3 In Maintenance</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  <span>1 Permit Alert</span>
                </div>
              </div>
            </div>

            {/* Right: Operational Panels */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* Active Queue Panel */}
              <div className="bg-[#060A12] border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                  <span className="text-xs font-bold text-slate-300">Dispatch Feed</span>
                  <span className="text-[10px] text-blue-400 font-mono">LIVE UPDATE</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg flex justify-between items-center text-xs">
                    <div>
                      <div className="font-bold text-white">#4829 · Airport Route</div>
                      <div className="text-[10px] text-slate-400">Driver: Mike Reynolds</div>
                    </div>
                    <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 font-bold text-[10px] rounded">En Route</span>
                  </div>
                  <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg flex justify-between items-center text-xs">
                    <div>
                      <div className="font-bold text-white">#4830 · Infopark Pickup</div>
                      <div className="text-[10px] text-slate-400">Driver: David Kumar</div>
                    </div>
                    <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 font-bold text-[10px] rounded">Allocated</span>
                  </div>
                </div>
              </div>

              {/* Compliance & Attention Alerts */}
              <div className="bg-[#060A12] border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                  <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400" /> Operational Attention
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-rose-500/10 border border-rose-500/20 text-rose-200 rounded-lg">
                    Vehicle KA-51-A-4839: Tax due in 2 days.
                  </div>
                  <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 text-amber-200 rounded-lg">
                    Weekly payroll cycle pending approval.
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
