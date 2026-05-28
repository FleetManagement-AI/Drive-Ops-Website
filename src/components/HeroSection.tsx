import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Play, MapPin, Navigation, TrendingUp, Users } from "lucide-react"
import { HERO_SLIDES } from "@/constants/illustrations"

const SLIDE_INTERVAL_MS = 7000
const CROSSFADE_DURATION = 1.2

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

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    HERO_SLIDES.slice(1).forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index % HERO_SLIDES.length)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length)
    }, SLIDE_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [reducedMotion])

  return (
    <section className="relative min-h-screen min-h-[100dvh] flex items-center overflow-hidden bg-[#030712]">
      {/* Full-bleed background carousel — stacked crossfade (always mounted) */}
      <div className="absolute inset-0" aria-hidden="true">
        {HERO_SLIDES.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            animate={{ opacity: i === activeIndex ? 1 : 0 }}
            transition={{ duration: CROSSFADE_DURATION, ease: "easeInOut" }}
            className={`absolute inset-0 h-full w-full object-cover object-[65%_center] sm:object-[72%_center] lg:object-right pointer-events-none select-none ${
              i === activeIndex ? "z-[1]" : "z-0"
            }`}
          />
        ))}
      </div>

      {/* Left-to-right readability gradient */}
      <div className="absolute inset-0 hero-readability-gradient pointer-events-none" />

      {/* Atmosphere: grid + cyan glow */}
      <div className="absolute inset-0 grid-pattern opacity-[0.35] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 pt-28 pb-20 md:pb-24 relative z-10 w-full">
        <div className="max-w-xl lg:max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
          {/* Pill badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/15 rounded-full px-4 py-1.5 mb-6"
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
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold leading-[1.1] tracking-tight mb-5 text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]"
          >
            Smart Fleet Management{" "}
            <span className="gradient-text">for Rental Car Businesses</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base md:text-lg text-white/75 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
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
              className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Play size={15} /> Book a Demo
            </a>
          </motion.div>

          {/* Feature chips */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6"
          >
            {badges.map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 text-xs text-white/70"
              >
                <b.icon size={12} className="text-primary" />
                {b.text}
              </div>
            ))}
          </motion.div>

          {/* Slide indicators */}
          {!reducedMotion && (
            <div
              className="flex items-center justify-center lg:justify-start gap-2"
              role="tablist"
              aria-label="Hero background scenes"
            >
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Show scene ${i + 1} of ${HERO_SLIDES.length}`}
                  onClick={() => goToSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
