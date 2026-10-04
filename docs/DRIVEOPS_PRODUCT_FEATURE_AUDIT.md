# DriveOps Product Feature Audit

**Audit date:** 2026-03-22  
**Scope:** Drive-Ops-Server, DriveOps-UI, Driver-App, Drive-Ops-Website (marketing readiness)  
**Method:** Codebase-backed capability inventory. Status labels are conservative; unverified items are marked UNKNOWN or Needs Verification.  
**Status vocabulary:** IMPLEMENTED · PARTIALLY IMPLEMENTED · PLACEHOLDER · EXPERIMENTAL · INTERNAL · DEPRECATED · PLANNED · NOT IMPLEMENTED · UNKNOWN

---

## 1. Executive Summary

DriveOps is a multi-tenant fleet operations platform covering trip lifecycle, dispatch/assignment, driver and vehicle management, live fleet visibility, self-drive rentals, trip sheets, fuel, maintenance, compliance document vaulting, WhatsApp-centric customer/driver communication, reviews ingest, packages, attendance/duty, and role/tenant administration.

**Strongest implemented product areas**

- Trip create → allocate → driver accept/reject → execute → trip sheet → complete
- Live fleet map (ops) and customer public tracking (token + WebSocket)
- Driver mobile app for duty, trips, GPS, trip sheets, fuel, issues, notifications
- Rentals lifecycle with manual payment recording
- WhatsApp templates for assignment, confirmation (with tracking URL), OTP, compliance, reviews
- Compliance vault + expiry scanning + WhatsApp alerts (OCR optional / often off)
- Multi-tenant platform admin and tenant-scoped ops UI

**Weakest / not ready for marketing claims**

- Finance suite and advanced reports (feature-flagged OFF / mock UIs)
- Compliance inspections (placeholder)
- Route optimization, nearest-vehicle auto-dispatch, FASTag, vehicle P&L, predictive maintenance
- Payment gateway / automated invoicing
- Always-on OCR, SMS delivery, Google Business review autopilot
- Driver earnings UI and some orphan/placeholder Driver App screens

**Website takeaway:** Market what ships end-to-end today (trips, dispatch, live tracking, driver app, WhatsApp, rentals, compliance vault, fuel/maintenance basics). Do not market finance BI, auto-dispatch intelligence, or hardware telematics.

---

## 2. Product Capability Overview

| Domain | Capability (high level) | Status |
|--------|-------------------------|--------|
| Trips & scheduling | Create/manage trips; stops; recurrence materialization | IMPLEMENTED |
| Dispatch | Allocate + resource availability; conflict/candidate checks; driver accept/reject | IMPLEMENTED |
| Drivers | CRUD, assignment, shifts/attendance, payroll UI | IMPLEMENTED / PARTIALLY (payroll depth UNKNOWN) |
| Driver App | Duty, GPS, trips, sheets, fuel, issues, FCM/WS | IMPLEMENTED (some PARTIAL/PLACEHOLDER) |
| Vehicles | Fleet CRUD, catalog, issues, imports | IMPLEMENTED |
| Live fleet | Ops live vehicles; Redis GPS TTL; Mapbox UI; customer tracking | IMPLEMENTED |
| Customers | Customer records; trip linkage; tracking | IMPLEMENTED |
| Rentals | Full self-drive lifecycle + manual payments | IMPLEMENTED |
| Trip sheets | Draft/submit; driver + ops flows | IMPLEMENTED |
| Fuel | Fuel logs (ops + driver); mock flag off in UI | IMPLEMENTED |
| Maintenance | Logs/summary + scan job | IMPLEMENTED |
| Compliance | Vault, rules, expiry, WhatsApp; OCR optional | PARTIALLY IMPLEMENTED |
| Documents / files | S3-backed file module; extraction | IMPLEMENTED / PARTIAL (OCR) |
| Notifications | In-app, web push, mobile push, email, WhatsApp | IMPLEMENTED (SMS NOT IMPLEMENTED) |
| WhatsApp | ChatServe templates + buttons + webhooks | IMPLEMENTED |
| Reviews | WhatsApp request + inbound ingest; ops inbox | IMPLEMENTED |
| Packages | Backend + ops support | IMPLEMENTED (depth UNKNOWN) |
| Attendance / duty | Driver shifts; duty in app; Command Center | IMPLEMENTED (nav exposure PARTIAL) |
| Reports / analytics | Flagged OFF; mock UIs | PLACEHOLDER / NOT IMPLEMENTED (productized) |
| Finance | Feature flag OFF | NOT IMPLEMENTED (productized) |
| Users / tenants | Roles, platform_*, tenant lifecycle | IMPLEMENTED |
| Integrations | Google Maps/Places, Mapbox, ChatServe, FCM, S3 | IMPLEMENTED |
| Automation | APScheduler jobs (materialize, expiry, scans, cleanup) | IMPLEMENTED |
| Imports | Drivers and vehicles only | PARTIALLY IMPLEMENTED |

---

## 3. Module Status Summary

| Module | Status | Notes |
|--------|--------|-------|
| Dashboard & Operations | IMPLEMENTED | Real APIs; Command Center exists but not in sidebar |
| Trips & Scheduling | IMPLEMENTED | ONE_WAY / ROUND_TRIP / FULL_DAY; recurrence via schedules |
| Dispatch & Assignment | IMPLEMENTED | Allocate + availability; no auto nearest-vehicle |
| Driver Management | IMPLEMENTED | Ops CRUD + payroll UI |
| Driver App | PARTIALLY IMPLEMENTED | Core ops strong; history/profile/offline/score gaps |
| Vehicle Management | IMPLEMENTED | Catalog, segments, imports |
| Live Fleet Tracking | IMPLEMENTED | Poll + WebSocket; no SSE; no hardware trackers |
| Customers | IMPLEMENTED | Records + trip/tracking linkage |
| Rentals | IMPLEMENTED | Lifecycle + manual payments; no gateway/invoicing |
| Trip Sheets | IMPLEMENTED | Driver + ops |
| Fuel Management | IMPLEMENTED | `USE_FUEL_LOGS_MOCK=false` |
| Maintenance | IMPLEMENTED | Scan job; not predictive |
| Compliance | PARTIALLY IMPLEMENTED | Vault/expiry/alerts; inspections PLACEHOLDER; OCR often off |
| Document Management | PARTIALLY IMPLEMENTED | Files/S3 + extraction; OCR_PROVIDER default `none` |
| Notifications & Alerts | IMPLEMENTED | SMS enum only |
| WhatsApp Communication | IMPLEMENTED | ChatServe |
| Customer Communication | PARTIALLY IMPLEMENTED | WhatsApp confirmation/tracking; no broad omnichannel suite |
| Reviews & Feedback | IMPLEMENTED | WhatsApp-centric; no public web form |
| Packages | IMPLEMENTED | Backend module present; website claim depth UNKNOWN |
| Attendance / Duty | IMPLEMENTED | App duty + ops attendance; sidebar gap |
| Reports & Analytics | PLACEHOLDER | Reports feature flag OFF / mock |
| User / Role / Tenant | IMPLEMENTED | Platform + tenant isolation |
| Integrations | IMPLEMENTED | Maps, ChatServe, FCM, S3 |
| Automation | IMPLEMENTED | Scheduler jobs listed in §27 |
| Payroll | PARTIALLY IMPLEMENTED | Real UI; full payroll product depth UNKNOWN |
| Finance | NOT IMPLEMENTED | Feature flag OFF |

