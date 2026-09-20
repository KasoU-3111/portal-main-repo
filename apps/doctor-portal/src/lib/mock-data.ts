// Centralized fictional demonstration data for the name-portal IBD prototype.
// Patient IDs are stable identifiers (P001 = Aarav Sharma, etc.).

export type Severity = "Mild" | "Moderate" | "Severe";
export type PatientStatus = "Stable" | "Monitoring" | "Attention Required";
export type Diagnosis = "Crohn's Disease" | "Ulcerative Colitis";

export interface ReportEntry {
  id: string;
  type: string;
  date: string;
  status: "Available" | "Reviewed" | "Pending";
  doctor: string;
  summary: string;
  findings: string[];
}

export interface TreatmentEntry {
  medication: string;
  period: string;
  status: "Active" | "Completed" | "Discontinued";
  note: string;
}

export interface NoteEntry {
  date: string;
  note: string;
  doctor: string;
}

export interface TimelineEntry {
  date: string;
  event: string;
  description: string;
}

export interface VitalPoint {
  month: string;
  weight: number;
  systolic: number;
  diastolic: number;
  heartRate: number;
  crp: number;
  calprotectin: number;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: "Male" | "Female";
  diagnosis: Diagnosis;
  diseaseType: string;
  diseaseLocation: string;
  severity: Severity;
  status: PatientStatus;
  assignedDoctor: string;
  diagnosisDate: string;
  lastVisit: string;
  lastVisitISO: string;
  nextAppointment: string;
  nextAppointmentISO: string;
  followUpDue: boolean;
  clinicalValues: { crp: string; esr: string; calprotectin: string; weight: string };
  currentTreatment: { medication: string; status: string; start: string; response: string };
  treatmentHistory: TreatmentEntry[];
  reports: ReportEntry[];
  notes: NoteEntry[];
  vitals: VitalPoint[];
  timeline: TimelineEntry[];
}

export const doctor = {
  name: "Dr. Arjun Mehta",
  specialty: "Gastroenterology — IBD Unit",
  id: "DOC-1042",
  hospital: "name-portal Institute of Digestive Health",
  initials: "AM",
};

const vitals = (crpSeries: number[], baseWeight: number, hr: number): VitalPoint[] =>
  ["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month, i) => ({
    month,
    weight: +(baseWeight + i * 0.4).toFixed(1),
    systolic: 118 + ((i * 3) % 7),
    diastolic: 76 + ((i * 2) % 5),
    heartRate: hr + ((i * 2) % 6),
    crp: crpSeries[i]!,
    calprotectin: Math.round(crpSeries[i]! * 34),
  }));

const baseReports = (doctorName: string, dates: string[]): ReportEntry[] => [
  {
    id: "R1",
    type: "CRP Blood Test",
    date: dates[0]!,
    status: "Available",
    doctor: doctorName,
    summary: "Serum C-reactive protein measured as part of routine inflammatory monitoring.",
    findings: ["CRP mildly elevated above reference range", "No acute infection markers", "Repeat in 6 weeks"],
  },
  {
    id: "R2",
    type: "Fecal Calprotectin",
    date: dates[1]!,
    status: "Reviewed",
    doctor: doctorName,
    summary: "Stool calprotectin assay indicating intestinal inflammatory activity.",
    findings: ["Moderate mucosal inflammation suggested", "Correlates with reported symptoms"],
  },
  {
    id: "R3",
    type: "Endoscopy Report",
    date: dates[2]!,
    status: "Reviewed",
    doctor: doctorName,
    summary: "Ileocolonoscopy performed under sedation; biopsies obtained.",
    findings: ["Patchy mucosal erythema", "No stricturing disease", "Histology consistent with known diagnosis"],
  },
  {
    id: "R4",
    type: "CBC Panel",
    date: dates[3]!,
    status: "Reviewed",
    doctor: doctorName,
    summary: "Complete blood count with differential.",
    findings: ["Mild anaemia", "Normal platelet count"],
  },
  {
    id: "R5",
    type: "ESR",
    date: dates[4]!,
    status: "Available",
    doctor: doctorName,
    summary: "Erythrocyte sedimentation rate.",
    findings: ["Slightly elevated, stable versus prior value"],
  },
  {
    id: "R6",
    type: "MRI Enterography",
    date: dates[5]!,
    status: "Reviewed",
    doctor: doctorName,
    summary: "Cross-sectional imaging of the small bowel.",
    findings: ["Segmental wall thickening", "No abscess or fistula"],
  },
];

