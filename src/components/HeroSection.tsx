import { useLayoutEffect, useRef, useState } from "react"
import type { KeyboardEvent, PointerEvent } from "react"
import { Link } from "react-router-dom"
import { ArrowDown, ArrowRight, CarFront, MapPin, MoveUpRight, Route, Smartphone, Wrench } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { HERO_SLIDES } from "@/data/hero-slides"

gsap.registerPlugin(ScrollTrigger)

const VIEWS = [HERO_SLIDES[1], HERO_SLIDES[2], HERO_SLIDES[3], HERO_SLIDES[4], HERO_SLIDES[6]]

const MODULES = [
  { label: "Trips & dispatch", href: "/product/trips-dispatch", icon: Route },
  { label: "Driver App", href: "/product/driver-app", icon: Smartphone },
  { label: "Live fleet", href: "/product/live-fleet", icon: MapPin },
  { label: "Fleet care", href: "/product/maintenance", icon: Wrench },
] as const

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [activeView, setActiveView] = useState(0)
  const currentView = VIEWS[activeView]

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const context = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero-enter]", { autoAlpha: 0, y: 28, duration: 0.8, stagger: 0.1, clearProps: "all" })
        .from(".landing-hero-art", { autoAlpha: 0, x: 65, scale: 0.94, duration: 1.15, clearProps: "all" }, "-=0.7")
        .from(".landing-product-shell", { autoAlpha: 0, y: 65, duration: 1, clearProps: "opacity,visibility" }, "-=0.45")
      gsap.to(".landing-product-shell", {
        y: -45, ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 1 },
      })
      gsap.to(".landing-hero-art", {
        y: -50, ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 1.2 },
      })
      gsap.to(".landing-orbit-one", {
        y: 120, rotation: 24, ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 1.4 },
      })
    }, section)
    return () => context.revert()
  }, [])

  useLayoutEffect(() => {
    const image = imageRef.current
    if (!image || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const tween = gsap.fromTo(image,
      { autoAlpha: 0, scale: 1.035, y: 16 },
      { autoAlpha: 1, scale: 1, y: 0, duration: 0.65, ease: "power3.out", clearProps: "all" },
    )
    return () => { tween.kill() }
  }, [activeView])

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || !visualRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    gsap.to(visualRef.current, { x: x * 13, y: y * 12, rotationY: x * 2.5, rotationX: -y * 2.5, duration: 0.6, ease: "power2.out", overwrite: true })
  }

  const resetPointer = () => {
    if (visualRef.current) gsap.to(visualRef.current, { x: 0, y: 0, rotationX: 0, rotationY: 0, duration: 0.7, ease: "power2.out", overwrite: true })
  }

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index
    if (event.key === "ArrowRight") next = (index + 1) % VIEWS.length
    else if (event.key === "ArrowLeft") next = (index - 1 + VIEWS.length) % VIEWS.length
    else if (event.key === "Home") next = 0
    else if (event.key === "End") next = VIEWS.length - 1
    else return
    event.preventDefault()
    setActiveView(next)
    event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>("[role='tab']")[next]?.focus()
  }

  return (
    <section ref={sectionRef} className="landing-hero" aria-label="DriveOps fleet operations platform">
      <div className="landing-hero-grid" aria-hidden="true" />
      <div className="landing-hero-glow" aria-hidden="true" />
      <div className="landing-orbit landing-orbit-one" aria-hidden="true" />
      <div className="landing-orbit landing-orbit-two" aria-hidden="true" />

      <div className="landing-container landing-hero-content">
        <div className="landing-hero-layout">
          <div className="landing-hero-copy">
            <p className="landing-eyebrow landing-hero-eyebrow" data-hero-enter>
              <span className="landing-pulse" aria-hidden="true" />
              Fleet operations, connected
            </p>
            <h1 data-hero-enter>Manage every trip.<br /><span>Know your fleet.</span></h1>
            <p className="landing-hero-description" data-hero-enter>
              Plan and dispatch trips, assign drivers and vehicles, track active fleet activity, and keep fuel, maintenance and compliance in view. DriveOps brings it all together.
            </p>
            <div className="landing-hero-actions" data-hero-enter>
              <a className="landing-button landing-button-primary" href="https://driveops.chatserve.in/signup">
                Start free trial <ArrowRight size={18} aria-hidden="true" />
              </a>
              <Link className="landing-button landing-button-outline" to="/contact">
                Book a demo <MoveUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <p className="landing-hero-trial" data-hero-enter>No credit card required <span aria-hidden="true">·</span> Quick setup</p>
            <div className="landing-hero-modules" data-hero-enter>
              <div className="landing-hero-modules-heading"><p>Everything your team needs to move</p><Link className="landing-all-features-link" to="/product">Explore all features <ArrowRight size={14} aria-hidden="true" /></Link></div>
              <div>
                {MODULES.map(({ label, href, icon: Icon }) => (
                  <Link to={href} key={label}><Icon size={16} aria-hidden="true" />{label}</Link>
                ))}
              </div>
            </div>
          </div>
          <div className="landing-hero-art" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
            <div className="landing-hero-art-glow" aria-hidden="true" />
            <div className="landing-hero-art-content" ref={visualRef}>
              <div className="landing-hero-art-tag"><CarFront size={15} aria-hidden="true" /> Operator workspace + Driver App</div>
              <img src="/images/features/DriveOps Fleet Management Showcase.webp" alt="DriveOps operator dashboard and Driver App showing trips, drivers, vehicles, live fleet, and needs-attention alerts" width={1800} height={1125} decoding="async" />
            </div>
          </div>
        </div>

        <div className="landing-product-shell">
          <div className="landing-product-chrome">
            <div className="landing-product-status"><span className="landing-pulse" aria-hidden="true" /> EXPLORE DRIVEOPS</div>
            <span className="landing-product-counter">0{activeView + 1} <span>/</span> 0{VIEWS.length}</span>
          </div>
          <div className="landing-product-visual">
            <img ref={imageRef} src={encodeURI(currentView.image)} alt={currentView.imageAlt} width={1540} height={1000} decoding="async" />
          </div>
          <div className="landing-product-nav" role="tablist" aria-label="Explore DriveOps product views">
            {VIEWS.map((view, index) => (
              <button key={view.id} type="button" role="tab" id={`landing-tab-${view.id}`} aria-selected={activeView === index} aria-controls="landing-product-panel" tabIndex={activeView === index ? 0 : -1} onClick={() => setActiveView(index)} onKeyDown={(event) => handleTabKeyDown(event, index)} className={activeView === index ? "is-active" : ""}>
                <span>0{index + 1}</span>{view.navLabel}
              </button>
            ))}
          </div>
          <p id="landing-product-panel" role="tabpanel" aria-labelledby={`landing-tab-${currentView.id}`} className="landing-product-caption">{currentView.description}</p>
        </div>

        <a className="landing-scroll-cue" href="#platform-overview" aria-label="Scroll to platform overview">Scroll to explore <ArrowDown size={15} aria-hidden="true" /></a>
      </div>
    </section>
  )
}
