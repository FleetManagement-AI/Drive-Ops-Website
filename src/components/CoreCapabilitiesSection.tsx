import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  CalendarDays,
  Repeat,
  Send,
  UserRound,
  Car,
  Package,
  Smartphone,
  BadgeCheck,
  Navigation,
  FileText,
  Fuel,
  AlertTriangle,
  MapPinned,
  MessageCircle,
  Bell,
  Star,
  Wrench,
  ShieldCheck,
  FolderOpen,
  RefreshCw,
  KeyRound,
  ArrowLeftRight,
  CreditCard,
  ArrowDown,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type ChipTone =
  | "blue"
  | "violet"
  | "sky"
  | "indigo"
  | "cyan"
  | "emerald"
  | "amber"
  | "orange"
  | "rose"
  | "teal"
  | "slate"

const CHIP_TONES: Record<ChipTone, string> = {
  blue: "border-blue-200 bg-blue-50 text-blue-700",
  violet: "border-violet-200 bg-violet-50 text-violet-700",
  sky: "border-sky-200 bg-sky-50 text-sky-700",
  indigo: "border-indigo-200 bg-indigo-50 text-indigo-700",
  cyan: "border-cyan-200 bg-cyan-50 text-cyan-700",
  emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
  amber: "border-amber-200 bg-amber-50 text-amber-700",
  orange: "border-orange-200 bg-orange-50 text-orange-700",
  rose: "border-rose-200 bg-rose-50 text-rose-700",
  teal: "border-teal-200 bg-teal-50 text-teal-700",
  slate: "border-slate-200 bg-slate-50 text-slate-700",
}

const CHIP_ICON_TONES: Record<ChipTone, string> = {
  blue: "text-blue-500",
  violet: "text-violet-500",
  sky: "text-sky-500",
  indigo: "text-indigo-500",
  cyan: "text-cyan-500",
  emerald: "text-emerald-500",
  amber: "text-amber-500",
  orange: "text-orange-500",
  rose: "text-rose-500",
  teal: "text-teal-500",
  slate: "text-slate-500",
}

type CapabilityChip = {
  label: string
  icon: LucideIcon
  tone: ChipTone
}

type Capability = {
  id: string
  number: string
  eyebrow: string
  heading: string
  description: string
  chips: CapabilityChip[]
  image: string
  imageAlt: string
  /** Desktop: text on left (visual right) vs text on right (visual left) */
  align: "text-left" | "text-right"
}

const CAPABILITIES: Capability[] = [
  {
    id: "plan-dispatch",
    number: "01",
    eyebrow: "PLAN & DISPATCH",
    heading: "Plan every trip.\nAssign with confidence.",
    description:
      "Create trips, manage schedules, find the right driver and vehicle, and dispatch without jumping between calls and spreadsheets.",
    chips: [
      { label: "Trips & Scheduling", icon: CalendarDays, tone: "blue" },
      { label: "Recurring Trips", icon: Repeat, tone: "violet" },
      { label: "Dispatch", icon: Send, tone: "sky" },
      { label: "Driver Assignment", icon: UserRound, tone: "indigo" },
      { label: "Vehicle Assignment", icon: Car, tone: "cyan" },
      { label: "Packages", icon: Package, tone: "emerald" },
    ],
    image: "/images/features/Create Trip Dashboard Mockup.webp",
    imageAlt:
      "DriveOps Create Trip interface with recommended driver and vehicle assignment",
    align: "text-left",
  },
  {
    id: "operate",
    number: "02",
    eyebrow: "OPERATE",
    heading: "Give drivers everything they need on the road.",
    description:
      "Keep drivers connected with trip assignments, duty status, navigation, trip execution, trip sheets and operational updates.",
    chips: [
      { label: "Driver App", icon: Smartphone, tone: "blue" },
      { label: "Duty Management", icon: BadgeCheck, tone: "emerald" },
      { label: "Trip Execution", icon: Send, tone: "sky" },
      { label: "Navigation", icon: Navigation, tone: "indigo" },
      { label: "Trip Sheets", icon: FileText, tone: "violet" },
      { label: "Fuel Logs", icon: Fuel, tone: "amber" },
      { label: "Vehicle Issues", icon: AlertTriangle, tone: "orange" },
    ],
    image: "/images/features/Trip Assignment App Flow.webp",
    imageAlt:
      "DriveOps trip assignment flow from WhatsApp to Driver App and trip sheet",
    align: "text-right",
  },
  {
    id: "track-connect",
    number: "03",
    eyebrow: "TRACK & CONNECT",
    heading: "Know what's happening. Keep everyone informed.",
    description:
      "Track active vehicles, keep drivers connected through WhatsApp, share trip updates with customers and collect feedback after completed trips.",
    chips: [
      { label: "Live Fleet", icon: MapPinned, tone: "blue" },
      { label: "Driver WhatsApp", icon: MessageCircle, tone: "emerald" },
      { label: "Customer Updates", icon: Bell, tone: "sky" },
      { label: "Trip Tracking", icon: Navigation, tone: "indigo" },
      { label: "Notifications", icon: Bell, tone: "amber" },
      { label: "Customer Reviews", icon: Star, tone: "orange" },
    ],
    image: "/images/features/Live Fleet Tracking Dashboard.webp",
    imageAlt:
      "DriveOps Live Fleet map with vehicle status, customer updates, and reviews",
    align: "text-left",
  },
  {
    id: "fleet-care",
    number: "04",
    eyebrow: "FLEET CARE",
    heading: "Keep your fleet ready for the next trip.",
    description:
      "Manage fuel records, maintenance jobs, vehicle documents and driver compliance from one place.",
    chips: [
      { label: "Fuel Management", icon: Fuel, tone: "amber" },
      { label: "Maintenance", icon: Wrench, tone: "blue" },
      { label: "Compliance", icon: ShieldCheck, tone: "rose" },
      { label: "Vehicle Documents", icon: FolderOpen, tone: "violet" },
      { label: "Renewals", icon: RefreshCw, tone: "teal" },
      { label: "Expiry Alerts", icon: Bell, tone: "orange" },
    ],
    image: "/images/features/fleet-care-fuel-transparent.webp",
    imageAlt:
      "DriveOps Fleet Care showing fuel management, maintenance, and compliance",
    align: "text-right",
  },
  {
    id: "rentals",
    number: "05",
    eyebrow: "RENTALS",
    heading: "Run self-drive rentals alongside your fleet.",
    description:
      "Manage vehicle availability, reservations, handover, returns and recorded rental payments from the same platform.",
    chips: [
      { label: "Vehicle Availability", icon: Car, tone: "cyan" },
      { label: "Reservations", icon: CalendarDays, tone: "violet" },
      { label: "Handover", icon: KeyRound, tone: "blue" },
      { label: "Returns", icon: ArrowLeftRight, tone: "teal" },
      { label: "Recorded Payments", icon: CreditCard, tone: "emerald" },
    ],
    image: "/images/features/Vehicle Availability and New Reservation.webp",
    imageAlt:
      "DriveOps rental vehicle availability list and new reservation form",
    align: "text-left",
  },
]

