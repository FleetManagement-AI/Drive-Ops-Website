import type { ProductPageContent } from "./product-pages"
import type { FeatureContent } from "./seo-content"

export const priorityFeatures: Record<string, FeatureContent> = {
  "fleet-compliance": {
    keyword: "Vehicle Document Expiry Tracking",
    title: "Vehicle Document Expiry Tracking & Reminders | DriveOps",
    description: "Track vehicle insurance, permits, PUC, fitness certificates and driver licence expiry dates. Keep documents together and send configured WhatsApp alerts.",
    h1: "Vehicle document expiry tracking",
    h2: "Keep insurance, permits, certificates and driving licences ready for the next trip.",
    heroCopy: "DriveOps gives Indian fleet operators a shared record of vehicle and driver documents with expiry dates. Store RC, insurance, permits, PUC, fitness certificates and driving licences against the relevant record. Scheduled expiry scanning helps your team identify renewals and receive WhatsApp alerts when configured.",
    benefits: [
      { title: "One document record", desc: "Keep vehicle and driver documents attached to the right fleet record instead of scattered folders and chat threads." },
      { title: "Expiry date tracking", desc: "Review recorded insurance, permit, PUC, fitness certificate and licence expiry dates so the team can arrange renewals." },
      { title: "WhatsApp expiry alerts", desc: "Configured WhatsApp messages help operations staff follow up on documents needing attention." },
      { title: "Optional document extraction", desc: "OCR can assist field entry when enabled. Manual document entry remains available; extraction is not always on." },
    ],
    faqs: [
      { q: "How can I track vehicle document expiry dates?", a: "Store each document against its vehicle or driver and record its expiry date. DriveOps scans expiry records so operations staff can identify documents needing renewal." },
      { q: "Which vehicle and driver documents can I store?", a: "You can store registration certificates, vehicle insurance, permits, PUC and fitness certificates, driving licences and related fleet documents." },
      { q: "Can DriveOps send vehicle insurance and permit renewal reminders?", a: "Expiry scanning supports reminders for recorded document dates, including insurance and permits. WhatsApp alerts depend on your messaging configuration." },
      { q: "Does DriveOps renew documents or guarantee legal compliance?", a: "No. DriveOps helps organize documents and expiry follow-up. Your team remains responsible for checking requirements and completing renewals." },
      { q: "Is OCR required for document tracking?", a: "No. OCR is optional and configurable. You can enter details and store documents manually." },
    ],
  },
  "fleet-expenses": {
    keyword: "Digital Fuel Logs for Fleets",
    title: "Digital Fuel Logs & Driver Refuelling Records | DriveOps",
    description: "Record fleet refuelling with quantity, price, odometer readings and receipts. Drivers and office teams can keep vehicle fuel entries in DriveOps.",
    h1: "Digital fuel logs for fleet operators",
    h2: "Record each refuelling stop with the details your office team needs.",
    heroCopy: "Replace paper diesel logs and fuel receipts in chat threads with digital fuel records. Drivers can submit fuel entries from the Driver App, while operations staff can record and review entries in DriveOps. Quantity, price, odometer readings and receipts give each refuelling event useful context.",
    benefits: [
      { title: "Refuelling details", desc: "Record fuel quantity, price and odometer readings against the relevant vehicle." },
      { title: "Driver fuel logging", desc: "Drivers submit fuel records through the same app they use for duty and trips." },
      { title: "Fuel receipt records", desc: "Keep receipt attachments with entries so the office can refer to the supporting record." },
      { title: "Everyday cost context", desc: "Review recorded fuel costs alongside maintenance activity to understand daily operating inputs." },
    ],
    faqs: [
      { q: "What should a fleet fuel log include?", a: "A useful fuel log records the vehicle, fuel quantity, price, odometer reading and supporting receipt. DriveOps supports these details in fuel entries." },
      { q: "Can drivers record diesel and fuel purchases from their phones?", a: "Yes. Drivers can submit fuel logs through the DriveOps Driver App, and operations staff can also enter fuel records." },
      { q: "How can office staff review fuel entries?", a: "Operations staff can review recorded fuel entries and their associated vehicle details and receipts in DriveOps." },
      { q: "Does fuel cost tracking use vehicle sensors?", a: "No. These are fuel records entered by drivers or operations staff. DriveOps does not provide fuel tank sensors, fuel theft detection or automatic fuel-card feeds." },
      { q: "Is this a full fleet expense or accounting system?", a: "No. Fuel entries and maintenance costs provide operational context. FASTag reconciliation, automated invoicing and a vehicle profit-and-loss engine are not included." },
    ],
  },
  "whatsapp-review-management": {
    keyword: "WhatsApp Review Collection for Transport Operators",
    title: "WhatsApp Review Collection for Transport Operators | DriveOps",
    description: "Request passenger feedback after trips through WhatsApp and review replies in the DriveOps operations inbox. Keep customer feedback connected to your team.",
    h1: "WhatsApp review collection after trips",
    h2: "Ask passengers for feedback and bring their replies into your operations inbox.",
    heroCopy: "DriveOps helps taxi, travel and passenger transport operators collect customer feedback through WhatsApp. Send a post-trip review request through configured ChatServe templates. Incoming replies are collected in the operations inbox, where staff can review feedback and decide on follow-up.",
    benefits: [
      { title: "Post-trip feedback requests", desc: "Ask for feedback through configured WhatsApp review messages after a trip." },
      { title: "A shared operations inbox", desc: "Bring incoming WhatsApp replies into DriveOps so customer feedback is available to the team." },
      { title: "Practical customer follow-up", desc: "Review passenger comments to identify questions or service concerns that need staff attention." },
      { title: "Connected customer communication", desc: "Use the same WhatsApp channel that supports trip confirmations and customer tracking links." },
    ],
    faqs: [
      { q: "How can a taxi operator collect customer feedback on WhatsApp?", a: "Use a configured post-trip review template to request feedback. DriveOps collects incoming WhatsApp replies in the operations inbox for staff to review." },
      { q: "Where do passenger review replies appear?", a: "Incoming review replies are ingested into the DriveOps operations inbox, where the team can review them and decide how to follow up." },
      { q: "Does the customer need a DriveOps account?", a: "The feedback exchange takes place through WhatsApp; passengers do not need to sign in to the operations platform to reply." },
      { q: "Does DriveOps publish customer reviews to Google?", a: "No. DriveOps collects WhatsApp feedback. It does not automatically publish Google Business reviews or manage public review sites." },
      { q: "Does DriveOps send SMS review requests or provide a public review form?", a: "No. The documented review workflow uses WhatsApp requests and inbound replies, rather than SMS or a public web review form." },
    ],
  },
}

