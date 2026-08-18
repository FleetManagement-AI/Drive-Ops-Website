import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { MapPin, Navigation, Car, ChevronRight } from "lucide-react"

export const HeroFleetMap: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

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
      <div className="relative flex-1 w-full min-h-[170px] bg-slate-50/60 rounded-lg mt-2 overflow-hidden border border-slate-100/90">
        {/* Subtle Map Background Grid & Secondary Roads */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Arterial Road Grid */}
          <line x1="0" y1="45" x2="100%" y2="45" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="0" y1="110" x2="100%" y2="110" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="0" y1="150" x2="100%" y2="150" stroke="#CBD5E1" strokeWidth="1.2" strokeDasharray="4 4" />
          <line x1="80" y1="0" x2="80" y2="100%" stroke="#E2E8F0" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="100%" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="320" y1="0" x2="320" y2="100%" stroke="#E2E8F0" strokeWidth="1" />

          {/* Abstract City Zone Polygons */}
          <rect x="25" y="20" width="70" height="40" rx="6" fill="#3B82F6" fillOpacity="0.04" />
          <rect x="180" y="70" width="90" height="50" rx="6" fill="#10B981" fillOpacity="0.04" />
          <rect x="260" y="20" width="80" height="45" rx="6" fill="#6366F1" fillOpacity="0.04" />
        </svg>

        {/* Primary Active Live Routes (SVG Curves) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 400 180"
          preserveAspectRatio="none"
        >
          {/* Route 1: Blue Active Express Route */}
          <motion.path
            d="M 30,135 C 70,60 140,110 220,55 S 330,120 370,50"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 1.2, ease: "easeOut" }}
          />

          {/* Route 2: Emerald Secondary Feeder Route */}
          <motion.path
            d="M 50,45 C 130,50 160,140 280,135 S 350,140 370,120"
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: shouldReduceMotion ? 0 : 1.4, delay: 0.2, ease: "easeOut" }}
          />
        </svg>

        {/* Origin / Depot Marker A */}
        <div className="absolute left-[20px] bottom-[30px] flex items-center gap-1 z-10">
          <div className="relative">
            <span className="absolute -inset-1 rounded-full bg-blue-500/20 animate-ping" />
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
              <MapPin className="w-3.5 h-3.5 fill-current" />
            </div>
          </div>
        </div>

        {/* Waypoint Marker B (Middle Hub) */}
        <div className="absolute left-[52%] top-[24%] flex items-center gap-1 z-10">
          <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-sm">
            <Navigation className="w-2.5 h-2.5 fill-current" />
          </div>
        </div>

        {/* Destination Marker C */}
        <div className="absolute right-[20px] top-[38px] flex items-center gap-1 z-10">
          <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md">
            <MapPin className="w-3.5 h-3.5 fill-current" />
          </div>
        </div>

        {/* Vehicle Marker 1: KA-01-A-4839 (Blue Car on Route 1) */}
        <motion.div
          className="absolute z-20 flex items-center gap-1 bg-white border border-blue-200 text-blue-900 px-1.5 py-0.5 rounded-full shadow-md text-[8px] font-bold select-none cursor-default"
          initial={{ x: 120, y: 75, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { opacity: 1, x: 130, y: 75 }
              : {
                  opacity: 1,
                  x: [90, 150, 210, 150, 90],
                  y: [80, 65, 52, 65, 80],
                }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0.3 }
              : {
                  duration: 14,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        >
          <div className="w-3 h-3 rounded-full bg-blue-600 text-white flex items-center justify-center">
            <Car className="w-2 h-2" />
          </div>
          <span>KA-01-4839</span>
          <span className="text-[7px] text-emerald-600 font-semibold">52 km/h</span>
        </motion.div>

        {/* Vehicle Marker 2: MH-12-Q-7711 (Green Car on Feeder) */}
        <motion.div
          className="absolute z-20 flex items-center gap-1 bg-white border border-emerald-200 text-emerald-900 px-1.5 py-0.5 rounded-full shadow-md text-[8px] font-bold select-none cursor-default"
          initial={{ x: 230, y: 120, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { opacity: 1, x: 240, y: 120 }
              : {
                  opacity: 1,
                  x: [210, 260, 310, 260, 210],
                  y: [120, 128, 122, 128, 120],
                }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0.3 }
              : {
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }
          }
        >
          <div className="w-3 h-3 rounded-full bg-emerald-600 text-white flex items-center justify-center">
            <Car className="w-2 h-2" />
          </div>
          <span>MH-12-7711</span>
        </motion.div>

        {/* Bottom Telemetry Pill */}
        <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-xs border border-slate-200/80 rounded-md px-2.5 py-1 flex items-center justify-between text-[9px] text-slate-600 z-10 shadow-2xs">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>42 Vehicles Online</span>
          </span>
          <span className="text-slate-400 font-mono text-[8px]">
            GPS Pulse: 0.4s
          </span>
        </div>
      </div>
    </div>
  )
}
