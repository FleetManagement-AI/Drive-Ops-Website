import React from "react"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ProblemSection from "@/components/ProblemSection"
import TripProductLoop from "@/components/TripProductLoop"
import DispatchSection from "@/components/DispatchSection"
import DriverAppSection from "@/components/DriverAppSection"
import CommandCenterSection from "@/components/CommandCenterSection"
import ComplianceSection from "@/components/ComplianceSection"
import FleetResourcesSection from "@/components/FleetResourcesSection"
import PackagesSection from "@/components/PackagesSection"
import MultiLocationSection from "@/components/MultiLocationSection"
import ComparisonSection from "@/components/ComparisonSection"
import WhoItsForSection from "@/components/WhoItsForSection"
import ProductTourSection from "@/components/ProductTourSection"
import WhyDriveOpsSection from "@/components/WhyDriveOpsSection"
import TrustSection from "@/components/TrustSection"
import PricingSection from "@/components/PricingSection"
import FAQSection from "@/components/FAQSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"

const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://driveops.info.chatserve.in/#website",
      "url": "https://driveops.info.chatserve.in/",
      "name": "DriveOps",
      "description": "DriveOps is a trip-first transport operations platform for passenger fleets. Plan trips, dispatch vehicles and drivers, execute work on mobile, and automate document compliance.",
      "inLanguage": "en-IN"
    },
    {
      "@type": "Organization",
      "@id": "https://driveops.info.chatserve.in/#organization",
      "name": "DriveOps",
      "url": "https://driveops.info.chatserve.in/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://driveops.info.chatserve.in/logo/driveops-logo-blue-edited.png",
        "width": 200,
        "height": 60
      },
      "description": "DriveOps is the trip-first transport operations platform built for taxi operators, airport transfers, corporate transport, and passenger fleet owners.",
      "foundingLocation": {
        "@type": "Place",
        "addressCountry": "IN"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-98461-99883",
          "contactType": "sales",
          "areaServed": "IN",
          "availableLanguage": ["English", "Malayalam", "Hindi"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+91-98478-51049",
          "contactType": "customer support",
          "areaServed": "IN",
          "availableLanguage": ["English", "Malayalam", "Hindi"]
        }
      ]
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://driveops.info.chatserve.in/#software",
      "name": "DriveOps",
      "url": "https://driveops.info.chatserve.in/",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Transport Operations Software",
      "operatingSystem": "Web, iOS, Android",
      "inLanguage": "en-IN",
      "description": "Trip-first transport operations platform for passenger fleets. Plan trips, assign vehicles and drivers, execute work in the field, and stay compliant."
    }
  ]
}

const Index = () => (
  <div className="min-h-screen bg-background text-foreground antialiased selection:bg-blue-100 selection:text-blue-900">
    <SEO 
      title="DriveOps | Trip-First Transport Operations Platform for Passenger Fleets"
      description="Plan trips, assign vehicles and drivers, execute work in the field, and stay on top of compliance. DriveOps connects the office and driver for passenger transport fleets."
      keywords="transport operations software, fleet dispatch software, trip management software, driver mobile app, fleet compliance software, vehicle document management, taxi fleet software, airport transfer software, corporate transport software"
      canonicalUrl="/"
      structuredData={homepageStructuredData}
    />
    <Navbar />
    <main>
      {/* 1. HERO — Run every trip without the WhatsApp chaos */}
      <HeroSection />

      {/* 2. THE PAIN — WhatsApp, Excel, and phone tag bottlenecks */}
      <ProblemSection />

      {/* 3. CORE PRODUCT LOOP — From trip request to trip completion (Plan -> Dispatch -> Execute -> Control) */}
      <TripProductLoop />

      {/* 4. DISPATCH STORY — Know what needs a driver before the day starts */}
      <DispatchSection />

      {/* 5. DRIVER MOBILE APP — Built for the driver, not just the office */}
      <DriverAppSection />

      {/* 6. COMMAND CENTER — Your transport operation, at a glance */}
      <CommandCenterSection />

      {/* 7. COMPLIANCE & OCR — Stop chasing expiry dates */}
      <ComplianceSection />

      {/* 8. FLEET & DRIVER RESOURCES — Keep every vehicle and driver ready */}
      <FleetResourcesSection />

      {/* 9. PACKAGES — Turn repeat trips into repeatable workflows */}
      <PackagesSection />

      {/* 10. MULTI-LOCATION OPERATIONS — One operation. Multiple locations */}
      <MultiLocationSection />

      {/* 11. BEFORE / AFTER — From scattered tools to one operating system */}
      <ComparisonSection />

      {/* 12. WHO IT'S FOR — 4 focused passenger fleet operator personas */}
      <WhoItsForSection />

      {/* 13. PRODUCT TOUR — Genuine product screenshots & operational problem solved */}
      <ProductTourSection />

      {/* 14. WHY DRIVEOPS — More than a fleet register. Built around the trip */}
      <WhyDriveOpsSection />

      {/* 15. TRUST — Grounded, verified SaaS architecture & data integrity */}
      <TrustSection />

      {/* 16. PRICING — Transparent tiers aligned to vehicles and drivers */}
      <PricingSection />

      {/* 17. FAQ — 10 grounded buyer questions */}
      <FAQSection />

      {/* 18. FINAL CTA — Ready to take control of your trip operations? */}
      <CTASection />
    </main>
    <Footer />
  </div>
)

export default Index
