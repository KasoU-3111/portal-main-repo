import { Link, useNavigate } from "@tanstack/react-router";
import { Bell, LogOut, Menu, Search, Settings, ShieldCheck, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { signOut } from "@/lib/admin-auth";
import { ADMIN_USER, notifications } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { AdminSidebarContent } from "./AdminSidebar";

const toneDot: Record<string, string> = {
  warning: "bg-warning",
  info: "bg-info",
  destructive: "bg-destructive",
  success: "bg-success",
};

export function AdminTopbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-surface/90 px-4 backdrop-blur lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation">
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 border-sidebar-border p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <AdminSidebarContent />
        </SheetContent>
      </Sheet>

      <div className="relative hidden max-w-md flex-1 md:block">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search patients, doctors, requests…"
          className="h-9 bg-muted/60 pl-9 text-sm"
        />
      </div>

      <div className="ml-auto flex items-center gap-1.5">
        <span className="mr-1 hidden items-center gap-1.5 rounded-full border border-border bg-muted/50 px-2.5 py-1 text-[11px] font-medium text-muted-foreground sm:flex">
          <ShieldCheck className="size-3.5 text-primary" />
          Prototype / Demo Environment
        </span>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
              <Bell className="size-5" />
              <span className="absolute right-1.5 top-1.5 flex size-4 items-center justify-center rounded-full bg-destructive text-[9px] font-semibold text-destructive-foreground">
                {notifications.length}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-80 p-0">
            <div className="border-b border-border px-4 py-3">
              <p className="text-sm font-semibold">Notifications</p>
              <p className="text-xs text-muted-foreground">{notifications.length} unread items</p>
            </div>
            <ul className="divide-y divide-border">
              {notifications.map((n) => (
                <li key={n.title} className="flex gap-3 px-4 py-3 hover:bg-muted/50">
                  <span className={cn("mt-1.5 size-2 shrink-0 rounded-full", toneDot[n.tone])} />
                  <span>
                    <span className="block text-sm font-medium leading-snug">{n.title}</span>
                    <span className="block text-xs text-muted-foreground">{n.meta}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t border-border px-4 py-2.5">
              <Link
                to="/admin/$"
                params={{ _splat: "notifications" }}
                className="text-xs font-medium text-primary hover:underline"
              >
                View all notifications →
              </Link>
            </div>
          </PopoverContent>
        </Popover>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2.5 rounded-md px-2 py-1.5 text-left transition-colors hover:bg-muted">
              <span className="flex size-8 items-center justify-center rounded-md bg-primary/10 text-xs font-semibold text-primary">
                {ADMIN_USER.initials}
              </span>
              <span className="hidden sm:block">
                <span className="block text-sm font-medium leading-tight">{ADMIN_USER.name}</span>
                <span className="block text-[11px] leading-tight text-muted-foreground">
                  {ADMIN_USER.role}
                </span>
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <span className="block text-sm">{ADMIN_USER.name}</span>
              <span className="block text-xs font-normal text-muted-foreground">
                {ADMIN_USER.email}
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/admin/$" params={{ _splat: "settings" }}>
                <User className="size-4" /> Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/admin/$" params={{ _splat: "settings" }}>
                <Settings className="size-4" /> Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onSelect={() => {
                signOut();
                navigate({ to: "/login" });
              }}
            >
              <LogOut className="size-4" /> Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
