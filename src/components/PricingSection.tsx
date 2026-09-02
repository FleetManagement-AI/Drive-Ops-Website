import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Check, ArrowRight, Star, Loader2 } from "lucide-react"

interface ApiPlanLimit {
  maxVehicles: number
  maxDrivers: number
  maxUsers: number
}

interface ApiPlan {
  id: string
  name: string
  price: string
  billingCycle: string
  limits: ApiPlanLimit
}

interface ApiResponse {
  code: number
  message: string
  data: ApiPlan[]
}

const FALLBACK_API_DATA: ApiPlan[] = [
  {
    id: "f1a65a31-f78b-40ea-af10-63b649f33b50",
    name: "Free",
    price: "0.00",
    billingCycle: "monthly",
    limits: { maxVehicles: 2, maxDrivers: 2, maxUsers: 2 },
  },
  {
    id: "08d247fb-2a6e-43f8-b86a-a4af3a2f1a26",
    name: "Basic",
    price: "999.00",
    billingCycle: "monthly",
    limits: { maxVehicles: 10, maxDrivers: 10, maxUsers: 2 },
  },
  {
    id: "652873c4-aed5-47d8-b352-f395649b73e1",
    name: "Professional",
    price: "2499.00",
    billingCycle: "monthly",
    limits: { maxVehicles: 30, maxDrivers: 30, maxUsers: 5 },
  },
  {
    id: "b2f95d1b-58b9-4b4f-a1b7-f387f16ce94d",
    name: "Enterprise",
    price: "5999.00",
    billingCycle: "monthly",
    limits: { maxVehicles: 1000, maxDrivers: 1000, maxUsers: 50 },
  },
]

const formatPriceDisplay = (priceStr: string) => {
  const numericPrice = parseFloat(priceStr)
  if (numericPrice === 0) return "₹0"
  return `₹${numericPrice.toLocaleString("en-IN")}`
}

const getPlanDescription = (name: string) => {
  switch (name.toLowerCase()) {
    case "free":
      return "Essential trip and vehicle management for small passenger fleets."
    case "basic":
      return "Complete dispatch queue and driver mobile app for growing fleets."
    case "professional":
      return "Advanced dispatch, repeat package templates and OCR document intelligence."
    case "enterprise":
      return "High-capacity transport operations for multi-depot fleet operators."
    default:
      return "Tailored transport operations plan."
  }
}

const getPlanFeatures = (plan: ApiPlan) => {
  const { maxVehicles, maxDrivers, maxUsers } = plan.limits
  const vehicleText = maxVehicles >= 1000 ? "Unlimited Vehicles" : `Up to ${maxVehicles} Vehicles`
  const driverText = maxDrivers >= 1000 ? "Unlimited Drivers" : `Up to ${maxDrivers} Drivers`
  const userText = `Up to ${maxUsers} Dispatch Users`

  const commonFeatures = [vehicleText, driverText, userText, "Vehicle & Driver Registry", "Trip Lifecycle Management"]

  if (plan.name.toLowerCase() === "free") {
    return [...commonFeatures, "Driver Mobile App Access", "Standard Email Support"]
  }
  if (plan.name.toLowerCase() === "basic") {
    return [...commonFeatures, "Dispatch Queue Workspace", "Driver Mobile App & Offline Mode", "Document Expiry Alerts"]
  }
  if (plan.name.toLowerCase() === "professional") {
    return [...commonFeatures, "Dispatch Queue Workspace", "Driver Mobile App & Offline Mode", "OCR Document Vault & Alerts", "Repeat Package Templates", "Priority Support"]
  }
  return [...commonFeatures, "Dispatch Queue Workspace", "Driver Mobile App & Offline Mode", "OCR Document Vault & Alerts", "Multi-Depot / Location Management", "Dedicated Onboarding Support"]
}

const PricingSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [plans, setPlans] = useState<ApiPlan[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    const fetchPlans = async () => {
      try {
        const res = await fetch("https://api.driveops.chatserve.in/plans")
        if (!res.ok) throw new Error(`HTTP error ${res.status}`)
        const json: ApiResponse = await res.json()
        if (isMounted && json.data && Array.isArray(json.data) && json.data.length > 0) {
          setPlans(json.data)
        } else if (isMounted) {
          setPlans(FALLBACK_API_DATA)
        }
      } catch {
        if (isMounted) setPlans(FALLBACK_API_DATA)
      } finally {
        if (isMounted) setLoading(false)
      }
    }
    fetchPlans()
    return () => { isMounted = false }
  }, [])

  return (
    <section id="pricing" className="py-20 sm:py-24 bg-slate-50/70 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
            Transparent Pricing
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4 sm:mb-5">
            Simple Plans Built for Fleet Growth
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Start with a 14-day free trial. No credit card required. Upgrade or downgrade anytime as your fleet evolves.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 text-slate-500">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600 mb-3" />
            <p className="text-sm font-medium">Fetching pricing plans...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {plans.map((plan, i) => {
              const isPopular = plan.name.toLowerCase() === "professional"
              const features = getPlanFeatures(plan)
              const priceDisplay = formatPriceDisplay(plan.price)

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`relative rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 ${
                    isPopular
                      ? "bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10 z-10"
                      : "bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="gradient-accent text-white text-[11px] font-bold px-3.5 py-1 rounded-full flex items-center gap-1 shadow-md shadow-blue-500/20 whitespace-nowrap">
                        <Star size={11} fill="white" /> Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="mb-5 sm:mb-6">
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                      <p className="text-xs text-slate-500 font-medium mb-3 sm:mb-4">{getPlanDescription(plan.name)}</p>
                      <div className="flex items-baseline gap-1">
                        <span className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold ${isPopular ? "text-blue-600" : "text-slate-900"}`}>
                          {priceDisplay}
                        </span>
                        <span className="text-slate-500 text-xs sm:text-sm font-medium">/{plan.billingCycle}</span>
                      </div>
                    </div>

                    <div className="pt-4 sm:pt-5 border-t border-slate-100 mb-6 sm:mb-8">
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">Included Limits & Features</span>
                      <ul className="space-y-2">
                        {features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <Check size={14} className="text-blue-600 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href="https://driveops.chatserve.in/signup"
                    className={`w-full py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all min-h-[44px] ${
                      isPopular
                        ? "gradient-accent text-white shadow-md shadow-blue-500/25 hover:opacity-95 active:opacity-90"
                        : "bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800"
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight size={14} />
                  </a>
                </motion.div>
              )
            })}
          </div>
        )}

        <p className="text-center text-xs text-slate-500 mt-8 sm:mt-10 px-4">
          All plans include a 14-day free trial. Prices listed in Indian Rupees (INR). GST applicable.
        </p>
      </div>
    </section>
  )
}

export default PricingSection
