import React from "react"
import { motion, useReducedMotion } from "framer-motion"

interface WorkflowConnectorProps {
  index: number
  isActive?: boolean
  orientation?: "horizontal" | "vertical"
}

export const WorkflowConnector: React.FC<WorkflowConnectorProps> = ({
  index,
  isActive = false,
  orientation = "horizontal",
}) => {
  const shouldReduceMotion = useReducedMotion()

  if (orientation === "vertical") {
    return (
      <div className="flex flex-col items-center justify-center my-1.5 h-7 w-full select-none" aria-hidden="true">
        <svg
          width="16"
          height="28"
          viewBox="0 0 16 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          {/* Vertical Dashed Line */}
          <motion.line
            x1="8"
            y1="0"
            x2="8"
            y2="20"
            stroke={isActive ? "#2563EB" : "#93C5FD"}
            strokeWidth={isActive ? "2" : "1.5"}
            strokeDasharray="3 3"
            strokeLinecap="round"
            initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.12 + 0.1 }}
          />
          {/* Arrowhead */}
          <motion.polygon
            points="4,19 8,26 12,19"
            fill={isActive ? "#2563EB" : "#93C5FD"}
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.12 + 0.25 }}
          />
        </svg>
      </div>
    )
  }

  return (
    <div
      className="hidden lg:flex items-center justify-center flex-1 min-w-[28px] max-w-[56px] -mt-10 select-none px-1"
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="16"
        viewBox="0 0 48 16"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible w-full"
      >
        {/* Horizontal Dashed Line */}
        <motion.line
          x1="2"
          y1="8"
          x2="40"
          y2="8"
          stroke={isActive ? "#2563EB" : "#93C5FD"}
          strokeWidth={isActive ? "2" : "1.5"}
          strokeDasharray="4 3.5"
          strokeLinecap="round"
          initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.12 + 0.1 }}
        />
        {/* Arrowhead */}
        <motion.polygon
          points="39,4 47,8 39,12"
          fill={isActive ? "#2563EB" : "#93C5FD"}
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.12 + 0.25 }}
        />
      </svg>
    </div>
  )
}
