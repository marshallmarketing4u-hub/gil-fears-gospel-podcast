# Twin Supervisor Checklist

Use this while Twin runs the GHL build.

## Before Starting
- Confirm API key is set in environment.
- Confirm correct GHL sub-account is open.
- Confirm CSV file exists:
  - projects/med-spa-niche-domination/ghl-prospects-import.csv

## Must-Pass Gates

### Gate 1: Pipeline
- Pipeline name exactly: Med Spa Acquisition
- 9 stages in exact order
- Pass or fail:

### Gate 2: Fields and Tags
- 15 custom fields created
- 15 tags created
- Pass or fail:

### Gate 3: Smart Lists
- 6 smart lists created
- Each list has clear filter logic
- Pass or fail:

### Gate 4: Workflows
- 4 workflows created and published
- Trigger logic verified for each
- Pass or fail:

### Gate 5: Templates
- 3 email templates created
- Referenced by workflows correctly
- Pass or fail:

### Gate 6: Import
- 50 contacts imported
- Failed rows = 0
- All imported records mapped to expected columns
- Pass or fail:

### Gate 7: Activation Test
- Move 1 test lead to Contacted
- Apply msa-status-contacted
- Confirm NoReply workflow enrollment
- Pass or fail:

## Red Flags
- Workflow created but left in draft
- Stage names not exact
- Missing tag prefixes
- Import columns skipped silently
- Auto-send enabled to all contacts

## End-of-Run Acceptance
System is accepted only if all are true:
1. Pipeline complete
2. All 4 workflows live
3. Import passed with no failed rows
4. Test enrollment succeeded
5. First 10 Tier 1 leads are ready for outreach