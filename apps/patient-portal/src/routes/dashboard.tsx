import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  FileText,
  LifeBuoy,
  Pill,
  Stethoscope,
} from "lucide-react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { Button } from "@/components/ui/button";
import { SidebarNav } from "@/components/portal/sidebar-nav";
import { PortalHeader } from "@/components/portal/portal-header";
import { isSignedIn } from "@/lib/auth";
import {
  crpTrend,
  currentTreatment,
  doctor,
  doctorNotes,
  patient,
  recentReports,
  upcomingAppointment,
} from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Health Overview — name-portal IBD Patient Portal" },
      {
        name: "description",
        content:
          "Patient dashboard with appointments, treatment status, lab reports, CRP trends and doctor notes. Fictional demonstration data.",
      },
      { property: "og:title", content: "name-portal IBD — Patient Health Overview" },
      {
        property: "og:description",
        content: "Appointments, treatment, reports and clinician notes in one calm view.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!isSignedIn()) navigate({ to: "/login" });
    else setChecked(true);
  }, [navigate]);

  if (!checked) return null;

  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 hidden w-[288px] border-r border-sidebar-border lg:block">
        <SidebarNav />
      </aside>

      <div className="lg:pl-[288px]">
        <PortalHeader />
        <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
          <PageHeading />
          <OverviewCards />

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <div className="space-y-5 lg:col-span-2">
              <AppointmentCard />
              <TrendsCard />
              <ReportsCard />
            </div>
            <div className="space-y-5">
              <TreatmentCard />
              <NotesCard />
              <SupportCard />
            </div>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
            Demonstration prototype. All clinical values, reports and notes are fictional. Not
            intended for real patient data.
          </p>
        </main>
      </div>
    </div>
  );
}

function PageHeading() {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:items-center sm:justify-between">
      <div className="min-w-0">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Good morning, {patient.firstName}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">Here's your health overview.</p>
      </div>
      <span className="shrink-0 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
        Patient ID: {patient.id}
      </span>
    </div>
  );
}

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <section
      className={cn("rounded-2xl border border-border bg-card p-5 shadow-card", className)}
    >
      {children}
    </section>
  );
}

function SectionTitle({ title, action }: { title: string; action?: string }) {
  return (
    <div className="mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
      <h2 className="min-w-0 text-base font-semibold text-foreground">{title}</h2>
      {action && (
        <Button variant="ghost" size="sm" className="shrink-0 text-primary hover:text-primary">
          {action} <ArrowRight className="size-3.5" />
        </Button>
      )}
    </div>
  );
}

function OverviewCards() {
  const cards = [
    {
      label: "Current Condition",
      value: patient.diagnosis,
      sub: "Diagnosed condition",
      icon: Stethoscope,
      tone: "text-primary bg-primary-soft",
    },
    {
      label: "Disease Status",
      value: patient.status,
      sub: patient.statusDetail,
      icon: Activity,
      tone: "text-warning-foreground bg-warning/20",
    },
    {
      label: "Next Appointment",
      value: "Today",
      sub: upcomingAppointment.time,
      icon: CalendarClock,
      tone: "text-info bg-info/12",
    },
    {
      label: "Treatment Status",
      value: currentTreatment.status,
      sub: currentTreatment.medication,
      icon: Pill,
      tone: "text-success bg-success/12",
    },
  ];

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map(({ label, value, sub, icon: Icon, tone }) => (
        <Card key={label}>
          <div className="flex items-start justify-between gap-3">
            <p className="min-w-0 truncate text-sm text-muted-foreground">{label}</p>
            <span className={cn("grid size-9 shrink-0 place-items-center rounded-xl", tone)}>
              <Icon className="size-4" />
            </span>
          </div>
          <p className="mt-3 text-lg font-semibold text-foreground">{value}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
        </Card>
      ))}
    </div>
  );
}

function StatusPill({ label, tone }: { label: string; tone: "success" | "info" | "muted" }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",
        tone === "success" && "bg-success/12 text-success",
        tone === "info" && "bg-info/12 text-info",
        tone === "muted" && "bg-muted text-muted-foreground",
      )}
    >
      {label}
    </span>
  );
}

