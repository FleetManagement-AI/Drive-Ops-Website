import React from "react"
import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  Check,
  Clock3,
  Layers,
  Repeat,
  Target,
  TrendingUp,
  X,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import {
  FaCar,
  FaClipboardList,
  FaGasPump,
  FaMobileAlt,
  FaPaperPlane,
  FaPhone,
  FaShieldAlt,
  FaSyncAlt,
  FaTools,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa"
import type { IconType } from "react-icons"

const SIGNUP_URL = "https://driveops.chatserve.in/signup"

const OLD_WAY_IMAGE =
  "/images/features/Stressed Office Worker’s Task Overload.png"
const DRIVEOPS_IMAGE =
  "/images/features/DriveOps Fleet Dashboard Workspace.png"
const FLEET_SUNSET_IMAGE =
  "/images/features/SUV Fleet Overlooking the Skyline at Sunset.png"

type ListIcon = LucideIcon | IconType

type ListItem = {
  text: string
  icon: ListIcon
}

const OLD_WAY_ITEMS: ListItem[] = [
  {
    text: "Trips managed through calls and WhatsApp",
    icon: FaPhone,
  },
  {
    text: "Driver assignments require constant coordination",
    icon: FaUser,
  },
  {
    text: "Fuel and service records are scattered",
    icon: FaGasPump,
  },
  {
    text: "Expiry dates are easy to miss",
    icon: FaShieldAlt,
  },
  {
    text: "Customers keep asking for trip updates",
    icon: FaWhatsapp,
  },
  {
    text: "Recurring trips have to be recreated manually",
    icon: Repeat,
  },
]

const DRIVEOPS_ITEMS: ListItem[] = [
  {
    text: "Trips & schedules in one place",
    icon: FaClipboardList,
  },
  {
    text: "Dispatch and assignment connected",
    icon: FaPaperPlane,
  },
  {
    text: "Drivers connected through App + WhatsApp",
    icon: FaMobileAlt,
  },
  {
    text: "Fuel, maintenance & compliance organized",
    icon: FaTools,
  },
  {
    text: "Customers kept informed",
    icon: FaWhatsapp,
  },
  {
    text: "Recurring trips automatically created",
    icon: FaSyncAlt,
  },
  {
    text: "Self-drive rentals managed alongside your fleet",
    icon: FaCar,
  },
]

const OPERATIONAL_BENEFITS = [
  {
    title: "Simpler Operations",
    description: "Bring daily fleet workflows into one system.",
    icon: Layers,
  },
  {
    title: "Save Time",
    description: "Reduce repetitive coordination and manual work.",
    icon: Clock3,
  },
  {
    title: "Better Control",
    description: "Know what is happening across trips, drivers and vehicles.",
    icon: Target,
  },
  {
    title: "Focus on Growth",
    description:
      "Spend less time coordinating operations and more time growing the fleet.",
    icon: TrendingUp,
  },
]

function fadeUp(shouldReduceMotion: boolean | null, y = 12) {
  return shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y }
}

function ComparisonRow({
  item,
  tone,
  delay,
  shouldReduceMotion,
}: {
  item: ListItem
  tone: "old" | "new"
  delay: number
  shouldReduceMotion: boolean | null
}) {
  const Icon = item.icon
  const isOld = tone === "old"

  return (
    <motion.li
      initial={fadeUp(shouldReduceMotion, 8)}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : 0.35,
        delay: shouldReduceMotion ? 0 : delay,
      }}
      className="flex items-center gap-2.5"
    >
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${
          isOld
            ? "border-rose-100 bg-rose-50 text-rose-500"
            : "border-blue-100 bg-blue-50 text-blue-600"
        }`}
      >
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1 text-[12.5px] leading-snug text-slate-700 sm:text-[13px]">
        {item.text}
      </span>
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          isOld
            ? "bg-rose-100 text-rose-600"
            : "bg-emerald-100 text-emerald-600"
        }`}
        aria-hidden="true"
      >
        {isOld ? (
          <X className="h-3 w-3" strokeWidth={2.5} />
        ) : (
          <Check className="h-3 w-3" strokeWidth={2.5} />
        )}
      </span>
    </motion.li>
  )
}

function OldWayPanel({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null
}) {
  return (
    <motion.article
      initial={fadeUp(shouldReduceMotion, 16)}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      className="relative overflow-hidden rounded-2xl border border-rose-200/70 bg-gradient-to-b from-rose-50/90 to-white p-4 sm:p-5 lg:p-6"
    >
      <div className="mb-4 space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-rose-600">
          The Old Way
        </p>
        <h3 className="font-heading text-xl font-semibold tracking-tight text-slate-900 sm:text-[1.35rem]">
          Operations{" "}
          <span className="bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">
            scattered everywhere.
          </span>
        </h3>
        <p className="max-w-md text-[13px] leading-relaxed text-slate-600">
          Calls, WhatsApp, spreadsheets and multiple tools make fleet operations
          difficult, time consuming and error prone.
        </p>
      </div>

      <div className="mb-4 overflow-hidden rounded-xl border border-rose-100/80 bg-slate-950/5">
        <img
          src={encodeURI(OLD_WAY_IMAGE)}
          alt="Stressed fleet operator surrounded by calls, messages, notes and scattered paperwork"
          width={1536}
          height={1024}
          loading="lazy"
          decoding="async"
          className="h-auto w-full object-cover object-center"
          draggable={false}
        />
      </div>

      <ul className="space-y-2.5">
        {OLD_WAY_ITEMS.map((item, index) => (
          <ComparisonRow
            key={item.text}
            item={item}
            tone="old"
            delay={0.05 + index * 0.04}
            shouldReduceMotion={shouldReduceMotion}
          />
        ))}
      </ul>
    </motion.article>
  )
}

