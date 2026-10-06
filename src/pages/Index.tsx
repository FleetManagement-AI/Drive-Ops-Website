import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import PlatformOverviewSection from "@/components/PlatformOverviewSection"
import HowDriveOpsWorksCompact from "@/components/HowDriveOpsWorksCompact"
import SolutionsTeaserSection from "@/components/SolutionsTeaserSection"
import ProductShowcaseSection from "@/components/ProductShowcaseSection"
import FleetCareTeaserSection from "@/components/FleetCareTeaserSection"
import PricingTeaserSection from "@/components/PricingTeaserSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import SEO from "@/components/SEO"

const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://driveops.info.chatserve.in/#website",
      url: "https://driveops.info.chatserve.in/",
      name: "DriveOps",
      description:
        "DriveOps is a fleet operations platform to plan trips, assign drivers and vehicles, run the Driver App, track live fleet location, manage fuel, maintenance, compliance, WhatsApp communication, and self-drive rentals.",
      inLanguage: "en-IN",
    },
    {
      "@type": "Organization",
      "@id": "https://driveops.info.chatserve.in/#organization",
      name: "DriveOps",
      url: "https://driveops.info.chatserve.in/",
      logo: {
        "@type": "ImageObject",
        url: "https://driveops.info.chatserve.in/logo/driveops-logo-blue-edited.png",
        width: 200,
        height: 60,
      },
      description:
        "DriveOps helps fleet operators manage and operate trips, drivers, vehicles, dispatch, live fleet tracking, rentals, and fleet care from one platform.",
      foundingLocation: {
        "@type": "Place",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-98461-99883",
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["English", "Malayalam", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-98478-51049",
          contactType: "customer support",
          areaServed: "IN",
          availableLanguage: ["English", "Malayalam", "Hindi"],
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://driveops.info.chatserve.in/#software",
      name: "DriveOps",
      url: "https://driveops.info.chatserve.in/",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Fleet Operations Software",
      operatingSystem: "Web, Android",
      inLanguage: "en-IN",
      description:
        "Fleet operations platform for trips, dispatch, Driver App execution, live fleet visibility, WhatsApp communication, fuel, maintenance, compliance, recurring trips, and self-drive rentals.",
      featureList: [
        "Connected trip workflow",
        "Fleet care — fuel, maintenance, and compliance documents",
        "WhatsApp and Driver App communication",
        "Driver App for trip execution",
        "Recurring trip schedules",
        "Self-drive rental operations",
        "Live fleet tracking",
        "Multi-segment fleet operations",
      ],
    },
  ],
}

const Index = () => (
  <div className="min-h-screen bg-background text-foreground antialiased selection:bg-blue-100 selection:text-blue-900">
    <SEO
      title="DriveOps | Manage & Operate Your Fleet from One Platform"
      description="Plan trips, assign drivers and vehicles, run the Driver App, track live fleet location, manage fuel, maintenance, compliance, WhatsApp communication, and self-drive rentals—with DriveOps."
      keywords="fleet operations software, trip management software, fleet dispatch software, driver mobile app, live fleet tracking, WhatsApp fleet communication, self-drive rental software, fuel log software, fleet compliance software, taxi fleet software India"
      canonicalUrl="/"
      ogImage="/images/hero/DriveOps Live Fleet Management Dashboard.webp"
      structuredData={homepageStructuredData}
    />
    <Navbar />
    <main>
      <HeroSection />
      <PlatformOverviewSection />
      <HowDriveOpsWorksCompact />
      <SolutionsTeaserSection />
      <ProductShowcaseSection />
      <FleetCareTeaserSection />
      <PricingTeaserSection />
      <CTASection />
    </main>
    <Footer />
  </div>
)

export default Index
