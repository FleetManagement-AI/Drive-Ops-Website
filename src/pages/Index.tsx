import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import { LandingCapabilities, LandingWorkflow } from "@/components/LandingSections"
import LandingFeatureAtlas from "@/components/LandingFeatureAtlas"
import SolutionsTeaserSection from "@/components/SolutionsTeaserSection"
import ProductShowcaseSection from "@/components/ProductShowcaseSection"
import FleetCareTeaserSection from "@/components/FleetCareTeaserSection"
import PricingTeaserSection from "@/components/PricingTeaserSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import "@/landing.css"

const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://driveops.info.chatserve.in/#website",
      url: "https://driveops.info.chatserve.in/",
      name: "DriveOps",
      description:
        "DriveOps connects trip planning, dispatch, vehicles, driver duty, the Driver App, live fleet, package templates, fleet care, customer communication, and self-drive rentals.",
      inLanguage: "en-IN",
    },
    {
      "@type": "Organization",
      "@id": "https://driveops.info.chatserve.in/#organization",
      name: "DriveOps",
      url: "https://driveops.info.chatserve.in/",
      logo: {
        "@type": "ImageObject",
        url: "https://driveops.info.chatserve.in/logo/driveops-logo-blue-edited.png",
        width: 200,
        height: 60,
      },
      description:
        "DriveOps helps fleet operators manage trips, drivers, attendance, vehicles, dispatch, live fleet, rentals, and fleet care from one platform.",
      foundingLocation: {
        "@type": "Place",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-98461-99883",
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["English", "Malayalam", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-98478-51049",
          contactType: "customer support",
          areaServed: "IN",
          availableLanguage: ["English", "Malayalam", "Hindi"],
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://driveops.info.chatserve.in/#software",
      name: "DriveOps",
      url: "https://driveops.info.chatserve.in/",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Fleet Operations Software",
      operatingSystem: "Web, Android",
      inLanguage: "en-IN",
      description:
        "Fleet operations platform for trips, dispatch, driver duty, Driver App execution, live fleet visibility, WhatsApp communication, package templates, fuel, maintenance, compliance, recurring trips, and self-drive rentals.",
      featureList: [
        "Connected trip workflow",
        "Driver attendance and duty schedules",
        "Reusable package templates",
        "Fleet care — fuel, maintenance, and compliance documents",
        "WhatsApp and Driver App communication",
        "Driver App for trip execution",
        "Recurring trip schedules",
        "Self-drive rental operations",
        "Live fleet tracking",
        "Multi-segment fleet operations",
      ],
    },
  ],
}

gsap.registerPlugin(ScrollTrigger)

const Index = () => {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!rootRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(element,
          { autoAlpha: 0, y: 42 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", clearProps: "all", scrollTrigger: { trigger: element, start: "top 88%", once: true } },
        )
      })
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((container) => {
        gsap.fromTo(Array.from(container.children),
          { autoAlpha: 0, y: 56 },
          { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.13, ease: "power3.out", clearProps: "all", scrollTrigger: { trigger: container, start: "top 88%", once: true } },
        )
      })
      gsap.utils.toArray<HTMLElement>("#solutions article, #pricing article, #fleet-care li").forEach((element) => {
        gsap.fromTo(element,
          { autoAlpha: 0, y: 36 },
          { autoAlpha: 1, y: 0, duration: 0.75, ease: "power3.out", clearProps: "all", scrollTrigger: { trigger: element, start: "top 92%", once: true } },
        )
      })
    }, rootRef)
    return () => context.revert()
  }, [])

  return <div ref={rootRef} className="premium-home min-h-screen bg-background text-foreground antialiased selection:bg-blue-100 selection:text-blue-900">
    <SEO
      title="DriveOps | Manage & Operate Your Fleet from One Platform"
      description="Plan trips, assign drivers and vehicles, manage duty and package templates, run the Driver App, track the live fleet, and keep fuel, maintenance, compliance and rentals in one DriveOps workspace."
      keywords="fleet operations software, trip management software, fleet dispatch software, driver attendance software, transport package templates, driver mobile app, live fleet tracking, WhatsApp fleet communication, self-drive rental software, fuel log software, fleet compliance software India"
      canonicalUrl="/"
      ogImage="/images/hero/DriveOps Live Fleet Management Dashboard.webp"
      structuredData={homepageStructuredData}
    />
    <Navbar />
    <main>
      <HeroSection />
      <LandingCapabilities />
      <LandingFeatureAtlas />
      <LandingWorkflow />
      <FleetCareTeaserSection />
      <ProductShowcaseSection />
      <SolutionsTeaserSection />
      <PricingTeaserSection />
      <CTASection />
    </main>
    <Footer />
  </div>
}

export default Index
