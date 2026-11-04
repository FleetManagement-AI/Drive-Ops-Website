import { siteConfig } from "@/config/site"
import type { LegalDocument } from "./types"

const contactEmail = siteConfig.contact.email
const contactPhone = siteConfig.contact.telephone
const supportPhone = siteConfig.contact.supportTelephone
const locality = `${siteConfig.contact.address.addressLocality}, ${siteConfig.contact.address.addressRegion}, India`

export const termsAndConditions: LegalDocument = {
  slug: "terms-and-conditions",
  title: "Terms & Conditions",
  shortTitle: "Terms & Conditions",
  description:
    "Terms governing use of the DriveOps fleet operations SaaS platform, Driver App, trials, and related services.",
  version: "1.0.0",
  effectiveDate: "2026-11-04",
  lastUpdated: "2026-11-04",
  reviewNote:
    "These Terms describe DriveOps product behavior based on the current implementation. They are not legal advice and require counsel review before publication or reliance. Clauses marked for legal review are especially provisional.",
  sections: [
    {
      id: "introduction-acceptance",
      title: "1. Introduction and Acceptance",
      blocks: [
        {
          type: "p",
          text: "These Terms & Conditions (“Terms”) govern access to and use of the DriveOps software platform, including the operator web application, Driver App, marketing website, public tracking and trip-sheet links, and related services (together, the “Service”).",
        },
        {
          type: "p",
          text: "By creating a workspace, signing in, or otherwise using the Service, you agree to these Terms. If you are accepting on behalf of a company, you represent that you have authority to bind that company. If you do not agree, do not use the Service.",
        },
        {
          type: "note",
          text: "Legal review required: acceptance mechanism, clickwrap language, and enforceability under Indian law.",
        },
      ],
    },
    {
      id: "definitions",
      title: "2. Definitions",
      blocks: [
        {
          type: "ul",
          items: [
            "“DriveOps,” “we,” “us” — the operator of the DriveOps platform brand and Service.",
            "“Customer,” “fleet business,” or “tenant” — the organization that registers a DriveOps workspace.",
            "“User” — an individual authorized by a tenant to access the operator application or Driver App.",
            "“Driver App” — the mobile application used by drivers for duty, trips, location sharing, and related workflows.",
            "“Content” or “Customer Data” — data, files, and materials submitted to or generated in a tenant workspace.",
            "“Plan” — a subscription or trial plan associated with a tenant.",
          ],
        },
      ],
    },
    {
      id: "eligibility",
      title: "3. Eligibility and Business Accounts",
      blocks: [
        {
          type: "p",
          text: "The Service is intended for business fleet operations. You must be legally able to enter a binding contract and, where you create a tenant account, authorized to act for that business. DriveOps is not directed to children or consumer ride-hailing end users as primary account holders.",
        },
      ],
    },
    {
      id: "account-registration",
      title: "4. Account Registration and Security",
      blocks: [
        {
          type: "p",
          text: "You must provide accurate registration information and keep credentials confidential. You are responsible for activity under your accounts. Notify us promptly of unauthorized access. We may suspend accounts that appear compromised or abusive.",
        },
        {
          type: "p",
          text: "Authentication uses bearer access and refresh tokens. Passwords are hashed at rest and are not emailed. Drivers may also authenticate with WhatsApp OTP where enabled.",
        },
      ],
    },
    {
      id: "tenant-roles",
      title: "5. Tenant and User Roles",
      blocks: [
        {
          type: "p",
          text: "Each tenant workspace has its own users and roles (including ADMIN, MANAGER, OPERATOR, DRIVER, and VIEWER, subject to product configuration). Permissions determine what each user can view or change inside that tenant. The Customer is responsible for assigning roles appropriately and for its users’ compliance with these Terms.",
        },
      ],
    },
    {
      id: "services-description",
      title: "6. Description of DriveOps Services",
      blocks: [
        {
          type: "p",
          text: "DriveOps provides fleet operations software that may include trip management, dispatch, driver and vehicle management, Driver App workflows, live location features, fuel and maintenance records, compliance document storage, WhatsApp-assisted communications, customer tracking links, trip sheets, rentals, and related tools as enabled for your plan.",
        },
        {
          type: "p",
          text: "DriveOps is software only. DriveOps does not provide transportation, employ your drivers, own your vehicles, or act as a taxi or ride-hailing operator. Trip completion, driver conduct, vehicle condition, and passenger safety remain the Customer’s responsibility.",
        },
      ],
    },
    {
      id: "subscription-billing",
      title: "7. Subscription Plans, Trials, Billing, and Payments",
      blocks: [
        {
          type: "p",
          text: "New workspaces may start on a trial associated with a selected plan. Trial length is determined by the plan’s configured trial period (commonly around 30 days, subject to plan settings). During trial or an active subscription, access is permitted according to plan limits.",
        },
        {
          type: "p",
          text: "Plan prices and billing cycles (for example monthly or yearly) may be displayed in product or marketing materials. At the time of this Terms version, automated payment-gateway checkout for SaaS subscriptions is not verified as live in the product (payment integration remains a stub / not required for plan changes in current server behavior). Do not assume card auto-charging or gateway refunds until a live billing integration is confirmed and these Terms are updated.",
        },
        {
          type: "note",
          text: "Legal / commercial review required before stating refund, tax, invoice, or auto-renew terms.",
        },
      ],
    },
    {
      id: "expiry-cancellation",
      title: "8. Subscription Expiry and Cancellation",
      blocks: [
        {
          type: "p",
          text: "When a trial or subscription becomes expired, access to most of the Service may be blocked while Customer Data is retained. Platform administrators may extend, change, expire, suspend, or—after required confirmations—permanently delete tenants. A self-serve customer cancellation and refund workflow is not verified in the current product; Customers should contact DriveOps support for plan changes.",
        },
      ],
    },
    {
      id: "acceptable-use",
      title: "9. Acceptable Use",
      blocks: [
        {
          type: "p",
          text: "You may not:",
        },
        {
          type: "ul",
          items: [
            "Use the Service unlawfully or to violate others’ rights",
            "Attempt unauthorized access to other tenants’ data or DriveOps systems",
            "Interfere with security, rate limits, or Service integrity",
            "Upload malware or abusive content",
            "Misrepresent identity or affiliation",
            "Use public tracking or trip-sheet links to harass, stalk, or unlawfully surveil individuals",
            "Resell or misuse the Service except as expressly permitted in writing",
          ],
        },
      ],
    },
    {
      id: "customer-responsibilities",
      title: "10. Customer Responsibilities",
      blocks: [
        {
          type: "p",
          text: "The Customer is responsible for lawful collection and use of driver, passenger, and customer data; obtaining required notices and consents; configuring roles and permissions; safeguarding tracking links; complying with transport, labor, and privacy laws applicable to its operations; and the accuracy of information entered into DriveOps.",
        },
      ],
    },
    {
      id: "driver-app-permissions",
      title: "11. Driver App and Location Permissions",
      blocks: [
        {
          type: "p",
          text: "Drivers must grant location (and, where used, notification and camera) permissions required for duty tracking, trip workflows, and related features. Location for fleet live tracking is collected while the driver is on duty, with filtered/batched uploads, and is not continuous off-duty fleet tracking. The Customer must ensure drivers understand when location is shared.",
        },
      ],
    },
    {
      id: "gps-limitations",
      title: "12. GPS and Tracking Limitations",
      blocks: [
        {
          type: "p",
          text: "GPS and map features depend on device hardware, OS permissions, connectivity, third-party map services, and environmental conditions. DriveOps does not guarantee uninterrupted tracking, exact ETA, or that every location ping will be recorded or displayed.",
        },
      ],
    },
    {
      id: "third-party-services",
      title: "13. WhatsApp and Third-Party Services",
      blocks: [
        {
          type: "p",
          text: "The Service may rely on third parties including ChatServe (WhatsApp templates), Resend (email), Firebase/FCM (push), Google Maps Platform (maps/navigation/geocoding), and AWS S3 (file storage). Those services have their own terms and availability. DriveOps does not guarantee delivery of WhatsApp, email, or push messages, or uninterrupted third-party uptime.",
        },
      ],
    },
    {
      id: "tracking-links",
      title: "14. Customer Tracking Links",
      blocks: [
        {
          type: "p",
          text: "Public tracking and trip-sheet links grant access to anyone who has the URL token for as long as the token remains valid. The Customer controls issuance and distribution of links and is responsible for misuse resulting from sharing or leakage. DriveOps is not liable for disclosures caused by token sharing outside the Service’s intended use.",
        },
      ],
    },
    {
      id: "data-ownership",
      title: "15. Customer Data and Data Ownership",
      blocks: [
        {
          type: "p",
          text: "As between DriveOps and the Customer, Customer Data in the tenant workspace remains the Customer’s. DriveOps processes Customer Data to provide and secure the Service, as described in the Privacy Policy. DriveOps may use aggregated or de-identified operational metrics to improve the Service where permitted by law—confirm final wording with counsel.",
        },
      ],
    },
    {
      id: "license",
      title: "16. License to Use the Platform",
      blocks: [
        {
          type: "p",
          text: "Subject to these Terms and your plan, DriveOps grants the Customer a limited, non-exclusive, non-transferable right to access and use the Service for its internal fleet operations during an active trial or subscription. No other license is granted.",
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "17. Intellectual Property",
      blocks: [
        {
          type: "p",
          text: "DriveOps and its licensors own the Service, software, branding, and documentation. These Terms do not transfer ownership of DriveOps intellectual property. Feedback you provide may be used by DriveOps without obligation to you.",
        },
      ],
    },
    {
      id: "availability",
      title: "18. Service Availability and Maintenance",
      blocks: [
        {
          type: "p",
          text: "We aim to keep the Service available but do not guarantee uninterrupted or error-free operation. We may perform maintenance, deploy updates, or temporarily suspend features. Scheduled maintenance notices may be provided when practical but are not guaranteed.",
        },
      ],
    },
    {
      id: "suspension-termination",
      title: "19. Suspension and Termination",
      blocks: [
        {
          type: "p",
          text: "We may suspend or terminate access for expired plans, non-payment (when billing is enabled), Acceptable Use violations, security risk, or legal requirements. Platform operators may suspend tenants and, after confirmation steps, permanently delete tenant workspaces.",
        },
      ],
    },
    {
      id: "export-deletion",
      title: "20. Data Export and Deletion After Termination",
      blocks: [
        {
          type: "p",
          text: "On trial or subscription expiry, data is generally retained while access is restricted. Permanent deletion removes the tenant schema and related auth users and attempts best-effort removal of associated stored files. A self-serve full data-export API is not verified in the current product. Customers needing export before deletion should contact support in advance: [DATA_EXPORT_PROCESS].",
        },
      ],
    },
    {
      id: "disclaimers",
      title: "21. Disclaimers",
      blocks: [
        {
          type: "p",
          text: "THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY LAW, DRIVEOPS DISCLAIMS WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. DRIVEOPS DOES NOT WARRANT THAT TRIPS WILL BE COMPLETED, VEHICLES WILL BE AVAILABLE, DRIVERS WILL ACT LAWFULLY OR SAFELY, OR THAT NOTIFICATIONS, MAPS, OR TRACKING WILL BE TIMELY OR ACCURATE.",
        },
        {
          type: "note",
          text: "Legal review required for disclaimer scope under applicable consumer/business law.",
        },
      ],
    },
    {
      id: "limitation-of-liability",
      title: "22. Limitation of Liability",
      blocks: [
        {
          type: "p",
          text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, DRIVEOPS AND ITS SUPPLIERS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, REVENUE, DATA, OR GOODWILL. DRIVEOPS’ TOTAL LIABILITY ARISING OUT OF THESE TERMS OR THE SERVICE WILL NOT EXCEED THE AMOUNTS PAID BY THE CUSTOMER TO DRIVEOPS FOR THE SERVICE IN THE [LIABILITY_CAP_PERIOD — e.g., twelve (12) months] BEFORE THE CLAIM (OR, IF NONE, [LIABILITY_CAP_AMOUNT]).",
        },
        {
          type: "note",
          text: "Legal review required: liability caps, exclusions, and non-excludable statutory rights.",
        },
      ],
    },
    {
      id: "indemnification",
      title: "23. Indemnification",
      blocks: [
        {
          type: "p",
          text: "The Customer will defend and indemnify DriveOps against claims arising from Customer Data, the Customer’s transport operations, misuse of tracking links, failure to obtain required consents, or violation of these Terms or law—subject to counsel-approved final wording.",
        },
        {
          type: "note",
          text: "Legal review required before relying on indemnification language.",
        },
      ],
    },
    {
      id: "changes-to-services",
      title: "24. Changes to the Services",
      blocks: [
        {
          type: "p",
          text: "We may add, change, or remove features, plan limits, or integrations. Material reductions to paid features may be handled as described in updated commercial terms once live billing is in place.",
        },
      ],
    },
    {
      id: "changes-to-terms",
      title: "25. Changes to These Terms",
      blocks: [
        {
          type: "p",
          text: "We may update these Terms. The version and “Last updated” date on this page will change when revisions are published. Continued use after the effective date of updated Terms may constitute acceptance where permitted by law—confirm with counsel.",
        },
      ],
    },
    {
      id: "governing-law",
      title: "26. Governing Law and Jurisdiction",
      blocks: [
        {
          type: "p",
          text: "These Terms are governed by the laws of [GOVERNING_LAW_JURISDICTION — e.g., India], without regard to conflict-of-law rules. Courts at [VENUE — e.g., Kochi, Kerala] shall have exclusive jurisdiction, subject to mandatory law. Replace placeholders after counsel confirmation.",
        },
      ],
    },
    {
      id: "contact",
      title: "27. Contact Information",
      blocks: [
        {
          type: "p",
          text: `Contact DriveOps at ${contactEmail}, WhatsApp ${contactPhone} (sales) / ${supportPhone} (support). Publicly listed locality: ${locality}.`,
        },
        {
          type: "p",
          text: "Formal legal notices: [LEGAL_ENTITY_NAME], [REGISTERED_ADDRESS].",
        },
        {
          type: "note",
          text: "These Terms are not claimed to be legally compliant or publication-ready until placeholders are replaced and counsel has reviewed them.",
        },
      ],
    },
  ],
}
