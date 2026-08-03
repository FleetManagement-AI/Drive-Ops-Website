import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { DollarSign, Zap, TrendingUp, FileX, BarChart2, Scale } from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Reduce Operational Costs",
    desc: "Cut unverified fuel costs, eliminate duplicate record entry, and reduce manual errors that silently drain net profit margins.",
  },
  {
    icon: Zap,
    title: "Improve Efficiency & Productivity",
    desc: "Automate trip assignments, dispatch queues, and maintenance logs so your dispatch team focuses on growth rather than phone calls.",
  },
  {
    icon: TrendingUp,
    title: "Increase Fleet Utilization",
    desc: "Identify idle vehicles and driver downtime instantly. Keep your vehicles active on the road generating maximum revenue per day.",
  },
  {
    icon: FileX,
    title: "Eliminate Paperwork & Lost Records",
    desc: "Replace paper trip sheets, logbooks, and WhatsApp groups with a single cloud platform that keeps all vehicle and driver records intact.",
  },
  {
    icon: BarChart2,
    title: "Make Data-Driven Decisions",
    desc: "Access daily revenue reports, per-vehicle mileage metrics, and expense analytics to make confident operational decisions.",
  },
  {
    icon: Scale,
    title: "Scale Your Fleet Confidently",
    desc: "Whether managing 5 or 500+ vehicles, DriveOps scales seamlessly without multiplying administrative overhead or hiring extra staff.",
  },
]

const BenefitsSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="benefits" className="py-24 bg-slate-50/70 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Measurable ROI
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-5">
            Designed to Deliver <span className="gradient-text">Business Outcomes</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            DriveOps isn't just software—it's the operational edge that powers fast-growing fleet operators.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <b.icon size={22} />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2.5">
                  {b.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
