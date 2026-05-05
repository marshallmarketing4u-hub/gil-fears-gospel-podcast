# Safe Haven Asset Group — Website Copy & Design Brief

Prepared for: Webflow / Framer / Freelance Web Designer Handoff  
Brand: Safe Haven Asset Group  
Document type: Master copy + design specification  
Version: 1.0 (designer-ready draft)

---

## How To Use This Document

This is a single, self-contained handoff document. A web designer should be able to build the entire Safe Haven Asset Group website directly from these pages without needing access to any other source material.

Work in this order:

1. Read **Part 1 — Design Brief** to internalize voice, palette, typography, and trust requirements.
2. Use **Part 2 — Sitemap & Navigation** to wire global navigation and URL structure.
3. Build pages using **Part 3 — Page-by-Page Copy**. Each page is a full spec: meta, hero, body sections, forms, FAQ, footer CTA, and schema.
4. Reference **Part 4 — Verbatim Language** for any disclaimer, consent, or legal-adjacent copy. These blocks are word-for-word and must not be paraphrased.
5. Use **Part 5 — Form Specifications** when wiring forms, validation, and tracking.
6. Resolve every **Part 6 — Placeholder** (items written like `[[LEGAL_BUSINESS_NAME]]`) before launch.

**Ground rules for the designer:**

- Mobile-first layout. Desktop is a refinement of mobile, not the other way around.
- All copy in this document is final unless flagged "Draft for legal review." Do not paraphrase disclaimers, SMS language, or privacy clauses.
- Replace all `[[PLACEHOLDER]]` tokens before launch using Part 6 as a checklist.
- Do not introduce stock photography of distressed houses with red SOLD signs, foreclosure auction imagery, or "cash in hand" hero shots. See Part 1.3 for approved photography direction.

---

## PART 1 — DESIGN BRIEF

### 1.1 Brand Positioning Statement

Safe Haven Asset Group is a private real estate acquisition company that helps property owners explore simple, confidential sale options for residential, land, and commercial properties.

We are an investor-backed buyer, not a brokerage. We work directly with owners who want a private, low-friction conversation about whether a sale makes sense — without listings, showings, or pressure. Our role is to provide clear information, fair options, and a respectful process so each owner can decide what is right for their situation.

**Who we serve.** Owners navigating life transitions: tired landlords, absentee owners, families dealing with inherited or probate property, owners of vacant or under-utilized land, owners facing financial pressure who want to understand their options, and commercial owners considering a quiet, off-market exit.

**What makes us different.**

- Private by default. Conversations happen over a scheduled call, not a knock at the door.
- No-pressure positioning. We provide information first; an offer is one possible outcome, not the goal of the call.
- Investor-backed. We close with our own capital and partners, which means fewer financing contingencies and a calmer process.
- Plainly written. No "ugly house" language, no countdown timers, no manufactured urgency.
- Practical scope. Residential, vacant land, and commercial — one private door for the whole portfolio.

**Brand promise:** *A private conversation, a fair review, and a clear path forward — whatever you decide.*

---

### 1.2 Tone & Voice Guidelines

**Voice attributes (in priority order)**

1. Trustworthy — we sound like a calm advisor, not a pitchman.
2. Premium — restrained, confident, and uncluttered. We earn attention; we don't shout for it.
3. Private — discretion is a feature. Copy reflects confidentiality at every turn.
4. Plainly clear — short sentences, common words, mobile-readable paragraphs.
5. Seller-friendly — the owner is in control. We assist; we don't pressure.

**Stylistic rules**

- Paragraphs: 3 sentences maximum in body copy. 1–2 sentences in hero and CTA proximity.
- Sentence length: aim for ~14 words on average. Vary cadence; avoid run-ons.
- Voice: active, not passive. "We review your property" — not "Your property is reviewed by us."
- Pronouns: "you" (the owner) and "we" (RML). Avoid "the seller" or "the homeowner" in body copy except where clarity demands it.
- Numbers under 10 spelled out except in form labels, prices, and stats.
- Title case for H1/H2/H3. Sentence case for body, CTAs, and form labels.
- Oxford comma: yes.

**Do say**

- "Private conversation"
- "No-pressure options"
- "Simple sale"
- "Confidential review"
- "Off-market solution"
- "Fair, practical path forward"
- "We help owners make informed decisions"
- "Whatever you decide"
- "On your timeline"
- "A calmer process"
- "Direct buyer"
- "Explore your options"

**Do NOT say**

- "We buy ugly houses"
- "We buy houses" (as a tagline)
- "Desperate sellers"
- "Cash for keys"
- "We steal deals"
- "Foreclosure rescue" (regulated phrase; never use on the site)
- "Guaranteed cash tomorrow"
- "Lowest price guaranteed"
- "Stop foreclosure now!" or any urgency stack
- "Don't wait" / "Act now" / "Limited time"
- "100% guaranteed"
- "Investor-friendly"
- "Wholesale" or "assignment" in any seller-facing copy
- Bro-investor slang ("scoop up," "snag," "land a deal," "win-win")

**Reading level:** Target a Flesch reading score of 60–70 (eighth- to ninth-grade reading level).

---

### 1.3 Visual Direction

#### Color Palettes — Choose One

##### Option A — "Slate & Cream" (recommended default)

| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary dark | Slate | `#2C3540` | Headlines, footer, navigation text |
| Primary light | Cream | `#F4EFE6` | Page backgrounds, section fills |
| Surface | Bone | `#FBF8F2` | Cards, form fields, subtle layers |
| Accent | Muted Brass | `#A8825A` | CTAs, links, focus states |
| Accent dark | Walnut | `#6E5238` | CTA hover, key emphasis |
| Border / hairline | Mist | `#D9D2C5` | Dividers, input borders |
| Text body | Ink | `#1F242B` | Body copy |
| Text muted | Stone | `#6B7280` | Captions, helper text |
| Success | Sage | `#5A7A5C` | Form success states |
| Error | Clay | `#A85A4F` | Form error states |

##### Option B — "Forest & Sand"

| Role | Name | Hex |
|---|---|---|
| Primary dark | Forest | `#243B2E` |
| Primary light | Sand | `#EFE7D7` |
| Surface | Linen | `#F8F2E6` |
| Accent | Copper | `#B6794A` |
| Accent dark | Bark | `#5A3E25` |
| Border | Dune | `#D6CDB8` |
| Text body | Pine | `#1B2A22` |
| Text muted | Driftwood | `#6F7368` |
| Success | Moss | `#4F6E4B` |
| Error | Brick | `#A05446` |

