import React from "react"
import { ArrowRight, Mail } from "lucide-react"
import { Link } from "react-router-dom"

export default function CTASection() {
  return (
    <section id="cta" className="section-showcase bg-[#090D16] text-white border-t border-slate-850 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="px-5 sm:px-8 lg:px-12 relative z-10 max-w-4xl mx-auto text-center space-y-8">
        
        <div className="space-y-5">
          <p className="text-showcase-eyebrow text-blue-400">
            Take Control of Your Operations
          </p>

          <h2 className="text-showcase-h1 text-white">
            Ready to run your fleet from <span className="text-blue-400">one place?</span>
          </h2>

          <p className="text-showcase-desc mx-auto text-slate-400">
            Bring trips, drivers, vehicles, rentals and fleet operations into one connected platform.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="https://driveops.chatserve.in/signup"
            className="text-showcase-cta w-full sm:w-auto px-8 py-3.5 gradient-accent hover:opacity-95 text-white rounded-xl transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <Link
            to="/contact"
            className="text-showcase-cta w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Book a Demo</span>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-xs text-slate-500 pt-4">
          <span>Quick setup</span>
          <span className="hidden sm:inline">•</span>
          <span>No credit card required</span>
          <span className="hidden sm:inline">•</span>
          <span>Built for Indian fleets</span>
        </div>

      </div>
    </section>
  )
}
