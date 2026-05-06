# GHL SIDE-BY-SIDE SETUP SEQUENCE
## Tomorrow Build Plan (You + Me)

## Outcome
By the end of this session, your GHL workspace will have:
1. A complete Med Spa Acquisition pipeline
2. Required fields, tags, and smart lists
3. Core automations live
4. Outreach and follow-up sequences ready
5. First 50 leads loaded and actionable

## Total Time
2 hours 45 minutes to 3 hours 30 minutes

## Session Structure

| Block | Duration | Goal |
|------|----------|------|
| Block 1 | 20 min | Preflight and naming standards |
| Block 2 | 35 min | Pipeline + stages + opportunity rules |
| Block 3 | 30 min | Custom fields + tags + smart lists |
| Block 4 | 45 min | Automations and reminders |
| Block 5 | 35 min | Templates and messaging assets |
| Block 6 | 25 min | Import leads and run QA |
| Block 7 | 15 min | Go-live checks and first outbound push |

## Side-by-Side Sequence

## Block 1: Preflight and Standards (20 min)

| Step | You Do In GHL | I Do With You | Done Check |
|------|----------------|---------------|------------|
| 1.1 | Open sub-account where med spa outreach lives | Confirm account structure and campaign scope | Correct account confirmed |
| 1.2 | Set timezone, business info, sender domain | Validate settings against outreach deliverability rules | Timezone and sender match your region/domain |
| 1.3 | Create naming convention doc in notes | Give exact naming format for stages, tags, workflows | Naming standard locked |

Naming standard:
- Pipeline: Med Spa Acquisition
- Workflows prefix: MSA-
- Tags prefix: msa-
- Templates prefix: MSA-

## Block 2: Pipeline Build (35 min)

| Step | You Do In GHL | I Do With You | Done Check |
|------|----------------|---------------|------------|
| 2.1 | Create pipeline: Med Spa Acquisition | Provide exact stage order and SLA logic | Pipeline created |
| 2.2 | Add stages in order | Verify stage names and sequence accuracy | 9 stages visible |
| 2.3 | Enable opportunity cards with value and owner | Define default value behavior and ownership | Value and owner fields active |
| 2.4 | Add stage movement rule discipline | Define movement criteria for each stage | No ambiguous stage transitions |

Stage order:
1. Targeted
2. Contacted
3. Engaged
4. Discovery Scheduled
5. Discovery Completed
6. Proposal Sent
7. Verbal Yes
8. Closed Won
9. Closed Lost

## Block 3: Fields, Tags, Smart Lists (30 min)

| Step | You Do In GHL | I Do With You | Done Check |
|------|----------------|---------------|------------|
| 3.1 | Create custom fields | Provide exact field names and value types | All required fields created |
| 3.2 | Create tag library | Give tag taxonomy and usage rules | Tags created and documented |
| 3.3 | Build smart lists | Map each list to daily workflow actions | 6 smart lists ready |

Required custom fields:
- Niche
- Geo
- Digital Maturity Score
- Website Score
- Instagram Score
- Google Reviews Count
- Est Monthly Revenue Band
- Decision Maker Name
- Decision Maker Role
- Last Contact Date
- Next Action Date
- Objection Type
- Offer Tier
- Proposal Amount
- Expected Close Date

Tag set:
- msa-niche-medspa
- msa-geo-longbeach
- msa-geo-lakewood
- msa-tier1-priority
- msa-tier2-priority
- msa-tier3-priority
- msa-status-contacted
- msa-status-engaged
- msa-status-discovery
- msa-status-proposal
- msa-objection-price
- msa-objection-timing
- msa-objection-authority
- msa-no-reply-5d
- msa-hot-lead

Smart lists:
1. Tier 1 No Contact Yet
2. Contacted No Reply 5 Plus Days
3. Discovery This Week
4. Proposal Sent No Decision 3 Plus Days
5. Closed Won This Month
6. Stale Opportunities 7 Plus Days

## Block 4: Core Automations (45 min)

