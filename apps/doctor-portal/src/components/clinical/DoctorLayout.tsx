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
    <div className="min-h-screen bg-[#F8F6F0]">
      {/* Dark Teal Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-[#01292D] text-[#F8F6F0] transition-transform lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center gap-3 px-6 py-6 border-b border-white/10">
          <span className="flex size-9 items-center justify-center rounded-lg bg-white/10 border border-white/10 text-[#F8F6F0]">
            <Activity className="size-5" />
          </span>
          <div>
            <p className="font-display text-base font-bold tracking-wide text-[#F8F6F0]">MERIDIAN IBD</p>
            <p className="text-[11px] text-[#A8C2C0]">Clinician Workspace</p>
          </div>
          <button
            className="ml-auto text-[#A8C2C0] hover:text-white lg:hidden"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {nav.map((item) => {
            const isActive = "to" in item && item.to ? pathname.startsWith(item.to) : false;
            const classes = cn(
              "flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
              isActive
                ? "bg-[#176F66] text-white shadow-sm"
                : "text-[#A8C2C0] hover:bg-white/5 hover:text-white",
            );
            return "active" in item && item.active ? (
              <Link key={item.label} to={item.to} className={classes} onClick={() => setOpen(false)}>
                <item.icon className="size-4 shrink-0" />
                {item.label}
              </Link>
            ) : (
              <button key={item.label} type="button" className={cn(classes, "cursor-not-allowed opacity-50")}>
                <item.icon className="size-4 shrink-0" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-white/10 px-6 py-4 text-[#F8F6F0]">
          <p className="text-sm font-semibold">{doctor.name}</p>
          <p className="text-[11px] text-[#A8C2C0]">{doctor.specialty}</p>
        </div>
      </aside>

      {open && (
        <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setOpen(false)} />
      )}

      {/* Main Layout Area */}
      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-[#E2DFD7] bg-[#F8F6F0]/90 px-4 backdrop-blur sm:px-6">
          <button className="lg:hidden text-[#01292D]" onClick={() => setOpen(true)} aria-label="Open navigation">
            <Menu className="size-5" />
          </button>
          
          <p className="hidden text-sm font-semibold text-[#01292D] sm:block">
            {doctor.hospital}
          </p>

          <div className="ml-auto flex items-center gap-4">
            <span className="rounded-full border border-[#D8E2E1] bg-white px-3 py-1 text-[11px] font-medium text-[#5B7573] shadow-xs">
              Read-only access
            </span>
            <Bell className="size-4 text-[#5B7573] cursor-pointer hover:text-[#01292D]" />
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-full bg-[#176F66] text-xs font-semibold text-white shadow-xs">
                {doctor.initials}
              </span>
              <div className="hidden leading-tight sm:block">
                <p className="text-sm font-semibold text-[#01292D]">{doctor.name}</p>
                <p className="text-[11px] text-[#5B7573]">{doctor.id}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="px-4 py-6 sm:px-6 lg:px-8 max-w-7xl">{children}</main>
      </div>
    </div>
  );
}