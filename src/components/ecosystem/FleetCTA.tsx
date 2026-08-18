import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export const FleetCTA: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.2 }}
      className="w-full rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/70 via-white to-blue-50/70 px-6 sm:px-10 py-6 sm:py-7 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs"
    >
      <div className="flex items-center gap-3.5 text-center sm:text-left">
        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
          <Sparkles className="w-5 h-5 text-white" aria-hidden="true" />
        </div>
        <div>
          <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base leading-tight">
            Everything connected. <span className="gradient-text font-extrabold">Everything in control.</span>
          </h4>
          <p className="text-xs text-slate-500 mt-1 max-w-xl leading-relaxed">
            DriveOps is the all-in-one platform built to help you operate smarter and grow faster.
          </p>
        </div>
      </div>

      <a
        href="https://driveops.chatserve.in/signup"
        id="ecosystem-cta-trial"
        className="w-full sm:w-auto shrink-0 px-6 py-3.5 gradient-accent hover:opacity-95 text-white rounded-xl font-bold text-xs sm:text-sm transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group cursor-pointer"
      >
        <span>Start 30-Day Free Trial</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </a>
    </motion.div>
  )
}

export default FleetCTA