function DriveOpsPanel({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null
}) {
  return (
    <motion.article
      initial={fadeUp(shouldReduceMotion, 16)}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.08 }}
      className="relative overflow-hidden rounded-2xl border border-blue-200/80 bg-white p-4 shadow-sm shadow-blue-500/5 sm:p-5 lg:p-6"
    >
      <div className="mb-4 space-y-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
          With DriveOps
        </p>
        <h3 className="font-heading text-xl font-semibold tracking-tight text-slate-900 sm:text-[1.35rem]">
          One platform for your{" "}
          <span className="gradient-text">entire fleet.</span>
        </h3>
        <p className="max-w-md text-[13px] leading-relaxed text-slate-600">
          Everything connected. Simpler operations. Better control.
        </p>
      </div>

      <div className="mb-4 overflow-hidden rounded-xl border border-slate-200/80 bg-[#F8FAFC]">
        <img
          src={encodeURI(DRIVEOPS_IMAGE)}
          alt="Fleet operator working calmly with the DriveOps dashboard showing trips, vehicles, drivers and live fleet"
          width={1536}
          height={1024}
          loading="lazy"
          decoding="async"
          className="h-auto w-full object-cover object-center"
          draggable={false}
        />
      </div>

      <ul className="space-y-2.5">
        {DRIVEOPS_ITEMS.map((item, index) => (
          <ComparisonRow
            key={item.text}
            item={item}
            tone="new"
            delay={0.08 + index * 0.04}
            shouldReduceMotion={shouldReduceMotion}
          />
        ))}
      </ul>
    </motion.article>
  )
}

function TransitionIndicator({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null
}) {
  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, scale: 0.85 }
      }
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.12 }}
      className="flex items-center justify-center py-2 lg:py-0"
      aria-hidden="true"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/30 ring-4 ring-white">
        <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" />
      </div>
    </motion.div>
  )
}

function ConversionCTA({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null
}) {
  return (
    <motion.div
      initial={fadeUp(shouldReduceMotion, 16)}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : 0.1 }}
      className="relative mt-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-white sm:mt-12"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative hidden min-h-[240px] lg:block">
          <img
            src={encodeURI(FLEET_SUNSET_IMAGE)}
            alt="Fleet operator overlooking a row of SUVs against a city skyline at sunset"
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white" />
        </div>

        <div className="relative space-y-4 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08] lg:hidden"
            aria-hidden="true"
            style={{
              backgroundImage: `url("${encodeURI(FLEET_SUNSET_IMAGE)}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-10 space-y-4">
            <h3 className="font-heading text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Your fleet is moving.
              <br />
              <span className="gradient-text">
                Your operations should move with it.
              </span>
            </h3>
            <p className="text-[15px] font-medium text-slate-600">
              Manage. Operate. Grow with DriveOps.
            </p>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
              <a
                href={SIGNUP_URL}
                className="text-showcase-cta inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-white shadow-sm shadow-blue-600/25 transition-colors hover:bg-blue-500"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="text-showcase-cta inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-2.5 text-blue-700 transition-colors hover:border-blue-300 hover:bg-blue-50"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function OperationalBenefits({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null
}) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {OPERATIONAL_BENEFITS.map((benefit, index) => {
        const Icon = benefit.icon
        return (
          <motion.div
            key={benefit.title}
            initial={fadeUp(shouldReduceMotion, 10)}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.35,
              delay: shouldReduceMotion ? 0 : 0.08 + index * 0.05,
            }}
            className="flex items-start gap-3"
          >
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <div className="min-w-0 space-y-0.5">
              <h4 className="font-heading text-[12px] font-semibold uppercase tracking-[0.08em] text-slate-900">
                {benefit.title}
              </h4>
              <p className="text-[12.5px] leading-snug text-slate-500">
                {benefit.description}
              </p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function WhyDriveOpsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="why-driveops"
      className="section-showcase relative overflow-hidden border-b border-slate-200/70 bg-[#F8FAFC]"
      aria-label="Why fleet operators should use DriveOps"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 70% 20%, rgba(37,99,235,0.06) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <motion.p
            initial={fadeUp(shouldReduceMotion, 10)}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-showcase-eyebrow mb-5 inline-flex items-center rounded-full border border-blue-100 bg-blue-50/70 px-3.5 py-1.5 text-blue-600"
          >
            Why DriveOps
          </motion.p>

          <motion.h2
            initial={fadeUp(shouldReduceMotion, 12)}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-showcase-h1 font-semibold tracking-[-0.035em] text-slate-900"
          >
            Stop managing your fleet{" "}
            <span className="gradient-text">across scattered tools.</span>
          </motion.h2>

          <motion.p
            initial={fadeUp(shouldReduceMotion, 12)}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-slate-600 sm:text-lg"
          >
            Bring trips, drivers, vehicles, dispatch, fleet care, communication
            and rentals into one operational system.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr] lg:gap-4 xl:gap-5">
          <OldWayPanel shouldReduceMotion={shouldReduceMotion} />
          <TransitionIndicator shouldReduceMotion={shouldReduceMotion} />
          <DriveOpsPanel shouldReduceMotion={shouldReduceMotion} />
        </div>

        <ConversionCTA shouldReduceMotion={shouldReduceMotion} />
        <OperationalBenefits shouldReduceMotion={shouldReduceMotion} />
      </div>
    </section>
  )
}
