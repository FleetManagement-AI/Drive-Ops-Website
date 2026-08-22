import React, { useId } from "react"
import { BusinessMetric, MetricSparkline, MetricProgress } from "./businessTypesData"

interface BusinessTypeMetricsProps {
  metrics: BusinessMetric[]
  accentColor: "blue" | "green" | "purple"
}

const themes = {
  blue:   { stroke: "#2563EB", fill: "#2563EB", ring: "#2563EB", trendColor: "text-emerald-600" },
  green:  { stroke: "#10B981", fill: "#10B981", ring: "#10B981", trendColor: "text-emerald-600" },
  purple: { stroke: "#7C3AED", fill: "#7C3AED", ring: "#7C3AED", trendColor: "text-emerald-600" },
}

/* ---------------------------------------------------------------
   Smooth cubic bezier sparkline with area gradient
--------------------------------------------------------------- */
function Sparkline({
  points,
  uid,
  stroke,
  fill,
}: {
  points: number[]
  uid: string
  stroke: string
  fill: string
}) {
  if (!points || points.length < 2) return null

  const W = 90
  const H = 20
  const min = Math.min(...points)
  const max = Math.max(...points)
  const range = max - min || 1
  const step = W / (points.length - 1)

  const pts = points.map((v, i) => ({
    x: i * step,
    y: H - ((v - min) / range) * (H - 6) - 3,
  }))

  let line = `M ${pts[0].x},${pts[0].y}`
  for (let i = 0; i < pts.length - 1; i++) {
    const c = pts[i], n = pts[i + 1]
    const mx = (c.x + n.x) / 2
    line += ` C ${mx},${c.y} ${mx},${n.y} ${n.x},${n.y}`
  }
  const area = `${line} L ${W},${H} L 0,${H} Z`
  const gradId = `sg-${uid}`

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full mt-1.5 overflow-visible"
      style={{ height: 16 }}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={fill} stopOpacity="0.18" />
          <stop offset="100%" stopColor={fill} stopOpacity="0"    />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${gradId})`} />
      <path
        d={line}
        fill="none"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ---------------------------------------------------------------
   Circular progress ring
--------------------------------------------------------------- */
function RingBadge({
  percentage,
  label,
  color,
}: {
  percentage: number
  label: string
  color: string
}) {
  const SIZE = 32, SW = 3
  const R    = (SIZE - SW) / 2
  const CIRC = 2 * Math.PI * R
  const dash = CIRC - (percentage / 100) * CIRC

  return (
    <div className="relative flex items-center justify-center shrink-0 w-8 h-8">
      <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${SIZE} ${SIZE}`}>
        <circle cx={SIZE/2} cy={SIZE/2} r={R}
          stroke="#E2E8F0" strokeWidth={SW} fill="none" />
        <circle cx={SIZE/2} cy={SIZE/2} r={R}
          stroke={color} strokeWidth={SW} fill="none"
          strokeDasharray={CIRC} strokeDashoffset={dash}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.7s ease" }}
        />
      </svg>
      <span className="absolute text-[8px] font-bold text-slate-700 tracking-tighter">
        {label}
      </span>
    </div>
  )
}

/* ---------------------------------------------------------------
   Main component
--------------------------------------------------------------- */
export const BusinessTypeMetrics: React.FC<BusinessTypeMetricsProps> = ({
  metrics,
  accentColor,
}) => {
  const uid = useId()
  const t   = themes[accentColor]

  // Dummy wave for the progress-type metric (so it also shows a sparkline)
  const dummyWave = [10, 13, 11, 15, 14, 17, 16]

  return (
    <div className="w-full rounded-[14px] border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-3 sm:px-3.5 sm:py-3">
      <div className="grid grid-cols-3 divide-x divide-[#E2E8F0]">
        {metrics.map((metric, idx) => {
          const pad =
            idx === 0 ? "pr-2.5 sm:pr-3"
            : idx === 1 ? "px-2.5 sm:px-3"
            : "pl-2.5 sm:pl-3"

          /* --- PROGRESS metric --- */
          if (metric.type === "progress") {
            const m = metric as MetricProgress
            return (
              <div key={idx} className={`flex flex-col ${pad}`}>
                <p className="text-[10.5px] font-medium text-slate-400 leading-none mb-1 truncate">
                  {m.label}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[15px] sm:text-[16px] font-extrabold text-slate-900 font-heading leading-none">
                    {m.value}
                  </span>
                  <RingBadge
                    percentage={m.percentage}
                    label={m.progressLabel}
                    color={t.ring}
                  />
                </div>
                <Sparkline
                  points={dummyWave}
                  uid={`${uid}-p${idx}`}
                  stroke={t.stroke}
                  fill={t.fill}
                />
              </div>
            )
          }

          /* --- SPARKLINE metric --- */
          const m = metric as MetricSparkline
          return (
            <div key={idx} className={`flex flex-col ${pad}`}>
              <p className="text-[10.5px] font-medium text-slate-400 leading-none mb-1 truncate">
                {m.label}
              </p>
              <div className="flex items-baseline gap-1 flex-wrap">
                <span className="text-[15px] sm:text-[16px] font-extrabold text-slate-900 font-heading leading-none tracking-tight">
                  {m.value}
                </span>
                {m.trend && (
                  <span className={`text-[9.5px] font-bold shrink-0 ${t.trendColor}`}>
                    {m.trend}
                  </span>
                )}
              </div>
              <Sparkline
                points={m.sparklinePoints}
                uid={`${uid}-s${idx}`}
                stroke={t.stroke}
                fill={t.fill}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
