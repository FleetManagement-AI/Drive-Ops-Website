import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Lazy Loading for Performance Optimization (Code Splitting)
const Index = lazy(() => import("./pages/Index.tsx"));
const FeatureDetail = lazy(() => import("./pages/FeatureDetail.tsx"));
const Pricing = lazy(() => import("./pages/Pricing.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const FleetMapPreview = lazy(() => import("./pages/FleetMapPreview.tsx"));

// Solutions & SEO Landing Pages
const PassengerTransport = lazy(() => import("./pages/solutions/PassengerTransport.tsx"));
const GoodsTransport = lazy(() => import("./pages/solutions/GoodsTransport.tsx"));
const SelfDriveRental = lazy(() => import("./pages/solutions/SelfDriveRental.tsx"));
const FleetManagementSolution = lazy(() => import("./pages/solutions/FleetManagementSolution.tsx"));
const FleetManagementIndia = lazy(() => import("./pages/FleetManagementIndia.tsx"));

const queryClient = new QueryClient();

// Tracks pageviews across SPA client-side route changes
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

// High-performance Suspense Fallback
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
            
            {/* High-Intent India SEO Landing Page */}
            <Route path="/fleet-management-software-india" element={<FleetManagementIndia />} />

            {/* Solution Pages */}
            <Route path="/solutions/passenger-transport" element={<PassengerTransport />} />
            <Route path="/solutions/goods-transport" element={<GoodsTransport />} />
            <Route path="/solutions/self-drive-rental" element={<SelfDriveRental />} />
            <Route path="/solutions/fleet-management" element={<FleetManagementSolution />} />

            {/* Feature Detail Pages */}
            <Route path="/features/:featureId" element={<FeatureDetail />} />

            {/* Previews & App Pages */}
            <Route path="/fleet-map" element={<FleetMapPreview />} />
            <Route path="/preview" element={<FleetMapPreview />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
