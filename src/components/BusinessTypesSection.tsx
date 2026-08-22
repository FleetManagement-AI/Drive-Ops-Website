import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Users2 } from "lucide-react"
import { businessTypes } from "./business-types/businessTypesData"
import { BusinessTypeCard } from "./business-types/BusinessTypeCard"
import { BusinessTypesTrustStrip } from "./business-types/BusinessTypesTrustStrip"

export default function BusinessTypesSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="business-types"
      className="w-full py-16 sm:py-24 bg-[#F8FAFC]/70 border-t border-slate-200/60 overflow-hidden relative"
    >
      {/* Subtle Background Radial Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[radial-gradient(ellipse_60%_40%_at_50%_40%,rgba(37,99,235,0.04),transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-14">
        
        {/* ========================================================
            1. SECTION HEADER (CENTER-ALIGNED)
           ======================================================== */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          {/* Eyebrow Pill */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/70 text-blue-600 text-[11px] font-bold tracking-widest uppercase shadow-2xs"
          >
            <Users2 className="w-3.5 h-3.5 text-blue-600" />
            <span>BUILT FOR EVERY FLEET BUSINESS</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.15]"
          >
            One platform. <span className="gradient-text">Three ways</span> to run your business.
          </motion.h2>

          {/* Supporting Copy */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-sans"
          >
            DriveOps adapts to your business model and gives you the tools you need to manage, operate and grow — your way.
          </motion.p>
        </div>

        {/* ========================================================
            2. THREE BUSINESS MODEL PANELS
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {businessTypes.map((item, index) => (
            <BusinessTypeCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* ========================================================
            3. BOTTOM TRUST / PLATFORM STRIP
           ======================================================== */}
        <BusinessTypesTrustStrip />

      </div>
    </section>
  )
}
