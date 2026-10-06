import SolutionPageLayout, { type SolutionPageContent } from "@/components/SolutionPageLayout"

const page: SolutionPageContent = {
  slug: "self-drive-rentals",
  eyebrow: "Self-Drive Rentals",
  title: "Run rentals alongside",
  highlight: "your chauffeur fleet.",
  description:
    "Manage vehicle availability, reservations and holds, handover, return/inspection fields, and manual payment recording in the same platform as trips—without a payment gateway or automated invoicing.",
  image: "/images/features/Five-Step Vehicle Rental Workflow.webp",
  imageAlt: "DriveOps self-drive rental workflow from availability to settlement",
  capabilities: [
    {
      title: "Vehicle availability",
      description: "See rental inventory readiness on the calendar.",
      bullets: ["Availability for self-drive inventory", "Vehicle registry linkage", "Operational status awareness"],
    },
    {
      title: "Reservations & holds",
      description: "Create reservations with hold expiry handling.",
      bullets: ["Reservations workflow", "Hold expiry automation", "Ops-managed booking lifecycle"],
    },
    {
      title: "Handover & return",
      description: "Capture handover and return/inspection fields.",
      bullets: [
        "Handover recording",
        "Return and inspection fields",
        "Not a separate compliance inspections product",
      ],
    },
    {
      title: "Payment recording",
      description: "Record payments manually in ops.",
      bullets: [
        "Manual payment methods",
        "No online checkout gateway",
        "No automated invoicing claim",
      ],
    },
  ],
  workflow: [
    "Availability",
    "Reservation",
    "Handover",
    "Return",
    "Payment recorded",
  ],
  faqs: [
    {
      q: "Does DriveOps process online rental payments?",
      a: "No. DriveOps supports manual payment recording for rentals. There is no payment gateway checkout or automated invoicing product today.",
    },
    {
      q: "Can rentals and chauffeur trips run in one tenant?",
      a: "Yes. Self-drive rentals are designed to operate alongside chauffeur trip workflows in the same platform.",
    },
    {
      q: "Is return inspection the same as compliance inspections?",
      a: "No. Rental return/inspection fields support the rental close-out. Compliance inspections as a product are placeholder/not marketed.",
    },
  ],
  seoTitle: "Self-Drive Rental Management Software | DriveOps",
  seoDescription:
    "Manage self-drive availability, reservations, handover, return, and manual payment recording with DriveOps rentals.",
  keywords:
    "self drive rental software, vehicle rental management India, rental handover software, fleet rental operations",
}

export default function SelfDriveRentals() {
  return <SolutionPageLayout page={page} />
}
