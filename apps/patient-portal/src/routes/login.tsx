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
        content:
          "Secure sign-in for the MERIDIAN IBD Patient Care Portal. Prototype demonstration environment.",
      },
      {
        property: "og:title",
        content: "MERIDIAN IBD — Patient Care Portal Sign In",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState(DEMO_CREDENTIALS.email);
  const [password, setPassword] = useState(DEMO_CREDENTIALS.password);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    const isValid =
      normalizedEmail === DEMO_CREDENTIALS.email.toLowerCase() &&
      password === DEMO_CREDENTIALS.password;

    if (!isValid) {
      setError(
        "Incorrect email or password. Please check your credentials and try again."
      );
      return;
    }

    setError(null);

    signIn(normalizedEmail);

    navigate({ to: "/dashboard" });
  }

  return (
    <main className="grid min-h-screen bg-[#F8F6F0] lg:grid-cols-2">
      {/* Left Brand Panel */}
      <section className="relative hidden flex-col justify-between bg-[#01292D] p-12 lg:flex xl:p-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/10">
            <Activity className="size-5 text-[#F8F6F0]" />
          </div>

          <span className="text-base font-medium tracking-wide text-[#F8F6F0]">
            MERIDIAN IBD
          </span>
        </div>

        {/* Center Content */}
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-[#F8F6F0] xl:text-5xl">
            Your care, clearly organised in one place.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[#A8C2C0]">
            Track appointments, reports, treatment progress and clinician notes
            from your IBD care team — designed to be calm, clear and easy to
            follow.
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 text-sm text-[#A8C2C0]">
          <ShieldCheck className="size-4 opacity-80" />
          <span>
            Prototype environment · fictional demonstration data
          </span>
        </div>
      </section>

      {/* Right Form Panel */}
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

          <h2 className="text-3xl font-bold tracking-tight text-[#01292D]">
            Patient sign in
          </h2>

          <p className="mt-2 text-sm text-[#5B7573]">
            Sign in using the demo credentials provided below.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
            noValidate
          >
            {/* Email */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-[#01292D]"
              >
                Email
              </Label>

              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="Enter your email"
                className="h-10 border-[#D8E2E1] bg-white text-[#01292D] placeholder:text-[#A8C2C0] shadow-sm focus-visible:ring-[#176F66]"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(null);
                }}
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-[#01292D]"
              >
                Password
              </Label>

              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                className="h-10 border-[#D8E2E1] bg-white text-[#01292D] placeholder:text-[#A8C2C0] shadow-sm focus-visible:ring-[#176F66]"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(null);
                }}
                required
              />
            </div>

            {/* Error Message */}
            {error && (
              <p
                role="alert"
                className="rounded-lg border border-destructive/25 bg-destructive/10 px-3 py-2 text-sm text-destructive"
              >
                {error}
              </p>
            )}

            {/* Submit */}
            <Button
              type="submit"
              className="h-10 w-full bg-[#176F66] font-medium text-[#F8F6F0] shadow-sm transition-colors hover:bg-[#002529]"
            >
              Sign in as patient
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 flex items-start justify-center gap-2 text-sm text-[#5B7573]">
            <Lock className="mt-0.5 size-4 shrink-0 opacity-70" />

            <p className="break-all text-center">
              <span className="font-medium">Demo credentials:</span>
              <br />
              {DEMO_CREDENTIALS.email}
              <br />
              {DEMO_CREDENTIALS.password}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}