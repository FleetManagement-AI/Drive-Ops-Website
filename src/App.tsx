import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = lazy(() => import("./pages/Index.tsx"));
const FeatureDetail = lazy(() => import("./pages/FeatureDetail.tsx"));
const Pricing = lazy(() => import("./pages/Pricing.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const FleetMapPreview = lazy(() => import("./pages/FleetMapPreview.tsx"));
const FAQ = lazy(() => import("./pages/FAQ.tsx"));
const ProductDetailPage = lazy(() => import("./pages/ProductPage.tsx"));
const ProductHubPage = lazy(() =>
  import("./pages/ProductPage.tsx").then((m) => ({ default: m.ProductHubPage }))
);

const TaxiCabFleets = lazy(() => import("./pages/solutions/TaxiCabFleets.tsx"));
const TravelTourOperators = lazy(() => import("./pages/solutions/TravelTourOperators.tsx"));
const CorporateTransport = lazy(() => import("./pages/solutions/CorporateTransport.tsx"));
const SelfDriveRentals = lazy(() => import("./pages/solutions/SelfDriveRentals.tsx"));
const GoodsTransport = lazy(() => import("./pages/solutions/GoodsTransport.tsx"));
const FleetManagementSolution = lazy(() => import("./pages/solutions/FleetManagementSolution.tsx"));
const FleetManagementIndia = lazy(() => import("./pages/FleetManagementIndia.tsx"));

const queryClient = new QueryClient();

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("config", "G-49093788B0", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

const PageLoader = () => (
  <div className="w-full min-h-screen flex items-center justify-center bg-[#FAFAFA]">
    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsTracker />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/fleet-management-software-india" element={<FleetManagementIndia />} />

            <Route path="/product" element={<ProductHubPage />} />
            <Route path="/product/:slug" element={<ProductDetailPage />} />

            <Route path="/solutions/taxi-cab-fleets" element={<TaxiCabFleets />} />
            <Route path="/solutions/travel-tour-operators" element={<TravelTourOperators />} />
            <Route path="/solutions/corporate-transport" element={<CorporateTransport />} />
            <Route path="/solutions/self-drive-rentals" element={<SelfDriveRentals />} />

            {/* SEO redirects from legacy solution URLs */}
            <Route path="/solutions/passenger-transport" element={<Navigate to="/solutions/taxi-cab-fleets" replace />} />
            <Route path="/solutions/self-drive-rental" element={<Navigate to="/solutions/self-drive-rentals" replace />} />

            {/* Preserved SEO routes */}
            <Route path="/solutions/goods-transport" element={<GoodsTransport />} />
            <Route path="/solutions/fleet-management" element={<FleetManagementSolution />} />

            <Route path="/features/:featureId" element={<FeatureDetail />} />
            <Route path="/fleet-map" element={<FleetMapPreview />} />
            <Route path="/preview" element={<FleetMapPreview />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
