import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  Building2,
  Bus,
  Car,
  Check,
  FileCheck2,
  KeyRound,
  Layers,
  TrendingUp,
  Zap,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const PLATFORM_VISUAL =
  "/images/features/DriveOps Fleet Management Showcase.webp"

type AccentTheme = "blue" | "teal" | "purple" | "orange"

type BusinessType = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  accent: AccentTheme
  capabilities: string[]
}

type BenefitItem = {
  title: string
  description: string
  icon: LucideIcon
}

const ACCENTS: Record<
  AccentTheme,
  {
    iconWrap: string
    icon: string
    check: string
    glow: string
  }
> = {
  blue: {
    iconWrap: "border-blue-100 bg-blue-50",
    icon: "text-blue-600",
    check: "text-blue-600",
    glow: "rgba(37,99,235,0.08)",
  },
  teal: {
    iconWrap: "border-teal-100 bg-teal-50",
    icon: "text-teal-600",
    check: "text-teal-600",
    glow: "rgba(13,148,136,0.08)",
  },
  purple: {
    iconWrap: "border-violet-100 bg-violet-50",
    icon: "text-violet-600",
    check: "text-violet-600",
    glow: "rgba(124,58,237,0.07)",
  },
  orange: {
    iconWrap: "border-orange-100 bg-orange-50",
    icon: "text-orange-600",
    check: "text-orange-600",
    glow: "rgba(234,88,12,0.07)",
  },
}

const BUSINESS_TYPES: BusinessType[] = [
  {
    id: "taxi",
    title: "Taxi & Cab Fleets",
    description:
      "Manage daily trips, drivers, vehicles and dispatch from one place.",
    icon: Car,
    accent: "blue",
    capabilities: [
      "Daily and ad-hoc trips",
      "Driver and vehicle management",
      "Dispatch and assignment",
      "Customer management",
    ],
  },
  {
    id: "travel",
    title: "Travel & Transport Operators",
    description:
      "Coordinate scheduled trips, drivers and customer communication.",
    icon: Bus,
    accent: "teal",
    capabilities: [
      "Scheduled and recurring trips",
      "Driver coordination",
      "Trip and vehicle assignment",
      "Customer updates through WhatsApp",
    ],
  },
  {
    id: "corporate",
    title: "Corporate Transport",
    description:
      "Manage recurring employee or staff transportation and daily operations.",
    icon: Building2,
    accent: "purple",
    capabilities: [
      "Recurring trip schedules",
      "Driver and vehicle assignment",
      "Daily trip operations",
      "Multi-location operations where supported",
    ],
  },
  {
    id: "rental",
    title: "Self-Drive Rental Operators",
    description:
      "Manage rental vehicles, reservations, handovers, returns and payment recording.",
    icon: KeyRound,
    accent: "orange",
    capabilities: [
      "Vehicle availability",
      "Reservations",
      "Handover and return",
      "Payment recording",
    ],
  },
]

const BENEFITS: BenefitItem[] = [
  {
    title: "Complete operations",
    description: "From daily trips to long-term rentals.",
    icon: Layers,
  },
  {
    title: "Improve efficiency",
    description: "Reduce time spent coordinating repetitive work.",
    icon: Zap,
  },
  {
    title: "Stay compliant",
    description: "Keep important vehicle and driver documents visible.",
    icon: FileCheck2,
  },
  {
    title: "Grow with confidence",
    description: "Better operational visibility across your fleet.",
    icon: TrendingUp,
  },
]

function fadeUp(shouldReduceMotion: boolean | null, y = 12) {
  return shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y }
}

