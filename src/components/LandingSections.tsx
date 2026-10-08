import { useLayoutEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Radio, Route, Smartphone, Wrench, type LucideIcon } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const CAPABILITIES: {
  number: string
  title: string
  description: string
  image: string
  alt: string
  href: string
  icon: LucideIcon
}[] = [
  {
    number: "01",
    title: "Plan with clarity",
    description: "Build trips, schedule work and assign the right driver and vehicle from one place.",
    image: "/images/hero/Trip Planner Dashboard Mockup.webp",
    alt: "DriveOps trip planner and dispatch workspace",
    href: "/product/trips-dispatch",
    icon: Route,
  },
  {
    number: "02",
    title: "Keep everyone moving",
    description: "Send assignments through WhatsApp and give drivers a clear trip workflow in the Driver App.",
    image: "/images/hero/WhatsApp Trip Assignment to Mobile App.webp",
    alt: "WhatsApp assignment and DriveOps Driver App",
    href: "/product/driver-app",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "See what is happening",
    description: "Follow active vehicles, manage fleet care and spot work that needs your attention.",
    image: "/images/hero/DriveOps Live Fleet Dashboard and app.webp",
    alt: "DriveOps live fleet map and Driver App",
    href: "/product/live-fleet",
    icon: Radio,
  },
]

export function LandingCapabilities() {
  return (
    <section id="platform-overview" className="landing-capabilities" aria-label="Platform overview">
      <div className="landing-container">
        <div className="landing-section-heading" data-reveal>
          <div>
            <p className="landing-eyebrow landing-eyebrow-dark"><span className="landing-eyebrow-line" /> ONE CONNECTED PLATFORM</p>
            <h2>Less switching.<br /><em>More moving.</em></h2>
          </div>
          <p>From the first trip request to the final update, DriveOps keeps the people, vehicles and details of your operation connected.</p>
        </div>

        <div className="landing-capability-grid" data-stagger>
          {CAPABILITIES.map(({ number, title, description, image, alt, href, icon: Icon }) => (
            <Link className="landing-capability-card" to={href} key={number}>
              <div className="landing-capability-top"><span>{number} / 03</span><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></div>
              <div className="landing-capability-image"><img src={encodeURI(image)} alt={alt} loading="lazy" decoding="async" /></div>
              <div className="landing-capability-bottom">
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="landing-capability-arrow" aria-hidden="true"><ArrowRight size={18} /></span>
              </div>
            </Link>
          ))}
        </div>

        <div className="landing-capability-outro" data-reveal>
          <span>Trips</span><span>Drivers</span><span>Vehicles</span><span>Live fleet</span><span>Fleet care</span><span>Rentals</span>
        </div>
      </div>
    </section>
  )
}

const WORKFLOW = [
  {
    number: "01",
    label: "Prepare your fleet",
    title: "Start with people and vehicles.",
    description: "Add vehicles, drivers and their records so availability and document readiness are visible before a trip is assigned.",
    image: "/images/features/DriveOps Fleet Dashboard Workspace.webp",
    alt: "DriveOps workspace connecting vehicles, drivers, trips and fleet status",
  },
  {
    number: "02",
    label: "Plan & assign",
    title: "Turn a request into a ready trip.",
    description: "Create a one-off or recurring trip, check availability, and allocate the right driver and vehicle from the same workspace.",
    image: "/images/hero/Trip Planner Dashboard Mockup.webp",
    alt: "DriveOps trip planner with driver and vehicle assignment",
  },
  {
    number: "03",
    label: "Dispatch & confirm",
    title: "Send the details where drivers work.",
    description: "Share an assignment through WhatsApp. Drivers can accept it and follow the next steps in the Driver App.",
    image: "/images/hero/WhatsApp Trip Assignment to Mobile App.webp",
    alt: "WhatsApp trip assignment alongside the DriveOps Driver App",
  },
  {
    number: "04",
    label: "Track the journey",
    title: "Know what is moving right now.",
    description: "See active vehicles on the live fleet map and keep operations informed while trips are underway.",
    image: "/images/hero/DriveOps Live Fleet Dashboard and app.webp",
    alt: "DriveOps live fleet workspace with driver app",
  },
  {
    number: "05",
    label: "Close & improve",
    title: "Keep the record after the trip.",
    description: "Capture trip sheets, review replies and follow-ups. Fuel, issues and service records help you prepare the next vehicle assignment.",
    image: "/images/hero/Fleet Management Dashboard Cards review alerts.webp",
    alt: "DriveOps trip sheets, review inbox and alerts",
  },
] as const

