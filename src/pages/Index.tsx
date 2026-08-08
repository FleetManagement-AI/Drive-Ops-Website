import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ProblemSection from "@/components/ProblemSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import ProductShowcase from "@/components/ProductShowcase"
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

      {/* 2. PROBLEM — WHY FLEET OPERATIONS BECOME MESSY */}
      <ProblemSection />

      {/* 3. CORE PRODUCT WORKFLOW — BOOKING TO PAYOUT */}
      <HowItWorksSection />

      {/* 4-7 & 9. DRIVER MGMT, WHATSAPP REVIEWS, PAYROLL, FLEET VISIBILITY, BUSINESS TYPES */}
      <ProductShowcase />

      {/* 8. COMPLETE PLATFORM — SHARED 6-PILLAR WORKSPACE */}
      <FeaturesSection />

      {/* PRICING */}
      <PricingSection />

      {/* FAQ */}
      <FAQSection />

      {/* 10. FINAL CTA */}
      <CTASection />
    </main>
    <Footer />
  </div>
)

export default Index
