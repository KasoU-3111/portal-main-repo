import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Activity, Lock, Mail, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEMO_CREDENTIALS } from "@/lib/mock-data";
import { signIn } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Patient Sign In — IBD Knowledge Hub Patient Care Portal" },
      {
        name: "description",
        content:
          "Secure sign-in for the IBD Patient Care Portal. Prototype demonstration environment with fictional data.",
      },
      { property: "og:title", content: "IBD Knowledge Hub — Patient Care Portal Sign In" },
      {
        property: "og:description",
        content: "Sign in to view your appointments, reports and treatment plan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const ok =
      email.trim().toLowerCase() === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password;
    if (!ok) {
      setError("Incorrect email or password. Please check your credentials and try again.");
      return;
    }
    setError(null);
    signIn(email.trim().toLowerCase());
    navigate({ to: "/dashboard" });
  }

  return (
    <main className="grid min-h-screen lg:grid-cols-[1.1fr_1fr]">
      {/* Brand panel matching #01292D -> #176F66 */}
      <section 
        className="relative hidden flex-col justify-between p-12 lg:flex" 
        style={{ background: "linear-gradient(135deg, #01292d 0%, #176f66 100%)" }}
      >
        <div className="flex items-center gap-3">
          <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/15 ring-1 ring-white/25">
            <Activity className="size-5 text-white" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold tracking-[0.2em] text-white">
              IBD Knowledge Hub
            </p>
            <p className="text-xs text-white/70">Patient Care Portal</p>
          </div>
        </div>

        <div className="max-w-md">
          <h2 className="font-display text-3xl font-semibold leading-tight text-white">
            Your care, clearly organised in one place.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            Track appointments, reports, treatment progress and clinician notes from your IBD care
            team — designed to be calm, clear and easy to follow.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/90">
            {["Appointments & follow-ups", "Lab reports and health trends", "Treatment plan and doctor notes"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <ShieldCheck className="size-4 shrink-0 text-[#3db88f]" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        <p className="text-xs text-white/60">
          Prototype environment. All data shown is fictional and not suitable for real patient
          records.
        </p>
      </section>

      {/* Form panel */}
      <section className="flex items-center justify-center bg-background px-5 py-12 sm:px-10">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <div className="flex items-center gap-3">
              <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Activity className="size-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold tracking-[0.2em] text-foreground">IBD Knowledge Hub</p>
                <p className="text-xs text-muted-foreground">Patient Care Portal</p>
              </div>
            </div>
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-foreground">Patient sign in</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your credentials to access your health overview.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  autoComplete="username"
                  placeholder="patient@gmail.com"
                  className="pl-9"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••"
                  className="pl-9"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-lg border border-destructive/25 bg-destructive/8 px-3 py-2 text-sm text-destructive"
              >
                {error}
              </p>
            )}

            <Button type="submit" className="w-full bg-[#176f66] hover:bg-[#01292d] text-white" size="lg">
              Sign In
            </Button>
          </form>

          <div className="mt-6 rounded-xl border border-border bg-card p-4 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#176f66]">
              Prototype / Demo Environment
            </p>
            <dl className="mt-3 space-y-1 text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">Email</dt>
                <dd className="font-medium text-foreground">patient@gmail.com</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-muted-foreground">Password</dt>
                <dd className="font-medium text-foreground">1234</dd>
              </div>
            </dl>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Demonstration prototype only. Not intended for storing real patient data. A production
            release would add secure authentication, encryption, consent management and audit logs.
          </p>
        </div>
      </section>
    </main>
  );
}