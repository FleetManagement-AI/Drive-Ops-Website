import { useLayoutEffect, useRef, useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { ArrowDown, ArrowRight, ArrowUpRight, CarFront, KeyRound, Layers3, Route, type LucideIcon } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import ProductPageLayout from "@/components/ProductPageLayout"
import { PRODUCT_GROUPS, PRODUCT_HUB, PRODUCT_PAGES, getProductPage } from "@/data/product-pages"
import "@/product.css"

gsap.registerPlugin(ScrollTrigger)

const groupIcons: Record<(typeof PRODUCT_GROUPS)[number]["id"], LucideIcon> = {
  fleet: CarFront,
  operations: Route,
  rentals: KeyRound,
}

export function ProductHubPage() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [activeGroup, setActiveGroup] = useState("fleet")

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const context = gsap.context(() => {
      PRODUCT_GROUPS.forEach((group) => {
        ScrollTrigger.create({
          trigger: `#product-group-${group.id}`,
          start: "top 45%",
          end: "bottom 45%",
          onEnter: () => setActiveGroup(group.id),
          onEnterBack: () => setActiveGroup(group.id),
        })
      })
      if (reduceMotion) return
      gsap.fromTo("[data-product-hero]", { autoAlpha: 0, y: 30 }, {
        autoAlpha: 1, y: 0, duration: 0.85, ease: "power3.out", stagger: 0.11, clearProps: "all",
      })
      gsap.fromTo(".product-hub-visual img", { autoAlpha: 0, x: 45, scale: 0.96 }, {
        autoAlpha: 1, x: 0, scale: 1, duration: 1.05, ease: "power3.out", clearProps: "all",
      })
      gsap.to(".product-hub-visual img", {
        y: -38, ease: "none", scrollTrigger: { trigger: ".product-hub-hero", start: "top top", end: "bottom top", scrub: 1 },
      })
      gsap.utils.toArray<HTMLElement>(".product-feature-card, .product-group-intro, .product-catalog-outro").forEach((element) => {
        gsap.fromTo(element, { autoAlpha: 0, y: 34 }, {
          autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out", clearProps: "all",
          scrollTrigger: { trigger: element, start: "top 91%", once: true },
        })
      })
    }, root)
    return () => context.revert()
  }, [])

  return (
    <div ref={rootRef} className="product-site min-h-screen antialiased">
      <SEO
        title="All DriveOps Features | Fleet Operations Platform"
        description={PRODUCT_HUB.description}
        keywords="DriveOps features, fleet management, trip dispatch, live fleet tracking, Driver App, fleet care, self-drive rentals"
        canonicalUrl="/product"
        ogImage="/images/features/DriveOps Fleet Management Showcase.webp"
      />
      <Navbar />
      <main>
        <section className="product-hub-hero product-hero-dark" aria-labelledby="product-hub-title">
          <div className="product-hub-grid" aria-hidden="true" />
          <div className="product-container product-hub-hero-inner">
            <div className="product-hub-copy">
              <p className="product-eyebrow product-eyebrow-light" data-product-hero><span /> THE DRIVEOPS PLATFORM</p>
              <h1 id="product-hub-title" data-product-hero>Everything your fleet needs to move.<br /><em>All in one place.</em></h1>
              <p className="product-hub-description" data-product-hero>{PRODUCT_HUB.description}</p>
              <div className="product-hub-actions" data-product-hero>
                <a href="#feature-catalog" className="product-button product-button-primary">Explore all {PRODUCT_PAGES.length} features <ArrowRight size={18} aria-hidden="true" /></a>
                <Link to="/#how-it-works" className="product-button product-button-ghost">See how it works <ArrowUpRight size={17} aria-hidden="true" /></Link>
              </div>
              <div className="product-hub-pillar-list" data-product-hero>
                <span>Plan & dispatch</span><span>People & vehicles</span><span>Live visibility</span><span>Fleet care</span><span>Rentals</span>
              </div>
            </div>
            <div className="product-hub-visual" aria-label="DriveOps product preview">
              <div className="product-hub-visual-glow" aria-hidden="true" />
              <img src="/images/features/DriveOps Fleet Management Showcase.webp" alt="DriveOps operator dashboard and Driver App connecting trips, vehicles, drivers, live fleet and care" width={1800} height={1125} decoding="async" />
              <div className="product-hub-visual-caption"><Layers3 size={16} aria-hidden="true" /> One connected workspace</div>
            </div>
          </div>
          <a href="#feature-catalog" className="product-hub-scroll" aria-label="Scroll to the feature catalog">Explore the platform <ArrowDown size={16} aria-hidden="true" /></a>
        </section>

        <section id="feature-catalog" className="product-catalog" aria-labelledby="product-catalog-title">
          <div className="product-container">
            <div className="product-catalog-heading">
              <div>
                <p className="product-eyebrow"><span /> BUILT AROUND YOUR DAY</p>
                <h2 id="product-catalog-title">Find the tools for <em>your next move.</em></h2>
              </div>
              <p>Explore every part of DriveOps. Each feature has its own page with the details, workflow and product view.</p>
            </div>

            <div className="product-catalog-layout">
              <nav className="product-catalog-nav" aria-label="Feature categories">
                <span className="product-catalog-nav-label">Explore by area</span>
                {PRODUCT_GROUPS.map((group, index) => {
                  const Icon = groupIcons[group.id]
                  return <a key={group.id} href={`#product-group-${group.id}`} className={activeGroup === group.id ? "is-active" : ""} aria-current={activeGroup === group.id ? "location" : undefined}>
                    <span className="product-catalog-nav-index">0{index + 1}</span><Icon size={17} aria-hidden="true" /><span>{group.title}</span><ArrowRight size={14} aria-hidden="true" />
                  </a>
                })}
                <div className="product-catalog-nav-foot"><strong>{PRODUCT_PAGES.length} features</strong><span>One connected operation</span></div>
              </nav>

              <div className="product-catalog-groups">
                {PRODUCT_GROUPS.map((group, groupIndex) => {
                  const pages = PRODUCT_PAGES.filter((page) => page.group === group.id)
                  const Icon = groupIcons[group.id]
                  return <section key={group.id} id={`product-group-${group.id}`} className={`product-group product-group-${group.id}`} aria-labelledby={`product-group-title-${group.id}`}>
                    <div className="product-group-intro">
                      <div className="product-group-symbol"><Icon size={22} aria-hidden="true" /></div>
                      <div><p>0{groupIndex + 1} / {String(pages.length).padStart(2, "0")} FEATURES</p><h3 id={`product-group-title-${group.id}`}>{group.title}</h3><span>{group.description}</span></div>
                    </div>
                    <div className="product-feature-grid">
                      {pages.map((page, index) => <Link key={page.slug} to={`/product/${page.slug}`} className={`product-feature-card ${group.id === "rentals" ? "product-feature-card-wide" : ""}`}>
                        <div className="product-feature-image"><img src={encodeURI(page.image)} alt={page.imageAlt} loading="lazy" decoding="async" width={720} height={460} /></div>
                        <div className="product-feature-body"><span className="product-feature-index">{String(index + 1).padStart(2, "0")} / {group.title}</span><div className="product-feature-title-row"><h4>{page.title}</h4><span className="product-feature-arrow"><ArrowUpRight size={18} aria-hidden="true" /></span></div><p>{page.description}</p><span className="product-feature-link">Explore feature <ArrowRight size={15} aria-hidden="true" /></span></div>
                      </Link>)}
                    </div>
                  </section>
                })}
              </div>
            </div>

            <div className="product-catalog-outro">
              <div><p className="product-eyebrow"><span /> READY WHEN YOU ARE</p><h2>See how the pieces come together.</h2><p>Explore the daily DriveOps flow or talk through your own fleet with our team.</p></div>
              <div><Link to="/#how-it-works" className="product-button product-button-primary">How DriveOps works <ArrowRight size={17} aria-hidden="true" /></Link><Link to="/contact" className="product-button product-button-light">Book a demo <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  if (!slug) return <Navigate to="/product" replace />
  const page = getProductPage(slug)
  if (!page) return <Navigate to="/product" replace />
  return <ProductPageLayout page={page} />
}
