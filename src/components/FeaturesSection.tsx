import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  MapPin,
  Car,
  Users,
  CalendarCheck,
  Wrench,
  BarChart3,
  FileText,
  ShieldCheck,
} from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Real-Time GPS Tracking",
    desc: "Monitor every vehicle's live location, speed, and route on an interactive map. Never lose sight of your fleet.",
  },
  {
    icon: Car,
    title: "Vehicle Management",
    desc: "Manage your entire fleet from a single dashboard — registration details, insurance, permits, and vehicle history.",
  },
  {
    icon: Users,
    title: "Driver Management",
    desc: "Maintain driver profiles, licenses, performance scores, and assignment history with complete traceability.",
  },
  {
    icon: CalendarCheck,
    title: "Trip & Booking Management",
    desc: "Assign trips, track active bookings, calculate fares, and manage customer reservations seamlessly.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Expense Tracking",
    desc: "Log service records, schedule preventive maintenance, and track fuel and repair costs per vehicle.",
  },
  {
    icon: BarChart3,
    title: "Revenue & Profit Analytics",
    desc: "Visualize earnings, profitability by vehicle, and operational costs. Make data-driven decisions with ease.",
  },
  {
    icon: FileText,
    title: "Automated Reports & Insights",
    desc: "Generate daily, weekly, and monthly reports on trips, earnings, and driver performance automatically.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Cloud-Based Platform",
    desc: "Enterprise-grade security with encrypted data storage, regular backups, and role-based access control.",
  },
]

const FeaturesSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 radial-glow opacity-50" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Features</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Everything Your Rental Business{" "}
            <span className="gradient-text">Needs to Succeed</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From GPS tracking to revenue analytics, DriveOps gives rental car businesses,
            taxi operators, and travel agencies a complete operational toolkit.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto mt-14">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass rounded-2xl p-6 group hover:glow-border hover:glow-cyan transition-all duration-500 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center shrink-0">
                <f.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
