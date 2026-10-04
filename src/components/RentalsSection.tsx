import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  CalendarDays,
  ClipboardList,
  CreditCard,
  KeyRound,
  Car,
  Wallet,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"

const RENTALS_IMAGE =
  "/images/features/Car Rental Handover Dashboard in Sunshine.png"

type CapabilityItem = {
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

const CAPABILITIES: CapabilityItem[] = [
  {
    title: "Vehicle Availability",
    description: "Check vehicle availability and manage rental dates.",
    icon: CalendarDays,
    iconClass: "text-blue-600",
    iconWrapClass: "border-blue-100 bg-blue-50",
  },
  {
    title: "Reservations",
    description: "Create and confirm self-drive rental reservations.",
    icon: ClipboardList,
    iconClass: "text-violet-600",
    iconWrapClass: "border-violet-100 bg-violet-50",
  },
  {
    title: "Rental Operations",
    description: "Manage handover, return and vehicle condition.",
    icon: KeyRound,
    iconClass: "text-orange-600",
    iconWrapClass: "border-orange-100 bg-orange-50",
  },
  {
    title: "Payment Recording",
    description:
      "Record rental payments received through supported payment methods.",
    icon: CreditCard,
    iconClass: "text-emerald-600",
    iconWrapClass: "border-emerald-100 bg-emerald-50",
  },
]

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "Check Availability",
    description: "View vehicle availability for your dates.",
    icon: CalendarDays,
    iconClass: "text-blue-600",
    iconWrapClass: "border-blue-100 bg-blue-50",
    preview: ["Available", "Booked", "KL XX XX XXXX"],
  },
  {
    step: "02",
    title: "Create Reservation",
    description: "Create and confirm the rental reservation.",
    icon: ClipboardList,
    iconClass: "text-violet-600",
    iconWrapClass: "border-violet-100 bg-violet-50",
    preview: ["Rohit Menon", "Confirmed", "10–12 Oct"],
  },
  {
    step: "03",
    title: "Vehicle Handover",
    description: "Verify documents and complete the handover.",
    icon: KeyRound,
    iconClass: "text-orange-600",
    iconWrapClass: "border-orange-100 bg-orange-50",
    preview: ["Docs Verified", "Agreement Signed", "Handover Done"],
  },
  {
    step: "04",
    title: "Return & Inspection",
    description: "Record return details and inspect vehicle condition.",
    icon: Car,
    iconClass: "text-emerald-600",
    iconWrapClass: "border-emerald-100 bg-emerald-50",
    preview: ["Fuel Checked", "Condition: Good", "Photos Added"],
  },
  {
    step: "05",
    title: "Record Payment",
    description: "Record rental payments received manually.",
    icon: Wallet,
    iconClass: "text-sky-600",
    iconWrapClass: "border-sky-100 bg-sky-50",
    preview: ["UPI", "Payment Recorded", "₹ 6,000"],
  },
]

function CapabilityList({
  items,
  className,
}: {
  items: CapabilityItem[]
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

export default function RentalsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="rentals"
      className="section-showcase relative overflow-hidden border-b border-slate-200/70 bg-[#F8FAFC]"
      aria-label="Self-drive rentals managed alongside fleet operations"
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
          {/* Copy + capabilities */}
          <div className="order-1 lg:col-span-5">
            <motion.p
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-showcase-eyebrow mb-5 inline-flex items-center rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1 text-blue-600"
            >
              SELF-DRIVE RENTALS
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
              Run <span className="text-blue-600">self-drive rentals</span>
              <br />
              alongside your fleet.
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
              Manage vehicle availability, reservations, handovers, returns and
              payments from the same platform you use to operate your fleet.
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
              <CapabilityList
                items={CAPABILITIES}
                className="grid grid-cols-2 gap-x-6 gap-y-5"
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
              <Link
                to="/solutions/self-drive-rental"
                className="text-showcase-cta inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                Explore rental solution
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
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
              src={encodeURI(RENTALS_IMAGE)}
              alt="DriveOps self-drive rentals workspace showing vehicle availability, ops rental details, handover checklist, and manual payment recording"
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
              className="relative z-10 mx-auto h-auto w-full object-contain object-center"
              draggable={false}
            />
            <p className="mt-3 text-center text-[11px] leading-snug text-slate-400 sm:text-left lg:text-center">
              Ops can also extend an active rental when needed.
            </p>
          </motion.div>

          {/* Mobile / tablet capabilities — after visual */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="order-3 lg:hidden"
          >
            <CapabilityList
              items={CAPABILITIES}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            />
            <Link
              to="/solutions/self-drive-rental"
              className="text-showcase-cta mt-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              Explore rental solution
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Rental lifecycle workflow */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-10 sm:mt-12"
        >
          <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            Rental lifecycle
          </p>

          {/* Desktop horizontal workflow */}
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
                            className="truncate text-[11px] leading-snug text-slate-600"
                          >
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

          {/* Mobile / tablet vertical timeline */}
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

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-500">
          DriveOps records rental payments manually. It does not currently
          provide an online payment gateway or automated invoicing.
        </p>
      </div>
    </section>
  )
}
