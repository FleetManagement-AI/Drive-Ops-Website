import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Clock, IndianRupee, ShieldCheck, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate tasks and reduce manual work by 80%.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: IndianRupee,
    title: "Reduce Costs",
    description: "Optimize operations and cut unnecessary expenses.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: ShieldCheck,
    title: "Stay Compliant",
    description: "Never miss renewals, insurance or compliance deadlines.",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: TrendingUp,
    title: "Grow Profitably",
    description: "Make smarter decisions with real-time data and insights.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
]

export const FleetBenefits: React.FC = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs">
        {benefits.map((b, idx) => {
          const Icon = b.icon
          return (
            <motion.div
              key={b.title}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.1 + idx * 0.08 }}
              className="flex items-start gap-3 p-2 rounded-xl"
            >
              <div className={`w-9 h-9 rounded-xl ${b.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                <Icon className={`w-4 h-4 ${b.iconColor}`} aria-hidden="true" />
              </div>
              <div>
                <h5 className="font-heading font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                  {b.title}
                </h5>
                <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                  {b.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default FleetBenefits
