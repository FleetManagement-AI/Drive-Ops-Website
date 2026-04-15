import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  DollarSign,
  Zap,
  TrendingUp,
  FileX,
  BarChart2,
  Scale,
} from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Reduce Operational Costs",
    desc: "Cut fuel waste, eliminate duplicate record entry, and reduce manual errors that silently drain your margins.",
  },
  {
    icon: Zap,
    title: "Improve Efficiency & Productivity",
    desc: "Automate trip assignments, reports, and reminders so your team focuses on growing the business, not paperwork.",
  },
  {
    icon: TrendingUp,
    title: "Increase Profitability",
    desc: "Know exactly which vehicles earn the most and which cost the most. Optimize your fleet for maximum returns.",
  },
  {
    icon: FileX,
    title: "Eliminate Manual Record-Keeping",
    desc: "Replace logbooks and spreadsheets with a single cloud platform that keeps everything accurate and accessible.",
  },
  {
    icon: BarChart2,
    title: "Make Data-Driven Decisions",
    desc: "Access real-time dashboards and automated insights to act fast, anticipate problems, and plan confidently.",
  },
  {
    icon: Scale,
    title: "Scale Your Rental Business Easily",
    desc: "Whether you have 5 or 500 vehicles, DriveOps grows with you — no complex migrations, no re-training.",
  },
]

const BenefitsSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="benefits" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 radial-glow opacity-25" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Benefits</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Why Rental Businesses{" "}
            <span className="gradient-text">Choose DriveOps</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            DriveOps isn't just software — it's the competitive edge that separates
            thriving rental businesses from those stuck managing chaos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-7 group hover:glow-border transition-all duration-500 flex gap-5"
            >
              <div className="shrink-0 w-11 h-11 rounded-xl gradient-accent flex items-center justify-center mt-0.5">
                <b.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
