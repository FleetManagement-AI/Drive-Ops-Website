import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  LayoutDashboard,
  Car,
  Navigation,
  Users,
  CreditCard,
  Wrench,
  BarChart3,
  Settings,
  Search,
  Bell,
  ArrowUpRight,
  MapPin,
} from "lucide-react"
import FleetTrackingMap from "@/components/FleetTrackingMap"

interface WorkflowProductVisualProps {
  activeStep: string | null
}

export const WorkflowProductVisual: React.FC<WorkflowProductVisualProps> = ({
  activeStep,
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative w-full max-w-[1140px] mx-auto pt-6 pb-8 select-none overflow-hidden">
      {/* ========================================================
          1. BACKGROUND AMBIENT GLOW & BLUE CITY BACKGROUND
         ======================================================== */}
      <div
        className="absolute -top-20 sm:-top-28 lg:-top-36 -bottom-4 left-1/2 -translate-x-1/2 w-[1000px] sm:w-[1300px] lg:w-[1550px] max-w-none pointer-events-none -z-10 flex items-center justify-center"
        style={{
          maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
        }}
      >
        {/* Soft Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_75%_60%_at_50%_40%,rgba(37,99,235,0.12),transparent_75%)]" />

        {/* High-res Blue City Background Graphic */}
        <img
          src="/images/blue_city_bg.png"
          alt="DriveOps Connected City Skyline"
          className="w-full h-full object-contain object-top select-none opacity-95"
          loading="eager"
        />
      </div>

      {/* ========================================================
          2. CENTRAL TABLET / DESKTOP DASHBOARD MOCKUP
         ======================================================== */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto w-[92%] sm:w-[86%] lg:w-[82%] bg-slate-900 border-[6px] sm:border-[8px] border-slate-900 rounded-[24px] sm:rounded-[32px] shadow-2xl shadow-slate-900/20 overflow-hidden"
      >
        {/* Device Camera Dot */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-800 border border-slate-700/80 z-30 hidden sm:block" />

        {/* Dashboard Canvas */}
        <div className="bg-[#F8FAFC] text-slate-800 flex flex-col font-sans text-xs">
          
          {/* Top Bar inside Mockup */}
          <div className="flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 bg-white border-b border-slate-200/80">
            {/* Logo */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <img
                src="/logo/driveops-logo-blue-edited.png"
                alt="DriveOps"
                className="h-5 sm:h-5.5 w-auto object-contain"
                width="22"
                height="22"
              />
              <span className="font-heading font-black text-xs sm:text-sm text-slate-900 tracking-tight">
                Drive<span className="text-blue-600">Ops</span>
              </span>
            </div>

            {/* Search */}
            <div className="hidden sm:flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 rounded-lg px-2.5 py-1 text-[11px] text-slate-400 w-44 lg:w-56">
              <Search className="w-3 h-3 text-slate-400" />
              <span>Search...</span>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="relative p-1 rounded-md text-slate-500 hover:bg-slate-50 cursor-pointer">
                <Bell className="w-3.5 h-3.5" />
                <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-rose-500 rounded-full" />
              </div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center text-[9px] font-bold">
                AD
              </div>
            </div>
          </div>

          {/* Mockup Main Body: Sidebar + Content */}
          <div className="flex min-h-[300px] sm:min-h-[360px] lg:min-h-[400px]">
            
            {/* Left Sidebar */}
            <div className="w-16 sm:w-28 lg:w-32 bg-white border-r border-slate-200/70 p-2 sm:p-2.5 flex flex-col gap-1 shrink-0">
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-blue-50 text-blue-600 font-bold text-[10px] sm:text-[11px]">
                <LayoutDashboard className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden sm:inline">Dashboard</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 font-medium text-[10px] sm:text-[11px]">
                <Navigation className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                <span className="hidden sm:inline">Trips</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 font-medium text-[10px] sm:text-[11px]">
                <Car className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                <span className="hidden sm:inline">Vehicles</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 font-medium text-[10px] sm:text-[11px]">
                <Users className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                <span className="hidden sm:inline">Drivers</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 font-medium text-[10px] sm:text-[11px]">
                <CreditCard className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                <span className="hidden sm:inline">Expenses</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 font-medium text-[10px] sm:text-[11px]">
                <Wrench className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                <span className="hidden sm:inline">Maintenance</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 font-medium text-[10px] sm:text-[11px]">
                <BarChart3 className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                <span className="hidden sm:inline">Reports</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 font-medium text-[10px] sm:text-[11px] mt-auto">
                <Settings className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                <span className="hidden sm:inline">Settings</span>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-2.5 sm:p-4 space-y-3 overflow-hidden">
              
              {/* Heading */}
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-black text-xs sm:text-sm text-slate-900">
                  Dashboard
                </h4>
                <span className="text-[10px] font-semibold text-slate-400">
                  Live Operations
                </span>
              </div>

              {/* 4 KPI Stat Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                {/* Active Vehicles */}
                <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="text-[9px] sm:text-[10px] font-medium text-slate-500">Active Vehicles</div>
                  <div className="flex items-baseline justify-between mt-0.5">
                    <span className="font-heading font-black text-sm sm:text-base text-slate-900">86</span>
                    <span className="text-[8.5px] font-bold text-emerald-600 flex items-center bg-emerald-50 px-1 py-0.2 rounded">
                      <ArrowUpRight className="w-2.5 h-2.5" /> 18%
                    </span>
                  </div>
                </div>

                {/* Ongoing Trips */}
                <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="text-[9px] sm:text-[10px] font-medium text-slate-500">Ongoing Trips</div>
                  <div className="flex items-baseline justify-between mt-0.5">
                    <span className="font-heading font-black text-sm sm:text-base text-slate-900">24</span>
                    <span className="text-[8.5px] font-bold text-emerald-600 flex items-center bg-emerald-50 px-1 py-0.2 rounded">
                      <ArrowUpRight className="w-2.5 h-2.5" /> 12%
                    </span>
                  </div>
                </div>

                {/* Revenue Today */}
                <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="text-[9px] sm:text-[10px] font-medium text-slate-500">Revenue Today</div>
                  <div className="flex items-baseline justify-between mt-0.5">
                    <span className="font-heading font-black text-xs sm:text-sm text-slate-900">₹1,25,340</span>
                    <span className="text-[8.5px] font-bold text-emerald-600 flex items-center bg-emerald-50 px-1 py-0.2 rounded">
                      <ArrowUpRight className="w-2.5 h-2.5" /> 12.6%
                    </span>
                  </div>
                </div>

                {/* On Time Performance */}
                <div className="bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                  <div className="text-[9px] sm:text-[10px] font-medium text-slate-500">On Time Performance</div>
                  <div className="flex items-baseline justify-between mt-0.5">
                    <span className="font-heading font-black text-sm sm:text-base text-slate-900">96%</span>
                    <span className="text-[8.5px] font-bold text-emerald-600 flex items-center bg-emerald-50 px-1 py-0.2 rounded">
                      <ArrowUpRight className="w-2.5 h-2.5" /> 5%
                    </span>
                  </div>
                </div>
              </div>

              {/* Lower Section: Live Tracking Map (Left) + Recent Trips (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 items-stretch">
                
                {/* Live Tracking Map Card (Col 8) */}
                <div className="lg:col-span-8 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col justify-between overflow-hidden relative min-h-[160px] sm:min-h-[190px]">
                  <div className="flex items-center justify-between mb-1.5 z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-heading font-bold text-[11px] sm:text-xs text-slate-800">
                        Live Tracking
                      </span>
                    </div>
                    <span className="text-[9px] text-blue-600 font-semibold cursor-pointer">
                      View full map →
                    </span>
                  </div>

                  {/* Live Fleet Tracking Map Canvas */}
                  <div className="relative flex-1 w-full rounded-lg border border-slate-200/70 overflow-hidden min-h-[160px] sm:min-h-[190px] flex items-center justify-center bg-slate-50">
                    <FleetTrackingMap />
                  </div>
                </div>

                {/* Recent Trips Card (Col 4) */}
                <div className="lg:col-span-4 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col justify-between min-h-[160px]">
                  <div className="font-heading font-bold text-[11px] sm:text-xs text-slate-800 mb-1.5">
                    Recent Trips
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="font-mono text-[10px] font-bold text-slate-800">Trip #1247</span>
                      <span className="text-[8.5px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200">
                        En Route
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50/70 border border-slate-100">
                      <span className="font-mono text-[10px] font-semibold text-slate-700">Trip #1246</span>
                      <span className="text-[8.5px] font-semibold px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200">
                        Completed
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50/70 border border-slate-100">
                      <span className="font-mono text-[10px] font-semibold text-slate-700">Trip #1245</span>
                      <span className="text-[8.5px] font-semibold px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200">
                        Completed
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50/70 border border-slate-100">
                      <span className="font-mono text-[10px] font-semibold text-slate-700">Trip #1244</span>
                      <span className="text-[8.5px] font-semibold px-1.5 py-0.5 rounded bg-rose-50 text-rose-600 border border-rose-200">
                        Cancelled
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </motion.div>

      {/* ========================================================
          3. OVERLAPPING MOBILE PHONE MOCKUP (LEFT)
         ======================================================== */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -30, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
        className="absolute -left-2 sm:left-2 lg:left-4 bottom-0 sm:bottom-2 z-20 w-[130px] sm:w-[170px] lg:w-[200px] bg-slate-900 border-[5px] sm:border-[6px] border-slate-900 rounded-[28px] sm:rounded-[36px] shadow-2xl overflow-hidden"
      >
        {/* Dynamic Island Notch */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-2.5 sm:h-3 rounded-full bg-slate-950 z-30" />

        {/* Mobile Screen Content */}
        <div className="bg-[#EBF3F9] p-2 pt-5 sm:pt-6 flex flex-col justify-between aspect-[9/17] font-sans text-slate-800 relative">
          
          {/* Top Status Pill */}
          <div className="flex items-center justify-between z-10 px-1">
            <span className="text-[8px] font-mono text-slate-500 font-bold">09:41</span>
            <span className="bg-emerald-500/90 text-white font-bold text-[7.5px] px-1.5 py-0.2 rounded-full shadow-2xs">
              En Route
            </span>
          </div>

          {/* Live Fleet Tracking Map in Mobile Screen */}
          <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none">
            <div className="w-[180%] h-[180%] shrink-0 flex items-center justify-center scale-90 sm:scale-100">
              <FleetTrackingMap />
            </div>
          </div>

          {/* Bottom Float Card */}
          <div className="bg-white/95 backdrop-blur-xs p-2 rounded-xl border border-slate-200/90 shadow-md z-10 space-y-1 mt-auto">
            <div className="flex items-center justify-between">
              <span className="font-heading font-black text-[9px] text-slate-900">Trip #1247</span>
              <span className="text-[7.5px] font-bold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded">
                Live
              </span>
            </div>

            <div className="space-y-0.5 text-[8px] text-slate-600">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span className="truncate">Kochi Airport</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                <span className="truncate">MG Road</span>
              </div>
            </div>

            <div className="pt-0.5 border-t border-slate-100 flex items-center justify-between text-[8px] font-bold text-slate-800">
              <span className="text-slate-400 font-normal">ETA</span>
              <span className="text-blue-600">14 min</span>
            </div>
          </div>

        </div>
      </motion.div>

      {/* ========================================================
          4. OVERLAPPING SEAMLESS TAXI VEHICLE ILLUSTRATION (RIGHT)
         ======================================================== */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 40, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="absolute -right-2 sm:right-0 lg:right-2 -bottom-2 sm:-bottom-4 lg:-bottom-6 z-20 w-[170px] sm:w-[260px] lg:w-[350px] pointer-events-none"
      >
        {/* Soft Natural Contact Shadow Underneath */}
        <div className="absolute -bottom-1 sm:bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-5 sm:h-7 bg-slate-950/25 blur-md rounded-[100%] z-0" />

        {/* Ambient Blue Back-Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 bg-blue-500/10 blur-2xl rounded-full z-0 pointer-events-none" />

        {/* High-res Vehicle Image */}
        <img
          src="/images/taxi_car.png"
          alt="DriveOps Connected Fleet Taxi"
          className="relative z-10 w-full h-auto object-contain drop-shadow-md"
          loading="lazy"
          width="400"
          height="240"
        />
      </motion.div>
    </div>
  )
}
