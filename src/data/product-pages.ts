export type ProductPageContent = {
  slug: string
  title: string
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
    "Explore how DriveOps connects vehicles, drivers, trips, live fleet, fleet care, customers, and self-drive rentals in one daily workspace.",
}

export const PRODUCT_PAGES: ProductPageContent[] = [
  {
    slug: "vehicles",
    group: "fleet",
    title: "Vehicle management",
    eyebrow: "Fleet Management",
    description:
      "Maintain your fleet registry, vehicle status, and document readiness so dispatch and rentals start from accurate vehicle data.",
    image: "/images/features/Vehicle Availability and New Reservation.webp",
    imageAlt: "DriveOps vehicle availability and fleet registry workspace",
    capabilities: [
      "Fleet vehicle CRUD and catalog-backed records",
      "Imports for vehicles in bulk",
      "Vehicle issues and operational status",
      "Document readiness linked to compliance vault",
    ],
    relatedFeatureId: "vehicle-management",
    seoTitle: "Vehicle Management Software | DriveOps",
    seoDescription:
      "Manage fleet vehicles, imports, issues, and document readiness in DriveOps vehicle management.",
  },
  {
    slug: "drivers",
    group: "fleet",
    title: "Driver management",
    eyebrow: "Fleet Management",
    description:
      "Keep driver profiles, duty, and assignments organized—and give drivers a mobile app in English, Malayalam, and Hindi.",
    image: "/images/features/Modern Driver Fleet App Interface.webp",
    imageAlt: "DriveOps Driver App interface for trip and duty management",
    capabilities: [
      "Driver profiles, assignment, and imports",
      "Duty and shift/attendance support for day-to-day ops",
      "Driver App access with WhatsApp OTP where configured",
      "Multilingual Driver App: English, Malayalam, Hindi",
    ],
    relatedFeatureId: "driver-management",
    seoTitle: "Driver Management Software | DriveOps",
    seoDescription:
      "Manage drivers, duty, imports, and multilingual Driver App access with DriveOps.",
  },
  {
    slug: "attendance-duty",
    group: "fleet",
    title: "Attendance & duty",
    eyebrow: "Fleet Management",
    description:
      "Plan driver work schedules, see today's attendance and duty, and keep leave and worked time close to dispatch decisions.",
    image: "/images/features/DriveOps Fleet Dashboard Workspace.webp",
    imageAlt: "DriveOps fleet workspace with drivers, trips and active work",
    capabilities: [
      "Today's duty and attendance records",
      "Driver work schedules and calendar views",
      "Worked time and leave follow-up",
      "Driver App duty sessions linked to attendance where configured",
    ],
    seoTitle: "Driver Attendance & Duty Software | DriveOps",
    seoDescription:
      "Plan driver schedules and track attendance, duty hours and leave alongside fleet operations in DriveOps.",
  },
  {
    slug: "trips-dispatch",
    group: "fleet",
    title: "Trips & dispatch",
    eyebrow: "Fleet Management",
    description:
      "Create trips, check driver and vehicle availability, allocate the right resources, and confirm assignments through the Driver App or WhatsApp.",
    image: "/images/features/Create Trip Dashboard Mockup.webp",
    imageAlt: "DriveOps create trip and dispatch workspace",
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
    seoTitle: "Trip Management & Dispatch Software | DriveOps",
    seoDescription:
      "Create trips, allocate with conflict checks, and confirm driver accept/reject with DriveOps dispatch.",
  },
  {
    slug: "live-fleet",
    group: "fleet",
    title: "Live fleet",
    eyebrow: "Fleet Management",
    description:
      "See active vehicles on the ops map fed by Driver App GPS, and share secure customer tracking links for live trip updates.",
    image: "/images/features/Live Fleet Tracking Dashboard.webp",
    imageAlt: "DriveOps live fleet tracking dashboard and map",
    capabilities: [
      "Ops live fleet map (Mapbox) from driver-app GPS",
      "Customer trip tracking via secure link with live updates",
      "Location shared from the Driver App",
      "Visibility for active trips while drivers are on the road",
    ],
    relatedFeatureId: "fleet-tracking",
    seoTitle: "Live Fleet Tracking Software | DriveOps",
    seoDescription:
      "Track active vehicles on an ops map and share customer tracking links with DriveOps live fleet.",
  },
  {
    slug: "maintenance",
    group: "fleet",
    title: "Maintenance",
    eyebrow: "Fleet Management",
    description:
      "Track maintenance jobs, service schedules and logs so vehicles stay ready for the next trip.",
    image: "/images/features/Vehicle Maintenance Dashboard.webp",
    imageAlt: "DriveOps vehicle maintenance dashboard",
    capabilities: [
      "Maintenance logs and summary views",
      "Scheduled maintenance scan jobs",
      "Operational upkeep tracking for fleet readiness",
      "Related vehicle issues from drivers where configured",
    ],
    relatedFeatureId: "vehicle-maintenance",
    seoTitle: "Fleet Maintenance Software | DriveOps",
    seoDescription:
      "Track maintenance jobs and logs to keep fleet vehicles ready with DriveOps.",
  },
  {
    slug: "compliance",
    group: "fleet",
    title: "Compliance vault",
    eyebrow: "Fleet Management",
    description:
      "Keep vehicle and driver documents in one vault, follow expiry dates, and send WhatsApp alerts when renewals are due.",
    image: "/images/features/Vehicle Maintenance Dashboard.webp",
    imageAlt: "DriveOps fleet care and compliance document workspace",
    capabilities: [
      "Central document vault for fleet records",
      "Expiry scanning with WhatsApp compliance alerts",
      "Role-aware ops access to compliance records",
      "Document status and renewal follow-up",
    ],
    relatedFeatureId: "fleet-compliance",
    seoTitle: "Fleet Compliance Document Vault | DriveOps",
    seoDescription:
      "Store fleet documents and get expiry alerts over WhatsApp with the DriveOps compliance vault.",
  },
  {
    slug: "fuel",
    group: "fleet",
    title: "Fuel management",
    eyebrow: "Fleet Management",
    description:
      "Capture fuel logs from drivers and ops so everyday fuel activity stays visible alongside trips and maintenance.",
    image: "/images/hero/fleet-care-fuel-transparent.webp",
    imageAlt: "DriveOps fuel management cards and fleet care visuals",
    capabilities: [
      "Fuel log capture from Driver App and ops",
      "Day-to-day cost visibility for fleet operators",
      "Tied to vehicle and trip operational context",
      "Not a full finance or FASTag integration suite",
    ],
    relatedFeatureId: "fleet-expenses",
    seoTitle: "Fleet Fuel Log Software | DriveOps",
    seoDescription:
      "Record fuel logs from drivers and ops with DriveOps fuel management.",
  },
  {
    slug: "customers",
    group: "fleet",
    title: "Customer management",
    eyebrow: "Fleet Management",
    description:
      "Link customers to trips, send confirmations with tracking links, and bring WhatsApp review replies into the ops inbox.",
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
      "Stay oriented with day-to-day operational summaries for trips, fuel, maintenance, and work that needs attention.",
    image: "/images/hero/DriveOps Live Fleet Dashboard and app.webp",
    imageAlt: "DriveOps operational dashboard for day-to-day fleet visibility",
    capabilities: [
      "Operational dashboards for active fleet work",
      "Fuel and maintenance visibility for daily ops",
      "Needs-attention style operational follow-ups",
      "Connected views of daily fleet work",
    ],
    relatedFeatureId: "fleet-analytics",
    seoTitle: "Fleet Operational Visibility | DriveOps",
    seoDescription:
      "See day-to-day trip, fuel, and maintenance activity together with DriveOps.",
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
    slug: "packages",
    group: "operations",
    title: "Package templates",
    eyebrow: "Operations",
    description:
      "Keep reusable package types and templates for familiar transport work, then generate a trip from an active template when a booking is ready.",
    image: "/images/features/Fleet Trip Management Workflow Infographic.webp",
    imageAlt: "DriveOps trip planning and dispatch workflow visual",
    capabilities: [
      "Reusable package types and templates",
      "Pricing, inclusions and terms on a template",
      "Trip generation from active package templates",
      "Recurring and contract details for applicable package types",
    ],
    seoTitle: "Transport Package Templates | DriveOps",
    seoDescription:
      "Create reusable package types and templates, then generate trips for repeat transport work in DriveOps.",
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
      "Completed trip records linked to operational follow-up",
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
      "Keep drivers and customers informed through supported WhatsApp, push, email, and in-app notifications.",
    image: "/images/features/Connected Taxi Tracking Journey.webp",
    imageAlt: "DriveOps WhatsApp and notification journey for trip operations",
    capabilities: [
      "WhatsApp assignment, confirmation, OTP, compliance, reviews",
      "Mobile push and in-app notifications for drivers",
      "Email where configured for ops events",
      "Trip communication connected to operational events",
    ],
    seoTitle: "Fleet Notifications & WhatsApp Ops | DriveOps",
    seoDescription:
      "Use WhatsApp, push, email, and in-app notifications for connected fleet operations with DriveOps.",
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
    eyebrow: "Operations",
    description:
      "Equip drivers with duty, GPS, trip accept/reject, navigation, trip sheets, fuel logs, vehicle issues, and push notifications—in English, Malayalam, and Hindi.",
    image: "/images/features/Modern Driver Fleet App Interface.webp",
    imageAlt: "DriveOps Driver App for duty, trips, and GPS",
    capabilities: [
      "Duty start/end and trip execution",
      "Accept/reject assignments (online)",
      "GPS upload for live fleet and customer tracking",
      "Trip sheets, fuel logs, and vehicle issues",
      "Languages: English, Malayalam, Hindi",
      "Offline sync for selected driver actions",
    ],
    relatedFeatureId: "driver-management",
    seoTitle: "Driver Mobile App for Fleets | DriveOps",
    seoDescription:
      "Driver App for duty, trips, GPS, trip sheets, fuel, and push notifications in DriveOps.",
  },
  {
    slug: "rentals",
    group: "rentals",
    title: "Self-drive rentals",
    eyebrow: "Rentals",
    description:
      "Run self-drive rental operations alongside chauffeur trips: vehicle availability, reservations, handover, return details, and manual payment records.",
    image: "/images/features/Five-Step Vehicle Rental Workflow.webp",
    imageAlt: "DriveOps five-step self-drive rental workflow",
    capabilities: [
      "Vehicle availability for rental inventory",
      "Reservations and hold expiry automation",
      "Handover and return/inspection field capture",
      "Manual payment recording methods",
      "Rental history linked to vehicle availability",
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
          "Capture return and vehicle condition fields for the rental close-out.",
      },
      {
        id: "payments",
        title: "Payment recording",
        description: "Keep manually recorded payments alongside the rental.",
      },
    ],
    seoTitle: "Self-Drive Rental Software | DriveOps",
    seoDescription:
      "Manage self-drive availability, reservations, handover, return, and manual payment recording with DriveOps.",
  },
]

export function getProductPage(slug: string): ProductPageContent | undefined {
  return PRODUCT_PAGES.find((p) => p.slug === slug)
}

export const PRODUCT_GROUPS = [
  {
    id: "fleet" as const,
    title: "Fleet Management",
    description: "Vehicles, drivers, attendance, trips, live fleet, fleet care, and customers.",
  },
  {
    id: "operations" as const,
    title: "Operations",
    description: "Recurring trips, packages, trip sheets, notifications, alerts, and Driver App.",
  },
  {
    id: "rentals" as const,
    title: "Rentals",
    description: "Self-drive availability through payment recording.",
  },
]
