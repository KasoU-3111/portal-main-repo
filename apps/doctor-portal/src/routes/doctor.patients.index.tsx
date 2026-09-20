import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Users, ActivitySquare, CalendarClock, AlertTriangle, Search } from "lucide-react";
import { DoctorLayout } from "@/components/clinical/DoctorLayout";
import { SeverityBadge, StatusBadge } from "@/components/clinical/badges";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { patients, patientStats } from "@/lib/mock-data";

const title = "My Patients — name-portal IBD";
const description =
  "Search, filter and review the IBD patients assigned to your care, with severity, status, last visit and next appointment at a glance.";

export const Route = createFileRoute("/doctor/patients/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: MyPatientsPage,
});

const stats = [
  { label: "Total Patients", value: patientStats.total, icon: Users },
  { label: "Active Cases", value: patientStats.active, icon: ActivitySquare },
  { label: "Follow-ups Due", value: patientStats.followUps, icon: CalendarClock },
  { label: "Critical Attention", value: patientStats.critical, icon: AlertTriangle },
];

const severityRank = { Mild: 1, Moderate: 2, Severe: 3 } as const;

function MyPatientsPage() {
  const [query, setQuery] = useState("");
  const [diagnosis, setDiagnosis] = useState("all");
  const [severity, setSeverity] = useState("all");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("name");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = patients.filter((p) => {
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q) ||
        p.diagnosis.toLowerCase().includes(q);
      return (
        matchesQuery &&
        (diagnosis === "all" || p.diagnosis === diagnosis) &&
        (severity === "all" || p.severity === severity) &&
        (status === "all" || p.status === status)
      );
    });

    return [...filtered].sort((a, b) => {
      if (sort === "recent") return b.lastVisitISO.localeCompare(a.lastVisitISO);
      if (sort === "next") return a.nextAppointmentISO.localeCompare(b.nextAppointmentISO);
      if (sort === "severity") return severityRank[b.severity] - severityRank[a.severity];
      return a.name.localeCompare(b.name);
    });
  }, [query, diagnosis, severity, status, sort]);

  return (
    <DoctorLayout>
      <div className="mx-auto max-w-7xl space-y-6">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
          <Link to="/doctor/dashboard" className="hover:text-foreground">
            Doctor Dashboard
          </Link>
          <span className="px-1.5">›</span>
          <span className="text-foreground">My Patients</span>
        </nav>

        <div>
          <h1 className="text-2xl font-semibold">My Patients</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            View and review the patients assigned to your care.
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

        <div className="clinical-panel p-4">
          <div className="grid gap-3 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search patients..."
                className="pl-9"
                aria-label="Search patients"
              />
            </div>
            <Filter label="Diagnosis" value={diagnosis} onChange={setDiagnosis} options={["Crohn's Disease", "Ulcerative Colitis"]} />
            <Filter label="Severity" value={severity} onChange={setSeverity} options={["Mild", "Moderate", "Severe"]} />
            <Filter label="Status" value={status} onChange={setStatus} options={["Stable", "Monitoring", "Attention Required"]} />
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger aria-label="Sort by">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Sort: Name</SelectItem>
                <SelectItem value="recent">Sort: Recent Visit</SelectItem>
                <SelectItem value="next">Sort: Next Appointment</SelectItem>
                <SelectItem value="severity">Sort: Severity</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="clinical-panel overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[960px] text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/60 text-left text-xs uppercase tracking-wide text-muted-foreground">
                  {["Patient ID", "Patient", "Age", "Diagnosis", "Severity", "Last Visit", "Next Appointment", "Status", "Action"].map(
                    (h) => (
                      <th key={h} className="px-4 py-3 font-medium">
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rows.map((p) => (
                  <tr key={p.id} className="transition-colors hover:bg-secondary/40">
                    <td className="px-4 py-3.5 font-mono text-xs text-muted-foreground">{p.id}</td>
                    <td className="px-4 py-3.5">
                      <p className="font-medium">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.gender}</p>
                    </td>
                    <td className="px-4 py-3.5">{p.age}</td>
                    <td className="px-4 py-3.5">{p.diagnosis}</td>
                    <td className="px-4 py-3.5">
                      <SeverityBadge severity={p.severity} />
                    </td>
                    <td className="px-4 py-3.5 text-muted-foreground">{p.lastVisit}</td>
                    <td className="px-4 py-3.5 text-muted-foreground">{p.nextAppointment}</td>
                    <td className="px-4 py-3.5">
                      <StatusBadge status={p.status} />
                    </td>
                    <td className="px-4 py-3.5">
                      <Link
                        to="/doctor/patients/$patientId"
                        params={{ patientId: p.id }}
                        className="whitespace-nowrap text-xs font-medium text-primary hover:underline"
                      >
                        View Record →
                      </Link>
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={9} className="px-4 py-10 text-center text-sm text-muted-foreground">
                      No patients match the current filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DoctorLayout>
  );
}

function Filter({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger aria-label={label}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">{label}: All</SelectItem>
        {options.map((o) => (
          <SelectItem key={o} value={o}>
            {o}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
