import { Link, useLocation } from '@tanstack/react-router';
import {
  LayoutDashboard,
  Users,
  UserCheck,
  FileText,
  BarChart2,
  Calendar,
  FlaskConical,
  BookOpen,
  FileCode,
  MessageSquare,
  Radio,
  Video,
  Activity,
  HelpCircle,
  Bell,
  History,
  Settings
} from 'lucide-react';

const navItems = [
  {
    group: 'OVERVIEW',
    items: [
      { name: 'Dashboard', to: '/admin/dashboard', icon: LayoutDashboard },
    ]
  },
  {
    group: 'USER MANAGEMENT',
    items: [
      { name: 'Doctors', to: '/admin/doctors', icon: Users, badge: 'SOON' },
      { name: 'Patients', to: '/admin/patients', icon: UserCheck, badge: 'SOON' },
    ]
  },
  {
    group: 'CLINICAL MANAGEMENT',
    items: [
      { name: 'Patient Records', to: '/admin/patient-records', icon: FileText, badge: 'SOON' },
      { name: 'Reports', to: '/admin/reports', icon: BarChart2, badge: 'SOON' },
      { name: 'Appointments', to: '/admin/appointments', icon: Calendar, badge: 'SOON' },
    ]
  },
  {
    group: 'CONTENT MANAGEMENT',
    items: [
      { name: 'Research', to: '/admin/research', icon: FlaskConical, badge: 'SOON' },
      { name: 'Case Studies', to: '/admin/case-studies', icon: BookOpen, badge: 'SOON' },
      { name: 'Blogs', to: '/admin/blogs', icon: FileCode, badge: 'SOON' },
      { name: 'Forums', to: '/admin/forums', icon: MessageSquare, badge: 'SOON' },
      { name: 'Medical Events', to: '/admin/medical-events', icon: Radio, badge: 'SOON' },
      { name: 'Conferences', to: '/admin/conferences', icon: Video, badge: 'SOON' },
    ]
  },
  {
    group: 'REQUESTS & COMMUNICATION',
    items: [
      { name: 'Change Requests', to: '/admin/requests', icon: Activity },
      { name: 'Help Desk', to: '/admin/help-desk', icon: HelpCircle, badge: 'SOON' },
      { name: 'Notifications', to: '/admin/notifications', icon: Bell, badge: 'SOON' },
    ]
  },
  {
    group: 'SYSTEM & LOGS',
    items: [
      { name: 'Audit Logs', to: '/admin/audit-logs', icon: History, badge: 'SOON' },
      { name: 'Settings', to: '/admin/settings', icon: Settings, badge: 'SOON' },
    ]
  }
];

export function AdminSidebarContent() {
  const location = useLocation();

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
      {/* Brand Header */}
      <div className="flex h-16 items-center border-b border-sidebar-border px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground font-bold">
            <Activity className="h-5 w-5" />
          </div>
          <div>
            <span className="block truncate text-sm font-bold tracking-wider text-sidebar-accent-foreground uppercase">
              MERIDIAN IBD
            </span>
            <span className="block text-[11px] text-sidebar-foreground/60">
              Clinical Administration
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navItems.map((group, idx) => (
          <div key={idx} className="space-y-1">
            <h3 className="px-3 text-[10px] font-semibold tracking-wider text-sidebar-foreground/50 uppercase">
              {group.group}
            </h3>
            {group.items.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.to;

              return (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`flex items-center justify-between rounded-md px-3 py-2 text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground font-semibold'
                      : 'text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="rounded bg-sidebar-accent px-1.5 py-0.5 text-[9px] font-semibold text-sidebar-foreground/60">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </aside>
  );
}

export function AdminSidebar() {
  return <AdminSidebarContent />;
}