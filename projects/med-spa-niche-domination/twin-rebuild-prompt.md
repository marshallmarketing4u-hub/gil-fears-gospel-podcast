# Twin GHL Rebuild Prompt — Med Spa Acquisition

**Paste the section below into Twin to dispatch the rebuild.**

Target: full system live by Sunday May 10, 2026 EOD. Robert launches Monday May 11.

---

## TWIN PROMPT (copy from here)

You started a Med Spa Acquisition GHL build but didn't finish. Resume the build and bring it to launch-ready state.

### What survived from your prior run (do not recreate)

- Sub-account is correct.
- Pipeline `Med Spa Acquisition` exists with 9 stages: Targeted, Contacted, Engaged, Discovery Scheduled, Discovery Completed, Proposal Sent, Verbal Yes, Closed Won, Closed Lost.
- 15 custom fields exist.
- 50 contacts imported and tagged with at least their tier and geo tag.

### What's broken or missing

| Component | State | Action |
|---|---|---|
| Tags | 7 of 15 exist with `msa-` prefix | Verify which 7, add the missing 8 |
| Smart lists | Some exist, count unverified | Confirm 6 exist with correct filters; build any missing |
| Workflows | 2 unnamed empty stubs exist, 0 functional | DELETE the 2 stubs, build the 4 named workflows below |
| Email templates | 0 of 3 exist | Build all 3 |
| SMS templates | 0 of 2 exist | Build both |

### Source-of-truth specs (do not improvise — pull from these docs)

- `projects/med-spa-niche-domination/ghl-crm-operating-system.md`
- `projects/med-spa-niche-domination/ghl-side-by-side-setup-sequence.md`
- `projects/med-spa-niche-domination/twin-supervisor-checklist.md`

### Required tag taxonomy (verify all 15 exist with `msa-` prefix)

```
msa-niche-medspa
msa-geo-longbeach
msa-geo-lakewood
msa-tier1-priority
msa-tier2-priority
msa-tier3-priority
msa-status-contacted
msa-status-engaged
msa-status-discovery
msa-status-proposal
msa-objection-price
msa-objection-timing
msa-objection-authority
msa-no-reply-5d
msa-hot-lead
```

### Required smart lists (6)

1. Tier 1 No Contact Yet — filter: tag `msa-tier1-priority` AND stage `Targeted`
2. Contacted No Reply 5 Plus Days — filter: tag `msa-status-contacted` AND last activity > 5 days
3. Discovery This Week — filter: stage `Discovery Scheduled` AND scheduled date within current week
4. Proposal Sent No Decision 3 Plus Days — filter: stage `Proposal Sent` AND days in stage > 3
5. Closed Won This Month — filter: stage `Closed Won` AND close date in current month
6. Stale Opportunities 7 Plus Days — filter: any active stage AND days since last activity > 7

### Required workflows (4 — all NAMED, all PUBLISHED)

**1. MSA-NoReply-5Day**
- Trigger: tag added `msa-status-contacted`
- Wait condition: 5 days, no inbound reply
- Add tag `msa-no-reply-5d`
- Send email: `MSA-Email-02-FollowUp`
- Wait 2 days
- Send email: `MSA-Email-03-LastCall`
- Create task: "Phone call attempt — [Contact Name]" assigned to owner, due tomorrow

**2. MSA-Discovery-Reminder**
- Trigger: opportunity moved to `Discovery Scheduled`
- Send confirmation email
- Send SMS `MSA-SMS-DiscoveryReminder-24h` 24 hours before scheduled time
- Send SMS `MSA-SMS-DiscoveryReminder-2h` 2 hours before
- Create task: "Pre-call research checklist for [Contact Name]" due 4 hours before call

**3. MSA-Proposal-Chase**
- Trigger: opportunity moved to `Proposal Sent`
- Send proposal-delivery email
- Wait 2 days
- Send check-in email
- Wait 2 days
- Send close-the-loop message
- Create task: "Phone follow-up if no response — [Contact Name]" due same day

**4. MSA-ClosedWon-Onboarding**
- Trigger: opportunity moved to `Closed Won`
- Send welcome email
- Send onboarding form link
- Create internal task list for week 1 delivery (5 sub-tasks)
- Assign account owner
- Set first strategy call task due within 3 business days

### Required email templates (3)

Naming: prefix `MSA-Email-`. Body content can mirror the patterns and tone from `projects/lead-gen-funnel/email-sequences.md` — adapt the angle to med spa owners.

1. **MSA-Email-01-Hook** — personalized first-touch. Use placeholder `{{custom_hook}}` for the per-prospect hook line. Use `{{booking_link}}` for the CTA URL.
2. **MSA-Email-02-FollowUp** — concise, gap-focused, references the first email.
3. **MSA-Email-03-LastCall** — polite close-the-loop, "if now's not the right time, no problem."

All three should use `{{booking_link}}` for the CTA. Robert will replace with the real URL before publishing the workflows.

### Required SMS templates (2)

1. **MSA-SMS-DiscoveryReminder-24h** — confirms tomorrow's call, includes time and join link. Under 320 chars.
2. **MSA-SMS-DiscoveryReminder-2h** — final reminder, 2-hour heads up. Under 320 chars.

### Must-pass gates before reporting complete

- [ ] All 15 `msa-*` tags exist
- [ ] 6 smart lists exist with documented filter logic
- [ ] 4 named workflows exist, all in **Published** state (not Draft)
- [ ] 2 empty stub workflows deleted
- [ ] 3 email templates created and referenced correctly by workflows
- [ ] 2 SMS templates created and referenced by Discovery-Reminder workflow
- [ ] Activation test: move 1 test contact through `Targeted → Contacted → Discovery Scheduled → Proposal Sent → Closed Won`. Confirm each workflow fires.
- [ ] No literal `[[PLACEHOLDER]]` text remains except `{{booking_link}}` and `{{custom_hook}}` (those are intentional)

### Report back format

When done, paste:
1. Confirmation that each gate above is checked off
2. Names + status of all 4 workflows
3. The GHL contact export CSV (so reconciliation can verify the 50 contacts kept their tags and field mappings)

---

## NOT TWIN'S JOB — Robert handles separately

- **Booking calendar setup.** Twin uses `{{booking_link}}` placeholder. Robert creates the GHL Calendar (or Calendly) for "Discovery Call" and replaces the placeholder before publishing workflows.
- **Email warmup.** If sender domain is fresh, warm it before bulk send.
- **First-touch personalization.** Twin builds the template with `{{custom_hook}}`. Robert fills in the per-prospect hook line for each Tier 1 contact before sending.

## Definition of "Monday-launch ready"

By Sunday May 10 EOD, all of these are true:

1. ✅ All 15 tags + 6 smart lists + 4 published workflows + 3 email templates + 2 SMS templates
2. ✅ Activation test passed
3. ✅ Booking link replaced in all 3 email templates
4. ✅ Robert has 10 personalized hooks ready for the Tier 1 contacts
5. ✅ Sender domain warm and clear of deliverability flags
