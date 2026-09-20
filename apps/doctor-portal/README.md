# IBD-Doctor(G)

PROMPT 2 — DOCTOR PATIENT MANAGEMENT

Continue from the existing Meridian IBD prototype.

IMPORTANT:

Do NOT redesign or rebuild the existing Login or Doctor Dashboard.

Keep the existing:

- visual design

- colors

- typography

- sidebar

- top navigation

- doctor profile

- dashboard cards

- mock data structure

Only extend the Doctor experience with:

1. My Patients

2. Patient List

3. Patient Detail / Clinical Record

Do NOT build:

- Patient Dashboard

- Admin Panel

- Doctor Collaboration Network

- Public website

- Appointment management

- Research management

- Backend/database

This is an incremental feature addition.

==================================================

1. ACTIVATE "MY PATIENTS"

==================================================

The existing Doctor sidebar currently contains:

Dashboard

My Patients

Appointments

Reports

Research

Case Studies

Blogs

Forums

Requests

Doctor Collaboration

Profile

Settings

Make ONLY:

"My Patients"

functional.

The other sections should remain unchanged.

Clicking:

My Patients

should navigate to:

/doctor/patients

==================================================

2. MY PATIENTS PAGE

==================================================

Create a professional clinical patient-management page.

Page header:

My Patients

Subtitle:

View and review the patients assigned to your care.

At the top, include:

- Total Patients

- Active Cases

- Follow-ups Due

- Critical Attention

Use the existing fictional dataset.

The doctor currently has:

10 fictional patients.

==================================================

3. PATIENT SEARCH

==================================================

Add a search field:

"Search patients..."

Allow searching by:

- Patient name

- Patient ID

- Diagnosis

Add filters:

Diagnosis:

- All

- Crohn's Disease

- Ulcerative Colitis

Severity:

- All

- Mild

- Moderate

- Severe

Status:

- All

- Stable

- Monitoring

- Attention Required

Add sorting:

- Name

- Recent Visit

- Next Appointment

- Severity

Keep this interface simple and fast.

==================================================

4. PATIENT TABLE

==================================================

Create a clean professional patient table.

Columns:

Patient ID

Patient

Age

Diagnosis

Severity

Last Visit

Next Appointment

Status

Action

Use 10 fictional patients.

Example dataset:

P001 — Aarav Sharma — 32 — Crohn's Disease — Moderate

P002 — Ananya Kulkarni — 27 — Ulcerative Colitis — Mild

P003 — Rohan Deshmukh — 41 — Crohn's Disease — Severe

P004 — Meera Joshi — 35 — Ulcerative Colitis — Moderate

P005 — Kabir Patil — 29 — Crohn's Disease — Mild

P006 — Sneha Shah — 46 — Ulcerative Colitis — Moderate

P007 — Aditya Rao — 38 — Crohn's Disease — Moderate

P008 — Priya Nair — 31 — Ulcerative Colitis — Mild

P009 — Vikram Singh — 52 — Crohn's Disease — Severe

P010 — Neha Kapoor — 24 — Ulcerative Colitis — Moderate

Use fictional data only.

Make sure the same patient information is reused consistently throughout the application.

==================================================

5. STATUS DESIGN

==================================================

Use clear status badges.

Examples:

Stable

Monitoring

Attention Required

Severity badges:

Mild

Moderate

Severe

Do not use excessive colors.

Use subtle medical SaaS styling.

==================================================

6. PATIENT ACTION

==================================================

Each patient row should have:

"View Record →"

Clicking it should navigate to:

/doctor/patients/:patientId

Example:

/doctor/patients/P001

==================================================

7. PATIENT DETAIL PAGE

==================================================

Create a detailed clinical record interface.

Header:

Aarav Sharma

Patient ID:

P001

Show:

Age

Gender

Diagnosis

Disease Type

Severity

Assigned Doctor

Last Visit

Next Appointment

Add a small status indicator.

Example:

Moderate

Currently Monitoring

==================================================

8. PATIENT DETAIL NAVIGATION

Use tabs:

Overview

Reports

Treatment

Doctor Notes

Vitals

Timeline

These should all exist within the patient record.

Keep the interface clean rather than creating separate unrelated pages.

==================================================

9. OVERVIEW TAB

==================================================

Create an overview of the patient's current condition.

Sections:

### Current Condition

Show:

Disease:

Crohn's Disease

Disease Location:

Ileocolonic

Severity:

Moderate

Current Status:

Monitoring

Diagnosis Date:

12 March 2023

### Current Treatment

Show:

Medication:

Adalimumab

Treatment Status:

Active

Treatment Start:

18 June 2025

### Latest Clinical Values

Show cards for:

CRP

ESR

Fecal Calprotectin

Weight

Use fictional values.

Example:

CRP

8.4 mg/L

ESR

22 mm/hr

Fecal Calprotectin

285 µg/g

Weight

68.4 kg

These values are fictional demonstration data.

==================================================

10. REPORTS TAB

==================================================

Create a patient-specific report library.

Show reports such as:

CBC

CRP

ESR

Fecal Calprotectin

Endoscopy

MRI / Imaging

Each report should display:

Report Type

Date

Status

Doctor

Action

Example:

CRP Blood Test

21 Aug 2026

