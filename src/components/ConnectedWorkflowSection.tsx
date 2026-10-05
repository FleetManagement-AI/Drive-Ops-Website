import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  Users,
  Crosshair,
  ShieldCheck,
  BarChart3,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const WORKFLOW_IMAGE =
  "/images/features/Fleet Trip Management Workflow Infographic.png"

type BenefitItem = {
  title: string
  description: string
  icon: LucideIcon
}

const BENEFITS: BenefitItem[] = [
  {
    title: "Everyone on the same page",
    description:
      "Drivers, customers and your team stay connected throughout the journey.",
    icon: Users,
  },
  {
    title: "Less manual follow-ups",
    description:
      "Trip updates, assignments and tracking happen in one system.",
    icon: Crosshair,
  },
  {
    title: "Better customer experience",
    description:
      "Keep customers informed with trip updates and feedback.",
    icon: ShieldCheck,
  },
  {
    title: "Smoother operations",
    description:
      "Manage the complete trip lifecycle from request to review.",
    icon: BarChart3,
  },
]

export default function ConnectedWorkflowSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="connected-workflow"
      className="section-showcase relative overflow-hidden border-b border-slate-200/70 bg-[#F8FAFC]"
      aria-label="How DriveOps connects the trip lifecycle"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(37,99,235,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-[780px] text-center lg:mb-16">
          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-showcase-eyebrow mb-5 inline-flex items-center rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1 text-blue-600"
          >
            HOW IT WORKS
          </motion.p>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-showcase-h1 font-semibold tracking-[-0.035em] text-slate-900"
          >
            From trip request to completion,
            <br />
            <span className="text-blue-600">everyone stays connected.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mx-auto mt-5 max-w-[720px] text-[17px] leading-relaxed text-slate-600 sm:text-lg"
          >
            DriveOps connects the trip, driver, vehicle, operations team and
            customer throughout the journey — from the initial request to the
            final review.
          </motion.p>
        </div>

        {/* Infographic canvas */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mx-auto mb-12 w-full max-w-[1280px] overflow-x-auto overflow-y-hidden lg:mb-16 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <img
            src={encodeURI(WORKFLOW_IMAGE)}
            alt="DriveOps fleet trip management workflow from trip request through assignment, live tracking, trip sheet, and customer review"
            width={1920}
            height={900}
            loading="lazy"
            decoding="async"
            className="mx-auto h-auto w-full min-w-[720px] object-contain object-center sm:min-w-0"
            draggable={false}
          />
        </motion.div>

        {/* Benefit strip */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mx-auto w-full max-w-7xl rounded-[20px] border border-[#E2E8F0] bg-white/65 p-5 sm:p-6"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-slate-200/80">
            {BENEFITS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3 lg:px-5 first:lg:pl-0 last:lg:pr-0"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 space-y-0.5">
                    <h4 className="font-heading text-[15px] font-bold leading-snug tracking-tight text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-[13px] font-medium leading-snug text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
