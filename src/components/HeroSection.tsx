import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Send, 
  Smartphone, 
  ChevronRight 
} from "lucide-react"
import { Link } from "react-router-dom"

const workflowStages = [
  {
    step: "01",
    title: "Plan",
    microLabel: "Trips & Packages",
    description: "Create a trip or use a package template.",
    icon: FileText,
    colors: {
      badge: "text-blue-700 bg-blue-50 border-blue-200/80",
      iconBg: "bg-blue-50 text-blue-600 border-blue-200/70 group-hover:bg-blue-600 group-hover:text-white",
      pill: "bg-blue-50/80 text-blue-700 border-blue-200/60",
      line: "from-blue-300 via-blue-200 to-emerald-300",
      dot: "bg-blue-600",
    }
  },
  {
    step: "02",
    title: "Dispatch",
    microLabel: "Vehicles & Drivers",
    description: "Assign the right vehicle and driver.",
    icon: Send,
    colors: {
      badge: "text-emerald-700 bg-emerald-50 border-emerald-200/80",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/70 group-hover:bg-emerald-600 group-hover:text-white",
      pill: "bg-emerald-50/80 text-emerald-700 border-emerald-200/60",
      line: "from-emerald-300 via-emerald-200 to-purple-300",
      dot: "bg-emerald-600",
    }
  },
  {
    step: "03",
    title: "Execute",
    microLabel: "Driver App",
    description: "Drivers manage trips from the mobile app.",
    icon: Smartphone,
    colors: {
      badge: "text-purple-700 bg-purple-50 border-purple-200/80",
      iconBg: "bg-purple-50 text-purple-600 border-purple-200/70 group-hover:bg-purple-600 group-hover:text-white",
      pill: "bg-purple-50/80 text-purple-700 border-purple-200/60",
      line: "from-purple-300 via-purple-200 to-amber-300",
      dot: "bg-purple-600",
    }
  },
  {
    step: "04",
    title: "Stay in Control",
    microLabel: "Operations & Compliance",
    description: "Keep operations visible and documents compliant.",
    icon: ShieldCheck,
    colors: {
      badge: "text-amber-700 bg-amber-50 border-amber-200/80",
      iconBg: "bg-amber-50 text-amber-600 border-amber-200/70 group-hover:bg-amber-600 group-hover:text-white",
      pill: "bg-amber-50/80 text-amber-700 border-amber-200/60",
      line: "",
      dot: "bg-amber-600",
    }
  },
]

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-14 lg:pb-16 bg-gradient-to-b from-white via-[#F8FAFC] to-white border-b border-slate-200/60 overflow-hidden">
      {/* Background Subtle Radial Depth Glows */}
      <div 
        className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[700px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.04)_0%,transparent_70%)] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* MAIN HERO GRID: Left Text + Right Product Composite       */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center mb-10 sm:mb-12 lg:mb-14">

          {/* LEFT COLUMN: Strategic Headline, Value Copy & Actions */}
          <div className="order-1 lg:col-span-5 flex flex-col items-start text-left">
            {/* 1. Eyebrow Badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700 mb-4 bg-blue-50/90 border border-blue-200/80 px-3.5 py-1.5 rounded-full shadow-2xs"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>TRIP-FIRST TRANSPORT OPERATIONS</span>
            </motion.div>

            {/* 2. Primary Editorial Headline */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="font-heading text-4xl sm:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-4 sm:mb-5"
            >
              Run every trip<br className="hidden sm:inline" />
              {" "}without the{" "}
              <span className="gradient-text">WhatsApp chaos.</span>
            </motion.h1>

            {/* 3. Supporting Copy */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-[500px] mb-6 sm:mb-8"
            >
              Plan trips, assign vehicles and drivers, execute work in the field, and stay on top of compliance — from one transport operations platform.
            </motion.p>

            {/* 4. Action CTA Buttons */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="flex flex-wrap items-center gap-3.5 mb-6 w-full sm:w-auto"
            >
              <a
                href="https://driveops.chatserve.in/signup"
                className="w-full sm:w-auto px-6 py-3.5 gradient-accent hover:opacity-95 text-white rounded-xl font-bold text-sm transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Start Free</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-5 py-3.5 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 rounded-xl font-semibold text-sm transition-all shadow-2xs flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book a Demo</span>
              </Link>
            </motion.div>

            {/* 5. Trust Microcopy (Desktop View) */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="hidden lg:flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-medium text-slate-500"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Setup in minutes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Built for growing passenger fleets</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Transparent Product Composite UI (Dashboard + Phone) */}
          {/* Note: Constrained max-height ensures the phone sits cleanly above the workflow section */}
          <div className="order-2 lg:col-span-7 relative w-full flex items-center justify-center lg:justify-end pt-2 lg:pt-0 pb-2">
            {/* Subtle Centered Radial Glow Behind Dashboard */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] max-w-[580px] max-h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" 
              aria-hidden="true" 
            />

            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[640px] lg:max-w-none flex items-center justify-center select-none"
            >
              <img
                src="/images/dashboard_image.png"
                alt="DriveOps transport operations dashboard and driver mobile app"
                className="w-full h-auto object-contain max-h-[440px] xl:max-h-[480px] drop-shadow-[0_20px_40px_rgba(15,23,42,0.08)] pointer-events-none"
                loading="eager"
                width={1536}
                height={1024}
              />
            </motion.div>
          </div>

          {/* Trust Microcopy (Mobile / Tablet View — positioned below product composite) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="order-3 lg:hidden flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500 pt-1 text-center"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Setup in minutes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Built for growing passenger fleets</span>
            </div>
          </motion.div>

        </div>

        {/* ========================================================= */}
        {/* THE DRIVEOPS OPERATIONAL LOOP                             */}
        {/* HOW DRIVEOPS RUNS THE DAY                                 */}
        {/* 01 Plan → 02 Dispatch → 03 Execute → 04 Stay in Control   */}
        {/* ========================================================= */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 bg-slate-50/75 hover:bg-slate-50/95 transition-colors border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 shadow-[0_2px_12px_rgba(15,23,42,0.03)]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between mb-5 sm:mb-6 border-b border-slate-200/60 pb-3.5">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
                HOW DRIVEOPS RUNS THE DAY
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
              The End-to-End Operational Loop
            </span>
          </div>

          {/* DESKTOP VIEW: 4 Connected Sequential Stages with Continuous Track */}
          <ol className="hidden lg:grid grid-cols-12 gap-3 xl:gap-4 relative" aria-label="DriveOps Operational Sequence">
            {workflowStages.map((stage, idx) => {
              const Icon = stage.icon
              const isLast = idx === workflowStages.length - 1
              return (
                <React.Fragment key={stage.step}>
                  {/* Step Card Column */}
                  <li className={`${isLast ? 'col-span-3' : 'col-span-3'} group relative`}>
                    <div className="p-3.5 xl:p-4 rounded-xl bg-white border border-slate-200/70 group-hover:border-slate-300 group-hover:shadow-sm transition-all h-full flex flex-col justify-between">
                      {/* Top Row: Number Badge & Icon Container */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md border ${stage.colors.badge}`}>
                            {stage.step}
                          </span>
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${stage.colors.pill}`}>
                            {stage.microLabel}
                          </span>
                        </div>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${stage.colors.iconBg}`}>
                          <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="font-heading font-bold text-base text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {stage.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  </li>
                </React.Fragment>
              )
            })}
          </ol>

          {/* TABLET / MOBILE VIEW: Responsive Connected Vertical Timeline (< 1024px) */}
          <ol className="lg:hidden flex flex-col sm:grid sm:grid-cols-2 gap-3.5 relative" aria-label="DriveOps Operational Sequence">
            {workflowStages.map((stage) => {
              const Icon = stage.icon
              return (
                <li key={stage.step} className="group">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3.5 h-full">
                    {/* Icon Container */}
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center border shrink-0 mt-0.5 ${stage.colors.iconBg}`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Step Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${stage.colors.badge}`}>
                          {stage.step}
                        </span>
                        <h3 className="font-heading font-bold text-sm text-slate-900">
                          {stage.title}
                        </h3>
                        <span className={`text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.2 rounded border ml-auto ${stage.colors.pill}`}>
                          {stage.microLabel}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </motion.div>

      </div>
    </section>
  )
}
