import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Activity, Lock, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEMO_CREDENTIALS } from "@/lib/mock-data";
import { signIn } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Patient Sign In — MERIDIAN IBD Patient Care Portal" },
      {
        name: "description",
        content: "Secure sign-in for the MERIDIAN IBD Patient Care Portal. Prototype demonstration environment.",
      },
      { property: "og:title", content: "MERIDIAN IBD — Patient Care Portal Sign In" },
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
    <main className="grid min-h-screen lg:grid-cols-2 bg-[#F8F6F0]">
      {/* Left Brand Panel — Solid Primary Dark Teal (#01292D) */}
      <section className="relative hidden flex-col justify-between bg-[#01292D] p-12 lg:flex xl:p-20">
        
        {/* Top Logo */}
        <div className="flex items-center gap-3">
          <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-white/10 border border-white/10">
            <Activity className="size-5 text-[#F8F6F0]" />
          </div>
          <span className="text-base font-medium tracking-wide text-[#F8F6F0]">
            MERIDIAN IBD
          </span>
        </div>

        {/* Center Content */}
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold tracking-tight text-[#F8F6F0] xl:text-5xl leading-[1.15]">
            Your care, clearly organised in one place.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#A8C2C0]">
            Track appointments, reports, treatment progress and clinician notes from your IBD care team — designed to be calm, clear and easy to follow.
          </p>
        </div>

        {/* Bottom Footer */}
        <div className="flex items-center gap-2 text-sm text-[#A8C2C0]">
          <ShieldCheck className="size-4 opacity-80" />
          <span>Prototype environment · fictional demonstration data</span>
        </div>
      </section>

      {/* Right Form Panel — Warm Ivory (#F8F6F0) */}
      <section className="flex items-center justify-center px-5 py-12 sm:px-10">
        <div className="w-full max-w-[380px]">
          
          {/* Mobile Logo */}
          <div className="mb-10 lg:hidden">
            <div className="flex items-center gap-3">
              <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#176F66] text-[#F8F6F0]">
                <Activity className="size-5" />
              </div>
              <span className="text-base font-semibold tracking-wide text-[#01292D]">
                MERIDIAN IBD
              </span>
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#01292D]">Patient sign in</h2>
          <p className="mt-2 text-sm text-[#5B7573]">
            Use any credentials to enter the prototype.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-[#01292D]">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                autoComplete="username"
                placeholder="patient@gmail.com"
                className="h-10 bg-white border-[#D8E2E1] text-[#01292D] placeholder:text-[#A8C2C0] focus-visible:ring-[#176F66] shadow-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-[#01292D]">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="h-10 bg-white border-[#D8E2E1] text-[#01292D] placeholder:text-[#A8C2C0] focus-visible:ring-[#176F66] shadow-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-lg border border-destructive/25 bg-destructive/10 px-3 py-2 text-sm text-destructive"
              >
                {error}
              </p>
            )}

            <Button 
              type="submit" 
              className="w-full h-10 bg-[#176F66] hover:bg-[#002529] text-[#F8F6F0] font-medium transition-colors shadow-sm"
            >
              Sign in as patient
            </Button>
          </form>

          {/* Minimalist prototype credentials hint */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-[#5B7573]">
            <Lock className="size-4 opacity-70" />
            <span>Demo credentials: patient@gmail.com / 1234</span>
          </div>
        </div>
      </section>
    </main>
  );
}