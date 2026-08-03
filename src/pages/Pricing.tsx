import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import PricingSection from "@/components/PricingSection"
import FAQSection from "@/components/FAQSection"

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col antialiased">
      <SEO 
        title="Pricing | DriveOps Fleet Management Software"
        description="Transparent pricing for DriveOps Fleet Management and Taxi Dispatch software. Choose from Free, Basic, Professional, and Enterprise plans tailored for transport operators in India."
        keywords="DriveOps pricing, fleet management software cost, taxi dispatch software pricing, transport management software price"
        canonicalUrl="/pricing"
      />
      
      <Navbar />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 mb-10 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Transparent Pricing for Growing Fleets
          </h1>
          <p className="text-lg text-slate-600">
            Whether you manage 2 cabs or 2,000 corporate transport vehicles, our software scales with your business. No hidden fees. No hardware locks.
          </p>
        </div>
        
        <PricingSection />
        
        <div className="mt-20 border-t border-slate-200/60 pt-20">
          <FAQSection />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Pricing
