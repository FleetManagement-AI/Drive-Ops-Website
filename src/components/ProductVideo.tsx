import React, { useRef, useEffect, useState } from "react"

interface ProductVideoProps {
  src?: string
  poster?: string
  alt?: string
  caption?: string
  hideChrome?: boolean
  aspectRatio?: "16/9" | "4/3" | "21/9" | "auto"
  children?: React.ReactNode
  className?: string
}

export default function ProductVideo({
  src,
  poster,
  alt = "DriveOps Product Demonstration",
  caption,
  hideChrome = false,
  aspectRatio = "16/9",
  children,
  className = ""
}: ProductVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasVideoError, setHasVideoError] = useState(false)

  // IntersectionObserver to handle autoplay only when visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (videoRef.current && !hasVideoError) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {
              // Auto-play was prevented or video failed
            })
          } else {
            videoRef.current.pause()
          }
        }
      },
      { threshold: 0.25 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [hasVideoError])

  if (hideChrome) {
    return (
      <div 
        ref={containerRef}
        className={`relative w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200/60 bg-[#090D16] ${className}`}
      >
        <div 
          className="relative w-full overflow-hidden" 
          style={{ aspectRatio: aspectRatio === "16/9" ? "16 / 9" : aspectRatio === "4/3" ? "4 / 3" : aspectRatio === "21/9" ? "21 / 9" : "auto" }}
        >
          {src && !hasVideoError ? (
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              aria-label={alt}
              muted
              loop
              playsInline
              onError={() => setHasVideoError(true)}
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            <div className="w-full h-full bg-[#090D16] text-white">
              {children}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={`relative w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-[#090D16] ${className}`} ref={containerRef}>
      {/* App Frame Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#060A12] border-b border-slate-800/90 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded px-6 py-0.5 text-[10px] text-slate-400 font-mono tracking-tight flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${isVisible ? "bg-emerald-500 animate-ping" : "bg-slate-600"}`} />
          ops.driveops.in/demo
        </div>
        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">LIVE DEMO</div>
      </div>

      {/* Video Content or High-Fidelity Animated UI Simulation */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: aspectRatio === "16/9" ? "16 / 9" : aspectRatio === "4/3" ? "4 / 3" : aspectRatio === "21/9" ? "21 / 9" : "auto" }}>
        {src && !hasVideoError ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            aria-label={alt}
            muted
            loop
            playsInline
            onError={() => setHasVideoError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          /* Simulated Animated Interactive UI Frame when HTML5 video source is not a static file */
          <div className="w-full h-full bg-[#090D16] text-white flex flex-col justify-between">
            {children}
          </div>
        )}
      </div>

      {caption && (
        <div className="px-4 py-2 bg-[#060A12] border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between font-mono">
          <span>{caption}</span>
          <span className="text-emerald-400">Autoplay Muted</span>
        </div>
      )}
    </div>
  )
}
