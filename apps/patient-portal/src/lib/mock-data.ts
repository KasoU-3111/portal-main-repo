// Centralized fictional demonstration data for the name-portal IBD prototype.
// All names, IDs and clinical values are invented for demo purposes only.

export const DEMO_CREDENTIALS = {
  email: "patient@gmail.com",
  password: "1234",
};

export const patient = {
  name: "Aarav Sharma",
  firstName: "Aarav",
  id: "P001",
  age: 32,
  gender: "Male",
  diagnosis: "Crohn's Disease",
  status: "Moderate",
  statusDetail: "Monitoring",
  location: "Mumbai, India",
  initials: "AS",
};

export const doctor = {
  name: "Dr. Arjun Mehta",
  specialization: "Gastroenterologist",
  subSpecialization: "IBD Specialist",
};

export const upcomingAppointment = {
  date: "21 August 2026",
  time: "10:30 AM",
  type: "Follow-up Consultation",
  status: "Confirmed",
};

export const currentTreatment = {
  medication: "Adalimumab",
  status: "Active",
  started: "18 June 2025",
  response: "Partial improvement",
};

export const recentReports = [
  { name: "CRP Blood Test", date: "21 Aug 2026", status: "Available" },
  { name: "Fecal Calprotectin", date: "18 Aug 2026", status: "Reviewed" },
  { name: "CBC", date: "15 Aug 2026", status: "Reviewed" },
  { name: "Endoscopy Report", date: "10 Aug 2026", status: "Reviewed" },
];

export const crpTrend = [
  { month: "Jan", value: 14.2 },
  { month: "Feb", value: 12.6 },
  { month: "Mar", value: 10.8 },
  { month: "Apr", value: 9.7 },
  { month: "May", value: 8.9 },
  { month: "Jun", value: 8.4 },
];

export const doctorNotes = [
  {
    date: "21 August 2026",
    body: "Patient reports improved abdominal symptoms over the previous two weeks. Continue current treatment and monitor inflammatory markers.",
    author: doctor.name,
  },
  {
    date: "04 August 2026",
    body: "Follow-up consultation. Discussed treatment response and dietary considerations.",
    author: doctor.name,
  },
];

export const notifications = [
  { title: "Your CRP report is now available.", time: "10 min ago" },
  {
    title: "Appointment with Dr. Arjun Mehta is scheduled for today at 10:30 AM.",
    time: "1 hour ago",
  },
  { title: "Your treatment plan has been reviewed.", time: "Yesterday" },
];
