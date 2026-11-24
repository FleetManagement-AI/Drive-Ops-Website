import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import PricingSection from "@/components/PricingSection"
import FAQSection from "@/components/FAQSection"

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col antialiased">
      <SEO 
        title="Fleet Management Software Pricing | DriveOps"
        description="Fleet management software pricing for Indian operators—transparent Free, Basic, Professional, and Enterprise plans for taxi, corporate, and rental fleets. No hidden fees."
        keywords="fleet management software pricing, fleet software pricing, fleet management plans, taxi fleet management software cost"
        canonicalUrl="/pricing"
      />
      
      <Navbar />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 mb-10 text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Fleet Management Software Pricing
          </h1>
          <p className="text-lg text-slate-600">
            Transparent plans for taxi, corporate transport, and rental fleets—from 2 cabs to 2,000 vehicles. No hidden fees. No hardware locks.{" "}
            <Link to="/fleet-management-software-india/" className="text-blue-600 hover:underline">Explore fleet management</Link>
            {" · "}
            <Link to="/product/trips-dispatch/" className="text-blue-600 hover:underline">Trip management</Link>
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
