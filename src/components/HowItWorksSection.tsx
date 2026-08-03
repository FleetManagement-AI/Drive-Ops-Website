import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, UserPlus, Navigation, BarChart3 } from "lucide-react"

const timelineSteps = [
  {
    step: "01",
    icon: FileText,
    title: "Create Trip Booking",
    desc: "Enter client booking details and select pricing rate or rental package.",
  },
  {
    step: "02",
    icon: UserPlus,
    title: "Assign Driver & Car",
    desc: "Pair an active, service-ready vehicle with an available scheduled driver.",
  },
  {
    step: "03",
    icon: Navigation,
    title: "Dispatch & Track",
    desc: "Queue trip for dispatch, generate trip sheet, and monitor status.",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Analyze Earnings",
    desc: "Log fuel refills and review net profit margins and daily operational ledger.",
  },
]

const HowItWorksSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
            Corporate & Retail Workflow
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4 sm:mb-5">
            How Our Cab Management Software Works
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            From corporate transport management to daily retail dispatch, DriveOps structures your operations into four clean steps.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {timelineSteps.map((ws, i) => (
              <motion.div
                key={ws.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-5 sm:p-6 relative hover:bg-white hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col"
              >
                {/* Step number + icon row */}
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <ws.icon size={20} />
                  </div>
                  <span className="font-heading font-extrabold text-base sm:text-lg text-blue-600 bg-blue-50 border border-blue-100 px-2.5 sm:px-3 py-0.5 rounded-full">
                    Step {ws.step}
                  </span>
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {ws.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {ws.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
