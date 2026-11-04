# Legal content — placeholders and follow-ups

These Privacy Policy and Terms pages are **implementation-accurate drafts**. They are **not** claimed legally compliant or publication-ready without counsel review.

## Unresolved placeholders

| Placeholder | Where |
|-------------|--------|
| `[LEGAL_ENTITY_NAME]` | Privacy §2/§19, Terms §27 |
| `[REGISTERED_ADDRESS]` | Privacy §2/§19, Terms §27 |
| `[DATA_HOSTING_REGIONS]` | Privacy §11 |
| `[DATA_RETENTION_PERIOD]` | Privacy §12 |
| `[PRIVACY_REQUEST_PROCESS]` | Privacy §14 |
| `[GRIEVANCE_OFFICER_CONTACT]` | Privacy §19 |
| `[DATA_EXPORT_PROCESS]` | Terms §20 |
| `[LIABILITY_CAP_PERIOD]` / `[LIABILITY_CAP_AMOUNT]` | Terms §22 |
| `[GOVERNING_LAW_JURISDICTION]` / `[VENUE]` | Terms §26 |

## Needs business / lawyer confirmation

- Whether Google Analytics 4 may load without a cookie-consent banner
- Cashfree / live billing, auto-renew, refund, and tax language
- Who receives product-owner signup WhatsApp alerts (internal staff vs processors)
- International transfer / hosting region wording
- Customer self-serve hard-delete / export policy
- Final governing law and venue
- Publication readiness of both documents

## Phase 5 follow-ups (not in this website change)

1. DriveOps-UI: AuthFooter + signup acceptance checkbox; point AppFooter at canonical `/privacy-policy/` and `/terms-and-conditions/` (legacy `/privacy/` and `/terms/` already redirect)
2. DB migration for `terms_version` / `privacy_version` / `accepted_at` if acceptance must be stored
3. Server email templates: set `privacy_url` / `terms_url` to marketing legal pages
4. Driver App: wire unused `login.terms` string; optional Settings links
5. Optional Privacy link on public tracking page