interface Seed {
  id: string;
  name: string;
  age: number;
  gender: "Male" | "Female";
  diagnosis: Diagnosis;
  severity: Severity;
  status: PatientStatus;
  location: string;
  diagnosisDate: string;
  lastVisit: string;
  lastVisitISO: string;
  next: string;
  nextISO: string;
  followUpDue: boolean;
  crp: number[];
  weight: number;
  hr: number;
  medication: string;
  start: string;
  response: string;
}

const seeds: Seed[] = [
  { id: "P001", name: "Aarav Sharma", age: 32, gender: "Male", diagnosis: "Crohn's Disease", severity: "Moderate", status: "Monitoring", location: "Ileocolonic", diagnosisDate: "12 March 2023", lastVisit: "21 Aug 2026", lastVisitISO: "2026-08-21", next: "18 Sep 2026", nextISO: "2026-09-18", followUpDue: true, crp: [14.2, 12.6, 10.8, 9.7, 8.9, 8.4], weight: 68.4, hr: 74, medication: "Adalimumab", start: "18 June 2025", response: "Partial improvement" },
  { id: "P002", name: "Ananya Kulkarni", age: 27, gender: "Female", diagnosis: "Ulcerative Colitis", severity: "Mild", status: "Stable", location: "Left-sided colitis", diagnosisDate: "04 July 2024", lastVisit: "12 Aug 2026", lastVisitISO: "2026-08-12", next: "02 Oct 2026", nextISO: "2026-10-02", followUpDue: false, crp: [6.1, 5.4, 4.8, 4.2, 3.9, 3.5], weight: 54.2, hr: 71, medication: "Mesalamine", start: "10 July 2024", response: "Sustained remission" },
  { id: "P003", name: "Rohan Deshmukh", age: 41, gender: "Male", diagnosis: "Crohn's Disease", severity: "Severe", status: "Attention Required", location: "Ileal", diagnosisDate: "22 January 2021", lastVisit: "19 Aug 2026", lastVisitISO: "2026-08-19", next: "29 Aug 2026", nextISO: "2026-08-29", followUpDue: true, crp: [28.4, 26.1, 24.9, 23.5, 22.8, 21.6], weight: 61.8, hr: 84, medication: "Infliximab", start: "05 February 2025", response: "Limited response" },
  { id: "P004", name: "Meera Joshi", age: 35, gender: "Female", diagnosis: "Ulcerative Colitis", severity: "Moderate", status: "Monitoring", location: "Pancolitis", diagnosisDate: "16 May 2022", lastVisit: "08 Aug 2026", lastVisitISO: "2026-08-08", next: "12 Sep 2026", nextISO: "2026-09-12", followUpDue: true, crp: [11.5, 10.9, 10.2, 9.4, 9.0, 8.7], weight: 58.9, hr: 76, medication: "Azathioprine", start: "20 March 2025", response: "Partial improvement" },
  { id: "P005", name: "Kabir Patil", age: 29, gender: "Male", diagnosis: "Crohn's Disease", severity: "Mild", status: "Stable", location: "Colonic", diagnosisDate: "09 November 2023", lastVisit: "30 Jul 2026", lastVisitISO: "2026-07-30", next: "24 Oct 2026", nextISO: "2026-10-24", followUpDue: false, crp: [5.2, 4.6, 4.1, 3.8, 3.4, 3.1], weight: 71.5, hr: 69, medication: "Budesonide", start: "02 January 2026", response: "Good response" },
  { id: "P006", name: "Sneha Shah", age: 46, gender: "Female", diagnosis: "Ulcerative Colitis", severity: "Moderate", status: "Monitoring", location: "Proctosigmoiditis", diagnosisDate: "27 February 2020", lastVisit: "15 Aug 2026", lastVisitISO: "2026-08-15", next: "20 Sep 2026", nextISO: "2026-09-20", followUpDue: true, crp: [12.8, 12.1, 11.4, 10.6, 10.1, 9.5], weight: 63.1, hr: 78, medication: "Vedolizumab", start: "14 April 2025", response: "Partial improvement" },
  { id: "P007", name: "Aditya Rao", age: 38, gender: "Male", diagnosis: "Crohn's Disease", severity: "Moderate", status: "Stable", location: "Ileocolonic", diagnosisDate: "18 August 2022", lastVisit: "05 Aug 2026", lastVisitISO: "2026-08-05", next: "05 Nov 2026", nextISO: "2026-11-05", followUpDue: false, crp: [9.8, 9.1, 8.6, 8.0, 7.5, 7.1], weight: 74.2, hr: 72, medication: "Adalimumab", start: "11 September 2025", response: "Good response" },
  { id: "P008", name: "Priya Nair", age: 31, gender: "Female", diagnosis: "Ulcerative Colitis", severity: "Mild", status: "Stable", location: "Left-sided colitis", diagnosisDate: "03 December 2024", lastVisit: "28 Jul 2026", lastVisitISO: "2026-07-28", next: "14 Oct 2026", nextISO: "2026-10-14", followUpDue: false, crp: [4.9, 4.4, 4.0, 3.6, 3.3, 3.0], weight: 52.7, hr: 70, medication: "Mesalamine", start: "10 December 2024", response: "Sustained remission" },
  { id: "P009", name: "Vikram Singh", age: 52, gender: "Male", diagnosis: "Crohn's Disease", severity: "Severe", status: "Attention Required", location: "Ileal with perianal disease", diagnosisDate: "30 June 2018", lastVisit: "20 Aug 2026", lastVisitISO: "2026-08-20", next: "27 Aug 2026", nextISO: "2026-08-27", followUpDue: true, crp: [31.2, 29.8, 28.4, 27.1, 25.9, 24.7], weight: 66.3, hr: 86, medication: "Ustekinumab", start: "08 January 2026", response: "Under assessment" },
  { id: "P010", name: "Neha Kapoor", age: 24, gender: "Female", diagnosis: "Ulcerative Colitis", severity: "Moderate", status: "Monitoring", location: "Pancolitis", diagnosisDate: "21 September 2025", lastVisit: "17 Aug 2026", lastVisitISO: "2026-08-17", next: "16 Sep 2026", nextISO: "2026-09-16", followUpDue: true, crp: [13.4, 12.2, 11.6, 10.9, 10.3, 9.8], weight: 50.6, hr: 75, medication: "Prednisolone taper", start: "02 July 2026", response: "Early response" },
];

