import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Repeat,
  Send,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const RECURRING_TRIPS_IMAGE =
  "/images/features/Airport Trip Scheduling Dashboard.png"
const WORKFLOW_IMAGE =
  "/images/features/Five-Step Recurring Trip Workflow.png"

const SIGNUP_URL = "https://driveops.chatserve.in/signup"

type BenefitItem = {
  title: string
  description: string
  icon: LucideIcon
  iconClass: string
  iconWrapClass: string
}

const BENEFITS: BenefitItem[] = [
  {
    title: "Flexible Schedules",
    description: "Create daily, weekly or monthly trip schedules.",
    icon: CalendarDays,
    iconClass: "text-violet-600",
    iconWrapClass: "border-violet-100 bg-violet-50",
  },
  {
    title: "Save Time",
    description: "No need to create the same trip again and again.",
    icon: Clock3,
    iconClass: "text-emerald-600",
    iconWrapClass: "border-emerald-100 bg-emerald-50",
  },
  {
    title: "Consistent Operations",
    description: "Keep regular trips automatically planned and ready.",
    icon: Repeat,
    iconClass: "text-orange-600",
    iconWrapClass: "border-orange-100 bg-orange-50",
  },
  {
    title: "Ready for Dispatch",
    description:
      "Automatically created trips can be assigned and operated as usual.",
    icon: Send,
    iconClass: "text-blue-600",
    iconWrapClass: "border-blue-100 bg-blue-50",
  },
]

function BenefitList({
  items,
  className,
}: {
  items: BenefitItem[]
  className?: string
}) {
  return (
    <ul className={className}>
      {items.map((item) => {
        const Icon = item.icon
        return (
          <li key={item.title} className="flex items-start gap-3">
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${item.iconWrapClass}`}
            >
              <Icon
                className={`h-[18px] w-[18px] ${item.iconClass}`}
                aria-hidden="true"
              />
            </span>
            <div className="min-w-0 space-y-0.5">
              <h3 className="font-heading text-[15px] font-bold leading-snug tracking-tight text-slate-900">
                {item.title}
              </h3>
              <p className="text-[13px] font-medium leading-snug text-slate-600">
                {item.description}
              </p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

function CtaGroup({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={SIGNUP_URL}
          className="text-showcase-cta inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-white shadow-sm shadow-blue-600/25 transition-colors hover:bg-blue-500"
        >
          Start Free Trial
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="/#workflow"
          className="text-showcase-cta inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600"
        >
          See How It Works
        </a>
      </div>
      <p className="mt-4 max-w-md text-[12px] leading-snug text-slate-500">
        Your recurring trips become normal DriveOps trips—ready for dispatch
        and daily operations.
      </p>
    </div>
  )
}

export default function RecurringTripsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="recurring-trips"
      className="section-showcase relative overflow-hidden border-b border-slate-200/70 bg-[#F8FAFC]"
      aria-label="Recurring trip schedules that automatically create trips"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, rgba(37,99,235,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          <div className="order-1 lg:col-span-5">
            <motion.p
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-showcase-eyebrow mb-5 inline-flex items-center rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1 text-blue-600"
            >
              RECURRING TRIPS
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
              Create once.
              <br />
              <span className="gradient-text">Trips keep coming.</span>
            </motion.h2>

            <motion.p
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="mt-5 max-w-md text-[17px] leading-relaxed text-slate-600 sm:text-lg"
            >
              Set up daily, weekly or monthly trip schedules and let DriveOps
              automatically create the trips for you.
            </motion.p>

            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 hidden lg:block"
            >
              <BenefitList
                items={BENEFITS}
                className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-6"
              />
            </motion.div>

            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24 }}
              className="mt-8 hidden lg:block"
            >
              <CtaGroup />
            </motion.div>
          </div>

          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative order-2 lg:col-span-7"
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
              src={encodeURI(RECURRING_TRIPS_IMAGE)}
              alt="DriveOps recurring trip schedule creating weekly airport trips automatically, shown alongside the generated trip list"
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
              className="relative z-10 mx-auto h-auto w-full object-contain object-center"
              draggable={false}
            />
          </motion.div>

          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="order-3 lg:hidden"
          >
            <BenefitList
              items={BENEFITS}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            />
            <CtaGroup className="mt-6" />
          </motion.div>
        </div>

        {/* How recurring trips work */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-10 w-full min-w-0 sm:mt-12"
        >
          <p className="mb-4 px-1 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mb-5">
            How recurring trips work
          </p>

          <div className="relative mx-auto w-full min-w-0 max-w-[1400px]">
            {/* Edge fades — hint horizontal scroll below xl */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 bg-gradient-to-r from-[#F8FAFC] to-transparent sm:w-8 xl:hidden"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 bg-gradient-to-l from-[#F8FAFC] to-transparent sm:w-8 xl:hidden"
              aria-hidden="true"
            />

            <div
              className="touch-pan-x w-full overflow-x-auto overflow-y-hidden overscroll-x-contain [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] [scrollbar-color:rgba(148,163,184,0.55)_transparent] xl:overflow-visible"
              role="region"
              aria-label="How recurring trips work — scroll horizontally on smaller screens"
              tabIndex={0}
            >
              <img
                src={encodeURI(WORKFLOW_IMAGE)}
                alt="Five-step recurring trip workflow: create schedule, schedule active, trips automatically created, assign and operate, and trips run as usual"
                width={1920}
                height={900}
                loading="lazy"
                decoding="async"
                className="mx-auto block h-auto w-full min-w-[900px] max-w-none object-contain object-center sm:min-w-[980px] md:min-w-[1080px] xl:min-w-0 xl:max-w-full"
                draggable={false}
              />
            </div>

            <p className="mt-3 text-center text-[11px] leading-snug text-slate-400 xl:hidden">
              Swipe to see all five steps
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
