import { Link } from "react-router-dom"
import {
  ArrowRight,
  Fuel,
  Wrench,
  FileText,
  ShieldCheck,
  Bell,
  Check,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const FLEET_CARE_IMAGE =
  "/images/features/Vehicle Maintenance Dashboard.webp"

type Capability = {
  title: string
  description: string
  icon: LucideIcon
  iconBg: string
  iconColor: string
}

const CAPABILITIES: Capability[] = [
  {
    title: "Fuel logs",
    description: "Capture refuelling from drivers and ops.",
    icon: Fuel,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
  {
    title: "Maintenance",
    description: "Track jobs, logs, and due service.",
    icon: Wrench,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
  },
  {
    title: "Document vault",
    description: "Keep vehicle and driver documents together.",
    icon: FileText,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
  },
  {
    title: "Expiry alerts",
    description: "WhatsApp alerts when documents are due.",
    icon: Bell,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-700",
  },
  {
    title: "Compliance",
    description: "Vault and renewals—not OCR autopilot.",
    icon: ShieldCheck,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
  },
]

export default function FleetCareTeaserSection() {
  return (
    <section
      id="fleet-care"
      className="relative border-b border-slate-200/70 bg-white py-14 sm:py-16 lg:py-20"
      aria-label="Fleet care for fuel, maintenance, and compliance"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
            Fleet Care
          </p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem] lg:leading-tight">
            Keep the fleet ready for the next trip.
          </h2>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <img
            src={FLEET_CARE_IMAGE}
            alt="DriveOps fleet care workspace for maintenance, fuel, and compliance documents"
            className="mx-auto h-auto w-full max-w-lg object-contain lg:max-w-none"
            loading="lazy"
            decoding="async"
            width={960}
            height={640}
          />

          <div>
            <p className="mb-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              Fuel records, maintenance jobs, document vaulting, and expiry alerts—so
              vehicles stay ready without predictive-maintenance or OCR claims.
            </p>

            <ul className="mb-6 space-y-3">
              {CAPABILITIES.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.title} className="flex items-start gap-3">
                    <span
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${item.iconBg}`}
                    >
                      <Icon className={`h-4 w-4 ${item.iconColor}`} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-slate-900 sm:text-[15px]">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block text-xs leading-snug text-slate-500 sm:text-[13px]">
                        {item.description}
                      </span>
                    </span>
                  </li>
                )
              })}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/product/maintenance"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-colors hover:bg-blue-500"
              >
                Explore Fleet Care
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/product/compliance"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
                Compliance vault
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
