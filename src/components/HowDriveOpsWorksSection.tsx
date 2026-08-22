import React, { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { WORKFLOW_STAGES } from "./how-it-works/workflowData"
import { WorkflowStep } from "./how-it-works/WorkflowStep"
import { WorkflowConnector } from "./how-it-works/WorkflowConnector"
import { WorkflowProductVisual } from "./how-it-works/WorkflowProductVisual"
import { WorkflowValueStrip } from "./how-it-works/WorkflowValueStrip"

export default function HowDriveOpsWorksSection() {
  const [activeStep, setActiveStep] = useState<string | null>(null)
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="how-it-works"
      className="w-full py-16 sm:py-24 bg-[#FFFFFF] border-t border-slate-200/60 overflow-hidden relative"
    >
      {/* Background Ambient Radial Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-[radial-gradient(ellipse_60%_40%_at_50%_15%,rgba(37,99,235,0.04),transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* ========================================================
            1. SECTION HEADER (CENTERED)
           ======================================================== */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {/* Eyebrow */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-blue-600 font-sans"
          >
            HOW DRIVEOPS WORKS
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.15]"
          >
            From the first trip to the final report.
          </motion.h2>

          {/* Supporting Copy */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-sans"
          >
            DriveOps connects every part of your fleet operation, so your team can move
            from planning and dispatch to tracking, maintenance and profitability.
          </motion.p>
        </div>

        {/* ========================================================
            2. SIX-STAGE WORKFLOW JOURNEY
           ======================================================== */}
        <div className="w-full max-w-6xl mx-auto">
          {/* Desktop & Tablet Layout (Horizontal Flow) */}
          <div className="hidden md:flex items-center justify-between gap-1 lg:gap-2">
            {WORKFLOW_STAGES.map((stage, idx) => (
              <React.Fragment key={stage.id}>
                <WorkflowStep
                  stage={stage}
                  index={idx}
                  isActive={activeStep === stage.id}
                  onHover={setActiveStep}
                />
                {idx < WORKFLOW_STAGES.length - 1 && (
                  <WorkflowConnector
                    index={idx}
                    isActive={activeStep === stage.id || activeStep === WORKFLOW_STAGES[idx + 1].id}
                    orientation="horizontal"
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Layout (Vertical Timeline) */}
          <div className="flex md:hidden flex-col items-center max-w-xs mx-auto">
            {WORKFLOW_STAGES.map((stage, idx) => (
              <React.Fragment key={stage.id}>
                <WorkflowStep
                  stage={stage}
                  index={idx}
                  isActive={activeStep === stage.id}
                  onHover={setActiveStep}
                />
                {idx < WORKFLOW_STAGES.length - 1 && (
                  <WorkflowConnector
                    index={idx}
                    isActive={activeStep === stage.id || activeStep === WORKFLOW_STAGES[idx + 1].id}
                    orientation="vertical"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ========================================================
            3. CENTRAL PRODUCT VISUAL (DASHBOARD + PHONE + TAXI)
           ======================================================== */}
        <WorkflowProductVisual activeStep={activeStep} />

        {/* ========================================================
            4. BOTTOM VALUE STRIP (5 BENEFITS)
           ======================================================== */}
        <WorkflowValueStrip />

      </div>
    </section>
  )
}
