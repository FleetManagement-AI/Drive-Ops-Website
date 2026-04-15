import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, ArrowRight, Star } from "lucide-react"

interface Plan {
  name: string
  price: string
  period: string
  ideal: string
  description: string
  features: string[]
  cta: string
  ctaHref: string
  highlighted: boolean
  badge?: string
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "₹499",
    period: "/month",
    ideal: "Small rental businesses",
    description: "Everything you need to get your fleet management off the ground.",
    features: [
      "Up to 10 vehicles",
      "Real-time GPS tracking",
      "Driver management",
      "Trip & booking management",
      "Basic expense tracking",
      "Monthly reports",
      "Email support",
    ],
    cta: "Start Free Trial",
    ctaHref: "https://driveops.chatserve.in/signup",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "₹999",
    period: "/month",
    ideal: "Growing fleet owners",
    description: "Advanced analytics and automation for scaling rental operations.",
    features: [
      "Up to 50 vehicles",
      "All Starter features",
      "Revenue & profit analytics",
      "Automated report generation",
      "Maintenance scheduling",
      "Driver performance tracking",
      "Priority email & chat support",
      "Custom dashboard widgets",
    ],
    cta: "Start Free Trial",
    ctaHref: "https://driveops.chatserve.in/signup",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    ideal: "Large rental operators",
    description: "Tailored solutions for large fleets with dedicated support and integrations.",
    features: [
      "Unlimited vehicles",
      "All Professional features",
      "Custom integrations & API access",
      "Dedicated account manager",
      "SLA-backed uptime guarantee",
      "On-site onboarding & training",
      "White-label options",
      "Advanced role-based access",
    ],
    cta: "Contact Sales",
    ctaHref: "mailto:support@driveops.com",
    highlighted: false,
  },
]

const PricingSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="pricing" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 radial-glow opacity-40" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Pricing</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Start free. No credit card required. Upgrade as your fleet grows.
            All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-500 ${
                plan.highlighted
                  ? "glass glow-cyan border border-primary/40 scale-[1.03] shadow-[0_0_40px_rgba(0,194,255,0.15)]"
                  : "glass border border-border/40"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="gradient-accent text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Star size={10} /> {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-heading text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mb-4">{plan.ideal}</p>
                <div className="flex items-baseline gap-1">
                  <span className={`font-heading text-4xl font-bold ${plan.highlighted ? "gradient-text" : ""}`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3">{plan.description}</p>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check size={14} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                  plan.highlighted
                    ? "gradient-accent text-primary-foreground hover:opacity-90"
                    : "border border-border hover:border-primary/40 hover:bg-primary/5 text-foreground"
                }`}
              >
                {plan.cta} <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center text-xs text-muted-foreground mt-8"
        >
          All prices are in Indian Rupees (INR). GST applicable as per Indian tax laws.
          Enterprise pricing available for fleets with 50+ vehicles.
        </motion.p>
      </div>
    </section>
  )
}

export default PricingSection
