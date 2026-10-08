import { useLayoutEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, CarFront, ClipboardCheck, HeartPulse, MapPinned, Route, type LucideIcon } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Feature = { title: string; detail: string; href: string }
type FeatureGroup = {
  id: string
  number: string
  label: string
  title: string
  description: string
  image: string
  imageAlt: string
  icon: LucideIcon
  tone: string
  features: Feature[]
}

const GROUPS: FeatureGroup[] = [
  {
    id: "feature-plan",
    number: "01",
    label: "Plan the work",
    title: "Turn every request into a ready trip.",
    description: "Give dispatch a dependable plan, whether today's work is a one-off booking or a route that runs every week.",
    image: "/images/features/Create Trip Dashboard Mockup.webp",
    imageAlt: "DriveOps trip creation workspace with driver and vehicle assignment",
    icon: Route,
    tone: "blue",
    features: [
      { title: "Trips & dispatch", detail: "Create trips, check availability, and allocate a driver and vehicle.", href: "/product/trips-dispatch" },
      { title: "Package templates", detail: "Reuse package types and templates to generate trips for familiar work.", href: "/product/packages" },
      { title: "Recurring schedules", detail: "Set daily, weekly, or monthly work and create upcoming trips for dispatch.", href: "/product/recurring-trips" },
      { title: "Trip sheets", detail: "Capture completed trip details from drivers or the ops team.", href: "/product/trip-sheets" },
      { title: "Needs-attention alerts", detail: "Spot unassigned trips and follow up before work is missed.", href: "/product/alerts" },
    ],
  },
  {
    id: "feature-resources",
    number: "02",
    label: "Run people & assets",
    title: "Know who and what is ready to move.",
    description: "Keep the core records behind each assignment together, with a clear mobile workflow for the person behind the wheel.",
    image: "/images/features/Modern Driver Fleet App Interface.webp",
    imageAlt: "DriveOps Driver App screens for duty, trips and driver actions",
    icon: CarFront,
    tone: "indigo",
    features: [
      { title: "Vehicle management", detail: "Maintain vehicle records, status, issues, and document readiness.", href: "/product/vehicles" },
      { title: "Driver management", detail: "Organize profiles, duty, assignments, and driver availability.", href: "/product/drivers" },
      { title: "Attendance & duty", detail: "Track scheduled work, presence, duty hours, and leave across drivers.", href: "/product/attendance-duty" },
      { title: "Driver App", detail: "Accept trips, navigate, record trip sheets, fuel, and vehicle issues.", href: "/product/driver-app" },
      { title: "Operational overview", detail: "See the day's trips, active work, and follow-ups in one workspace.", href: "/product/analytics" },
    ],
  },
  {
    id: "feature-journey",
    number: "03",
    label: "See the journey",
    title: "Stay informed while the fleet is moving.",
    description: "The office, driver, and customer can follow the same trip without another chain of status calls.",
    image: "/images/features/Connected Taxi Tracking Journey.webp",
    imageAlt: "DriveOps live fleet map, Driver App and customer trip tracking journey",
    icon: MapPinned,
    tone: "cyan",
    features: [
      { title: "Live fleet map", detail: "See active vehicles using location shared by the Driver App.", href: "/product/live-fleet" },
      { title: "Customer tracking", detail: "Share a secure trip link and keep customer records connected to work.", href: "/product/customers" },
      { title: "WhatsApp & notifications", detail: "Send assignments, confirmations, and tracking links through supported channels.", href: "/product/notifications" },
      { title: "Customer reviews", detail: "Request feedback and bring WhatsApp replies into the ops inbox.", href: "/product/customers" },
    ],
  },
  {
    id: "feature-care",
    number: "04",
    label: "Protect readiness",
    title: "Make fleet care part of the daily plan.",
    description: "Fuel, service, issues, and documents belong next to the vehicles that need to be ready for the next assignment.",
    image: "/images/features/Vehicle Maintenance Dashboard.webp",
    imageAlt: "DriveOps fleet care dashboard with fuel, maintenance and document readiness",
    icon: HeartPulse,
    tone: "violet",
    features: [
      { title: "Fuel logs", detail: "Record refuelling from drivers and ops with vehicle context.", href: "/product/fuel" },
      { title: "Maintenance & issues", detail: "Track jobs, service due, and vehicle issues reported from the road.", href: "/product/maintenance" },
      { title: "Compliance vault", detail: "Keep vehicle and driver documents together with expiry follow-up.", href: "/product/compliance" },
      { title: "Renewal reminders", detail: "Use expiry scanning and WhatsApp alerts for documents coming due.", href: "/product/compliance" },
    ],
  },
  {
    id: "feature-rentals",
    number: "05",
    label: "Run rentals",
    title: "Put self-drive bookings on the same map.",
    description: "Use your vehicle inventory for more than chauffeur trips, with a rental workflow from availability to close-out.",
    image: "/images/features/Vehicle Availability and New Reservation.webp",
    imageAlt: "DriveOps vehicle availability and self-drive reservation workspace",
    icon: ClipboardCheck,
    tone: "teal",
    features: [
      { title: "Availability", detail: "Check which vehicles are free for self-drive bookings.", href: "/product/rentals" },
      { title: "Reservations", detail: "Create bookings and manage holds before handover.", href: "/product/rentals" },
      { title: "Handover & return", detail: "Record vehicle handover and return inspection fields.", href: "/product/rentals" },
      { title: "Payment recording", detail: "Keep manually recorded payments alongside the rental record.", href: "/product/rentals" },
    ],
  },
]

