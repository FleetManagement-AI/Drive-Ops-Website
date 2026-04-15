import { motion } from "framer-motion"
import { ArrowRight, Play, MapPin, Navigation, TrendingUp, Users } from "lucide-react"

const stats = [
  { value: "500+", label: "Rental Businesses" },
  { value: "12K+", label: "Vehicles Tracked" },
  { value: "₹2Cr+", label: "Revenue Managed" },
  { value: "99.9%", label: "Uptime SLA" },
]

const badges = [
  { icon: MapPin, text: "Real-Time GPS" },
  { icon: Users, text: "Driver Management" },
  { icon: TrendingUp, text: "Revenue Analytics" },
  { icon: Navigation, text: "Trip Tracking" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
}

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 grid-pattern" />
    <div className="absolute inset-0 radial-glow" />
    {/* Extra warm tint for depth */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

    <div className="container mx-auto px-4 md:px-8 pt-28 pb-16 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] gap-10 items-center">

        {/* Left: Copy */}
        <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">

          {/* Pill badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold text-primary tracking-wide uppercase">
              Smart Fleet Management for Rental Businesses
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold leading-[1.1] tracking-tight mb-5"
          >
            Smart Fleet Management{" "}
            <span className="gradient-text">for Rental Car Businesses</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            Track vehicles, manage drivers, and monitor earnings in real time with DriveOps.
            The all-in-one platform built for car rental companies, taxi operators, and travel agencies.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
          >
            <a
              id="hero-start-trial"
              href="https://driveops.chatserve.in/signup"
              className="w-full sm:w-auto bg-gradient-to-r from-[#00C2FF] to-[#06B6D4] text-slate-950 font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(0,194,255,0.4)]"
            >
              Start Free Trial <ArrowRight size={16} />
            </a>
            <a
              id="hero-book-demo"
              href="#cta"
              className="w-full sm:w-auto glass border border-white/10 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <Play size={15} /> Book a Demo
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center lg:justify-start gap-3"
          >
            {badges.map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-muted-foreground"
              >
                <b.icon size={12} className="text-primary" />
                {b.text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative w-full mx-auto mt-10 lg:mt-0"
        >
          {/* Glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#06B6D4]/12 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative flex items-center justify-center z-10">
            <div className="relative w-full group">
              {/* Animated SVG path */}
              <svg
                className="absolute -inset-10 w-[calc(100%+5rem)] h-[calc(100%+5rem)] pointer-events-none z-0 stroke-[#00C2FF]/25"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M -10,80 Q 20,40 50,55 T 110,25"
                  fill="none"
                  strokeWidth="0.6"
                  strokeDasharray="2 3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                />
              </svg>

              <img
                src="/images/Gemini_Generated_Image2.png"
                alt="DriveOps Fleet Management Dashboard Demo"
                className="relative z-10 w-full h-auto object-contain transform scale-125 transition-transform duration-700 group-hover:scale-[1.32] drop-shadow-[0_20px_60px_rgba(0,194,255,0.3)]"
              />

              {/* Floating GPS Pin */}
              <motion.div
                className="absolute -right-4 top-1/4 z-20"
                animate={{ scale: [1, 1.15, 1], y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-10 h-10 bg-slate-900/80 backdrop-blur border border-white/10 rounded-full flex items-center justify-center shadow-xl glow-cyan relative">
                  <div className="absolute inset-0 bg-[#00C2FF]/20 rounded-full blur-md animate-pulse" />
                  <MapPin className="w-4 h-4 text-[#22D3EE]" />
                </div>
              </motion.div>

              {/* Floating Navigation icon */}
              <motion.div
                className="absolute -left-4 bottom-1/3 z-20"
                animate={{ scale: [1, 1.1, 1], y: [0, 8, 0] }}
                transition={{ duration: 4, delay: 1, repeat: Infinity }}
              >
                <div className="w-12 h-12 bg-slate-900/80 backdrop-blur border border-white/10 rounded-full flex items-center justify-center shadow-xl relative">
                  <div className="absolute inset-0 bg-[#06B6D4]/25 rounded-full blur-lg animate-pulse" />
                  <Navigation className="w-5 h-5 text-[#06B6D4]" fill="currentColor" />
                </div>
              </motion.div>

              {/* Floating earnings card */}
              <motion.div
                className="absolute -bottom-4 right-4 z-20"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, delay: 0.5, repeat: Infinity }}
              >
                <div className="glass border border-white/10 rounded-xl px-4 py-2.5 shadow-xl backdrop-blur-md">
                  <p className="text-xs text-muted-foreground">Today's Revenue</p>
                  <p className="text-base font-bold text-primary">₹48,200</p>
                  <p className="text-[10px] text-green-400">↑ 12% vs yesterday</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* 
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto border border-border/40 glass rounded-2xl p-6"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-heading text-2xl md:text-3xl font-bold gradient-text">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>
      */}
    </div>
  </section>
)

export default HeroSection