export const patients: Patient[] = seeds.map((s) => ({
  id: s.id,
  name: s.name,
  age: s.age,
  gender: s.gender,
  diagnosis: s.diagnosis,
  diseaseType: s.diagnosis === "Crohn's Disease" ? "Inflammatory (luminal)" : "Inflammatory (mucosal)",
  diseaseLocation: s.location,
  severity: s.severity,
  status: s.status,
  assignedDoctor: doctor.name,
  diagnosisDate: s.diagnosisDate,
  lastVisit: s.lastVisit,
  lastVisitISO: s.lastVisitISO,
  nextAppointment: s.next,
  nextAppointmentISO: s.nextISO,
  followUpDue: s.followUpDue,
  clinicalValues: {
    crp: `${s.crp[5]!} mg/L`,
    esr: `${Math.round(s.crp[5]! * 2.6)} mm/hr`,
    calprotectin: `${Math.round(s.crp[5]! * 34)} µg/g`,
    weight: `${s.weight} kg`,
  },
  currentTreatment: { medication: s.medication, status: "Active", start: s.start, response: s.response },
  treatmentHistory: [
    { medication: "Mesalamine", period: "Jan 2024 – Nov 2024", status: "Discontinued", note: "Insufficient symptom control" },
    { medication: "Prednisolone", period: "Dec 2024 – Feb 2025", status: "Completed", note: "Short induction course" },
    { medication: s.medication, period: `${s.start.split(" ").slice(1).join(" ")} – Present`, status: "Active", note: s.response },
  ],
  reports: baseReports(doctor.name, [s.lastVisit, "18 Aug 2026", "10 Aug 2026", "02 Aug 2026", "24 Jul 2026", "12 Jul 2026"]),
  notes: [
    {
      date: s.lastVisit,
      note: "Patient reports improved abdominal symptoms over the previous two weeks. Continue current treatment and monitor inflammatory markers.",
      doctor: doctor.name,
    },
    {
      date: "04 Aug 2026",
      note: "Follow-up consultation. Discussed treatment response and dietary considerations.",
      doctor: doctor.name,
    },
    {
      date: "16 Jun 2026",
      note: "Reviewed laboratory panel. Inflammatory markers trending downward; no change to therapy at this time.",
      doctor: doctor.name,
    },
  ],
  vitals: vitals(s.crp, s.weight, s.hr),
  timeline: [
    { date: s.diagnosisDate, event: "Diagnosis confirmed", description: `${s.diagnosis} confirmed following endoscopy and histopathology.` },
    { date: "20 Mar 2023", event: "Initial treatment started", description: "First-line therapy commenced with baseline monitoring schedule." },
    { date: "15 Jan 2024", event: "Follow-up consultation", description: "Symptom review and laboratory monitoring." },
    { date: "12 Dec 2024", event: "Treatment adjustment", description: "Therapy escalated after partial response." },
    { date: s.start, event: `${s.medication} started`, description: "Biologic / maintenance therapy initiated with response tracking." },
    { date: "04 Aug 2026", event: "Follow-up consultation", description: "Treatment response and dietary considerations discussed." },
    { date: s.lastVisit, event: "Latest clinical review", description: "Inflammatory markers reviewed; current plan continued." },
  ],
}));

