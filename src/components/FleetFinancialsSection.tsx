import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  BarChart3,
  Fuel,
  Wrench,
  Car,
  FileText,
  Activity,
  IndianRupee,
  LineChart,
  TrendingUp,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const FINANCIAL_DASHBOARD_IMAGE =
  "/images/features/DriveOps Fleet Financial Dashboard.png"

type BenefitItem = {
  number: string
  title: string
  description: string
  icon: LucideIcon
  iconClass: string
  iconWrapClass: string
}

type OutcomeItem = {
  title: string
  description: string
  icon: LucideIcon
  iconClass: string
  iconWrapClass: string
}

const BENEFITS: BenefitItem[] = [
  {
    number: "01",
    title: "Trip & Rental Revenue",
    description:
      "See trip pricing and rental payments connected to your fleet.",
    icon: BarChart3,
    iconClass: "text-emerald-600",
    iconWrapClass: "border-emerald-100 bg-emerald-50",
  },
  {
    number: "02",
    title: "Fuel Costs",
    description: "Track fuel quantity, cost, and spend across vehicles.",
    icon: Fuel,
    iconClass: "text-blue-600",
    iconWrapClass: "border-blue-100 bg-blue-50",
  },
  {
    number: "03",
    title: "Maintenance Costs",
    description: "Monitor service expenses and upcoming maintenance.",
    icon: Wrench,
    iconClass: "text-orange-600",
    iconWrapClass: "border-orange-100 bg-orange-50",
  },
  {
    number: "04",
    title: "Vehicle-wise Costs",
    description: "Compare fuel and maintenance spend across your fleet.",
    icon: Car,
    iconClass: "text-violet-600",
    iconWrapClass: "border-violet-100 bg-violet-50",
  },
  {
    number: "05",
    title: "Operational Records",
    description:
      "Keep key operating cost records visible alongside trips and rentals.",
    icon: FileText,
    iconClass: "text-sky-600",
    iconWrapClass: "border-sky-100 bg-sky-50",
  },
]

const OUTCOMES: OutcomeItem[] = [
  {
    title: "Understand Fleet Performance",
    description: "See which vehicles are costing more to operate.",
    icon: Activity,
    iconClass: "text-emerald-600",
    iconWrapClass: "border-emerald-100 bg-emerald-50",
  },
  {
    title: "Control Operational Costs",
    description: "Keep fuel, maintenance, and related expenses visible.",
    icon: IndianRupee,
    iconClass: "text-blue-600",
    iconWrapClass: "border-blue-100 bg-blue-50",
  },
  {
    title: "Make Better Decisions",
    description: "Use operational data to guide day-to-day fleet decisions.",
    icon: LineChart,
    iconClass: "text-violet-600",
    iconWrapClass: "border-violet-100 bg-violet-50",
  },
  {
    title: "Operate a More Efficient Fleet",
    description:
      "Understand revenue and cost signals so you can run more efficiently.",
    icon: TrendingUp,
    iconClass: "text-orange-600",
    iconWrapClass: "border-orange-100 bg-orange-50",
  },
]

function BenefitList({
  className,
  shouldReduceMotion,
  stagger = false,
}: {
  className?: string
  shouldReduceMotion: boolean | null
  stagger?: boolean
}) {
  return (
    <ul className={className}>
      {BENEFITS.map((item, index) => {
        const Icon = item.icon
        return (
          <motion.li
            key={item.title}
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={
              stagger
                ? { delay: 0.08 + index * 0.06, duration: 0.4 }
                : { delay: 0.12, duration: 0.4 }
            }
            className="flex items-start gap-3"
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${item.iconWrapClass}`}
            >
              <Icon
                className={`h-[18px] w-[18px] ${item.iconClass}`}
                aria-hidden="true"
              />
            </span>
            <div className="min-w-0 space-y-0.5">
              <p className="text-[11px] font-bold tracking-[0.12em] text-slate-400">
                {item.number}
              </p>
              <h3 className="font-heading text-[15px] font-bold leading-snug tracking-tight text-slate-900">
                {item.title}
              </h3>
              <p className="text-[13px] font-medium leading-snug text-slate-600">
                {item.description}
              </p>
            </div>
          </motion.li>
        )
      })}
    </ul>
  )
}

export default function FleetFinancialsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="fleet-financials"
      className="section-showcase relative overflow-hidden border-b border-slate-200/70 bg-[#F8FAFC]"
      aria-label="Fleet financials for cost and revenue visibility"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(37,99,235,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Centered header */}
        <div className="mx-auto mb-10 max-w-[780px] text-center lg:mb-14">
          <motion.p
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-showcase-eyebrow mb-5 inline-flex items-center rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1 text-blue-600"
          >
            FLEET FINANCIALS
          </motion.p>

          <motion.h2
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-showcase-h1 font-semibold tracking-[-0.035em] text-slate-900"
          >
            See where your{" "}
            <span className="gradient-text">fleet money goes.</span>
          </motion.h2>

          <motion.p
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mx-auto mt-5 max-w-[640px] text-[17px] leading-relaxed text-slate-600 sm:text-lg"
          >
            Track operational costs and commercial activity connected to your
            fleet — from trip pricing and rentals to fuel, maintenance, and
            related operating records. Get clearer visibility to make better
            day-to-day decisions.
          </motion.p>
        </div>

        {/* Benefits + dashboard visual */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          <div className="order-1 hidden lg:col-span-4 lg:block">
            <BenefitList
              shouldReduceMotion={shouldReduceMotion}
              stagger
              className="space-y-5"
            />
          </div>

          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 18, scale: 0.98 }
            }
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative order-2 lg:col-span-8"
          >
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(circle at 50% 55%, rgba(37,99,235,0.08) 0%, transparent 65%)",
              }}
            />
            <img
              src={encodeURI(FINANCIAL_DASHBOARD_IMAGE)}
              alt="DriveOps fleet financial overview showing trip and rental commercial activity alongside fuel and maintenance cost visibility on desktop and mobile"
              width={1400}
              height={900}
              loading="lazy"
              decoding="async"
              className="relative z-10 mx-auto h-auto w-full object-contain object-center"
              draggable={false}
            />
          </motion.div>

          <div className="order-3 lg:hidden">
            <BenefitList
              shouldReduceMotion={shouldReduceMotion}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            />
          </div>
        </div>

        {/* Outcome strip */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mx-auto mt-10 w-full rounded-[20px] border border-[#E2E8F0] bg-white/65 p-5 sm:mt-12 sm:p-6 lg:mt-14"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-slate-200/80">
            {OUTCOMES.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3 lg:px-5 first:lg:pl-0 last:lg:pr-0"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${item.iconWrapClass}`}
                  >
                    <Icon
                      className={`h-[18px] w-[18px] ${item.iconClass}`}
                      aria-hidden="true"
                    />
                  </span>
                  <div className="min-w-0 space-y-0.5">
                    <h4 className="font-heading text-[15px] font-bold leading-snug tracking-tight text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-[13px] font-medium leading-snug text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
