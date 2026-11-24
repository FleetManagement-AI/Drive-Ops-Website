import { priorityProducts, reviewProduct } from "./priority-content"

export type ProductPageContent = {
  primaryKeyword?: string
  supportingKeywords?: string[]
  faqs?: { q: string; a: string }[]
  slug: string
  title: string
  /** Optional SEO-focused H1; falls back to `title` in ProductPageLayout */
  seoH1?: string
  eyebrow: string
  description: string
  image: string
  imageAlt: string
  capabilities: string[]
  workflow?: string[]
  relatedFeatureId?: string
  seoTitle: string
  seoDescription: string
  group: "fleet" | "operations" | "rentals"
  anchors?: { id: string; title: string; description: string }[]
}

export const PRODUCT_HUB = {
  title: "One platform for fleet operations",
  description:
    "Explore fleet operations software for trips, drivers, live tracking, compliance management, fuel logs, customer reviews and self-drive rentals.",
}

const BASE_PRODUCT_PAGES: ProductPageContent[] = [
  {
    slug: "vehicles",
    group: "fleet",
    title: "Vehicle management",
    seoH1: "Vehicle Management Software",
    eyebrow: "Fleet Management",
    description:
      "Maintain your fleet registry, vehicle status, and document readiness so dispatch and rentals start from accurate vehicle data.",
    image: "/images/features/Vehicle Availability and New Reservation.webp",
    imageAlt: "DriveOps vehicle management software showing fleet registry and availability",
    capabilities: [
      "Fleet vehicle CRUD and catalog-backed records",
      "Imports for vehicles in bulk",
      "Vehicle issues and operational status",
      "Document readiness linked to compliance vault",
    ],
    relatedFeatureId: "vehicle-management",
    // Distinct from primary /features/vehicle-management/ title (canonical target)
    seoTitle: "Fleet Vehicle Registry | DriveOps",
    seoDescription:
      "Vehicle management software for fleets—registry, imports, issues, and document readiness with DriveOps.",
  },
  {
    slug: "drivers",
    group: "fleet",
    title: "Driver management",
    seoH1: "Driver Management Software",
    eyebrow: "Fleet Management",
    description:
      "Keep driver profiles, duty, and assignments organized—and give drivers a mobile app in English, Malayalam, and Hindi.",
    image: "/images/features/Modern Driver Fleet App Interface.webp",
    imageAlt: "DriveOps driver management software and Driver App for trip and duty management",
    capabilities: [
      "Driver profiles, assignment, and imports",
      "Duty and shift/attendance support for day-to-day ops",
      "Driver App access with WhatsApp OTP where configured",
      "Multilingual Driver App: English, Malayalam, Hindi",
    ],
    relatedFeatureId: "driver-management",
    // Distinct from primary /features/driver-management/ title (canonical target)
    seoTitle: "Fleet Driver Registry | DriveOps",
    seoDescription:
      "Driver management software for fleets—profiles, duty, imports, and multilingual Driver App access with DriveOps.",
  },
  {
    slug: "trips-dispatch",
    group: "fleet",
    title: "Trips & dispatch",
    seoH1: "Trip Management Software",
    eyebrow: "Fleet Management",
    description:
      "Trip management software to create trips, allocate drivers and vehicles with availability checks, and confirm via Driver App or WhatsApp accept/reject—human-in-the-loop dispatch, not auto nearest-vehicle.",
    image: "/images/features/Create Trip Dashboard Mockup.webp",
    imageAlt: "DriveOps trip management and dispatch workspace showing create trip and allocation",
    capabilities: [
      "Trip types: one-way, round-trip, and full-day",
      "Stops: pickup, drop, and waypoint",
      "Allocate with conflict and candidate availability checks",
      "Driver accept/reject in the Driver App and WhatsApp",
      "Unassigned trip reminders for ops follow-up",
    ],
    workflow: [
      "Create trip",
      "Check availability",
      "Allocate",
      "Driver accepts",
      "Execute",
      "Complete",
    ],
    relatedFeatureId: "taxi-dispatch",
    seoTitle: "Trip Management Software | DriveOps",
    seoDescription:
      "Trip management and taxi dispatch software—create trips, allocate with conflict checks, and confirm driver accept/reject in DriveOps.",
  },
  {
    slug: "live-fleet",
    group: "fleet",
    title: "Live fleet",
    seoH1: "Live Fleet Tracking Software",
    eyebrow: "Fleet Management",
    description:
      "Live fleet tracking from Driver App GPS on the ops map, plus secure customer tracking links for active trips—no hardware telematics required.",
    image: "/images/features/Live Fleet Tracking Dashboard.webp",
    imageAlt: "DriveOps live fleet tracking dashboard and GPS map for active vehicles",
    capabilities: [
      "Ops live fleet map (Mapbox) from driver-app GPS",
      "Customer trip tracking via secure link with live updates",
      "Phone-based GPS—not hardware telematics trackers",
      "Visibility for active trips while drivers are on the road",
    ],
    relatedFeatureId: "fleet-tracking",
    seoTitle: "Live Fleet Tracking Software | DriveOps",
    seoDescription:
      "Live fleet tracking software with an ops GPS map and customer tracking links—powered by the Driver App, not hardware trackers.",
  },
  {
    slug: "maintenance",
    group: "fleet",
    title: "Maintenance",
    seoH1: "Vehicle Maintenance Management Software",
    eyebrow: "Fleet Management",
    description:
      "Vehicle maintenance management software to log jobs, track service history and costs, and run due scans—practical upkeep, not predictive failure AI.",
    image: "/images/features/Vehicle Maintenance Dashboard.webp",
    imageAlt: "DriveOps vehicle maintenance management dashboard with jobs and service history",
    capabilities: [
      "Maintenance logs and summary views",
      "Scheduled maintenance scan jobs",
      "Operational upkeep tracking for fleet readiness",
      "Related vehicle issues from drivers where configured",
    ],
    relatedFeatureId: "vehicle-maintenance",
    seoTitle: "Vehicle Maintenance Management Software | DriveOps",
    seoDescription:
      "Vehicle maintenance management software for fleets—log jobs, track costs, and run due scans with DriveOps.",
  },
  {
    slug: "compliance",
    group: "fleet",
    title: "Compliance vault",
    seoH1: "Fleet Compliance Management Software",
    eyebrow: "Fleet Management",
    description:
      "Fleet compliance management software to vault vehicle and driver documents with expiry scanning and WhatsApp alerts. OCR is optional—not always-on AI inspections.",
    image: "/images/features/Vehicle Maintenance Dashboard.webp",
    imageAlt: "DriveOps fleet compliance management vault for RC, insurance, and permits",
    capabilities: [
      "Central document vault for fleet records",
      "Expiry scanning with WhatsApp compliance alerts",
      "Role-aware ops access to compliance records",
      "Honest scope: vault + alerts—not inspections product",
    ],
    relatedFeatureId: "fleet-compliance",
    seoTitle: "Fleet Compliance Management Software | DriveOps",
    seoDescription:
      "Fleet compliance management software for document vaulting, expiry alerts, and WhatsApp notifications in DriveOps.",
  },
  {
    slug: "fuel",
    group: "fleet",
    title: "Fuel management",
    seoH1: "Fleet Fuel Management Software",
    eyebrow: "Fleet Management",
    description:
      "Fleet fuel management software to capture fuel logs from drivers and ops—quantity, price, odometer, and receipts—alongside trips and maintenance.",
    image: "/images/hero/fleet-care-fuel-transparent.webp",
    imageAlt: "DriveOps fleet fuel management and fuel log cards for operators",
    capabilities: [
      "Fuel log capture from Driver App and ops",
      "Day-to-day cost visibility for fleet operators",
      "Tied to vehicle and trip operational context",
      "Not a full finance or FASTag integration suite",
    ],
    relatedFeatureId: "fleet-expenses",
    seoTitle: "Fleet Fuel Management Software | DriveOps",
    seoDescription:
      "Fleet fuel management and fuel log software—record volume, price, and odometer from drivers or ops in DriveOps.",
  },
  {
    slug: "customers",
    group: "fleet",
    title: "Customer management",
    eyebrow: "Fleet Management",
    description:
      "Link customers to trips, send confirmations with tracking links, and collect WhatsApp review replies into an ops inbox—not Google Business review autopilot.",
    image: "/images/features/Connected Taxi Tracking Journey.webp",
    imageAlt: "DriveOps customer trip confirmation and tracking journey",
    capabilities: [
      "Customer records linked to trips",
      "WhatsApp confirmation with tracking URL",
      "WhatsApp review requests and inbound review inbox",
      "Secure customer tracking link for live trip updates",
    ],
    relatedFeatureId: "customer-review-collection",
    seoTitle: "Fleet Customer Management | DriveOps",
    seoDescription:
      "Manage trip customers, tracking links, and WhatsApp review collection with DriveOps.",
  },
  {
    slug: "analytics",
    group: "fleet",
    title: "Operational visibility",
    eyebrow: "Fleet Management",
    description:
      "Stay oriented with day-to-day operational summaries around trips, fuel, and maintenance. This is not an advanced BI, P&L, or finance analytics suite.",
    image: "/images/hero/DriveOps Live Fleet Dashboard and app.webp",
    imageAlt: "DriveOps operational dashboard for day-to-day fleet visibility",
    capabilities: [
      "Operational dashboards for active fleet work",
      "Fuel and maintenance visibility for daily ops",
      "Needs-attention style operational follow-ups",
      "Reports/finance modules are not marketed as live product",
    ],
    relatedFeatureId: "fleet-analytics",
    seoTitle: "Fleet Operational Visibility | DriveOps",
    seoDescription:
      "Day-to-day operational visibility for trips, fuel, and maintenance with DriveOps—not a BI suite.",
  },
  {
    slug: "recurring-trips",
    group: "operations",
    title: "Recurring trips",
    eyebrow: "Operations",
    description:
      "Define daily, weekly, or monthly trip schedules and let automatic materialization create upcoming trip instances for dispatch.",
    image: "/images/features/Five-Step Recurring Trip Workflow.webp",
    imageAlt: "DriveOps recurring trip scheduling workflow",
    capabilities: [
      "Recurrence: daily, weekly, monthly",
      "Automatic schedule materialization",
      "Dispatch against materialized trip instances",
      "Useful for corporate routes and tour schedules",
    ],
    workflow: ["Define schedule", "Materialize", "Allocate", "Execute", "Complete"],
    seoTitle: "Recurring Trip Scheduling Software | DriveOps",
    seoDescription:
      "Schedule recurring daily, weekly, or monthly trips with automatic materialization in DriveOps.",
  },
  {
    slug: "trip-sheets",
    group: "operations",
    title: "Trip sheets",
    eyebrow: "Operations",
    description:
      "Capture post-trip details from drivers and ops so completed trips stay documented for follow-up and customer communication.",
    image: "/images/features/Fleet Trip Management Workflow Infographic.webp",
    imageAlt: "DriveOps trip lifecycle including trip sheet capture",
    capabilities: [
      "Trip sheet draft and submit flows",
      "Driver App and ops trip sheet support",
      "WhatsApp trip sheet messaging where configured",
      "Offline submit is not guaranteed—connectivity matters",
    ],
    seoTitle: "Digital Trip Sheets | DriveOps",
    seoDescription:
      "Capture post-trip sheets from drivers and ops with DriveOps trip sheets.",
  },
  {
    slug: "notifications",
    group: "operations",
    title: "Notifications",
    eyebrow: "Operations",
    description:
      "Keep drivers and customers informed through WhatsApp, push, email, and in-app channels for the events DriveOps actually sends. SMS is not implemented.",
    image: "/images/features/Connected Taxi Tracking Journey.webp",
    imageAlt: "DriveOps WhatsApp and notification journey for trip operations",
    capabilities: [
      "WhatsApp assignment, confirmation, OTP, compliance, reviews",
      "Mobile push and in-app notifications for drivers",
      "Email where configured for ops events",
      "No SMS delivery product today",
    ],
    seoTitle: "Fleet Notifications & WhatsApp Ops | DriveOps",
    seoDescription:
      "WhatsApp, push, email, and in-app notifications for DriveOps fleet operations—without SMS claims.",
  },
  {
    slug: "alerts",
    group: "operations",
    title: "Alerts",
    eyebrow: "Operations",
    description:
      "Stay on top of unassigned trips, document expiry, and operational follow-ups that need attention.",
    image: "/images/hero/Fleet Management Dashboard Cards review alerts.webp",
    imageAlt: "DriveOps alerts and review cards for fleet operations",
    capabilities: [
      "Unassigned trip reminder automation",
      "Document expiry scanning and WhatsApp alerts",
      "Ops inbox for review replies",
      "Needs-attention style operational signals",
    ],
    relatedFeatureId: "whatsapp-review-management",
    seoTitle: "Fleet Alerts & Follow-ups | DriveOps",
    seoDescription:
      "Unassigned trip reminders, document expiry alerts, and review inbox follow-ups in DriveOps.",
  },
  {
    slug: "driver-app",
    group: "operations",
    title: "Driver App",
    seoH1: "Driver App for Fleet Management",
    eyebrow: "Operations",
    description:
      "Driver app for fleet management—duty, GPS, trip accept/reject, navigation, trip sheets, fuel logs, vehicle issues, and push notifications in English, Malayalam, and Hindi.",
    image: "/images/features/Modern Driver Fleet App Interface.webp",
    imageAlt: "DriveOps driver app for fleet management showing duty, trips, and GPS",
    capabilities: [
      "Duty start/end and trip execution",
      "Accept/reject assignments (online)",
      "GPS upload for live fleet and customer tracking",
      "Trip sheets, fuel logs, and vehicle issues",
      "Languages: English, Malayalam, Hindi",
      "Partial offline sync for selected actions—not accept/reject",
    ],
    relatedFeatureId: "driver-management",
    seoTitle: "Driver App for Fleet Management | DriveOps",
    seoDescription:
      "Driver app for fleets—duty, trips, GPS, trip sheets, fuel logs, and push notifications in English, Malayalam, and Hindi.",
  },
  {
    slug: "rentals",
    group: "rentals",
    title: "Self-drive rentals",
    eyebrow: "Rentals",
    description:
      "Run self-drive rental operations alongside chauffeur trips: availability, reservations, handover, return inspection fields, and manual payment recording—not a payment gateway or automated invoicing product.",
    image: "/images/features/Five-Step Vehicle Rental Workflow.webp",
    imageAlt: "DriveOps five-step self-drive rental workflow",
    capabilities: [
      "Vehicle availability for rental inventory",
      "Reservations and hold expiry automation",
      "Handover and return/inspection field capture",
      "Manual payment recording methods",
      "No online checkout or automated invoicing",
    ],
    workflow: [
      "Availability",
      "Reservation",
      "Handover",
      "Return",
      "Payment recorded",
    ],
    anchors: [
      {
        id: "availability",
        title: "Vehicle availability",
        description: "See which vehicles are free for self-drive bookings.",
      },
      {
        id: "reservations",
        title: "Reservations",
        description: "Create holds and reservations with hold expiry handling.",
      },
      {
        id: "handover",
        title: "Handover",
        description: "Record handover details when the customer takes the vehicle.",
      },
      {
        id: "return",
        title: "Return & inspection",
        description:
          "Capture return and inspection fields for the rental close-out—not a compliance inspections product.",
      },
      {
        id: "payments",
        title: "Payment recording",
        description: "Record payments manually in ops. No payment gateway checkout.",
      },
    ],
    seoTitle: "Self-Drive Rental Management | DriveOps",
    seoDescription:
      "Manage self-drive availability, reservations, handover, return, and manual payment recording with DriveOps.",
  },
]

export const PRODUCT_PAGES: ProductPageContent[] = [
  ...BASE_PRODUCT_PAGES.map(page => ({ ...page, ...priorityProducts[page.slug] })),
  reviewProduct,
]

export function getProductPage(slug: string): ProductPageContent | undefined {
  return PRODUCT_PAGES.find((p) => p.slug === slug)
}

export const PRODUCT_GROUPS = [
  {
    id: "fleet" as const,
    title: "Fleet Management",
    description: "Vehicles, drivers, trips, live fleet, fleet care, and customers.",
  },
  {
    id: "operations" as const,
    title: "Operations",
    description: "Recurring trips, trip sheets, notifications, alerts, and Driver App.",
  },
  {
    id: "rentals" as const,
    title: "Rentals",
    description: "Self-drive availability through payment recording.",
  },
]