### Feature matrix (cross-cutting)

| Feature | Backend | Ops UI | Driver App | Customer-facing | Automation | Notifications |
|---------|---------|--------|------------|-----------------|------------|---------------|
| Trip CRUD & statuses | Yes | Yes | Yes (execute) | Tracking link | Materialize, unassigned reminder | WhatsApp assign/confirm |
| Recurring schedules | Yes | Yes | N/A | N/A | TRIP_SCHEDULE_MATERIALIZE | Indirect |
| Dispatch / allocate | Yes | Yes | Accept/Reject | N/A | Reminder job | WhatsApp + push |
| Live GPS / fleet map | Yes | Yes (Mapbox) | GPS upload | Public token + WS | Redis TTL | N/A |
| Trip sheets | Yes | Yes | Yes | N/A | N/A | WhatsApp TRIP_SHEET |
| Fuel logs | Yes | Yes | Yes | N/A | N/A | Unknown |
| Maintenance | Yes | Yes | Issues (related) | N/A | MAINTENANCE_SCAN | Unknown |
| Compliance vault | Yes | Yes | N/A | N/A | DOCUMENT_EXPIRY_SCAN, COMPLIANCE_NOTIFICATION_DISPATCH | WhatsApp |
| Compliance inspections | No | PLACEHOLDER | N/A | N/A | No | No |
| Rentals lifecycle | Yes | Yes | N/A | Limited | RENTAL_HOLD_EXPIRY | Unknown |
| Rental payments (manual) | Yes | Yes | N/A | N/A | No | No |
| Payment gateway / invoicing | No | No | No | No | No | No |
| Reviews | Yes | Inbox | N/A | WhatsApp | Webhook ingest | WhatsApp request |
| Attendance / duty | Yes | Yes (not sidebar) | Duty | N/A | Unknown | Unknown |
| Reports / BI | Weak/mock | Flag OFF | N/A | N/A | No | No |
| Finance suite | No | Flag OFF | Orphan earnings | N/A | No | No |
| WhatsApp | Yes | Ops-driven | OTP login | Templates | Jobs + webhooks | Channel |
| SMS | Enum only | No | No | No | No | No |
| OCR | Optional | Via compliance/docs | N/A | N/A | Extraction path | No |
| Imports (drivers/vehicles) | Yes | Yes | N/A | N/A | No | No |
| Trip clone | No | No | No | No | No | No |
| Route optimization | No | No | Nav only | No | No | No |

---

## 4. Dashboard & Operations

| Field | Detail |
|-------|--------|
| **Status** | IMPLEMENTED |
| **What it does** | Ops home with live operational KPIs and entry points into fleet workflows. Separate Command Center exists but is not exposed in the main sidebar. |
| **Implemented capabilities** | Dashboard backed by real APIs; fleet-oriented ops shell; Command Center implemented off-nav. |
| **User workflows** | Operator signs in → views dashboard → drills into trips, fleet map, drivers, vehicles, alerts. |
| **Supported data** | Aggregate ops metrics from live backend endpoints (exact KPI set: see Needs Verification). |
| **Integrations** | Shared API client; location scope (`X-Location-ID`) where applicable. |
| **Automation** | None specific to dashboard rendering. |
| **Notifications** | Surfaces in-app notification entry points (channel details in §18). |
| **Mobile support** | Responsive ops UI; not a dedicated native ops app. |
| **Limitations** | Command Center and Attendance not in sidebar—discoverability gap. Reports/finance modules must not be assumed present from dashboard chrome. |
| **Evidence** | `DriveOps-UI` dashboard modules; feature flags for finance/reports; sidebar/nav config. |

---

## 5. Trips & Scheduling

| Field | Detail |
|-------|--------|
| **Status** | IMPLEMENTED |
| **What it does** | Create and manage chauffeur-style trips with typed itineraries, statuses, and optional recurrence via trip schedules. |
| **Implemented capabilities** | Trip types: `ONE_WAY`, `ROUND_TRIP`, `FULL_DAY`. Stops: `PICKUP`, `DROP`, `WAYPOINT`. Statuses: `scheduled`, `in_progress`, `completed`, `cancelled`. Recurrence: `DAILY` / `WEEKLY` / `MONTHLY` via `trip_schedules` + `TRIP_SCHEDULE_MATERIALIZE` job. |
| **User workflows** | Ops creates trip or schedule → system materializes recurring instances → dispatch allocates resources → driver executes → completion / trip sheet. |
| **Supported data** | Trip entities, stops/itinerary, schedule definitions, driver/vehicle refs, customer linkage. |
| **Integrations** | Places/Google Maps for locations; communications for assignment/confirmation. |
| **Automation** | `TRIP_SCHEDULE_MATERIALIZE`; `TRIP_UNASSIGNED_REMINDER`. |
| **Notifications** | WhatsApp `TRIP_ASSIGN`, `CUSTOMER_TRIP_CONFIRMATION` (tracking URL); push/in-app as configured. |
| **Mobile support** | Driver App trip accept/reject/start/complete; navigation via Google Nav SDK (mobile). |
| **Limitations** | No trip clone API. Not a full TMS with optimization. |
| **Evidence** | `app/modules/trips`, `app/modules/trip_schedules`; Driver App trips features; ops Trips UI. |

---

## 6. Dispatch & Assignment

