import { ArrowRight, Mail } from "lucide-react"
import { Link } from "react-router-dom"

export default function CTASection() {
  return (
    <section id="cta" className="py-16 sm:py-24 lg:py-28 bg-[#090D16] text-white border-t border-slate-850 relative overflow-hidden">
      <div className="px-5 sm:px-8 lg:px-12 xl:px-16 relative z-10 max-w-[1100px] mx-auto text-center space-y-8">
        
        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
            DRIVEOPS OS
          </p>

          <h2 className="font-heading font-black text-4xl sm:text-6xl tracking-tight leading-tight text-white">
            Run your fleet as one.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg font-sans max-w-xl mx-auto leading-relaxed">
            Bring drivers, vehicles, trips, customers and operations together with DriveOps.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="https://driveops.chatserve.in/signup"
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm tracking-wide transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2"
          >
            <span>Start Free</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Book a Demo</span>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[11px] text-slate-500 pt-4">
          <span>Setup in 30 minutes</span>
          <span className="hidden sm:inline">•</span>
          <span>No credit card required</span>
          <span className="hidden sm:inline">•</span>
          <span>Free onboarding support</span>
        </div>

      </div>
    </section>
  )
}
