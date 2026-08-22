import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import HeroDashboardVisual from "./hero/HeroDashboardVisual"
import PlatformConnectionFlow from "./PlatformConnectionFlow"
import CapabilityFlowSection from "./CapabilityFlowSection"

/* ─── Vertical dotted connector: DriveOps logo → dashboard ─── */
const LogoToDashConnector: React.FC = () => (
  <div className="flex flex-col items-center my-1" aria-hidden="true">
    <svg width="2" height="40" viewBox="0 0 2 40">
      <line x1="1" y1="0" x2="1" y2="40" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.55" />
    </svg>
    <svg width="10" height="6" viewBox="0 0 10 6">
      <path d="M0 0 L5 6 L10 0" fill="none" stroke="#3B82F6" strokeWidth="1.5" opacity="0.4" />
    </svg>
  </div>
)

/* ─── Section ─── */
export default function FleetOperationsSection() {
  const shouldReduceMotion = useReducedMotion()

  const fade = (delay: number) => ({
    initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 } as const,
    transition: { duration: 0.5, delay: shouldReduceMotion ? 0 : delay, ease: [0.16, 1, 0.3, 1] as const },
  })

  return (
    <section
      id="platform"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-[#F8FAFC] to-white border-b border-slate-200/60 overflow-hidden"
      aria-labelledby="platform-heading"
    >
      {/* Ambient glow */}
      <div
        className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-4 sm:px-8 lg:px-14 xl:px-20 max-w-[1440px] mx-auto">

        {/* ── 1. SECTION HEADING ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            {...fade(0)}
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-blue-700 mb-4 bg-blue-50/90 border border-blue-200/80 px-3.5 py-1.5 rounded-full shadow-2xs"
          >
            <img src="/logo/driveops-logo-blue-edited.png" alt="" className="w-3 h-3 object-contain" aria-hidden="true" />
            <span>ONE PLATFORM. EVERY FLEET OPERATION.</span>
          </motion.div>

          <motion.h2
            {...fade(0.06)}
            id="platform-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-4"
          >
            Stop managing your fleet<br />
            <span className="gradient-text">across scattered tools.</span>
          </motion.h2>

          <motion.p
            {...fade(0.12)}
            className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto font-sans"
          >
            Vehicles, trips, drivers, maintenance, fuel, expenses and revenue —&nbsp;
            DriveOps brings everything together so you can run your fleet with clarity.
          </motion.p>
        </div>

        {/* ── 2. "THE CHALLENGE TODAY" label ── */}
        <motion.div {...fade(0.14)} className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-slate-300" aria-hidden="true" />
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">THE CHALLENGE TODAY</p>
          <div className="h-px w-12 bg-slate-300" aria-hidden="true" />
        </motion.div>

        {/* ── 3. REACT FLOW: 7 challenge cards fanning into DriveOps logo node ── */}
        <PlatformConnectionFlow />

        {/* ── 4. "THE DRIVEOPS SOLUTION" label ── */}
        <motion.div {...fade(0.5)} className="flex items-center justify-center gap-3 mt-1 mb-3">
          <div className="h-px w-16 bg-blue-200" aria-hidden="true" />
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-600">THE DRIVEOPS SOLUTION</p>
          <div className="h-px w-16 bg-blue-200" aria-hidden="true" />
        </motion.div>

        {/* ── 5. VERTICAL CONNECTOR: logo → capability section ── */}
        <LogoToDashConnector />

        {/* ── 6. REACT FLOW: left capabilities → convergence → dashboard ← convergence ← right capabilities ── */}
        <CapabilityFlowSection />

        {/* ── 7. BOTTOM CTA STRIP ── */}
        <motion.div
          {...fade(0.9)}
          className="mt-8 sm:mt-10 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/70 via-white to-blue-50/70 px-6 sm:px-10 py-7 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-3">
            <div
              className="w-9 h-9 rounded-lg bg-white flex items-center justify-center shrink-0 mt-0.5"
              style={{ border: "1.5px solid rgba(37,99,235,0.2)", boxShadow: "0 2px 8px rgba(37,99,235,0.12)" }}
            >
              <img src="/logo/driveops-logo-blue-edited.png" alt="DriveOps" className="w-5 h-5 object-contain" />
            </div>
            <div>
              <p className="font-heading font-bold text-slate-900 text-base sm:text-lg leading-tight">
                One Platform.{" "}
                <span className="gradient-text">Complete Control.</span>{" "}
                Better Decisions.
              </p>
              <p className="text-sm text-slate-500 mt-0.5 max-w-md leading-relaxed">
                DriveOps gives you the visibility and control you need to reduce costs,
                improve efficiency and maximize profit.
              </p>
            </div>
          </div>

          <a
            href="https://driveops.chatserve.in/signup"
            id="platform-cta-trial"
            className="w-full sm:w-auto shrink-0 px-6 py-3.5 gradient-accent hover:opacity-95 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group"
          >
            <span>Start 30-Day Free Trial</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