function BenefitGrid({
  shouldReduceMotion,
  className,
  keyPrefix = "",
}: {
  shouldReduceMotion: boolean | null
  className?: string
  keyPrefix?: string
}) {
  return (
    <div className={className}>
      {BENEFITS.map((benefit, index) => {
        const Icon = benefit.icon
        return (
          <motion.div
            key={`${keyPrefix}${benefit.title}`}
            initial={fadeUp(shouldReduceMotion, 12)}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.08 + index * 0.06 }}
            className="flex gap-3 rounded-xl border border-slate-100 bg-white/70 p-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-900">
                {benefit.title}
              </p>
              <p className="mt-1 text-sm leading-snug text-slate-600">
                {benefit.description}
              </p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function BuiltForFleetSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="built-for-fleet"
      className="section-showcase relative overflow-hidden border-b border-slate-200/70 bg-[#F8FAFC]"
      aria-label="Built for fleet operations"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 50% 10%, rgba(37,99,235,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <motion.p
            initial={fadeUp(shouldReduceMotion, 10)}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-showcase-eyebrow mb-5 inline-flex items-center rounded-full border border-blue-100 bg-blue-50/70 px-3.5 py-1.5 text-blue-600"
          >
            Built for Fleet Operations
          </motion.p>

          <motion.h2
            initial={fadeUp(shouldReduceMotion, 12)}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-showcase-h1 font-semibold tracking-[-0.035em] text-slate-900"
          >
            One platform. Built for the way{" "}
            <span className="gradient-text">fleet operators actually work.</span>
          </motion.h2>

          <motion.p
            initial={fadeUp(shouldReduceMotion, 12)}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-slate-600 sm:text-lg"
          >
            Manage trips, drivers, vehicles, dispatch, fleet care, communication
            and rentals from one connected platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          {BUSINESS_TYPES.map((item, index) => {
            const Icon = item.icon
            const accent = ACCENTS[item.accent]

            return (
              <motion.article
                key={item.id}
                initial={fadeUp(shouldReduceMotion, 16)}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)] sm:p-7"
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl"
                  aria-hidden="true"
                  style={{ background: accent.glow }}
                />

                <div
                  className={`relative mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border ${accent.iconWrap}`}
                >
                  <Icon className={`h-5 w-5 ${accent.icon}`} aria-hidden="true" />
                </div>

                <h3 className="relative font-heading text-lg font-bold leading-tight tracking-tight text-slate-900 sm:text-xl">
                  {item.title}
                </h3>

                <p className="relative mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>

                <ul className="relative mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                  {item.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start gap-2.5 text-sm font-medium text-slate-700"
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${accent.check}`}
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>

        {/* Platform overview — mobile: copy → image → benefits */}
        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="order-1">
            <motion.p
              initial={fadeUp(shouldReduceMotion, 10)}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-showcase-eyebrow mb-5 inline-flex w-fit items-center rounded-full border border-blue-100 bg-blue-50/70 px-3.5 py-1.5 text-blue-600"
            >
              One Connected Platform
            </motion.p>

            <motion.h3
              initial={fadeUp(shouldReduceMotion, 12)}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-showcase-h1 font-semibold tracking-[-0.035em] text-slate-900"
            >
              Everything your fleet needs,{" "}
              <span className="gradient-text">in one place.</span>
            </motion.h3>

            <motion.p
              initial={fadeUp(shouldReduceMotion, 12)}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="mt-5 max-w-xl text-[17px] leading-relaxed text-slate-600"
            >
              Manage trips, drivers, vehicles, fleet care, communication and
              rentals from a single operational system.
            </motion.p>

            <BenefitGrid
              shouldReduceMotion={shouldReduceMotion}
              className="mt-8 hidden grid-cols-1 gap-4 sm:grid-cols-2 lg:grid"
            />
          </div>

          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, x: 12 }
            }
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="relative order-2"
          >
            <div
              className="pointer-events-none absolute -inset-6 rounded-full opacity-80 blur-3xl sm:-inset-10"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.14) 0%, transparent 68%)",
              }}
            />
            <img
              src={PLATFORM_VISUAL}
              alt="DriveOps Live Fleet dashboard and Driver App showing trips, active vehicles, drivers, and fleet operations"
              loading="lazy"
              decoding="async"
              className="relative z-10 mx-auto h-auto w-full max-w-xl drop-shadow-[0_18px_40px_rgba(15,23,42,0.14)] lg:max-w-none"
            />
          </motion.div>

          <BenefitGrid
            shouldReduceMotion={shouldReduceMotion}
            keyPrefix="mobile-"
            className="order-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden"
          />
        </div>
      </div>
    </section>
  )
}
