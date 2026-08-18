import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { BusinessTypeItem } from "./businessTypesData"
import { BusinessTypeCapabilities } from "./BusinessTypeCapabilities"
import { BusinessTypeMetrics } from "./BusinessTypeMetrics"

interface BusinessTypeCardProps {
  item: BusinessTypeItem
  index: number
}

export const BusinessTypeCard: React.FC<BusinessTypeCardProps> = ({ item, index }) => {
  const HeaderIcon = item.headerIcon

  const getThemeStyles = () => {
    switch (item.accentColor) {
      case "green":
        return {
          cardBorder: "border-emerald-100/90 hover:border-emerald-300",
          ambientGlow: "from-emerald-50/40 via-transparent to-transparent",
          headerIconBg: "bg-emerald-500 text-white shadow-emerald-500/20",
          ctaText: "text-emerald-600 hover:text-emerald-700",
          cardShadow: "hover:shadow-xl hover:shadow-emerald-500/5"
        }
      case "purple":
        return {
          cardBorder: "border-purple-100/90 hover:border-purple-300",
          ambientGlow: "from-purple-50/40 via-transparent to-transparent",
          headerIconBg: "bg-purple-600 text-white shadow-purple-500/20",
          ctaText: "text-purple-600 hover:text-purple-700",
          cardShadow: "hover:shadow-xl hover:shadow-purple-500/5"
        }
      case "blue":
      default:
        return {
          cardBorder: "border-blue-100/90 hover:border-blue-300",
          ambientGlow: "from-blue-50/40 via-transparent to-transparent",
          headerIconBg: "bg-blue-600 text-white shadow-blue-500/20",
          ctaText: "text-blue-600 hover:text-blue-700",
          cardShadow: "hover:shadow-xl hover:shadow-blue-500/5"
        }
    }
  }

  const theme = getThemeStyles()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative flex flex-col justify-between bg-white rounded-[24px] border ${theme.cardBorder} p-6 sm:p-7 xl:p-8 transition-all duration-300 hover:-translate-y-1.5 ${theme.cardShadow} overflow-hidden`}
    >
      {/* Background Soft Atmospheric Ambient Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${theme.ambientGlow} opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
      />

      <div className="relative z-10 flex flex-col space-y-6">
        {/* ========================================================
            1. HEADER: ICON + TITLE + DESCRIPTION
           ======================================================== */}
        <div className="space-y-3.5 text-left">
          {/* Header Icon Container */}
          <div
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${theme.headerIconBg} flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-105`}
          >
            <HeaderIcon className="w-5 h-5 stroke-[2.2]" />
          </div>

          {/* Title */}
          <h3 className="font-heading font-black text-xl sm:text-2xl text-slate-900 tracking-tight leading-snug">
            {item.title}
          </h3>

          {/* Description with ~85% width and generous line-height */}
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed max-w-[90%] font-sans">
            {item.description}
          </p>
        </div>

        {/* ========================================================
            2. HERO VEHICLE VISUAL (SEAMLESS INTEGRATION)
           ======================================================== */}
        <div className="relative w-full h-48 sm:h-52 md:h-56 flex items-center justify-center overflow-hidden">
          <img
            src={item.vehicleImage}
            alt={item.vehicleAlt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.025]"
          />
        </div>

        {/* ========================================================
            3. CAPABILITIES INDICATORS
           ======================================================== */}
        <BusinessTypeCapabilities
          capabilities={item.capabilities}
          accentColor={item.accentColor}
        />

        {/* ========================================================
            4. BUSINESS INSIGHT METRICS
           ======================================================== */}
        <BusinessTypeMetrics
          metrics={item.metrics}
          accentColor={item.accentColor}
        />
      </div>

      {/* ========================================================
          5. CTA NAVIGATION LINK
         ======================================================== */}
      <div className="relative z-10 pt-6 flex justify-center">
        <a
          href={item.ctaHref}
          className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold ${theme.ctaText} transition-all duration-200 group/cta`}
        >
          <span>{item.ctaText}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
        </a>
      </div>
    </motion.div>
  )
}
