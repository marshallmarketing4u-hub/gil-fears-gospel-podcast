# Safe Haven Asset Group

**Client type:** Real estate investor / private acquisition company
**Status:** Pre-launch — brand and website build
**RLM role:** Brand creation, website copy, designer handoff

---

## Project Overview

Safe Haven Asset Group is a private real estate acquisition company. They help property owners explore confidential, no-pressure sale options for residential, land, and commercial properties. Not a brokerage — a direct buyer.

**Brand promise:** *A private conversation, a fair review, and a clear path forward — whatever you decide.*

---

## Deliverables

| # | Deliverable | Status |
|---|---|---|
| 1 | Website copy & design brief | Complete (v1.0) |
| 2 | Placeholder tracker | Complete |
| 3 | Brand assets (logo, style guide) | In progress (guide complete, logo pending) |
| 4 | Website build | Complete (HTML/CSS/JS) |
| 5 | GHL form wiring | Awaiting webhook URL from client |

---

## Key Files

- `docs/website-brief.md` — Master copy + design spec (all 6 parts; designer-ready)
- `docs/placeholder-tracker.md` — Pre-launch checklist for all `[[PLACEHOLDER]]` tokens
- `brand/brand-guide.md` — Brand system, logo placement, and launch asset checklist
- `website/` — Production-ready 12-page site files (HTML/CSS/JS)

---

## Website Structure (12 Pages)

| URL | Page |
|---|---|
| `/` | Homepage |
| `/sell-your-property` | Seller Intake (primary conversion page) |
| `/commercial` | Commercial Seller |
| `/land` | Vacant Land |
| `/probate` | Probate / Inherited |
| `/options` | Options for Owners Under Pressure |
| `/sms-terms` | SMS Opt-In Terms |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/contact` | Contact |
| `/about` | About |
| `/how-it-works` | How It Works |

---

## Design Direction

- **Palette:** Option A — Slate & Cream (recommended); see brief Part 1.3 for full specs
- **Typography:** Pairing 1 — Söhne + Tiempos (recommended); free alt is Inter + Source Serif
- **Tone:** Trustworthy, premium, private, plainly clear, seller-friendly
- **Photography:** Calm, warm, exterior/interior at golden hour — no "ugly house" or cash imagery

---

## Next Steps

1. Resolve `[[PLACEHOLDER]]` tokens with client — use `docs/placeholder-tracker.md`
2. Get legal review of Privacy Policy and Terms of Service
3. Add final logo files to `brand/` and update favicon/OG assets
4. Set GHL inbound webhook URL and run end-to-end form tests

---

## Notes

- `/options` slug is intentional — not `/foreclosure`. Do not change.
- Privacy Policy and Terms of Service are marked "Draft for legal review" — must not publish without counsel sign-off.
- No testimonials at launch. Testimonial section on homepage must be hidden until real quotes are collected.
- SMS consent checkboxes must be unchecked by default — legal requirement.
