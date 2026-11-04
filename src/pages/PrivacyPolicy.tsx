import Footer from "@/components/Footer"
import LegalDocumentLayout from "@/components/legal/LegalDocumentLayout"
import Navbar from "@/components/Navbar"
import SEO from "@/components/SEO"
import { privacyPolicy } from "@/data/legal/privacy-policy"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SEO
        title="Privacy Policy | DriveOps"
        description={privacyPolicy.description}
        keywords="DriveOps privacy policy, fleet software privacy, GPS tracking privacy, WhatsApp fleet ops"
        canonicalUrl="/privacy-policy"
        ogImage="/images/hero/DriveOps Live Fleet Management Dashboard.webp"
      />
      <Navbar />
      <main className="pt-20">
        <LegalDocumentLayout legalDocument={privacyPolicy} />
      </main>
      <Footer />
    </div>
  )
}
