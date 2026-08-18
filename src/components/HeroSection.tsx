import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Play, CheckCircle2, ShieldCheck } from "lucide-react"
import HeroDashboardVisual from "./hero/HeroDashboardVisual"

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-14 lg:pb-16 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC] to-white border-b border-slate-200/70 overflow-hidden">
      {/* Background Decorative Soft Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute top-24 -right-40 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-48 -left-40 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 xl:gap-12 items-start">

          {/* ========================================================================= */}
          {/* LEFT COLUMN: Marketing content + absolutely-positioned fleet illustration   */}
          {/* min-h-[680px] gives vertical room so the dashboard doesn't shrink the art  */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col items-start text-left relative z-10 lg:min-h-[680px] px-6 sm:px-10 lg:pl-14 xl:pl-20 lg:pr-0">

            {/* 1. Eyebrow Badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700 mb-4 bg-blue-50/90 border border-blue-200/80 px-3.5 py-1.5 rounded-full shadow-2xs"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>ALL-IN-ONE FLEET MANAGEMENT PLATFORM</span>
            </motion.div>

            {/* 2. Primary Headline */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="font-heading text-4xl sm:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-4"
            >
              Run your fleet.<br />
              <span className="gradient-text">Grow your business.</span>
            </motion.h1>

            {/* 3. Supporting Copy */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-[500px] mb-6"
            >
              Manage vehicles, track operations, automate maintenance, control costs and boost profitability — all in one powerful platform.
            </motion.p>

            {/* 4. Action Buttons */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="flex flex-wrap items-center gap-3.5 mb-5 w-full sm:w-auto"
            >
              <a
                href="https://driveops.chatserve.in/signup"
                className="w-full sm:w-auto px-6 py-3.5 gradient-accent hover:opacity-95 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Start 30-Day Free Trial</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-5 py-3.5 bg-white border border-slate-200 hover:bg-slate-50/80 hover:border-slate-300 text-slate-700 rounded-xl font-semibold text-sm transition-all shadow-2xs flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>See How It Works</span>
                <Play className="w-3.5 h-3.5 fill-slate-700 text-slate-700 transition-transform group-hover:scale-110" />
              </a>
            </motion.div>

            {/* 5. Trust Microcopy */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-medium text-slate-500"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Setup in 5 minutes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>

            {/* =====================================================================
                6. FLEET ROAD ILLUSTRATION
                Positioned ABSOLUTELY within the left column so it:
                  - Does NOT add to flex flow height (no gap above it)
                  - Extends wider than the text column (115% w, left-offset -4%)
                  - Sits pinned to the bottom of the column area
                  - Blends into the hero background via CSS mask-image gradient
                ===================================================================== */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
              className="hidden lg:block absolute bottom-0 pointer-events-none select-none z-0"
              style={{ left: "-4%", width: "115%" }}
            >
              <div
                className="w-full"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 18%, black 45%, black 82%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 18%, black 45%, black 82%, transparent 100%)",
                }}
              >
                <img
                  src="/images/vehicles_hero_illustration.png"
                  alt=""
                  className="w-full h-auto object-cover object-bottom mix-blend-multiply"
                  loading="eager"
                  width="1200"
                  height="500"
                  draggable={false}
                />
              </div>
            </motion.div>

            {/* Mobile-only: fleet illustration in flow, cropped, blended */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              aria-hidden="true"
              className="lg:hidden w-full mt-6 pointer-events-none select-none overflow-hidden"
            >
              <div
                className="w-full"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, black 25%, black 75%, transparent 100%)",
                }}
              >
                <img
                  src="/images/vehicles_hero_illustration.png"
                  alt=""
                  className="w-full h-48 sm:h-64 object-cover object-center mix-blend-multiply"
                  loading="eager"
                  width="1200"
                  height="500"
                  draggable={false}
                />
              </div>
            </motion.div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN (approx 55%): Realistic SaaS Product Dashboard Visualization */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 relative w-full pt-2 lg:pt-0 z-20 pr-6 sm:pr-10 lg:pr-14 xl:pr-20">
            <HeroDashboardVisual />
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* TRUST STRIP AT HERO BOTTOM: Verified Capabilities & Fleet Connectivity   */}
      {/* ========================================================================= */}
      <div className="mt-10 lg:mt-14 pt-8 border-t border-slate-200/60 bg-white/50 backdrop-blur-2xs">
        <div className="w-full px-8 sm:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              OPERATIONAL CAPABILITIES
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-semibold text-slate-600">
              {/* <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Live GPS Fleet Telemetry
              </span> */}
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Automated Trip Dispatch
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                Driver Payroll & Settlements
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                Preventive Maintenance Alerts
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
