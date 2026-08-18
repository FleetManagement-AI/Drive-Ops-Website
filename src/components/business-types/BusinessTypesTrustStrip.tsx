import React from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Users, MapPin, Shield, Star } from "lucide-react"

export const BusinessTypesTrustStrip: React.FC = () => {
  const trustItems = [
    {
      value: "50K+",
      label: "Vehicles Managed",
      icon: ShieldCheck,
      bg: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      value: "500+",
      label: "Fleets Trust DriveOps",
      icon: Users,
      bg: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
      value: "250+",
      label: "Cities Covered",
      icon: MapPin,
      bg: "bg-amber-50 text-amber-600 border-amber-100"
    },
    {
      value: "99.6%",
      label: "Uptime",
      icon: Shield,
      bg: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      value: "24/7",
      label: "Support",
      icon: Star,
      bg: "bg-yellow-50 text-yellow-600 border-yellow-100"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="w-full bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-xs"
    >
      <div className="text-center mb-5">
        <h4 className="font-heading font-black text-sm sm:text-base text-slate-800 tracking-tight">
          Trusted by transporters across India
        </h4>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 divide-y sm:divide-y-0 divide-slate-100">
        {trustItems.map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={idx}
              className={`flex items-center gap-3 justify-start lg:justify-center pt-3 sm:pt-0 ${
                idx === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <div
                className={`w-10 h-10 rounded-2xl ${item.bg} border flex items-center justify-center shrink-0 shadow-2xs`}
              >
                <Icon className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="text-left">
                <div className="text-sm sm:text-base font-black text-slate-900 font-heading leading-tight">
                  {item.value}
                </div>
                <div className="text-[11px] font-medium text-slate-500 mt-0.5 leading-tight">
                  {item.label}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
