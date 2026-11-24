import SolutionPageLayout, { type SolutionPageContent } from "@/components/SolutionPageLayout"

const page: SolutionPageContent = {
  slug: "corporate-transport",
  eyebrow: "Corporate Transport",
  title: "Employee transport that stays",
  highlight: "on schedule.",
  seoH1: "Corporate Fleet Management Software",
  description:
    "Corporate fleet management software for employee transport—recurring schedules, multi-location ops, driver duty and assignment, live fleet visibility, and trip sheets for contracted routes.",
  image: "/images/features/Five-Step Recurring Trip Workflow.webp",
  imageAlt: "DriveOps corporate fleet management recurring trip workflow for employee transport",
  capabilities: [
    {
      title: "Recurring employee schedules",
      description: "Materialize daily/weekly/monthly routes into trips.",
      bullets: [
        "Recurring schedules",
        "Automatic trip materialization",
        "Allocate drivers and vehicles",
      ],
    },
    {
      title: "Multi-location operations",
      description: "Location-scoped ops for multi-branch fleets.",
      bullets: [
        "Location-aware operational scope",
        "Role-based access for dispatchers and managers",
        "Multi-tenant isolation",
      ],
    },
    {
      title: "Drivers & duty",
      description: "Duty and assignment without overclaiming Command Center nav.",
      bullets: [
        "Driver App duty start/end",
        "Assignment accept/reject",
        "Shifts/attendance support in ops",
      ],
    },
    {
      title: "Visibility & close-out",
      description: "Live fleet and trip sheets for contracted routes.",
      bullets: [
        "Live fleet map from driver GPS",
        "Trip sheets for completed routes",
        "Operational summaries—not a BI suite",
      ],
    },
  ],
  workflow: [
    "Define schedule",
    "Materialize",
    "Assign",
    "Duty on",
    "Live track",
    "Trip sheet",
  ],
  faqs: [
    {
      q: "Can different branches operate their own routes?",
      a: "Yes. DriveOps supports multi-tenant isolation and location-scoped operations so teams work in the right branch context.",
    },
    {
      q: "Is there a dedicated Command Center product?",
      a: "Command Center and attendance exist in the product surface but may not appear in every sidebar. Describe duty/attendance based on what your tenant exposes—confirm in a demo.",
    },
    {
      q: "Do you provide advanced corporate reporting/BI?",
      a: "No. Market day-to-day operational visibility only. Advanced reports/finance modules are not productized for marketing claims.",
    },
  ],
  seoTitle: "Corporate Fleet Management Software | DriveOps",
  seoDescription:
    "Corporate fleet management software for employee transport—recurring schedules, multi-location ops, drivers, live fleet, and trip sheets.",
  keywords:
    "corporate fleet management software, corporate transport software, employee shuttle management, recurring trip software",
}

export default function CorporateTransport() {
  return <SolutionPageLayout page={page} />
}
