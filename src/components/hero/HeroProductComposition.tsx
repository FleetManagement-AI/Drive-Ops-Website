import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { CheckCircle2, WifiOff, MapPin, ArrowRight } from "lucide-react"
import dashboardImg from "@/assets/dashboard.jpg"

export const HeroProductComposition: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative w-full max-w-[700px] lg:max-w-none mx-auto">
      {/* Visual System Connector Badge: Office → Dispatch → Driver */}
      <div className="hidden sm:flex items-center justify-center gap-2 mb-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/90 text-white rounded-full text-[11px] font-semibold tracking-wide shadow-md">
          <span className="flex items-center gap-1 text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Office
          </span>
          <span className="text-slate-500">→</span>
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Dispatch
          </span>
          <span className="text-slate-500">→</span>
          <span className="flex items-center gap-1 text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Driver App
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative">
        {/* Ambient Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-emerald-500/10 rounded-3xl blur-2xl pointer-events-none" />

        {/* 1. Base Desktop View: Command Center & Dispatch Windows */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white rounded-2xl border border-slate-200/90 shadow-2xl shadow-slate-900/10 overflow-hidden"
        >
          {/* Mock Browser Header */}
          <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-850">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              </div>
              <span className="ml-3 text-[11px] font-mono text-slate-400">
                ops.driveops.in / command-center
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Shift Active
              </span>
            </div>
          </div>

          {/* Real Command Center Preview */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full overflow-hidden bg-slate-950">
            <img
              src={dashboardImg}
              alt="DriveOps Command Center"
              className="w-full h-full object-cover object-top opacity-95"
              loading="eager"
            />
            {/* Subtle overlay gradient to blend with the driver phone */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Operational Pulse Pill */}
          <div className="absolute bottom-3 left-4 hidden sm:flex items-center gap-3 px-3.5 py-2 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl text-white text-xs shadow-lg">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="font-semibold text-slate-200">14 Trips Today</span>
            </div>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Vehicles Assigned</span>
            </div>
          </div>
        </motion.div>

        {/* 2. Dispatch Quick Snippet Overlay (Top-Right / Mid-Right) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="hidden md:block absolute -top-5 -right-5 w-64 bg-white rounded-xl border border-slate-200 shadow-xl p-3 z-20"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Live Allocation
            </span>
            <span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 text-[9px] font-bold">
              Dispatch
            </span>
          </div>
          <div className="space-y-1.5 text-[11px]">
            <div className="flex justify-between items-center bg-slate-50 p-1.5 rounded-lg border border-slate-100">
              <div>
                <p className="font-bold text-slate-800 leading-tight">Trip #TR-4081</p>
                <p className="text-[9px] text-slate-500">Airport → Technopark</p>
              </div>
              <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 text-[9px] font-bold rounded">
                Assigned
              </span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
              <span>Driver: <b>Rajesh M.</b></span>
              <span>Innova • KA-01</span>
            </div>
          </div>
        </motion.div>

        {/* 3. Driver Mobile Phone Mockup (Front-Right Overlay) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="sm:absolute sm:-bottom-8 sm:-right-4 lg:-right-6 w-full sm:w-[240px] md:w-[260px] bg-slate-900 rounded-[28px] border-[5px] border-slate-800 shadow-2xl p-2.5 text-white z-30 mt-4 sm:mt-0"
        >
          {/* Phone Speaker & Camera Notch */}
          <div className="w-16 h-3.5 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-slate-900" />
          </div>

          {/* Mobile Screen Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold">
                R
              </div>
              <div>
                <p className="text-[11px] font-bold leading-tight">Rajesh M.</p>
                <p className="text-[9px] text-slate-400">Driver App</p>
              </div>
            </div>
            {/* Duty On Toggle */}
            <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[9px] font-bold border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              ON DUTY
            </div>
          </div>

          {/* Mobile Body: Today's Assigned Trip */}
          <div className="py-2.5 space-y-2">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-slate-400 font-medium">TODAY'S TRIP (1 of 3)</span>
              <span className="text-[9px] text-blue-400 font-mono font-bold">09:30 AM</span>
            </div>

            {/* Trip Execution Card */}
            <div className="bg-slate-800/90 rounded-xl p-2.5 border border-slate-700 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <div className="text-[10px] leading-tight">
                  <p className="text-slate-400 text-[8px] uppercase">Pickup Location</p>
                  <p className="font-semibold text-slate-100">Airport Terminal 2</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-3.5 flex justify-center">
                  <div className="w-1 h-3 bg-slate-600 rounded-full" />
                </div>
                <div className="text-[10px] leading-tight">
                  <p className="text-slate-400 text-[8px] uppercase">Drop Location</p>
                  <p className="font-semibold text-slate-100">Cyber City Tower A</p>
                </div>
              </div>

              {/* Offline Capable Indicator */}
              <div className="pt-1.5 border-t border-slate-700/80 flex items-center justify-between text-[9px] text-slate-400">
                <span className="flex items-center gap-1 text-slate-300">
                  <WifiOff className="w-2.5 h-2.5 text-amber-400" />
                  Offline ready
                </span>
                <span className="text-slate-300 font-mono">Toyota Innova</span>
              </div>

              {/* Start Trip CTA inside mobile */}
              <div className="w-full py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-[10px] font-bold text-center flex items-center justify-center gap-1 cursor-pointer">
                <span>Start Trip</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Mobile Bottom Bar */}
          <div className="text-[8px] text-center text-slate-500 pt-1 border-t border-slate-800/80 flex justify-around">
            <span className="text-blue-400 font-bold">Trips</span>
            <span>Duty Log</span>
            <span>Profile</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
export default HeroProductComposition
