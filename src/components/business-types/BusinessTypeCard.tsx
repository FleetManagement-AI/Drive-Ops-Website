import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { BusinessTypeItem } from "./businessTypesData"
import { BusinessTypeCapabilities } from "./BusinessTypeCapabilities"
import { BusinessTypeMetrics } from "./BusinessTypeMetrics"

interface BusinessTypeCardProps {
  item: BusinessTypeItem
  index: number
}

/* ---------------------------------------------------------------
   Theme tokens.
   cardBg = sampled from each image's sky/ground colour so the
   image blends into the card background seamlessly.
--------------------------------------------------------------- */
const themes = {
  blue: {
    // Sampled from taxi_image.png sky — pale ice-blue
    cardBg:       "#EBF3FF",
    border:       "border-[#C8DEFF]",
    hoverBorder:  "hover:border-blue-300",
    hoverShadow:  "hover:shadow-[0_20px_44px_rgba(37,99,235,0.14)]",
    iconBg:       "bg-[#2563EB] shadow-blue-500/30",
    ctaColor:     "text-[#2563EB] hover:text-blue-700",
    divider:      "bg-[#C8DEFF]/70",
  },
  green: {
    // Sampled from truck_image.png sky — pale mint
    cardBg:       "#E8FAF2",
    border:       "border-[#A8DFCA]",
    hoverBorder:  "hover:border-emerald-300",
    hoverShadow:  "hover:shadow-[0_20px_44px_rgba(16,185,129,0.12)]",
    iconBg:       "bg-[#10B981] shadow-emerald-500/30",
    ctaColor:     "text-[#10B981] hover:text-emerald-700",
    divider:      "bg-[#A8DFCA]/70",
  },
  purple: {
    // Sampled from rental_car.png sky — pale lavender
    cardBg:       "#F0EBFF",
    border:       "border-[#CDB8F5]",
    hoverBorder:  "hover:border-purple-300",
    hoverShadow:  "hover:shadow-[0_20px_44px_rgba(124,58,237,0.12)]",
    iconBg:       "bg-[#7C3AED] shadow-purple-500/30",
    ctaColor:     "text-[#7C3AED] hover:text-purple-700",
    divider:      "bg-[#CDB8F5]/70",
  },
} as const

export const BusinessTypeCard: React.FC<BusinessTypeCardProps> = ({ item, index }) => {
  const HeaderIcon = item.headerIcon
  const t = themes[item.accentColor]

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.52, delay: index * 0.1 }}
      style={{ backgroundColor: t.cardBg }}
      className={[
        "group relative flex flex-col h-full overflow-hidden",
        "rounded-[24px] border",
        t.border, t.hoverBorder,
        "shadow-[0_4px_20px_rgba(15,23,42,0.07)]",
        t.hoverShadow,
        "transition-all duration-300 ease-out hover:-translate-y-[5px]",
      ].join(" ")}
    >

      {/* ============================================================
          1. HEADER — icon + title + description
          All on the card's tinted bg (same as the image sky)
      ============================================================ */}
      <div className="px-6 sm:px-7 pt-7 pb-4">

        {/* Category icon */}
        <div
          className={[
            "w-12 h-12 rounded-[14px] flex items-center justify-center mb-3.5",
            "shadow-md", t.iconBg,
            "transition-transform duration-300 group-hover:scale-[1.06]",
          ].join(" ")}
        >
          <HeaderIcon className="w-[22px] h-[22px] text-white stroke-[2.1]" />
        </div>

        <h3 className="font-heading font-bold text-[24px] sm:text-[25px] text-slate-900 tracking-tight leading-tight mb-1.5">
          {item.title}
        </h3>

        <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-[1.55] line-clamp-2 font-sans">
          {item.description}
        </p>
      </div>

      {/* ============================================================
          2. HERO VEHICLE + CITY ARTWORK
          
          Images are 1254×1254 (square). We use w-full + h-auto so the
          image fills the full card width at its natural aspect ratio —
          zero letterbox bars. max-height caps the vertical space.
          
          Because the card bg is sampled from the image's sky colour,
          the image appears to float on the card seamlessly.
      ============================================================ */}
      <div className="relative w-full overflow-hidden">
        <img
          src={item.vehicleImage}
          alt={item.vehicleAlt}
          loading="lazy"
          decoding="async"
          className="w-full h-auto block transition-transform duration-300 ease-out group-hover:scale-[1.025]"
          style={{ maxHeight: "260px", objectFit: "cover", objectPosition: "center 55%" }}
        />
      </div>

      {/* ============================================================
          3. CONTENT SECTION — capabilities + analytics + CTA
          Sits on the same tinted bg. Thin divider separates from image.
      ============================================================ */}
      <div className="flex flex-col flex-1 px-6 sm:px-7 pt-5 pb-6">

        {/* Capabilities strip */}
        <div className="mb-4">
          <BusinessTypeCapabilities
            capabilities={item.capabilities}
            accentColor={item.accentColor}
          />
        </div>

        {/* Unified analytics */}
        <BusinessTypeMetrics
          metrics={item.metrics}
          accentColor={item.accentColor}
        />

        {/* CTA */}
        <div className="mt-5 flex justify-center">
          {item.ctaHref.startsWith("/") ? (
            <Link
              to={item.ctaHref}
              className={[
                "inline-flex items-center gap-1.5 text-[14px] font-bold group/cta",
                t.ctaColor,
                "transition-colors duration-200",
              ].join(" ")}
            >
              <span>{item.ctaText}</span>
              <ArrowRight className="w-[17px] h-[17px] transition-transform duration-200 group-hover/cta:translate-x-1" />
            </Link>
          ) : (
            <a
              href={item.ctaHref}
              className={[
                "inline-flex items-center gap-1.5 text-[14px] font-bold group/cta",
                t.ctaColor,
                "transition-colors duration-200",
              ].join(" ")}
            >
              <span>{item.ctaText}</span>
              <ArrowRight className="w-[17px] h-[17px] transition-transform duration-200 group-hover/cta:translate-x-1" />
            </a>
          )}
        </div>
      </div>

    </motion.article>
  )
}