Available

Fecal Calprotectin

18 Aug 2026

Reviewed

Endoscopy Report

10 Aug 2026

Reviewed

Use a "View Report" button.

For the prototype, opening the report can display a modal with sample report information.

Do NOT create actual medical documents.

==================================================

11. TREATMENT TAB

==================================================

Create a treatment overview.

Current Treatment:

Medication:

Adalimumab

Status:

Active

Start Date:

18 June 2025

Response:

Partial improvement

Also show treatment history.

Example:

Mesalamine

Jan 2024 – Nov 2024

Discontinued

Prednisolone

Dec 2024 – Feb 2025

Completed

Adalimumab

Jun 2025 – Present

Active

Show this as a timeline or clean table.

==================================================

12. DOCTOR NOTES TAB

==================================================

Create a read-only clinical notes interface.

Example:

21 Aug 2026

"Patient reports improved abdominal symptoms over the previous two weeks. Continue current treatment and monitor inflammatory markers."

Dr. Arjun Mehta

---

04 Aug 2026

"Follow-up consultation. Discussed treatment response and dietary considerations."

Dr. Arjun Mehta

Make it clear that these are clinical notes.

Doctors can VIEW notes.

Doctors cannot edit or delete them.

==================================================

13. VITALS TAB

==================================================

Create visual charts.

Show historical trends for:

- Weight

- Blood Pressure

- Heart Rate

- CRP

- Fecal Calprotectin

Use fictional historical data.

Example CRP:

Jan — 14.2

Feb — 12.6

Mar — 10.8

Apr — 9.7

May — 8.9

Jun — 8.4

Create a clean line chart.

Allow switching between metrics if practical.

Do not create excessive charts.

One chart at a time is sufficient.

==================================================

14. TIMELINE TAB

==================================================

Create a chronological clinical timeline.

Example:

12 Mar 2023

Diagnosis confirmed

20 Mar 2023

Initial treatment started

15 Jan 2024

Follow-up consultation

12 Dec 2024

Treatment adjustment

18 Jun 2025

Adalimumab started

04 Aug 2026

Follow-up consultation

21 Aug 2026

Latest clinical review

Use timeline cards with:

Date

Event

Description

==================================================

15. REQUEST CHANGE

==================================================

Add a visible button on the patient record:

"Request Change"

Because doctors have READ-ONLY access.

When clicked, open a modal.

Fields:

Request Type

- Patient Record

- Report

- Treatment Information

- Doctor Notes

- Other

Description

Priority:

Low

Medium

High

Button:

Submit Request

After submission, show a success message:

"Change request submitted to Administration."

The request should be added to the existing mock request data.

Do NOT give the doctor direct editing access.

==================================================

16. PATIENT RECORD ACTIONS

==================================================

At the top-right of the patient record, include:

Request Change

Print / Export

Back to Patients

"Back to Patients" returns to:

/doctor/patients

Print/Export can be a prototype button for now.

Do not implement actual PDF generation.

==================================================

17. BREADCRUMBS

==================================================

Add breadcrumbs:

Doctor Dashboard

>

My Patients

>

Aarav Sharma

This should make navigation clear.

==================================================

18. RESPONSIVE DESIGN

==================================================

Maintain the existing responsive behavior.

Desktop:

Full sidebar + large clinical tables.

Tablet:

Condensed layout.

Mobile:

Scrollable tables/cards and collapsed navigation.

==================================================

19. DATA CONSISTENCY

==================================================

Very important:

Use centralized mock data.

The 10 patients created in this feature must correspond to the patient information already referenced in the Doctor Dashboard.

Do not create duplicate patient objects with different information.

Use Patient IDs as stable identifiers.

Example:

P001 always represents Aarav Sharma.

P002 always represents Ananya Kulkarni.

etc.

The patient detail page should dynamically display the selected patient's information.

==================================================

20. DOCTOR PERMISSIONS

==================================================

The doctor is READ-ONLY.

The doctor CAN:

- View patients

- Search patients

- Filter patients

- View records

- View reports

- View treatment history

- View doctor notes

- View vitals

- View timeline

- Submit change requests

The doctor CANNOT:

- Edit patient records

- Delete patient records

- Modify reports

- Delete reports

- Modify treatment data

- Delete notes

Any required modification must go through:

Doctor → Request Change → Admin

==================================================

21. DO NOT BUILD EXTRA FEATURES

==================================================

Do NOT build:

- Admin functionality

- Patient login

- Patient dashboard

- Collaboration network

- Messaging

- Video calls

- Research management

- Appointment management

- Real backend

- Database

- File uploads

- Real medical integrations

Those will be added later.

==================================================

22. FINAL USER FLOW

The completed flow should be:

Login

↓

Doctor Dashboard

↓

My Patients

↓

Patient List

↓

Select Patient

↓

Patient Clinical Record

↓

Overview

Reports

Treatment

Doctor Notes

Vitals

Timeline

↓

Request Change

↓

Return to My Patients

Keep the existing Doctor Dashboard untouched except for making the "My Patients" navigation functional.

The priority is a polished, realistic clinical patient-record experience with fictional data.

Do not redesign existing components unless necessary for this feature.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d17c217d-4330-4089-9079-a9c024b0a746).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
