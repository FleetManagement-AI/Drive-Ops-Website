import { Link } from "react-router-dom"
import {
  ArrowRight,
  Inbox,
  FilePlus,
  UserCheck,
  Bell,
  Play,
  MapPinned,
  CheckCircle2,
  ClipboardList,
  Star,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const WORKFLOW_IMAGE =
  "/images/features/Fleet Trip Management Workflow Infographic.webp"

type StepItem = {
  label: string
  icon: LucideIcon
  iconBg: string
  iconColor: string
  borderColor: string
}

const STEPS: StepItem[] = [
  {
    label: "Trip Request",
    icon: Inbox,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    borderColor: "border-blue-200/80",
  },
  {
    label: "Create Trip",
    icon: FilePlus,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-700",
    borderColor: "border-indigo-200/80",
  },
  {
    label: "Assign Driver & Vehicle",
    icon: UserCheck,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
    borderColor: "border-violet-200/80",
  },
  {
    label: "Driver Gets Assignment",
    icon: Bell,
    iconBg: "bg-fuchsia-100",
    iconColor: "text-fuchsia-700",
    borderColor: "border-fuchsia-200/80",
  },
  {
    label: "Trip Starts",
    icon: Play,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    borderColor: "border-emerald-200/80",
  },
  {
    label: "Live Location",
    icon: MapPinned,
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-700",
    borderColor: "border-cyan-200/80",
  },
  {
    label: "Trip Completes",
    icon: CheckCircle2,
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    borderColor: "border-green-200/80",
  },
  {
    label: "Trip Sheet",
    icon: ClipboardList,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    borderColor: "border-amber-200/80",
  },
  {
    label: "Customer Review",
    icon: Star,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-700",
    borderColor: "border-rose-200/80",
  },
]

function StepPill({ label, icon: Icon, iconBg, iconColor, borderColor }: StepItem) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-2 rounded-full border bg-white px-3 py-2 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:gap-2.5 sm:px-3.5 sm:py-2.5 ${borderColor}`}
    >
      <span
        className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full sm:h-8 sm:w-8 ${iconBg}`}
      >
        <Icon
          className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${iconColor}`}
          aria-hidden="true"
        />
      </span>
      <span className="whitespace-nowrap text-xs font-semibold text-slate-800 sm:text-sm">
        {label}
      </span>
    </span>
  )
}

export default function HowDriveOpsWorksCompact() {
  return (
    <section
      id="how-it-works"
      className="relative border-b border-slate-200/70 bg-[#F8FAFC] py-14 sm:py-16 lg:py-20"
      aria-label="How DriveOps works"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
            How DriveOps works
          </p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem] lg:leading-tight">
            From trip request to completion, everything stays connected.
          </h2>
        </div>

        {/* Mobile: horizontal scroll with snap */}
        <div className="mb-8 -mx-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0">
          <ol className="mx-auto flex w-max min-w-full items-center gap-2 sm:gap-2.5 lg:w-auto lg:min-w-0 lg:flex-wrap lg:justify-center">
            {STEPS.map((step, index) => (
              <li
                key={step.label}
                className="flex snap-start items-center gap-2 sm:gap-2.5"
              >
                <StepPill {...step} />
                {index < STEPS.length - 1 && (
                  <span
                    className="hidden text-base font-medium text-slate-300 sm:inline"
                    aria-hidden="true"
                  >
                    <ArrowRight className="h-4 w-4 text-black font-bold" aria-hidden="true" />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        <img
          src={WORKFLOW_IMAGE}
          alt="DriveOps connected trip workflow from request through assignment, live tracking, trip sheet, and customer review"
          className="mx-auto h-auto w-full max-w-none object-contain"
          loading="lazy"
          decoding="async"
          width={1200}
          height={675}
        />

        <div className="mt-8 flex justify-center">
          <Link
            to="/product/trips-dispatch"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            Explore trips &amp; dispatch
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
