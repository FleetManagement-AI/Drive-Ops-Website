import { siteConfig } from "@/config/site"
import type { LegalDocument } from "./types"

const contactEmail = siteConfig.contact.email
const contactPhone = siteConfig.contact.telephone
const supportPhone = siteConfig.contact.supportTelephone
const locality = `${siteConfig.contact.address.addressLocality}, ${siteConfig.contact.address.addressRegion}, India`

export const privacyPolicy: LegalDocument = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  shortTitle: "Privacy Policy",
  description:
    "How DriveOps collects, uses, and shares information for fleet operators, drivers, and related users of the DriveOps platform.",
  version: "1.0.0",
  effectiveDate: "2026-11-04",
  lastUpdated: "2026-11-04",
  reviewNote:
    "This document describes DriveOps practices based on the current product implementation. It is not legal advice and should be reviewed by qualified counsel before publication or reliance.",
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      blocks: [
        {
          type: "p",
          text: "DriveOps is a multi-tenant fleet operations software platform used by fleet owners, operations managers, dispatchers, drivers, and related business users. This Privacy Policy explains how information is collected and used when you visit our marketing website, create or use a DriveOps workspace, use the Driver App, or interact with features such as live tracking, WhatsApp messages, email, or customer tracking links.",
        },
        {
          type: "p",
          text: "DriveOps provides software tools. DriveOps is not a transport provider, taxi company, or ride-hailing service. The fleet business that uses DriveOps decides how trips are run and what driver, passenger, and customer information it enters into the platform.",
        },
        {
          type: "note",
          text: "Legal review required before treating this policy as final or legally binding.",
        },
      ],
    },
    {
      id: "who-we-are",
      title: "2. Who We Are",
      blocks: [
        {
          type: "p",
          text: `This product is offered under the brand name “DriveOps.” For contact purposes today we use ${contactEmail}, sales WhatsApp ${contactPhone}, and support WhatsApp ${supportPhone}. Our publicly listed locality is ${locality} (postal code ${siteConfig.contact.address.postalCode}).`,
        },
        {
          type: "p",
          text: "Registered legal entity name: [LEGAL_ENTITY_NAME]. Full registered office address: [REGISTERED_ADDRESS]. Please replace these placeholders with verified company details before publication.",
        },
        {
          type: "p",
          text: "Where this policy refers to “we,” “us,” or “DriveOps,” it means the operator of the DriveOps platform. Where it refers to a “fleet business,” “tenant,” or “customer,” it means the organization that creates a DriveOps workspace and manages its own fleet data.",
        },
      ],
    },
    {
      id: "scope",
      title: "3. Scope of This Policy",
      blocks: [
        {
          type: "p",
          text: "This policy covers:",
        },
        {
          type: "ul",
          items: [
            "The DriveOps marketing website and related analytics on that site",
            "Operator web application accounts and tenant workspaces",
            "The DriveOps Driver App",
            "Public customer trip tracking links and public trip-sheet links issued through DriveOps",
            "Communications we send or facilitate through email, WhatsApp, and push notifications in connection with the Service",
          ],
        },
        {
          type: "p",
          text: "It does not replace the privacy practices of third-party services (for example WhatsApp, Google Maps, Firebase, email delivery providers, or cloud storage), which apply to their own processing. It also does not make DriveOps responsible for how a fleet business uses personal data it collects outside DriveOps.",
        },
      ],
    },
    {
      id: "information-we-collect",
      title: "4. Information We Collect",
      blocks: [
        {
          type: "p",
          text: "Depending on how you use DriveOps, we may process the categories below.",
        },
        {
          type: "p",
          text: "Account and business information. When a workspace is created we may collect company name, business email, phone and WhatsApp numbers, address fields, timezone, currency, locale, business operations, fleet types, fleet size, optional logo, selected plan, and the first administrator’s name and password (passwords are hashed and are not returned or emailed).",
        },
        {
          type: "p",
          text: "User and driver information. Tenant administrators may create users and drivers with details such as name, phone, email, role, license information, and related profile fields. Drivers may sign in with username/password or WhatsApp OTP, and may upload license images from the Driver App.",
        },
        {
          type: "p",
          text: "Vehicle and trip information. Fleet businesses store vehicle records, trip plans, dispatch assignments, fuel logs, maintenance and compliance documents, rental records, and related operational data in their tenant workspace.",
        },
        {
          type: "p",
          text: "Location and GPS information. While a driver is on duty, the Driver App may collect GPS points (including latitude, longitude, accuracy, speed, heading, and timestamps), store them locally first when offline, and upload them in batches to DriveOps. Live location may also be held briefly in a cache for map views. Location history can be stored in the tenant database. The Driver App may also capture a one-off position for vehicle-issue reports, and in-app navigation may use Google Navigation location services while navigating. Location is not continuously collected for fleet tracking when the driver is off duty.",
        },
        {
          type: "p",
          text: "Customer and passenger information. Fleet businesses may enter customer names, phone numbers, pickup/drop addresses and coordinates, and related trip notes. Some of this data may be cached on a driver’s device for offline trip work.",
        },
        {
          type: "p",
          text: "Uploaded documents. Users may upload files such as logos, licenses, compliance documents, and other operational attachments. Files are stored with our cloud object storage provider and associated metadata is kept in the tenant workspace.",
        },
        {
          type: "p",
          text: "WhatsApp, email, and notification data. We process contact numbers and message content needed to send transactional templates and alerts (for example signup welcome messages, OTPs, trip assignment notices, customer trip confirmations that may include a tracking URL, compliance reminders, and trial notices). Push notification device tokens may be registered for signed-in Driver App or web clients.",
        },
        {
          type: "p",
          text: "Device, technical, and usage information. Servers and apps process technical data such as IP addresses for rate limiting and security, authentication tokens, device/installation identifiers for push delivery, and ordinary application logs. Optional infrastructure monitoring may send telemetry to an observability backend when enabled.",
        },
        {
          type: "p",
          text: "Cookies and analytics on the marketing website. The marketing site currently loads Google Tag Manager (container ID GTM-NKVP9HBB) and Google Analytics 4 (measurement ID G-2YPW68FRJK) to understand page views and selected marketing CTA events. There is no separate cookie-consent banner implemented at the time of this policy version. Application login uses bearer tokens rather than cookie-based session login.",
        },
      ],
    },
    {
      id: "how-we-use-information",
      title: "5. How We Use Information",
      blocks: [
        {
          type: "p",
          text: "We use information to:",
        },
        {
          type: "ul",
          items: [
            "Provide, operate, secure, and improve the DriveOps Service",
            "Create and administer tenant workspaces, users, roles, and subscriptions/trials",
            "Enable dispatch, trip management, driver duty/location features, and related fleet workflows",
            "Send transactional email, WhatsApp, and push notifications that the product is configured to send",
            "Provide public tracking or trip-sheet access when a fleet business issues a link",
            "Respond to support requests and communicate about the Service",
            "Analyze marketing website usage (currently via Google Tag Manager GTM-NKVP9HBB and Google Analytics 4 G-2YPW68FRJK)",
            "Comply with law and enforce our Terms where applicable",
          ],
        },
      ],
    },
    {
      id: "fleet-tenant-responsibilities",
      title: "6. Fleet Business and Tenant Responsibilities",
      blocks: [
        {
          type: "p",
          text: "DriveOps is multi-tenant. Operational data for a fleet business is kept in that tenant’s workspace. The fleet business decides what personal data to enter, which users and drivers to invite, and how to use features such as customer tracking links and WhatsApp messages.",
        },
        {
          type: "p",
          text: "Tenant roles (including ADMIN, MANAGER, OPERATOR, DRIVER, and VIEWER) and permission settings control what authenticated workspace users can access. Fleet administrators and other authorized roles can typically view operational records within their tenant—such as drivers, vehicles, trips, location history available in product screens, documents, and customer details the business has stored—subject to the permissions configured for each role. DriveOps platform operators may access tenant control-plane information as needed to provision, support, or administer the Service.",
        },
        {
          type: "p",
          text: "The fleet business is responsible for providing any notices and obtaining any consents required for drivers, passengers, customers, and staff under applicable law.",
        },
      ],
    },
    {
      id: "driver-app-location",
      title: "7. Driver App and Location Tracking",
      blocks: [
        {
          type: "p",
          text: "The Driver App requests location permission so that live vehicle location can be shared while a driver is on duty. On Android, duty tracking may run with a foreground notification indicating that live location is being shared. Background location capabilities may be declared for reliability during an active duty session.",
        },
        {
          type: "p",
          text: "Collected points are filtered (for example accuracy and movement thresholds) and uploaded periodically in batches, including after connectivity returns when the driver remains on duty. Points may be stored on the device until synced. Ending duty or logging out stops the duty location stream used for fleet tracking.",
        },
        {
          type: "p",
          text: "GPS accuracy depends on the device, OS permissions, signal quality, and connectivity. DriveOps does not guarantee continuous coverage or precise positioning in all conditions.",
        },
      ],
    },
    {
      id: "customer-tracking-links",
      title: "8. Customer Tracking Links",
      blocks: [
        {
          type: "p",
          text: "A fleet business may create a customer tracking link for a trip. Anyone with the link (an opaque token URL) can view a limited public snapshot without signing in. That snapshot may include trip status and timing details, route labels and coordinates, driver name, vehicle name and registration, and—when available—live location, heading, speed, freshness, and ETA. A related public trip-sheet link may allow reading and submitting trip-sheet information without login while the token remains valid.",
        },
        {
          type: "p",
          text: "Access is controlled by possession of the token. Fleet businesses should share tracking links only with intended recipients and treat leaked links as a disclosure risk. Default token lifetimes are configured server-side (currently on the order of days, not indefinite).",
        },
      ],
    },
    {
      id: "whatsapp-communications",
      title: "9. WhatsApp and Third-Party Communications",
      blocks: [
        {
          type: "p",
          text: "DriveOps integrates with ChatServe to send WhatsApp template messages used by the product (for example OTP, signup welcome and owner alerts, driver welcome, trip assignment, trip sheet notices, customer trip confirmation with tracking URL, and compliance alerts). Email is sent through Resend for transactional messages such as welcome, password-reset OTP, trial expiry, and related notices. Push notifications use Firebase Cloud Messaging (FCM).",
        },
        {
          type: "p",
          text: "Message delivery depends on those third parties and on recipient device/network settings. DriveOps does not guarantee delivery of every WhatsApp, email, or push message.",
        },
      ],
    },
    {
      id: "data-sharing",
      title: "10. Data Sharing and Service Providers",
      blocks: [
        {
          type: "p",
          text: "We share information with service providers that help us run DriveOps, including:",
        },
        {
          type: "ul",
          items: [
            "ChatServe — WhatsApp messaging",
            "Resend — transactional email",
            "Firebase / FCM — push notifications",
            "AWS S3 — file and document storage",
            "Google Maps Platform — maps, geocoding, places/routes, and Driver App navigation features when used",
            "Google Tag Manager (GTM-NKVP9HBB) and Google Analytics 4 (G-2YPW68FRJK) — marketing website analytics",
            "Redis (when configured) — caching, rate limiting, and short-lived live location",
            "OpenTelemetry / SigNoz (when configured) — optional observability",
          ],
        },
        {
          type: "p",
          text: "We may also disclose information if required by law, to protect rights and safety, or in connection with a corporate transaction involving DriveOps. We do not sell personal information as a consumer data broker. We do not claim that data is never shared with processors or never transferred across borders.",
        },
      ],
    },
    {
      id: "international-transfers",
      title: "11. International Data Transfers",
      blocks: [
        {
          type: "p",
          text: "DriveOps and its providers may process data in India and/or other countries where their infrastructure is located (for example cloud regions used by AWS, Google, Firebase, Resend, or ChatServe). Exact hosting regions: [DATA_HOSTING_REGIONS — to be confirmed by the business]. Where required by law, appropriate transfer safeguards should be applied; counsel should confirm the final transfer wording.",
        },
      ],
    },
    {
      id: "retention-deletion",
      title: "12. Data Retention and Deletion",
      blocks: [
        {
          type: "p",
          text: "Live location pins held in cache expire quickly (on the order of minutes). Location history stored in the tenant database does not currently have an automated purge job with a coded retention window. Operational records generally remain until the fleet business deletes them (where the product supports soft delete) or until the tenant is permanently removed by platform administration.",
        },
        {
          type: "p",
          text: "If a trial or subscription expires, access to most APIs may be blocked while tenant data is retained. Permanent tenant deletion (when performed by platform operators after suspension and confirmation) drops the tenant schema, removes related auth users, and attempts best-effort deletion of associated S3 prefixes.",
        },
        {
          type: "p",
          text: "Documented product retention periods for GPS history, communication logs, and backups: [DATA_RETENTION_PERIOD]. Replace this placeholder after an operational retention review. There is no self-serve “export my data” / GDPR-style subject-access API verified in the current codebase.",
        },
      ],
    },
    {
      id: "security",
      title: "13. Security Measures",
      blocks: [
        {
          type: "p",
          text: "We apply technical and organizational measures appropriate to a SaaS product of this type, including authentication with hashed passwords, bearer access/refresh tokens, tenant schema isolation for operational data, TLS for network transport in normal deployments, authorization checks, and rate limiting on selected public endpoints. Driver session credentials are stored in the device secure storage APIs used by the app.",
        },
        {
          type: "p",
          text: "No method of transmission or storage is perfectly secure. DriveOps does not claim end-to-end encryption of all data, and does not claim specific security certifications (such as ISO or SOC) unless separately verified and published.",
        },
      ],
    },
    {
      id: "user-rights",
      title: "14. User Rights and Privacy Requests",
      blocks: [
        {
          type: "p",
          text: "Depending on applicable law, individuals may have rights to access, correct, delete, or restrict certain personal data, or to withdraw consent where processing is consent-based. Drivers and customers of a fleet business should generally contact that fleet business first for data stored in the tenant workspace. You may also contact DriveOps at the details in the Contact section for platform-related requests.",
        },
        {
          type: "p",
          text: "We may need to verify the request and may decline or limit requests where the law allows (for example to protect other users, security, or legal obligations). Response timelines and procedures: [PRIVACY_REQUEST_PROCESS — confirm with counsel].",
        },
      ],
    },
    {
      id: "consent-withdrawal",
      title: "15. Consent and Withdrawal",
      blocks: [
        {
          type: "p",
          text: "Where processing relies on consent (for example certain marketing analytics or optional communications), you may withdraw consent for the future by using available product controls, adjusting device permissions (such as location or notifications), or contacting us. Withdrawal does not affect processing already completed or processing that relies on another lawful basis.",
        },
        {
          type: "p",
          text: "Drivers can stop duty location sharing by ending duty and/or revoking location permission in the device settings, understanding that some product features then cannot function.",
        },
      ],
    },
    {
      id: "childrens-data",
      title: "16. Children's Data",
      blocks: [
        {
          type: "p",
          text: "DriveOps is a business fleet operations platform intended for adult business users and professional drivers. It is not directed to children. We do not knowingly collect personal information from children for the purpose of creating DriveOps accounts. If you believe a child has provided personal information inappropriately, contact us so we can take appropriate steps.",
        },
      ],
    },
    {
      id: "cookies-tracking",
      title: "17. Cookies and Tracking Technologies",
      blocks: [
        {
          type: "p",
          text: "The marketing website uses Google Tag Manager (GTM-NKVP9HBB) and Google Analytics 4 (G-2YPW68FRJK) via gtag/dataLayer to measure visits and selected CTA events. Browser storage used by UI components may also hold non-essential preferences in some cases. The operator application authenticates with bearer tokens rather than classic login cookies.",
        },
        {
          type: "p",
          text: "A dedicated cookie-consent banner is not implemented in the current marketing site. Whether consent UI is required for your deployment should be confirmed with counsel for applicable jurisdictions.",
        },
      ],
    },
    {
      id: "policy-changes",
      title: "18. Changes to This Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Privacy Policy from time to time. The “Last updated” date and version at the top of this page will change when we publish revisions. Material changes may be communicated through the Service, email, or website notice where appropriate. Continued use after an update becomes effective constitutes acceptance where permitted by law—confirm final acceptance language with counsel.",
        },
      ],
    },
    {
      id: "contact",
      title: "19. Contact and Grievance Information",
      blocks: [
        {
          type: "p",
          text: `Privacy and support contact email: ${contactEmail}. Phone / WhatsApp: ${contactPhone} (sales), ${supportPhone} (support). Locality listed publicly: ${locality}.`,
        },
        {
          type: "p",
          text: "Grievance / data protection officer contact (if required under applicable law): [GRIEVANCE_OFFICER_CONTACT]. Registered entity and address for formal notices: [LEGAL_ENTITY_NAME], [REGISTERED_ADDRESS].",
        },
        {
          type: "note",
          text: "Do not treat this Privacy Policy as legally compliant or ready for publication until placeholders are replaced and counsel has reviewed it.",
        },
      ],
    },
  ],
}
