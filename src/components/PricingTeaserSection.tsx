import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Check, Star } from "lucide-react"

interface ApiPlanLimit {
  maxVehicles: number
  maxDrivers: number
  maxUsers: number
}

interface ApiPlan {
  id: string
  name: string
  price: string
  billingCycle: string
  trialPeriodDays?: number
  isActive?: boolean
  limits: ApiPlanLimit
}

const SIGNUP_URL = "https://driveops.chatserve.in/signup"

const FALLBACK: ApiPlan[] = [
  {
    id: "f1a65a31-f78b-40ea-af10-63b649f33b50",
    name: "Free",
    price: "0.00",
    billingCycle: "monthly",
    trialPeriodDays: 30,
    limits: { maxVehicles: 2, maxDrivers: 2, maxUsers: 2 },
  },
  {
    id: "08d247fb-2a6e-43f8-b86a-a4af3a2f1a26",
    name: "Basic",
    price: "999.00",
    billingCycle: "monthly",
    trialPeriodDays: 30,
    limits: { maxVehicles: 10, maxDrivers: 10, maxUsers: 2 },
  },
  {
    id: "652873c4-aed5-47d8-b352-f395649b73e1",
    name: "Professional",
    price: "2499.00",
    billingCycle: "monthly",
    trialPeriodDays: 30,
    limits: { maxVehicles: 30, maxDrivers: 30, maxUsers: 5 },
  },
  {
    id: "b2f95d1b-58b9-4b4f-a1b7-f387f16ce94d",
    name: "Enterprise",
    price: "5999.00",
    billingCycle: "monthly",
    trialPeriodDays: 30,
    limits: { maxVehicles: 1000, maxDrivers: 1000, maxUsers: 50 },
  },
]

function formatPrice(priceStr: string) {
  const n = parseFloat(priceStr)
  if (n === 0) return "₹0"
  return `₹${n.toLocaleString("en-IN")}`
}

function formatLimit(value: number, singular: string, plural: string) {
  if (value >= 1000) return `Unlimited ${plural}`
  return `Up to ${value} ${value === 1 ? singular : plural}`
}

function billingSuffix(cycle: string) {
  const c = cycle.toLowerCase()
  if (c.startsWith("month")) return "/mo"
  if (c.startsWith("year") || c.startsWith("annual")) return "/yr"
  return `/${c}`
}

function isPopular(name: string) {
  return name.toLowerCase() === "professional"
}

function isFree(name: string) {
  return name.toLowerCase() === "free"
}

export default function PricingTeaserSection() {
  const [plans, setPlans] = useState<ApiPlan[]>(FALLBACK)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        const res = await fetch("https://api.driveops.chatserve.in/plans")
        if (!res.ok) return
        const json = await res.json()
        if (!cancelled && Array.isArray(json?.data) && json.data.length > 0) {
          setPlans(json.data)
        }
      } catch {
        /* keep fallback */
      }
    }
    void load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section
      id="pricing"
      className="relative border-b border-slate-200/70 bg-[#F8FAFC] py-14 sm:py-16 lg:py-20"
      aria-label="Pricing preview"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
            Pricing
          </p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem] lg:leading-tight">
            Simple plans for growing fleets.
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {plans.slice(0, 4).map((plan) => {
            const popular = isPopular(plan.name)
            const free = isFree(plan.name)
            const limits = [
              formatLimit(plan.limits.maxVehicles, "vehicle", "vehicles"),
              formatLimit(plan.limits.maxDrivers, "driver", "drivers"),
              formatLimit(plan.limits.maxUsers, "ops user", "ops users"),
            ]

            return (
              <article
                key={plan.id}
                className={`relative flex flex-col rounded-2xl border bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-colors sm:p-6 ${
                  popular
                    ? "border-blue-300 ring-1 ring-blue-200"
                    : "border-slate-200/80 hover:border-blue-200"
                }`}
              >
                {popular && (
                  <span className="absolute -top-2.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                    <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                    Most popular
                  </span>
                )}

                <p className="text-sm font-semibold text-slate-900 sm:text-[15px]">
                  {plan.name}
                </p>

                <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                  {formatPrice(plan.price)}
                  <span className="text-sm font-medium text-slate-500">
                    {billingSuffix(plan.billingCycle)}
                  </span>
                </p>

                {typeof plan.trialPeriodDays === "number" && plan.trialPeriodDays > 0 && (
                  <p className="mt-2 text-xs font-medium text-blue-600">
                    {plan.trialPeriodDays}-day free trial
                  </p>
                )}

                <ul className="mt-5 flex-1 space-y-2.5">
                  {limits.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs leading-snug text-slate-600 sm:text-[13px]"
                    >
                      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {free ? (
                  <a
                    href={SIGNUP_URL}
                    className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                  >
                    Start free
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <Link
                    to="/pricing"
                    className={`mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                      popular
                        ? "bg-blue-600 text-white hover:bg-blue-500"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600"
                    }`}
                  >
                    View plan
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                )}
              </article>
            )
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View Pricing
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
