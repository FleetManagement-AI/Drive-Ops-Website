import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { VALUE_STRIP_ITEMS } from "./workflowData"

export const WorkflowValueStrip: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-xs"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0 lg:divide-x lg:divide-slate-200/70">
        {VALUE_STRIP_ITEMS.map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={item.id}
              className={`flex items-start gap-3 ${
                idx === 0 ? "lg:pr-4" : idx === VALUE_STRIP_ITEMS.length - 1 ? "lg:pl-4" : "lg:px-4"
              }`}
            >
              {/* Icon Badge */}
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${item.iconBg}`}
              >
                <Icon className="w-4 h-4" strokeWidth={2.2} />
              </div>

              {/* Text content */}
              <div className="space-y-0.5 min-w-0">
                <h4 className="font-heading font-bold text-xs text-slate-900 tracking-tight leading-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
