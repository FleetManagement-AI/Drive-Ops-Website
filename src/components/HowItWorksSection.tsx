import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CarFront, Activity, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: CarFront,
    title: "Add Vehicles and Drivers",
    desc: "Onboard your entire fleet in minutes. Add vehicle details, driver profiles, documents, and insurance records in one place. No spreadsheets needed.",
    highlights: ["Vehicle registration & documents", "Driver profiles & license tracking", "Insurance & permit management"],
  },
  {
    number: "02",
    icon: Activity,
    title: "Monitor Trips and Bookings",
    desc: "Track every trip on a live map, manage customer bookings, assign drivers instantly, and get real-time alerts on vehicle status and driver activity.",
    highlights: ["Live GPS vehicle tracking", "Real-time trip assignment", "Booking & customer management"],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Optimize Revenue and Operations",
    desc: "Analyze earnings per vehicle, identify top-performing drivers, reduce idle time, and generate automated reports to make smarter business decisions.",
    highlights: ["Revenue & profit dashboards", "Automated expense reports", "Actionable operational insights"],
  },
]

const HowItWorksSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="how-it-works" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 radial-glow opacity-30" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">How It Works</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Get Your Fleet Running{" "}
            <span className="gradient-text">in 3 Simple Steps</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            DriveOps is designed for speed. Most rental businesses are fully set up and tracking their fleet within the same day.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.18, duration: 0.6 }}
              className="relative"
            >
              {/* Step number + icon header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center shadow-lg">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-background border border-border text-primary text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
              </div>

              <h3 className="font-heading text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{step.desc}</p>

              <ul className="space-y-2">
                {step.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
