import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Check, ChevronDown } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"

export type SolutionCapability = {
  title: string
  description: string
  bullets: string[]
  icon?: LucideIcon
}

export type SolutionFaq = { q: string; a: string }

export type SolutionPageContent = {
  slug: string
  eyebrow: string
  title: string
  highlight?: string
  description: string
  image: string
  imageAlt: string
  capabilities: SolutionCapability[]
  workflow?: string[]
  faqs: SolutionFaq[]
  seoTitle: string
  seoDescription: string
  keywords: string
}

type Props = { page: SolutionPageContent }

export default function SolutionPageLayout({ page }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: `DriveOps ${page.eyebrow}`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Android",
        description: page.seoDescription,
        url: `https://driveops.info.chatserve.in/solutions/${page.slug}`,
        image: page.image.startsWith("http")
          ? page.image
          : `https://driveops.info.chatserve.in${page.image}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FBFBFA] text-foreground antialiased">
      <SEO
        title={page.seoTitle}
        description={page.seoDescription}
        keywords={page.keywords}
        canonicalUrl={`/solutions/${page.slug}`}
        ogImage={page.image}
        structuredData={structuredData}
      />
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-slate-200/60 bg-gradient-to-b from-white via-blue-50/20 to-transparent px-4 pb-14 pt-28 sm:px-6 lg:px-8">
          <div className="container relative z-10 mx-auto max-w-5xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
              {page.eyebrow}
            </div>
            <h1 className="font-heading mb-5 text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {page.title}
              {page.highlight && (
                <>
                  <br />
                  <span className="gradient-text">{page.highlight}</span>
                </>
              )}
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {page.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://driveops.chatserve.in/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Capabilities for this operation
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.capabilities.map((cap) => (
                <article
                  key={cap.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5"
                >
                  <h3 className="mb-1.5 text-base font-semibold text-slate-900">{cap.title}</h3>
                  <p className="mb-3 text-sm leading-relaxed text-slate-600">{cap.description}</p>
                  <ul className="space-y-1.5">
                    {cap.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-xs text-slate-600 sm:text-[13px]">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200/70 bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <img
              src={page.image}
              alt={page.imageAlt}
              className="mx-auto h-auto w-full max-w-full object-contain"
              loading="lazy"
              decoding="async"
              width={1200}
              height={675}
            />
            {page.workflow && (
              <ol className="mt-8 flex flex-wrap items-center justify-center gap-2">
                {page.workflow.map((step, i) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                      {step}
                    </span>
                    {i < page.workflow!.length - 1 && (
                      <span className="text-slate-300" aria-hidden="true">
                        →
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-heading mb-6 text-center text-2xl font-bold text-slate-900">
              Frequently asked questions
            </h2>
            <div className="space-y-2">
              {page.faqs.map((faq, idx) => {
                const open = openFaq === idx
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-semibold text-slate-900"
                      onClick={() => setOpenFaq(open ? null : idx)}
                      aria-expanded={open}
                    >
                      {faq.q}
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="border-t border-slate-100 px-4 py-3 text-sm leading-relaxed text-slate-600">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200/70 bg-slate-950 px-4 py-14 text-center text-white">
          <h2 className="font-heading mb-3 text-2xl font-bold">Ready to run your fleet from one place?</h2>
          <p className="mx-auto mb-6 max-w-xl text-sm text-slate-400">
            Start free or book a demo tailored to this operation type.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://driveops.chatserve.in/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold hover:bg-blue-500"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/product"
              className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-900"
            >
              Explore Product
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