| Step | You Do In GHL | I Do With You | Done Check |
|------|----------------|---------------|------------|
| 4.1 | Build workflow MSA-NoReply-5Day | Write trigger, waits, and exact copy flow | Test contact receives sequence |
| 4.2 | Build workflow MSA-Discovery-Reminder | Set reminder timing and channels | Reminder sequence tested |
| 4.3 | Build workflow MSA-Proposal-Chase | Build 2 day and 4 day chase sequence | Follow-up logic confirmed |
| 4.4 | Build workflow MSA-ClosedWon-Onboarding | Add onboarding tasks and welcome sequence | Closed Won handoff works |
| 4.5 | Add internal task creation in each workflow | Define ownership and due dates | No task orphaning |

Automation quick logic:
- No Reply workflow starts when tag msa-status-contacted is added and no reply in 5 days
- Discovery reminder starts when stage becomes Discovery Scheduled
- Proposal chase starts when stage becomes Proposal Sent
- Onboarding starts when stage becomes Closed Won

## Block 5: Templates and Messaging Assets (35 min)

| Step | You Do In GHL | I Do With You | Done Check |
|------|----------------|---------------|------------|
| 5.1 | Create email template MSA-Email-01-Hook | Finalize personalized hook format | Template saved |
| 5.2 | Create email template MSA-Email-02-FollowUp | Keep concise and gap-focused | Template saved |
| 5.3 | Create email template MSA-Email-03-LastCall | Add polite close-the-loop language | Template saved |
| 5.4 | Create SMS reminder templates | Keep under 320 characters | SMS templates saved |
| 5.5 | Create call note template in opportunity notes | Add pain, objection, budget, timeline fields | Call note format adopted |

## Block 6: Import and QA (25 min)

| Step | You Do In GHL | I Do With You | Done Check |
|------|----------------|---------------|------------|
| 6.1 | Import first 50 prospects CSV | Verify field mapping line by line | 50 contacts imported |
| 6.2 | Bulk apply geo and niche tags | Validate segmentation for Long Beach and Lakewood | Tags correctly applied |
| 6.3 | Create opportunities for Tier 1 first | Define default owner and initial stage | Tier 1 opportunities visible |
| 6.4 | Spot check 10 random records | Validate custom fields and next action date | Data quality passes QA |

## Block 7: Go Live and First Outbound Push (15 min)

| Step | You Do In GHL | I Do With You | Done Check |
|------|----------------|---------------|------------|
| 7.1 | Send first 10 personalized emails | Approve personalization quality before send | 10 sent |
| 7.2 | Add LinkedIn touch task for each | Ensure task due dates are set | 10 tasks created |
| 7.3 | Set tomorrow discovery slots | Confirm booking windows and reminders | Calendar ready |
| 7.4 | End-of-day dashboard check | Compare actual to day-one targets | Day one scorecard complete |

## Day-One Targets

- 50 prospects imported
- 15 prospects moved to Contacted
- 10 first-touch emails sent
- 10 LinkedIn tasks created
- 2 discovery slots opened
- 0 active leads missing next action date

## Fast Troubleshooting Map

| Problem | Fix |
|--------|-----|
| Emails not sending | Check sender domain and warmup status |
| Automations not firing | Confirm trigger stage/tag and published status |
| Tasks not created | Verify action step owner and due date settings |
| Duplicate contacts | Enable dedupe by email and phone before import |
| Leads stuck in stage | Run Stale Opportunities list first each morning |

## 10-Minute Daily Command Center (After Setup)

1. Clear overdue tasks
2. Move stale opportunities forward
3. Send follow-ups from No Reply and Proposal lists
4. Update next action date on every active opportunity
5. Confirm discovery calendar for next 48 hours

## Definition of Success Tomorrow

You win tomorrow if all five are true:
1. Pipeline and stages are live
2. Four automations are active and tested
3. 50 prospects are imported and tagged
4. First outbound batch is sent
5. Every active lead has a next action date