export const priorityProducts: Record<string, Partial<ProductPageContent>> = {
  compliance: {
    title: "Fleet compliance management",
    description: "Organize vehicle and driver documents, track expiry dates and receive configured WhatsApp alerts. DriveOps helps Indian fleet teams stay on top of insurance, permits, PUC, fitness certificates and driving licences.",
    seoTitle: "Fleet Compliance Management Software | DriveOps",
    seoDescription: "Manage fleet documents, vehicle insurance, permits and driver licences in DriveOps. Track expiry dates and receive configured WhatsApp renewal alerts.",
    primaryKeyword: "fleet compliance management software",
    supportingKeywords: ["vehicle compliance management India", "fleet document management", "vehicle and driver document tracking"],
    capabilities: ["Vehicle and driver document storage linked to fleet records", "Expiry tracking for insurance, permits, PUC, fitness certificates and licences", "Scheduled expiry scanning and configured WhatsApp alerts", "Optional OCR extraction alongside manual document entry"],
    workflow: ["Choose vehicle or driver", "Store document and expiry", "Review expiry status", "Receive configured alerts", "Arrange renewal and update record"],
    faqs: [
      { q: "What is fleet compliance management in DriveOps?", a: "It is a document and expiry management workflow for vehicles and drivers. Store records, track expiry dates and follow up on configured alerts from one platform." },
      { q: "Who can use DriveOps for vehicle compliance management?", a: "Indian taxi, travel, corporate transport, goods and self-drive rental operators can organize vehicle and driver documents alongside their fleet operations." },
      { q: "Can I manage insurance, permits and driving licences together?", a: "Yes. Store vehicle documents and driver licences against the relevant fleet records, with expiry dates for follow-up." },
      { q: "How do compliance alerts work?", a: "Scheduled scans identify recorded document expiries. WhatsApp notifications can alert the team when the relevant messaging configuration is enabled." },
      { q: "Does this include inspections or automatic renewals?", a: "No. The supported scope is document storage, expiry tracking and configured alerts. Staff arrange renewals; compliance inspections and always-on OCR are not included." },
    ],
  },
  fuel: {
    title: "Fleet fuel management and logs",
    description: "Keep vehicle fuel records in one place. Drivers and office teams can record refuelling quantity, price, odometer readings and receipts so daily fuel activity is easier to review.",
    seoTitle: "Fleet Fuel Management & Fuel Logs | DriveOps",
    seoDescription: "Record vehicle fuel purchases, diesel logs, odometer readings and receipts. Manage fuel entries from drivers and office teams with DriveOps.",
    primaryKeyword: "fleet fuel management software",
    supportingKeywords: ["fleet fuel log software", "vehicle fuel records", "diesel log management", "fleet fuel cost tracking"],
    capabilities: ["Fuel entry capture from the Driver App and operations console", "Quantity, price and odometer readings for refuelling records", "Receipts associated with fuel entries", "Vehicle fuel records alongside daily trip and maintenance context"],
    workflow: ["Select vehicle", "Record refuelling details", "Attach receipt", "Submit fuel entry", "Review records in operations"],
    faqs: [
      { q: "What does DriveOps fuel management cover?", a: "DriveOps records fuel entries from drivers and operations staff, including quantity, price, odometer readings and receipts. It supports everyday fuel record management." },
      { q: "Can small taxi and travel fleets use digital fuel logs?", a: "Yes. Drivers can submit refuelling details through the Driver App, while office teams record and review vehicle fuel records in DriveOps." },
      { q: "Can I keep receipts with vehicle fuel entries?", a: "Yes. Fuel logs support receipt associations alongside quantity, price and odometer details." },
      { q: "Can staff see fuel costs alongside maintenance records?", a: "Fuel entries and maintenance job costs provide operational context for day-to-day fleet spending. They are not a full accounting or profitability suite." },
      { q: "Does DriveOps measure tank levels or detect fuel theft?", a: "No. Fuel management is based on recorded entries. Fuel sensors, theft detection, FASTag reconciliation and automated fuel-card integrations are not documented capabilities." },
    ],
  },
  customers: {
    description: "Keep customer records connected to trips. Share WhatsApp confirmations and secure live tracking links so passengers have their journey details in one place.",
    capabilities: ["Customer records linked to trip operations", "Configured WhatsApp trip confirmations", "Secure customer tracking links", "Related review-management workflow for post-trip feedback"],
    relatedFeatureId: undefined,
    seoDescription: "Manage trip customer records, WhatsApp confirmations and secure customer tracking links with DriveOps.",
  },
  alerts: { relatedFeatureId: undefined },
}

