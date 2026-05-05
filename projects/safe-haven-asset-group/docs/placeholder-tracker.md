# Safe Haven Asset Group — Placeholder Tracker

Use this checklist before launch. Run a global find/replace on every `[[TOKEN]]` in `docs/website-brief.md` and across all built pages.

After replacement, search for any remaining `[[` to catch missed tokens.

---

## Required Before Launch

- [ ] `[[LEGAL_BUSINESS_NAME]]` — Full legal entity name (e.g., Safe Haven Asset Group LLC)
- [ ] `[[BUSINESS_ADDRESS]]` — Physical mailing address (must be real; not a virtual mailbox if carrier-required SMS registration prohibits it)
- [ ] `[[BUSINESS_PHONE]]` — Primary public phone, formatted (XXX) XXX-XXXX
- [ ] `[[BUSINESS_EMAIL]]` — Primary inquiry email (e.g., hello@safehavenassetgroup.com)
- [ ] `[[PRIVACY_EMAIL]]` — Dedicated privacy request email (can equal BUSINESS_EMAIL or be a separate alias)
- [ ] `[[TERMS_EMAIL]]` — Legal/terms inquiry email (can equal BUSINESS_EMAIL or be a separate alias)
- [ ] `[[CALENDLY_LINK]]` — Public Calendly URL for residential/land consultations
- [ ] `[[CALENDLY_COMMERCIAL_LINK]]` — Public Calendly URL for commercial (separate 30-min block)
- [ ] `[[GOVERNING_LAW_STATE]]` — State governing Terms of Service (confirm with counsel)
- [ ] `[[EFFECTIVE_DATE]]` — Effective date for Privacy Policy and Terms of Service (Month Day, Year)
- [ ] `[[SOCIAL_LINKEDIN]]` — Full LinkedIn company page URL (hide slot if not active)
- [ ] `[[SOCIAL_FACEBOOK]]` — Full Facebook page URL (hide slot if not active)
- [ ] `[[SOCIAL_INSTAGRAM]]` — Full Instagram profile URL (hide slot if not active)
- [ ] `[[OFFICE_HOURS]]` — Human-readable hours (e.g., Mon–Fri, 9 AM–6 PM CT)
- [ ] `[[DOMAIN]]` — Production domain without protocol (e.g., safehavenassetgroup.com)
- [ ] `[[MARKET_1]]` — Top operating market (city + state)
- [ ] `[[MARKET_2]]` — Second operating market
- [ ] `[[MARKET_3]]` — Third operating market
- [ ] `[[STREET]]` — Street address component for JSON-LD
- [ ] `[[CITY]]` — City component for JSON-LD
- [ ] `[[STATE]]` — State component for JSON-LD
- [ ] `[[ZIP]]` — ZIP code component for JSON-LD
- [ ] `[[YEAR]]` — Auto-populate via JS at runtime (not a manual replacement)

---

## Post-Launch To Add

- [ ] BBB accreditation badge (hide footer slot until active)
- [ ] Real estate association membership badge
- [ ] First 3 testimonials (first name + city + property type only; no fabricated content)
- [ ] GHL inbound webhook URL (request from client; wire into all forms in Part 5.2)

---

## Legal Review Required Before Publishing

- [ ] Privacy Policy (`/privacy`) — reviewed by qualified counsel; `[[EFFECTIVE_DATE]]` and `[[PRIVACY_EMAIL]]` resolved
- [ ] Terms of Service (`/terms`) — reviewed by qualified counsel; `[[GOVERNING_LAW_STATE]]`, `[[EFFECTIVE_DATE]]`, and `[[TERMS_EMAIL]]` resolved
- [ ] Arbitration clause in Terms Section 13 — adapted for governing jurisdiction by counsel

---

## Designer Responsibilities

- [ ] GHL inbound webhook URL requested from client and wired into all forms
- [ ] Field names match GHL keys in `docs/website-brief.md` Part 5.1 exactly
- [ ] GTM configured to listen for form-submit dataLayer events (Part 5.3)
- [ ] All forms tested end-to-end with sandbox webhook URL before swapping to production
- [ ] reCAPTCHA v3 configured with score threshold ≥ 0.5
- [ ] Calendly Inline embed on `/sell-your-property`, `/commercial`, and `/contact`
- [ ] Sticky mobile bottom CTA bar hidden on `/sms-terms`, `/privacy`, `/terms`
- [ ] `robots.txt` allows crawl; `sitemap.xml` generated and submitted to GSC + Bing
- [ ] All images served as AVIF with WebP fallback; LCP image uses `priority`
- [ ] axe DevTools run on every page; all critical issues resolved
- [ ] Color contrast verified against WCAG AA in chosen palette
- [ ] Tab navigation tested on home + intake pages
- [ ] VoiceOver tested on home + intake pages
