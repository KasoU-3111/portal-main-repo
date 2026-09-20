import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  FileBarChart2,
  FlaskConical,
  BookOpen,
  PenLine,
  MessagesSquare,
  Inbox,
  Network,
  UserRound,
  Settings,
  Menu,
  X,
  Bell,
  Activity,
} from "lucide-react";
import { doctor } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/doctor/dashboard", active: true },
  { label: "My Patients", icon: Users, to: "/doctor/patients", active: true },
  { label: "Appointments", icon: CalendarDays },
  { label: "Reports", icon: FileBarChart2 },
  { label: "Research", icon: FlaskConical },
  { label: "Case Studies", icon: BookOpen },
  { label: "Blogs", icon: PenLine },
  { label: "Forums", icon: MessagesSquare },
  { label: "Requests", icon: Inbox },
  { label: "Doctor Collaboration", icon: Network },
  { label: "Profile", icon: UserRound },
  { label: "Settings", icon: Settings },
] as const;

export function DoctorLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-background">
      <aside
        className={cn(
          "clinical-sidebar fixed inset-y-0 left-0 z-40 flex w-72 flex-col transition-transform lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center gap-3 px-6 py-6">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary-foreground/10 text-primary-foreground">
            <Activity className="size-5" />
          </span>
          <div className="text-primary-foreground">
            <p className="font-display text-sm font-semibold tracking-tight">name-portal IBD</p>
            <p className="text-[11px] text-primary-foreground/60">Clinician Workspace</p>
          </div>
          <button
            className="ml-auto text-primary-foreground/70 lg:hidden"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 pb-6">
          {nav.map((item) => {
            const isActive = "to" in item && item.to ? pathname.startsWith(item.to) : false;
            const classes = cn(
              "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
              isActive
                ? "bg-primary-foreground/15 text-primary-foreground"
                : "text-primary-foreground/65 hover:bg-primary-foreground/10 hover:text-primary-foreground",
            );
            return "active" in item && item.active ? (
              <Link key={item.label} to={item.to} className={classes} onClick={() => setOpen(false)}>
                <item.icon className="size-4 shrink-0" />
                {item.label}
              </Link>
            ) : (
              <button key={item.label} type="button" className={cn(classes, "cursor-default opacity-70")}>
                <item.icon className="size-4 shrink-0" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-primary-foreground/10 px-5 py-4 text-primary-foreground">
          <p className="text-sm font-medium">{doctor.name}</p>
          <p className="text-[11px] text-primary-foreground/60">{doctor.specialty}</p>
        </div>
      </aside>

      {open && (
        <div className="fixed inset-0 z-30 bg-foreground/40 lg:hidden" onClick={() => setOpen(false)} />
      )}

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-border bg-card/90 px-4 backdrop-blur sm:px-6">
          <button className="lg:hidden" onClick={() => setOpen(true)} aria-label="Open navigation">
            <Menu className="size-5" />
          </button>
          <p className="hidden text-sm text-muted-foreground sm:block">{doctor.hospital}</p>
          <div className="ml-auto flex items-center gap-4">
            <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
              Read-only access
            </span>
            <Bell className="size-4 text-muted-foreground" />
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                {doctor.initials}
              </span>
              <div className="hidden leading-tight sm:block">
                <p className="text-sm font-medium">{doctor.name}</p>
                <p className="text-[11px] text-muted-foreground">{doctor.id}</p>
              </div>
            </div>
          </div>
        </header>
        <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
