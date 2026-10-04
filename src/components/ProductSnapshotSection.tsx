import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  CalendarDays,
  UserRound,
  Smartphone,
  MapPinned,
  Wrench,
  Car,
  MoveRight,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import type { IconType } from "react-icons"

type JourneyStep = {
  step: string
  label: string
  title: string
  description: string
  icon: LucideIcon | IconType
  iconBg: string
  iconColor: string
  accent?: boolean
}

const STEPS: JourneyStep[] = [
  {
    step: "01",
    label: "PLAN",
    title: "Create trips & schedules",
    description: "Plan one-way, round trips and recurring schedules.",
    icon: CalendarDays,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    step: "02",
    label: "ASSIGN",
    title: "Match driver & vehicle",
    description: "Find the right driver and vehicle for each trip.",
    icon: UserRound,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    step: "03",
    label: "OPERATE",
    title: "Drivers execute trips",
    description:
      "Drivers receive trip details and manage trips from the Driver App and WhatsApp.",
    icon: Smartphone,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    step: "04",
    label: "TRACK",
    title: "See active vehicles",
    description:
      "Stay updated on active vehicles and trip movement from the live fleet map.",
    icon: MapPinned,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    step: "05",
    label: "MAINTAIN",
    title: "Fuel, service & compliance",
    description: "Manage fuel records, maintenance jobs and vehicle documents.",
    icon: Wrench,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    step: "06",
    label: "CONNECT",
    title: "Keep customers informed",
    description:
      "Share trip updates and collect customer feedback after every trip.",
    icon: FaWhatsapp,
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    step: "07",
    label: "RENTALS",
    title: "Run self-drive rentals",
    description: "Manage vehicle availability, bookings, handover and returns.",
    icon: Car,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    accent: true,
  },
]

function JourneyCard({
  item,
  index,
  shouldReduceMotion,
  className = "",
}: {
  item: JourneyStep
  index: number
  shouldReduceMotion: boolean | null
  className?: string
}) {
  const Icon = item.icon

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className={`group relative z-10 flex h-[260px] w-[190px] shrink-0 flex-col rounded-[20px] border bg-white/85 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-[0_12px_36px_rgba(15,23,42,0.08)] ${
        item.accent
          ? "border-violet-200/90 bg-violet-50/35"
          : "border-[#E2E8F0]"
      } ${className}`}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <span className="text-[11px] font-semibold tracking-[0.08em] text-slate-400">
          {item.step}
        </span>
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${item.iconBg} ${item.iconColor} group-hover:brightness-95`}
        >
          <Icon size={17} strokeWidth={1.75} aria-hidden="true" />
        </div>
      </div>

      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600">
        {item.label}
      </p>
      <h3 className="font-heading mb-2.5 text-[15px] font-semibold leading-snug tracking-[-0.02em] text-slate-900">
        {item.title}
      </h3>
      <p className="mt-auto text-[13px] leading-[1.45] text-slate-500">
        {item.description}
      </p>
    </motion.article>
  )
}

function Connector() {
  return (
    <div
      className="relative z-10 flex shrink-0 items-center self-center px-0.5"
      aria-hidden="true"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-white shadow-[0_2px_10px_rgba(37,99,235,0.35)]">
        <MoveRight size={14} strokeWidth={2.5} />
      </span>
    </div>
  )
}

function JourneyTrack({
  shouldReduceMotion,
  scrollable,
}: {
  shouldReduceMotion: boolean | null
  scrollable: boolean
}) {
  return (
    <div className={`relative ${scrollable ? "" : "w-full"}`}>
      {/* Connecting line behind cards */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 flex -translate-y-1/2 items-center px-1"
        aria-hidden="true"
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-blue-400" />
        <span className="h-px flex-1 border-t border-dashed border-blue-200" />
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)]">
          <MoveRight size={12} strokeWidth={2.5} />
        </span>
      </div>

      <div
        className={`relative flex items-stretch ${
          scrollable
            ? "w-max gap-2.5 px-1 pr-12 sm:gap-3"
            : "w-full justify-between gap-1 xl:gap-1.5"
        }`}
      >
        {STEPS.map((item, idx) => (
          <React.Fragment key={item.step}>
            <JourneyCard
              item={item}
              index={idx}
              shouldReduceMotion={shouldReduceMotion}
              className={
                scrollable
                  ? "h-[270px] w-[270px] sm:w-[280px]"
                  : "h-[250px] min-w-0 flex-1 xl:h-[265px] 2xl:h-[270px] 2xl:max-w-[200px] 2xl:flex-none"
              }
            />
            {idx < STEPS.length - 1 && <Connector />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default function ProductSnapshotSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="product-snapshot"
      className="section-showcase relative overflow-hidden border-b border-slate-200/70 bg-[#F8FAFC]"
      aria-label="What DriveOps connects"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 50% 60%, rgba(37,99,235,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <p className="text-showcase-eyebrow mb-5 inline-flex items-center rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1 text-blue-600">
            Manage &amp; Operate
          </p>
          <h2 className="text-showcase-h1 mb-5 text-slate-900">
            Everything your fleet needs to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              keep moving.
            </span>
          </h2>
          <p className="text-showcase-desc mx-auto text-slate-600">
            From planning a trip to completing it, DriveOps connects the people,
            vehicles, and daily operations behind every journey.
          </p>
        </div>

        {/* Desktop: full connected journey */}
        <div className="hidden xl:block">
          <JourneyTrack shouldReduceMotion={shouldReduceMotion} scrollable={false} />
        </div>

        {/* Tablet / mobile: horizontal scroll journey */}
        <div className="relative xl:hidden">
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-14 bg-gradient-to-l from-[#F8FAFC] to-transparent"
            aria-hidden="true"
          />
          <div
            className="relative overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <JourneyTrack shouldReduceMotion={shouldReduceMotion} scrollable />
          </div>
          <p className="mt-3 text-center text-xs font-medium text-slate-400 sm:hidden">
            Swipe to see the full journey
          </p>
        </div>
      </div>
    </section>
  )
}
