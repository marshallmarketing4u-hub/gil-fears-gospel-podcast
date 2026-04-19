# ClickUp Podcast Outreach Tracker — Setup Guide

## Space & List Structure

```
Space:  Gil Fears Podcast
  └── Folder: 40 in 60 Campaign
        ├── List: Target Shows
        ├── List: Outreach Pipeline
        └── List: Confirmed Bookings
```

---

## List 1 — Target Shows

This is your research bank. Every show goes here first.

### Custom Fields

| Field | Type | Options |
|---|---|---|
| Show Name | Text | — |
| Host Name | Text | — |
| Category | Dropdown | Gospel/Faith, Black Church & Culture, Inspirational, Music & Entertainment, Indie Faith |
| Tier | Dropdown | A (large), B (mid), C (emerging) |
| Est. Audience Size | Number | — |
| Show URL | URL | — |
| Apple Podcasts Link | URL | — |
| Spotify Link | URL | — |
| Host Email | Email | — |
| Host Instagram | Text | — |
| Notes | Long Text | — |
| Outreach Status | Dropdown | Not Started, Contacted, In Talks, Booked, Passed |

### Statuses
- **Not Started** — researched, not yet contacted
- **Contacted** — outreach sent, awaiting response
- **In Talks** — host responded, scheduling in progress
- **Booked** — date confirmed
- **Passed** — declined or no response after 2 follow-ups

---

## List 2 — Outreach Pipeline

One task per show being actively worked.

### Custom Fields

| Field | Type | Notes |
|---|---|---|
| Show Name | Text | — |
| Host Name | Text | — |
| Tier | Dropdown | A / B / C |
| Outreach Date | Date | Date first email sent |
| Follow-up 1 Date | Date | 4 days after outreach |
| Follow-up 2 Date | Date | 8 days after outreach |
| Response Received | Checkbox | — |
| Response Date | Date | — |
| Recording Date | Date | If booked |
| Air Date | Date | When episode publishes |
| Episode Link | URL | After it airs |
| Notes | Long Text | — |

### Statuses (Pipeline Stages)
1. **Outreach Sent**
2. **Follow-up 1 Sent**
3. **Follow-up 2 Sent**
4. **Response Received**
5. **Scheduling**
6. **Recorded**
7. **Published**
8. **Closed — No Response**

---

## List 3 — Confirmed Bookings

Only shows with a locked recording date live here.

### Custom Fields

| Field | Type | Notes |
|---|---|---|
| Show Name | Text | — |
| Host Name | Text | — |
| Recording Date | Date | — |
| Recording Time | Text | Include timezone |
| Format | Dropdown | Video, Audio Only, In-Person |
| Platform | Text | Zoom, Riverside, Squadcast, etc. |
| Prep Notes | Long Text | Host's focus, audience, anything to know |
| Gil's Talking Points | Long Text | Customized per show |
| Episode Live Date | Date | — |
| Episode Link | URL | — |
| Promotion Done | Checkbox | Did Gil share it on social? |

### Statuses
- **Confirmed**
- **Recorded**
- **Published**
- **Promoted**

---

## Automations to Set Up in ClickUp

1. **Outreach Sent → Auto-create Follow-up 1 task** due 4 days later
2. **Follow-up 1 Sent → Auto-create Follow-up 2 task** due 4 days later
3. **Booked → Auto-move to Confirmed Bookings list**
4. **Recording Date within 48 hours → Notify Gil** with prep notes
5. **Published → Remind to promote on social**

---

## Weekly Dashboard View

Set up a Dashboard in ClickUp with these widgets:

| Widget | What It Shows |
|---|---|
| Count: Outreach Sent | Running total of shows contacted |
| Count: Confirmed Bookings | Running total booked |
| Count: Published | Episodes already aired |
| Bar Chart: Bookings by Category | Which category is converting best |
| Calendar: Recording Dates | Gil's upcoming recording schedule |
| List: Follow-ups Due This Week | Never miss a follow-up |

---

## 60-Day Outreach Calendar

| Days | Action |
|---|---|
| 1–7 | Research and build the target list (60 shows) |
| 5–10 | Finalize guest one-sheet and outreach email template |
| 8–14 | Send Wave 1 — 30 outreach emails (Tier A + B priority) |
| 12–18 | Follow-up 1 on Wave 1 |
| 15–21 | Send Wave 2 — 20 outreach emails (remaining B + C) |
| 16–22 | Follow-up 2 on Wave 1 |
| 20–26 | Follow-up 1 on Wave 2 |
| 24–60 | Record appearances, track, promote each episode |
| Weekly | Review dashboard — adjust targeting based on response rates |

**Target pace:** 5 confirmed bookings per week starting Week 3.

---

## Outreach Email Template

**Subject:** Guest Invitation — Gil Fears / "It's A New Day" Gospel Podcast

> Hi [Host Name],
>
> My name is Robert Marshall — I manage Gil Fears, host of *The Gil Fears "It's A New Day" Gospel Podcast*, a daily gospel broadcast reaching believers across Apple Podcasts, Spotify, YouTube, and iHeart Radio.
>
> Gil is a pastor, preacher, and storyteller with decades of experience moving audiences. He's launching into the podcast space with a fresh, daily voice in gospel — and I'd love to explore having him on [Show Name] to share his story and what he's building.
>
> He speaks powerfully on:
> - Faith and daily spiritual practice
> - The power of gospel music
> - Building community around belief
> - His personal testimony and what "It's A New Day" really means
>
> I've attached his one-sheet. Happy to send over any additional info or work around your recording schedule.
>
> Looking forward to connecting.
>
> Robert Marshall
> RLM Marketing Agency LLC
> rlmarshall2@yahoo.com

---

## Follow-up Template (Day 4)

**Subject:** Re: Guest Invitation — Gil Fears

> Hi [Host Name],
>
> Just following up on my note from a few days ago. Gil's schedule is filling up quickly and I want to make sure [Show Name] has first consideration if this is a fit.
>
> Let me know if you'd like to set up a quick call or if you need anything else from us.
>
> Robert Marshall
> RLM Marketing Agency LLC
