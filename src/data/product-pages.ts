export type ProductPageContent = {
  slug: string
  title: string
  headline: string
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
  title: "Everything your fleet needs to move, in one place.",
  description:
    "From the first booking to the last vehicle check, explore the connected tools that help your team plan work, keep people informed, and protect fleet readiness.",
}

export const PRODUCT_PAGES: ProductPageContent[] = [
  {
    slug: "vehicles",
    group: "fleet",
    title: "Vehicle management",
    headline: "Know which vehicle is ready before you promise the trip.",
    eyebrow: "Fleet Management",
    description:
      "Maintain your fleet registry, vehicle status, and document readiness so dispatch and rentals start from accurate vehicle data.",
    image: "/images/features/DriveOps Fleet Dashboard Workspace.webp",
    imageAlt: "DriveOps operator workspace with vehicle records and live fleet status",
    capabilities: [
      "Keep vehicle profiles and operational status in one fleet register",
      "Bring existing vehicle records in through bulk imports",
      "See reported issues before assigning a vehicle",
      "Keep document readiness close to each vehicle record",
    ],
    workflow: ["Add vehicles", "Check status", "Review documents", "Assign with confidence"],
    relatedFeatureId: "vehicle-management",
    seoTitle: "Vehicle Management Software | DriveOps",
    seoDescription:
      "Manage fleet vehicles, imports, issues, and document readiness in DriveOps vehicle management.",
  },
  {
    slug: "drivers",
    group: "fleet",
    title: "Driver management",
    headline: "Give every driver a clear place in the plan.",
    eyebrow: "Fleet Management",
    description:
      "Keep driver profiles, duty, and assignments organized—and give drivers a mobile app in English, Malayalam, and Hindi.",
    image: "/images/features/Modern Driver Fleet App Interface.webp",
    imageAlt: "DriveOps Driver App interface for trip and duty management",
    capabilities: [
      "Keep driver profiles and assignments organized",
      "Bring driver records in through bulk imports",
      "See duty and attendance alongside dispatch decisions",
      "Give drivers app access in English, Malayalam, and Hindi",
    ],
    workflow: ["Add drivers", "Plan duty", "Assign trips", "Stay connected in the app"],
    relatedFeatureId: "driver-management",
    seoTitle: "Driver Management Software | DriveOps",
    seoDescription:
      "Manage drivers, duty, imports, and multilingual Driver App access with DriveOps.",
  },
  {
    slug: "attendance-duty",
    group: "fleet",
    title: "Attendance & duty",
    headline: "Start each shift knowing who is available.",
    eyebrow: "Fleet Management",
    description:
      "Plan driver work schedules, see today's attendance and duty, and keep leave and worked time close to dispatch decisions.",
    image: "/images/features/Modern Driver Fleet App Interface.webp",
    imageAlt: "DriveOps Driver App showing assigned trips and duty actions",
    capabilities: [
      "Today's duty and attendance records",
      "Driver work schedules and calendar views",
      "Worked time and leave follow-up",
      "Driver App duty sessions linked to attendance where configured",
    ],
    workflow: ["Build schedules", "Record attendance", "Review duty", "Allocate available drivers"],
    seoTitle: "Driver Attendance & Duty Software | DriveOps",
    seoDescription:
      "Plan driver schedules and track attendance, duty hours and leave alongside fleet operations in DriveOps.",
  },
  {
    slug: "trips-dispatch",
    group: "fleet",
    title: "Trips & dispatch",
    headline: "Go from booking to confirmed assignment.",
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
    headline: "See the work moving, as it happens.",
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
    workflow: ["Driver starts trip", "Location reaches ops", "Share tracking link", "Follow the journey"],
    relatedFeatureId: "fleet-tracking",
    seoTitle: "Live Fleet Tracking Software | DriveOps",
    seoDescription:
      "Track active vehicles on an ops map and share customer tracking links with DriveOps live fleet.",
  },
  {
    slug: "maintenance",
    group: "fleet",
    title: "Maintenance",
    headline: "Keep service due dates ahead of breakdowns.",
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
    workflow: ["Log vehicle issue", "Plan service", "Track work", "Return to ready"],
    relatedFeatureId: "vehicle-maintenance",
    seoTitle: "Fleet Maintenance Software | DriveOps",
    seoDescription:
      "Track maintenance jobs and logs to keep fleet vehicles ready with DriveOps.",
  },
  {
    slug: "compliance",
    group: "fleet",
    title: "Compliance vault",
    headline: "Bring document readiness into view.",
    eyebrow: "Fleet Management",
    description:
      "Keep vehicle and driver documents in one vault, follow expiry dates, and send WhatsApp alerts when renewals are due.",
    image: "/images/hero/Fleet Management Dashboard compliance maintenantce fuel.webp",
    imageAlt: "DriveOps fleet care workspace showing document expiry and renewal status",
    capabilities: [
      "Central document vault for fleet records",
      "Expiry scanning with WhatsApp compliance alerts",
      "Role-aware ops access to compliance records",
      "Document status and renewal follow-up",
    ],
    workflow: ["Add documents", "Watch expiry dates", "Alert the team", "Renew with confidence"],
    relatedFeatureId: "fleet-compliance",
    seoTitle: "Fleet Compliance Document Vault | DriveOps",
    seoDescription:
      "Store fleet documents and get expiry alerts over WhatsApp with the DriveOps compliance vault.",
  },
  {
    slug: "fuel",
    group: "fleet",
    title: "Fuel management",
    headline: "Know where every fuel entry belongs.",
    eyebrow: "Fleet Management",
    description:
      "Capture fuel logs from drivers and ops so everyday fuel activity stays visible alongside trips and maintenance.",
    image: "/images/features/Vehicle Maintenance Dashboard.webp",
    imageAlt: "DriveOps fleet care overview with fuel activity next to maintenance and compliance",
    capabilities: [
      "Fuel log capture from Driver App and ops",
      "Day-to-day cost visibility for fleet operators",
      "Tied to vehicle and trip operational context",
      "Spot fuel activity alongside maintenance and other fleet care work",
    ],
    workflow: ["Record a fill-up", "Link vehicle and driver", "Review fuel activity", "Follow up on exceptions"],
    relatedFeatureId: "fleet-expenses",
    seoTitle: "Fleet Fuel Log Software | DriveOps",
    seoDescription:
      "Record fuel logs from drivers and ops with DriveOps fuel management.",
  },
  {
    slug: "customers",
    group: "fleet",
    title: "Customer management",
    headline: "Keep customers in the trip conversation.",
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
    workflow: ["Add customer", "Confirm trip", "Share tracking", "Request feedback"],
    relatedFeatureId: "customer-review-collection",
    seoTitle: "Fleet Customer Management | DriveOps",
    seoDescription:
      "Manage trip customers, tracking links, and WhatsApp review collection with DriveOps.",
  },
  {
    slug: "analytics",
    group: "fleet",
    title: "Operational visibility",
    headline: "Give the operations team one clear picture.",
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
    workflow: ["Open the dashboard", "See active work", "Spot follow-ups", "Act on what matters"],
    relatedFeatureId: "fleet-analytics",
    seoTitle: "Fleet Operational Visibility | DriveOps",
    seoDescription:
      "See day-to-day trip, fuel, and maintenance activity together with DriveOps.",
  },
  {
    slug: "recurring-trips",
    group: "operations",
    title: "Recurring trips",
    headline: "Put repeat work on a dependable schedule.",
    eyebrow: "Operations",
    description:
      "Define daily, weekly, or monthly trip schedules and let automatic materialization create upcoming trip instances for dispatch.",
    image: "/images/features/Airport Trip Scheduling Dashboard.webp",
    imageAlt: "DriveOps recurring schedule and automatically created trips",
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
    headline: "Turn familiar work into a reusable plan.",
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
    workflow: ["Define package", "Save terms", "Choose a template", "Create the trip"],
    seoTitle: "Transport Package Templates | DriveOps",
    seoDescription:
      "Create reusable package types and templates, then generate trips for repeat transport work in DriveOps.",
  },
  {
    slug: "trip-sheets",
    group: "operations",
    title: "Trip sheets",
    headline: "Close every journey with the details in place.",
    eyebrow: "Operations",
    description:
      "Capture post-trip details from drivers and ops so completed trips stay documented for follow-up and customer communication.",
    image: "/images/features/Trip Assignment App Flow.webp",
    imageAlt: "DriveOps Driver App trip and completed trip sheet flow",
    capabilities: [
      "Trip sheet draft and submit flows",
      "Driver App and ops trip sheet support",
      "WhatsApp trip sheet messaging where configured",
      "Completed trip records linked to operational follow-up",
    ],
    workflow: ["Run the trip", "Capture details", "Submit trip sheet", "Review the record"],
    seoTitle: "Digital Trip Sheets | DriveOps",
    seoDescription:
      "Capture post-trip sheets from drivers and ops with DriveOps trip sheets.",
  },
  {
    slug: "notifications",
    group: "operations",
    title: "Notifications",
    headline: "Keep every person in the loop.",
    eyebrow: "Operations",
    description:
      "Keep drivers and customers informed through supported WhatsApp, push, email, and in-app notifications.",
    image: "/images/hero/WhatsApp Trip Assignment to Mobile App.webp",
    imageAlt: "DriveOps WhatsApp trip assignment connected to the Driver App",
    capabilities: [
      "WhatsApp assignment, confirmation, OTP, compliance, reviews",
      "Mobile push and in-app notifications for drivers",
      "Email where configured for ops events",
      "Trip communication connected to operational events",
    ],
    workflow: ["A trip changes", "Send the right update", "Driver or customer responds", "Ops stays informed"],
    seoTitle: "Fleet Notifications & WhatsApp Ops | DriveOps",
    seoDescription:
      "Use WhatsApp, push, email, and in-app notifications for connected fleet operations with DriveOps.",
  },
  {
    slug: "alerts",
    group: "operations",
    title: "Alerts",
    headline: "See what needs attention before work is missed.",
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
    workflow: ["Detect an exception", "Surface it to ops", "Take action", "Keep work moving"],
    relatedFeatureId: "whatsapp-review-management",
    seoTitle: "Fleet Alerts & Follow-ups | DriveOps",
    seoDescription:
      "Unassigned trip reminders, document expiry alerts, and review inbox follow-ups in DriveOps.",
  },
  {
    slug: "driver-app",
    group: "operations",
    title: "Driver App",
    headline: "Put the next action in every driver's hand.",
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
    workflow: ["Start duty", "Accept assignment", "Navigate and run", "Close out the trip"],
    relatedFeatureId: "driver-management",
    seoTitle: "Driver Mobile App for Fleets | DriveOps",
    seoDescription:
      "Driver App for duty, trips, GPS, trip sheets, fuel, and push notifications in DriveOps.",
  },
  {
    slug: "rentals",
    group: "rentals",
    title: "Self-drive rentals",
    headline: "Run self-drive bookings from availability to return.",
    eyebrow: "Rentals",
    description:
      "Run self-drive rental operations alongside chauffeur trips: vehicle availability, reservations, handover, return details, and manual payment records.",
    image: "/images/features/Car Rental Handover Dashboard in Sunshine.webp",
    imageAlt: "DriveOps rental availability, vehicle handover and payment recording workspace",
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