export default function LandingFeatureAtlas() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeGroup, setActiveGroup] = useState(0)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const media = gsap.matchMedia()
    media.add("(min-width: 951px)", () => {
      const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      const context = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".landing-atlas-card").forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: () => setActiveGroup(index),
            onEnterBack: () => setActiveGroup(index),
          })
          const image = card.querySelector(".landing-atlas-image img")
          if (image && !shouldReduceMotion) gsap.fromTo(image,
            { y: -13, scale: 1.025 },
            { y: 13, scale: 1.055, ease: "none", scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1 } },
          )
        })
      }, section)
      return () => context.revert()
    })
    return () => media.revert()
  }, [])

  const scrollToGroup = (id: string, index: number) => {
    setActiveGroup(index)
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "center",
    })
  }

  return (
    <section id="features" ref={sectionRef} className="landing-atlas" aria-label="DriveOps features">
      <div className="landing-container">
        <div className="landing-atlas-heading" data-reveal>
          <p className="landing-eyebrow landing-eyebrow-dark"><span className="landing-eyebrow-line" /> THE DRIVEOPS PLATFORM</p>
          <h2>All the moving parts.<br /><em>One place to run them.</em></h2>
          <p>Explore the work your team handles every day. Each part of DriveOps connects back to the trip, the vehicle, and the people responsible for it.</p>
        </div>

        <div className="landing-atlas-layout">
          <nav className="landing-atlas-nav" aria-label="Feature areas">
            <span className="landing-atlas-nav-label">Explore by workflow</span>
            {GROUPS.map((group, index) => {
              const Icon = group.icon
              return <button type="button" key={group.id} onClick={() => scrollToGroup(group.id, index)} aria-current={activeGroup === index ? "step" : undefined} className={activeGroup === index ? "is-active" : ""}>
                <span>{group.number}</span><Icon size={17} aria-hidden="true" />{group.label}
              </button>
            })}
            <span className="landing-atlas-nav-progress" aria-hidden="true"><span className={`landing-atlas-nav-progress-fill step-${activeGroup + 1}`} /></span>
          </nav>

          <div className="landing-atlas-cards">
            {GROUPS.map((group) => {
              const Icon = group.icon
              return <article id={group.id} key={group.id} className={`landing-atlas-card tone-${group.tone}`} data-reveal>
                <div className="landing-atlas-card-top">
                  <span><Icon size={17} aria-hidden="true" /> {group.number} / {group.label}</span>
                  <span>DRIVEOPS WORKSPACE</span>
                </div>
                <div className="landing-atlas-card-lead">
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                  <div className="landing-atlas-image"><img src={encodeURI(group.image)} alt={group.imageAlt} loading="lazy" decoding="async" /></div>
                </div>
                <div className="landing-atlas-feature-grid">
                  {group.features.map((feature) => <Link to={feature.href} key={feature.title} className="landing-atlas-feature">
                    <span><strong>{feature.title}</strong><small>{feature.detail}</small></span><ArrowRight size={16} aria-hidden="true" />
                  </Link>)}
                </div>
              </article>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
