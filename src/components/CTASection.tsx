import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react"

const CTASection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="cta" className="py-20 sm:py-24 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 text-white relative overflow-hidden" ref={ref}>
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-64 sm:w-[400px] lg:w-[500px] h-64 sm:h-[400px] lg:h-[500px] bg-blue-500/10 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-[400px] lg:w-[500px] h-64 sm:h-[400px] lg:h-[500px] bg-cyan-500/10 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block text-[11px] sm:text-xs font-bold text-blue-300 uppercase tracking-widest bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 rounded-full mb-5 sm:mb-6">
            14-Day Free Trial • No Credit Card Required
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-5 sm:mb-6 leading-tight">
            Ready to Modernize Your{" "}
            <span className="gradient-text">Fleet Operations?</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
            Join taxi operators, travel companies, and fleet owners who manage dispatch, vehicles, drivers, and earnings with DriveOps.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-4 sm:px-0">
            <a
              id="cta-start-trial"
              href="https://driveops.chatserve.in/signup"
              className="w-full sm:w-auto gradient-accent text-white font-semibold text-sm sm:text-base px-7 sm:px-8 py-4 rounded-xl hover:opacity-95 active:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 min-h-[52px]"
            >
              <span>Start Free Trial</span>
              <ArrowRight size={18} />
            </a>
            <a
              id="cta-book-demo"
              href="mailto:driveopsfleet@gmail.com?subject=DriveOps Demo Request"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm sm:text-base px-7 sm:px-8 py-4 rounded-xl hover:bg-white/15 active:bg-white/20 transition-all flex items-center justify-center gap-2 min-h-[52px]"
            >
              <Calendar size={17} aria-hidden="true" />
              <span>Book a Demo</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-blue-400 shrink-0" aria-hidden="true" /> Instant 30-Minute Setup
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-blue-400 shrink-0" aria-hidden="true" /> Free Onboarding Assistance
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-blue-400 shrink-0" aria-hidden="true" /> Cancel Anytime
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