| Field | Detail |
|-------|--------|
| **Status** | IMPLEMENTED |
| **What it does** | Assign drivers/vehicles to trips using allocate flows and resource availability checks (conflicts and candidates). |
| **Implemented capabilities** | Allocate API; resource availability (conflicts, candidates); driver accept/reject. |
| **User workflows** | Dispatcher reviews trip → checks availability → allocates → driver notified → accept/reject → reassignment if needed. |
| **Supported data** | Assignment bindings, availability windows, conflict signals, candidate lists. |
| **Integrations** | WhatsApp assignment templates with Accept/Reject buttons; mobile push. |
| **Automation** | Unassigned trip reminder job. |
| **Notifications** | WhatsApp `TRIP_ASSIGN`; FCM/in-app for drivers. |
| **Mobile support** | Accept/Reject in Driver App; offline sync does **not** cover accept/reject. |
| **Limitations** | No nearest-vehicle auto-dispatch; no route optimization; human-in-the-loop dispatch. |
| **Evidence** | Dispatch/allocate + `resource_availability` backend; Driver App accept/reject; ChatServe trip assign templates. |

---

## 7. Driver Management

| Field | Detail |
|-------|--------|
| **Status** | IMPLEMENTED |
| **What it does** | Maintain driver master data, assignments, shifts/attendance, and payroll-related ops UI. |
| **Implemented capabilities** | Driver CRUD; assigned vehicles; shifts/attendance module; payroll real UI; driver imports. |
| **User workflows** | Create/import drivers → assign to trips/vehicles → monitor duty/shifts → payroll screens as used by tenant. |
| **Supported data** | Driver profiles, license-related fields (schema-dependent), shift records, assignment refs. |
| **Integrations** | Auth for Driver App; WhatsApp OTP; notifications. |
| **Automation** | Tied to assignment reminders and tenant lifecycle (indirect). |
| **Notifications** | Assignment, OTP, compliance (if docs on driver). |
| **Mobile support** | Full Driver App for operational drivers. |
| **Limitations** | Driver App profile editing limited (read + language). Earnings UI orphaned—do not claim. Payroll product completeness UNKNOWN beyond “real UI”. |
| **Evidence** | `app/modules/drivers`, attendance/driver_shifts, payroll UI; imports (drivers). |

---

## 8. Driver App

| Field | Detail |
|-------|--------|
| **Status** | PARTIALLY IMPLEMENTED |
| **What it does** | Android-first Flutter app for duty, trip execution, GPS, trip sheets, fuel, vehicle issues, and notifications. |
| **Implemented capabilities** | Password + WhatsApp OTP login; forgot/reset password; duty + GPS; trips accept/reject/start/complete; Google Nav SDK navigation (mobile); trip sheets; fuel logs; vehicle issues; FCM + WebSocket notifications; i18n: `en`, `ml`, `hi`. |
| **User workflows** | Login → go on duty → receive assignment → accept/reject → navigate → start/complete trip → submit trip sheet / fuel / issues. |
| **Supported data** | Duty state, trip detail/stops, location pings, trip sheets, fuel logs, issues, notification inbox. |
| **Integrations** | OpenAPI SDK (`lib/generated/`); Dio; FCM; ChatServe OTP; Google Nav; Isar offline store. |
| **Automation** | Client-side offline queue/sync for subset of events; server scheduler independent. |
| **Notifications** | FCM mobile push + WebSocket. |
| **Mobile support** | Primary surface (this module). |
| **Limitations** | **Partial:** trip history; profile (read + language, no edit fields); offline sync covers start/end trip, location, fuel—not accept/reject or trip sheets. **Placeholders:** score, handover. **Orphan:** earnings, active trip screen. |
| **Evidence** | `Driver-App/lib/features/*` (auth, trips, fuel_log, profile, etc.); translations `en`/`hi`/`ml`. |

---

## 9. Vehicle Management

| Field | Detail |
|-------|--------|
| **Status** | IMPLEMENTED |
| **What it does** | Fleet vehicle master data, catalog/segments, documents, issues, and imports. |
| **Implemented capabilities** | Vehicle CRUD; brand/model catalog; vehicle segments (replacing older type naming in API evolution); vehicle issues; vehicle imports; ops forms with documents sections. |
| **User workflows** | Add/import vehicle → attach docs → assign to trips/rentals → track issues/maintenance. |
| **Supported data** | Registration/identity fields, catalog refs, documents, issue categories/severity summaries (API). |
| **Integrations** | Files/S3; compliance vault overlap; platform vehicle catalog for platform admins. |
| **Automation** | Document expiry / maintenance scans (related). |
| **Notifications** | Compliance-related for docs; issue flows UNKNOWN for push. |
| **Mobile support** | Driver reports vehicle issues; no full fleet admin in Driver App. |
| **Limitations** | No vehicle P&L; no FASTag product; no hardware GPS tracker binding as a product feature. |
| **Evidence** | `app/modules/vehicles`, vehicle catalog APIs; DriveOps-UI Vehicles module; Driver App vehicle issues. |

---

## 10. Live Fleet Tracking

| Field | Detail |
|-------|--------|
| **Status** | IMPLEMENTED |
| **What it does** | Near-real-time visibility of driver/vehicle positions for ops and shareable customer trip tracking. |
| **Implemented capabilities** | Driver GPS pings; Redis TTL for live positions; ops `GET /ops/live-vehicles`; customer public token + WebSocket; pattern REST poll + WebSocket; Mapbox fleet map in UI (~60s poll + WebSocket). No SSE. |
| **User workflows** | Driver on duty streams GPS → ops views live map → customer opens tracking URL from WhatsApp confirmation. |
| **Supported data** | Lat/lng pings, vehicle/driver live items, tracking session/route payloads. |
| **Integrations** | Mapbox (ops UI); Google Maps/Places (addressing/nav adjacency); Redis. |
| **Automation** | TTL expiry of live keys; no predictive ETA product claimed. |
| **Notifications** | Tracking URL delivered via WhatsApp customer confirmation template. |
| **Mobile support** | Driver is the GPS source; customer tracking is web/token-based. |
| **Limitations** | Phone-app GPS, not dedicated hardware trackers. Not marketed as continuous guaranteed SLA tracking without connectivity. |
| **Evidence** | `ops_live_vehicles`, `customer_tracking`; DriveOps-UI fleet map; Driver App location pipeline. |

---

## 11. Customers

| Field | Detail |
|-------|--------|
| **Status** | IMPLEMENTED |
| **What it does** | Customer records used in trip booking/ops and customer tracking communication. |
| **Implemented capabilities** | Customer module CRUD/list (API-backed ops); linkage to trips; public tracking via token. |
| **User workflows** | Create/select customer on trip → send confirmation with tracking → customer follows trip. |
| **Supported data** | Customer identity/contact fields (schema-level); trip associations. |
| **Integrations** | WhatsApp `CUSTOMER_TRIP_CONFIRMATION`; customer tracking WebSocket. |
| **Automation** | None customer-CRM-specific beyond trip/comms jobs. |
| **Notifications** | WhatsApp confirmation; review requests (post-trip path). |
| **Mobile support** | Customer experience is link/WebSocket tracking, not a customer native app. |
| **Limitations** | Not a full CRM/marketing automation suite. |
| **Evidence** | `app/modules/customers`, `customer_tracking`; ops Customers UI. |

