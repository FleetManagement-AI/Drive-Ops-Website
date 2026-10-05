import { useEffect, useId, useRef } from "react"
import Granim from "granim"

const COMPLEX_GRADIENTS = [
  [
    { color: "#833ab4", pos: 0.2 },
    { color: "#fd1d1d", pos: 0.8 },
    { color: "#38ef7d", pos: 1 },
  ],
  [
    { color: "#40e0d0", pos: 0 },
    { color: "#ff8c00", pos: 0.2 },
    { color: "#ff0080", pos: 0.75 },
  ],
]

/**
 * Full-bleed Granim canvas with a hard top light wash so color only
 * shows through in the lower portion of a relative hero.
 */
export default function MovingBackground({ className = "" }) {
  const canvasRef = useRef(null)
  const reactId = useId()
  const wrapperDomId = `moving-bg-${reactId.replace(/:/g, "")}`

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (prefersReducedMotion) {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = Math.max(1, Math.floor(width))
      canvas.height = Math.max(1, Math.floor(height))
      const ctx = canvas.getContext("2d")
      if (ctx) {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
        COMPLEX_GRADIENTS[0].forEach(({ color, pos }) => {
          gradient.addColorStop(pos, color)
        })
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
      return
    }

    const granimInstance = new Granim({
      element: canvas,
      // Granim always querySelector(elToSetClassOn); point at wrapper, not body.
      elToSetClassOn: `#${wrapperDomId}`,
      direction: "left-right",
      isPausedWhenNotInView: true,
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: COMPLEX_GRADIENTS,
          transitionSpeed: 4000,
          loop: true,
        },
      },
    })

    return () => {
      granimInstance.destroy()
    }
  }, [wrapperDomId])

  return (
    <div
      id={wrapperDomId}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`.trim()}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-60"
        style={{ display: "block", width: "100%", height: "100%" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #F8FAFC 0%, #F8FAFC 50%, rgba(248, 250, 252, 0.85) 62%, transparent 82%)",
        }}
      />
    </div>
  )
}
