export const siteConfig = {
  name: "DriveOps",
  shortName: "DriveOps",
  siteUrl: (typeof process !== "undefined" && process.env?.VITE_SITE_URL) || (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) || "https://driveops.info.chatserve.in",
  title: "DriveOps | Fleet Management Software for Transport Businesses",
  description: "DriveOps is an all-in-one fleet management software for businesses in India. Manage vehicles, trips, drivers, maintenance, tracking, expenses and fleet profitability from one platform.",
  ogImage: "/images/og-image.jpg",
  contact: {
    telephone: "+91-98461-99883",
    supportTelephone: "+91-98478-51049",
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
  },
};
