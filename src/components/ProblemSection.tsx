import { motion } from "framer-motion"
import { 
  MessageSquare, FileSpreadsheet, PhoneCall, 
  FileText, ClipboardList, CreditCard, AlertTriangle, ShieldCheck, ArrowDown
} from "lucide-react"

export default function ProblemSection() {
  const manualTools = [
    { label: "WhatsApp Chat Groups", desc: "Driver updates & trip requests", icon: MessageSquare, col: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
    { label: "Excel Spreadsheets", desc: "Driver rosters & vehicle logs", icon: FileSpreadsheet, col: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
    { label: "Verbal Phone Calls", desc: "Manual trip assignments", icon: PhoneCall, col: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
    { label: "Paper Folders", desc: "License & permit documents", icon: FileText, col: "text-rose-500 bg-rose-500/10 border-rose-500/20" },
    { label: "Trip Sheets", desc: "Manual pickup & drop notes", icon: ClipboardList, col: "text-purple-500 bg-purple-500/10 border-purple-500/20" },
    { label: "Payroll Sheets", desc: "Salary & advance math", icon: CreditCard, col: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20" },
  ]

  const frictionPoints = [
    "Missed trip updates",
    "Unassigned bookings",
    "Expired document fines",
    "Payroll math confusion",
    "Zero real-time visibility"
  ]

  return (
    <section id="why-driveops" className="py-20 sm:py-28 bg-[#090D16] text-white border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px]">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">The Operation Problem</p>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Running a fleet shouldn't mean<br />
            <span className="text-slate-400">running five different systems.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans max-w-2xl mx-auto leading-relaxed pt-2">
            Trips in spreadsheets. Driver updates in WhatsApp. Assignments over phone calls. Documents in folders. Payroll in separate sheets.
          </p>
        </div>

        {/* Story Flow: Disconnected Tools -> Friction -> DriveOps */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Step 1: Disconnected Tools Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {manualTools.map((t) => {
              const Icon = t.icon
              return (
                <div key={t.label} className={`p-3.5 rounded-xl border ${t.col} flex items-start gap-3`}>
                  <div className="p-2 rounded-lg bg-slate-900 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-white">{t.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{t.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Arrow Down Indicator */}
          <div className="flex flex-col items-center gap-1 text-slate-500">
            <ArrowDown className="w-5 h-5 animate-bounce" />
            <span className="text-[10px] font-mono uppercase tracking-widest">CREATES OPERATIONAL FRICTION</span>
          </div>

          {/* Step 2: Friction Pain Points Bar */}
          <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl flex flex-wrap justify-between items-center gap-3 text-xs text-rose-300">
            {frictionPoints.map((fp) => (
              <div key={fp} className="flex items-center gap-1.5 font-semibold">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>{fp}</span>
              </div>
            ))}
          </div>

          {/* Arrow Down Indicator */}
          <div className="flex flex-col items-center gap-1 text-slate-500">
            <ArrowDown className="w-5 h-5 animate-bounce" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">UNIFIED BY DRIVEOPS</span>
          </div>

          {/* Step 3: DriveOps Solution Box */}
          <div className="p-6 bg-blue-600/10 border border-blue-500/30 rounded-2xl text-center space-y-2 shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mx-auto text-white shadow-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-xs font-black uppercase tracking-[0.25em] text-blue-400">DRIVEOPS</div>
            <h3 className="font-heading text-2xl font-bold text-white">One connected fleet operation.</h3>
            <p className="text-slate-300 text-xs max-w-md mx-auto">
              Drivers, vehicles, dispatches, WhatsApp reviews, and payroll reconciled into one live workspace.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
