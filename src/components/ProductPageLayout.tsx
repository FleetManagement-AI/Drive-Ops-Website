import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { ArrowRight, Check } from "lucide-react"
import FAQList from "@/components/FAQList"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import type { ProductPageContent } from "@/data/product-pages"
import { featureContent } from "@/data/seo-content"

type Props = {
  page: ProductPageContent
}

export default function ProductPageLayout({ page }: Props) {
  const location = useLocation()
  const related = page.relatedFeatureId
    ? featureContent[page.relatedFeatureId]
    : undefined

  const faqs = page.faqs || related?.faqs || []

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "")
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 80)
      return () => clearTimeout(timer)
    }
  }, [location.hash, page.slug])

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: `DriveOps ${page.title}`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Android",
        description: page.seoDescription,
        url: `https://driveops.info.chatserve.in/product/${page.slug}`,
        image: page.image.startsWith("http")
          ? page.image
          : `https://driveops.info.chatserve.in${page.image}`,
      },
      ...(faqs.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            },
          ]
        : []),
    ],
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FBFBFA] text-foreground antialiased">
      <SEO
        title={page.seoTitle}
        description={page.seoDescription}
        canonicalUrl={`/product/${page.slug}`}
        ogImage={page.image}
        structuredData={structuredData}
      />
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-slate-200/60 bg-gradient-to-b from-white via-blue-50/20 to-transparent px-4 pb-12 pt-28 sm:px-6 sm:pb-14 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
              {page.eyebrow}
            </p>
            <h1 className="font-heading mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {page.title}
            </h1>
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {page.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://driveops.chatserve.in/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-600/25 hover:bg-blue-500"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact/"
                className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-600"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2">
            <img
              src={page.image}
              alt={page.imageAlt}
              className="mx-auto h-auto w-full max-w-full object-contain"
              loading="lazy"
              decoding="async"
              width={960}
              height={640}
            />
            <div>
              <h2 className="font-heading mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
                Key capabilities
              </h2>
              <ul className="space-y-3">
                {page.capabilities.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {page.workflow && page.workflow.length > 0 && (
          <section className="border-y border-slate-200/70 bg-white px-4 py-12 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-5xl">
              <h2 className="font-heading mb-6 text-center text-xl font-bold text-slate-900">
                Workflow
              </h2>
              <ol className="flex flex-wrap items-center justify-center gap-2">
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
            </div>
          </section>
        )}

        {page.anchors && page.anchors.length > 0 && (
          <section className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="container mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.anchors.map((anchor) => (
                <div
                  key={anchor.id}
                  id={anchor.id}
                  className="scroll-mt-28 rounded-xl border border-slate-200 bg-white p-5"
                >
                  <h3 className="mb-1.5 text-sm font-semibold text-slate-900">{anchor.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {anchor.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {related && !page.faqs && (
          <section className="border-t border-slate-200/70 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="container mx-auto max-w-5xl">
              <h2 className="font-heading mb-3 text-center text-xl font-bold text-slate-900 sm:text-2xl">
                How {page.title.toLowerCase()} works in DriveOps
              </h2>
              <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
                {related.heroCopy}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {related.benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="rounded-xl border border-slate-200/80 bg-[#FBFBFA] p-5"
                  >
                    <div className="mb-2 flex items-start gap-2.5">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        <Check className="h-3 w-3" />
                      </span>
                      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="pl-7 text-sm leading-relaxed text-slate-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {page.relatedFeatureId && (
          <section className="px-4 py-8 text-center">
            <Link className="font-semibold text-blue-700 underline" to={`/features/${page.relatedFeatureId}/`}>
              Read the practical {page.title.toLowerCase()} guide
            </Link>
          </section>
        )}
        {faqs.length > 0 && (
          <section className="px-4 py-12 sm:px-6">
            <div className="container mx-auto max-w-3xl">
              <h2 className="mb-6 text-center text-2xl font-bold">Frequently asked questions</h2>
              <FAQList faqs={faqs} />
            </div>
          </section>
        )}
        <section className="border-t border-slate-200 px-4 py-8">
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-5 text-sm font-semibold text-blue-700">
            <Link to="/product/compliance/">Compliance management</Link>
            <Link to="/product/fuel/">Fuel logs</Link>
            <Link to="/product/reviews/">Review management</Link>
            <Link to="/product/maintenance/">Maintenance</Link>
            <Link to="/pricing/">Compare plans</Link>
          </div>
        </section>

        <section className="border-t border-slate-200/70 bg-slate-950 px-4 py-14 text-center text-white sm:px-6">
          <h2 className="font-heading mb-3 text-2xl font-bold text-white">Ready to try DriveOps?</h2>
          <p className="mx-auto mb-6 max-w-xl text-sm text-slate-400">
            Start a free trial or book a demo with the sales team.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://driveops.chatserve.in/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/product/"
              className="inline-flex items-center rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-900"
            >
              Back to Product
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