---

## 12. Rentals

| Field | Detail |
|-------|--------|
| **Status** | IMPLEMENTED |
| **What it does** | Self-drive rental booking lifecycle from hold through settle/extend, with manual payment recording. |
| **Implemented capabilities** | Lifecycle: hold / confirm / cancel / ready / handover / return / inspect / settle / extend. Payments: `CASH`, `UPI`, `CARD`, `BANK_TRANSFER`, `OTHER` — **manual recording**. Charge lines / financial status models present in API evolution. |
| **User workflows** | Create hold → confirm → prepare vehicle → handover → return/inspect → settle payments → optional extend. Hold expiry via scheduler. |
| **Supported data** | Booking, inspection request payloads, payments, allocations, charge lines, overview aggregates. |
| **Integrations** | Vehicles, customers, files (as used); scheduler hold expiry. |
| **Automation** | `RENTAL_HOLD_EXPIRY`. |
| **Notifications** | Depth UNKNOWN for rental-specific WhatsApp templates beyond general channels. |
| **Mobile support** | Ops UI primary; not a renter marketplace app. |
| **Limitations** | **No invoicing product; no payment gateway.** Inspect step is rental workflow inspect—not compliance inspections module. |
| **Evidence** | `app/modules/rentals` / Self Drive Rentals API; DriveOps-UI rentals screens. |

---

## 13. Trip Sheets

| Field | Detail |
|-------|--------|
| **Status** | IMPLEMENTED |
| **What it does** | Capture post-trip operational details (draft/update/submit) for ops reconciliation. |
| **Implemented capabilities** | Trip sheet draft update, submit request, trip/stop context; driver mobile trip sheets; ops trip sheet flows; WhatsApp `TRIP_SHEET` template. |
| **User workflows** | Trip completes or nears completion → driver fills sheet → submit → ops reviews. |
| **Supported data** | Sheet fields per API (`TripSheetResponse`, draft/submit models); stop context. |
| **Integrations** | Trips module; WhatsApp; files if attachments used. |
| **Automation** | None specific beyond notifications. |
| **Notifications** | WhatsApp `TRIP_SHEET`. |
| **Mobile support** | Implemented in Driver App; **not** in offline sync set. |
| **Limitations** | Offline cannot submit sheets; exact mandatory field set is schema-defined (verify in OpenAPI for marketing copy). |
| **Evidence** | `app/modules/trip_sheets`; Driver App trip sheet screens; communications templates. |

---

## 14. Fuel Management

| Field | Detail |
|-------|--------|
| **Status** | IMPLEMENTED |
| **What it does** | Record and list fuel fill events for vehicles, including driver-submitted logs. |
| **Implemented capabilities** | Fuel log create/list/detail APIs; driver fuel log create; ops UI with `USE_FUEL_LOGS_MOCK=false`; receipt summary models; offline fuel sync in Driver App. |
| **User workflows** | Driver logs fuel (optionally offline) → sync → ops reviews fuel history. |
| **Supported data** | Volume/cost/odometer-style fields per schema; vehicle/driver refs; receipt summaries. |
| **Integrations** | Files for receipts (where used); vehicles/drivers. |
| **Automation** | None fuel-specific scheduler job listed. |
| **Notifications** | UNKNOWN. |
| **Mobile support** | Driver App fuel list + create; offline supported for fuel. |
| **Limitations** | Not a fuel-card network integration; not FASTag. |
| **Evidence** | `app/modules/fuel_logs`, driver mobile fuel APIs; Driver App `fuel_log` feature; DriveOps-UI fuel module flag. |

---

## 15. Maintenance

| Field | Detail |
|-------|--------|
| **Status** | IMPLEMENTED |
| **What it does** | Track maintenance records/summaries and run scheduled maintenance scans. |
| **Implemented capabilities** | Maintenance list/summary APIs; monthly spend model in API; `MAINTENANCE_SCAN` job; vehicle issues adjacency from drivers. |
| **User workflows** | Log maintenance → review summaries → act on scan outcomes (ops process). |
| **Supported data** | Maintenance list items, vehicle summaries, tab filters, spend aggregates. |
| **Integrations** | Vehicles; scheduler. |
| **Automation** | `MAINTENANCE_SCAN`. |
| **Notifications** | UNKNOWN beyond generic notification infrastructure. |
| **Mobile support** | Vehicle issues from Driver App; full maintenance admin is ops UI. |
| **Limitations** | **Not predictive maintenance.** Do not claim ML failure prediction. |
| **Evidence** | `app/modules/maintenance`; scheduler job name; DriveOps-UI maintenance screens. |

---

## 16. Compliance

| Field | Detail |
|-------|--------|
| **Status** | PARTIALLY IMPLEMENTED |
| **What it does** | Document vault and rules with expiry scanning and WhatsApp alerts; optional OCR extraction. |
| **Implemented capabilities** | Compliance vault; rules; expiry scan; WhatsApp alerts; OCR via `document_extraction` with `OCR_PROVIDER` default `"none"`. |
| **User workflows** | Upload compliance docs → rules evaluate → expiry jobs notify via WhatsApp → ops remediates. |
| **Supported data** | Compliance documents, rule configs, expiry states. |
| **Integrations** | Files/S3; ChatServe WhatsApp; document_extraction. |
| **Automation** | `DOCUMENT_EXPIRY_SCAN`, `COMPLIANCE_NOTIFICATION_DISPATCH`. |
| **Notifications** | WhatsApp compliance templates. |
| **Mobile support** | Ops-centric; Driver App not the compliance vault UI. |
| **Limitations** | **Inspections not supported** (UI PLACEHOLDER). OCR is not always-on. Not a legal/compliance guarantee product. |
| **Evidence** | `app/modules/compliance`, `document_extraction`; DriveOps-UI Compliance Inspections PLACEHOLDER; scheduler jobs. |

---

## 17. Document Management

