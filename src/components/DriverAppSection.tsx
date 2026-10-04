import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  CalendarDays,
  Navigation,
  Play,
  FileText,
  Fuel,
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Bell,
  MessagesSquare,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const DRIVER_APP_IMAGE =
  "/images/features/Modern Driver Fleet App Interface.png"

type FeatureItem = {
  title: string
  description: string
  icon: LucideIcon
  iconClass: string
  iconWrapClass: string
}

const CALLOUTS: FeatureItem[] = [
  {
    title: "Trip Assignments",
    description: "See assigned and upcoming trips in one place.",
    icon: CalendarDays,
    iconClass: "text-blue-600",
    iconWrapClass: "border-blue-100 bg-blue-50",
  },
  {
    title: "Navigation",
    description: "Navigate to pickup and trip locations from the app.",
    icon: Navigation,
    iconClass: "text-sky-600",
    iconWrapClass: "border-sky-100 bg-sky-50",
  },
  {
    title: "Start & Complete Trips",
    description: "Manage the trip lifecycle from start to completion.",
    icon: Play,
    iconClass: "text-emerald-600",
    iconWrapClass: "border-emerald-100 bg-emerald-50",
  },
  {
    title: "Trip Sheets",
    description:
      "Complete trip sheets after the trip with the required details.",
    icon: FileText,
    iconClass: "text-violet-600",
    iconWrapClass: "border-violet-100 bg-violet-50",
  },
  {
    title: "Fuel Logs",
    description: "Record fuel activity from the road.",
    icon: Fuel,
    iconClass: "text-amber-600",
    iconWrapClass: "border-amber-100 bg-amber-50",
  },
  {
    title: "Report Vehicle Issues",
    description:
      "Report vehicle problems and share details with operations.",
    icon: AlertTriangle,
    iconClass: "text-red-600",
    iconWrapClass: "border-red-100 bg-red-50",
  },
]

const STRIP_ITEMS: FeatureItem[] = [
  {
    title: "Accept & Reject",
    description: "Respond to trip assignments directly from the app.",
    icon: CheckCircle2,
    iconClass: "text-emerald-600",
    iconWrapClass: "border-emerald-100 bg-emerald-50",
  },
  {
    title: "Duty & Availability",
    description: "Manage duty status and stay available for assignments.",
    icon: Clock3,
    iconClass: "text-violet-600",
    iconWrapClass: "border-violet-100 bg-violet-50",
  },
  {
    title: "Notifications",
    description: "Receive important operational updates through the app.",
    icon: Bell,
    iconClass: "text-orange-600",
    iconWrapClass: "border-orange-100 bg-orange-50",
  },
  {
    title: "Stay Connected",
    description: "Get messages and updates from your operations team.",
    icon: MessagesSquare,
    iconClass: "text-blue-600",
    iconWrapClass: "border-blue-100 bg-blue-50",
  },
]

export default function DriverAppSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="driver-app"
      className="section-showcase relative overflow-hidden border-b border-slate-200/70 bg-[#F8FAFC]"
      aria-label="DriveOps Driver App for trip execution on the road"
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
          {/* Copy */}
          <div className="order-1 lg:col-span-5">
            <motion.p
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-showcase-eyebrow mb-5 inline-flex items-center rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1 text-blue-600"
            >
              DRIVER APP
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
              Your drivers have everything they need{" "}
              <span className="text-blue-600">on the road.</span>
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
              Give drivers a simple mobile workspace to manage assigned trips,
              stay connected with operations, navigate to pickups, record trip
              details and report issues.
            </motion.p>
          </div>

          {/* Product visual */}
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
              src={encodeURI(DRIVER_APP_IMAGE)}
              alt="DriveOps Driver App showing My Trips with assigned trip details, start trip actions, navigation, trip sheets, fuel logs, and vehicle issue reporting"
              width={1400}
              height={900}
              loading="lazy"
              decoding="async"
              className="relative z-10 mx-auto h-auto w-full object-contain object-center"
              draggable={false}
            />
          </motion.div>

          {/* Mobile / tablet callouts — after visual */}
          <motion.ul
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="order-3 grid grid-cols-2 gap-x-5 gap-y-5 lg:hidden"
          >
            {CALLOUTS.map((item) => {
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
          </motion.ul>
        </div>

        {/* Bottom feature strip */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mx-auto mt-10 w-full rounded-[20px] border border-[#E2E8F0] bg-white/65 p-5 sm:mt-12 sm:p-6"
        >
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-slate-200/80">
            {STRIP_ITEMS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3 lg:px-5 first:lg:pl-0 last:lg:pr-0"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${item.iconWrapClass}`}
                  >
                    <Icon
                      className={`h-4 w-4 ${item.iconClass}`}
                      aria-hidden="true"
                    />
                  </span>
                  <div className="min-w-0 space-y-0.5">
                    <h4 className="font-heading text-[13px] font-semibold tracking-tight text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-[12px] leading-snug text-slate-500">
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
