import { Link } from "react-router-dom"
import {
  ArrowRight,
  Car,
  Compass,
  Building2,
  KeyRound,
  Check,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type SolutionCard = {
  title: string
  description: string
  bullets: string[]
  href: string
  icon: LucideIcon
  image: string
  imageAlt: string
}

const SOLUTIONS: SolutionCard[] = [
  {
    title: "Taxi & Cab Fleets",
    description: "Manage daily trips, drivers, vehicles and dispatch.",
    bullets: [
      "Trip create → allocate → accept/reject",
      "Driver App + WhatsApp assignment",
      "Live tracking & customer links",
      "Trip sheets & review inbox",
    ],
    href: "/solutions/taxi-cab-fleets",
    icon: Car,
    image: "/images/solutions/Smart Taxi Fleet, Airport Transfers and Trip Dashboard.webp",
    imageAlt:
      "Taxi and cab fleet operations with airport transfers and today's trips dashboard",
  },
  {
    title: "Travel & Tour Operators",
    description: "Coordinate scheduled trips, packages, drivers and customer updates.",
    bullets: [
      "Recurring & scheduled trips",
      "Multi-stop itineraries",
      "Driver coordination",
      "Customer confirmation & tracking",
    ],
    href: "/solutions/travel-tour-operators",
    icon: Compass,
    image: "/images/solutions/Kerala Tour Schedule Showcase.webp",
    imageAlt: "Travel and tour operator scheduling showcase",
  },
  {
    title: "Corporate Transport",
    description: "Manage recurring employee transportation and multi-location ops.",
    bullets: [
      "Recurring employee schedules",
      "Multi-location scope",
      "Driver duty & assignment",
      "Trip sheets & live fleet",
    ],
    href: "/solutions/corporate-transport",
    icon: Building2,
    image: "/images/solutions/Employee Transport Corporate Scene.webp",
    imageAlt: "Corporate employee transport operations scene",
  },
  {
    title: "Self-Drive Rentals",
    description: "Availability, reservations, handovers, returns and payment recording.",
    bullets: [
      "Vehicle availability calendar",
      "Reservations & holds",
      "Handover & return inspection",
      "Manual payment recording",
    ],
    href: "/solutions/self-drive-rentals",
    icon: KeyRound,
    image: "/images/solutions/Vehicle Booking in Paradise.webp",
    imageAlt: "Self-drive vehicle booking and rental operations",
  },
]

export default function SolutionsTeaserSection() {
  return (
    <section
      id="solutions"
      className="relative border-b border-slate-200/70 bg-white py-14 sm:py-16 lg:py-20"
      aria-label="Solutions"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
            Solutions
          </p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem] lg:leading-tight">
            Built for the way you operate.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {SOLUTIONS.map((solution) => {
            const Icon = solution.icon
            return (
              <article
                key={solution.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-colors hover:border-blue-200"
              >
                <div className="relative h-40 w-full overflow-hidden sm:h-44">
                  <img
                    src={solution.image}
                    alt={solution.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <div className="relative flex flex-1 flex-col px-5 pb-5 pt-0">
                  <div className="-mt-5 mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="mb-1.5 text-base font-semibold text-slate-900">
                    {solution.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">
                    {solution.description}
                  </p>

                  <ul className="mb-5 flex-1 space-y-2">
                    {solution.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-2 text-xs leading-snug text-slate-600 sm:text-[13px]"
                      >
                        <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                          <Check className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" />
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={solution.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Explore solution
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