| Field | Detail |
|-------|--------|
| **Status** | PARTIALLY IMPLEMENTED |
| **What it does** | Store and serve operational/compliance files (S3-backed) with optional extraction/OCR. |
| **Implemented capabilities** | Files module / S3; document attachment on vehicles/compliance paths; extraction pipeline when provider configured. |
| **User workflows** | Upload document → store → optional extract → consume in compliance/vehicle forms. |
| **Supported data** | File metadata, modules, URLs; extracted fields when OCR enabled. |
| **Integrations** | S3; OCR provider (configurable, default none). |
| **Automation** | Expiry/compliance jobs consume stored docs. |
| **Notifications** | Via compliance dispatch when expiry rules fire. |
| **Mobile support** | Driver may upload receipts/sheet-related files where implemented; full DMS is ops. |
| **Limitations** | Default OCR off; not a general enterprise DMS (versioning/workflows UNKNOWN). |
| **Evidence** | `files`/S3 module; `document_extraction`; Vehicles Documents UI sections. |

---

## 18. Notifications & Alerts

| Field | Detail |
|-------|--------|
| **Status** | IMPLEMENTED (SMS: NOT IMPLEMENTED) |
| **What it does** | Multi-channel notification delivery and cleanup for ops and drivers. |
| **Implemented capabilities** | Channels real: `IN_APP`, `WEB_PUSH`, `MOBILE_PUSH`, `EMAIL`, `WHATSAPP`. SMS exists as enum only—**no provider**. FCM + WebSocket for mobile; cleanup job. |
| **User workflows** | Domain events enqueue notifications → deliver on channel → user reads in-app/push/WhatsApp/email. |
| **Supported data** | Notification records, channel enums, device tokens (FCM). |
| **Integrations** | FCM; email provider (configured); ChatServe WhatsApp; WebSocket. |
| **Automation** | `NOTIFICATION_CLEANUP`; domain jobs that dispatch (e.g. compliance). |
| **Notifications** | N/A (this is the module). |
| **Mobile support** | Driver App FCM + WS. |
| **Limitations** | Do not claim SMS. Delivery SLAs depend on third parties. |
| **Evidence** | `app/modules/notifications`; Driver App notification wiring; scheduler `NOTIFICATION_CLEANUP`. |

---

## 19. WhatsApp Communication

| Field | Detail |
|-------|--------|
| **Status** | IMPLEMENTED |
| **What it does** | Template-driven WhatsApp messaging via ChatServe for operational and customer journeys. |
| **Implemented capabilities** | Templates: `TRIP_ASSIGN`, `TRIP_SHEET`, `CUSTOMER_TRIP_CONFIRMATION` (tracking URL), OTP, compliance, reviews. Accept/Reject buttons. ChatServe provider. Inbound paths for reviews (and OTP flows). |
| **User workflows** | Trip assigned → WhatsApp to driver with actions → customer confirmation with track link → review request → compliance alerts. |
| **Supported data** | Template payloads, button responses, webhook ingest. |
| **Integrations** | ChatServe; trips; compliance; reviews; auth OTP. |
| **Automation** | Triggered by domain events and compliance dispatch job. |
| **Notifications** | WhatsApp is a primary notification channel. |
| **Mobile support** | Drivers use WhatsApp for OTP and assignment actions; app complements with FCM. |
| **Limitations** | Template set is finite; not a free-form WhatsApp CRM inbox product unless separately evidenced (UNKNOWN). |
| **Evidence** | `app/modules/communications`; ChatServe integration; template names above. |

---

## 20. Customer Communication

| Field | Detail |
|-------|--------|
| **Status** | PARTIALLY IMPLEMENTED |
| **What it does** | Customer-facing operational messaging centered on trip confirmation, tracking, and review requests—primarily WhatsApp. |
| **Implemented capabilities** | `CUSTOMER_TRIP_CONFIRMATION` with tracking URL; customer tracking session WebSocket; review request via WhatsApp. |
| **User workflows** | Booking/assignment → confirmation message → customer tracks → optional review request. |
| **Supported data** | Tracking tokens/sessions; customer contact for WhatsApp. |
| **Integrations** | WhatsApp; customer_tracking; reviews. |
| **Automation** | Event-driven sends; not a drip-campaign builder. |
| **Notifications** | WhatsApp primary; email possible via generic notification stack where wired. |
| **Mobile support** | Link-based tracking; no dedicated customer app claimed. |
| **Limitations** | Not omnichannel marketing suite; no SMS; no public web review form. |
| **Evidence** | Communications templates; `customer_tracking`; reviews module. |

---

## 21. Reviews & Feedback

| Field | Detail |
|-------|--------|
| **Status** | IMPLEMENTED |
| **What it does** | Request reviews over WhatsApp and ingest responses into an ops inbox. |
| **Implemented capabilities** | WhatsApp review request; inbound webhook ingest; ops reviews inbox real in DriveOps-UI. |
| **User workflows** | Post-trip (or ops-triggered) review request → customer replies on WhatsApp → ops views review list/detail. |
| **Supported data** | Review list/detail models; ratings/comments per schema. |
| **Integrations** | ChatServe webhooks; trips/customers adjacency. |
| **Automation** | Webhook ingest; not Google Business autopilot. |
| **Notifications** | WhatsApp request messages. |
| **Mobile support** | Customer via WhatsApp; ops via web. |
| **Limitations** | **No public web review form. Not Google Business review autopilot.** |
| **Evidence** | `app/modules/reviews`; DriveOps-UI reviews inbox; communications review templates. |

---

## 22. Packages

| Field | Detail |
|-------|--------|
| **Status** | IMPLEMENTED (marketing depth: UNKNOWN) |
| **What it does** | Backend packages module for packaged offerings used in ops/pricing-adjacent flows. |
| **Implemented capabilities** | Server module `packages` present; ops consumption API-backed where wired. Exact commercial packaging UX breadth not fully asserted here. |
| **User workflows** | Ops selects/manages packages in supported screens (verify before website copy). |
| **Supported data** | Package entities per module schema. |
| **Integrations** | Trips/pricing adjacency possible—confirm before claims. |
| **Automation** | UNKNOWN. |
| **Notifications** | UNKNOWN. |
| **Mobile support** | Not a Driver App primary feature. |
| **Limitations** | Avoid “dynamic packaging engine” language without UI walkthrough. |
| **Evidence** | `app/modules/packages`; related pricing/platform templates if used. |

---

## 23. Attendance / Duty

| Field | Detail |
|-------|--------|
| **Status** | IMPLEMENTED (navigation exposure: PARTIAL) |
| **What it does** | Track driver duty/shifts for operational readiness; drivers go on/off duty in the app with GPS. |
| **Implemented capabilities** | Attendance / `driver_shifts` backend; Driver App duty + GPS; Attendance + Command Center implemented in UI but **not in sidebar**. |
| **User workflows** | Driver starts duty → GPS live → ops sees availability/attendance → end duty. |
| **Supported data** | Shift/duty records; driver summaries; live presence via GPS pipeline. |
| **Integrations** | Live fleet; dispatch availability. |
| **Automation** | UNKNOWN beyond live TTL. |
| **Notifications** | UNKNOWN. |
| **Mobile support** | Core Driver App duty flow. |
| **Limitations** | Ops discoverability reduced by missing sidebar entries. |
| **Evidence** | attendance/driver_shifts modules; Driver App duty; DriveOps-UI Attendance/Command Center (off-sidebar). |

