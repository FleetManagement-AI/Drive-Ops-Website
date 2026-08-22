import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown, Mail } from "lucide-react"

const faqs = [
  {
    q: "What is DriveOps?",
    a: "DriveOps is an all-in-one cloud fleet management software platform built specifically for Indian transport businesses. It unites vehicle registries, trip dispatching, driver rosters, maintenance logs, fuel tracking, expense accounting, and automated WhatsApp customer reviews in a single dashboard.",
  },
  {
    q: "What is fleet management software?",
    a: "Fleet management software is a digital operating system that automates the day-to-day operations of commercial vehicles. It replaces manual paper logbooks and phone coordination with automated dispatching, driver scheduling, maintenance alerts, expense control, and profitability analytics.",
  },
  {
    q: "Who can use DriveOps?",
    a: "DriveOps is built for passenger transport operators (taxi fleets, outstation cabs, tour & travel companies), goods transport businesses (delivery trucks, logistics providers), and self-drive vehicle rental companies across India.",
  },
  {
    q: "Can DriveOps manage taxi fleets?",
    a: "Yes. DriveOps offers dedicated passenger transport tools including digital dispatch queues, trip sheets, driver shift assignments, custom package pricing (e.g. 8hr/80km rentals), and automated WhatsApp Google review collection after each trip.",
  },
  {
    q: "Can DriveOps manage goods transport fleets?",
    a: "Yes. For goods and cargo transport, DriveOps tracks multi-stop delivery routes, vehicle load assignments, digital proof of delivery (POD), driver duty records, and trip-by-trip fuel and operational profitability.",
  },
  {
    q: "Can DriveOps manage vehicle rentals?",
    a: "Yes. DriveOps provides complete self-drive and car rental capabilities including vehicle availability calendars, customer ID verification, digital rental contracts, advance payment tracking, and fleet utilization reports.",
  },
  {
    q: "Does DriveOps provide vehicle tracking?",
    a: "Yes. DriveOps provides live operational tracking and a fleet map directly through connected driver mobile workflows and GPS telemetry, enabling dispatchers to locate active vehicles and assign bookings without proprietary hardware locks.",
  },
  {
    q: "Can DriveOps manage vehicle maintenance and expenses?",
    a: "Yes. DriveOps features proactive maintenance scheduling (alerts for service intervals, insurance renewals, fitness certificates, and permits) alongside detailed fuel logs and expense tracking to calculate the exact cost per kilometer for every vehicle.",
  }
]

const FAQItem = ({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string
  a: string
  isOpen: boolean
  onToggle: () => void
}) => {
  return (
    <div
      className="border border-slate-200/90 rounded-xl bg-white overflow-hidden shadow-sm hover:border-blue-300 transition-colors"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={onToggle}
        className="w-full p-4 sm:p-5 lg:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset min-h-[56px]"
        aria-expanded={isOpen}
      >
        <span itemProp="name" className="font-heading font-semibold text-sm sm:text-base lg:text-lg text-slate-900 leading-snug">
          {q}
        </span>
        <div
          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-blue-50 text-blue-600" : ""
            }`}
          aria-hidden="true"
        >
          <ChevronDown size={16} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text" className="px-4 sm:px-5 lg:px-6 pb-5 sm:pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3 sm:pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // Generate JSON-LD Schema for AEO/SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-slate-50/60 border-t border-slate-200/80 relative" ref={ref}>
      {/* Injecting Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10" itemScope itemType="https://schema.org/FAQPage">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
            Got Questions?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600">
            Learn more about how DriveOps powers modern taxi, transport, and rental fleet businesses.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-12">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
            >
              <FAQItem
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            </motion.div>
          ))}
        </div>

        {/* Inline Contact Prompt */}
        <div className="max-w-xl mx-auto text-center p-5 sm:p-6 bg-white border border-slate-200/80 rounded-2xl shadow-sm">
          <p className="text-sm text-slate-600 mb-3">Have a specific question about your fleet requirements?</p>
          <a
            href="mailto:driveopsfleet@gmail.com?subject=DriveOps Fleet Inquiry"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            aria-label="Email support at driveopsfleet@gmail.com"
          >
            <Mail size={16} aria-hidden="true" />
            <span>Contact Support & Sales →</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
