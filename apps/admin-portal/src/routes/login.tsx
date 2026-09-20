import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Activity, AlertCircle, Lock, Mail, ShieldCheck } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/lib/admin-auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Admin Sign In — [Name] IBD Clinical Administration" },
      {
        name: "description",
        content:
          "Secure sign-in for the [Name] IBD Clinical Administration Portal. Prototype environment with fictional demo data.",
      },
      { property: "og:title", content: "[Name] IBD — Clinical Administration Portal" },
      {
        property: "og:description",
        content: "Administrator sign-in for the [Name] IBD clinical administration prototype.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (signIn(email, password)) {
      setError("");
      navigate({ to: "/admin/dashboard" });
    } else {
      setError("Invalid credentials. Please check the email address and password and try again.");
    }
  }

  return (
    <main className="grid min-h-screen lg:grid-cols-[1.05fr_1fr]">
      <section className="hidden flex-col justify-between bg-sidebar px-12 py-14 text-sidebar-foreground lg:flex">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-md bg-sidebar-primary/15 text-sidebar-primary">
            <Activity className="size-5" />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-[0.18em] text-sidebar-accent-foreground">
              [Name] IBD
            </span>
            <span className="block text-xs text-sidebar-foreground/60">
              Clinical Administration Portal
            </span>
          </span>
        </div>

        <div className="max-w-md">
          <h1 className="text-3xl font-semibold leading-tight text-sidebar-accent-foreground">
            Clinical operations, under one control center.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-sidebar-foreground/70">
            Oversee clinicians, patient records, appointments, research content and administrative
            requests across the [Name] IBD platform.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-sidebar-border pt-6">
            {[
              ["6", "Clinicians"],
              ["10", "Patients"],
              ["8", "Active cases"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="stat-figure text-2xl font-semibold text-sidebar-accent-foreground">
                  {value}
                </dt>
                <dd className="text-[11px] uppercase tracking-wider text-sidebar-foreground/55">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="flex items-center gap-2 text-xs text-sidebar-foreground/55">
          <ShieldCheck className="size-4 text-sidebar-primary" />
          Prototype / Demo Environment · fictional data only
        </p>
      </section>

      <section className="flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <span className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Activity className="size-5" />
            </span>
            <h1 className="mt-4 text-lg font-semibold tracking-[0.14em]">[Name] IBD</h1>
            <p className="text-sm text-muted-foreground">Clinical Administration Portal</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-card sm:p-7">
            <h2 className="text-xl font-semibold">Administrator sign in</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Restricted access. Authorized administration personnel only.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    autoComplete="username"
                    placeholder="admin@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-9"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-9"
                    required
                  />
                </div>
              </div>

              {error && (
                <p
                  role="alert"
                  className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/8 px-3 py-2 text-sm text-destructive"
                >
                  <AlertCircle className="mt-0.5 size-4 shrink-0" />
                  {error}
                </p>
              )}

              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="mt-6 rounded-md border border-dashed border-border bg-muted/50 px-3 py-3 text-xs text-muted-foreground">
              <p className="font-medium text-foreground">Demo credentials</p>
              <p className="mt-1 font-mono">admin@gmail.com</p>
              <p className="font-mono">1234</p>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Prototype / Demo Environment — fictional data. Not intended for real patient
            information.
          </p>
        </div>
      </section>
    </main>
  );
}
