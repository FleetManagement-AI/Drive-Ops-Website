import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Check,
  Fuel,
  HelpCircle,
  Phone,
  Users,
  Wrench,
  X,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const PROBLEM_IMAGE =
  "/images/features/Overloaded Office Workflow Chaos.png"
const SOLUTION_IMAGE =
  "/images/features/DriveOps Fleet Management Showcase.png"
const LOGO_SRC = "/logo/driveops-logo-blue-edited.png"

type ComparisonItem = {
  title: string
  description: string
  icon: LucideIcon
  iconClass: string
  iconWrapClass: string
}

const OLD_WAY_ITEMS: ComparisonItem[] = [
  {
    title: "Trips across calls & chats",
    description: "Important information is scattered across multiple channels.",
    icon: Phone,
    iconClass: "text-rose-600",
    iconWrapClass: "bg-rose-100/80 text-rose-600",
  },
  {
    title: "Driver assignments take time",
    description:
      "Matching the right driver and vehicle requires constant coordination.",
    icon: Users,
    iconClass: "text-rose-600",
    iconWrapClass: "bg-rose-100/80 text-rose-600",
  },
  {
    title: "Fuel & service records are scattered",
    description: "Receipts, records and due dates are difficult to track.",
    icon: Fuel,
    iconClass: "text-rose-600",
    iconWrapClass: "bg-rose-100/80 text-rose-600",
  },
  {
    title: "Customers keep asking for updates",
    description: "Frequent calls and messages for trip status.",
    icon: HelpCircle,
    iconClass: "text-rose-600",
    iconWrapClass: "bg-rose-100/80 text-rose-600",
  },
]

const WITH_DRIVEOPS_ITEMS: ComparisonItem[] = [
  {
    title: "Trips & dispatch in one place",
    description: "Plan, assign and manage all trips from a single platform.",
    icon: CalendarDays,
    iconClass: "text-blue-600",
    iconWrapClass: "bg-blue-100/80 text-blue-600",
  },
  {
    title: "Drivers stay connected",
    description: "Assign trips via app or WhatsApp and keep drivers aligned.",
    icon: Users,
    iconClass: "text-emerald-600",
    iconWrapClass: "bg-emerald-100/80 text-emerald-600",
  },
  {
    title: "Fleet care stays organized",
    description: "Track fuel, maintenance and document expiry alerts.",
    icon: Wrench,
    iconClass: "text-violet-600",
    iconWrapClass: "bg-violet-100/80 text-violet-600",
  },
  {
    title: "Customers stay informed",
    description:
      "Send trip confirmations, tracking links and updates automatically.",
    icon: Bell,
    iconClass: "text-amber-600",
    iconWrapClass: "bg-amber-100/80 text-amber-600",
  },
]

function ComparisonCard({
  tone,
  items,
}: {
  tone: "old" | "new"
  items: ComparisonItem[]
}) {
  const isOld = tone === "old"

  return (
    <article
      className={`flex h-full w-full flex-col rounded-2xl border p-4 sm:p-5 ${
        isOld
          ? "border-rose-200/80 bg-gradient-to-b from-rose-50/95 to-rose-50/40"
          : "border-blue-200/80 bg-gradient-to-b from-blue-50/90 to-white"
      }`}
    >
      <div className="mb-4 flex items-center gap-2">
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
            isOld ? "bg-rose-500" : "bg-blue-600"
          }`}
        >
          {isOld ? (
            <X className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
          ) : (
            <Check className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
          )}
        </span>
        <h3
          className={`text-[13px] font-extrabold uppercase tracking-[0.1em] ${
            isOld ? "text-rose-600" : "text-blue-600"
          }`}
        >
          {isOld ? "The Old Way" : "With DriveOps"}
        </h3>
      </div>

      <ul className="flex flex-1 flex-col gap-4">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <li key={item.title} className="flex items-start gap-2.5">
              <span
                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${item.iconWrapClass}`}
              >
                <Icon className={`h-4 w-4 ${item.iconClass}`} aria-hidden="true" />
              </span>
              <div className="min-w-0 space-y-0.5">
                <p className="text-[14px] font-bold leading-snug text-slate-900">
                  {item.title}
                </p>
                <p className="text-[13px] font-medium leading-snug text-slate-600">
                  {item.description}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </article>
  )
}

function LogoHub({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null
}) {
  return (
    <div className="relative z-10 flex shrink-0 flex-col items-center justify-center gap-2 px-1">
      <div className="flex items-center gap-1.5">
        <ArrowRight
          className="hidden h-5 w-5 text-blue-500 lg:block"
          strokeWidth={2.5}
          aria-hidden="true"
        />
        <motion.div
          animate={
            shouldReduceMotion ? undefined : { scale: [1, 1.04, 1] }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
          }
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white sm:h-16 sm:w-16"
          style={{
            border: "2px solid rgba(37,99,235,0.45)",
            boxShadow:
              "0 0 0 6px rgba(37,99,235,0.08), 0 8px 24px rgba(37,99,235,0.18)",
          }}
        >
          <img
            src={LOGO_SRC}
            alt="DriveOps"
            className="h-8 w-8 object-contain sm:h-9 sm:w-9"
            draggable={false}
          />
        </motion.div>
        <ArrowRight
          className="hidden h-5 w-5 text-blue-500 lg:block"
          strokeWidth={2.5}
          aria-hidden="true"
        />
      </div>
      <div className="max-w-[110px] text-center">
        <p className="text-[13px] font-extrabold leading-tight text-blue-700">
          DriveOps
        </p>
        <p className="text-[10px] font-extrabold uppercase leading-tight tracking-[0.1em] text-blue-500">
          One operating system
        </p>
      </div>
    </div>
  )
}