##### Option C — "Charcoal & Ivory"

| Role | Name | Hex |
|---|---|---|
| Primary dark | Charcoal | `#1E1F23` |
| Primary light | Ivory | `#F6F2EA` |
| Surface | Pearl | `#FAF7F0` |
| Accent | Burnt Gold | `#A07B3A` |
| Accent dark | Espresso | `#2A211A` |
| Border | Ash | `#CFC9BD` |
| Text body | Onyx | `#15161A` |
| Text muted | Smoke | `#6A6E76` |
| Success | Olive | `#5C6B43` |
| Error | Rust | `#9A4C3D` |

Do not introduce neon, saturated red, or "stop sign" red anywhere.

#### Typography Pairings — Choose One

##### Pairing 1 — Söhne + Tiempos (recommended default)

- Headlines (H1–H3): Söhne — Buch (regular) and Halbfett (semibold)
- Body & UI: Tiempos Text — Regular and Medium
- Mono: Söhne Mono
- Vibe: quietly premium, editorial, mature

##### Pairing 2 — Inter + Source Serif

- Headlines: Inter — 600 / 700
- Body: Source Serif 4 — 400 / 600
- Mono: JetBrains Mono
- Vibe: trustworthy, modern, accessible. Best free/open-source alternative.

##### Pairing 3 — Neue Haas Grotesk + Lyon

- Headlines: Neue Haas Grotesk Display — 55 Roman / 65 Medium
- Body: Lyon Text — Regular / Semibold
- Mono: Neue Haas Grotesk Mono
- Vibe: most editorial / boutique. Strongest pick if photography is architectural.

#### Type Scale (Mobile → Desktop)

- H1: `clamp(2.25rem, 4vw + 1rem, 3.75rem)` / line-height 1.05 / weight 600
- H2: `clamp(1.75rem, 2vw + 1rem, 2.5rem)` / line-height 1.15 / weight 600
- H3: `clamp(1.25rem, 1vw + 0.75rem, 1.5rem)` / line-height 1.25 / weight 600
- Body: `clamp(1rem, 0.25vw + 0.95rem, 1.0625rem)` / line-height 1.6
- Small / caption: `0.875rem` / line-height 1.5
- CTA label: `1rem` / weight 500 / letter-spacing `0.01em`

#### Photography Direction

**Do use:**
- Wide, calm exterior shots of well-kept homes at dawn or dusk, with soft natural light
- Empty-room interior shots that feel "in transition" — light through a window, a single chair
- Land photography emphasizing scale and stillness — open lots, fence lines, county roads
- Hands holding a coffee mug at a kitchen table, a phone on a desk, a notebook with a pen
- Architectural detail shots for commercial — a façade, a parking lot at golden hour
- Diverse ages and ethnicities

**Do not use:**
- Stock "for sale" signs with red SOLD overlays
- Foreclosure auction gavels, eviction notices, or distressed-property tropes
- Stacks of cash or "fan of hundreds" imagery
- Smiling agents in blazers shaking hands in front of houses
- AI-generated suburban houses with warped windows
- Aggressive close-ups of locks, foreclosure paperwork, or "EVICTED" stamps

Image treatment: Soft, slightly warm color grade. No heavy filters. Subtle film grain optional.

#### Iconography

- Line icons, 1.5px stroke, rounded line caps, single-color
- Use Lucide or Phosphor as the icon library
- Do not use cartoon/3D icons or stock vector "houses with dollar signs"

#### Layout Principles

- Generous whitespace. Section padding: `clamp(4rem, 8vw, 8rem)` top/bottom on desktop
- Max content width: 1200px. Reading width for prose: 65–72ch
- Asymmetric layouts encouraged; centered hero acceptable
- Sticky header with subtle shadow on scroll
- Buttons: medium radius (8–10px). Primary CTA is accent fill.
- Hover states: 4–6% darken on fill, never a color shift. Focus rings always visible.

#### Motion

- All motion slow and quiet. 200–400ms ease-out for hover, 400–600ms for section reveals.
- No parallax. No autoplaying video. No animated backgrounds.
- Respect `prefers-reduced-motion: reduce`.

---

### 1.4 Mobile-First Requirements

**Hard requirements**

- Breakpoints: 360px, 480px, 768px, 1024px, 1280px, 1440px
- Tap targets ≥ 44×44 px
- Forms render single column below 768px
- Phone number is `tel:` linked everywhere it appears
- Email is `mailto:` linked everywhere it appears
- Sticky bottom bar on mobile (after first scroll): "Start a private conversation." Hide on `/sms-terms`, `/privacy`, `/terms`.
- LCP < 2.5s on 4G. All images served as AVIF with WebP fallback.

**Performance budget**

- HTML: < 30 KB gzipped per page
- CSS: < 60 KB total
- JS: < 90 KB total (excluding Calendly and tracking, deferred)
- Total page weight: < 1 MB on home page
- Lighthouse: ≥ 90 Performance, ≥ 95 Accessibility, ≥ 95 Best Practices, ≥ 95 SEO

---

### 1.5 Trust Signals (Site-Wide)

**Footer trust strip**

- Real address: `[[BUSINESS_ADDRESS]]`
- Real phone: `[[BUSINESS_PHONE]]` as `tel:` link
- Real email: `[[BUSINESS_EMAIL]]`
- BBB badge slot (hide if not active)
- Real estate association membership slot
- Secure form badge — lock icon + "Secure form. SSL encrypted." within 24px of every form's submit button
- Privacy + Terms links + SMS terms link

**Above-the-fold trust micro-cues**

- "Private. Confidential. No obligation." near hero CTA
- "We respond within one business day." near each form's submit button
- Lock icon next to consent checkboxes

---

### 1.6 SEO & Tracking Requirements

**Search engine basics**

- One H1 per page. Meta titles ≤ 60 chars. Meta descriptions ≤ 155 chars.
- Canonical tag on every page.
- `robots.txt` allows crawl. `sitemap.xml` submitted to Google Search Console + Bing.
- Open Graph + Twitter card metadata on every page.
- Image filenames are descriptive (e.g., `vacant-land-texas-hero.avif`).

