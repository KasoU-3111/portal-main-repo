import { Link, useRouterState } from "@tanstack/react-router";
import { Activity, ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";
import { navGroups } from "./nav-config";

export function AdminSidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex items-center gap-3 border-b border-sidebar-border px-5 py-4">
        <span className="flex size-9 items-center justify-center rounded-md bg-sidebar-primary/15 text-sidebar-primary">
          <Activity className="size-5" />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold tracking-[0.14em] text-sidebar-accent-foreground">
            Name-IBD-Portal
          </span>
          <span className="block truncate text-[11px] text-sidebar-foreground/60">
            Clinical Administration
          </span>
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {navGroups.map((group) => (
          <div key={group.title} className="mb-5">
            <p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-sidebar-foreground/45">
              {group.title}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active = pathname === `/admin/${item.slug}`;
                return (
                  <li key={item.slug}>
                    <Link
                      {...(item.ready
                        ? ({ to: "/admin/dashboard" } as const)
                        : ({ to: "/admin/$", params: { _splat: item.slug } } as const))}
                      onClick={onNavigate}
                      className={cn(
                        "group flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors",
                        active
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
                      )}
                    >
                      <item.icon
                        className={cn(
                          "size-4 shrink-0",
                          active ? "text-sidebar-primary" : "text-sidebar-foreground/55",
                        )}
                      />
                      <span className="flex-1 truncate">{item.label}</span>
                      {!item.ready && (
                        <span className="rounded border border-sidebar-border px-1.5 py-px text-[9px] font-medium uppercase tracking-wider text-sidebar-foreground/50">
                          Soon
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-sidebar-border px-4 py-3">
        <p className="flex items-center gap-2 text-[11px] text-sidebar-foreground/60">
          <ShieldCheck className="size-3.5 text-sidebar-primary" />
          Prototype / Demo Environment
        </p>
      </div>
    </div>
  );
}
