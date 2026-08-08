import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown, Mail } from "lucide-react"

const faqs = [
  {
    q: "What is DriveOps and who is it for?",
    a: "DriveOps is a comprehensive fleet operations and business growth platform. It is specifically built for taxi operators, fleet owners, travel companies, and cab aggregators to manage dispatch, vehicles, drivers, and customer reviews from a single intelligent dashboard.",
  },
  {
    q: "What is fleet operations software?",
    a: "Fleet operations software is a digital platform that automates the day-to-day management of commercial vehicles. It handles trip dispatching, driver scheduling, real-time GPS tracking, fuel monitoring, and maintenance logging, replacing manual spreadsheets with automated workflows.",
  },
  {
    q: "How does taxi dispatch software work in DriveOps?",
    a: "Our smart taxi dispatch software provides a centralized digital queue. When a new booking arrives, it automatically identifies the closest available vehicle and assigns the trip to the driver based on shift schedules and priority rules, eliminating manual phone calls.",
  },
  {
    q: "How does automated WhatsApp Review Management work?",
    a: "After every completed trip, DriveOps automatically sends a personalized WhatsApp message to the customer thanking them for the ride and requesting a review. This seamless automation significantly increases the collection of 5-star Google reviews and builds your online reputation.",
  },
  {
    q: "What features should a modern fleet operations platform include?",
    a: "A complete platform should include smart dispatching, live GPS vehicle tracking, driver duty rosters, automated fuel and maintenance tracking, compliance document vaults, and customer relationship management (like automated review collection).",
  },
  {
    q: "Why choose DriveOps over other fleet management systems?",
    a: "Unlike generic logistics software, DriveOps is purpose-built for passenger transport and taxi businesses. It combines core operational tools (dispatch, tracking) with business growth tools (WhatsApp review automation) into one enterprise-grade, easy-to-use platform.",
  },
  {
    q: "Does DriveOps require hardware GPS installation?",
    a: "No. DriveOps provides a comprehensive Fleet Map for operational management and dispatching out-of-the-box using driver mobile tracking, meaning you can start managing your fleet immediately without expensive hardware lock-in.",
  },
  {
    q: "Can I manage package pricing and custom rates?",
    a: "Absolutely. DriveOps allows you to configure reusable package templates (e.g., 8 hrs / 80 km city rental, outstation round-trips), set included kilometers, and automatically calculate trip billing.",
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
            Learn more about how DriveOps powers modern taxi and fleet businesses.
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
