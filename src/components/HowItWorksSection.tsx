import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  FileText, Navigation, Users, MapPin, 
  MessageSquare, CreditCard 
} from "lucide-react"
import ProductVideo from "./ProductVideo"

const timelineSteps = [
  { 
    id: "booking",  
    label: "BOOKING",  
    icon: FileText,
    mediaType: "image",
    src: "https://chatserve-732169940926-eu-north-1-an.s3.eu-north-1.amazonaws.com/public/trip_creation.png"
  },
  { 
    id: "dispatch", 
    label: "DISPATCH", 
    icon: Navigation,
    mediaType: "video",
    src: "https://chatserve-732169940926-eu-north-1-an.s3.eu-north-1.amazonaws.com/public/command_center_gwr_video_mvp.mp4"
  },
  { 
    id: "driver",   
    label: "DRIVER",   
    icon: Users,
    mediaType: "video",
    src: "https://chatserve-732169940926-eu-north-1-an.s3.eu-north-1.amazonaws.com/public/driver-videowr.mp4"
  },
  { 
    id: "trip",     
    label: "TRIP",     
    icon: MapPin,
    mediaType: "video",
    src: "https://chatserve-732169940926-eu-north-1-an.s3.eu-north-1.amazonaws.com/public/trip_creation_gwr_video_mvp.mp4"
  },
  { 
    id: "review",   
    label: "REVIEW",   
    icon: MessageSquare,
    mediaType: "video",
    src: "https://chatserve-732169940926-eu-north-1-an.s3.eu-north-1.amazonaws.com/public/customer_review_gwr_video_mvp.mp4"
  },
  { 
    id: "payout",   
    label: "PAYOUT",   
    icon: CreditCard,
    mediaType: "video",
    src: "https://chatserve-732169940926-eu-north-1-an.s3.eu-north-1.amazonaws.com/public/driver_payroll_gwr_video_mvp.mp4"
  },
]

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)
  const current = timelineSteps[activeStep]

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#FBFBFA] border-b border-slate-200/60 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1340px]">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">Complete Lifecycle</p>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            From booking to payout,<br />everything stays connected.
          </h2>
        </div>

        {/* Product Media Demonstration Frame */}
        <div className="max-w-4xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {current.mediaType === "image" ? (
                <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200/60 bg-[#090D16] aspect-[16/9]">
                  <img
                    src={current.src}
                    alt={`DriveOps ${current.label} UI Screen`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              ) : (
                <ProductVideo 
                  src={current.src}
                  alt={`DriveOps ${current.label} Demonstration`}
                  hideChrome={true}
                  aspectRatio="16/9"
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Timeline Ribbon below Media (BOOKING → DISPATCH → DRIVER → TRIP → REVIEW → PAYOUT) */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-between gap-2 p-2 bg-slate-900/95 border border-slate-800 rounded-2xl overflow-x-auto shadow-xl">
            {timelineSteps.map((stg, idx) => {
              const Icon = stg.icon
              const isSelected = activeStep === idx
              return (
                <button
                  key={stg.id}
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-slate-500"}`} />
                  <span>{stg.label}</span>
                </button>
              )
            })}
          </div>

          <div className="text-center">
            <span className="text-xs text-slate-500 font-medium">
              From booking to payout, every part of the operation stays connected.
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