export function LandingWorkflow() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  useLayoutEffect(() => {
    if (!sectionRef.current) return
    const media = gsap.matchMedia()
    media.add("(min-width: 901px)", () => {
      const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      const context = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".landing-story-step").forEach((step, index) => {
          ScrollTrigger.create({
            trigger: step,
            start: "top 54%",
            end: "bottom 46%",
            onEnter: () => setActiveStep(index),
            onEnterBack: () => setActiveStep(index),
          })
        })
        if (!shouldReduceMotion) {
          gsap.fromTo(".landing-story-progress-fill",
            { scaleY: 0 },
            { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".landing-workflow-steps", start: "top center", end: "bottom center", scrub: 0.4 } },
          )
        }
      }, sectionRef)
      return () => context.revert()
    })
    return () => media.revert()
  }, [])

  useLayoutEffect(() => {
    if (!imageRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const tween = gsap.fromTo(imageRef.current,
      { autoAlpha: 0, scale: 1.045, x: 28 },
      { autoAlpha: 1, scale: 1, x: 0, duration: 0.7, ease: "power3.out", clearProps: "all" },
    )
    return () => { tween.kill() }
  }, [activeStep])

  return (
    <section id="how-it-works" ref={sectionRef} className="landing-workflow" aria-label="How DriveOps works">
      <div className="landing-workflow-grid" aria-hidden="true" />
      <div className="landing-container">
        <div className="landing-workflow-heading" data-reveal>
          <p className="landing-eyebrow"><span className="landing-eyebrow-line" /> HOW DRIVEOPS WORKS</p>
          <h2>From setup to close-out.<br /><em>Every step connected.</em></h2>
          <p>See how an operator prepares the fleet, gets a trip moving, keeps everyone informed, and learns from the completed work.</p>
        </div>

        <div className="landing-workflow-layout">
          <div className="landing-workflow-steps">
            <span className="landing-story-progress" aria-hidden="true"><span className="landing-story-progress-fill" /></span>
            {WORKFLOW.map((step, index) => (
              <div className={`landing-story-step ${activeStep === index ? "is-active" : ""}`} key={step.number}>
                <button type="button" className="landing-workflow-step" onClick={(event) => {
                  setActiveStep(index)
                  event.currentTarget.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" })
                }} aria-pressed={activeStep === index}>
                  <span className="landing-workflow-index">{step.number}</span>
                  <span className="landing-workflow-text"><span>{step.label}</span><strong>{step.title}</strong><small>{step.description}</small></span>
                  <ArrowRight size={19} aria-hidden="true" />
                </button>
              </div>
            ))}
            <Link to="/product/trips-dispatch" className="landing-workflow-link">Explore trips & dispatch <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="landing-workflow-media" data-reveal>
            <div className="landing-workflow-media-top"><span><Wrench size={14} aria-hidden="true" /> DRIVEOPS WORKFLOW</span><span>0{activeStep + 1} / 0{WORKFLOW.length}</span></div>
            <img ref={imageRef} src={encodeURI(WORKFLOW[activeStep].image)} alt={WORKFLOW[activeStep].alt} decoding="async" />
            <div className="landing-workflow-media-bottom"><span className="landing-pulse" aria-hidden="true" /> {WORKFLOW[activeStep].label}</div>
          </div>
        </div>

        <div className="landing-story-mobile">
          {WORKFLOW.map((step) => (
            <article key={step.number} data-reveal>
              <div><span>{step.number} / 0{WORKFLOW.length}</span><strong>{step.label}</strong></div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <img src={encodeURI(step.image)} alt={step.alt} loading="lazy" decoding="async" />
            </article>
          ))}
          <Link to="/product/trips-dispatch" className="landing-workflow-link">Explore trips & dispatch <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  )
}
