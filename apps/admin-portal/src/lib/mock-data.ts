/**
 * Centralized fictional mock data for the [Name] IBD administration prototype.
 * No real patient data. Frontend-only.
 */

export const ADMIN_USER = {
  name: "Administrator",
  role: "System Administrator",
  organization: "Name-IBD-Portal",
  email: "admin@gmail.com",
  initials: "AD",
};

export const DEMO_CREDENTIALS = {
  email: "admin@gmail.com",
  password: "1234",
};

export type Priority = "High" | "Medium" | "Low";
export type ApptStatus = "Confirmed" | "Pending";

export const doctors = [
  { id: "D01", name: "Dr. Arjun Mehta", specialty: "Gastroenterology", patients: 3, status: "Active" },
  { id: "D02", name: "Dr. Priya Shah", specialty: "IBD Specialist", patients: 2, status: "Active" },
  { id: "D03", name: "Dr. Rahul Mehta", specialty: "Colorectal Surgery", patients: 2, status: "Active" },
  { id: "D04", name: "Dr. Neha Iyer", specialty: "Immunology", patients: 1, status: "Active" },
  { id: "D05", name: "Dr. Vikram Nair", specialty: "Radiology", patients: 1, status: "Active" },
  { id: "D06", name: "Dr. Sneha Kulkarni", specialty: "Nutrition & IBD Care", patients: 1, status: "Pending Verification" },
];

export const patients = [
  { id: "P001", name: "Aarav Sharma", condition: "Crohn's Disease", status: "Stable" },
  { id: "P002", name: "Ananya Kulkarni", condition: "Ulcerative Colitis", status: "Monitoring" },
  { id: "P003", name: "Rohan Deshmukh", condition: "Crohn's Disease", status: "Attention Required" },
  { id: "P004", name: "Meera Joshi", condition: "Ulcerative Colitis", status: "Stable" },
  { id: "P005", name: "Kabir Patil", condition: "Indeterminate Colitis", status: "Stable" },
  { id: "P006", name: "Isha Rane", condition: "Crohn's Disease", status: "Monitoring" },
  { id: "P007", name: "Devansh Gupta", condition: "Ulcerative Colitis", status: "Attention Required" },
  { id: "P008", name: "Tara Menon", condition: "Crohn's Disease", status: "Stable" },
  { id: "P009", name: "Nikhil Bose", condition: "Pouchitis", status: "Monitoring" },
  { id: "P010", name: "Riya Chandran", condition: "Ulcerative Colitis", status: "Stable" },
];

export const patientDistribution = [
  { label: "Stable", count: 5, tone: "success" as const },
  { label: "Monitoring", count: 3, tone: "warning" as const },
  { label: "Attention Required", count: 2, tone: "destructive" as const },
];

export const todaysAppointments: {
  time: string;
  patient: string;
  doctor: string;
  type: string;
  status: ApptStatus;
}[] = [
  { time: "10:30 AM", patient: "Aarav Sharma", doctor: "Dr. Arjun Mehta", type: "Follow-up", status: "Confirmed" },
  { time: "11:15 AM", patient: "Ananya Kulkarni", doctor: "Dr. Priya Shah", type: "Treatment Review", status: "Confirmed" },
  { time: "12:00 PM", patient: "Rohan Deshmukh", doctor: "Dr. Rahul Mehta", type: "Clinical Review", status: "Pending" },
  { time: "2:00 PM", patient: "Meera Joshi", doctor: "Dr. Arjun Mehta", type: "Follow-up", status: "Confirmed" },
  { time: "3:30 PM", patient: "Kabir Patil", doctor: "Dr. Priya Shah", type: "Routine Consultation", status: "Confirmed" },
];

export const upcomingAppointments = [
  { time: "22 Aug · 09:30 AM", patient: "Isha Rane", doctor: "Dr. Neha Iyer", type: "Infusion Review", status: "Confirmed" as ApptStatus },
  { time: "22 Aug · 11:00 AM", patient: "Devansh Gupta", doctor: "Dr. Rahul Mehta", type: "Post-op Review", status: "Pending" as ApptStatus },
  { time: "23 Aug · 10:15 AM", patient: "Tara Menon", doctor: "Dr. Arjun Mehta", type: "Follow-up", status: "Confirmed" as ApptStatus },
  { time: "24 Aug · 12:45 PM", patient: "Nikhil Bose", doctor: "Dr. Vikram Nair", type: "Imaging Review", status: "Confirmed" as ApptStatus },
  { time: "25 Aug · 04:00 PM", patient: "Riya Chandran", doctor: "Dr. Priya Shah", type: "Treatment Review", status: "Pending" as ApptStatus },
];

