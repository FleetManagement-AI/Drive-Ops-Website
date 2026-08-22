import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ProblemSection from "@/components/ProblemSection"
import FleetEcosystemSection from "@/components/FleetEcosystemSection"
import ProductShowcase from "@/components/ProductShowcase"
import FinancialIntelligenceSection from "@/components/FinancialIntelligenceSection"
import BusinessTypesSection from "@/components/BusinessTypesSection"
import HowDriveOpsWorksSection from "@/components/HowDriveOpsWorksSection"
import FeaturesSection from "@/components/FeaturesSection"
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
      "description": "DriveOps is an all-in-one fleet management software for businesses in India. Manage vehicles, trips, drivers, maintenance, tracking, expenses and fleet profitability from one platform.",
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
      "description": "DriveOps is an all-in-one fleet management software platform built for taxi operators, logistics companies, and fleet owners in India.",
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
      "applicationSubCategory": "Fleet Management Software",
      "operatingSystem": "Web, iOS, Android",
      "inLanguage": "en-IN",
      "description": "DriveOps is India's all-in-one fleet management software. Manage vehicles, trips, drivers, maintenance, live tracking, expenses, and profitability from a single unified platform."
    }
  ]
}

const Index = () => (
  <div className="min-h-screen bg-background text-foreground antialiased selection:bg-blue-100 selection:text-blue-900">
    <SEO 
      title="DriveOps | Fleet Management Software for Transport Businesses"
      description="DriveOps is an all-in-one fleet management software for businesses in India. Manage vehicles, trips, drivers, maintenance, tracking, expenses and fleet profitability from one platform."
      keywords="DriveOps, Drive Ops, fleet management software, fleet management software India, vehicle fleet management software, fleet tracking software India, transport fleet management software, taxi fleet management software, truck fleet management software, vehicle rental management software, fleet maintenance software, fleet expense management software, fleet profitability software"
      canonicalUrl="/"
      structuredData={homepageStructuredData}
    />
    <Navbar />
    <main>
      {/* 1. HERO — WHAT IS DRIVEOPS */}
      <HeroSection />

      {/* 2. PROBLEM & UNIFICATION — STOP MANAGING ACROSS SCATTERED TOOLS */}
      <ProblemSection />

      {/* 3. PRODUCT ECOSYSTEM — EVERYTHING YOU NEED TO RUN YOUR FLEET EFFICIENTLY */}
      <FleetEcosystemSection />

      {/* 4. DRIVER MGMT, WHATSAPP REVIEWS, PAYROLL, FLEET VISIBILITY */}
      <ProductShowcase />

      {/* 5. FINANCIAL INTELLIGENCE — PROFITABILITY & EXPENSE CONTROL */}
      <FinancialIntelligenceSection />

      {/* 6. BUSINESS TYPES SUPPORTED — ONE PLATFORM. THREE WAYS TO RUN YOUR BUSINESS */}
      <BusinessTypesSection />

      {/* 7. HOW DRIVEOPS WORKS — WORKFLOW & CONNECTED PLATFORM */}
      <HowDriveOpsWorksSection />

      {/* 8. COMPLETE PLATFORM PILLARS */}
      <FeaturesSection />

      {/* 6. PRICING */}
      <PricingSection />

      {/* 7. FAQ */}
      <FAQSection />

      {/* 8. FINAL CTA */}
      <CTASection />
    </main>
    <Footer />
  </div>
)

export default Index