function CapabilityBlock({
  capability,
  index,
  shouldReduceMotion,
}: {
  capability: Capability
  index: number
  shouldReduceMotion: boolean | null
}) {
  const textFirstOnDesktop = capability.align === "text-left"

  return (
    <div
      id={capability.id}
      className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16"
    >
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.04 }}
        className={`order-1 lg:col-span-5 ${
          textFirstOnDesktop ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="flex items-center gap-2.5 mb-4">
          <span className="text-sm font-semibold tracking-wide text-blue-600">
            {capability.number}
          </span>
          <span className="text-showcase-eyebrow text-blue-600">
            {capability.eyebrow}
          </span>
        </div>

        <h3 className="font-heading text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2.25rem] font-semibold tracking-[-0.03em] leading-[1.15] text-slate-900 whitespace-pre-line">
          {capability.heading}
        </h3>

        <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-slate-600 max-w-md">
          {capability.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {capability.chips.map((chip) => {
            const Icon = chip.icon
            return (
              <li
                key={chip.label}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium ${CHIP_TONES[chip.tone]}`}
              >
                <Icon
                  className={`h-3.5 w-3.5 shrink-0 ${CHIP_ICON_TONES[chip.tone]}`}
                  aria-hidden="true"
                />
                {chip.label}
              </li>
            )
          })}
        </ul>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, delay: 0.12 }}
        className={`relative order-2 lg:col-span-7 ${
          textFirstOnDesktop ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 65%)",
          }}
        />
        <img
          src={encodeURI(capability.image)}
          alt={capability.imageAlt}
          width={1400}
          height={750}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          className="relative z-10 mx-auto h-auto w-full object-contain object-center"
          draggable={false}
        />
      </motion.div>
    </div>
  )
}

export default function CoreCapabilitiesSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="core-capabilities"
      className="section-showcase relative overflow-hidden border-b border-slate-200/70 bg-[#F8FAFC]"
      aria-label="Core capabilities for fleet operations"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(37,99,235,0.06) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-[700px] text-center lg:mb-20">
          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-showcase-eyebrow mb-5 inline-flex items-center rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1 text-blue-600"
          >
            CORE CAPABILITIES
          </motion.p>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-showcase-h1 font-semibold text-slate-900"
          >
            Everything you need to{" "}
            <span className="text-blue-600">run the operation.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-showcase-desc mx-auto mt-5 max-w-[700px] text-slate-600"
          >
            From planning and dispatch to driver operations, fleet care and
            rentals, DriveOps brings the essential parts of your fleet operation
            together.
          </motion.p>
        </div>

        <div className="space-y-28 lg:space-y-32">
          {CAPABILITIES.map((capability, index) => (
            <CapabilityBlock
              key={capability.id}
              capability={capability}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-20 lg:mt-24 text-center"
        >
          <p className="text-base sm:text-lg font-medium tracking-[-0.01em] text-slate-700">
            Built around the way fleet operations actually work.
          </p>
          <a
            href="#connected-workflow"
            className="mt-3 inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-blue-600"
          >
            See how it works
            <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
