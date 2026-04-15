import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  company: string
  category: string
  rating: number
  text: string
  initials: string
  color: string
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Owner",
    company: "RajCabs Rentals, Mumbai",
    category: "Rental Car Business",
    rating: 5,
    text: "DriveOps completely transformed how we run our 35-vehicle rental fleet. We eliminated 3 Excel sheets and now get daily revenue reports automatically. Booking disputes have dropped to near zero.",
    initials: "RK",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Priya Sharma",
    role: "Operations Head",
    company: "Sunshine Tours & Travels, Bangalore",
    category: "Travel Agency",
    rating: 5,
    text: "As a travel agency managing 20+ vehicles for client trips, DriveOps was a game changer. Live tracking keeps us accountable to clients and driver performance scores improved by 30% in 2 months.",
    initials: "PS",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Arun Nair",
    role: "Fleet Manager",
    company: "QuickRide Taxi Services, Kochi",
    category: "Taxi Operator",
    rating: 5,
    text: "We operate 80+ taxis and managing driver shifts was a nightmare before DriveOps. Now it takes 10 minutes instead of 2 hours. The earnings dashboard alone paid for the subscription in the first week.",
    initials: "AN",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Meera Patel",
    role: "Director",
    company: "MeeraWheels Self-Drive, Ahmedabad",
    category: "Self-Drive Rental",
    rating: 5,
    text: "Our self-drive rental business needed detailed trip logs and damage reports. DriveOps handles all of it seamlessly — document storage, GPS history, and expense tracking all in one platform.",
    initials: "MP",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Suresh Yadav",
    role: "CEO",
    company: "TravelEase Cab Aggregator, Delhi",
    category: "Cab Aggregator",
    rating: 5,
    text: "Scaling from 15 to 60 vehicles in 6 months would have been impossible without DriveOps. Adding new vehicles and drivers takes minutes. The support team is incredibly responsive too.",
    initials: "SY",
    color: "from-indigo-500 to-blue-500",
  },
  {
    name: "Kavitha Reddy",
    role: "Owner",
    company: "RedWing Outstation Services, Hyderabad",
    category: "Outstation Travel",
    rating: 5,
    text: "Our outstation trips require precise scheduling and fuel tracking. DriveOps's maintenance module caught a recurring issue with one of our vehicles before it became a costly breakdown. Brilliant product.",
    initials: "KR",
    color: "from-teal-500 to-cyan-500",
  },
]

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
    ))}
  </div>
)

const TestimonialsSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="testimonials" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 radial-glow opacity-20" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Trusted by Rental Business{" "}
            <span className="gradient-text">Owners Across India</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From small taxi operators to large travel agencies — here's what real fleet owners say about DriveOps.
          </p>
        </motion.div>

        {/* 
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="break-inside-avoid glass rounded-2xl p-6 border border-border/40 hover:glow-border transition-all duration-500"
            >
              <Quote size={20} className="text-primary/30 mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/30">
                <StarRating count={t.rating} />
                <span className="text-xs text-primary/60 font-medium">{t.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
        */}
      </div>
    </section>
  )
}

export default TestimonialsSection
