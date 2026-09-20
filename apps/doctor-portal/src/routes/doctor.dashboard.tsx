import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, ActivitySquare, CalendarClock, AlertTriangle, ArrowRight } from "lucide-react";
import { DoctorLayout } from "@/components/clinical/DoctorLayout";
import { SeverityBadge, StatusBadge } from "@/components/clinical/badges";
import { patients, patientStats, doctor, changeRequests } from "@/lib/mock-data";

const title = "Doctor Dashboard — name-portal IBD";
const description =
  "Clinician overview of assigned IBD patients, follow-ups due, patients needing attention and recent change requests.";

export const Route = createFileRoute("/doctor/dashboard")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: DoctorDashboard,
});

const stats = [
  { label: "Total Patients", value: patientStats.total, icon: Users },
  { label: "Active Cases", value: patientStats.active, icon: ActivitySquare },
  { label: "Follow-ups Due", value: patientStats.followUps, icon: CalendarClock },
  { label: "Critical Attention", value: patientStats.critical, icon: AlertTriangle },
];

function DoctorDashboard() {
  return (
    <DoctorLayout>
      <div className="mx-auto max-w-7xl space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Good morning, {doctor.name.replace("Dr. ", "Dr ")}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Here is the current state of the patients assigned to your care.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="clinical-panel p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{s.label}</p>
                <s.icon className="size-4 text-muted-foreground" />
              </div>
              <p className="mt-3 font-display text-3xl font-semibold">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="clinical-panel lg:col-span-2">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h2 className="text-sm font-semibold">Patients needing review</h2>
              <Link to="/doctor/patients" className="flex items-center gap-1 text-xs font-medium text-primary">
                My Patients <ArrowRight className="size-3.5" />
              </Link>
            </div>
            <ul className="divide-y divide-border">
              {patients
                .filter((p) => p.followUpDue)
                .slice(0, 5)
                .map((p) => (
                  <li key={p.id} className="flex flex-wrap items-center gap-3 px-5 py-3.5">
                    <div className="min-w-40 flex-1">
                      <p className="text-sm font-medium">{p.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {p.id} · {p.diagnosis}
                      </p>
                    </div>
                    <SeverityBadge severity={p.severity} />
                    <StatusBadge status={p.status} />
                    <Link
                      to="/doctor/patients/$patientId"
                      params={{ patientId: p.id }}
                      className="text-xs font-medium text-primary"
                    >
                      View Record →
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="clinical-panel">
            <div className="border-b border-border px-5 py-4">
              <h2 className="text-sm font-semibold">Recent change requests</h2>
            </div>
            <ul className="divide-y divide-border">
              {changeRequests.slice(0, 4).map((r) => (
                <li key={r.id} className="px-5 py-3.5">
                  <p className="text-sm font-medium">{r.type}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {r.patientName} · {r.priority} priority · {r.status}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DoctorLayout>
  );
}
