const appUrl = "https://app.driveopsfleet.com"

export const siteConfig = {
  name: "DriveOps",
  shortName: "DriveOps",
  siteUrl: (typeof process !== "undefined" && process.env?.VITE_SITE_URL) || (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) || "https://www.driveopsfleet.com",
  appUrl,
  loginUrl: `${appUrl}/login`,
  signupUrl: `${appUrl}/signup`,
  signupAccountUrl: `${appUrl}/signup/account`,
  title: "DriveOps | Manage & Operate Your Fleet from One Platform",
  description:
    "Plan trips, assign drivers and vehicles, run the Driver App, track live fleet location, manage fuel, maintenance, compliance documents, WhatsApp communication, customer reviews, and self-drive rentals—with DriveOps.",
  ogImage: "/images/hero/DriveOps Live Fleet Management Dashboard.webp",
  contact: {
    telephone: "+91 98461 99883",
    supportTelephone: "+91 98478 51049",
    email: "driveopsfleet@gmail.com",
    address: {
      streetAddress: "Kochi",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      postalCode: "682001",
      addressCountry: "IN",
    },
  },
  social: {
    twitter: "@DriveOpsHQ",
    instagram: "https://www.instagram.com/driveopsfleet",
    facebook: "https://www.facebook.com/profile.php?id=61593885576574",
    linkedin: "#",
  },
};
