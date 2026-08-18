import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface ChallengeCardProps {
  icon: LucideIcon
  title: string
  iconColor: string
  iconBg: string
  delay?: number
}

export const ChallengeCard: React.FC<ChallengeCardProps> = ({
  icon: Icon,
  title,
  iconColor,
  iconBg,
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : delay, ease: "easeOut" }}
      className="flex flex-col items-center gap-2.5 bg-white rounded-xl border border-slate-200/80 shadow-sm px-4 py-4 min-w-[120px] relative"
    >
      {/* Icon */}
      <div className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center shrink-0`}>
        <Icon className={`w-5 h-5 ${iconColor}`} aria-hidden="true" />
      </div>

      {/* Title */}
      <p className="text-[11px] font-semibold text-slate-700 text-center leading-snug">{title}</p>

      {/* Problem indicator */}
      <div
        className="w-5 h-5 rounded-full bg-red-500/10 border border-red-300 flex items-center justify-center"
        aria-label="Problem indicator"
      >
        <span className="text-red-500 text-[10px] font-black leading-none select-none">✕</span>
      </div>
    </motion.div>
  )
}

export default ChallengeCard
