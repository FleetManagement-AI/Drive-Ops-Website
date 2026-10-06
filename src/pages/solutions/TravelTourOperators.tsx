import SolutionPageLayout, { type SolutionPageContent } from "@/components/SolutionPageLayout"

const page: SolutionPageContent = {
  slug: "travel-tour-operators",
  eyebrow: "Travel & Tour Operators",
  title: "Coordinate tours and scheduled trips",
  highlight: "from one ops workspace.",
  description:
    "Plan scheduled and recurring trips, coordinate drivers and vehicles, keep customers informed with confirmations and tracking links, and run connected tour-day operations. Package records are supported where configured—verify pricing packaging needs in a demo.",
  image: "/images/features/Airport Trip Scheduling Dashboard.webp",
  imageAlt: "DriveOps scheduling dashboard for travel and tour operations",
  capabilities: [
    {
      title: "Scheduled & recurring trips",
      description: "Materialize daily, weekly, or monthly schedules into trip instances.",
      bullets: [
        "Recurring trip schedules",
        "Automatic materialization",
        "Multi-stop itineraries",
      ],
    },
    {
      title: "Driver coordination",
      description: "Assign drivers and confirm via App or WhatsApp.",
      bullets: [
        "Allocate with availability checks",
        "Accept/reject workflows",
        "Multilingual Driver App",
      ],
    },
    {
      title: "Customer updates",
      description: "Confirmations and live tracking without SMS claims.",
      bullets: [
        "WhatsApp confirmation with tracking URL",
        "Live trip visibility for customers",
        "Post-trip WhatsApp review requests",
      ],
    },
    {
      title: "Packages (careful scope)",
      description: "Package records exist in-product; marketing depth varies by tenant setup.",
      bullets: [
        "Package module available in backend/ops",
        "Confirm pricing linkage in a live demo",
        "Do not assume marketplace packaging",
      ],
    },
  ],
  workflow: [
    "Schedule",
    "Materialize",
    "Assign",
    "Confirm",
    "Track",
    "Complete",
  ],
  faqs: [
    {
      q: "Can we run airport and tour schedules repeatedly?",
      a: "Yes. Recurring schedules (daily/weekly/monthly) can materialize trip instances for ongoing dispatch.",
    },
    {
      q: "Do packages include automated pricing engines?",
      a: "Package records are supported, but do not assume a full packaging marketplace or unverified pricing automation. Confirm your workflow in a demo.",
    },
    {
      q: "How do customers stay updated?",
      a: "WhatsApp trip confirmation can include a secure tracking link. SMS delivery is not implemented.",
    },
  ],
  seoTitle: "Travel & Tour Operator Fleet Software | DriveOps",
  seoDescription:
    "Coordinate scheduled trips, recurring tours, driver assignment, and customer tracking for travel and tour operators with DriveOps.",
  keywords:
    "tour operator software, travel fleet management, scheduled trip software India, tour dispatch software",
}

export default function TravelTourOperators() {
  return <SolutionPageLayout page={page} />
}
