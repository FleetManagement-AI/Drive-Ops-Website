import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ProblemSection from "@/components/ProblemSection"
import FleetEcosystemSection from "@/components/FleetEcosystemSection"
import ProductShowcase from "@/components/ProductShowcase"
import FinancialIntelligenceSection from "@/components/FinancialIntelligenceSection"
import BusinessTypesSection from "@/components/BusinessTypesSection"
import FeaturesSection from "@/components/FeaturesSection"
import PricingSection from "@/components/PricingSection"
import FAQSection from "@/components/FAQSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"

const Index = () => (
  <div className="min-h-screen bg-background text-foreground antialiased selection:bg-blue-100 selection:text-blue-900">
    <SEO 
      title="DriveOps | Complete Fleet Operations OS"
      description="DriveOps helps taxi owners, transport operators, and growing fleets run their entire operation from one connected platform."
      keywords="fleet operations platform, taxi dispatch software, fleet management software, whatsapp review collection, vehicle tracking software"
      canonicalUrl="/"
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

      {/* 7. COMPLETE PLATFORM PILLARS */}
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