**LocalBusiness JSON-LD Template**

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[[LEGAL_BUSINESS_NAME]]",
  "alternateName": "Safe Haven Asset Group",
  "description": "Safe Haven Asset Group is a private real estate acquisition company helping property owners explore confidential, no-pressure sale options for residential, land, and commercial properties.",
  "logo": "https://[[DOMAIN]]/brand/safe-haven-asset-group-logo.svg",
  "image": "https://[[DOMAIN]]/og/home-1200x630.jpg",
  "url": "https://[[DOMAIN]]/",
  "telephone": "[[BUSINESS_PHONE]]",
  "email": "[[BUSINESS_EMAIL]]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[[STREET]]",
    "addressLocality": "[[CITY]]",
    "addressRegion": "[[STATE]]",
    "postalCode": "[[ZIP]]",
    "addressCountry": "US"
  },
  "areaServed": ["[[MARKET_1]]", "[[MARKET_2]]", "[[MARKET_3]]"],
  "openingHours": "[[OFFICE_HOURS]]",
  "sameAs": [
    "[[SOCIAL_LINKEDIN]]",
    "[[SOCIAL_FACEBOOK]]",
    "[[SOCIAL_INSTAGRAM]]"
  ]
}
```

**Conversion events to fire**

- `intake_submit` — main seller intake form
- `commercial_intake_submit` — commercial form
- `land_intake_submit` — land form
- `probate_intake_submit` — probate form
- `options_intake_submit` — pre-foreclosure form
- `contact_message_submit` — contact short message
- `sms_optin_submit` — any form with SMS consent checked
- `calendly_book` — Calendly booking confirmed
- `phone_click` — any `tel:` link clicked
- `email_click` — any `mailto:` link clicked
- `faq_open` — FAQ accordion opened
- `nav_cta_click` — top-nav CTA clicked

---

### 1.7 Accessibility (WCAG AA)

- Body text: ≥ 4.5:1 contrast. Large text: ≥ 3:1. Non-text UI: ≥ 3:1.
- Focus rings visible at all times.
- All interactive elements reachable via Tab in logical order.
- Skip-to-content link as first focusable element on every page.
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>` with proper heading order.
- Every input has a programmatically associated `<label>`.
- Errors announced via `aria-live="polite"`.
- Consent checkboxes never pre-checked.
- Honor `prefers-reduced-motion: reduce`.

---

## PART 2 — SITEMAP & NAVIGATION

### 2.1 Top Navigation

Order (left to right):

1. Logo (links to `/`)
2. How It Works (`/how-it-works`)
3. Property Types *(dropdown on desktop, expandable on mobile)*
   - Residential (anchors to homepage section)
   - Vacant Land (`/land`)
   - Commercial (`/commercial`)
   - Probate / Inherited (`/probate`)
   - Options for Owners Under Pressure (`/options`)
4. About (`/about`)
5. Contact (`/contact`)
6. Primary CTA — "Start a private conversation" → `/sell-your-property`

Sticky on scroll. Background switches from transparent (over hero) to solid surface color with hairline border after 80px.

---

### 2.2 Footer Columns

**Column 1 — Brand**
- Safe Haven Asset Group wordmark
- *A private real estate acquisition company helping owners explore confidential, no-pressure sale options.*
- `[[BUSINESS_ADDRESS]]` · `[[BUSINESS_PHONE]]` · `[[BUSINESS_EMAIL]]`

**Column 2 — Property Types**
- Residential / Vacant Land / Commercial / Probate / Options for Owners Under Pressure

**Column 3 — Company**
- About / How It Works / Contact / Markets We Serve

**Column 4 — Legal**
- Privacy Policy / Terms of Service / SMS Terms / Manage Cookie Preferences

**Column 5 — Stay in Touch**
- Social links · `[[OFFICE_HOURS]]` · "We respond within one business day."

**Footer base bar:**
- Footer disclaimer (Part 4.5, verbatim)
- "© `[[YEAR]]` `[[LEGAL_BUSINESS_NAME]]`. All rights reserved."
- BBB / association badge slots (hide if not active)

---

### 2.3 URL Slug Map (12 Pages)

| # | Page | URL | Purpose |
|---|---|---|---|
| 3.1 | Homepage | `/` | Master landing for all seller types |
| 3.2 | Seller Intake | `/sell-your-property` | Primary lead capture form |
| 3.3 | Commercial Seller | `/commercial` | Executive-tone commercial vertical |
| 3.4 | Vacant Land | `/land` | Land-specific seller path |
| 3.5 | Probate / Inherited | `/probate` | Sensitive estate-property path |
| 3.6 | Pre-Foreclosure / Options | `/options` | Compliance-careful (deliberately not `/foreclosure`) |
| 3.7 | SMS Opt-In Terms | `/sms-terms` | Carrier-required public SMS program page |
| 3.8 | Privacy Policy | `/privacy` | CCPA/CPRA + FL/TX-aware policy |
| 3.9 | Terms of Service | `/terms` | Site terms |
| 3.10 | Contact | `/contact` | Three contact paths |
| 3.11 | About | `/about` | Brand story & approach |
| 3.12 | How It Works | `/how-it-works` | Deep-dive on the 4-step process |

---

### 2.4 Internal Linking Diagram

Hub-and-spoke architecture. Homepage and `/how-it-works` are hubs; vertical pages are spokes funneling into `/sell-your-property`.

```
                          [ Homepage / ]
                                │
   ┌──────────────────┬─────────┼─────────┬────────────────────┐
   │                  │         │         │                    │
[/land]        [/commercial] [/probate] [/options]     [/how-it-works]
   │                  │         │         │                    │
   └──── all link ───►│         │         │ ◄── all link to ───┘
                      ▼         ▼         ▼
               [ /sell-your-property ← Primary intake form ]
                      │
                      ├── inline Calendly ──────────► [ /contact ]
                      └──► [ /sms-terms ]

[ /about ] ──► [ /how-it-works ] ──► [ /sell-your-property ]
[ /privacy ] [ /terms ] [ /sms-terms ] ──► linked from every footer + consent block
```

---

### 2.5 Mobile Navigation Behavior

- Hamburger icon opens full-height slide-down sheet
- Sheet items: How It Works, Property Types (expandable), About, Contact, primary CTA pinned to bottom
- Sheet closes on: tap outside, tap on link, Esc, or swipe down
- Sticky bottom CTA bar after 25% scroll: phone icon + number (left), "Start a private conversation" button (right)
- Hidden on `/sms-terms`, `/privacy`, `/terms`
- Bottom bar hides when a form is in focus

---

## PART 3 — PAGE-BY-PAGE COPY

### 3.1 Homepage (`/`)

**Meta**
- Title: *Private Real Estate Sale Options for Owners | Safe Haven Asset Group*
- Description: A private real estate acquisition company. We help owners explore confidential, no-pressure sale options for residential, land, and commercial properties.
- Primary keyword: sell my property privately
- Secondary: private real estate buyer, off-market sale, sell house without listing, sell land without realtor

