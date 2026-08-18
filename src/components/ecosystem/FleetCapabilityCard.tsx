import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { CapabilityData } from "./ecosystemData"
import { ChevronRight } from "lucide-react"

interface FleetCapabilityCardProps {
  capability: CapabilityData
  isActive: boolean
  onClick: () => void
  side: "left" | "mid"
  index: number
}

export const FleetCapabilityCard: React.FC<FleetCapabilityCardProps> = ({
  capability,
  isActive,
  onClick,
  side,
  index,
}) => {
  const shouldReduceMotion = useReducedMotion()
  const Icon = capability.icon

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.1 + index * 0.05 }}
      whileHover={{ y: -2 }}
      className={`relative w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-200 group cursor-pointer ${
        isActive
          ? "bg-white border-2 border-blue-500 shadow-lg shadow-blue-500/10 ring-4 ring-blue-500/5 z-10"
          : "bg-white/90 hover:bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-md"
      }`}
    >
      {/* Connector Node Indicator on Card Edge */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center pointer-events-none transition-transform duration-300 ${
          side === "left"
            ? "-right-2.5 translate-x-0"
            : "-right-2.5 translate-x-0"
        }`}
        aria-hidden="true"
      >
        <div
          className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
            isActive
              ? "bg-blue-600 shadow-md shadow-blue-500/30 scale-110"
              : "bg-white border border-slate-300 text-slate-400 group-hover:border-blue-400"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              isActive ? "bg-white" : "bg-slate-300 group-hover:bg-blue-400"
            }`}
          />
        </div>
      </div>

      <div className="flex items-start gap-3">
        {/* Circular Icon */}
        <div
          className={`w-10 h-10 rounded-xl ${capability.iconBg} flex items-center justify-center shrink-0 transition-transform group-hover:scale-105`}
        >
          <Icon className={`w-5 h-5 ${capability.iconColor}`} aria-hidden="true" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 pr-2">
          <div className="flex items-center justify-between gap-1 mb-0.5">
            <h4
              className={`text-[13px] font-heading font-bold leading-tight transition-colors ${
                isActive ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"
              }`}
            >
              {capability.title}
            </h4>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
            {capability.description}
          </p>
        </div>
      </div>
    </motion.button>
  )
}

export default FleetCapabilityCard
