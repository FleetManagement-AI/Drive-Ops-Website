import { Star } from "lucide-react"
import carBlue from "@/assets/car_blue.svg"

/**
 * Static presentational Create Trip + recommendation composition for the
 * Trips & Dispatch hero slide. No forms or API calls.
 */
const SURFACE =
  "rounded-2xl border border-slate-200/90 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]"

export default function HeroTripsVisual() {
  return (
    <div className="relative w-full max-w-[700px] border-0 bg-transparent shadow-none lg:max-w-none" aria-hidden="true">
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2rem]"
        style={{
          background:
            "radial-gradient(circle at 55% 45%, rgba(37,99,235,0.08) 0%, transparent 55%)",
        }}
      />

      <div className="relative grid grid-cols-1 gap-3 min-[480px]:grid-cols-[1.15fr_0.85fr] sm:gap-3.5">
        {/* Create Trip panel */}
        <div className={`${SURFACE} p-4 sm:p-5`}>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-bold tracking-tight text-slate-900 sm:text-[15px]">
              Create Trip
            </h3>
            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600">
              New
            </span>
          </div>

          {/* Stepper */}
          <div className="mb-4 flex items-center gap-1.5 text-[10px] font-semibold sm:text-[11px]">
            <span className="flex items-center gap-1.5 text-blue-600">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                1
              </span>
              Trip Details
            </span>
            <span className="mx-0.5 h-px flex-1 bg-slate-200" />
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-200 text-[10px]">
                2
              </span>
              Assign
            </span>
            <span className="mx-0.5 h-px flex-1 bg-slate-200" />
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-200 text-[10px]">
                3
              </span>
              Confirm
            </span>
          </div>

          <div className="space-y-2.5">
            <Field label="Trip Type" value="Airport Pickup" />
            <Field label="Pickup" value="Kochi (COK)" />
            <Field label="Drop" value="Trivandrum (TRV)" />
            <Field label="Date & Time" value="27 Oct 2024, 09:30 AM" />
          </div>

          <div className="mt-4 flex w-full items-center justify-center rounded-xl bg-blue-600 px-3 py-2.5 text-xs font-semibold text-white shadow-sm shadow-blue-600/25 sm:text-sm">
            Find Drivers & Vehicles
          </div>
        </div>

        {/* Recommendation stack */}
        <div className="flex flex-col gap-3 sm:gap-3.5">
          <div className={`${SURFACE} p-3.5 sm:p-4`}>
            <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
              Recommended Driver
            </p>
            <div className="flex items-start gap-2.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-xs font-bold text-white shadow-sm">
                AK
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-semibold text-slate-900">Arun Kumar</p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Available
                  </span>
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-amber-500">
                    <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                    4.8
                  </span>
                  <span className="rounded-lg bg-blue-600 px-2.5 py-1 text-[10px] font-semibold text-white">
                    Select
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${SURFACE} flex flex-1 flex-col p-3.5 sm:p-4`}>
            <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
              Recommended Vehicle
            </p>
            <div className="mb-2.5 flex h-16 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-100 sm:h-[4.5rem]">
              <img
                src={carBlue}
                alt=""
                className="h-10 w-auto object-contain sm:h-12"
                draggable={false}
              />
            </div>
            <p className="text-sm font-semibold tracking-wide text-slate-900">KL XX XX XXXX</p>
            <p className="mt-0.5 text-xs text-slate-500">Toyota Innova</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">
                AC
              </span>
              <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">
                6 Seater
              </span>
            </div>
            <div className="mt-auto flex items-center justify-between pt-3">
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Available
              </span>
              <span className="rounded-lg bg-blue-600 px-2.5 py-1 text-[10px] font-semibold text-white">
                Select
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2">
      <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-0.5 text-xs font-semibold text-slate-800 sm:text-[13px]">{value}</p>
    </div>
  )
}