**Hero**
- H1: Considering selling? Start with a private conversation.
- Sub-headline: A confidential review of your property and your options — no listings, no showings, no pressure.
- Primary CTA: Start a private conversation → `/sell-your-property`
- Secondary CTA: See how it works → `/how-it-works`
- Micro-trust: *Private. Confidential. No obligation. We respond within one business day.*

**Body Sections**

#### Section 1 — What we look at

H2: What we look at.

Intro: We work with owners across three categories. Choose the closest match to your situation.

| Column | Headline | Body | Link |
|---|---|---|---|
| 1 | Residential | Single-family homes, small multi-family, and condos. Whether the property is occupied, vacant, or somewhere in between, we look at every situation on its own terms. We're a direct buyer, not a brokerage. | Start a private conversation → `/sell-your-property` |
| 2 | Vacant Land | Lots, acreage, inherited parcels, and land that's been sitting longer than expected. We handle property tax delinquency, multiple parcels, and out-of-state ownership routinely. | Explore land options → `/land` |
| 3 | Commercial | Small to mid-size commercial buildings, retail, light industrial, and multi-family above 4 units. We're a quiet, off-market option for owners considering a confidential exit. | Schedule a confidential consultation → `/commercial` |

#### Section 2 — Situations we hear about most often

H2: Situations we hear about most often.

| # | Card title | Body |
|---|---|---|
| 1 | Tired of being a landlord | Late-night calls, vacancies, repairs that never end. Some owners want a calm exit without putting tenants through showings. |
| 2 | Inherited property you didn't plan on | A property left to you by a parent or relative — sometimes out of state, sometimes in probate. We work alongside families and their attorneys at a respectful pace. |
| 3 | Vacant land that hasn't been useful | Land that's been on the books for years, sometimes generations. We handle taxes owed, missing surveys, and multiple parcels. |
| 4 | Pre-foreclosure or payment pressure | If payments have become difficult, you have more options than you might think. A private sale is one path; we can also point you to free counseling resources. |
| 5 | Out-of-state ownership | Long-distance ownership is hard. We can review the property and coordinate closing without requiring you to travel. |
| 6 | Commercial owners considering a quiet exit | Debt maturity, partner buyouts, or a desire to step back. We treat commercial conversations with the same discretion as residential — and an NDA on request. |

#### Section 3 — How it works

H2: How a private conversation works.

1. Share a few details. Use the short form on `/sell-your-property` to tell us about the property and your timeline. Two minutes, mobile-friendly.
2. We review confidentially. A real person on our team reviews the property, the market, and the situation. No automated lowball estimate.
3. We have a private conversation. A scheduled call (or text, if you prefer). We answer questions, walk through possible options, and explain what a sale would look like.
4. You decide what's next. If a sale makes sense and our number works for you, we move at your pace. If it doesn't, we leave you with information you can use either way.

CTA: See how it works in detail → `/how-it-works`

#### Section 4 — Why owners choose a private conversation

H2: Why owners choose a private conversation.

| Column | Headline | Body |
|---|---|---|
| 1 | Direct buyer, not a brokerage | We close with our own capital and partners, which means fewer financing contingencies and a calmer process. |
| 2 | Private by default | No yard signs, no MLS listings, no parade of strangers walking through your home. Your situation stays between us. |
| 3 | Information first | We'll tell you what we see, what a sale could look like, and where another path might serve you better. You're not on a sales call. |

#### Section 5 — Markets served

H2: Markets we serve.

Body: We work in select markets across the country, with a particular focus on `[[MARKET_1]]`, `[[MARKET_2]]`, and `[[MARKET_3]]`. If your property is somewhere else, please reach out anyway — we have partners in most major regions and can usually help or refer.

#### Section 6 — Testimonial slot

H2: What owners say after a call.

> *[Testimonial slot — add after launch. Three short quotes, first name + city + property type only. No fabricated testimonials.]*

Build as a 1–3 quote carousel supporting CMS entries. If zero testimonials at launch, hide the section entirely.

#### Section 7 — FAQ (8 questions)

H2: Frequently asked questions.

1. **Are you a real estate agent or brokerage?** No. Safe Haven Asset Group is a private real estate acquisition company. We're a direct buyer — not a brokerage that lists your property.
2. **Will I owe a commission?** No. There is no listing agreement and no commission. If we agree to move forward, the price discussed is the price you receive (less only standard closing costs, which we explain on the call).
3. **Do I need to make repairs or clean out the property?** In most cases, no. We're comfortable buying properties as-is, including ones that need significant work or still contain personal belongings.
4. **How long does the process usually take?** On your timeline. Some owners close in two to three weeks; others take months because of probate, tax cleanup, or coordination with family.
5. **What if I'm not sure I want to sell?** That's a normal place to start. A private conversation is information, not a commitment. Many owners decide to wait, and that's fine.
6. **Will my information be shared or sold?** No. Your phone number and any SMS consent will not be sold or shared with third parties or affiliates for marketing purposes. See `/privacy` and `/sms-terms` for full details.
7. **Do you only buy distressed or "ugly" properties?** No. We work with well-kept properties, average homes, and properties that need a lot of work. Condition is one variable; situation matters more.
8. **What states and markets do you cover?** We work primarily in `[[MARKET_1]]`, `[[MARKET_2]]`, and `[[MARKET_3]]`, with partner relationships across most U.S. metros.

#### Section 8 — Final CTA banner

H2: A private conversation costs nothing — and you decide what happens next.

Body: No listings, no showings, no pressure. We'll review your property confidentially and follow up at a time that works for you.

Primary CTA: Start a private conversation → `/sell-your-property`
Secondary CTA (text link): Or call us directly: `[[BUSINESS_PHONE]]`

**Schema:** `LocalBusiness` (full JSON-LD from Part 1.6) + `FAQPage` from Section 7.

---

### 3.2 Seller Intake (`/sell-your-property`)

**Meta**
- Title: *Sell Your Property Privately | Start a Confidential Review — Safe Haven Asset Group*
- Description: Share a few details about your property. We'll review it confidentially and follow up at a time that works for you. No listings, no showings.
- Primary keyword: sell my house privately

**Hero**
- H1: Start a private conversation about your property.
- Sub-headline: Share a few details below. We'll review it confidentially and follow up at a time that works for you.
- Primary CTA: Begin → *(scrolls to `#intake`)*
- Secondary CTA: Schedule a call instead → *(scrolls to `#schedule`)*
- Micro-trust: Private. Confidential. No obligation.

