# How to Migrate Your Solar Business from Excel to a CRM (Step-by-Step)

You started with a spreadsheet. Maybe it was a Google Sheet shared between you and your sales guy. Maybe it was an Excel file on your desktop with tabs for leads, proposals, and installs.

It worked — for a while. But now you've got 200 leads across three sheets, proposal versions nobody can track, and installation schedules that live in someone's head. You know you need a CRM. You just don't know how to make the switch without losing data, dropping balls, or spending a month on setup.

This guide walks you through migrating your solar business from spreadsheets to a CRM — step by step, with zero downtime and zero lost deals.

## Step 1: Audit Your Current Spreadsheet System

Before you migrate anything, you need to understand what you're actually working with. Most solar installers think they have "one spreadsheet." In reality, they have a system — it's just spread across multiple files, email threads, and sticky notes.

### Map Your Data Sources

Go through your operation and list every place information lives:

- **Lead tracking sheets** — Names, phone numbers, addresses, lead source, status
- **Proposal documents** — Word docs, PDFs, or spreadsheet-based templates
- **Installation schedules** — Calendar entries, shared sheets, or text messages
- **Financial tracking** — Payment status, invoice amounts, commission calculations
- **Email threads** — Customer communications with important details buried in replies
- **Notes apps or paper** — Site visit notes, technical details, customer preferences

### Identify Your Core Data Fields

Once you've mapped your sources, create a master list of data fields you actually use. For most solar installers, this includes:

**Lead/Contact data:** Name, phone, email, address, lead source, date acquired, status

**Project data:** System size, panel count, inverter type, roof type, estimated production, contract value

**Pipeline data:** Stage (new lead, site visit scheduled, proposal sent, contract signed, permit submitted, installed, monitoring), dates for each stage transition

**Financial data:** Contract amount, deposit received, financing type, commission amounts

Don't migrate data you don't use. If you have a column for "Referral Partner Secondary Contact" that's empty in 95% of rows, drop it.

## Step 2: Clean Your Data Before Migration

This is the step everyone wants to skip and nobody should. Migrating dirty data into a CRM just gives you a more expensive mess.

### Remove Duplicates

Solar leads often appear multiple times — they filled out a web form, then called, then got referred by a friend. Search for duplicate phone numbers and addresses. Keep the record with the most complete information and merge details from duplicates.

### Standardize Formats

- **Phone numbers** — Pick one format and apply it to every record: (555) 123-4567 or 555-123-4567
- **Addresses** — Full addresses with consistent formatting. "123 Main St, Tampa, FL 33601" not "main street tampa"
- **Status labels** — Standardize pipeline stages. If some rows say "Proposal Sent" and others say "Quoted" or "Prop Out" — pick one term
- **Dates** — Consistent format across all date fields. MM/DD/YYYY or YYYY-MM-DD, not a mix

### Mark Dead Records

Don't migrate leads from 2022 that never responded. Mark records as "Closed - No Response" or "Dead Lead" and either exclude them from migration or import them into an archive.

A clean import saves you hours of cleanup later and ensures your CRM reports are accurate from day one.

## Step 3: Choose the Right CRM for Solar

Not all CRMs are created equal, and a generic CRM will force you into the same workaround-heavy workflow you're trying to escape.

### What Solar Installers Need

- **Pipeline stages that match solar workflows** — Lead → Site Visit → Design → Proposal → Contract → Permit → Install → Monitoring
- **Proposal generation** — Built-in templates, not manual document creation
- **E-signatures** — Contracts signed digitally, not printed-signed-scanned
- **Permit tracking** — Status across multiple AHJs
- **Project management** — Installation scheduling and crew assignment
- **Post-install tracking** — Monitoring and warranty management

### What to Avoid

- **Generic CRMs** (Salesforce, HubSpot) that require extensive customization to fit solar workflows
- **Platforms priced per user** that get expensive as your team grows
- **Tools that only cover part of the workflow** — a CRM that doesn't do proposals means you still need PandaDoc; one that doesn't track projects means you still need Monday.com

Solar OS covers the full solar lifecycle — from lead capture through monitoring — for $49/month. It's designed specifically for solar installers, so your pipeline stages, proposal templates, and project workflows work out of the box.

## Step 4: Prepare Your Import File

Most CRMs accept CSV imports. Here's how to prepare yours:

### Create a Master CSV

1. Open your main spreadsheet
2. Ensure column headers are clear and consistent (First Name, Last Name, Phone, Email, Address, City, State, Zip, Lead Source, Status, System Size kW, Contract Value)
3. Remove any formatting, merged cells, or formulas — CRMs import raw values
4. Save as CSV (UTF-8 encoding)

### Split Data if Needed

If your CRM has separate sections for contacts and projects, you may need two import files:

- **Contacts CSV** — One row per person with contact details
- **Projects CSV** — One row per project with technical and financial details, linked to the contact by email or a unique ID

### Test with a Small Batch

Before importing everything, test with 10–20 records. Import them, check that fields mapped correctly, and verify that pipeline stages, dates, and custom fields look right. Fix any mapping issues before doing the full import.

## Step 5: Set Up Your CRM Before Importing

Don't import data into a default CRM configuration. Set it up first:

### Configure Pipeline Stages

Create stages that match your actual workflow:

1. New Lead
2. Contact Made
3. Site Visit Scheduled
4. Site Visit Complete
5. Proposal Sent
6. Proposal Follow-up
7. Contract Signed
8. Permit Submitted
9. Permit Approved
10. Installation Scheduled
11. Installation Complete
12. Inspection Passed
13. Monitoring Active

### Set Up Custom Fields

Add any solar-specific fields your spreadsheet tracked:

- System size (kW)
- Panel model
- Inverter model
- Roof type
- AHJ jurisdiction
- Utility company
- Financing type

### Create Proposal Templates

Build out your standard proposal templates before importing, so you can start generating proposals for imported leads immediately.

## Step 6: Import and Verify

Run your full import and then verify:

- **Record count** — Does the number of imported records match your CSV?
- **Field mapping** — Spot-check 20 random records for correct data in every field
- **Pipeline distribution** — Does the breakdown of leads by stage look right?
- **Date accuracy** — Are dates imported correctly (watch for MM/DD vs DD/MM issues)?
- **Duplicate check** — Did the import create any duplicates?

## Step 7: Run Parallel for Two Weeks

Don't kill your spreadsheet on day one. Run both systems simultaneously for two weeks:

- **Week 1** — Enter all new leads in the CRM only. Reference the spreadsheet for historical data as needed. Update both systems for any existing deals that progress.
- **Week 2** — Work exclusively in the CRM. Only open the spreadsheet if you need historical reference.
- **Week 3** — Archive the spreadsheet. You're fully on the CRM.

This parallel period catches any import issues and gives your team time to build new habits without risking lost deals.

## Key Takeaways

- **Audit all data sources first** — your "spreadsheet system" is probably spread across more places than you think
- **Clean data before migrating** — duplicates, inconsistent formats, and dead leads will poison your CRM from day one
- **Choose a solar-specific CRM** — generic tools require expensive customization that small installers can't afford
- **Test imports with small batches** before doing the full migration
- **Run parallel for two weeks** — don't go cold turkey on your spreadsheet
- **Configure the CRM before importing** — pipeline stages, custom fields, and templates should be ready first

## Ready to Ditch the Spreadsheet?

Solar OS was built for solar installers who've outgrown Excel. Import your leads, set up your pipeline, and start managing your entire operation from one platform — CRM, proposals, contracts, permitting, and monitoring.

**Start your free trial at [solaros.app](https://solaros.app) — most installers are fully operational within a day.**
