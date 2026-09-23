import {
  Activity,
  Apple,
  BookOpen,
  CalendarDays,
  ClipboardList,
  FileText,
  FolderHeart,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  LifeBuoy,
  NotebookPen,
  Repeat,
  Settings,
  User,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

type NavItem = { label: string; icon: LucideIcon; active?: boolean };

export const navItems: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "My Profile", icon: User },
  { label: "Medical Records", icon: FolderHeart },
  { label: "Reports", icon: FileText },
  { label: "Doctor Notes", icon: NotebookPen },
  { label: "Treatment Plan", icon: ClipboardList },
  { label: "Treatment History", icon: Repeat },
  { label: "Vitals", icon: HeartPulse },
  { label: "Appointments", icon: CalendarDays },
  { label: "Follow-ups", icon: BookOpen },
  { label: "Help Desk", icon: LifeBuoy },
  { label: "Diet Plan", icon: Apple },
  { label: "Education", icon: GraduationCap },
  { label: "Settings", icon: Settings },
];

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col bg-sidebar">
      <div className="flex items-center gap-3 border-b border-sidebar-border px-5 py-5">
        <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#176F66] text-[#F8F6F0]">
          <Activity className="size-5" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold tracking-[0.16em] text-sidebar-foreground">
            MERIDIAN IBD
          </p>
          <p className="truncate text-xs text-muted-foreground/80">Patient Care Portal</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
          Menu
        </p>
        <ul className="space-y-1">
          {navItems.map(({ label, icon: Icon, active }) => (
            <li key={label}>
              <button
                type="button"
                onClick={onNavigate}
                aria-current={active ? "page" : undefined}
                disabled={!active}
                className={cn(
                  "group grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                  active
                    ? "bg-[#002529] font-medium text-[#1BA9BB]"
                    : "text-[#A8C2C0] hover:bg-[#002529]/60 hover:text-[#F8F6F0] disabled:cursor-not-allowed disabled:opacity-70",
                )}
              >
                <Icon className="size-4 shrink-0" />
                <span className="truncate">{label}</span>
                {!active && (
                  <span className="shrink-0 rounded-full border border-sidebar-border px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground/70">
                    Coming Soon
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-sidebar-border p-4">
        <p className="text-[11px] leading-relaxed text-muted-foreground/70">
          Prototype environment. Fictional demonstration data only.
        </p>
      </div>
    </div>
  );
}