---

## 24. Reports & Analytics

| Field | Detail |
|-------|--------|
| **Status** | PLACEHOLDER / NOT IMPLEMENTED (as productized analytics) |
| **What it does** | Intended reporting surfaces; currently feature-flagged off with mock UIs. |
| **Implemented capabilities** | Reports feature flag OFF; mock UIs exist—do not treat as live analytics product. Some domain summaries (maintenance, etc.) exist as operational summaries, not a BI suite. |
| **User workflows** | Should not be marketed as a primary operator workflow today. |
| **Supported data** | Mock/flagged—do not document as production metrics warehouse. |
| **Integrations** | None productized for advanced BI. |
| **Automation** | No BI pipeline claimed. |
| **Notifications** | N/A. |
| **Mobile support** | N/A. |
| **Limitations** | **No advanced BI.** Finance flag also OFF. |
| **Evidence** | DriveOps-UI feature flags (`reports` OFF, `finance` OFF); mock report UIs. |

---

## 25. User / Role / Tenant Management

| Field | Detail |
|-------|--------|
| **Status** | IMPLEMENTED |
| **What it does** | Authenticated multi-tenant ops access with platform-level tenant administration and schema-per-tenant isolation. |
| **Implemented capabilities** | JWT auth with tenant binding; roles; `platform_*` APIs (tenants, templates, vehicle catalog); tenant lifecycle scan; password reset cleanup; location scope headers for location-aware domains. |
| **User workflows** | Platform admin manages tenants → tenant users operate within isolated schema → location-scoped lists where applicable. |
| **Supported data** | Users, roles, tenants, plans/subscriptions (admin plane), audit user refs. |
| **Integrations** | Auth tokens; scheduler tenant lifecycle. |
| **Automation** | `TENANT_LIFECYCLE_SCAN`, `PASSWORD_RESET_CLEANUP`, `JOB_CLEANUP`. |
| **Notifications** | Password/OTP related; platform alerts UNKNOWN. |
| **Mobile support** | Driver auth separate from ops roles; tenant-bound. |
| **Limitations** | Clients must never supply schema/tenant override; SUPER_ADMIN cross-tenant via controlled switch only. |
| **Evidence** | `platform_*` modules; auth/tenant context; `docs/MULTI_TENANCY.md` (server). |

---

## 26. Integrations

| Integration | Status | Role |
|-------------|--------|------|
| ChatServe (WhatsApp) | IMPLEMENTED | Templates, buttons, webhooks, OTP |
| FCM | IMPLEMENTED | Mobile push |
| WebSocket | IMPLEMENTED | Live tracking, notifications |
| Email | IMPLEMENTED | Notification channel |
| Google Maps / Places | IMPLEMENTED | Places, addressing; Nav SDK in Driver App |
| Mapbox | IMPLEMENTED | Ops fleet map |
| AWS S3 (files) | IMPLEMENTED | Document/file storage |
| Redis | IMPLEMENTED | Live GPS TTL |
| OCR provider | PARTIALLY IMPLEMENTED | Default `none` |
| SMS provider | NOT IMPLEMENTED | Enum only |
| Payment gateway | NOT IMPLEMENTED | Manual rental payments only |
| Google Business | NOT IMPLEMENTED | No review autopilot |
| Hardware GPS / FASTag | NOT IMPLEMENTED | — |
| OpenAPI clients | IMPLEMENTED | DriveOps-UI SDK; Driver App `lib/generated` |

| Field | Detail |
|-------|--------|
| **Status** | IMPLEMENTED (set above) |
| **What it does** | Connects DriveOps to maps, messaging, push, storage, and live state infrastructure. |
| **Implemented capabilities** | See table. |
| **User workflows** | Transparent to end users except WhatsApp/Maps/Nav. |
| **Supported data** | Tokens, webhooks, geo, files. |
| **Integrations** | N/A. |
| **Automation** | Provider webhooks + scheduler. |
| **Notifications** | Via integrated channels. |
| **Mobile support** | FCM, Nav SDK, WhatsApp OTP. |
| **Limitations** | Third-party uptime/template approval constraints. |
| **Evidence** | `communications`, `notifications`, `files`, `places`, `ops_live_vehicles`; UI Mapbox; Driver Nav/FCM. |

---

## 27. Automation

| Job | Purpose | Status |
|-----|---------|--------|
| `TRIP_SCHEDULE_MATERIALIZE` | Create trip instances from schedules | IMPLEMENTED |
| `TRIP_UNASSIGNED_REMINDER` | Remind for unassigned trips | IMPLEMENTED |
| `RENTAL_HOLD_EXPIRY` | Expire stale rental holds | IMPLEMENTED |
| `MAINTENANCE_SCAN` | Maintenance scanning | IMPLEMENTED |
| `DOCUMENT_EXPIRY_SCAN` | Compliance doc expiry | IMPLEMENTED |
| `COMPLIANCE_NOTIFICATION_DISPATCH` | Dispatch compliance WhatsApp/alerts | IMPLEMENTED |
| `TENANT_LIFECYCLE_SCAN` | Tenant lifecycle | IMPLEMENTED |
| `PASSWORD_RESET_CLEANUP` | Cleanup reset artifacts | IMPLEMENTED |
| `NOTIFICATION_CLEANUP` | Notification hygiene | IMPLEMENTED |
| `JOB_CLEANUP` | Scheduler job hygiene | IMPLEMENTED |

| Field | Detail |
|-------|--------|
| **Status** | IMPLEMENTED |
| **What it does** | APScheduler-driven background processing for schedules, reminders, expiry, scans, and cleanup. |
| **Implemented capabilities** | Jobs listed above. |
| **User workflows** | Mostly invisible; operators see outcomes (materialized trips, alerts, expired holds). |
| **Supported data** | Job runs in scheduler schema/store. |
| **Integrations** | Domain modules + WhatsApp/notifications. |
| **Automation** | This section. |
| **Notifications** | Compliance dispatch and reminders. |
| **Mobile support** | Indirect (drivers receive resulting notifications). |
| **Limitations** | Not a user-programmable automation builder / Zapier. |
| **Evidence** | Server scheduler module / job registrations. |

---

## 28. End-to-End Workflows

### A. Chauffeur trip (happy path) — IMPLEMENTED

