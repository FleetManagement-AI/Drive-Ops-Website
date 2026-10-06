import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"
import FAQSection, { HOMEPAGE_FAQS } from "@/components/FAQSection"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://driveops.info.chatserve.in/faq#faq",
  mainEntity: HOMEPAGE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SEO
        title="Frequently Asked Questions | DriveOps"
        description="Answers about DriveOps trips, dispatch, Driver App, live tracking, WhatsApp ops, rentals, compliance, and plans."
        keywords="DriveOps FAQ, fleet software questions, trip dispatch FAQ, driver app FAQ"
        canonicalUrl="/faq"
        ogImage="/images/hero/DriveOps Live Fleet Management Dashboard.webp"
        structuredData={structuredData}
      />
      <Navbar />
      <main className="pt-20">
        <div className="border-b border-slate-200/60 bg-white px-4 pb-8 pt-10 text-center sm:px-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">FAQ</p>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Clear answers about how DriveOps works today—without overclaiming unimplemented features.
          </p>
        </div>
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
