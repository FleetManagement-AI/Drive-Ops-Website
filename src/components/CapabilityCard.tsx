import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface CapabilityCardProps {
  icon: LucideIcon
  title: string
  description: string
  iconColor: string
  iconBg: string
  accentColor: string
  /** CSS hex color for SVG connector stroke, e.g. "#3B82F6" */
  connectorColor: string
  side: "left" | "right"
  delay?: number
}

export const CapabilityCard: React.FC<CapabilityCardProps> = ({
  icon: Icon,
  title,
  description,
  iconColor,
  iconBg,
  accentColor,
  connectorColor,
  side,
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion()
  const fromX = side === "left" ? -24 : 24

  return (
    /* overflow-visible so the connector SVG can extend beyond card bounds */
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: fromX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
      style={{ overflow: "visible" }}
    >
      {/* ── Horizontal connector line (desktop only) ── */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : delay + 0.15, ease: "easeOut" }}
        className="absolute top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none"
        style={{
          [side === "left" ? "left" : "right"]: "100%",
          width: 52,
          transformOrigin: side === "left" ? "left center" : "right center",
        }}
        aria-hidden="true"
      >
        <svg width="52" height="12" viewBox="0 0 52 12" style={{ overflow: "visible" }}>
          {/* Dashed line */}
          <line
            x1={side === "left" ? "8" : "44"}
            y1="6"
            x2={side === "left" ? "52" : "0"}
            y2="6"
            stroke={connectorColor}
            strokeWidth="1.5"
            strokeDasharray="4 3"
            strokeOpacity="0.55"
          />
          {/* Dot at the card-side end */}
          <circle
            cx={side === "left" ? "5" : "47"}
            cy="6"
            r="3.5"
            fill={connectorColor}
            opacity="0.75"
          />
        </svg>
      </motion.div>

      {/* ── Card body ── */}
      <div
        className={`flex items-start gap-3 bg-white rounded-xl border border-slate-200/80 shadow-sm px-4 py-3.5
          ${side === "right" ? "flex-row-reverse text-right" : "text-left"}`}
      >
        {/* Icon */}
        <div className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
          <Icon className={`w-[18px] h-[18px] ${iconColor}`} aria-hidden="true" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-[12.5px] font-bold text-slate-800 leading-snug mb-0.5">{title}</p>
          <p className="text-[11px] text-slate-500 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default CapabilityCard
