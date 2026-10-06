import { Link } from "react-router-dom"
import { ArrowRight, Check } from "lucide-react"

const SHOWCASE_IMAGE =
  "/images/features/Modern Driver Fleet App Interface.webp"

const BULLETS = [
  "Accept & reject assignments",
  "Start / complete trips + navigation",
  "Trip sheets after completion",
  "Fuel logs & vehicle issues",
  "Live GPS for ops map & customer tracking",
] as const

export default function ProductShowcaseSection() {
  return (
    <section
      id="product-showcase"
      className="relative border-b border-slate-200/70 bg-[#F8FAFC] py-14 sm:py-16 lg:py-20"
      aria-label="DriveOps Driver App"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
            Driver App
          </p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem] lg:leading-tight">
            Equip every driver with a clear trip workflow.
          </h2>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <img
            src={SHOWCASE_IMAGE}
            alt="DriveOps Driver App showing My Trips, trip actions, navigation, trip sheets, fuel logs, and vehicle issue reporting"
            className="mx-auto h-auto w-full max-w-lg object-contain lg:max-w-none"
            loading="lazy"
            decoding="async"
            width={960}
            height={640}
          />

          <div>
            <p className="mb-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Duty, accept/reject, navigation, trip sheets, fuel logs, and vehicle
              issues—in English, Malayalam, and Hindi.
            </p>

            <ul className="mb-6 space-y-2.5">
              {BULLETS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-slate-700 sm:text-[15px]"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mb-6 text-xs text-slate-500">
              Push notifications · WhatsApp OTP · en / ml / hi
            </p>

            <Link
              to="/product/driver-app"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-colors hover:bg-blue-500"
            >
              Explore Driver App
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