**Form Fields**

| # | Label | Field name | Type | Required | Validation |
|---|---|---|---|---|---|
| 1 | First name * | `first_name` | text | Yes | 1–60 chars |
| 2 | Last name * | `last_name` | text | Yes | 1–80 chars |
| 3 | Phone * | `phone` | tel | Yes | E.164, auto-formats US |
| 4 | Email * | `email` | email | Yes | RFC 5322 + DNS MX |
| 5 | Property address * | `property_address` | text + Places autocomplete | Yes | Street + city + state + ZIP |
| 6 | Mailing address (if different) | `mailing_address` | text + Places | No | City + state + ZIP if provided |
| 7 | Property type * | `property_type` | select | Yes | See dropdown list |
| 8 | Estimated value | `estimated_value` | currency | No | $0–$50M |
| 9 | Mortgage balance | `mortgage_balance` | currency | No | $0–$50M |
| 10 | Reason for selling | `reason_for_selling` | textarea | No | ≤ 1,000 chars |
| 11 | Timeline * | `timeline` | select | Yes | See dropdown list |
| 12 | Property status * | `property_status` | select | Yes | See dropdown list |
| 13 | Best time to reach you * | `best_time` | select | Yes | See dropdown list |
| 14 | SMS consent | `sms_consent` | checkbox (unchecked) | No | Verbatim text required |
| 15 | Email consent | `email_consent` | checkbox (unchecked) | No | Verbatim text |
| 16 | reCAPTCHA | `recaptcha_token` | hidden | Yes | Score ≥ 0.5 |

**Dropdown lists**

Property type: Single-family home / Condo or townhome / Small multi-family (2–4 units) / Vacant land or lot / Commercial property / Mixed-use / Mobile or manufactured home / Other / not sure

Timeline: As soon as possible / Within 30 days / 30–90 days / 3–6 months / More than 6 months / Just gathering information

Property status: I live there / It's a rental (occupied) / It's a rental (vacant) / Inherited / probate / Vacant / unused / Land only / Commercial / mixed-use / Other

Best time: Morning (8 AM–12 PM) / Afternoon (12–5 PM) / Evening (5–8 PM) / Anytime / Text only — please don't call

**Submit button label:** Start a private conversation

**Success message:**
> Thanks — we received it.
> A real person on our team will review your property and follow up within one business day. You can also schedule a call now using the calendar below.

**Schema:** `WebPage` with breadcrumb + `FAQPage` from the inline FAQ.

---

### 3.3 Commercial Seller (`/commercial`)

**Meta**
- Title: *Confidential Commercial Property Acquisitions | Safe Haven Asset Group*
- Description: A private, off-market path for commercial owners considering a quiet exit. Confidential consultations, NDAs available, and a calmer process.
- Primary keyword: sell commercial property privately

**Hero**
- H1: A confidential path for commercial owners.
- Sub-headline: Private acquisition consultations for owners considering a quiet exit — distressed, transitional, or simply ready to step back.
- Primary CTA: Schedule a confidential consultation
- Secondary CTA: Request an NDA before we talk → `mailto:[[BUSINESS_EMAIL]]?subject=NDA Request — Commercial Inquiry`
- Micro-trust: Confidential. Off-market. NDAs available on request.

**Body Sections**

- Section 1: Confidential by design (NDA default, no public marketing, work directly with decision-maker)
- Section 2: Properties under operational or financial pressure (stabilized transitioning, underperforming, deferred maintenance)
- Section 3: Loan maturing in a tougher rate environment
- Section 4: When listing is the wrong move
- Section 5: Quiet exits, partner buyouts, and generational hand-offs
- Section 6: Asset types table (Multi-family 5–100 units / Retail / Office / Light industrial / Mixed-use / Self-storage / Land for commercial use)
- Section 7: Executive intake form (see Part 5 master field table)
- Section 8: Calendly embed (commercial variant)
- Section 9: Commercial FAQ (6 questions — NDA, escrow, debt assumption, off-market vs. broker, distressed-only?, "confidential" in practice)

**Schema:** `WebPage` with breadcrumb + `FAQPage`.

---

### 3.4 Vacant Land (`/land`)

**Meta**
- Title: *Sell Vacant Land Privately — Lots, Acreage & Inherited Parcels | Safe Haven Asset Group*
- Primary keyword: sell vacant land privately

**Hero**
- H1: Land that's been sitting? Let's talk about a simple sale.
- Sub-headline: Lots, acreage, inherited parcels — including land with back taxes, missing paperwork, or owners who've never set foot on it. We handle the messy parts.
- Primary CTA: Tell us about the parcel
- Micro-trust: Private. No surveying needed up front. We respond within one business day.

**Body Sections**

- Section 1: When the taxes feel heavier than the asset
- Section 2: Land that came to you, not the other way around (inherited)
- Section 3: Vacant lots — single, multiple, scattered
- Section 4: Why a private land sale tends to be simpler (4-step typical flow, 14–21 day typical close)
- Section 5: Land intake form — parcel-specific fields (see Part 5)
- Section 6: Land FAQ (6 questions — back taxes, owner financing, multiple parcels, out-of-state, missing info, heirs/probate)

**Schema:** `WebPage` with breadcrumb + `FAQPage`.

---

### 3.5 Probate / Inherited (`/probate`)

**Meta**
- Title: *Selling an Inherited or Probate Property — A Private, Respectful Path | Safe Haven Asset Group*
- Primary keyword: sell inherited property

**Hero**
- H1: Inherited property? You don't have to figure it out alone.
- Sub-headline: A private, respectful path for families navigating an inherited or probate property — at the pace your family needs.
- Micro-trust: Confidential. No pressure. We work with your attorney, on your timeline.

**REQUIRED disclaimer block (verbatim — placed prominently between hero and Section 2):**

> Important note before you read further.
>
> We are not attorneys, financial advisors, or estate planners. We do not provide legal, tax, or financial advice. You should speak with appropriate licensed professionals about your specific situation. A sale may or may not be the right option — we're here to provide information, not pressure.

Render as callout card with accent left rule. Body-size text — not fine print.

**Body Sections**

- Section 1: How we work with families (alongside probate attorney, no pressure, no bypass)
- Section 2: Common situations table (multiple heirs, no will, property needs work, mortgage in deceased's name, out-of-state heirs, family disagreement)
- Section 3: A typical probate process (4 steps: initial conversation → property review → information for family → family decides)
- Section 4: What we don't do (no legal advice, no pressure, no talking behind heirs' backs, no "skip probate" claims)
- Section 5: Probate intake form (see Part 5)
- Section 6: Probate FAQ (7 questions)

