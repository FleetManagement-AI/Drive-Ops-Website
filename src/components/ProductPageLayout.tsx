import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import { PRODUCT_PAGES, type ProductPageContent } from "@/data/product-pages"
import { featureContent } from "@/data/seo-content"
import "@/product.css"

gsap.registerPlugin(ScrollTrigger)

type Props = { page: ProductPageContent }

export default function ProductPageLayout({ page }: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const related = page.relatedFeatureId ? featureContent[page.relatedFeatureId] : undefined
  const groupPages = PRODUCT_PAGES.filter((item) => item.group === page.group)
  const currentIndex = groupPages.findIndex((item) => item.slug === page.slug)
  const connectedPages = page.group === "rentals"
    ? PRODUCT_PAGES.filter((item) => ["vehicles", "compliance", "fuel"].includes(item.slug))
    : [1, 2, 3].map((offset) => groupPages[(currentIndex + offset) % groupPages.length]).filter((item) => item.slug !== page.slug)

  useEffect(() => setOpenFaq(0), [page.slug])

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace("#", "")
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      })
    }, 80)
    return () => window.clearTimeout(timer)
  }, [location.hash, page.slug])

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const context = gsap.context(() => {
      gsap.fromTo("[data-detail-hero]", { autoAlpha: 0, y: 28 }, {
        autoAlpha: 1, y: 0, duration: 0.85, ease: "power3.out", stagger: 0.1, clearProps: "all",
      })
      gsap.fromTo(".product-detail-visual", { autoAlpha: 0, x: 38, scale: 0.97 }, {
        autoAlpha: 1, x: 0, scale: 1, duration: 1, ease: "power3.out", clearProps: "all",
      })
      gsap.to(".product-detail-visual img", {
        y: -28, ease: "none", scrollTrigger: { trigger: ".product-detail-hero", start: "top top", end: "bottom top", scrub: 1 },
      })
      gsap.utils.toArray<HTMLElement>("[data-detail-reveal]").forEach((element) => {
        gsap.fromTo(element, { autoAlpha: 0, y: 34 }, {
          autoAlpha: 1, y: 0, duration: 0.72, ease: "power3.out", clearProps: "all",
          scrollTrigger: { trigger: element, start: "top 90%", once: true },
        })
      })
      gsap.fromTo(".product-journey-progress", { scaleX: 0 }, {
        scaleX: 1, ease: "none", scrollTrigger: { trigger: ".product-journey-steps", start: "top 78%", end: "bottom 55%", scrub: 1 },
      })
    }, root)
    return () => context.revert()
  }, [page.slug])

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
        image: page.image.startsWith("http") ? page.image : `https://driveops.info.chatserve.in${encodeURI(page.image)}`,
      },
      ...(related?.faqs?.length ? [{
        "@type": "FAQPage",
        mainEntity: related.faqs.map((faq) => ({
          "@type": "Question", name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }] : []),
    ],
  }

  return (
    <div ref={rootRef} className="product-site product-detail min-h-screen antialiased">
      <SEO title={page.seoTitle} description={page.seoDescription} canonicalUrl={`/product/${page.slug}`} ogImage={page.image} structuredData={structuredData} />
      <Navbar />
      <main>
        <section className="product-detail-hero" aria-labelledby="feature-title">
          <div className="product-container">
            <nav className="product-breadcrumbs" aria-label="Breadcrumb" data-detail-hero>
              <Link to="/product"><ArrowLeft size={14} aria-hidden="true" /> All features</Link><span>/</span><span>{page.eyebrow}</span><span>/</span><strong>{page.title}</strong>
            </nav>
            <div className="product-detail-hero-layout">
              <div className="product-detail-copy">
                <p className="product-eyebrow" data-detail-hero><span /> {page.eyebrow} / {page.title}</p>
                <h1 id="feature-title" data-detail-hero>{page.headline}</h1>
                <p className="product-detail-description" data-detail-hero>{page.description}</p>
                <div className="product-detail-actions" data-detail-hero>
                  <a href="https://driveops.chatserve.in/signup" className="product-button product-button-primary">Start free trial <ArrowRight size={17} aria-hidden="true" /></a>
                  <Link to="/contact" className="product-button product-button-light">Book a demo <ArrowUpRight size={17} aria-hidden="true" /></Link>
                </div>
                <a className="product-detail-scroll" href="#capabilities" data-detail-hero>Explore what it does <ArrowDown size={16} aria-hidden="true" /></a>
              </div>
              <figure className="product-detail-visual">
                <div className="product-detail-visual-top"><span className="product-detail-visual-dot" /> DRIVEOPS WORKSPACE <span>01 / {page.title.toUpperCase()}</span></div>
                <div className="product-detail-visual-image"><img src={encodeURI(page.image)} alt={page.imageAlt} width={1100} height={760} decoding="async" /></div>
              </figure>
            </div>
          </div>
        </section>

        <section id="capabilities" className="product-capabilities" aria-labelledby="capabilities-title">
          <div className="product-container">
            <div className="product-section-heading" data-detail-reveal><p className="product-eyebrow"><span /> WHAT GETS EASIER</p><h2 id="capabilities-title">The work behind <em>{page.title.toLowerCase()}.</em></h2><p>Purpose-built tools for the decisions and handoffs your team makes every day.</p></div>
            <div className="product-capability-grid">
              {page.capabilities.map((item, index) => <article key={item} className="product-capability-card" data-detail-reveal><div><span>{String(index + 1).padStart(2, "0")}</span><Check size={18} aria-hidden="true" /></div><h3>{item}</h3></article>)}
            </div>
          </div>
        </section>

        {page.workflow && page.workflow.length > 0 && <section className="product-journey product-detail-workflow" aria-labelledby="journey-title">
          <div className="product-container">
            <div className="product-journey-heading" data-detail-reveal><p className="product-eyebrow product-eyebrow-light"><span /> HOW IT FLOWS</p><h2 id="journey-title">A clearer path from <em>start to finish.</em></h2><p>Each step stays connected to the same DriveOps workspace, so the next person can move without starting over.</p></div>
            <div className="product-journey-steps">
              <div className="product-journey-track" aria-hidden="true"><span className="product-journey-progress" /></div>
              {page.workflow.map((step, index) => <div key={`${index}-${step}`} className="product-journey-step" data-detail-reveal><span>0{index + 1}</span><h3>{step}</h3><p>{index === 0 ? "Start with the right information." : index === page.workflow!.length - 1 ? "Keep the outcome visible to your team." : "Keep the next action connected."}</p></div>)}
            </div>
          </div>
        </section>}

        {page.anchors && page.anchors.length > 0 && <section className="product-rental-details" aria-labelledby="rental-details-title"><div className="product-container"><div className="product-section-heading" data-detail-reveal><p className="product-eyebrow"><span /> EVERY RENTAL STAGE</p><h2 id="rental-details-title">From keys out to <em>keys back.</em></h2></div><div className="product-rental-grid">{page.anchors.map((anchor, index) => <article key={anchor.id} id={anchor.id} className="product-rental-card" data-detail-reveal><span>{String(index + 1).padStart(2, "0")}</span><h3>{anchor.title}</h3><p>{anchor.description}</p></article>)}</div></div></section>}

        {related && <section className="product-benefits" aria-labelledby="benefits-title"><div className="product-container"><div className="product-section-heading" data-detail-reveal><p className="product-eyebrow"><span /> CONNECTED BY DESIGN</p><h2 id="benefits-title">Why it matters <em>on a busy day.</em></h2><p>{related.heroCopy}</p></div><div className="product-benefit-grid">{related.benefits.slice(0, 4).map((benefit, index) => <article key={benefit.title} className="product-benefit-card" data-detail-reveal><span>{String(index + 1).padStart(2, "0")}</span><h3>{benefit.title}</h3><p>{benefit.desc}</p></article>)}</div></div></section>}

        {related?.faqs && related.faqs.length > 0 && <section className="product-faq" aria-labelledby="feature-faq-title"><div className="product-container product-faq-layout"><div data-detail-reveal><p className="product-eyebrow"><span /> GOOD TO KNOW</p><h2 id="feature-faq-title">Your questions, <em>answered.</em></h2><p>More detail about how {page.title.toLowerCase()} works in DriveOps.</p></div><div className="product-faq-list">{related.faqs.map((faq, index) => { const open = openFaq === index; return <div key={faq.q} className="product-faq-item" data-detail-reveal><button type="button" onClick={() => setOpenFaq(open ? null : index)} aria-expanded={open} aria-controls={`faq-answer-${index}`}><span>{faq.q}</span><ChevronDown size={18} aria-hidden="true" className={open ? "is-open" : ""} /></button><AnimatePresence initial={false}>{open && <motion.div id={`faq-answer-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="product-faq-answer"><p>{faq.a}</p></motion.div>}</AnimatePresence></div> })}</div></div></section>}

        <section className="product-connected" aria-labelledby="connected-title"><div className="product-container"><div className="product-connected-heading" data-detail-reveal><div><p className="product-eyebrow"><span /> KEEP EXPLORING</p><h2 id="connected-title">See what connects <em>next.</em></h2></div><Link to="/product">Explore all features <ArrowRight size={17} aria-hidden="true" /></Link></div><div className="product-connected-grid">{connectedPages.map((item) => <Link to={`/product/${item.slug}`} key={item.slug} className="product-connected-card" data-detail-reveal><img src={encodeURI(item.image)} alt={item.imageAlt} loading="lazy" decoding="async" width={460} height={270} /><span>{item.eyebrow}</span><h3>{item.title}</h3><p>{item.headline}</p><ArrowUpRight size={18} aria-hidden="true" /></Link>)}</div></div></section>

        <section className="product-detail-cta product-cta-dark" aria-labelledby="detail-cta-title"><div className="product-container"><div><p className="product-eyebrow product-eyebrow-light"><span /> MOVE WITH DRIVEOPS</p><h2 id="detail-cta-title">Ready to put {page.title.toLowerCase()} to work?</h2><p>See how this feature fits your fleet, your people, and your day-to-day operations.</p></div><div><a href="https://driveops.chatserve.in/signup" className="product-button product-button-primary">Start free trial <ArrowRight size={17} aria-hidden="true" /></a><Link to="/contact" className="product-button product-button-ghost">Book a demo <ArrowUpRight size={17} aria-hidden="true" /></Link></div></div></section>
      </main>
      <Footer />
    </div>
  )
}
