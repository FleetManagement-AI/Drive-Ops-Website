export type HeroSlideCta = {
  label: string
  href: string
  external?: boolean
}

export type HeroSlide = {
  id: string
  navLabel: string
  /** Compact index label shown before the category pill, e.g. "02 / 07" */
  indexLabel: string
  /** Uppercase category pill text */
  category: string
  /** Segments of the headline; mark highlight segments */
  headline: { text: string; highlight?: boolean }[]
  description: string
  image: string
  imageAlt: string
  primaryCta: HeroSlideCta
  secondaryCta: HeroSlideCta
  showProofRow?: boolean
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "fleet-overview",
    navLabel: "Fleet Overview",
    indexLabel: "01 / 07",
    category: "FLEET OPERATIONS PLATFORM",
    headline: [
      { text: "Run your entire fleet" },
      { text: "\nfrom " },
      { text: "one place.", highlight: true },
    ],
    description:
      "Connect vehicles, drivers, trips, rentals, maintenance, compliance, and live fleet operations in one platform.",
    image: "/images/hero/DriveOps Live Fleet Management Dashboard.webp",
    imageAlt:
      "DriveOps fleet operations dashboard showing today's trips, active vehicles, drivers on duty, and live fleet map",
    primaryCta: {
      label: "Start Free Trial",
      href: "https://driveops.chatserve.in/signup",
      external: true,
    },
    secondaryCta: { label: "Book a Demo", href: "/contact" },
    showProofRow: true,
  },
  {
    id: "trips-dispatch",
    navLabel: "Trips",
    indexLabel: "02 / 07",
    category: "TRIPS & DISPATCH",
    headline: [
      { text: "From trip request\nto assignment,\n" },
      { text: "all in one place.", highlight: true },
    ],
    description:
      "Create trips, manage schedules, find the right driver and vehicle, and dispatch without jumping between calls and spreadsheets.",
    image: "/images/hero/Trip Planner Dashboard Mockup.webp",
    imageAlt:
      "DriveOps trip planner showing create trip form with recommended driver and vehicle assignment",
    primaryCta: {
      label: "Start Free Trial",
      href: "https://driveops.chatserve.in/signup",
      external: true,
    },
    secondaryCta: { label: "See How It Works", href: "/#how-it-works" },
  },
  {
    id: "driver-app",
    navLabel: "Driver App",
    indexLabel: "03 / 07",
    category: "DRIVER APP & WHATSAPP",
    headline: [
      { text: "The driver knows\nwhat to do.\n" },
      { text: "You know what's happening.", highlight: true },
    ],
    description:
      "Send trip assignments through WhatsApp and let drivers manage their trips from the Driver App.",
    image: "/images/hero/WhatsApp Trip Assignment to Mobile App.webp",
    imageAlt:
      "WhatsApp trip assignment with Accept and Reject alongside the DriveOps Driver App My Trips screen",
    primaryCta: {
      label: "Start Free Trial",
      href: "https://driveops.chatserve.in/signup",
      external: true,
    },
    secondaryCta: { label: "See How It Works", href: "/#how-it-works" },
  },
  {
    id: "live-fleet",
    navLabel: "Live Fleet",
    indexLabel: "04 / 07",
    category: "LIVE FLEET VISIBILITY",
    headline: [
      { text: "Know where your\n" },
      { text: "active fleet", highlight: true },
      { text: " is." },
    ],
    description:
      "See active vehicles on the map and stay updated while drivers are on the road.",
    image: "/images/hero/DriveOps Live Fleet Dashboard and app.webp",
    imageAlt:
      "DriveOps live fleet map with vehicle markers and Driver App live location view",
    primaryCta: { label: "Preview Fleet Map", href: "/fleet-map" },
    secondaryCta: { label: "See How It Works", href: "/#how-it-works" },
  },
  {
    id: "fleet-care",
    navLabel: "Fleet Care",
    indexLabel: "05 / 07",
    category: "FLEET CARE",
    headline: [
      { text: "Keep your fleet\n" },
      { text: "ready for the next trip.", highlight: true },
    ],
    description:
      "Manage fuel records, maintenance jobs, vehicle documents and driver compliance from one place.",
    image: "/images/hero/fleet-care-fuel-transparent.webp",
    imageAlt:
      "DriveOps fleet care cards for fuel management, maintenance, compliance, and maintenance schedule",
    primaryCta: {
      label: "Start Free Trial",
      href: "https://driveops.chatserve.in/signup",
      external: true,
    },
    secondaryCta: { label: "See How It Works", href: "/#how-it-works" },
  },
  {
    id: "reviews-alerts",
    navLabel: "Reviews & Alerts",
    indexLabel: "06 / 07",
    category: "REVIEWS & ALERTS",
    headline: [
      { text: "Stay on top of every trip\n" },
      { text: "after assignment.", highlight: true },
    ],
    description:
      "Automate trip sheets, collect customer feedback and stay informed when trips need attention.",
    image: "/images/hero/Fleet Management Dashboard Cards review alerts.webp",
    imageAlt:
      "DriveOps cards for trip sheet management, customer reviews, and unassigned trip alerts",
    primaryCta: {
      label: "Start Free Trial",
      href: "https://driveops.chatserve.in/signup",
      external: true,
    },
    secondaryCta: { label: "See How It Works", href: "/#how-it-works" },
  },
  {
    id: "rentals",
    navLabel: "Rentals",
    indexLabel: "07 / 07",
    category: "SELF-DRIVE RENTALS",
    headline: [
      { text: "Run rentals\n" },
      { text: "alongside your fleet.", highlight: true },
    ],
    description:
      "Manage vehicle availability, bookings, handover, return and rental operations from the same platform.",
    image: "/images/hero/Vehicle Availability Dashboard.webp",
    imageAlt:
      "DriveOps self-drive rental availability calendar and reservation workspace",
    primaryCta: { label: "Explore Rentals", href: "/product/rentals" },
    secondaryCta: { label: "See How It Works", href: "/#how-it-works" },
  },
]