**Schema:** `WebPage` with breadcrumb + `FAQPage`.

---

### 3.6 Pre-Foreclosure / Options (`/options`)

> **IMPORTANT:** Slug is deliberately `/options` — not `/foreclosure` or `/pre-foreclosure`. Do not change.

**Meta**
- Title: *Options for Owners Under Pressure | Safe Haven Asset Group*
- Description: If payments have become difficult, you may have more options than you think. We share information about a private sale and point to free resources — without pressure.
- Primary keyword: options for homeowners behind on payments

**Hero**
- H1: If payments have become difficult, you have more options than you might think.
- Sub-headline: A calm, honest look at the paths available to you — including paths that don't involve us.
- Primary CTA: Start a private conversation
- Secondary CTA: Find a free HUD-approved counselor *(opens HUD link in new tab)*
- Micro-trust: No fees. No pressure. We're not a foreclosure rescue service.

**REQUIRED disclaimer block (verbatim — prominently before Section 2):**

> Important note before you read further.
>
> We are not attorneys, financial advisors, or foreclosure rescue consultants. We are not affiliated with any government agency or your lender. You should speak with appropriate licensed professionals about your specific situation. A sale may or may not be the right option — we're here to provide information, not pressure.
>
> **Foreclosure rescue scams are illegal and harmful — if anyone promises to stop your foreclosure for a fee, contact your state attorney general.**

Second paragraph is **bolded**. Render as callout card with accent left rule.

**Body Sections**

- Section 1: What this page is — and what it isn't (no "save your home" promises; we are a private buyer)
- Section 2: When a private sale fits — and when it doesn't
- Section 3: What to expect on the call (20–30 minutes, listen first, share what we see, no documents required, no commitment)
- Section 4: Other resources — free (HUD counselors, state AG, lender loss mitigation, real estate attorney)
- Section 5: Gentle intake form — intentionally does NOT collect foreclosure dates, account numbers, or lender details (see Part 5)
- Section 6: FAQ (6 questions — can you stop my foreclosure?, fees, affiliated with lender/HUD?, must I sell to get info?, HUD counselor is better?, what info to have ready?)

**Schema:** `WebPage` with breadcrumb + `FAQPage`. Do NOT add `Service` schema for "foreclosure rescue."

---

### 3.7 SMS Opt-In Terms (`/sms-terms`)

Carrier-required compliance page. Do not edit this language.

**Meta**
- Title: *SMS Terms & Opt-In Policy | Safe Haven Asset Group*
- H1: SMS Terms & Opt-In Policy

**Sections**

1. Who is sending these messages (`[[LEGAL_BUSINESS_NAME]]`, address, phone, email)
2. What types of messages we send (confirmations, follow-ups, coordination — no mass blasts)
3. Message frequency (0–6 messages per week, may vary)
4. Cost (message and data rates may apply; carrier-determined)
5. How to opt out (STOP, HELP, email, phone)
6. Privacy & sharing — verbatim: *"Phone numbers and SMS consent will not be sold or shared with third parties or affiliates for marketing purposes."*
7. Our opt-in checkbox language (verbatim from Part 4.1)
8. Sample messages (5 illustrative examples)
9. SMS support contact

---

### 3.8 Privacy Policy (`/privacy`)

> DRAFT FOR LEGAL REVIEW — NOT LEGAL ADVICE. Must be reviewed by qualified legal counsel before publication.

**Meta**
- Title: *Privacy Policy | Safe Haven Asset Group*
- H1: Privacy Policy

**Sections (summarized — full text must be rendered verbatim in the site)**

1. Introduction
2. Information we collect (direct, automatic, third-party)
3. How we use information
4. How we share information — **MANDATORY SMS CLAUSE (verbatim):** *"We will not sell or share your phone number, SMS consent, or any data tied to SMS opt-in with third parties or affiliates for marketing purposes — including under a CCPA/CPRA opt-out exception."*
5. Retention
6. Security
7. Your privacy rights (California CCPA/CPRA, Florida FDBR, Texas TDPSA, other states)
8. Do Not Track
9. Cookies & similar technologies
10. Children's privacy
11. International users
12. Changes to this policy
13. Contact (`[[PRIVACY_EMAIL]]`, `[[BUSINESS_PHONE]]`, `[[BUSINESS_ADDRESS]]`)

---

### 3.9 Terms of Service (`/terms`)

> DRAFT FOR LEGAL REVIEW — NOT LEGAL ADVICE. Have qualified counsel review before publication.

**Meta**
- Title: *Terms of Service | Safe Haven Asset Group*
- H1: Terms of Service

**Sections (summarized)**

1. Acceptance of these Terms
2. Use of the Site
3. Not a brokerage; no guarantee of an offer
4. SMS / text messages (see `/sms-terms`)
5. No legal, tax, or financial advice
6. User submissions
7. Intellectual property
8. Third-party links and services
9. Disclaimers (AS IS, no warranties)
10. Limitation of liability ($100 cap)
11. Indemnification
12. Governing law (`[[GOVERNING_LAW_STATE]]`)
13. Dispute resolution & arbitration *(draft for legal review)*
14. Severability
15. Changes to these Terms
16. Contact (`[[TERMS_EMAIL]]`, `[[BUSINESS_ADDRESS]]`)

---

### 3.10 Contact (`/contact`)

**Meta**
- Title: *Contact Safe Haven Asset Group — Three Ways to Reach Us*
- H1: Three ways to reach us.

**Three paths (desktop: columns, mobile: stacked)**

| Column | Headline | Body | CTA |
|---|---|---|---|
| 1 | Schedule a call | Pick a time that works for you. We block dedicated time and confirm by email and (if opted in) text. | Book a time → `[[CALENDLY_LINK]]` |
| 2 | Send a short message | Prefer to type a few sentences first? Use the short form below. We'll read it and only call when you've asked us to. | Use the form → `#contact-form` |
| 3 | Call or email us directly | Speak with someone right now during office hours, or email and we'll reply within one business day. | `[[BUSINESS_PHONE]]` · `[[BUSINESS_EMAIL]]` |

**Sections**

- Calendly inline embed (with commercial calendar fallback link)
- Short message form (see Part 5)
- Markets we serve
- Office details (address, phone, email, hours, map embed)
- Social links

**Schema:** `ContactPage` with `mainEntity` → `LocalBusiness`.

---

### 3.11 About (`/about`)

**Meta**
- Title: *About Safe Haven Asset Group — A Private Real Estate Acquisition Company*
- H1: A private real estate company built around quieter conversations.

