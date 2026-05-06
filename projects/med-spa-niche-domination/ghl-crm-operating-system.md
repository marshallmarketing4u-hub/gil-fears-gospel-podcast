# GHL CRM OPERATING SYSTEM
## RLM Med Spa Client Acquisition Engine

## Objective
Use GoHighLevel to move 50 prospects through a clean pipeline and close first 3-5 clients in 90 days.

## Pipeline Setup (Opportunities)

Create one pipeline: Med Spa Acquisition

| Stage Order | Stage Name | Exit Criteria | SLA |
|------------|------------|---------------|-----|
| 1 | Targeted | Lead record created with score + owner name | 24 hours |
| 2 | Contacted | First email and LinkedIn touch sent | Same day |
| 3 | Engaged | Reply received or connection accepted | 48 hours follow-up |
| 4 | Discovery Scheduled | Call date booked | 72 hours |
| 5 | Discovery Completed | Call done and notes logged | Same day |
| 6 | Proposal Sent | Proposal delivered with value and timeline | 24 hours |
| 7 | Verbal Yes | Deal intent confirmed | 48 hours |
| 8 | Closed Won | Invoice paid and onboarding started | Same day |
| 9 | Closed Lost | Disqualified or no decision | Same day reason logged |

## Required Custom Fields

Create these contact or opportunity fields in GHL:

1. Niche: Med Spa
2. Geo: Long Beach, Lakewood
3. Digital Maturity Score: 1-10
4. Website Score: 1-10
5. Instagram Score: 1-10
6. Google Reviews Count
7. Est Monthly Revenue Band
8. Decision Maker Name
9. Decision Maker Role
10. Last Contact Date
11. Next Action Date
12. Objection Type
13. Offer Tier: 1, 2, 3
14. Proposal Amount
15. Expected Close Date

## Tag Taxonomy

Use consistent tags only:

- niche-medspa
- geo-longbeach
- geo-lakewood
- tier1-priority
- tier2-priority
- tier3-priority
- status-contacted
- status-engaged
- status-discovery
- status-proposal
- objection-price
- objection-timing
- objection-authority
- no-reply-5d
- hot-lead

## Smart Lists

Create these saved filters in Contacts or Opportunities:

1. Tier 1 No Contact Yet
2. Contacted No Reply 5+ Days
3. Discovery This Week
4. Proposal Sent No Decision 3+ Days
5. Closed Won This Month
6. Stale Opportunities 7+ Days No Activity

## Workflow Automations

## Workflow 1: No Reply Follow-Up (5-day)
Trigger:
- Tag added: status-contacted
Condition:
- No inbound reply within 5 days
Actions:
1. Add tag no-reply-5d
2. Send follow-up email #2
3. Wait 2 days
4. Send follow-up email #3
5. Create task: Phone call attempt

## Workflow 2: Discovery Reminder
Trigger:
- Opportunity moved to Discovery Scheduled
Actions:
1. Send confirmation email
2. Send SMS reminder 24h before
3. Send SMS reminder 2h before
4. Create task: Pre-call research checklist

## Workflow 3: Proposal Chase
Trigger:
- Opportunity moved to Proposal Sent
Actions:
1. Send proposal delivery email
2. Wait 2 days
3. Send check-in email
4. Wait 2 days
5. Send close-the-loop message
6. Create task: phone call if no response

## Workflow 4: Closed Won Onboarding
Trigger:
- Opportunity moved to Closed Won
Actions:
1. Send welcome email
2. Send onboarding form link
3. Create internal task list for week 1 delivery
4. Assign account owner
5. Set first strategy call

## Daily GHL Workflow (60-75 min)

## Morning Sweep (25 min)
1. Check Stale Opportunities list.
2. Clear overdue tasks.
3. Update next action date on all active deals.
4. Move opportunities to correct stage.

## Midday Push (20 min)
1. Send follow-ups from No Reply and Proposal lists.
2. Confirm upcoming discovery calls.
3. Add call prep notes to each booked lead.

## End-of-Day Closeout (15-30 min)
1. Log all new activity.
2. Verify every active lead has next action date.
3. Update deal value and close probability.
4. Snapshot daily numbers in KPI tracker.

## Weekly Cadence in GHL

| Day | CRM Focus | Output |
|-----|-----------|--------|
| Monday | Data hygiene + scoring | 10 leads enriched |
| Tuesday | Outbound + task clear | 20 touches logged |
| Wednesday | Discovery execution | 2-3 calls logged |
| Thursday | Proposal and chase | 1-2 proposals progressed |
| Friday | Reporting + optimization | Pipeline report + plan |

## KPI Dashboard (Inside GHL)

Track weekly:

1. New leads added
2. Contacts touched
3. Reply rate
4. Discovery calls booked
5. Discovery calls completed
6. Proposals sent
7. Close rate
8. New MRR closed
9. Average days in stage

## Stage Movement Rules

1. Never leave a lead in Contacted without a next follow-up date.
2. Never leave Discovery Completed without either Proposal Sent or Closed Lost.
3. Never leave Proposal Sent without a chase sequence active.
4. Every Closed Lost must have a coded reason.

## Close Reason Codes

Use these exact values:

- price
- timing
- no decision
- chose competitor
- not ideal fit
- no response

## Team Accountability Rules

1. If stage age is more than 7 days, escalate same day.
2. If no outbound is logged by 2 PM, run a mandatory outbound sprint.
3. If close rate drops below 25 percent, review discovery call recordings and script.

## 14-Day GHL Launch Plan

Day 1:
- Build pipeline and fields.
- Import first 50 prospects.

Day 2:
- Apply tags and tiering.
- Build smart lists.

Day 3:
- Build four automations.
- Test each with internal contacts.

Day 4:
- Load outreach templates and signatures.

Day 5:
- Start outbound to Tier 1 list.

Days 6-10:
- Run daily command center and fill discovery calendar.

Days 11-14:
- Send proposals and tighten follow-up loops.
- Review stage conversion and optimize.

## Definition Of Done

You are operating correctly when:

1. 100 percent of active opportunities have next action dates.
2. Stage conversion rates are visible weekly.
3. No lead sits untouched for more than 5 business days.
4. Discovery to proposal is above 70 percent.
5. Proposal to close is above 30 percent.