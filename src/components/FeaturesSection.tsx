import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Car, Navigation, Users, MessageSquare, CreditCard, BarChart3 } from "lucide-react"
import ProductVideo from "./ProductVideo"

const pillars = [
  { id: "fleet",      label: "Fleet",      icon: Car,         video: "https://chatserve-732169940926-eu-north-1-an.s3.eu-north-1.amazonaws.com/public/fleet_map_gwr_video_mvp.mp4" },
  { id: "operations", label: "Operations", icon: Navigation,  video: "https://chatserve-732169940926-eu-north-1-an.s3.eu-north-1.amazonaws.com/public/command_center_gwr_video_mvp.mp4" },
  { id: "customers",  label: "Customers",  icon: Users,       video: "https://chatserve-732169940926-eu-north-1-an.s3.eu-north-1.amazonaws.com/public/customer_Screen_gwr_video_mvp.mp4" },
  { id: "reviews",    label: "Reviews",    icon: MessageSquare,video: "https://chatserve-732169940926-eu-north-1-an.s3.eu-north-1.amazonaws.com/public/customer_review_gwr_video_mvp.mp4" },
  { id: "payroll",    label: "Payroll",    icon: CreditCard,  video: "https://chatserve-732169940926-eu-north-1-an.s3.eu-north-1.amazonaws.com/public/driver_payroll_gwr_video_mvp.mp4" },
  { id: "insights",   label: "Insights",   icon: BarChart3,   video: "https://chatserve-732169940926-eu-north-1-an.s3.eu-north-1.amazonaws.com/public/dashboard-videowr1.mp4" },
]

export default function FeaturesSection() {
  const [active, setActive] = useState("fleet")
  const activePillar = pillars.find((p) => p.id === active) || pillars[0]

  return (
    <section id="features" className="py-20 sm:py-28 bg-[#FBFBFA] border-b border-slate-200/60 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">

        {/* Section Heading & Copy */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">ONE PLATFORM</p>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            One system.<br />Every operation.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-xl mx-auto pt-1">
            Everything your fleet needs to run day to day — connected in one place.
          </p>
        </div>

        {/* Hero Visual: Actual DriveOps Product Video (No fake chrome or over-framing) */}
        <div className="w-full max-w-[1040px] mx-auto mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="w-full"
            >
              <ProductVideo
                src={activePillar.video}
                alt={`DriveOps ${activePillar.label} Live Video Walkthrough`}
                hideChrome={true}
                aspectRatio="16/9"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Category Controls (Placed BELOW the Product Video) */}
        <div className="flex justify-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-2 p-2 bg-slate-900/95 border border-slate-800 rounded-2xl shadow-xl max-w-full">
            {pillars.map((p) => {
              const Icon = p.icon
              const isSelected = active === p.id
              return (
                <button
                  key={p.id}
                  id={`pillar-btn-${p.id}`}
                  onClick={() => setActive(p.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-slate-500"}`} />
                  <span>{p.label}</span>
                </button>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
