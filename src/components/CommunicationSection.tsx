import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  Smartphone,
  MapPinned,
  Users,
  Bell,
  Star,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import type { IconType } from "react-icons"

const COMMUNICATION_IMAGE =
  "/images/features/Connected Taxi Tracking Journey.webp"

type CapabilityItem = {
  title: string
  description: string
  icon: LucideIcon | IconType
  iconClass: string
  iconWrapClass: string
}

const CAPABILITIES: CapabilityItem[] = [
  {
    title: "WhatsApp Assignments",
    description: "Send trip assignments and updates via WhatsApp.",
    icon: FaWhatsapp,
    iconClass: "text-emerald-600",
    iconWrapClass: "border-emerald-100 bg-emerald-50",
  },
  {
    title: "Driver App",
    description: "Drivers get clear trip details and operational updates.",
    icon: Smartphone,
    iconClass: "text-blue-600",
    iconWrapClass: "border-blue-100 bg-blue-50",
  },
  {
    title: "Live Operations",
    description: "Track active trips and vehicles from the dashboard.",
    icon: MapPinned,
    iconClass: "text-orange-600",
    iconWrapClass: "border-orange-100 bg-orange-50",
  },
  {
    title: "Customer Updates",
    description: "Share trip status and important updates with customers.",
    icon: Users,
    iconClass: "text-violet-600",
    iconWrapClass: "border-violet-100 bg-violet-50",
  },
  {
    title: "Trip Notifications",
    description: "Keep everyone informed throughout the trip.",
    icon: Bell,
    iconClass: "text-sky-600",
    iconWrapClass: "border-sky-100 bg-sky-50",
  },
  {
    title: "Customer Reviews",
    description: "Collect feedback after completed trips.",
    icon: Star,
    iconClass: "text-amber-600",
    iconWrapClass: "border-amber-100 bg-amber-50",
  },
]

export default function CommunicationSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="communication"
      className="section-showcase relative overflow-hidden border-b border-slate-200/70 bg-[#F8FAFC]"
      aria-label="Driver and customer communication throughout the trip"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 75% 45%, rgba(37,99,235,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          {/* Copy + capabilities */}
          <div className="order-1 lg:col-span-5">
            <motion.p
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-showcase-eyebrow mb-5 inline-flex items-center rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1 text-blue-600"
            >
              COMMUNICATION
            </motion.p>

            <motion.h2
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-showcase-h1 font-semibold tracking-[-0.035em] text-slate-900"
            >
              The driver knows what to do.
              <br />
              You know{" "}
              <span className="gradient-text">what&apos;s happening.</span>
            </motion.h2>

            <motion.p
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="mt-5 max-w-md text-[17px] leading-relaxed text-slate-600 sm:text-lg"
            >
              Keep drivers connected with trip assignments and operational
              updates, while giving your team visibility into active trips and
              keeping customers informed.
            </motion.p>

            <motion.ul
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 hidden grid-cols-2 gap-x-6 gap-y-5 lg:grid"
            >
              {CAPABILITIES.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.title} className="flex items-start gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${item.iconWrapClass}`}
                    >
                      <Icon
                        className={`h-[18px] w-[18px] ${item.iconClass}`}
                        aria-hidden="true"
                      />
                    </span>
                    <div className="min-w-0 space-y-0.5">
                      <h3 className="font-heading text-[15px] font-bold leading-snug tracking-tight text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-[13px] font-medium leading-snug text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </li>
                )
              })}
            </motion.ul>
          </div>

          {/* Product visual */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative order-2 lg:col-span-7"
          >
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.08) 0%, transparent 65%)",
              }}
            />
            <img
              src={encodeURI(COMMUNICATION_IMAGE)}
              alt="Connected trip communication journey from WhatsApp assignment through Driver App, live fleet tracking, customer updates, and review"
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
              className="relative z-10 mx-auto h-auto w-full scale-105 object-contain object-center lg:scale-110"
              draggable={false}
            />
            <p className="relative z-10 mx-auto mt-3 max-w-lg text-center text-[12px] leading-snug text-slate-500">
              Live tracking uses Driver App GPS telemetry—not hardware GPS
              devices.
            </p>
          </motion.div>

          {/* Mobile / tablet capabilities — after visual */}
          <motion.ul
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="order-3 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden"
          >
            {CAPABILITIES.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.title} className="flex items-start gap-3">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${item.iconWrapClass}`}
                  >
                    <Icon
                      className={`h-[18px] w-[18px] ${item.iconClass}`}
                      aria-hidden="true"
                    />
                  </span>
                  <div className="min-w-0 space-y-0.5">
                    <h3 className="font-heading text-[15px] font-bold leading-snug tracking-tight text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-[13px] font-medium leading-snug text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </li>
              )
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
