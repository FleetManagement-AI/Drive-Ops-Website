import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import ProductShowcase from "@/components/ProductShowcase"
import BenefitsSection from "@/components/BenefitsSection"
import PricingSection from "@/components/PricingSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main>
      {/* 1. Hero */}
      <HeroSection />
      {/* 2. Key Features */}
      <FeaturesSection />
      {/* 3. How It Works */}
      <HowItWorksSection />
      {/* 4. Dashboard Preview */}
      <ProductShowcase />
      {/* 5. Benefits */}
      <BenefitsSection />
      {/* 6. Pricing */}
      <PricingSection />
      {/* 7. Testimonials */}
      {/* <TestimonialsSection /> */}
      {/* 8. CTA Banner */}
      <CTASection />
    </main>
    <Footer />
  </div>
)

export default Index
