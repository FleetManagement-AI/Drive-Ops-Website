import React from "react"
import { BusinessMetric, MetricSparkline, MetricProgress } from "./businessTypesData"

interface BusinessTypeMetricsProps {
  metrics: BusinessMetric[]
  accentColor: "blue" | "green" | "purple"
}

export const BusinessTypeMetrics: React.FC<BusinessTypeMetricsProps> = ({
  metrics,
  accentColor
}) => {
  const getStrokeColor = () => {
    switch (accentColor) {
      case "green":
        return "#10B981"
      case "purple":
        return "#8B5CF6"
      case "blue":
      default:
        return "#2563EB"
    }
  }

  const getRingColor = () => {
    switch (accentColor) {
      case "green":
        return "text-emerald-500"
      case "purple":
        return "text-purple-500"
      case "blue":
      default:
        return "text-blue-500"
    }
  }

  const renderSparkline = (points: number[]) => {
    if (!points || points.length < 2) return null
    const min = Math.min(...points)
    const max = Math.max(...points)
    const range = max - min || 1
    const width = 80
    const height = 18
    const step = width / (points.length - 1)

    const coords = points.map((val, idx) => {
      const x = idx * step
      const y = height - ((val - min) / range) * (height - 3) - 1.5
      return `${x},${y}`
    })

    const pathData = `M ${coords.join(" L ")}`

    return (
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-3.5 sm:h-4 mt-1.5 overflow-visible"
        preserveAspectRatio="none"
      >
        <path
          d={pathData}
          fill="none"
          stroke={getStrokeColor()}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  const renderCircularProgress = (percentage: number, label: string) => {
    const size = 32
    const strokeWidth = 3
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    return (
      <div className="relative flex items-center justify-center shrink-0 w-8 h-8">
        <svg className="w-full h-full transform -rotate-90" viewBox={`0 0 ${size} ${size}`}>
          {/* Background Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="stroke-slate-200/70"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className={`${getRingColor()} transition-all duration-700 ease-out`}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>
        <span className="absolute text-[8.5px] font-bold text-slate-700 tracking-tighter">
          {label}
        </span>
      </div>
    )
  }

  return (
    <div className="w-full bg-[#F8FAFC]/90 rounded-2xl border border-slate-200/60 p-3 sm:p-3.5">
      <div className="grid grid-cols-3 gap-2 sm:gap-3 divide-x divide-slate-200/60">
        {metrics.map((metric, idx) => {
          const isSecondOrThird = idx > 0
          if (metric.type === "progress") {
            const prog = metric as MetricProgress
            return (
              <div
                key={idx}
                className={`flex flex-col justify-between ${isSecondOrThird ? "pl-2 sm:pl-3" : ""}`}
              >
                <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight truncate">
                  {prog.label}
                </div>
                <div className="flex items-center justify-between mt-1 gap-1">
                  <div className="text-sm sm:text-base font-bold text-slate-900 font-heading">
                    {prog.value}
                  </div>
                  {renderCircularProgress(prog.percentage, prog.progressLabel)}
                </div>
              </div>
            )
          }

          const spark = metric as MetricSparkline
          return (
            <div
              key={idx}
              className={`flex flex-col justify-between ${isSecondOrThird ? "pl-2 sm:pl-3" : ""}`}
            >
              <div>
                <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight truncate">
                  {spark.label}
                </div>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 font-heading truncate">
                    {spark.value}
                  </span>
                  <span className="text-[9px] font-bold text-emerald-600 shrink-0">
                    {spark.trend}
                  </span>
                </div>
              </div>
              {renderSparkline(spark.sparklinePoints)}
            </div>
          )
        })}
      </div>
    </div>
  )
}