export const getPatient = (id: string) => patients.find((p) => p.id.toLowerCase() === id.toLowerCase());

export const patientStats = {
  total: patients.length,
  active: patients.filter((p) => p.status !== "Stable").length,
  followUps: patients.filter((p) => p.followUpDue).length,
  critical: patients.filter((p) => p.status === "Attention Required").length,
};

export interface ChangeRequest {
  id: string;
  patientId: string;
  patientName: string;
  type: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "In Review" | "Resolved";
  submitted: string;
}

export const changeRequests: ChangeRequest[] = [
  { id: "REQ-2041", patientId: "P003", patientName: "Rohan Deshmukh", type: "Report", description: "Endoscopy report date appears incorrect.", priority: "High", status: "In Review", submitted: "19 Aug 2026" },
  { id: "REQ-2038", patientId: "P006", patientName: "Sneha Shah", type: "Treatment Information", description: "Vedolizumab dosing interval needs verification.", priority: "Medium", status: "Pending", submitted: "15 Aug 2026" },
  { id: "REQ-2033", patientId: "P009", patientName: "Vikram Singh", type: "Patient Record", description: "Contact number update requested by patient.", priority: "Low", status: "Resolved", submitted: "09 Aug 2026" },
];

export const addChangeRequest = (req: Omit<ChangeRequest, "id" | "status" | "submitted">) => {
  const entry: ChangeRequest = {
    ...req,
    id: `REQ-${2042 + changeRequests.length}`,
    status: "Pending",
    submitted: "21 Aug 2026",
  };
  changeRequests.unshift(entry);
  return entry;
};
