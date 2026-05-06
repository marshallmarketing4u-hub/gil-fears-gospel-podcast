# Weekly 50 — Med Spa Prospect Research Workflow

A repeatable per-week process that hands a fresh batch of 50 qualified med spa prospects to the existing GHL infrastructure. Geo rotates each week.

---

## What's already built (don't redo)

The first batch (Long Beach / Lakewood) walked through full GHL setup. Everything below is one-time and stays in place across all future batches:

- Pipeline `Med Spa Acquisition` + 9 stages
- 15 custom fields, 15 tags, 6 smart lists
- 4 published workflows (NoReply-5Day, Discovery-Reminder, Proposal-Chase, ClosedWon-Onboarding)
- Email/SMS templates referenced inside workflows
- Dedupe rules (email + phone)

See [ghl-crm-operating-system.md](ghl-crm-operating-system.md) for the full system.

---

## Geo rotation

Each batch targets ONE geo cluster. Confirmed order:

| Week | Geo cluster | Geo tag |
|---|---|---|
| 1 | Long Beach / Lakewood | `msa-geo-longbeach` (DONE) |
| 2 | Santa Monica | `msa-geo-santamonica` |
| 3 | West LA / Beverly Hills | `msa-geo-westla-bh` |
| 4 | Seal Beach / Costa Mesa | `msa-geo-sealbeach-cm` |
| 5+ | TBD — extend as you go | TBD |

After ~12 weeks of fresh geos, rotate back to week 1's geo with a new round of prospects (the original list will be deeper in the pipeline by then, so re-research surfaces new openings).

---

## The weekly process (~4-6 hours total)

### 1. Source raw prospects (60 min)

Goal: 80-100 raw names, filtered down to 50.

Use Perplexity MCP from Claude Code:

```
List all medical spas, med spas, aesthetic clinics, and luxury day spas
in [GEO]. For each, return: business name, full street address, phone,
website (if any), Instagram handle (if any), and primary services.
Exclude national chains (Ideal Image, LaserAway, Sono Bello, etc.).
Target locally-owned operators only.
```

Cross-check against:
- Google Maps "med spa near [city]" — pull the list view
- Yelp "Medical Spas" category for the city
- Instagram location search

### 2. Score and qualify (2-3 hours)

For each prospect, fill in the same scoring columns the existing CSV uses:

| Column | What to fill | Range |
|---|---|---|
| Digital Maturity Score | Combined website + social presence | 1 (none) to 10 (premium) |
| Website Score | Mobile-friendliness, conversion clarity, modern design | 1-5 |
| Instagram Score | Posting cadence, follower count, engagement | 1-5 |
| Google Reviews Count | Rough number from Google Business | integer |
| Est Monthly Revenue Band | Best estimate from team size, services, reviews | $50K-150K / $150K-500K / $500K+ |

**Tier assignment** (drives priority tag):
- **Tier 1** — Score 1-4 → tag `msa-tier1-priority` → enters NoReply workflow first
- **Tier 2** — Score 5-7 → tag `msa-tier2-priority` → secondary cadence
- **Tier 3** — Score 8+ → tag `msa-tier3-priority` → low-touch, monitor only

Aim for ~10-15 Tier 1, ~25-30 Tier 2, rest Tier 3.

### 3. Format the import CSV (30 min)

Save to: `projects/med-spa-niche-domination/imports/[YYYY-MM-DD]-[geo].csv`

Use the **exact** column structure from [ghl-import-cleaned.csv](ghl-import-cleaned.csv) — GHL field mapping is locked to that header.

Tags column for each row:
```
msa-tier1-priority,msa-niche-medspa,msa-geo-[geoname],msa-imported-no-email-verify
```

(swap tier and geo per row; drop `msa-imported-no-email-verify` if you have a verified email)

### 4. Pre-flight quality gates

Before importing, confirm:

- [ ] No duplicate phones inside the batch
- [ ] No duplicate business names
- [ ] Every Tier 1 row has phone OR email
- [ ] Geo tag matches the week's target
- [ ] CSV opens cleanly (no missing-column errors)

### 5. Import to GHL (15 min)

GHL → Contacts → Import → upload CSV.
- Map columns to existing custom fields
- Dedupe by **email + phone** (already configured)
- Confirm imported row count = CSV row count
- Confirm tags applied (spot-check 3-5 rows)

### 6. Verify enrollment (5 min)

GHL → Workflows → `MSA-NoReply-5Day` → Enrolled tab
- Count should equal Tier 1 rows in the batch
- If short, recheck tag application

### 7. Daily outreach kicks off

The [daily-workflow.md](daily-workflow.md) takes over from here:
- Send first-touch emails to Tier 1
- Move enrolled contacts through pipeline as replies come in
- Tier 2/3 stay in slower drip

---

## Output of each weekly run

A new commit with:
1. `imports/[YYYY-MM-DD]-[geo].csv` (the batch)
2. Optional: `research-logs/[YYYY-MM-DD]-[geo].md` (notes, sources, anything weird)

Then in GHL: 50 new contacts, ~10-15 of them auto-enrolled in the NoReply sequence.

---

## What changes vs. what stays

| Stays the same every week | New every week |
|---|---|
| Pipeline, stages, fields, tags | Geo target |
| Workflows, templates, sequences | 50 prospects |
| Tier criteria | Geo tag value |
| CSV column structure | First-touch personalization angles |
| Import / dedupe rules | Competitor intel for that geo |

---

## When to revisit this doc

- New niche (not med spa) → fork to a new project folder, copy this workflow, adjust scoring rubric
- Outreach response rate drops → revisit scoring (maybe Tier 1 threshold needs to tighten)
- New geo expansion → just add rows to the rotation table above
