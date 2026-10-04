import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPinned,
  Repeat,
  Send,
  Settings2,
  Sparkles,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const RECURRING_TRIPS_IMAGE =
  "/images/features/Airport Trip Scheduling Dashboard.png"

const SIGNUP_URL = "https://driveops.chatserve.in/signup"

type BenefitItem = {
  title: string
  description: string
  icon: LucideIcon
  iconClass: string
  iconWrapClass: string
}

type WorkflowStep = {
  step: string
  title: string
  description: string
  icon: LucideIcon
  iconClass: string
  iconWrapClass: string
  preview: string[]
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

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "Create Schedule",
    description: "Set the recurring trip route, timing and frequency.",
    icon: CalendarDays,
    iconClass: "text-blue-600",
    iconWrapClass: "border-blue-100 bg-blue-50",
    preview: ["Weekly", "Mon–Fri", "07:30 AM"],
  },
  {
    step: "02",
    title: "Schedule Active",
    description: "The recurring schedule is saved and activated.",
    icon: Settings2,
    iconClass: "text-violet-600",
    iconWrapClass: "border-violet-100 bg-violet-50",
    preview: ["Active"],
  },
  {
    step: "03",
    title: "Trips Automatically Created",
    description: "DriveOps creates trips based on the schedule.",
    icon: Sparkles,
    iconClass: "text-orange-600",
    iconWrapClass: "border-orange-100 bg-orange-50",
    preview: ["TRP-10482", "Created"],
  },
  {
    step: "04",
    title: "Assign & Operate",
    description:
      "Review and assign drivers and vehicles to the created trips.",
    icon: Users,
    iconClass: "text-emerald-600",
    iconWrapClass: "border-emerald-100 bg-emerald-50",
    preview: ["Assigned"],
  },
  {
    step: "05",
    title: "Trips Run as Usual",
    description: "Drivers operate the generated trips normally.",
    icon: MapPinned,
    iconClass: "text-sky-600",
    iconWrapClass: "border-sky-100 bg-sky-50",
    preview: ["Completed"],
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
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${item.iconWrapClass}`}
            >
              <Icon
                className={`h-4 w-4 ${item.iconClass}`}
                aria-hidden="true"
              />
            </span>
            <div className="min-w-0 space-y-0.5">
              <h3 className="font-heading text-[13px] font-semibold tracking-tight text-slate-900">
                {item.title}
              </h3>
              <p className="text-[12px] leading-snug text-slate-500">
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

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
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

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-10 sm:mt-12"
        >
          <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            How recurring trips work
          </p>

          <div className="hidden lg:grid lg:grid-cols-5 lg:gap-0">
            {WORKFLOW_STEPS.map((item, idx) => {
              const Icon = item.icon
              const isLast = idx === WORKFLOW_STEPS.length - 1
              return (
                <motion.div
                  key={item.step}
                  initial={
                    shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                  className="relative px-3 first:pl-0 last:pr-0"
                >
                  {!isLast && (
                    <div
                      className="pointer-events-none absolute right-0 top-5 hidden h-px w-full translate-x-1/2 border-t border-dashed border-blue-200 lg:block"
                      aria-hidden="true"
                    />
                  )}
                  <div className="relative z-10 flex flex-col items-start gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 bg-white text-[11px] font-bold text-blue-700 shadow-sm">
                        {item.step}
                      </span>
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-xl border ${item.iconWrapClass}`}
                      >
                        <Icon
                          className={`h-3.5 w-3.5 ${item.iconClass}`}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div>
                      <h3 className="font-heading text-[13px] font-semibold tracking-tight text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[12px] leading-snug text-slate-500">
                        {item.description}
                      </p>
                    </div>
                    <div className="w-full rounded-xl border border-slate-200/80 bg-white/80 px-3 py-2.5">
                      <ul className="space-y-1">
                        {item.preview.map((line) => (
                          <li
                            key={line}
                            className="flex items-center gap-1.5 truncate text-[11px] leading-snug text-slate-600"
                          >
                            {line === "Active" ||
                            line === "Created" ||
                            line === "Assigned" ||
                            line === "Completed" ? (
                              <CheckCircle2
                                className="h-3 w-3 shrink-0 text-emerald-500"
                                aria-hidden="true"
                              />
                            ) : null}
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <ol className="relative space-y-0 lg:hidden">
            {WORKFLOW_STEPS.map((item, idx) => {
              const Icon = item.icon
              const isLast = idx === WORKFLOW_STEPS.length - 1
              return (
                <motion.li
                  key={item.step}
                  initial={
                    shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="relative flex gap-4 pb-6 last:pb-0"
                >
                  <div className="relative flex flex-col items-center">
                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-white text-[11px] font-bold text-blue-700 shadow-sm">
                      {item.step}
                    </span>
                    {!isLast && (
                      <span
                        className="mt-1 w-px flex-1 border-l border-dashed border-blue-200"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-xl border ${item.iconWrapClass}`}
                      >
                        <Icon
                          className={`h-3.5 w-3.5 ${item.iconClass}`}
                          aria-hidden="true"
                        />
                      </span>
                      <h3 className="font-heading text-[13px] font-semibold tracking-tight text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-[12px] leading-snug text-slate-500">
                      {item.description}
                    </p>
                    <div className="mt-2.5 rounded-xl border border-slate-200/80 bg-white/80 px-3 py-2.5">
                      <ul className="flex flex-wrap gap-x-3 gap-y-1">
                        {item.preview.map((line) => (
                          <li
                            key={line}
                            className="text-[11px] leading-snug text-slate-600"
                          >
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}