function CompositionStrip({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null
}) {
  return (
    <>
      {/* Desktop: horizontal narrative row */}
      <div className="hidden items-center gap-3 lg:flex xl:gap-5 2xl:gap-6">
        <div className="flex min-w-0 flex-[1.4] items-center justify-center">
          <img
            src={encodeURI(PROBLEM_IMAGE)}
            alt="Stressed fleet operator surrounded by WhatsApp messages, calls, spreadsheets, paper records, emails, and manual follow-ups"
            width={1400}
            height={1050}
            loading="lazy"
            decoding="async"
            className="h-auto w-full scale-105 object-contain object-center xl:scale-110"
            draggable={false}
          />
        </div>

        <div className="w-[200px] shrink-0 xl:w-[230px] 2xl:w-[250px]">
          <ComparisonCard tone="old" items={OLD_WAY_ITEMS} />
        </div>

        <div className="flex shrink-0 items-center px-1">
          <LogoHub shouldReduceMotion={shouldReduceMotion} />
        </div>

        <div className="w-[200px] shrink-0 xl:w-[230px] 2xl:w-[250px]">
          <ComparisonCard tone="new" items={WITH_DRIVEOPS_ITEMS} />
        </div>

        <div className="flex min-w-0 flex-[1.4] items-center justify-center">
          <img
            src={encodeURI(SOLUTION_IMAGE)}
            alt="DriveOps fleet management dashboard and Driver App — one connected operating system"
            width={1400}
            height={1050}
            loading="lazy"
            decoding="async"
            className="h-auto w-full scale-105 object-contain object-center xl:scale-110"
            draggable={false}
          />
        </div>
      </div>

      {/* Tablet: two-row composition */}
      <div className="hidden flex-col gap-8 md:flex lg:hidden">
        <div className="grid grid-cols-2 items-center gap-6">
          <img
            src={encodeURI(PROBLEM_IMAGE)}
            alt="Stressed fleet operator surrounded by WhatsApp messages, calls, spreadsheets, paper records, emails, and manual follow-ups"
            width={1400}
            height={1050}
            loading="lazy"
            decoding="async"
            className="h-auto w-full object-contain object-center"
            draggable={false}
          />
          <div className="mx-auto w-full max-w-[280px]">
            <ComparisonCard tone="old" items={OLD_WAY_ITEMS} />
          </div>
        </div>

        <div className="flex justify-center">
          <LogoHub shouldReduceMotion={shouldReduceMotion} />
        </div>

        <div className="grid grid-cols-2 items-center gap-6">
          <div className="mx-auto w-full max-w-[280px]">
            <ComparisonCard tone="new" items={WITH_DRIVEOPS_ITEMS} />
          </div>
          <img
            src={encodeURI(SOLUTION_IMAGE)}
            alt="DriveOps fleet management dashboard and Driver App — one connected operating system"
            width={1400}
            height={1050}
            loading="lazy"
            decoding="async"
            className="h-auto w-full object-contain object-center"
            draggable={false}
          />
        </div>
      </div>

      {/* Mobile: vertical narrative stack */}
      <div className="flex flex-col items-center gap-6 md:hidden">
        <img
          src={encodeURI(PROBLEM_IMAGE)}
          alt="Stressed fleet operator surrounded by WhatsApp messages, calls, spreadsheets, paper records, emails, and manual follow-ups"
          width={1400}
          height={1050}
          loading="lazy"
          decoding="async"
          className="h-auto w-full max-w-lg object-contain object-center"
          draggable={false}
        />
        <div className="w-full max-w-md">
          <ComparisonCard tone="old" items={OLD_WAY_ITEMS} />
        </div>
        <LogoHub shouldReduceMotion={shouldReduceMotion} />
        <div className="w-full max-w-md">
          <ComparisonCard tone="new" items={WITH_DRIVEOPS_ITEMS} />
        </div>
        <img
          src={encodeURI(SOLUTION_IMAGE)}
          alt="DriveOps fleet management dashboard and Driver App — one connected operating system"
          width={1400}
          height={1050}
          loading="lazy"
          decoding="async"
          className="h-auto w-full max-w-lg object-contain object-center"
          draggable={false}
        />
      </div>
    </>
  )
}

export default function ProblemSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="operational-problem"
      className="section-showcase relative overflow-hidden border-b border-slate-200/70 bg-[#F8FAFC]"
      aria-label="Why DriveOps — from scattered operations to one operating system"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(37,99,235,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8">
        {/* Centered header */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-showcase-eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-3.5 py-1.5 tracking-[0.08em] text-blue-600"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            WHY DRIVEOPS
          </motion.div>

          <motion.h2
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.07 }}
            className="text-section-heading font-semibold tracking-[-0.035em] text-slate-900"
          >
            Your fleet is moving.{" "}
            <span className="gradient-text">
              Your operations shouldn&apos;t be scattered.
            </span>
          </motion.h2>

          <motion.p
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="mx-auto mt-5 max-w-[560px] text-[17px] leading-relaxed text-slate-600 sm:text-[18px]"
          >
            DriveOps brings trips, dispatch, drivers, tracking, fleet care, and
            customer updates into one connected operating system.
          </motion.p>
        </div>

        {/* Flat composition — no card wrapper */}
        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative w-full"
        >
          <CompositionStrip shouldReduceMotion={shouldReduceMotion} />
        </motion.div>
      </div>
    </section>
  )
}

