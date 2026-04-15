import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { LayoutDashboard, Car, Navigation, UserCircle, FileCheck } from "lucide-react"

import dashboardImg from "@/assets/dashboard.jpg"
import vehicleImg from "@/assets/vehicle-management.jpg"
import tripImg from "@/assets/trip-dispatch.jpg"
import driverImg from "@/assets/driver-management.jpg"
import documentImg from "@/assets/document-vault.jpg"

const modules = [
  {
    icon: LayoutDashboard,
    tag: "Fleet Overview Dashboard",
    title: "See Your Entire Fleet at a Glance",
    desc: "Real-time insights into fleet operations, revenue, active trips, and driver activity. Every KPI you need to make decisions — unified on one dashboard. Built for rental business owners who need clarity, not complexity.",
    img: dashboardImg,
  },
  {
    icon: UserCircle,
    tag: "Driver Management Panel",
    title: "Complete Control Over Your Drivers",
    desc: "Manage driver profiles, availability schedules, license expiry alerts, and performance scores. Assign trips instantly and track driver history — all from a single, easy-to-navigate panel.",
    img: driverImg,
  },
  {
    icon: Navigation,
    tag: "GPS Tracking Map",
    title: "Know Where Every Vehicle Is — Right Now",
    desc: "Live satellite tracking with route history, geofence alerts, and idle time detection. Whether you have 5 cars or 500, you'll always know where your assets are and where they've been.",
    img: tripImg,
  },
  {
    icon: FileCheck,
    tag: "Earnings & Analytics",
    title: "Revenue Insights That Drive Profitability",
    desc: "Visualize total revenue, per-vehicle profitability, operational expenses, and driver payouts. Automated monthly reports give you the full financial picture without digging through records.",
    img: dashboardImg,
  },
  {
    icon: Car,
    tag: "Vehicle Health & Maintenance",
    title: "Keep Your Fleet Road-Ready",
    desc: "Log service records, schedule preventive maintenance, and track fuel costs per vehicle. Get notified before a vehicle is due for servicing — so breakdowns become a thing of the past.",
    img: vehicleImg,
  },
]

const ModuleCard = ({ mod, index }: { mod: typeof modules[0]; index: number }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const isReversed = index % 2 === 1

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-16 items-center`}
    >
      {/* Image */}
      <div className="w-full lg:w-3/5 relative group">
        <div className="absolute -inset-1 rounded-2xl gradient-accent opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-700" />
        <div className="relative glass rounded-2xl overflow-hidden border border-border/40">
          {/* Browser chrome bar */}
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/40 bg-card/50">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-2 text-xs text-muted-foreground font-mono">driveops.chatserve.in</span>
          </div>
          <img
            src={mod.img}
            alt={`DriveOps ${mod.tag} - fleet management dashboard screenshot`}
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      </div>

      {/* Text */}
      <div className="w-full lg:w-2/5 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gradient-accent flex items-center justify-center">
            <mod.icon className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">{mod.tag}</span>
        </div>
        <h3 className="font-heading text-2xl md:text-3xl font-bold leading-tight">{mod.title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm">{mod.desc}</p>
      </div>
    </motion.div>
  )
}

const ProductShowcase = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="platform" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 radial-glow opacity-30" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Dashboard Preview</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            A Platform Built for{" "}
            <span className="gradient-text">Real Fleet Operators</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every screen in DriveOps is designed with one goal: giving rental business owners
            complete visibility and control with zero complexity.
          </p>
        </motion.div>

        <div className="space-y-20 lg:space-y-28 max-w-6xl mx-auto">
          {modules.map((mod, i) => (
            <ModuleCard key={mod.title} mod={mod} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
