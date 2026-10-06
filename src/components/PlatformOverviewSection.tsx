import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const PLATFORM_IMAGE = "/images/Modern Fleet Management Hero Scene.webp"

type PillItem = {
  label: string
  description: string
  icon: LucideIcon | string
  iconBg: string
  iconColor: string
}

const PLAN_ITEMS: PillItem[] = [
  {
    label: "Trips",
    description: "Create one-way, round-trip & full-day jobs",
    icon: "/images/icons/trips.webp",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
  },
  {
    label: "Drivers",
    description: "Assign, duty status & app access",
    icon: "/images/icons/driver.webp",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
  },
  {
    label: "Vehicles",
    description: "Fleet registry & readiness",
    icon: "/images/icons/vehicles.webp",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
  },
]

const TRACK_ITEMS: PillItem[] = [
  {
    label: "Live Fleet",
    description: "Ops map & customer tracking links",
    icon: "/images/icons/map.webp",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-700",
  },
  {
    label: "Maintenance",
    description: "Jobs, logs & upkeep tracking",
    icon: "/images/icons/maintenance.webp",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
  {
    label: "Rentals",
    description: "Availability to payment recording",
    icon: "/images/icons/car-rental.webp",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-700",
  },
]

function Pill({
  label,
  description,
  icon,
  iconBg,
  iconColor,
  align,
}: PillItem & { align?: "left" | "right" }) {
  const isRight = align === "right"
  const isImageIcon = typeof icon === "string"

  return (
    <span
      className={`inline-flex w-full max-w-[17rem] items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-3.5 py-3 shadow-[0_1px_3px_rgba(15,23,42,0.06)] sm:max-w-[18.5rem] sm:gap-3.5 sm:px-4 sm:py-3.5 lg:max-w-[20rem] lg:gap-4 lg:px-4 lg:py-4 ${
        isRight ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <span
        className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14 lg:h-[3.75rem] lg:w-[3.75rem] ${iconBg}`}
      >
        {isImageIcon ? (
          <img
            src={icon}
            alt=""
            className="h-8 w-8 object-contain sm:h-9 sm:w-9 lg:h-10 lg:w-10"
            aria-hidden="true"
          />
        ) : (
          (() => {
            const Icon = icon
            return (
              <Icon
                className={`h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 ${iconColor}`}
                aria-hidden="true"
              />
            )
          })()
        )}
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="block text-base font-semibold text-slate-900 sm:text-[17px] lg:text-lg">
          {label}
        </span>
        <span className="mt-1 block text-xs leading-snug text-slate-500 sm:text-[13px] lg:text-sm">
          {description}
        </span>
      </span>
    </span>
  )
}

function SideGroup({
  title,
  items,
  align,
  footnote,
}: {
  title: string
  items: PillItem[]
  align: "left" | "right"
  footnote?: string
}) {
  return (
    <div className="flex w-full flex-col items-start gap-3 text-left sm:gap-3.5">
      <p className="text-xs font-bold uppercase tracking-widest text-blue-600 sm:text-[13px] lg:text-sm">
        {title}
      </p>
      <ul className="flex w-full flex-col items-stretch gap-3 sm:gap-3.5">
        {items.map((item) => (
          <li key={item.label} className="w-full">
            <Pill {...item} align={align} />
          </li>
        ))}
      </ul>
      {footnote && (
        <p className="mt-0.5 max-w-[18rem] text-xs leading-snug text-slate-500 sm:text-[13px]">
          {footnote}
        </p>
      )}
    </div>
  )
}

function EcosystemBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute left-1/2 top-1/2 h-[70%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.45) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.1]"
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="600" cy="300" r="180" stroke="#2563EB" strokeWidth="1" />
        <circle cx="600" cy="300" r="260" stroke="#2563EB" strokeWidth="1" />
        <path
          d="M80 420 C 220 280, 380 500, 560 320"
          stroke="#2563EB"
          strokeWidth="1.2"
          strokeDasharray="4 5"
        />
        <path
          d="M1120 180 C 980 300, 860 140, 640 280"
          stroke="#2563EB"
          strokeWidth="1.2"
          strokeDasharray="4 5"
        />
        <circle cx="160" cy="360" r="3" fill="#2563EB" />
        <circle cx="1040" cy="220" r="3" fill="#2563EB" />
        <circle cx="420" cy="440" r="2.5" fill="#2563EB" />
        <circle cx="780" cy="160" r="2.5" fill="#2563EB" />
      </svg>
    </div>
  )
}

function ConnectorLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full md:block"
      viewBox="0 0 1000 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Bridges across the gap between side pills and illustration */}
      <path
        d="M195 78 C 250 78, 290 105, 340 135"
        stroke="#3B82F6"
        strokeWidth="1.35"
        strokeDasharray="4 3.5"
        opacity="0.5"
      />
      <path
        d="M195 155 C 255 155, 295 158, 340 162"
        stroke="#3B82F6"
        strokeWidth="1.35"
        strokeDasharray="4 3.5"
        opacity="0.48"
      />
      <path
        d="M195 232 C 250 232, 290 210, 340 190"
        stroke="#3B82F6"
        strokeWidth="1.35"
        strokeDasharray="4 3.5"
        opacity="0.45"
      />
      <circle cx="195" cy="78" r="2.75" fill="#3B82F6" opacity="0.55" />
      <circle cx="195" cy="155" r="2.75" fill="#3B82F6" opacity="0.55" />
      <circle cx="195" cy="232" r="2.75" fill="#3B82F6" opacity="0.55" />
      <circle cx="340" cy="135" r="2.25" fill="#3B82F6" opacity="0.45" />
      <circle cx="340" cy="162" r="2.25" fill="#3B82F6" opacity="0.45" />
      <circle cx="340" cy="190" r="2.25" fill="#3B82F6" opacity="0.45" />

      <path
        d="M805 78 C 750 78, 710 105, 660 135"
        stroke="#3B82F6"
        strokeWidth="1.35"
        strokeDasharray="4 3.5"
        opacity="0.5"
      />
      <path
        d="M805 155 C 745 155, 705 158, 660 162"
        stroke="#3B82F6"
        strokeWidth="1.35"
        strokeDasharray="4 3.5"
        opacity="0.48"
      />
      <path
        d="M805 232 C 750 232, 710 210, 660 190"
        stroke="#3B82F6"
        strokeWidth="1.35"
        strokeDasharray="4 3.5"
        opacity="0.45"
      />
      <circle cx="805" cy="78" r="2.75" fill="#3B82F6" opacity="0.55" />
      <circle cx="805" cy="155" r="2.75" fill="#3B82F6" opacity="0.55" />
      <circle cx="805" cy="232" r="2.75" fill="#3B82F6" opacity="0.55" />
      <circle cx="660" cy="135" r="2.25" fill="#3B82F6" opacity="0.45" />
      <circle cx="660" cy="162" r="2.25" fill="#3B82F6" opacity="0.45" />
      <circle cx="660" cy="190" r="2.25" fill="#3B82F6" opacity="0.45" />
    </svg>
  )
}

export default function PlatformOverviewSection() {
  return (
    <section
      id="platform-overview"
      className="relative overflow-hidden border-b border-slate-200/70 bg-white py-10 sm:py-12 lg:py-14"
      aria-label="Platform overview"
    >
      <EcosystemBackground />

      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-5 max-w-2xl text-center sm:mb-6">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-blue-600">
            Platform overview
          </p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem] lg:leading-tight">
            One platform for every fleet operation.
          </h2>
          <p className="mx-auto mt-2.5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            Connect vehicles, drivers, trips, fleet care and rentals in one operating
            system.
          </p>
        </div>

        {/* Desktop / tablet: clear gap + larger center image */}
        <div className="relative mx-auto hidden w-full max-w-[90rem] items-center md:flex md:gap-8 lg:gap-10 xl:gap-14">
          <ConnectorLines />

          <div className="relative z-[2] w-[17rem] shrink-0 lg:w-[18.5rem] xl:w-[20rem]">
            <SideGroup title="Plan & Dispatch" items={PLAN_ITEMS} align="left" />
          </div>

          <div className="relative z-[2] min-w-0 flex-1 px-2 lg:px-4">
            <img
              src={PLATFORM_IMAGE}
              alt="DriveOps connected fleet management dashboard showing vehicles, drivers, trips, live fleet, maintenance, compliance, customers, and rentals in one platform"
              className="mx-auto h-auto w-full max-w-[40rem] object-contain lg:max-w-[48rem] xl:max-w-[56rem]"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1280px) 48rem, 56rem"
            />
          </div>

          <div className="relative z-[2] w-[17rem] shrink-0 lg:w-[18.5rem] xl:w-[20rem]">
            <SideGroup
              title="Track & Control"
              items={TRACK_ITEMS}
              align="right"
              footnote="Stay ahead of every operation."
            />
          </div>
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden">
          <img
            src={PLATFORM_IMAGE}
            alt="DriveOps connected fleet management dashboard showing vehicles, drivers, trips, live fleet, maintenance, compliance, customers, and rentals in one platform"
            className="mx-auto h-auto w-full max-w-full object-contain"
            loading="lazy"
            decoding="async"
            sizes="100vw"
          />

          <div className="mt-5 space-y-5">
            <div>
              <p className="mb-2.5 text-center text-xs font-bold uppercase tracking-widest text-blue-600">
                Plan & Dispatch
              </p>
              <div className="mx-auto flex w-full max-w-md flex-col gap-3 px-1">
                {PLAN_ITEMS.map((item) => (
                  <Pill key={item.label} {...item} align="right" />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2.5 text-center text-xs font-bold uppercase tracking-widest text-blue-600">
                Track & Control
              </p>
              <div className="mx-auto flex w-full max-w-md flex-col gap-3 px-1">
                {TRACK_ITEMS.map((item) => (
                  <Pill key={item.label} {...item} align="right" />
                ))}
              </div>
              <p className="mt-2.5 text-center text-xs text-slate-500">
                Stay ahead of every operation.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-1.5 sm:mt-7">
          <p className="text-[11px] text-slate-500 sm:text-xs">
            Everything connected. One operating system.
          </p>
          <Link
            to="/product"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            Explore the platform
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
