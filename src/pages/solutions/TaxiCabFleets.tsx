import SolutionPageLayout, { type SolutionPageContent } from "@/components/SolutionPageLayout"

const page: SolutionPageContent = {
  slug: "taxi-cab-fleets",
  eyebrow: "Taxi & Cab Fleets",
  title: "Run every taxi trip.",
  highlight: "Dispatch with clarity.",
  description:
    "DriveOps helps taxi and cab fleets create trips, allocate drivers and vehicles with conflict checks, confirm via Driver App or WhatsApp accept/reject, share customer tracking links, capture trip sheets, and collect WhatsApp reviews into an ops inbox.",
  image: "/images/features/Create Trip Dashboard Mockup.webp",
  imageAlt: "DriveOps trip creation and dispatch for taxi fleets",
  capabilities: [
    {
      title: "Trip management",
      description: "One-way, round-trip, and full-day trips with pickup, drop, and waypoints.",
      bullets: [
        "Create and manage trip statuses",
        "Stops and itinerary support",
        "Trip sheets after completion",
      ],
    },
    {
      title: "Dispatch",
      description: "Human-in-the-loop allocation—not nearest-vehicle auto-dispatch.",
      bullets: [
        "Conflict and candidate availability checks",
        "Driver accept/reject in App + WhatsApp",
        "Unassigned trip reminders",
      ],
    },
    {
      title: "Drivers & vehicles",
      description: "Registry, duty, imports, and Driver App execution.",
      bullets: [
        "Driver and vehicle master data",
        "Multilingual Driver App (en/ml/hi)",
        "Duty, GPS, fuel, and issues",
      ],
    },
    {
      title: "Live tracking & customers",
      description: "Ops map plus secure customer tracking links.",
      bullets: [
        "Live fleet map from driver GPS",
        "Customer confirmation with tracking URL",
        "WhatsApp review inbox (not Google autopilot)",
      ],
    },
  ],
  workflow: [
    "Create trip",
    "Allocate",
    "Accept/Reject",
    "Live track",
    "Trip sheet",
    "Review",
  ],
  faqs: [
    {
      q: "Does DriveOps auto-dispatch the nearest taxi?",
      a: "No. DriveOps supports allocate flows with availability/conflict checks and driver accept/reject. Nearest-vehicle auto-dispatch and route optimization are not productized.",
    },
    {
      q: "How do drivers get assignments?",
      a: "Through the Driver App and WhatsApp assignment templates with Accept/Reject actions where configured.",
    },
    {
      q: "Can customers track their trip?",
      a: "Yes. Customer trip confirmation can include a secure tracking link with live updates from driver GPS.",
    },
    {
      q: "Are reviews collected into Google Business automatically?",
      a: "No. DriveOps can send WhatsApp review requests and ingest replies into an ops inbox. It is not a Google Business review autopilot.",
    },
  ],
  seoTitle: "Taxi & Cab Fleet Management Software | DriveOps",
  seoDescription:
    "Manage taxi and cab fleets with trip dispatch, Driver App accept/reject, live tracking, trip sheets, and WhatsApp review collection.",
  keywords:
    "taxi fleet management software, cab dispatch software India, taxi operations platform, driver app for taxi fleets",
}

export default function TaxiCabFleets() {
  return <SolutionPageLayout page={page} />
}
