import React from "react"
import { CapabilityItem } from "./businessTypesData"

interface BusinessTypeCapabilitiesProps {
  capabilities: CapabilityItem[]
  accentColor: "blue" | "green" | "purple"
}

export const BusinessTypeCapabilities: React.FC<BusinessTypeCapabilitiesProps> = ({
  capabilities,
  accentColor
}) => {
  const getAccentColor = () => {
    switch (accentColor) {
      case "green":
        return "text-emerald-600 group-hover/item:text-emerald-700"
      case "purple":
        return "text-purple-600 group-hover/item:text-purple-700"
      case "blue":
      default:
        return "text-blue-600 group-hover/item:text-blue-700"
    }
  }

  const iconColor = getAccentColor()

  return (
    <div className="w-full pt-1 pb-2">
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2 text-center">
        {capabilities.map((cap, index) => {
          const Icon = cap.icon
          return (
            <div
              key={index}
              className="group/item flex flex-col items-center justify-start transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="mb-1.5 flex items-center justify-center">
                <Icon className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${iconColor} stroke-[2.2] transition-colors`} />
              </div>
              <span className="text-[10.5px] sm:text-[11px] font-medium text-slate-700 leading-tight">
                {cap.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
