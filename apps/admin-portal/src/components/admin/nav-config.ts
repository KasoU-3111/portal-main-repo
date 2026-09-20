import {
  LayoutDashboard,
  Stethoscope,
  Users,
  FolderOpen,
  FileBarChart,
  CalendarDays,
  FlaskConical,
  BookOpen,
  PenLine,
  MessagesSquare,
  CalendarClock,
  Presentation,
  GitPullRequestArrow,
  LifeBuoy,
  Bell,
  ScrollText,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  slug: string;
  icon: LucideIcon;
  ready?: boolean;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const navGroups: NavGroup[] = [
  {
    title: "Overview",
    items: [{ label: "Dashboard", slug: "dashboard", icon: LayoutDashboard, ready: true }],
  },
  {
    title: "User Management",
    items: [
      { label: "Doctors", slug: "doctors", icon: Stethoscope },
      { label: "Patients", slug: "patients", icon: Users },
    ],
  },
  {
    title: "Clinical Management",
    items: [
      { label: "Patient Records", slug: "patient-records", icon: FolderOpen },
      { label: "Reports", slug: "reports", icon: FileBarChart },
      { label: "Appointments", slug: "appointments", icon: CalendarDays },
    ],
  },
  {
    title: "Content Management",
    items: [
      { label: "Research", slug: "research", icon: FlaskConical },
      { label: "Case Studies", slug: "case-studies", icon: BookOpen },
      { label: "Blogs", slug: "blogs", icon: PenLine },
      { label: "Forums", slug: "forums", icon: MessagesSquare },
      { label: "Medical Events", slug: "medical-events", icon: CalendarClock },
      { label: "Conferences", slug: "conferences", icon: Presentation },
    ],
  },
  {
    title: "Requests & Communication",
    items: [
      { label: "Change Requests", slug: "change-requests", icon: GitPullRequestArrow },
      { label: "Help Desk", slug: "help-desk", icon: LifeBuoy },
    ],
  },
  {
    title: "System",
    items: [
      { label: "Notifications", slug: "notifications", icon: Bell },
      { label: "Audit Logs", slug: "audit-logs", icon: ScrollText },
      { label: "Settings", slug: "settings", icon: Settings },
    ],
  },
];

export function findNavItem(pathname: string): NavItem | undefined {
  for (const group of navGroups) {
    for (const item of group.items) {
      if (`/admin/${item.slug}` === pathname) return item;
    }
  }
  return undefined;
}