1. Ops creates trip (type + stops) or schedule materializes trip.  
2. Dispatch allocates driver/vehicle using availability.  
3. Driver receives WhatsApp/push; Accept/Reject.  
4. Driver on duty; GPS feeds live map + customer tracking.  
5. Customer gets WhatsApp confirmation with tracking URL.  
6. Driver navigates, starts, completes trip.  
7. Driver submits trip sheet (online); optional fuel/issues.  
8. Optional WhatsApp review request → ops inbox.

### B. Recurring schedule — IMPLEMENTED

1. Ops defines `DAILY`/`WEEKLY`/`MONTHLY` schedule.  
2. `TRIP_SCHEDULE_MATERIALIZE` creates instances.  
3. Continues into dispatch workflow A.

### C. Self-drive rental — IMPLEMENTED (payments manual)

1. Hold → confirm (or cancel / hold expiry job).  
2. Ready → handover → return → inspect → settle.  
3. Record payments manually (CASH/UPI/CARD/BANK_TRANSFER/OTHER).  
4. Optional extend.

### D. Compliance expiry — PARTIALLY IMPLEMENTED

1. Docs stored in vault.  
2. `DOCUMENT_EXPIRY_SCAN` + `COMPLIANCE_NOTIFICATION_DISPATCH`.  
3. WhatsApp alerts to remediate.  
4. OCR only if provider configured (default none).  
5. Inspections workflow: PLACEHOLDER / not supported.

### E. Driver duty day — IMPLEMENTED (partial offline)

1. Login (password or WhatsApp OTP).  
2. Start duty → GPS.  
3. Execute trips; offline may cover start/end/location/fuel only.  
4. End duty.

---

## 29. User Personas

| Persona | Primary surfaces | Core jobs | Status fit |
|---------|------------------|-----------|------------|
| Fleet owner / ops manager | DriveOps-UI | Trips, dispatch, fleet map, compliance, rentals | Strong |
| Dispatcher | DriveOps-UI | Allocate, monitor unassigned, live map | Strong |
| Driver | Driver App (+ WhatsApp) | Duty, accept trips, navigate, sheets, fuel | Strong (gaps: profile edit, earnings, score) |
| Customer / passenger | WhatsApp + tracking link | Confirm awareness, track trip, review via WhatsApp | Adequate for ops messaging |
| Compliance clerk | DriveOps-UI | Vault, expiry follow-up | Partial (no inspections) |
| Rental desk | DriveOps-UI Rentals | Hold→settle, manual pay | Strong for manual ops |
| Platform SUPER_ADMIN | Platform APIs/UI | Tenants, templates, catalog | Strong (internal) |
| Finance / analyst | Reports/Finance flags | BI, P&L, invoicing | **Poor — do not sell** |
| Renter (self-serve app) | — | Book online with gateway | **NOT IMPLEMENTED** as consumer app |

---

## 30. Website-Safe Features

Safe to describe on the marketing site (with sober wording):

1. Multi-tenant fleet operations platform for chauffeur trips and self-drive rentals.  
2. Trip management with one-way, round-trip, and full-day trip types; pickup/drop/waypoint stops.  
3. Recurring trip schedules (daily/weekly/monthly) with automatic materialization.  
4. Dispatch allocation with conflict/candidate availability checks and driver accept/reject.  
5. Live fleet map for operators (Mapbox) fed by driver-app GPS.  
6. Customer trip tracking via secure link and live updates.  
7. Driver mobile app: duty, GPS, trips, navigation, trip sheets, fuel logs, vehicle issues, push notifications.  
8. WhatsApp operational messaging (assignment with actions, customer confirmation, OTP, compliance alerts, review requests).  
9. Trip sheets for post-trip capture.  
10. Fuel log capture from drivers and ops.  
11. Maintenance tracking and scheduled scans.  
12. Compliance document vault with expiry alerts over WhatsApp.  
13. Self-drive rental lifecycle with manual payment recording.  
14. Reviews collected via WhatsApp into an ops inbox.  
15. Role-based access and tenant isolation.  
16. Imports for drivers and vehicles.  
17. Multilingual driver app (English, Malayalam, Hindi).

---

## 31. Recommended Website Feature Groups

Suggested IA for Drive-Ops-Website (only safe claims):

1. **Run every trip** — Create, schedule, dispatch, accept/reject, complete.  
2. **See your fleet live** — Ops map + customer tracking links.  
3. **Equip every driver** — Driver app (duty, nav, sheets, fuel, issues).  
4. **WhatsApp-native ops** — Assignments, confirmations, OTP, compliance, reviews.  
5. **Vehicles & compliance** — Fleet records, document vault, expiry alerts.  
6. **Fuel & maintenance** — Everyday cost and upkeep tracking.  
7. **Self-drive rentals** — Hold to settle with recorded payments.  
8. **Built for operators** — Multi-tenant, roles, location-aware ops—not consumer ride-hail.

Optional softer group (careful): **Insights that matter day-to-day** — operational summaries only; **do not** title this “Analytics Suite” or “BI”.

---

## 32. Claims We Should NOT Make

Do **not** claim (not implemented or not productized):

- Route optimization / intelligent routing beyond turn-by-turn navigation  
- Nearest-vehicle **auto-dispatch**  
- FASTag integration  
- Vehicle P&L / profitability engine  
- Advanced BI / analytics suite (reports flag OFF / mocks)  
- Full finance suite (finance flag OFF)  
- Automated invoicing  
- Payment gateway / online checkout for rentals  
- Always-on OCR / AI document autopilot  
- SMS notifications  
- Driver earnings product UI  
- Trip cloning  
- Compliance **inspections** product  
- Google Business review autopilot  
- Predictive maintenance  
- Hardware GPS trackers / telematics devices  
- SSE-based live streaming (product uses REST poll + WebSocket)  
- Guaranteed offline for accept/reject or trip sheets  
- Public web review form  

---

## 33. Planned / Partial / Placeholder Features

| Item | Status | Notes |
|------|--------|-------|
| Finance module | NOT IMPLEMENTED (flag OFF) | Mock/hidden |
| Reports module | PLACEHOLDER | Flag OFF / mock UIs |
| Compliance Inspections | PLACEHOLDER | Not supported in backend product sense |
| OCR | PARTIALLY IMPLEMENTED | Default provider `none` |
| SMS | NOT IMPLEMENTED | Enum only |
| Driver App history | PARTIALLY IMPLEMENTED | — |
| Driver App profile edit | PARTIALLY IMPLEMENTED | Read + language only |
| Driver App offline sync | PARTIALLY IMPLEMENTED | start/end trip, location, fuel only |
| Driver App score | PLACEHOLDER | — |
| Driver App handover | PLACEHOLDER | — |
| Driver App earnings | INTERNAL / orphan | Do not market |
| Active trip screen (orphan) | UNKNOWN / orphan | Do not market |
| Attendance / Command Center nav | PARTIALLY IMPLEMENTED | Built, not in sidebar |
| Packages marketing depth | UNKNOWN | Verify UX before site copy |
| Payroll completeness | PARTIALLY IMPLEMENTED | Real UI; depth UNKNOWN |
| Trip clone | NOT IMPLEMENTED | — |
| Payment gateway / invoicing | NOT IMPLEMENTED | — |
| Imports beyond drivers/vehicles | NOT IMPLEMENTED | — |

