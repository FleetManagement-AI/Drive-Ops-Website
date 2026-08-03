import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { PhoneCall, Fuel, FileSpreadsheet, ShieldAlert, CheckCircle2 } from "lucide-react"

const comparisons = [
  {
    icon: PhoneCall,
    title: "Manual Dispatch Chaos",
    pain: "Phone call dispatching leads to miscommunication, double bookings, and delayed trips.",
    solution: "Smart Dispatch Queue allocates drivers & vehicles instantly with digital trip sheets.",
  },
  {
    icon: FileSpreadsheet,
    title: "Spreadsheet Compliance Risks",
    pain: "Tracking insurance, permits, and driver licenses in sheets leads to missed renewals and fines.",
    solution: "Unified Document Vault with automated expiry alerts keeps your entire fleet compliant.",
  },
  {
    icon: Fuel,
    title: "Untracked Fuel & Hidden Costs",
    pain: "Unverified fuel receipts and unmonitored mileage discrepancies eat net profit margins.",
    solution: "Digital fuel logs with mileage tracking per vehicle prevent cost leakage.",
  },
  {
    icon: ShieldAlert,
    title: "Zero Operational Visibility",
    pain: "Fleet owners lack real-time visibility into overall fleet status, daily revenue, and active trips.",
    solution: "Centralized Fleet Overview with live duty rosters and daily revenue tracking.",
  },
]

const ProblemSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="why-driveops" className="py-20 sm:py-24 bg-slate-50/70 border-y border-slate-200/60 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10 sm:mb-14"
        >
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
            Why Taxi Fleet Owners Switch
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Upgrade Your Taxi Fleet Management Software
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Traditional pen-and-paper fleet management is fragile. DriveOps replaces outdated transport management software with automated, cloud-based operational clarity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {comparisons.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <c.icon size={18} />
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900">{c.title}</h3>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-red-50/60 border border-red-100 text-xs sm:text-sm text-slate-700">
                  <span className="font-bold text-red-600 block text-[10px] sm:text-[11px] uppercase tracking-wider mb-0.5">The Challenge</span>
                  {c.pain}
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs sm:text-sm text-slate-800 flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-emerald-700 block text-[10px] sm:text-[11px] uppercase tracking-wider mb-0.5">The DriveOps Edge</span>
                    {c.solution}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
