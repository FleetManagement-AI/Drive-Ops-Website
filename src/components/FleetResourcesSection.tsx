import React, { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Car, Users, FileText, UploadCloud, CheckCircle2, ArrowRight } from "lucide-react"
import vehicleScreenshot from "@/assets/vehicle-management.jpg"
import driverScreenshot from "@/assets/driver-management.jpg"

export default function FleetResourcesSection() {
  const [activeTab, setActiveTab] = useState<"vehicles" | "drivers">("vehicles")
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200/70 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-4"
          >
            <span>OPERATIONAL RESOURCES</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Keep every vehicle and driver <span className="gradient-text">ready for the next trip.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Vehicles and drivers are the engines of your business. Keep operational records clean, linked to active dispatches, and ready for work.
          </motion.p>
        </div>

        {/* Tab Switcher: Vehicles vs Drivers */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              onClick={() => setActiveTab("vehicles")}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "vehicles"
                  ? "bg-white text-slate-900 shadow-xs border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Car className="w-4 h-4 text-blue-600" />
              <span>Vehicle Registry</span>
            </button>
            <button
              onClick={() => setActiveTab("drivers")}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "drivers"
                  ? "bg-white text-slate-900 shadow-xs border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Users className="w-4 h-4 text-emerald-600" />
              <span>Driver Registry</span>
            </button>
          </div>
        </div>

        {/* Tab Content & Screenshot */}
        <div className="bg-slate-50/70 rounded-3xl border border-slate-200/90 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Screenshot Column */}
            <div className="lg:col-span-7">
              <motion.div
                key={activeTab}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-slate-300/80 shadow-lg overflow-hidden bg-white"
              >
                <img
                  src={activeTab === "vehicles" ? vehicleScreenshot : driverScreenshot}
                  alt={activeTab === "vehicles" ? "DriveOps Vehicle Registry" : "DriveOps Driver Management"}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>

            {/* Right Summary Capabilities */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                {activeTab === "vehicles"
                  ? "Single source of truth for your fleet assets."
                  : "Organized driver profiles and duty availability."}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeTab === "vehicles"
                  ? "Track vehicle make, model, seating capacity, assigned default driver, branch location, and compliance documents in one clean table."
                  : "Maintain verified driver records including commercial badges, phone contacts, license expiry dates, and current duty status."}
              </p>

              <div className="space-y-2.5 pt-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Bulk Excel/CSV import for rapid initial fleet setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct link to dispatch board for instant vehicle pairing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Integrated document vault for automatic expiry tracking</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href="https://driveops.chatserve.in/signup"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>Import your fleet in minutes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
