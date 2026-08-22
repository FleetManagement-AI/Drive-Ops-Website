import React from "react"
import { CapabilityItem } from "./businessTypesData"

interface BusinessTypeCapabilitiesProps {
  capabilities: CapabilityItem[]
  accentColor: "blue" | "green" | "purple"
}

const iconColors = {
  blue:   "text-[#2563EB]",
  green:  "text-[#10B981]",
  purple: "text-[#7C3AED]",
}

const pillStyles = {
  blue:   "bg-blue-50 border-blue-200/80 text-[#2563EB]",
  green:  "bg-emerald-50 border-emerald-200/80 text-[#10B981]",
  purple: "bg-purple-50 border-purple-200/80 text-[#7C3AED]",
}

export const BusinessTypeCapabilities: React.FC<BusinessTypeCapabilitiesProps> = ({
  capabilities,
  accentColor,
}) => {
  const iconColor = iconColors[accentColor]
  const pillStyle = pillStyles[accentColor]

  // Show 4 named items + "+X more" pill
  const visible = capabilities.slice(0, 4)
  const extra   = Math.max(0, capabilities.length - 4)

  return (
    <div className="flex items-start justify-between gap-1 sm:gap-2">
      {visible.map((cap, i) => {
        const Icon = cap.icon
        return (
          <div
            key={i}
            className="flex flex-col items-center gap-1.5 flex-1 min-w-0 group/cap"
          >
            <Icon
              className={`w-[18px] h-[18px] shrink-0 ${iconColor} stroke-[1.9] transition-transform duration-200 group-hover/cap:-translate-y-0.5`}
            />
            <span className="text-[11px] font-medium text-slate-600 leading-tight text-center line-clamp-2 px-0.5">
              {cap.label}
            </span>
          </div>
        )
      })}

      {extra > 0 && (
        <div className="flex flex-col items-center justify-center shrink-0">
          <div
            className={[
              "w-10 h-10 rounded-[11px] border flex flex-col items-center justify-center",
              pillStyle,
              "transition-transform duration-200 hover:scale-105",
            ].join(" ")}
          >
            <span className="text-[13px] font-bold leading-none">+{extra}</span>
          </div>
          <span className="text-[11px] font-medium text-slate-500 mt-1 leading-tight">
            more
          </span>
        </div>
      )}
    </div>
  )
}
