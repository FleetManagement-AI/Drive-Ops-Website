import Footer from "@/components/Footer"
import LegalDocumentLayout from "@/components/legal/LegalDocumentLayout"
import Navbar from "@/components/Navbar"
import SEO from "@/components/SEO"
import { termsAndConditions } from "@/data/legal/terms-and-conditions"

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SEO
        title="Terms & Conditions | DriveOps"
        description={termsAndConditions.description}
        keywords="DriveOps terms and conditions, fleet software terms, SaaS terms India"
        canonicalUrl="/terms-and-conditions"
        ogImage="/images/hero/DriveOps Live Fleet Management Dashboard.webp"
      />
      <Navbar />
      <main className="pt-20">
        <LegalDocumentLayout legalDocument={termsAndConditions} />
      </main>
      <Footer />
    </div>
  )
}