export const pendingRequests: {
  id: string;
  requester: string;
  type: string;
  patient?: string;
  priority: Priority;
  date: string;
  status: string;
}[] = [
  { id: "REQ-1024", requester: "Dr. Arjun Mehta", type: "Patient Record Correction", patient: "P003", priority: "Medium", date: "21 Aug 2026", status: "Pending" },
  { id: "REQ-1025", requester: "Dr. Priya Shah", type: "Research Content Update", priority: "Low", date: "21 Aug 2026", status: "Pending" },
  { id: "REQ-1026", requester: "Dr. Rahul Mehta", type: "Appointment Correction", patient: "P007", priority: "High", date: "20 Aug 2026", status: "Pending" },
  { id: "REQ-1027", requester: "Dr. Neha Iyer", type: "Report Re-upload", patient: "P006", priority: "Medium", date: "20 Aug 2026", status: "Pending" },
  { id: "REQ-1028", requester: "Dr. Sneha Kulkarni", type: "Account Verification", priority: "High", date: "19 Aug 2026", status: "Pending" },
];

export const recentActivity = [
  { actor: "Administrator", action: "updated patient record", target: "P003", time: "10 minutes ago" },
  { actor: "Dr. Arjun Mehta", action: "submitted a change request", target: "REQ-1024", time: "32 minutes ago" },
  { actor: "Administrator", action: "published research article", target: "Biologic Response Patterns in IBD", time: "1 hour ago" },
  { actor: "Dr. Priya Shah", action: "scheduled an appointment for", target: "P007", time: "2 hours ago" },
  { actor: "Administrator", action: "added a new doctor account", target: "Dr. Sneha Kulkarni", time: "Yesterday" },
  { actor: "Dr. Rahul Mehta", action: "uploaded a clinical report for", target: "P009", time: "Yesterday" },
];

export const auditLogs = [
  { actor: "Administrator", action: "Updated Patient P003", at: "21 Aug 2026 · 10:32 AM" },
  { actor: "Administrator", action: "Published Research Article", at: "21 Aug 2026 · 09:48 AM" },
  { actor: "Dr. Arjun Mehta", action: "Submitted Change Request", at: "21 Aug 2026 · 09:20 AM" },
  { actor: "Administrator", action: "Approved Doctor Verification", at: "20 Aug 2026 · 05:12 PM" },
  { actor: "Dr. Priya Shah", action: "Edited Case Study CS-014", at: "20 Aug 2026 · 03:40 PM" },
  { actor: "Administrator", action: "Updated Platform Settings", at: "20 Aug 2026 · 01:05 PM" },
  { actor: "Dr. Rahul Mehta", action: "Uploaded Report R-2291", at: "20 Aug 2026 · 11:26 AM" },
  { actor: "Administrator", action: "Archived Forum Thread F-118", at: "19 Aug 2026 · 04:55 PM" },
  { actor: "Dr. Neha Iyer", action: "Requested Report Re-upload", at: "19 Aug 2026 · 02:31 PM" },
  { actor: "Administrator", action: "Created Conference Record C-003", at: "19 Aug 2026 · 10:10 AM" },
  { actor: "Administrator", action: "Reviewed Help Desk Ticket HD-441", at: "18 Aug 2026 · 06:02 PM" },
];

export const contentOverview = [
  { label: "Research Articles", count: 8 },
  { label: "Case Studies", count: 5 },
  { label: "Blogs", count: 6 },
  { label: "Forums", count: 12 },
  { label: "Medical Events", count: 4 },
  { label: "Conferences", count: 3 },
];

export const upcomingEvents = [
  { name: "IBD Clinical Research Symposium", date: "28 August 2026", type: "Symposium", status: "Scheduled" },
  { name: "International IBD Conference", date: "12 September 2026", type: "Conference", status: "Registration Open" },
  { name: "Advanced Crohn's Disease Workshop", date: "20 September 2026", type: "Workshop", status: "Draft" },
];

export const notifications = [
  { title: "4 change requests require review", meta: "Requests & Communication · 12m ago", tone: "warning" as const },
  { title: "New research article submitted", meta: "Content Management · 1h ago", tone: "info" as const },
  { title: "Doctor account pending verification", meta: "User Management · 3h ago", tone: "destructive" as const },
  { title: "Upcoming IBD conference scheduled", meta: "Medical Events · Yesterday", tone: "success" as const },
];

export const dashboardStats = [
  { key: "doctors", label: "Total Doctors", value: 6, note: "1 pending verification", icon: "stethoscope" },
  { key: "patients", label: "Total Patients", value: 10, note: "+2 registered this week", icon: "users" },
  { key: "cases", label: "Active Cases", value: 8, note: "2 require attention", icon: "activity" },
  { key: "appointments", label: "Today's Appointments", value: 5, note: "4 confirmed · 1 pending", icon: "calendar" },
  { key: "requests", label: "Pending Requests", value: 4, note: "1 high priority", icon: "inbox" },
  { key: "research", label: "Published Research", value: 8, note: "1 awaiting review", icon: "flask" },
] as const;
