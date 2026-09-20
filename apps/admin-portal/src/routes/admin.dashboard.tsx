import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  CalendarDays,
  ClipboardList,
  FlaskConical,
  Inbox,
  ScrollText,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  auditLogs,
  contentOverview,
  dashboardStats,
  patientDistribution,
  pendingRequests,
  recentActivity,
  todaysAppointments,
  upcomingEvents,
} from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({
    meta: [
      { title: "Administration Dashboard — name IBD" },
      {
        name: "description",
        content:
          "Operational overview of the name IBD clinical platform: clinicians, patients, cases, appointments, requests and content.",
      },
      { property: "og:title", content: "Administration Dashboard — name IBD" },
      {
        property: "og:description",
        content: "Overview of the name IBD clinical platform administration prototype.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DashboardPage,
});

const statIcons: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  users: Users,
  activity: Activity,
  calendar: CalendarDays,
  inbox: Inbox,
  flask: FlaskConical,
};

const priorityTone: Record<string, string> = {
  High: "border-destructive/30 bg-destructive/10 text-destructive",
  Medium: "border-warning/40 bg-warning/15 text-warning-foreground",
  Low: "border-border bg-muted text-muted-foreground",
};

const toneBar: Record<string, string> = {
  success: "bg-success",
  warning: "bg-warning",
  destructive: "bg-destructive",
};

function Panel({
  title,
  description,
  action,
  children,
  className,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn("rounded-xl border border-border bg-card shadow-card", className)}
    >
      <div className="flex items-start justify-between gap-3 border-b border-border px-5 py-4">
        <div>
          <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
          {description && <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

function PlaceholderLink({ children }: { children: React.ReactNode }) {
  return (
    <Link
      to="/admin/$"
      params={{ _splat: "change-requests" }}
      className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
    >
      {children}
      <ArrowRight className="size-3.5" />
    </Link>
  );
}

function DashboardPage() {
  const totalPatients = patientDistribution.reduce((sum, d) => sum + d.count, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Administration Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Overview of the name-portal clinical platform.
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          System status: <span className="font-medium text-success">Operational</span> · Last synced
          21 Aug 2026 · 10:45 AM
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {dashboardStats.map((stat) => {
          const Icon = statIcons[stat.icon] ?? Activity;
          return (
            <div
              key={stat.key}
              className="rounded-xl border border-border bg-card p-4 shadow-card"
            >
              <div className="flex items-start justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  {stat.label}
                </p>
                <span className="flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="size-4" />
                </span>
              </div>
              <p className="stat-figure mt-3 text-3xl font-semibold">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.note}</p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Panel
          title="Pending Requests"
          description="Change requests awaiting administrative review."
          action={<PlaceholderLink>View Requests</PlaceholderLink>}
          className="xl:col-span-2"
        >
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Request ID</TableHead>
                  <TableHead>Requester</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingRequests.map((req) => (
                  <TableRow key={req.id}>
                    <TableCell className="font-mono text-xs font-medium">{req.id}</TableCell>
                    <TableCell className="whitespace-nowrap">{req.requester}</TableCell>
                    <TableCell className="text-muted-foreground">{req.type}</TableCell>
                    <TableCell className="font-mono text-xs">{req.patient ?? "—"}</TableCell>
                    <TableCell>
                      <span
                        className={cn(
                          "inline-block rounded border px-2 py-0.5 text-[11px] font-medium",
                          priorityTone[req.priority],
                        )}
                      >
                        {req.priority}
                      </span>
                    </TableCell>
                    <TableCell className="whitespace-nowrap text-muted-foreground">
                      {req.date}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-[11px]">
                        {req.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Panel>

        <Panel title="Recent Activity" description="Latest actions across the platform.">
          <ul className="divide-y divide-border">
            {recentActivity.map((a, i) => (
              <li key={i} className="flex gap-3 px-5 py-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <div className="min-w-0">
                  <p className="text-sm leading-snug">
                    <span className="font-medium">{a.actor}</span>{" "}
                    <span className="text-muted-foreground">{a.action}</span>{" "}
                    <span className="font-medium">{a.target}</span>
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Panel
          title="Today's Appointments"
          description="Scheduled consultations for 21 August 2026."
          className="xl:col-span-2"
        >
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Clinician</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {todaysAppointments.map((appt) => (
                  <TableRow key={appt.time}>
                    <TableCell className="whitespace-nowrap font-medium">{appt.time}</TableCell>
                    <TableCell>{appt.patient}</TableCell>
                    <TableCell className="whitespace-nowrap text-muted-foreground">
                      {appt.doctor}
                    </TableCell>
                    <TableCell className="text-muted-foreground">{appt.type}</TableCell>
                    <TableCell>
                      <span
                        className={cn(
                          "inline-block rounded border px-2 py-0.5 text-[11px] font-medium",
                          appt.status === "Confirmed"
                            ? "border-success/30 bg-success/10 text-success"
                            : "border-warning/40 bg-warning/15 text-warning-foreground",
                        )}
                      >
                        {appt.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Panel>

        <Panel title="Patient Overview" description="Clinical status distribution.">
          <div className="px-5 py-4">
            <div className="flex items-baseline justify-between">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Total Patients
              </p>
              <p className="stat-figure text-2xl font-semibold">{totalPatients}</p>
            </div>
            <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-muted">
              {patientDistribution.map((d) => (
                <span
                  key={d.label}
                  className={toneBar[d.tone]}
                  style={{ width: `${(d.count / totalPatients) * 100}%` }}
                />
              ))}
            </div>
            <ul className="mt-5 space-y-3">
              {patientDistribution.map((d) => (
                <li key={d.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <span className={cn("size-2 rounded-full", toneBar[d.tone])} />
                      {d.label}
                    </span>
                    <span className="stat-figure font-medium">{d.count}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                    <span
                      className={cn("block h-full rounded-full", toneBar[d.tone])}
                      style={{ width: `${(d.count / totalPatients) * 100}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Panel>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Panel
          title="Content Overview"
          description="Published clinical and community content."
          action={<PlaceholderLink>Manage Content</PlaceholderLink>}
        >
          <ul className="grid grid-cols-2 divide-x divide-y divide-border border-b border-border">
            {contentOverview.map((c) => (
              <li key={c.label} className="px-5 py-4">
                <p className="stat-figure text-2xl font-semibold">{c.count}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{c.label}</p>
              </li>
            ))}
          </ul>
          <p className="flex items-center gap-2 px-5 py-3 text-xs text-muted-foreground">
            <ClipboardList className="size-3.5" />
            Content modules arrive in a later iteration.
          </p>
        </Panel>

        <Panel title="Upcoming Medical Events" description="Next scheduled events and conferences.">
          <ul className="divide-y divide-border">
            {upcomingEvents.map((e) => (
              <li key={e.name} className="px-5 py-4">
                <p className="text-sm font-medium leading-snug">{e.name}</p>
                <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span>{e.date}</span>
                  <span aria-hidden>·</span>
                  <span>{e.type}</span>
                  <Badge variant="outline" className="ml-auto text-[11px]">
                    {e.status}
                  </Badge>
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Recent Audit Activity" description="Administrative traceability log.">
          <ul className="divide-y divide-border">
            {auditLogs.slice(0, 6).map((log, i) => (
              <li key={i} className="flex gap-3 px-5 py-3">
                <ScrollText className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-snug">{log.actor}</p>
                  <p className="text-xs text-muted-foreground">{log.action}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground/80">{log.at}</p>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <p className="pb-4 text-center text-xs text-muted-foreground">
        Prototype using fictional data. Not production-ready for real patient information.
      </p>
    </div>
  );
}