function AppointmentCard() {
  return (
    <Card className="border-primary/25">
      <SectionTitle title="Upcoming Appointment" />
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
            <Stethoscope className="size-5" />
          </span>
          <div className="min-w-0">
            <p className="truncate font-semibold text-foreground">{doctor.name}</p>
            <p className="truncate text-sm text-muted-foreground">
              {doctor.specialization} · {doctor.subSpecialization}
            </p>
          </div>
        </div>
        <StatusPill label={upcomingAppointment.status} tone="success" />
      </div>

      <dl className="mt-5 grid gap-4 border-t border-border pt-5 sm:grid-cols-3">
        {[
          ["Date", upcomingAppointment.date],
          ["Time", upcomingAppointment.time],
          ["Type", upcomingAppointment.type],
        ].map(([k, v]) => (
          <div key={k} className="min-w-0">
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">{k}</dt>
            <dd className="mt-1 text-sm font-medium text-foreground">{v}</dd>
          </div>
        ))}
      </dl>

      <Button className="mt-5 w-full sm:w-auto">View Appointment</Button>
    </Card>
  );
}

function TreatmentCard() {
  return (
    <Card>
      <SectionTitle title="Current Treatment" />
      <div className="flex items-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-success/12 text-success">
          <Pill className="size-5" />
        </span>
        <div className="min-w-0">
          <p className="truncate font-semibold text-foreground">{currentTreatment.medication}</p>
          <p className="text-xs text-muted-foreground">Biologic therapy</p>
        </div>
      </div>
      <dl className="mt-4 space-y-3 border-t border-border pt-4 text-sm">
        <div className="flex items-center justify-between gap-3">
          <dt className="text-muted-foreground">Status</dt>
          <dd>
            <StatusPill label={currentTreatment.status} tone="success" />
          </dd>
        </div>
        <div className="flex items-center justify-between gap-3">
          <dt className="text-muted-foreground">Started</dt>
          <dd className="font-medium text-foreground">{currentTreatment.started}</dd>
        </div>
        <div className="flex items-center justify-between gap-3">
          <dt className="text-muted-foreground">Response</dt>
          <dd className="text-right font-medium text-foreground">{currentTreatment.response}</dd>
        </div>
      </dl>
      <Button variant="ghost" size="sm" className="mt-4 px-0 text-primary hover:text-primary">
        View Treatment Plan <ArrowRight className="size-3.5" />
      </Button>
    </Card>
  );
}

function ReportsCard() {
  return (
    <Card>
      <SectionTitle title="Recent Reports" action="View All Reports" />
      <ul className="divide-y divide-border">
        {recentReports.map((r) => (
          <li
            key={r.name}
            className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 py-3"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-secondary text-muted-foreground">
              <FileText className="size-4" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.date}</p>
            </div>
            <StatusPill label={r.status} tone={r.status === "Available" ? "info" : "muted"} />
          </li>
        ))}
      </ul>
    </Card>
  );
}

function TrendsCard() {
  return (
    <Card>
      <SectionTitle title="Health Trends" action="View Vitals" />
      <div className="flex items-baseline gap-2">
        <p className="text-sm font-medium text-foreground">CRP</p>
        <p className="text-xs text-muted-foreground">mg/L · last 6 months</p>
      </div>
      <div className="mt-4 h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={crpTrend} margin={{ top: 8, right: 8, bottom: 0, left: -18 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              width={44}
              domain={[0, 16]}
              tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid var(--border)",
                background: "var(--card)",
                fontSize: 12,
                color: "var(--foreground)",
              }}
              formatter={(v: number | string) => [`${v} mg/L`, "CRP"]}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="var(--primary)"
              strokeWidth={2.5}
              dot={{ r: 3, fill: "var(--primary)" }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Values shown are fictional demonstration data.
      </p>
    </Card>
  );
}

function NotesCard() {
  return (
    <Card>
      <SectionTitle title="Recent Doctor Notes" action="View All Notes" />
      <ul className="space-y-4">
        {doctorNotes.map((n) => (
          <li key={n.date} className="rounded-xl border border-border bg-secondary/50 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-medium text-muted-foreground">{n.date}</p>
              <StatusPill label="Read only" tone="muted" />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground">"{n.body}"</p>
            <p className="mt-3 text-xs font-medium text-primary">{n.author}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function SupportCard() {
  return (
    <Card className="bg-primary-soft/60">
      <div className="flex items-center gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-card text-primary">
          <LifeBuoy className="size-5" />
        </span>
        <h2 className="text-base font-semibold text-foreground">Need Help?</h2>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Have a question about your appointment, reports or treatment?
      </p>
      <Button variant="outline" className="mt-4 w-full bg-card">
        <CheckCircle2 className="size-4" /> Contact Support
      </Button>
    </Card>
  );
}
