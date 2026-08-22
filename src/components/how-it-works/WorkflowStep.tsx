import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { WorkflowStage } from "./workflowData"

interface WorkflowStepProps {
  stage: WorkflowStage
  index: number
  isActive: boolean
  onHover: (id: string | null) => void
}

export const WorkflowStep: React.FC<WorkflowStepProps> = ({
  stage,
  index,
  isActive,
  onHover,
}) => {
  const shouldReduceMotion = useReducedMotion()
  const Icon = stage.icon

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      onMouseEnter={() => onHover(stage.id)}
      onMouseLeave={() => onHover(null)}
      className={`group relative flex flex-col items-center text-center p-3.5 sm:p-4 rounded-2xl bg-white transition-all duration-300 cursor-pointer select-none max-w-[175px] w-full ${
        isActive
          ? "shadow-lg shadow-blue-500/10 border-2 -translate-y-1"
          : "hover:shadow-md hover:-translate-y-0.5 border border-slate-200/80 hover:border-slate-300"
      }`}
      style={{
        borderColor: isActive ? stage.accentHex : undefined,
      }}
    >
      {/* Icon Badge */}
      <div
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 mb-3 border ${stage.iconBg} ${stage.cardBorder} group-hover:scale-105`}
        style={{
          boxShadow: isActive ? `0 0 16px ${stage.glowColor}` : undefined,
        }}
      >
        <Icon
          className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300 ${stage.iconColor}`}
          strokeWidth={2}
        />
      </div>

      {/* Step Title */}
      <h3
        className="font-heading font-black text-xs sm:text-sm tracking-wider uppercase mb-1.5 transition-colors duration-300"
        style={{
          color: isActive ? stage.accentHex : "#0F172A",
        }}
      >
        {stage.title}
      </h3>

      {/* Step Description */}
      <p className="text-[11px] sm:text-xs text-slate-500 group-hover:text-slate-700 leading-snug font-sans transition-colors duration-200">
        {stage.description}
      </p>

      {/* Active Indicator Dot */}
      {isActive && (
        <motion.div
          layoutId="activeStepDot"
          className="absolute -bottom-1 w-2 h-2 rounded-full"
          style={{ backgroundColor: stage.accentHex }}
        />
      )}
    </motion.div>
  )
}
