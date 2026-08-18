import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  TrendingUp, 
  Wallet, 
  Truck, 
  Clock, 
  ArrowRight, 
  Building2, 
  Target, 
  Sparkles 
} from "lucide-react"
import { FinancialDashboardMockup } from "./finance/FinancialDashboardMockup"
import { ProfitFlowVisualization } from "./finance/ProfitFlowVisualization"
import { financialMetrics } from "@/data/financialData"

export default function FinancialIntelligenceSection() {
  const [activeExpenseId, setActiveExpenseId] = useState<string | null>(null)
  const { benefits } = financialMetrics

  const renderBenefitIcon = (iconName: string, color: string) => {
    const iconClass = "w-4 h-4"
    switch (iconName) {
      case "trending-up":
        return (
          <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <TrendingUp className={iconClass} />
          </div>
        )
      case "wallet":
        return (
          <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Wallet className={iconClass} />
          </div>
        )
      case "truck":
        return (
          <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Truck className={iconClass} />
          </div>
        )
      case "clock":
        return (
          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Clock className={iconClass} />
          </div>
        )
      default:
        return (
          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Sparkles className={iconClass} />
          </div>
        )
    }
  }

  return (
    <section 
      id="financial-intelligence" 
      className="w-full py-16 sm:py-24 bg-[#FAFAFA] border-t border-slate-200/60 overflow-hidden"
    >
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ========================================================
            1. TOP TWO-COLUMN LAYOUT: LEFT COPY & RIGHT DASHBOARD
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Eyebrow, Heading, Benefits, CTA (~40%) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/70 text-blue-600 text-[11px] font-bold tracking-widest uppercase shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-blue-600" />
              <span>FINANCIAL INTELLIGENCE</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h2 className="font-heading font-black text-3xl sm:text-4xl xl:text-5xl text-slate-900 tracking-tight leading-[1.15]">
                Know where every rupee goes.
              </h2>
              <h3 className="font-heading font-black text-3xl sm:text-4xl xl:text-5xl tracking-tight leading-[1.15] gradient-text">
                Turn fleet data into real profit.
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Track revenue, fuel, maintenance, driver payroll and every other fleet expense in one place.
              See your true operating cost and profitability across your fleet.
            </p>

            {/* Compact Benefits List */}
            <div className="space-y-4 pt-2">
              {benefits.map((b) => (
                <div key={b.id} className="flex items-start gap-3.5 group">
                  {renderBenefitIcon(b.icon, b.color)}
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-heading">
                      {b.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-slate-300 hover:border-blue-600 text-xs sm:text-sm font-bold text-slate-700 hover:text-blue-600 bg-white hover:bg-blue-50/30 transition-all shadow-2xs group"
              >
                <span>Explore Financial Insights</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive SaaS Financial Dashboard (~60%) */}
          <div className="lg:col-span-7 w-full">
            <FinancialDashboardMockup
              activeExpenseId={activeExpenseId}
              onHoverExpense={setActiveExpenseId}
            />
          </div>

        </div>

        {/* ========================================================
            2. PROFIT FLOW VISUALIZATION BANNER
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full"
        >
          <ProfitFlowVisualization
            activeExpenseId={activeExpenseId}
            onHoverExpense={setActiveExpenseId}
          />
        </motion.div>

        {/* ========================================================
            3. BOTTOM SUMMARY CTA BANNER
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                Every rupee tracked. Every expense controlled. Every decision smarter.
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                DriveOps helps you maximize profit and grow your fleet business.
              </p>
            </div>
          </div>

          <a
            href="#pricing"
            className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all group"
          >
            <span>Start 30-Day Free Trial</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