---

## 34. Needs Verification

Before stronger website or sales claims, verify:

1. Exact dashboard KPI list and data freshness.  
2. Which rental notification templates actually send today.  
3. Payroll calculation rules vs. UI-only recording.  
4. Packages end-to-end UX and pricing linkage.  
5. Email notification coverage by event type.  
6. WEB_PUSH enablement requirements per tenant/browser.  
7. Whether rental “inspect” fields meet customer inspection expectations (vs. compliance inspections).  
8. Customer tracking map provider/UX on public page.  
9. Location-scope behavior copy for multi-branch fleets.  
10. Any EXPERIMENTAL flags not covered in this audit.  
11. Drive-Ops-Website current copy vs. this allowlist (drift check).  
12. Platform template / pricing override features—safe public wording.

---

## 35. Technical Evidence / Source Map

Concise map (repos):

| Area | Evidence (concise) |
|------|--------------------|
| Trips | `Drive-Ops-Server/app/modules/trips` |
| Schedules | `.../trip_schedules` + scheduler `TRIP_SCHEDULE_MATERIALIZE` |
| Dispatch / availability | allocate + `resource_availability` |
| Drivers | `.../drivers` |
| Vehicles / catalog | `.../vehicles`, platform vehicle catalog |
| Customers / tracking | `.../customers`, `.../customer_tracking` |
| Rentals | `.../rentals` (Self Drive Rentals API) |
| Trip sheets | `.../trip_sheets` |
| Fuel | `.../fuel_logs` + driver mobile fuel API |
| Maintenance | `.../maintenance` + `MAINTENANCE_SCAN` |
| Compliance / OCR | `.../compliance`, `.../document_extraction` |
| Communications | `.../communications` (ChatServe) |
| Notifications | `.../notifications` (FCM/email/WS/WhatsApp) |
| Reviews | `.../reviews` |
| Packages | `.../packages` |
| Attendance / shifts | attendance / `driver_shifts` |
| Payroll | payroll module + DriveOps-UI payroll UI |
| Live fleet | `ops_live_vehicles`, Redis TTL |
| Files | files/S3 |
| Places | places / Google Maps |
| Platform admin | `platform_*` |
| Imports | drivers/vehicles import paths |
| Scheduler | APScheduler job list in §27 |
| Ops UI | `DriveOps-UI/src/modules/*`; feature flags finance/reports |
| Fleet map | Mapbox; ~60s poll + WebSocket |
| Driver App | `Driver-App/lib/features/*`, `lib/generated/`, i18n `en`/`ml`/`hi` |
| Tenancy | `docs/MULTI_TENANCY.md`, tenant context / search_path |

---

## 36. Audit Summary

DriveOps today is a credible **operations system of record** for chauffeur trips, dispatch with human allocation, live phone-GPS fleet/customer tracking, driver mobile execution, WhatsApp-centric communication, trip sheets, fuel, maintenance, compliance vaulting with expiry alerts, and self-drive rentals with **manual** payments—on a solid multi-tenant backend.

It is **not** yet a finance/BI platform, payment-gateway rental marketplace, auto-dispatch optimizer, hardware telematics suite, or always-on AI compliance inspector. Marketing and website content should follow §30–§32 strictly; resolve §34 before expanding claims.

**Overall product maturity (conservative):** Core fleet ops — **IMPLEMENTED**; adjacent intelligence/finance — **NOT IMPLEMENTED** or **PLACEHOLDER**; compliance OCR/inspections and some Driver App surfaces — **PARTIAL/PLACEHOLDER**.

---

# Website Content Readiness

1. **Which features are safe to publish on the marketing website right now?**  
   See §30 (Website-Safe Features) and §31 (Recommended Website Feature Groups). Prioritize trips, dispatch, live tracking, driver app, WhatsApp, rentals (manual payments), compliance vault/expiry alerts, fuel, maintenance, trip sheets, and multi-tenant ops.

2. **Which features should be described cautiously or as “coming soon” / limited?**  
   OCR/document extraction (provider often none); packages depth; payroll; attendance/Command Center (built but not sidebar-exposed); Driver App history/profile/offline limitations; domain “summaries” that are not a BI suite; rental notifications beyond confirmed templates.

3. **Which features must not appear on the website?**  
   See §32—especially route optimization, auto nearest-vehicle dispatch, FASTag, vehicle P&L, advanced BI, finance suite, automated invoicing, payment gateway, always-on OCR, SMS, driver earnings, trip cloning, compliance inspections, Google Business review autopilot, predictive maintenance, hardware GPS trackers.

4. **What is the strongest end-to-end story for a landing page?**  
   “Assign the trip, notify on WhatsApp, track live, finish with trip sheets—drivers run the day from the app.” Pair with customer tracking link and optional self-drive rental lifecycle for fleets that also rent.

5. **What proof points can sales use without overclaiming?**  
   Trip types/statuses; accept/reject; Mapbox ops map + customer token tracking; ChatServe templates listed in §19; scheduler-backed recurrence and expiry; Driver App languages en/ml/hi; manual rental payment methods; feature flags proving reports/finance are not live.

6. **What should product prioritize next for website credibility?**  
   Productize or remove mock reports/finance; ship or hide compliance inspections placeholder; expose Attendance/Command Center in nav or drop from demos; harden Driver App history/profile; clarify OCR onboarding; add payment/invoicing only if strategically committed.

7. **Are there persona gaps that hurt conversion?**  
   Yes: finance buyers (no suite), self-serve renters (no gateway/app), and “AI dispatch/telematics” buyers (not built). Best ICP: regional fleet operators needing WhatsApp + driver app + live ops.

8. **What is the single biggest messaging risk?**  
   Equating “live tracking + WhatsApp + maps” with **auto-dispatch, hardware telematics, or full finance/BI**—those are the claims most likely to create lost deals or churn when demos fail.

---

*End of audit — 2026-03-22. Documentation only; no application code changes implied by this file.*
