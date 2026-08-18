import React from "react"
import { motion, useReducedMotion } from "framer-motion"

interface DriveOpsCentralHubProps {
  activeCapabilityId: string
}

export const DriveOpsCentralHub: React.FC<DriveOpsCentralHubProps> = ({ activeCapabilityId }) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative flex flex-col items-center justify-center select-none py-4">
      {/* Outer Concentric Glow Rings */}
      <div className="relative flex items-center justify-center">
        {/* Outermost soft animated glow ring */}
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.06, 1], opacity: [0.35, 0.5, 0.35] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-36 h-36 rounded-full border border-blue-200/60 bg-blue-50/30 pointer-events-none"
        />

        {/* Mid ring with subtle gradient */}
        <div
          className="absolute w-28 h-28 rounded-full border border-blue-300/70 shadow-lg shadow-blue-500/10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(239, 246, 255, 0.8) 0%, rgba(219, 234, 254, 0.3) 100%)",
          }}
        />

        {/* Central Core Hub Node */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="relative w-20 h-20 rounded-full bg-white flex flex-col items-center justify-center p-2 z-10"
          style={{
            border: "2px solid #3B82F6",
            boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.15), 0 10px 25px -3px rgba(37, 99, 235, 0.25)",
          }}
        >
          <img
            src="/logo/driveops-logo-blue-edited.png"
            alt="DriveOps Core Engine"
            className="w-8 h-8 object-contain drop-shadow-xs"
            draggable={false}
          />
          <span className="text-[10px] font-heading font-black text-slate-900 tracking-tight mt-0.5">
            Drive<span className="text-blue-600">Ops</span>
          </span>
        </motion.div>
      </div>

      {/* Under-Hub Caption Pill */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-3 text-center"
      >
        <div className="inline-flex flex-col items-center bg-blue-50/90 border border-blue-200/80 px-3 py-1 rounded-xl shadow-2xs">
          <span className="text-[9.5px] font-bold text-blue-700 leading-tight">One Platform.</span>
          <span className="text-[9.5px] font-extrabold text-blue-900 leading-tight">Complete Control.</span>
        </div>
      </motion.div>
    </div>
  )
}

export default DriveOpsCentralHub
