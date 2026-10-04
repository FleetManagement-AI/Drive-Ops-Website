import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { MapPinned, Smartphone, Link2, Radio, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const CAPABILITIES = [
  {
    icon: MapPinned,
    title: "Live operations map",
    desc: "See active vehicles on a Mapbox fleet map while drivers are on duty.",
  },
  {
    icon: Smartphone,
    title: "Driver-app GPS telemetry",
    desc: "Location comes from the Driver App—no proprietary GPS hardware required to start.",
  },
  {
    icon: Radio,
    title: "Live location updates",
    desc: "Ops views refresh from periodic snapshots plus live WebSocket location events.",
  },
  {
    icon: Link2,
    title: "Customer tracking links",
    desc: "Share a secure trip tracking page so customers can follow an active trip.",
  },
]

export default function LiveFleetSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="live-fleet" className="section-showcase bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.18),transparent_55%)]" aria-hidden="true" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,45%)_minmax(0,55%)] gap-10 lg:gap-14 items-center">
          <div>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-showcase-eyebrow inline-flex items-center gap-2 text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full mb-5"
            >
              <MapPinned className="w-3.5 h-3.5" />
              <span>Live Fleet Visibility</span>
            </motion.div>

            <motion.h2
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-showcase-h1 mb-5"
            >
              Know where active vehicles are—{" "}
              <span className="text-cyan-400">during real operations.</span>
            </motion.h2>

            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="text-showcase-desc text-slate-300 mb-8"
            >
              DriveOps shows live fleet location from Driver App GPS while drivers are on duty.
              Customers can follow trips through a secure tracking link—without needing a DriveOps login.
            </motion.p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/fleet-map"
                className="text-showcase-cta inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-colors"
              >
                Preview fleet map
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://driveops.chatserve.in/signup"
                className="text-showcase-cta inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-colors"
              >
                Start free trial
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {CAPABILITIES.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5"
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/15 text-cyan-300 flex items-center justify-center mb-3">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
