import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Sparkles, TrendingUp, Lightbulb } from "lucide-react"
import { financialMetrics } from "@/data/financialData"

export const RevenueExpenseChart: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const { labels, revenueSeries, expenseSeries, maxScale } = financialMetrics.chart
  const { fleetInsight } = financialMetrics

  // SVG Chart dimensions & coordinate mapping
  const width = 540
  const height = 200
  const paddingLeft = 42
  const paddingRight = 16
  const paddingTop = 20
  const paddingBottom = 28

  const chartW = width - paddingLeft - paddingRight
  const chartH = height - paddingTop - paddingBottom

  const getX = (index: number) => paddingLeft + (index / (labels.length - 1)) * chartW
  const getY = (val: number) => paddingTop + chartH - (val / maxScale) * chartH

  // Build SVG smooth path strings using cubic bezier
  const buildSmoothPath = (series: number[]) => {
    const points = series.map((val, i) => ({ x: getX(i), y: getY(val) }))
    if (points.length === 0) return ""

    let path = `M ${points[0].x} ${points[0].y}`
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = i > 0 ? points[i - 1] : points[i]
      const p1 = points[i]
      const p2 = points[i + 1]
      const p3 = i != points.length - 2 ? points[i + 2] : p2

      const cp1x = p1.x + (p2.x - p0.x) / 6
      const cp1y = p1.y + (p2.y - p0.y) / 6
      const cp2x = p2.x - (p3.x - p1.x) / 6
      const cp2y = p2.y - (p3.y - p1.y) / 6

      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`
    }
    return path
  }

  const revPath = buildSmoothPath(revenueSeries)
  const expPath = buildSmoothPath(expenseSeries)

  const revAreaPath = `${revPath} L ${getX(labels.length - 1)} ${paddingTop + chartH} L ${getX(0)} ${paddingTop + chartH} Z`
  const expAreaPath = `${expPath} L ${getX(labels.length - 1)} ${paddingTop + chartH} L ${getX(0)} ${paddingTop + chartH} Z`

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-xs flex flex-col justify-between h-full">
      {/* Chart Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs sm:text-sm font-bold font-heading text-slate-800 tracking-tight">
            Revenue vs Expenses
          </h3>
          <div className="flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/70 rounded-lg px-2 py-1 cursor-pointer hover:bg-slate-100 transition-colors">
            <span>This Month</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 text-[11px] font-medium text-slate-600 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-1 rounded-full bg-blue-600" />
            <span className="text-slate-600">Revenue</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-1 rounded-full bg-rose-500" />
            <span className="text-slate-600">Expenses</span>
          </div>
        </div>

        {/* Interactive SVG Chart */}
        <div className="relative w-full overflow-hidden select-none">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto overflow-visible"
            style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.02))" }}
          >
            <defs>
              <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="expGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#F43F5E" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid horizontal dashed lines & Y labels */}
            {[15, 10, 5, 0].map((val) => {
              const y = getY(val)
              return (
                <g key={val}>
                  <line
                    x1={paddingLeft}
                    y1={y}
                    x2={width - paddingRight}
                    y2={y}
                    stroke="#F1F5F9"
                    strokeWidth="1"
                    strokeDasharray={val === 0 ? "none" : "3 3"}
                  />
                  <text
                    x={paddingLeft - 8}
                    y={y + 3.5}
                    textAnchor="end"
                    fontSize="10"
                    fill="#94A3B8"
                    fontFamily="inherit"
                  >
                    {val === 0 ? "₹0" : `₹${val}L`}
                  </text>
                </g>
              )
            })}

            {/* X-axis labels */}
            {labels.map((lbl, i) => (
              <text
                key={lbl}
                x={getX(i)}
                y={height - 6}
                textAnchor="middle"
                fontSize="9.5"
                fill="#94A3B8"
                fontFamily="inherit"
              >
                {lbl}
              </text>
            ))}

            {/* Area Fills */}
            <path d={revAreaPath} fill="url(#revGradient)" />
            <path d={expAreaPath} fill="url(#expGradient)" />

            {/* Animated Curves */}
            <motion.path
              d={revPath}
              fill="none"
              stroke="#2563EB"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <motion.path
              d={expPath}
              fill="none"
              stroke="#F43F5E"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
            />

            {/* Interactive Data Points & Hover Line */}
            {labels.map((_, i) => {
              const rx = getX(i)
              const ry = getY(revenueSeries[i])
              const ey = getY(expenseSeries[i])
              const isHovered = hoveredIdx === i

              return (
                <g
                  key={i}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Invisible hit area */}
                  <rect
                    x={rx - chartW / (labels.length * 2)}
                    y={paddingTop}
                    width={chartW / labels.length}
                    height={chartH}
                    fill="transparent"
                  />

                  {/* Vertical guide line on hover */}
                  {isHovered && (
                    <line
                      x1={rx}
                      y1={paddingTop}
                      x2={rx}
                      y2={paddingTop + chartH}
                      stroke="#94A3B8"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                    />
                  )}

                  {/* Revenue marker */}
                  <circle
                    cx={rx}
                    cy={ry}
                    r={isHovered ? 4.5 : 3}
                    fill="#2563EB"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    className="transition-all duration-150"
                  />

                  {/* Expense marker */}
                  <circle
                    cx={rx}
                    cy={ey}
                    r={isHovered ? 4.5 : 3}
                    fill="#F43F5E"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    className="transition-all duration-150"
                  />
                </g>
              )
            })}
          </svg>

          {/* Floating Tooltip when hovering point */}
          {hoveredIdx !== null && (
            <div
              className="absolute pointer-events-none bg-slate-900/90 text-white backdrop-blur-xs px-2.5 py-1.5 rounded-lg text-[10px] shadow-lg border border-slate-700/50 flex flex-col gap-0.5 z-20"
              style={{
                left: `${(getX(hoveredIdx) / width) * 100}%`,
                top: "10%",
                transform: "translateX(-50%)",
              }}
            >
              <div className="font-semibold text-slate-300">{labels[hoveredIdx]}</div>
              <div className="text-blue-400 font-bold">Rev: ₹{revenueSeries[hoveredIdx]}L</div>
              <div className="text-rose-400 font-bold">Exp: ₹{expenseSeries[hoveredIdx]}L</div>
            </div>
          )}
        </div>
      </div>

      {/* Fleet Insight Callout Box */}
      <div className="mt-3 bg-emerald-50/40 border border-emerald-100 rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                {fleetInsight.title}
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-700 mt-0.5">
              {fleetInsight.headline}{" "}
              <span className="font-extrabold text-slate-900">{fleetInsight.highlight}</span>{" "}
              {fleetInsight.suffix}
            </p>
            <p className="text-[10px] sm:text-[11px] text-slate-500">
              Main reason:{" "}
              <span className="font-semibold text-emerald-700">{fleetInsight.reason}</span>
            </p>
          </div>
        </div>

        {/* Decorative Mini Sparkline */}
        <div className="hidden sm:block shrink-0">
          <svg width="68" height="26" viewBox="0 0 68 26" fill="none">
            <path
              d="M2 20 C 14 22, 22 14, 34 18 C 46 22, 54 8, 66 4"
              stroke="#10B981"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="66" cy="4" r="2.5" fill="#10B981" />
          </svg>
        </div>
      </div>
    </div>
  )
}
