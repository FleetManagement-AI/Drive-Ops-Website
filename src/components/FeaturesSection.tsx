import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Link } from "react-router-dom"
import {
  Car,
  Users,
  Navigation,
  Fuel,
  Wrench,
  BarChart3,
  MapPin,
  MessageSquare,
  Star,
  CheckCircle2,
  LucideIcon,
  Sparkles,
  ArrowRight,
} from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  badge?: string
  title: string
  description: string
  bullets: string[]
  isHighlighted?: boolean
  customVisual?: React.ReactNode
  link?: string
}

const FeatureCard = ({
  icon: Icon,
  badge,
  title,
  description,
  bullets,
  isHighlighted = false,
  customVisual,
  link,
}: FeatureCardProps) => {
  return (
    <div
      className={`group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
        isHighlighted
          ? "bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 text-white border-2 border-blue-500/80 shadow-2xl shadow-blue-900/25 ring-1 ring-blue-400/30"
          : "bg-white border border-slate-200/90 text-slate-900 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
      }`}
    >
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 duration-300 ${
              isHighlighted
                ? "bg-emerald-500/20 border border-emerald-400/40 text-emerald-400"
                : "bg-blue-50 border border-blue-100 text-blue-600"
            }`}
          >
            <Icon size={22} />
          </div>
          {badge && (
            <span
              className={`text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                isHighlighted
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 flex items-center gap-1"
                  : "bg-blue-50 text-blue-700 border border-blue-100"
              }`}
            >
              {isHighlighted && <Sparkles size={11} />}
              {badge}
            </span>
          )}
        </div>

        {/* Title & Description */}
        {link ? (
          <Link to={link} className="group/link flex items-center gap-2 mb-2.5">
            <h3 className="font-heading text-lg sm:text-xl font-bold leading-snug group-hover/link:text-blue-500 transition-colors">
              {title}
            </h3>
            <ArrowRight size={16} className="text-blue-500 opacity-0 group-hover/link:opacity-100 transition-all" />
          </Link>
        ) : (
          <h3 className="font-heading text-lg sm:text-xl font-bold mb-2.5 leading-snug">
            {title}
          </h3>
        )}
        <p
          className={`text-xs sm:text-sm leading-relaxed mb-5 ${
            isHighlighted ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>

        {/* Custom Visual Element (used for Customer & Review Management) */}
        {customVisual && <div className="mb-5">{customVisual}</div>}
      </div>

      {/* Bullet Points */}
      <div className={`pt-4 border-t ${isHighlighted ? "border-slate-800" : "border-slate-100"}`}>
        <ul className="space-y-2 text-xs font-medium">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2">
              <CheckCircle2
                size={14}
                className={`shrink-0 ${isHighlighted ? "text-emerald-400" : "text-blue-600"}`}
              />
              <span className={isHighlighted ? "text-slate-200" : "text-slate-700"}>
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const FeaturesSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  const featuresList: FeatureCardProps[] = [
    {
      icon: Car,
      badge: "Core Platform",
      title: "Fleet Management",
      description: "Manage vehicles, assignments, registration renewals, utilization metrics, and overall fleet health from a unified dashboard.",
      bullets: [
        "Vehicle Registry & Documents",
        "Availability & Duty Status",
        "Utilization & Health Analytics",
      ],
      link: "/features/fleet-management"
    },
    {
      icon: Navigation,
      badge: "Smart Dispatch",
      title: "Taxi Dispatch Software",
      description: "Automatically assign trips to available drivers and ready vehicles, optimize dispatch queues, and track trip progress in real time.",
      bullets: [
        "Auto-Allocation Queue",
        "Driver Shift Roster",
        "Digital Trip Sheets",
      ],
      link: "/features/taxi-dispatch"
    },
    {
      icon: Users,
      badge: "Driver Hub",
      title: "Driver Management",
      description: "Manage driver profiles, driving license validity, shift schedules, duty attendance, and individual performance records.",
      bullets: [
        "Duty Roster & Attendance",
        "License Expiry Alerts",
        "Driver Performance History",
      ],
      link: "/features/driver-management"
    },
    {
      icon: MapPin,
      badge: "GPS Visibility",
      title: "GPS Vehicle Tracking",
      description: "Monitor live vehicle locations, route histories, speed tracking, and operational availability status across your fleet.",
      bullets: [
        "Visual Fleet Operational Map",
        "Live Route & Trip Status",
        "Station & City Coverage",
      ],
      link: "/features/gps-vehicle-tracking"
    },
    {
      icon: Wrench,
      badge: "Maintenance",
      title: "Fleet Maintenance",
      description: "Track service schedules, insurance expiration, road permits, fitness certificates, tax renewals, and maintenance cost ledgers.",
      bullets: [
        "Preventive Service Reminders",
        "Document Vault Expiry Alerts",
        "Repair & Maintenance Ledger",
      ],
      link: "/features/fleet-maintenance"
    },
    {
      icon: Fuel,
      badge: "Compliance",
      title: "Fleet Compliance Management",
      description: "Securely store RCs, insurance, and fitness certificates. Prevent fines with automated document expiry alerts.",
      bullets: [
        "Digital Document Vault",
        "Automated Expiry Alerts",
        "Audit Ready Storage",
      ],
      link: "/features/fleet-compliance"
    },
    {
      icon: BarChart3,
      badge: "Growth Insights",
      title: "Fleet Analytics Software",
      description: "Gain actionable insights into daily revenue, trip volume, per-vehicle earnings, driver performance, and operational KPIs.",
      bullets: [
        "Daily Revenue & Earnings Reports",
        "Per-Vehicle Profitability",
        "Operational KPI Dashboard",
      ],
      link: "/features/fleet-analytics"
    },
    {
      icon: MessageSquare,
      badge: "Key Differentiator",
      title: "WhatsApp Review Management",
      description: "Automatically collect customer reviews via WhatsApp after every completed trip, monitor customer feedback, and improve online reputation.",
      bullets: [
        "Automated WhatsApp Review Requests",
        "5-Star Rating & Feedback Analytics",
        "Reputation Growth & Customer Trust",
      ],
      isHighlighted: true,
      link: "/features/review-management",
      customVisual: (
        <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5">
          {/* Rating Header */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <MessageSquare size={13} />
              <span>WhatsApp Campaign</span>
            </div>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} fill="#F59E0B" stroke="none" />
              ))}
            </div>
          </div>

          {/* Workflow Chain */}
          <div className="flex items-center justify-between text-[10px] text-slate-300 font-medium py-1 px-2 rounded bg-slate-950 border border-slate-800/80">
            <span>Trip Complete</span>
            <ArrowRight size={10} className="text-emerald-400 shrink-0" />
            <span className="text-emerald-300 font-semibold">WhatsApp Request</span>
            <ArrowRight size={10} className="text-emerald-400 shrink-0" />
            <span className="text-amber-300 font-semibold">5★ Review</span>
          </div>

          {/* Impact Tag */}
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>Customer Trust Score</span>
            <span className="text-emerald-400 font-extrabold">+42% Growth</span>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-24 bg-slate-50/60 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
            Complete Platform Capabilities
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4 sm:mb-5">
            Fleet Operations & Business Growth Platform
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            DriveOps goes beyond traditional fleet software — combining dispatch, vehicle tracking, driver scheduling, fuel logs, maintenance, and automated WhatsApp review collection into a single intelligent platform.
          </p>
        </motion.div>

        {/* 4x2 / 2x4 Responsive Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto items-stretch">
          {featuresList.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
              className="flex"
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
