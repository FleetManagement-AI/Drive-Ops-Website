import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductShowcase from "@/components/ProductShowcase";

import RoadmapSection from "@/components/RoadmapSection";
import WhyDriveOps from "@/components/WhyDriveOps";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <ProductShowcase />

    <RoadmapSection />
    <WhyDriveOps />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
