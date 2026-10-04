import React from "react"
import { motion, useReducedMotion } from "framer-motion"

export default function ProblemSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="operational-problem"
      className="relative bg-white border-b border-slate-200/70 overflow-hidden"
      aria-label="The operational problem DriveOps solves"
    >
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="section-showcase relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-showcase-eyebrow inline-flex items-center gap-2 text-blue-700 bg-blue-50 border border-blue-200/70 px-3.5 py-1.5 rounded-full mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
            The Operational Problem
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.07 }}
            className="text-showcase-h1 text-slate-900 mb-5"
          >
            Your fleet is moving.{" "}
            <span className="text-blue-600">Your operations shouldn&apos;t be scattered.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="text-showcase-desc mx-auto text-slate-600"
          >
            DriveOps brings trips, dispatch, drivers, tracking, fleet care, and customer updates
            into one connected operating system.
          </motion.p>
        </div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="relative w-full rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white overflow-hidden shadow-[0_8px_40px_rgba(15,23,42,0.06)]"
        >
          <img
            src="/images/From Scattered Chats to One Fleet System.png"
            alt="From scattered chats to one fleet system — the old way versus DriveOps with dashboard and Driver App"
            className="w-full h-auto block"
            loading="lazy"
            decoding="async"
            width={1920}
            height={800}
          />
        </motion.div>
      </div>
    </section>
  )
}
