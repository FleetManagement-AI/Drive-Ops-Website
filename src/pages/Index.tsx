import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ProblemSection from "@/components/ProblemSection"
import FeaturesSection from "@/components/FeaturesSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import ProductShowcase from "@/components/ProductShowcase"
import PricingSection from "@/components/PricingSection"
import FAQSection from "@/components/FAQSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"

const Index = () => (
  <div className="min-h-screen bg-background text-foreground antialiased selection:bg-blue-100 selection:text-blue-900">
    <SEO 
      title="DriveOps | AI-Powered Fleet Operations & Taxi Dispatch Platform"
      description="DriveOps is the complete operating system for modern taxi businesses. Manage dispatch, driver duty, WhatsApp reviews, fleet tracking, and fuel costs from one platform."
      keywords="fleet operations platform, taxi dispatch software, fleet management software, whatsapp review collection, vehicle tracking software"
      canonicalUrl="/"
    />
    <Navbar />
    <main>
      {/* 1. HERO */}
      <HeroSection />

      {/* 2. WHY DRIVEOPS (VALUE PROPOSITION) */}
      <ProblemSection />

      {/* 3. CORE CAPABILITIES (FOCUSED BENTO GRID) */}
      <FeaturesSection />

      {/* 4. WORKFLOW (4-STEP PROCESS) */}
      <HowItWorksSection />

      {/* 5. INTERACTIVE PRODUCT SHOWCASE */}
      <ProductShowcase />

      {/* 6. TRANSPARENT PRICING (API DRIVEN) */}
      <PricingSection />

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <FAQSection />

      {/* 8. FINAL CTA BANNER */}
      <CTASection />
    </main>
    <Footer />
  </div>
)

export default Index
