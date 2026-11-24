import { legacyRoutes, publicRoutes } from "@/config/routes";
import { canonicalPath } from "@/config/paths";
import { trackCta } from "@/lib/analytics";
import SEO from "@/components/SEO";
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
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions.tsx"));
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
    if (document.documentElement.dataset.exporting) return;
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("config", "G-2YPW68FRJK", {
        page_path: location.pathname + location.search,
        send_page_view: true,
      });
    }
  }, [location]);

  return null;
};

const RouteMetadata = () => {
  const { pathname } = useLocation();
  const path = canonicalPath(pathname);
  useEffect(() => {
    document.addEventListener("click", trackCta);
    return () => document.removeEventListener("click", trackCta);
  }, []);
  if (publicRoutes.some(route => route.path === path && !route.indexable)) {
    return <SEO title="Fleet Map Preview | DriveOps" description="Explore the DriveOps fleet map demonstration." canonicalUrl={path} noIndex />;
  }
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
        <RouteMetadata />
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

            {Object.entries(legacyRoutes).flatMap(([from, to]) => {
              const trimmed = from.replace(/\/$/, "") || "/"
              return [
                <Route key={from} path={from} element={<Navigate to={to} replace />} />,
                ...(trimmed !== from
                  ? [<Route key={trimmed} path={trimmed} element={<Navigate to={to} replace />} />]
                  : []),
              ]
            })}

            {/* Preserved SEO routes */}
            <Route path="/solutions/goods-transport" element={<GoodsTransport />} />
            <Route path="/solutions/fleet-management" element={<FleetManagementSolution />} />

            <Route path="/features/:featureId" element={<FeatureDetail />} />
            <Route path="/fleet-map" element={<FleetMapPreview />} />
            <Route path="/preview" element={<FleetMapPreview />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