**Sections**

- Who we are (buyer not brokerage; private not public; one conversation at a time)
- Three principles in plain English: Information first / The owner sets the pace / Discretion is a feature
- Owners we work with
- What we won't do (no pressure, no blindside lowballs, no listing, no "stop foreclosure" promises, no information sharing)
- Markets we serve
- How to reach us
- Trust block (direct buyer / private by default / information first)

**Schema:** `AboutPage` with `mainEntity` → `LocalBusiness`.

---

### 3.12 How It Works (`/how-it-works`)

**Meta**
- Title: *How a Private Sale Works — Safe Haven Asset Group*
- H1: Four steps. On your timeline.

**Sections**

- Step 1: Share a few details (~2 minutes, form on `/sell-your-property`)
- Step 2: We review confidentially (within 1 business day; public records, comparables, no knocking on doors)
- Step 3: A private conversation (20–30 min scheduled call; share what we see; no pressure; no documents on first call)
- Step 4: Close on your timeline (purchase agreement, earnest money to escrow, title, coordinate signers, closing)
- Realistic timelines table
- What's on the call agenda
- After a "yes" (purchase agreement, earnest money, title, pre-closing summary)
- FAQ (4 questions — repairs needed?, who pays closing costs?, unexpected title issue?, can I change my mind?)

**Schema:** `WebPage` + `HowTo` (4 steps) + `FAQPage`.

---

## PART 4 — VERBATIM LANGUAGE REFERENCE

### 4.1 SMS Opt-In Checkbox Language

> By checking this box, I consent to receive SMS text messages from `[[LEGAL_BUSINESS_NAME]]` regarding my property inquiry, appointment scheduling, follow-up questions, and related real estate services. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help. Consent is not a condition of purchase or sale. I agree to the [Privacy Policy](/privacy) and [Terms of Service](/terms).

Checkbox is unchecked by default. Hyperlink "Privacy Policy" → `/privacy` and "Terms of Service" → `/terms`.

### 4.2 Probate Disclaimer Block

> Important note before you read further.
>
> We are not attorneys, financial advisors, or estate planners. We do not provide legal, tax, or financial advice. You should speak with appropriate licensed professionals about your specific situation. A sale may or may not be the right option — we're here to provide information, not pressure.

### 4.3 Pre-Foreclosure Disclaimer Block

> Important note before you read further.
>
> We are not attorneys, financial advisors, or foreclosure rescue consultants. We are not affiliated with any government agency or your lender. You should speak with appropriate licensed professionals about your specific situation. A sale may or may not be the right option — we're here to provide information, not pressure.
>
> **Foreclosure rescue scams are illegal and harmful — if anyone promises to stop your foreclosure for a fee, contact your state attorney general.**

### 4.4 SMS Privacy Clause

> Phone numbers and SMS consent will not be sold or shared with third parties or affiliates for marketing purposes.

### 4.5 Footer Disclaimer

> Safe Haven Asset Group is a private real estate investment company. We are not realtors, attorneys, lenders, financial advisors, or tax professionals. Information on this site is for general purposes only and is not legal, tax, or financial advice. Property purchases are subject to inspection, title, and other due diligence.

Caption-size text in muted color. No links inside this block.

### 4.6 Universal CTA Library

**Primary CTAs (button labels):**
1. Start a private conversation
2. Schedule a confidential consultation
3. Begin
4. Tell us about the property
5. Tell us about the parcel
6. Send a short message
7. Request an NDA
8. Book a time
9. See how it works
10. Read our process

**Secondary CTAs (text links):**
11. Or call us directly: `[[BUSINESS_PHONE]]`
12. Or email us: `[[BUSINESS_EMAIL]]`
13. Skip the form — book a call instead
14. Find a free HUD-approved counselor
15. Read the privacy policy
16. Read the SMS terms

**Reassurance micro-CTAs:**
17. Private. Confidential. No obligation.
18. We respond within one business day.
19. No listings. No showings.
20. On your timeline.

**Banned CTA language — never use:**
- Get my offer / Get my cash offer
- Sell now / Sell fast
- Click here
- Submit (use the labels above)
- Learn more
- Save my home / Stop my foreclosure

---

## PART 5 — FORM SPECIFICATIONS REFERENCE

### 5.1 Master Form Field Table

| Field name (GHL key) | Label | Type | Required on which forms | Validation |
|---|---|---|---|---|
| `first_name` | First name | text | Intake, Land, Probate, Options, Contact | 1–60 chars |
| `last_name` | Last name | text | Intake, Land, Probate, Options | 1–80 chars |
| `contact_name` | Your name | text | Commercial | 2–120 chars |
| `contact_role` | Title / role | text | Commercial | 2–80 chars |
| `phone` | Phone | tel | All except Contact (optional) | E.164, auto-formats US |
| `email` | Email | email | All forms (Y) | RFC 5322 + DNS MX |
| `property_address` | Property address | text + Places autocomplete | Intake, Probate, Options, Commercial (Y); Land uses parcel fields | Street + city + state + ZIP |
| `parcel_state` | State the parcel is in | select | Land (Y) | One of 50 states |
| `parcel_county` | County | text | Land (Y) | 1–80 chars |
| `apn` | APN / parcel number | text | Land (N) | ≤ 60 chars |
| `multiple_parcels` | Multiple parcels? | radio | Land (Y) | Yes/No; reveals `parcels_list` |
| `tax_status` | Property tax status | select | Land (N) | Current / Behind 1 yr / Behind 2+ yrs / Not sure |
| `property_type` | Property type | select | Intake (Y) | See dropdown list |
| `asset_type` | Asset type | select | Commercial (Y) | See Section 3.3 list |
| `debt_situation` | Debt situation | select | Commercial (N) | Performing / Watchlist / In default / Maturing soon / N/A |
| `nda_required` | NDA requested | checkbox | Commercial (N) | — |
| `estimated_value` | Estimated value | currency | Intake (N) | $0–$50M |
| `mortgage_balance` | Mortgage balance | currency | Intake (N) | $0–$50M |
| `timeline` | Timeline | select | Intake (Y) | See dropdown |
| `property_status` | Property status | select | Intake (Y) | See dropdown |
| `best_time` | Best time to reach you | select | Intake (Y), others (N) | See dropdown |
| `probate_status` | Probate status | select | Probate (N) | See dropdown |
| `heir_alignment` | Heirs in agreement? | radio | Probate (N) | Yes / Mostly / Mixed / Not sure |
| `attorney_involved` | Attorney involved? | radio | Probate (N) | Yes / No / Not yet |
| `situation_note` | A few words about your situation | textarea | Options (N) | ≤ 1,500 chars |
| `spoke_with_counselor` | Spoke with HUD counselor / attorney | checkbox | Options (N) | — |
| `message` | What's on your mind? | textarea | Contact (Y) | ≤ 1,500 chars |
| `sms_consent` | (verbatim SMS language) | checkbox (unchecked) | Intake, Land, Probate, Options (N) | Verbatim text required |
| `email_consent` | (verbatim email language) | checkbox (unchecked) | All forms (N) | Verbatim text required |
| `recaptcha_token` | — | hidden | All forms (Y) | Score ≥ 0.5 |
| `source_page` | — | hidden | All forms | Auto-fill with slug |
| `utm_source/medium/campaign/content/term` | — | hidden | All forms | Pass through to GHL |
| `gclid`, `fbclid` | — | hidden | All forms | Pass through to GHL |

