import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Calendar } from "lucide-react"

const CTASection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="cta" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center glass rounded-3xl p-10 md:p-16 glow-cyan relative overflow-hidden"
        >
          <div className="absolute inset-0 gradient-accent opacity-5" />
          {/* Decorative orbs */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-6">
              Get Started Today — 14-Day Free Trial
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Ready to Transform Your{" "}
              <span className="gradient-text">Rental Fleet Operations?</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
              Join hundreds of rental car businesses, taxi operators, and travel agencies
              already using DriveOps to streamline operations and grow profitably.
              No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                id="cta-start-trial"
                href="https://driveops.chatserve.in/signup"
                className="w-full sm:w-auto gradient-accent text-primary-foreground font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(0,194,255,0.3)]"
              >
                Start Free Trial <ArrowRight size={16} />
              </a>
              <a
                id="cta-book-demo"
                href="mailto:support@driveops.com?subject=Demo Request"
                className="w-full sm:w-auto glass text-foreground font-semibold px-8 py-3.5 rounded-xl hover:bg-muted/30 transition-colors flex items-center justify-center gap-2 border border-border"
              >
                <Calendar size={16} /> Schedule a Demo
              </a>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Questions? Email us at{" "}
              <a href="mailto:support@driveops.com" className="text-primary hover:underline">
                support@driveops.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
