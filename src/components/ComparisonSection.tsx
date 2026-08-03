import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, X } from "lucide-react"

const rows = [
  {
    feature: "Trip Dispatch & Allocation",
    traditional: "Manual phone calls, verbal updates, delayed assignments",
    driveops: "Automated dispatch queue, instant driver & vehicle allocation",
  },
  {
    feature: "Fleet Visibility & Status",
    traditional: "Unknown vehicle availability, reliance on driver calls",
    driveops: "Centralized fleet map with live driver & vehicle operational status",
  },
  {
    feature: "Driver & Shift Management",
    traditional: "Paper logs, missing license expiration dates, shift confusion",
    driveops: "Digital driver profiles, availability schedules & license alerts",
  },
  {
    feature: "Fuel & Expense Tracking",
    traditional: "Unverified receipts, lost slips, hidden fuel loss",
    driveops: "Digital fuel logs, mileage monitoring & per-vehicle expense tracking",
  },
  {
    feature: "Maintenance & Repairs",
    traditional: "Reactive repairs after breakdowns disrupt active bookings",
    driveops: "Preventive maintenance reminders, service logs & health tracking",
  },
  {
    feature: "Commercial Packages & Billing",
    traditional: "Ad-hoc manual fare calculation & client disputes",
    driveops: "Configurable package templates with KM limits & extra rate automation",
  },
  {
    feature: "Fleet Scalability",
    traditional: "Operational overhead increases linearly with every new vehicle",
    driveops: "Unified operational software designed to grow with your fleet size",
  },
]

const ComparisonSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="comparison" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            Operational Advantage
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-5">
            Traditional Operations vs <span className="gradient-text">DriveOps</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            See how replacing pen-and-paper management with DriveOps transforms your daily fleet workflow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-5xl mx-auto bg-slate-50/50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
        >
          {/* Header (Desktop) */}
          <div className="hidden sm:grid grid-cols-12 bg-slate-100/90 p-4 sm:p-6 border-b border-slate-200 font-heading font-bold text-sm text-slate-800 uppercase tracking-wider">
            <div className="col-span-4">Operational Area</div>
            <div className="col-span-4 text-slate-500">Traditional Operations</div>
            <div className="col-span-4 text-blue-700">DriveOps Platform</div>
          </div>

          <div className="divide-y divide-slate-200/80">
            {rows.map((row, idx) => (
              <div
                key={row.feature}
                className={`p-4 sm:p-6 transition-colors ${
                  idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"
                } hover:bg-blue-50/30`}
              >
                {/* Desktop Grid View */}
                <div className="hidden sm:grid grid-cols-12 items-center">
                  <div className="col-span-4 font-semibold text-slate-900 text-sm pr-2">
                    {row.feature}
                  </div>
                  <div className="col-span-4 text-sm text-slate-500 flex items-start gap-2 pr-2">
                    <X size={16} className="text-red-500 shrink-0 mt-0.5" />
                    <span>{row.traditional}</span>
                  </div>
                  <div className="col-span-4 text-sm text-slate-900 font-medium flex items-start gap-2">
                    <Check size={16} className="text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-800">{row.driveops}</span>
                  </div>
                </div>

                {/* Mobile Card Layout */}
                <div className="sm:hidden space-y-3">
                  <div className="font-heading font-bold text-slate-900 text-sm border-b border-slate-100 pb-1">
                    {row.feature}
                  </div>
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    <div className="flex items-start gap-2 text-slate-500 bg-red-50/50 p-2.5 rounded-lg border border-red-100">
                      <X size={14} className="text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-red-700 block text-[10px] uppercase">Traditional</span>
                        {row.traditional}
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-slate-800 bg-blue-50/50 p-2.5 rounded-lg border border-blue-100">
                      <Check size={14} className="text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-blue-700 block text-[10px] uppercase">DriveOps</span>
                        {row.driveops}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ComparisonSection
