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
  "fleet-management": {
    keyword: "Fleet Management Software",
    title: "Best Fleet Management Software | DriveOps Fleet Operations Platform",
    description: "DriveOps is the ultimate Fleet Management Software for taxi operators and transport companies. Manage vehicles, drivers, tracking, and maintenance in one platform.",
    h1: "Comprehensive Fleet Management Software",
    h2: "Scale your transport business with the all-in-one Fleet Operations Platform.",
    heroCopy: "Managing a modern taxi or transport business requires more than just spreadsheets. DriveOps provides end-to-end fleet management software that automates everything from vehicle registration to daily revenue tracking.",
    benefits: [
      { title: "Centralized Vehicle Registry", desc: "Maintain a digital ledger of your entire fleet, including RC details, insurance, and active status." },
      { title: "Automated Workflows", desc: "Replace manual phone calls with smart dispatching and digital duty rosters." },
      { title: "Revenue Tracking", desc: "Monitor exactly how much each vehicle earns and spends on fuel and maintenance daily." }
    ],
    faqs: [
      { q: "What is fleet management software?", a: "Fleet management software is a digital platform that helps businesses organize commercial vehicles, track their locations, manage driver schedules, and analyze profitability." },
      { q: "Who can use DriveOps fleet management?", a: "DriveOps is built specifically for taxi operators, travel companies, corporate transport providers, and cab aggregators." },
      { q: "Does it help reduce fleet costs?", a: "Yes, by tracking fuel consumption and enforcing preventive maintenance, our platform significantly reduces unexpected repair costs and fuel leakage." }
    ]
  },
  "taxi-dispatch": {
    keyword: "Taxi Dispatch Software",
    title: "Smart Taxi Dispatch Software | Automated Taxi Operations",
    description: "Automate your ride assignments with DriveOps Taxi Dispatch Software. Queue trips instantly based on driver availability, shift schedules, and GPS location.",
    h1: "Intelligent Taxi Dispatch Software",
    h2: "Eliminate manual booking errors and dispatch rides instantly.",
    heroCopy: "DriveOps offers enterprise-grade Taxi Dispatch Software that completely removes the friction of manual phone coordination. Automatically route incoming bookings to the most suitable available driver in seconds.",
    benefits: [
      { title: "Smart Queueing Algorithm", desc: "Assigns trips based on proximity, driver shift compliance, and vehicle class requirements." },
      { title: "Digital Trip Sheets", desc: "Send comprehensive trip instructions directly to the driver's device." },
      { title: "Real-time Status Tracking", desc: "Monitor exactly when a driver is en route, arrived, or has completed a booking." }
    ],
    faqs: [
      { q: "How does taxi dispatch software work?", a: "When a booking is created, the software automatically analyzes the fleet's live location and driver duty rosters to assign the trip to the best available vehicle without manual intervention." },
      { q: "Can I manage corporate bookings?", a: "Yes, our taxi operations management software allows you to handle both retail B2C trips and B2B corporate transport packages seamlessly." },
      { q: "Is it better than manual dispatching?", a: "Manual dispatching causes delays and miscommunication. Automated dispatch software reduces response times by up to 40% and eliminates double-booking errors." }
    ]
  },
  "driver-management": {
    keyword: "Driver Management Software",
    title: "Driver Management Software & Duty Roster | DriveOps",
    description: "Manage driver shifts, attendance, performance, and compliance effortlessly with DriveOps Driver Management Software. Built for modern transport companies.",
    h1: "Complete Driver Management Software",
    h2: "Optimize driver performance, track duty hours, and manage compliance.",
    heroCopy: "Your drivers are the face of your business. DriveOps's Driver Management Software ensures they are scheduled efficiently, paid accurately, and compliant with all local licensing requirements.",
    benefits: [
      { title: "Digital Duty Rosters", desc: "Schedule shifts clearly so dispatchers know exactly who is available for incoming trips." },
      { title: "Performance Tracking", desc: "Monitor driver ratings, on-time performance, and trip completion rates in real-time." },
      { title: "Compliance Vault", desc: "Store driver licenses and background checks, and get automated alerts before they expire." }
    ],
    faqs: [
      { q: "What is driver management software?", a: "It is a digital tool that helps fleet owners track driver attendance, schedule shifts, monitor driving performance, and maintain required compliance documents." },
      { q: "How does it improve driver retention?", a: "By providing transparent duty rosters and accurate automated payroll calculations, drivers experience less friction and disputes, leading to higher satisfaction." },
      { q: "Does the software track driver compliance?", a: "Yes, DriveOps proactively alerts fleet managers when a driver's license or background verification is nearing expiry." }
    ]
  },
  "gps-vehicle-tracking": {
    keyword: "GPS Vehicle Tracking",
    title: "Live GPS Vehicle Tracking & Fleet Map | DriveOps",
    description: "Monitor your fleet in real-time with DriveOps GPS Vehicle Tracking. Optimize routes, improve safety, and dispatch faster without hardware lock-in.",
    h1: "Live GPS Fleet Tracking Software",
    h2: "Total operational visibility over your entire fleet.",
    heroCopy: "Know exactly where your vehicles are at any given moment. DriveOps provides robust GPS Vehicle Tracking and a live fleet map that empowers dispatchers to make rapid, informed decisions.",
    benefits: [
      { title: "Live Fleet Map", desc: "Visualize all active, idle, and off-duty vehicles on an interactive dashboard map." },
      { title: "No Hardware Required", desc: "Leverage mobile tracking technology to gain visibility immediately without buying expensive proprietary GPS boxes." },
      { title: "Route Optimization", desc: "Ensure drivers are taking the most efficient routes to reduce fuel consumption and wear." }
    ],
    faqs: [
      { q: "Do I need to install a physical GPS tracker?", a: "No, DriveOps is designed to provide immediate operational visibility without forcing you into expensive hardware installations." },
      { q: "How accurate is the tracking?", a: "Our GPS fleet tracking relies on high-accuracy mobile location services, providing real-time updates directly to the dispatch dashboard." },
      { q: "Why is GPS tracking important for a taxi fleet?", a: "It enables smart dispatch algorithms to assign the closest vehicle to a booking, significantly reducing customer wait times and dead mileage." }
    ]
  },
  "fleet-analytics": {
    keyword: "Fleet Analytics Software",
    title: "Advanced Fleet Analytics Software | DriveOps",
    description: "Turn data into profit. DriveOps Fleet Analytics Software provides deep insights into revenue, utilization, fuel costs, and driver performance.",
    h1: "Actionable Fleet Analytics Software",
    h2: "Make data-driven decisions to grow your transport business.",
    heroCopy: "Stop guessing about your profit margins. DriveOps Fleet Analytics Software aggregates data from every trip, fuel refill, and maintenance event to give you a crystal clear picture of your business health.",
    benefits: [
      { title: "Revenue Dashboards", desc: "Track daily, weekly, and monthly earnings split by vehicle, driver, or corporate account." },
      { title: "Utilization Tracking", desc: "Identify which vehicles are generating the most revenue and which are sitting idle." },
      { title: "Cost Profiling", desc: "Analyze the total cost of ownership (TCO) including fuel and maintenance per kilometer." }
    ],
    faqs: [
      { q: "What metrics does fleet analytics software track?", a: "DriveOps tracks key performance indicators (KPIs) like vehicle utilization rates, revenue per kilometer, fuel efficiency, and dispatch times." },
      { q: "How can analytics improve profitability?", a: "By identifying underutilized vehicles or drivers with poor fuel efficiency, fleet owners can make immediate operational adjustments to protect their margins." },
      { q: "Are the reports exportable?", a: "Yes, all data can be easily exported for accounting purposes or detailed offline analysis." }
    ]
  },
  "fleet-compliance": {
    keyword: "Fleet Compliance Management",
    title: "Fleet Compliance Management Software | DriveOps",
    description: "Never miss a permit renewal again. DriveOps Fleet Compliance Management automates document tracking, insurance renewals, and fitness certificates.",
    h1: "Automated Fleet Compliance Management",
    h2: "Protect your business from fines with a unified document vault.",
    heroCopy: "Managing paperwork across dozens of vehicles is a liability waiting to happen. DriveOps's Fleet Compliance Management software digitizes all your permits, insurance, and licenses, sending proactive alerts before anything expires.",
    benefits: [
      { title: "Digital Document Vault", desc: "Securely store RCs, insurance policies, permits, and pollution certificates in the cloud." },
      { title: "Automated Expiry Alerts", desc: "Receive dashboard and email notifications weeks before a critical document expires." },
      { title: "Audit Ready", desc: "Maintain a perfect compliance record that can be easily accessed during any regulatory inspection." }
    ],
    faqs: [
      { q: "Why is fleet compliance management important?", a: "Operating commercial vehicles with expired permits or insurance can lead to massive fines, vehicle impounding, and severe legal liability." },
      { q: "What documents can I track in DriveOps?", a: "You can track anything with an expiry date, including vehicle insurance, fitness certificates, state permits, pollution under control (PUC) certificates, and driver licenses." },
      { q: "Will the system notify me automatically?", a: "Yes, DriveOps actively monitors the expiry dates in your vault and triggers alerts to ensure you have ample time to renew." }
    ]
  },
  "fleet-maintenance": {
    keyword: "Fleet Maintenance Software",
    title: "Fleet Maintenance Software & Service Logs | DriveOps",
    description: "Reduce vehicle downtime with DriveOps Fleet Maintenance Software. Schedule preventive service, track repair costs, and maximize fleet health.",
    h1: "Proactive Fleet Maintenance Software",
    h2: "Keep your vehicles on the road and out of the garage.",
    heroCopy: "Unexpected breakdowns kill profitability. DriveOps Fleet Maintenance Software allows you to transition from reactive repairs to proactive maintenance, ensuring your vehicles remain safe and reliable.",
    benefits: [
      { title: "Preventive Scheduling", desc: "Trigger maintenance reminders automatically based on odometer readings or time intervals." },
      { title: "Service History Ledger", desc: "Keep a detailed record of all repairs, parts replaced, and associated costs for every vehicle." },
      { title: "Downtime Reduction", desc: "By servicing vehicles proactively, you drastically reduce the chance of mid-trip breakdowns." }
    ],
    faqs: [
      { q: "What is preventive fleet maintenance?", a: "It is the practice of scheduling regular vehicle servicing (like oil changes and tire rotations) based on mileage or time, rather than waiting for a component to break." },
      { q: "How does the software track when service is due?", a: "DriveOps uses the trip logs and fuel entries to estimate current odometer readings and alerts you when a vehicle hits a predefined service threshold." },
      { q: "Can I track repair costs?", a: "Yes, every maintenance event logged in the system includes cost tracking, allowing you to calculate the true lifecycle cost of each vehicle." }
    ]
  },
  "whatsapp-review-management": {
    keyword: "WhatsApp Review Management",
    title: "WhatsApp Review Management Software for Taxi Companies",
    description: "Automate your online reputation. DriveOps WhatsApp Review Management automatically requests Google reviews from customers after every trip.",
    h1: "Automated WhatsApp Review Management",
    h2: "Build a 5-star Google reputation on autopilot.",
    heroCopy: "In the modern taxi industry, your Google rating dictates your growth. DriveOps offers a powerful WhatsApp Review Management system that automatically messages customers post-trip, capturing positive feedback directly to your Google Business Profile.",
    benefits: [
      { title: "90% Open Rates", desc: "WhatsApp has significantly higher open and engagement rates compared to traditional email or SMS review requests." },
      { title: "Zero Manual Effort", desc: "The system triggers automatically the moment a driver marks a trip as completed in the dispatch system." },
      { title: "Google Integration", desc: "Seamlessly direct happy customers straight to your Google review page with a single click." }
    ],
    faqs: [
      { q: "What is WhatsApp Review Management?", a: "It is an automated marketing tool that sends personalized WhatsApp messages to customers after a service, politely requesting a review of their experience." },
      { q: "Why is WhatsApp better than SMS?", a: "WhatsApp is the primary communication channel in many markets (like India), offering richer media, clickable links, and massive open rates compared to SMS." },
      { q: "How does this help my taxi business grow?", a: "A higher volume of 5-star reviews improves your local SEO ranking on Google Maps, driving more organic, commission-free retail bookings to your business." }
    ]
  },
  "customer-review-collection": {
    keyword: "Customer Review Automation",
    title: "Customer Review Automation & Reputation Management | DriveOps",
    description: "Streamline your customer feedback loop. DriveOps Customer Review Automation helps transport companies collect and manage passenger reviews effortlessly.",
    h1: "Seamless Customer Review Automation",
    h2: "Turn happy passengers into your best marketing asset.",
    heroCopy: "Don't leave your reputation to chance. DriveOps Customer Review Automation ensures that every satisfied passenger is given an immediate, frictionless opportunity to rate your service publicly.",
    benefits: [
      { title: "Automated Feedback Loop", desc: "Trigger review requests instantly when the passenger's experience is still fresh in their mind." },
      { title: "Reputation Protection", desc: "Quickly identify operational issues if negative feedback is received, allowing you to rectify it immediately." },
      { title: "Increased Conversions", desc: "Showcasing a high volume of positive reviews builds immense trust with corporate clients and new retail customers." }
    ],
    faqs: [
      { q: "How does customer review automation work?", a: "The software links directly to your dispatch system. When a ride ends, it automatically dispatches a review request via WhatsApp or SMS." },
      { q: "Why is reputation management software important?", a: "Because modern consumers check reviews before booking any service. A poor rating can devastate a transport company's retail booking volume." },
      { q: "Does the system handle negative reviews?", a: "While it cannot prevent negative reviews on public forums, the automated system allows you to proactively engage with unhappy customers quickly, often resolving the issue before they post publicly." }
    ]
  }
}
