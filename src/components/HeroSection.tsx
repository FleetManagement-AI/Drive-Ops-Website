import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Link } from "react-router-dom"
import ProductVideo from "./ProductVideo"

export default function HeroSection() {
  return (
    <section className="relative pt-24 lg:pt-28 pb-16 bg-[#FBFBFA] border-b border-slate-200/60 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* LEFT SIDE (38–40% Width): Text & Action */}
          <div className="lg:col-span-5 flex flex-col items-start text-left pt-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-blue-600 mb-3 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full"
            >
              <span>FLEET OPERATIONS OS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-[50px] font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-4"
            >
              Run your entire fleet <br />
              <span className="text-blue-600">from one place.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-[440px] mb-3"
            >
              Manage drivers, vehicles, trips, dispatch, customers, payroll and daily operations — all from one connected platform.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-wider"
            >
              Built for taxi owners, transport operators and growing fleets.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <a
                href="https://driveops.chatserve.in/signup"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-all shadow-md shadow-blue-500/15 flex items-center gap-2"
              >
                <span>Start Free</span>
                <ArrowRight size={15} />
              </a>
              <Link
                to="/contact"
                className="px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 rounded-xl font-semibold text-sm transition-all"
              >
                Book a Demo
              </Link>
            </motion.div>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="space-y-1.5 text-xs font-medium text-slate-500 pt-3 border-t border-slate-200/80 w-full"
            >
              {["No credit card required", "Setup in 30 minutes", "Free support onboarding"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE (60–62% Width): Clean DriveOps Dashboard Product Video */}
          <div className="lg:col-span-7 relative w-full pt-1">
            <ProductVideo
              src="https://chatserve-732169940926-eu-north-1-an.s3.eu-north-1.amazonaws.com/public/dashboard-videowr1.mp4"
              alt="DriveOps Dashboard Live Video Walkthrough"
              hideChrome={true}
              aspectRatio="16/9"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
