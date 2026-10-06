import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  CalendarDays,
  ClipboardList,
  CreditCard,
  KeyRound,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Link } from "react-router-dom"

const RENTALS_IMAGE =
  "/images/features/Car Rental Handover Dashboard in Sunshine.webp"
const WORKFLOW_IMAGE =
  "/images/features/Five-Step Vehicle Rental Workflow.webp"

type CapabilityItem = {
  title: string
  description: string
  icon: LucideIcon
  iconClass: string
  iconWrapClass: string
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
                to="/solutions/self-drive-rentals"
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
              to="/solutions/self-drive-rentals"
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
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-10 w-full sm:mt-12"
        >
          <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:mb-5">
            Rental lifecycle
          </p>

          <div className="relative mx-auto w-full max-w-[1400px]">
            {/* Edge fades hint horizontal scroll on smaller screens */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[#F8FAFC] to-transparent lg:hidden"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[#F8FAFC] to-transparent lg:hidden"
              aria-hidden="true"
            />

            <div
              className="w-full overflow-x-auto overflow-y-hidden overscroll-x-contain [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] [scrollbar-color:rgba(148,163,184,0.5)_transparent] lg:overflow-visible"
              role="region"
              aria-label="Rental lifecycle workflow — scroll horizontally on smaller screens"
            >
              <img
                src={encodeURI(WORKFLOW_IMAGE)}
                alt="Five-step vehicle rental workflow: check availability, create reservation, vehicle handover, return and inspection, and record payment"
                width={1920}
                height={900}
                loading="lazy"
                decoding="async"
                className="mx-auto h-auto w-full min-w-[860px] max-w-none object-contain object-center md:min-w-[960px] lg:min-w-0 lg:max-w-full"
                draggable={false}
              />
            </div>

            <p className="mt-3 text-center text-[11px] text-slate-400 lg:hidden">
              Swipe to see all five steps
            </p>
          </div>
        </motion.div>

        <p className="mx-auto mt-6 max-w-2xl px-2 text-center text-xs leading-relaxed text-slate-500 sm:mt-8">
          DriveOps records rental payments manually. It does not currently
          provide an online payment gateway or automated invoicing.
        </p>
      </div>
    </section>
  )
}