**General field rules:**
- Labels always above the input. Never float labels.
- Placeholders are never substitutes for labels.
- Required fields: visible asterisk + `aria-required="true"`. Asterisk is `aria-hidden="true"`.
- Error messages render below the field, linked via `aria-describedby`.
- Consent checkbox labels are clickable in entirety.

### 5.2 Form Submission Flow

```
[ User submits form ]
        │
        ▼
[ Client-side validation ] ──fail──► render inline errors, aria-live update, do not POST
        │ pass
        ▼
[ reCAPTCHA v3 token issued ]
        │
        ▼
[ POST to GHL inbound webhook ] ← Request URL from client; treat as runtime config value
        │
        ▼
[ Server response 200 ] ──fail──► friendly inline error + fallback contact line
        │ success
        ▼
[ Store submission ID in dataLayer ]
        │
        ▼
[ Fire conversion event (page-specific) ]
        ├─► GA4 (via GTM)
        ├─► Meta Pixel (via GTM, only if marketing consent granted)
        └─► Other tag platforms
        │
        ▼
[ Show success message ] (aria-live="polite")
        │
        ▼
[ Scroll to / reveal inline Calendly embed if present ]
```

### 5.3 Tracking Events

| Event name | Where it fires | Key parameters |
|---|---|---|
| `intake_submit` | `/sell-your-property` | `property_type`, `timeline`, `property_status`, `submission_id` |
| `commercial_intake_submit` | `/commercial` | `asset_type`, `decision_maker`, `nda_required`, `submission_id` |
| `land_intake_submit` | `/land` | `parcel_state`, `multiple_parcels`, `tax_status`, `submission_id` |
| `probate_intake_submit` | `/probate` | `probate_status`, `relationship_to_property`, `attorney_involved`, `submission_id` |
| `options_intake_submit` | `/options` | `spoke_with_counselor`, `submission_id` |
| `contact_message_submit` | `/contact` | `prefers_call`, `submission_id` |
| `sms_optin_submit` | Any form with `sms_consent = true` | `source_page`, `submission_id` |
| `calendly_book` | Calendly `event_scheduled` | `calendly_event_uri`, `source_page` |
| `phone_click` | Any `tel:` link click | `link_url`, `source_page` |
| `email_click` | Any `mailto:` link click | `link_url`, `source_page` |
| `faq_open` | FAQ accordion opened | `faq_question`, `source_page` |
| `nav_cta_click` | Top-nav primary CTA | `source_page` |
| `bottom_bar_cta_click` | Mobile sticky bottom CTA | `source_page` |

Mark `intake_submit`, `commercial_intake_submit`, `land_intake_submit`, `probate_intake_submit`, `options_intake_submit`, `contact_message_submit`, and `calendly_book` as conversion events in GA4.

---

## PART 6 — PLACEHOLDERS REFERENCE

| Placeholder | Description | Where it appears |
|---|---|---|
| `[[LEGAL_BUSINESS_NAME]]` | Full legal entity name (LLC/Inc.) | SMS terms, Privacy, Terms, consent blocks, footer |
| `[[BUSINESS_ADDRESS]]` | Physical mailing address | Footer, `/contact`, `/sms-terms`, JSON-LD |
| `[[BUSINESS_PHONE]]` | Primary phone, formatted (XXX) XXX-XXXX | Header, sticky bar, every page footer, `/contact`, JSON-LD |
| `[[BUSINESS_EMAIL]]` | Primary inquiry email | Footer, `/contact`, success messages, JSON-LD |
| `[[PRIVACY_EMAIL]]` | Dedicated privacy request email | `/privacy` Section 13, footer |
| `[[TERMS_EMAIL]]` | Legal/terms inquiry email | `/terms` Sections 13 & 16 |
| `[[CALENDLY_LINK]]` | Calendly URL for residential/land | `/sell-your-property`, `/contact`, About, How It Works |
| `[[CALENDLY_COMMERCIAL_LINK]]` | Calendly URL for commercial | `/commercial`, `/contact` |
| `[[GOVERNING_LAW_STATE]]` | State for Terms governing law | `/terms`, `/options` AG link |
| `[[EFFECTIVE_DATE]]` | Effective date for Privacy + Terms | Top of `/privacy`, `/terms` |
| `[[SOCIAL_LINKEDIN]]` | LinkedIn company page URL | Footer, `/contact`, JSON-LD `sameAs` |
| `[[SOCIAL_FACEBOOK]]` | Facebook page URL | Footer, `/contact`, JSON-LD `sameAs` |
| `[[SOCIAL_INSTAGRAM]]` | Instagram profile URL | Footer, `/contact`, JSON-LD `sameAs` |
| `[[OFFICE_HOURS]]` | Human-readable office hours | Footer, `/contact`, `/sms-terms`, JSON-LD |
| `[[DOMAIN]]` | Production domain (no protocol) | JSON-LD `url` and image paths |
| `[[YEAR]]` | Current year (auto-populate via JS) | Footer copyright |
| `[[MARKET_1]]` `[[MARKET_2]]` `[[MARKET_3]]` | Top three operating markets | Homepage, About, Contact |
| `[[STREET]]` `[[CITY]]` `[[STATE]]` `[[ZIP]]` | Address components | JSON-LD `PostalAddress` |

**Find/replace workflow:**

1. Make a copy of this document before resolving placeholders.
2. Find each `[[TOKEN]]` and replace globally.
3. After replacement, run a final search for `[[` to catch any missed tokens.
4. Verify legal-page placeholders with counsel before publishing.

---

*End of document. Version 1.0 — initial designer-ready handoff.*
