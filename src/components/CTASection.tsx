import React from "react"
import { ArrowRight, Mail } from "lucide-react"
import { Link } from "react-router-dom"

export default function CTASection() {
  return (
    <section id="cta" className="py-20 sm:py-28 bg-[#090D16] text-white border-t border-slate-850 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="px-5 sm:px-8 lg:px-12 relative z-10 max-w-4xl mx-auto text-center space-y-8">
        
        <div className="space-y-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-400">
            TAKE CONTROL OF YOUR OPERATIONS
          </p>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-white">
            Ready to take control of your <span className="text-blue-400">trip operations?</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Plan smarter. Dispatch faster. Keep every trip and document under control.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="https://driveops.chatserve.in/signup"
            className="w-full sm:w-auto px-8 py-4 gradient-accent hover:opacity-95 text-white rounded-xl font-bold text-sm tracking-wide transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Start Free</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Book a Demo</span>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-xs text-slate-500 pt-4">
          <span>Setup in 5 minutes</span>
          <span className="hidden sm:inline">•</span>
          <span>No credit card required</span>
          <span className="hidden sm:inline">•</span>
          <span>Built for 15–100 passenger fleets</span>
        </div>

      </div>
    </section>
  )
}
