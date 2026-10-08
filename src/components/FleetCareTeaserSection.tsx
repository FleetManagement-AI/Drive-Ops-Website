import { Link } from "react-router-dom"
import { ArrowRight, BellRing, FileCheck2, Fuel, Wrench, type LucideIcon } from "lucide-react"

const CARE_AREAS: { label: string; title: string; description: string; points: string[]; href: string; icon: LucideIcon; tone: string }[] = [
  {
    label: "01 / FUEL",
    title: "Know what went into every vehicle.",
    description: "Keep refuelling records beside the vehicle and daily work, whether the update comes from the driver or the ops team.",
    points: ["Driver and ops fuel logs", "Vehicle-linked cost context"],
    href: "/product/fuel",
    icon: Fuel,
    tone: "amber",
  },
  {
    label: "02 / MAINTENANCE",
    title: "Make service needs visible early.",
    description: "Follow maintenance jobs, due service, and issues reported from the road before the next assignment depends on that vehicle.",
    points: ["Service jobs and history", "Driver-reported vehicle issues"],
    href: "/product/maintenance",
    icon: Wrench,
    tone: "violet",
  },
  {
    label: "03 / COMPLIANCE",
    title: "Keep documents ready to show.",
    description: "Put vehicle and driver documents in one vault, with expiry scanning and WhatsApp reminders for renewals coming due.",
    points: ["Vehicle and driver records", "Expiry and renewal follow-up"],
    href: "/product/compliance",
    icon: FileCheck2,
    tone: "blue",
  },
]

export default function FleetCareTeaserSection() {
  return (
    <section id="fleet-care" className="landing-care" aria-label="Fleet care for fuel, maintenance and compliance">
      <div className="landing-container">
        <div className="landing-care-heading" data-reveal>
          <div>
            <p className="landing-eyebrow landing-eyebrow-dark"><span className="landing-eyebrow-line" /> FLEET CARE</p>
            <h2>Keep the fleet ready.<br /><em>Keep the day moving.</em></h2>
          </div>
          <p>A vehicle may be available on the schedule but still need fuel, service, or a renewed document. DriveOps keeps those details close to the operation.</p>
        </div>

        <div className="landing-care-stage" data-reveal>
          <div className="landing-care-stage-top"><span><BellRing size={15} aria-hidden="true" /> FLEET READINESS WORKSPACE</span><span>FUEL <i /> SERVICE <i /> DOCUMENTS</span></div>
          <img src="/images/features/Vehicle Maintenance Dashboard.webp" alt="DriveOps fleet care workspace showing fuel records, service due and vehicle and driver documents" loading="lazy" decoding="async" width={1581} height={995} />
          <div className="landing-care-stage-bottom"><span className="landing-pulse" aria-hidden="true" /> Know what needs attention before the next trip</div>
        </div>

        <div className="landing-care-grid" data-stagger>
          {CARE_AREAS.map(({ label, title, description, points, href, icon: Icon, tone }) => (
            <article className={`landing-care-card tone-${tone}`} key={label}>
              <div className="landing-care-card-top"><span>{label}</span><Icon size={21} aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul>{points.map((point) => <li key={point}>{point}</li>)}</ul>
              <Link to={href}>Explore {label.split(" / ")[1].toLowerCase()} <ArrowRight size={16} aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
