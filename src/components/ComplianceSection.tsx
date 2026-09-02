import React, { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ShieldCheck, Upload, ScanLine, FileCheck, Calendar, Bell, CheckCircle2, ArrowRight, AlertTriangle } from "lucide-react"
import documentVaultImg from "@/assets/document-vault.jpg"

const OCR_STEPS = [
  {
    step: "01",
    label: "Upload Document",
    desc: "Drag and drop or photograph vehicle & driver paperwork.",
    icon: Upload,
  },
  {
    step: "02",
    label: "OCR Extraction",
    desc: "Automated OCR reads registration number, dates, and names.",
    icon: ScanLine,
  },
  {
    step: "03",
    label: "Document Stored",
    desc: "Securely attached to the respective vehicle or driver profile.",
    icon: FileCheck,
  },
  {
    step: "04",
    label: "Expiry Tracked",
    desc: "Countdown timer keeps compliance status continuously visible.",
    icon: Calendar,
  },
  {
    step: "05",
    label: "Renewal Alert",
    desc: "Proactive warnings 30, 15, and 7 days prior to expiration.",
    icon: Bell,
  },
]

const SUPPORTED_DOCUMENTS = [
  {
    type: "RC (Registration Certificate)",
    category: "Vehicle",
    fields: "Reg No, Chassis No, Engine No, Reg Date",
    status: "Active",
    badge: "Valid",
  },
  {
    type: "Commercial Vehicle Insurance",
    category: "Vehicle",
    fields: "Policy No, Provider, Coverage Validity",
    status: "Expiring in 18 days",
    badge: "Attention",
  },
  {
    type: "Commercial Driving Licence",
    category: "Driver",
    fields: "DL Number, Badge Endorsement, Expiry",
    status: "Valid",
    badge: "Valid",
  },
  {
    type: "Pollution Under Control (PUC)",
    category: "Vehicle",
    fields: "Certificate Number, Test Date, Expiry",
    status: "Expiring in 6 days",
    badge: "Urgent",
  },
]

export default function ComplianceSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="compliance" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/70 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>DOCUMENT INTELLIGENCE & COMPLIANCE</span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Stop chasing <span className="gradient-text">expiry dates.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Keep vehicle and driver documents organized, extract information faster with OCR, and stay ahead of renewals before vehicles get grounded.
          </motion.p>
        </div>

        {/* 5-Step Visual OCR Pipeline */}
        <div className="mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {OCR_STEPS.map((step, idx) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.label}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-blue-200 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono font-bold text-slate-400">
                        {step.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="font-heading text-sm font-bold text-slate-900 mb-1">
                      {step.label}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Document Vault UI Showcase & Supported Documents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Real Document Vault Screenshot */}
          <div className="lg:col-span-7">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900 p-2 sm:p-3 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                  <span className="ml-2 font-mono text-[10px] text-slate-400">ops.driveops.in / documents-vault</span>
                </div>
                <span className="text-[10px] font-semibold text-blue-400">
                  OCR Engine Active
                </span>
              </div>

              {/* Real Screenshot */}
              <div className="relative rounded-xl overflow-hidden bg-slate-950">
                <img
                  src={documentVaultImg}
                  alt="DriveOps Document Compliance Vault"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Supported Document Types */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                SUPPORTED VEHICLE & DRIVER PAPERS
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 mb-3 leading-tight">
                Automated document extraction and renewal intelligence.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Upload scans directly from your mobile camera or desktop. DriveOps extracts the metadata and keeps your entire fleet compliant.
              </p>
            </div>

            {/* Document Badges Grid */}
            <div className="space-y-2.5">
              {SUPPORTED_DOCUMENTS.map((doc) => (
                <div
                  key={doc.type}
                  className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-heading text-xs font-bold text-slate-900">
                        {doc.type}
                      </h4>
                      <span className="text-[9px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded font-semibold">
                        {doc.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {doc.fields}
                    </p>
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                    doc.badge === "Urgent"
                      ? "bg-rose-50 text-rose-600 border border-rose-200"
                      : doc.badge === "Attention"
                      ? "bg-amber-50 text-amber-700 border border-amber-200"
                      : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  }`}>
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Never miss an RTO compliance deadline or risk impoundment</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
