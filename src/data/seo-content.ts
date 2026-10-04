export type FeatureContent = {
  keyword: string;
  title: string; // Meta Title
  description: string; // Meta Description
  h1: string;
  h2: string;
  heroCopy: string;
  benefits: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const featureContent: Record<string, FeatureContent> = {
  "fleet-tracking": {
    keyword: "Fleet Tracking Software",
    title: "Live Fleet Tracking Software in India | DriveOps",
    description: "Monitor commercial vehicles on a live ops map fed by Driver App GPS. Share secure customer tracking links. Poll + WebSocket updates—no hardware trackers required.",
    h1: "Live Fleet Tracking for Operators",
    h2: "See active vehicles on a Mapbox ops map, with secure links for customers to follow their trip.",
    heroCopy: "DriveOps shows where your fleet is during active trips using GPS from the Driver App. Operators get a live Mapbox map with poll and WebSocket updates. Customers get a secure tracking link—without buying proprietary GPS boxes.",
    benefits: [
      { title: "Live Operations Map", desc: "View active trip vehicles on an interactive Mapbox map in the ops console." },
      { title: "Driver App GPS", desc: "Locations come from the driver mobile app while on duty—no hardware telematics devices required." },
      { title: "Customer Tracking Links", desc: "Share a secure link so passengers can follow trip progress with live updates." },
      { title: "Poll + WebSocket Updates", desc: "Ops and customer views refresh via REST polling and WebSocket—not a separate hardware stream." }
    ],
    faqs: [
      { q: "How does fleet tracking work in DriveOps?", a: "While drivers are on duty, the Driver App sends GPS updates. The ops live fleet map (Mapbox) shows those positions. Customers can follow a trip via a secure tracking link." },
      { q: "Does DriveOps require external GPS hardware?", a: "No. Tracking is designed around the Driver App. DriveOps does not sell or require hardware GPS trackers." },
      { q: "Can customers see the vehicle live?", a: "Yes. After a trip is confirmed, customers can receive a tracking URL (typically via WhatsApp) to follow the trip." }
    ]
  },
  "gps-vehicle-tracking": {
    keyword: "GPS Vehicle Tracking",
    title: "GPS Vehicle Tracking via Driver App | DriveOps",
    description: "Live GPS visibility for commercial fleets using the Driver App—ops Mapbox map, customer tracking links, no hardware lock-in.",
    h1: "GPS Vehicle Tracking for Fleet Ops",
    h2: "Operational visibility from driver smartphones—map for dispatchers, link for customers.",
    heroCopy: "Know where assigned vehicles are during active work. DriveOps GPS visibility is powered by the Driver App, shown on the ops live fleet map, with optional customer tracking links.",
    benefits: [
      { title: "Live Fleet Map", desc: "Dispatchers see active vehicles on a Mapbox operations map." },
      { title: "No Hardware Required", desc: "Start with driver mobile GPS. Hardware telematics devices are not part of the product." },
      { title: "Trip Context", desc: "Tracking is tied to duty, trips, and assignments—not a standalone consumer tracker app." }
    ],
    faqs: [
      { q: "Do I need to install a physical GPS tracker?", a: "No. DriveOps uses Driver App GPS for live fleet visibility. It does not require hardware GPS trackers." },
      { q: "How do updates reach the dashboard?", a: "Location updates are delivered to ops via polling and WebSocket connections from the platform." },
      { q: "Is this nearest-vehicle auto-dispatch?", a: "No. DriveOps supports allocate-and-assign with candidate and conflict checks. Drivers accept or reject. It does not claim nearest-vehicle auto-dispatch algorithms." }
    ]
  },
  "vehicle-management": {
    keyword: "Vehicle Fleet Management",
    title: "Vehicle Fleet Management Software | DriveOps",
    description: "Centralize vehicle records, compliance documents, and fleet status. Import vehicles, track documents with expiry alerts, and manage day-to-day fleet ops.",
    h1: "Vehicle Fleet Management Software",
    h2: "Organize vehicle records, compliance documents, and utilization status in one registry.",
    heroCopy: "DriveOps Vehicle Fleet Management keeps commercial vehicle records, status, and compliance documents in one place—so ops teams are not chasing paper files across branches.",
    benefits: [
      { title: "Digital Vehicle Registry", desc: "Maintain specs, registration details, odometer context, and current status for every vehicle." },
      { title: "Compliance Document Vault", desc: "Store RC, insurance, permits, fitness, and related certificates with expiry tracking." },
      { title: "Expiry Alerts", desc: "Get alerts (including WhatsApp where configured) before key compliance documents expire." },
      { title: "Vehicle Imports", desc: "Import vehicle lists to onboard fleets faster—drivers and vehicles import paths are supported." }
    ],
    faqs: [
      { q: "What documents can I track in DriveOps?", a: "You can vault vehicle compliance documents such as RC, insurance, permits, fitness, and emission certificates, with expiry scanning and alerts." },
      { q: "Can I manage different vehicle types?", a: "Yes. DriveOps supports fleet catalogs and segments so passenger, rental, and goods fleets can organize vehicles by type and use." },
      { q: "Does DriveOps do OCR on every document?", a: "OCR field extraction is optional and configurable. By default it is off; teams can enter and store documents without OCR." }
    ]
  },
  "fleet-management": {
    keyword: "Fleet Management Software",
    title: "Fleet Management Software in India | DriveOps",
    description: "Multi-tenant fleet operations for chauffeur trips and self-drive rentals: trips, dispatch, live tracking, Driver App, WhatsApp ops, fuel, maintenance, and compliance.",
    h1: "Fleet Operations Platform for Indian Operators",
    h2: "Run trips, dispatch, live tracking, rentals, and fleet care from one connected system.",
    heroCopy: "DriveOps is a multi-tenant fleet operations platform for taxi, corporate transport, goods, and self-drive rental operators. It connects trip lifecycle, dispatch with accept/reject, Driver App GPS, WhatsApp messaging, fuel and maintenance logs, and compliance vaulting—not a finance BI suite.",
    benefits: [
      { title: "Trips & Dispatch", desc: "Create one-way, round-trip, and full-day trips with stops; allocate with conflict checks; drivers accept or reject via app or WhatsApp." },
      { title: "Live Fleet & Driver App", desc: "Ops Mapbox map from Driver App GPS; duty, navigation, trip sheets, fuel, and issues on mobile (en/ml/hi)." },
      { title: "Fuel, Maintenance & Compliance", desc: "Log fuel, track maintenance jobs with due scans, and vault documents with expiry alerts." },
      { title: "Roles & Locations", desc: "Tenant isolation, RBAC, and multi-location scope for real operator teams." }
    ],
    faqs: [
      { q: "What is DriveOps fleet management?", a: "It is software to create and run trips, assign drivers and vehicles, see the fleet live, capture trip sheets and fuel, manage maintenance and compliance documents, and run self-drive rentals with manual payment recording." },
      { q: "Who is DriveOps for?", a: "Taxi operators, travel companies, corporate transport providers, goods fleets, and self-drive rental businesses—not consumer ride-hail." },
      { q: "Does it include vehicle P&L or a finance suite?", a: "No. DriveOps focuses on operations. Advanced BI, vehicle P&L engines, and a full finance suite are not productized today." }
    ]
  },
  "driver-management": {
    keyword: "Driver Management Software",
    title: "Driver Management Software & Duty Rosters | DriveOps",
    description: "Manage drivers, shifts, duty, license documents, and WhatsApp/app assignment. Pair with the multilingual Driver App for trips, GPS, sheets, and fuel.",
    h1: "Driver Management for Fleet Operators",
    h2: "Roster drivers, keep licenses current, and connect them to trips through app and WhatsApp.",
    heroCopy: "DriveOps Driver Management helps ops teams maintain driver records, shifts and attendance, and license compliance—then assign work through the Driver App and WhatsApp, with accept/reject.",
    benefits: [
      { title: "Driver Records & Imports", desc: "Create and maintain driver profiles; import drivers to onboard fleets faster." },
      { title: "Duty & Shifts", desc: "Track duty and shift context so dispatchers know who is available to assign." },
      { title: "License Compliance Vault", desc: "Store driving licenses and related documents with expiry alerts." },
      { title: "Driver App (en / ml / hi)", desc: "Drivers use the app for duty, GPS, trips, navigation, trip sheets, fuel logs, issues, and push notifications." }
    ],
    faqs: [
      { q: "What is driver management in DriveOps?", a: "It covers driver CRUD, shifts/attendance and duty, document vaulting for licenses, assignment workflows, and the Driver App used on the road." },
      { q: "Does DriveOps include driver earnings scorecards?", a: "No. DriveOps does not market a driver earnings product, performance score product, or handover product UI." },
      { q: "How do drivers get trip assignments?", a: "Ops allocate trips with candidate and conflict checks. Drivers can accept or reject via the Driver App or WhatsApp assignment messages." }
    ]
  },
  "vehicle-maintenance": {
    keyword: "Fleet Maintenance Software",
    title: "Fleet Maintenance Tracking Software | DriveOps",
    description: "Log maintenance jobs, track costs and history, and run due scans. Practical upkeep tracking—not predictive maintenance AI.",
    h1: "Fleet Maintenance Tracking",
    h2: "Record jobs, complete work, and get due-scan reminders so vehicles stay road-ready.",
    heroCopy: "DriveOps Maintenance helps fleets log service and repair jobs, attach costs and history, and use scheduled due scans. It is everyday upkeep tracking—not a predictive maintenance engine.",
    benefits: [
      { title: "Maintenance Jobs", desc: "Start, complete, or cancel maintenance work with a clear history per vehicle." },
      { title: "Due Scans", desc: "Scheduled scans help surface vehicles that are due for attention based on your logged data." },
      { title: "Cost Visibility", desc: "Capture maintenance spend so ops can see garage costs alongside fuel logs." },
      { title: "Tied to Fleet Records", desc: "Jobs sit on the same vehicle registry used for trips, compliance, and issues." }
    ],
    faqs: [
      { q: "Is this predictive maintenance?", a: "No. DriveOps supports maintenance logging and due scans. It does not claim predictive failure forecasting." },
      { q: "Can I record repair costs?", a: "Yes. Maintenance events support cost tracking and history for each vehicle." },
      { q: "How does this connect to the Driver App?", a: "Drivers can report vehicle issues from the app; ops handle maintenance jobs and due work in the console." }
    ]
  },
  "fleet-maintenance": {
    keyword: "Fleet Maintenance Software",
    title: "Fleet Maintenance Software & Service Logs | DriveOps",
    description: "Keep a service history, log garage work, and use due scans. Maintenance tracking for commercial fleets—without predictive AI claims.",
    h1: "Fleet Maintenance Software",
    h2: "Service history and due scans that support day-to-day fleet care.",
    heroCopy: "Unexpected downtime is expensive. DriveOps lets you log maintenance, keep history, and run due scans so teams act before paperwork and schedules slip—not a predictive AI product.",
    benefits: [
      { title: "Service History", desc: "Keep a detailed record of repairs and associated costs for every vehicle." },
      { title: "Due Reminders", desc: "Use maintenance due scans to surface vehicles that need attention." },
      { title: "Ops + Issues", desc: "Combine maintenance jobs with vehicle issues reported from the Driver App." }
    ],
    faqs: [
      { q: "What maintenance features does DriveOps include?", a: "Job lifecycle (start/complete/cancel), cost and history tracking, and scheduled due scans." },
      { q: "Does DriveOps predict breakdowns?", a: "No. Marketing claims of predictive maintenance are not supported." },
      { q: "Can I track repair costs?", a: "Yes. Logged maintenance events include cost visibility for lifecycle awareness." }
    ]
  },
  "fleet-expenses": {
    keyword: "Fleet Fuel & Expense Visibility",
    title: "Fleet Fuel Log Software | DriveOps",
    description: "Capture fuel logs from drivers and ops—quantity, price, odometer, receipts. Pair with maintenance costs for everyday spend visibility. No FASTag product.",
    h1: "Fuel Logs & Everyday Cost Visibility",
    h2: "Digitize fuel entries and see maintenance spend—without claiming a full expense or finance suite.",
    heroCopy: "Fuel is a major variable cost. DriveOps captures fuel logs (ops and Driver App) with quantity, price, odometer, and receipts, and pairs them with maintenance job costs. It does not include FASTag integration or a full finance suite.",
    benefits: [
      { title: "Fuel Log Capture", desc: "Record volume, rate, odometer, and receipt associations from drivers or ops." },
      { title: "Driver App Submissions", desc: "Drivers can submit fuel logs from the mobile app while on the road." },
      { title: "Maintenance Cost Context", desc: "See garage spend alongside fuel so ops has practical cost visibility." },
      { title: "Honest Scope", desc: "No FASTag/toll auditing product, no automated invoicing, and no vehicle P&L engine." }
    ],
    faqs: [
      { q: "How does DriveOps track fuel?", a: "Fuel logs capture quantity, price, odometer, and receipts, submitted by drivers or ops staff." },
      { q: "Does DriveOps integrate FASTag?", a: "No. FASTag and toll auditing are not product capabilities today." },
      { q: "Is this a finance or expense suite?", a: "No. DriveOps provides operational fuel and maintenance visibility. A full finance suite and advanced expense BI are not productized." }
    ]
  },
  "fleet-profitability": {
    keyword: "Fleet Operational Summaries",
    title: "Fleet Operational Visibility | DriveOps",
    description: "Day-to-day operational visibility from trips, fuel logs, and maintenance—not a vehicle P&L or advanced BI suite.",
    h1: "Operational Summaries That Matter Day-to-Day",
    h2: "See trip activity, fuel, and maintenance in context. Not a profitability engine or finance BI product.",
    heroCopy: "Operators need clear day-to-day visibility—not a mock analytics suite. DriveOps surfaces operational context from trips, fuel logs, and maintenance work so teams can act. It does not provide vehicle P&L, RPK engines, or advanced BI reports.",
    benefits: [
      { title: "Trip & Assignment Context", desc: "Understand what was dispatched, accepted, and completed across your fleet." },
      { title: "Fuel & Maintenance Visibility", desc: "Use logged fuel and maintenance costs for practical operational awareness." },
      { title: "Live Ops Map", desc: "Combine summaries with ongoing live fleet visibility from the Driver App." },
      { title: "Clear Boundaries", desc: "Not a finance suite, automated invoicing product, or vehicle profitability scorecard." }
    ],
    faqs: [
      { q: "Does DriveOps calculate vehicle P&L?", a: "No. Vehicle P&L / profitability engines and advanced BI are not productized. Reports and finance modules are not marketed as ready features." },
      { q: "What can I see today?", a: "Operational data from trips, dispatch, live tracking, fuel logs, maintenance jobs, compliance expiry, and rental payments you record manually." },
      { q: "Why keep this page?", a: "Searchers looking for 'profitability' often need cost and ops visibility. This page explains what DriveOps actually delivers—honestly." }
    ]
  },
  "fleet-analytics": {
    keyword: "Fleet Operational Insights",
    title: "Fleet Operational Insights | DriveOps",
    description: "Practical operational insights from trips, fuel, and maintenance. Not an advanced analytics or BI suite.",
    h1: "Insights That Matter Day-to-Day",
    h2: "Operational summaries from real work—not a branded analytics suite or mock BI dashboards.",
    heroCopy: "DriveOps helps operators see what is happening across trips, fuel, and maintenance. It is not an advanced fleet analytics suite, and productized reports/BI are not claimed here.",
    benefits: [
      { title: "Utilization Awareness", desc: "See which vehicles and drivers are active on trips versus idle from operational status." },
      { title: "Cost Inputs You Log", desc: "Fuel and maintenance entries give you grounded cost context without a P&L engine." },
      { title: "Dispatch Throughput", desc: "Follow assignment, accept/reject, and completion flow across the day." }
    ],
    faqs: [
      { q: "Is DriveOps an analytics suite?", a: "No. Do not expect advanced BI or a productized reports module. Those areas are not marketed as ready." },
      { q: "What insights are available?", a: "Day-to-day operational visibility: trips, live fleet, fuel logs, maintenance, compliance expiry, and WhatsApp-driven reviews in the ops inbox." },
      { q: "Can I export full financial reports?", a: "DriveOps is not positioned as a finance or accounting export suite. Focus is operations." }
    ]
  },
  "taxi-dispatch": {
    keyword: "Taxi Dispatch Software",
    title: "Taxi Dispatch Software with Accept/Reject | DriveOps",
    description: "Allocate trips with candidate and conflict checks. Assign via WhatsApp or Driver App. Drivers accept or reject. No nearest-vehicle auto-dispatch claim.",
    h1: "Taxi & Passenger Dispatch Software",
    h2: "Allocate work with availability checks, then confirm via Driver App or WhatsApp accept/reject.",
    heroCopy: "DriveOps dispatch removes the chaos of verbal assignments. Create trips (one-way, round-trip, full-day, with stops), allocate with candidate and conflict checks, and let drivers accept or reject on the Driver App or WhatsApp.",
    benefits: [
      { title: "Allocate with Checks", desc: "Candidate and conflict checks help avoid double-booking drivers or vehicles." },
      { title: "WhatsApp Assignment", desc: "Send assignment messages with accept/reject actions through ChatServe WhatsApp flows." },
      { title: "Driver App Workflow", desc: "Drivers handle duty, trips, navigation, and trip sheets on mobile (English, Malayalam, Hindi)." },
      { title: "Recurring Schedules", desc: "Support daily, weekly, and monthly recurring trips with automatic materialization." }
    ],
    faqs: [
      { q: "How does taxi dispatch work in DriveOps?", a: "Ops create trips, run allocation with availability/conflict checks, and assign. Drivers accept or reject via the Driver App or WhatsApp. There is no nearest-vehicle auto-dispatch algorithm claim." },
      { q: "Can I manage corporate and retail trips?", a: "Yes. Trip types include one-way, round-trip, and full-day, with stops and customer tracking links after confirmation." },
      { q: "Does dispatch use route optimization?", a: "No. Drivers get navigation support in the app. DriveOps does not claim route optimization or intelligent routing products." }
    ]
  },
  "whatsapp-review-management": {
    keyword: "WhatsApp Review Collection",
    title: "WhatsApp Review Collection for Fleets | DriveOps",
    description: "Request reviews over WhatsApp after trips and collect inbound feedback into the ops inbox. Not a Google Business review autopilot.",
    h1: "WhatsApp Review Collection for Operators",
    h2: "Ask for feedback on WhatsApp and review responses in your ops inbox.",
    heroCopy: "After trips, DriveOps can send WhatsApp review requests and ingest inbound replies into the ops inbox. It is WhatsApp-centric feedback—not Google Business review automation or a public review marketplace.",
    benefits: [
      { title: "WhatsApp Review Requests", desc: "Send post-trip review requests through ChatServe WhatsApp templates." },
      { title: "Ops Inbox", desc: "Inbound review messages land where your team already works—inside DriveOps ops." },
      { title: "Honest Scope", desc: "Not SMS review blasts, not Google Business autopilot, and not a public web review form." }
    ],
    faqs: [
      { q: "Does DriveOps post reviews to Google automatically?", a: "No. DriveOps is not a Google Business review autopilot. It collects feedback via WhatsApp into your ops inbox." },
      { q: "Is SMS used for review requests?", a: "No. Review messaging is WhatsApp-based. SMS delivery is not a product capability." },
      { q: "Where do reviews go?", a: "Inbound WhatsApp review responses are available in the DriveOps ops inbox for your team to act on." }
    ]
  },
  "customer-review-collection": {
    keyword: "Customer Review Collection",
    title: "Customer Review Collection via WhatsApp | DriveOps",
    description: "Collect passenger feedback through WhatsApp into the DriveOps ops inbox. Practical reputation workflow—not Google or SMS automation.",
    h1: "Customer Review Collection via WhatsApp",
    h2: "Close the loop after trips with WhatsApp requests and an ops inbox—not a public review portal.",
    heroCopy: "DriveOps helps operators request feedback after service via WhatsApp and manage inbound responses in ops. It does not provide a public web review form or Google Business automation.",
    benefits: [
      { title: "Post-Trip WhatsApp Requests", desc: "Prompt customers for feedback while the trip is still fresh." },
      { title: "Ops Inbox Handling", desc: "Review inbound messages in DriveOps so issues can be addressed quickly." },
      { title: "WhatsApp-Native Ops", desc: "Fits the same ChatServe WhatsApp channel used for assignments, confirmations, and tracking URLs." }
    ],
    faqs: [
      { q: "How does review collection work?", a: "Operators send WhatsApp review requests; customer replies are ingested into the ops inbox." },
      { q: "Does it use SMS or Google Business APIs?", a: "No. SMS is not implemented, and DriveOps does not claim Google Business review autopilot." },
      { q: "Is there a public review form?", a: "No. Collection is WhatsApp-centric rather than a public web form." }
    ]
  },
  "fleet-compliance": {
    keyword: "Fleet Compliance Document Vault",
    title: "Fleet Compliance Document Vault | DriveOps",
    description: "Vault vehicle and driver compliance documents with expiry scanning and WhatsApp alerts. OCR optional (default off). Not a compliance inspections product.",
    h1: "Compliance Document Vault",
    h2: "Store certificates, track expiries, and alert ops—without claiming inspection workflows or always-on OCR.",
    heroCopy: "DriveOps provides a compliance document vault with expiry scanning and WhatsApp alerts. OCR field extraction is optional and configurable (default off). Compliance inspections are not a marketed product.",
    benefits: [
      { title: "Document Vault", desc: "Store RCs, insurance, permits, fitness, licenses, and related files against vehicles and drivers." },
      { title: "Expiry Alerts", desc: "Scheduled expiry scans notify teams—including WhatsApp alerts when configured." },
      { title: "Optional OCR", desc: "Field extraction can be enabled when configured; it is not always-on AI document autopilot." }
    ],
    faqs: [
      { q: "Does DriveOps include compliance inspections?", a: "No. Document vaulting and expiry alerts are supported; a compliance inspections product is not marketed." },
      { q: "Is OCR always on?", a: "No. OCR is optional/configurable and defaults off." },
      { q: "How are teams notified?", a: "Expiry scanning can trigger alerts, including WhatsApp compliance messages via ChatServe." }
    ]
  }
}