export const reviewProduct: ProductPageContent = {
  slug: "reviews", group: "operations", title: "Customer review management", eyebrow: "Operations",
  description: "Collect passenger feedback through WhatsApp and review incoming replies in a shared operations inbox. DriveOps helps Indian taxi, travel and transport teams keep post-trip feedback visible to the people running the service.",
  image: "/images/hero/Fleet Management Dashboard Cards review alerts.webp",
  imageAlt: "DriveOps customer review and operational alert cards",
  capabilities: ["Post-trip WhatsApp review requests through configured templates", "Incoming customer feedback collected in the operations inbox", "Shared visibility for staff reviewing passenger replies", "Connected WhatsApp customer communication and tracking workflow"],
  workflow: ["Complete the trip", "Send configured review request", "Customer replies on WhatsApp", "Review feedback in the inbox", "Staff decide on follow-up"],
  seoTitle: "Customer Review Management for Fleets | DriveOps",
  seoDescription: "Collect passenger feedback through WhatsApp and review replies in the DriveOps operations inbox. Customer review management for taxi and transport fleets.",
  primaryKeyword: "customer review management for fleet operators",
  supportingKeywords: ["passenger feedback management", "taxi customer feedback software", "post-trip review management"],
  relatedFeatureId: "whatsapp-review-management",
  faqs: [
    { q: "How does customer review management work in DriveOps?", a: "Operators send configured WhatsApp review requests after trips. Incoming customer replies are collected in the operations inbox for staff to review and follow up." },
    { q: "Who is this feedback workflow for?", a: "It is designed for taxi, travel and passenger transport teams that want customer feedback available alongside everyday fleet operations." },
    { q: "Can the office team review passenger feedback in one place?", a: "Yes. Inbound WhatsApp review messages appear in the DriveOps operations inbox instead of relying only on separate personal chat threads." },
    { q: "Does DriveOps automate every review follow-up?", a: "No. Requests use configured WhatsApp messaging and replies are ingested into the inbox. Staff review feedback and decide on follow-up; automatic sentiment analysis and ticket workflows are not claimed." },
    { q: "Is this Google review management software?", a: "No. DriveOps manages the WhatsApp feedback workflow. It does not publish reviews to Google Business or synchronize public review platforms." },
  ],
}
