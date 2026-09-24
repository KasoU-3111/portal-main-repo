import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Activity, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const title = "MERIDIAN IBD — Clinician Sign In";
const description =
  "Secure sign-in for the MERIDIAN IBD clinician workspace: review assigned patients, clinical records, reports and treatment history.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();

  return (
    <main className="grid min-h-screen lg:grid-cols-2 bg-[#F8F6F0]">
      {/* Left Brand Panel — Dark Teal (#01292D) */}
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
            A calmer clinical record for inflammatory bowel disease care.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#A8C2C0]">
            Longitudinal disease activity, laboratory reports, and treatment history for every patient under your care — all in one centralized clinical workspace.
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

          <h2 className="text-3xl font-bold tracking-tight text-[#01292D]">Clinician sign in</h2>
          <p className="mt-2 text-sm text-[#5B7573]">
            Use any credentials to enter the prototype.
          </p>

          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: "/doctor/dashboard" });
            }}
            noValidate
          >
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-[#01292D]">
                Work email
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue="dr.mehta@meridian.health"
                className="h-10 bg-white border-[#D8E2E1] text-[#01292D] placeholder:text-[#A8C2C0] focus-visible:ring-[#176F66] shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-[#01292D]">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                defaultValue="clinician2026"
                className="h-10 bg-white border-[#D8E2E1] text-[#01292D] placeholder:text-[#A8C2C0] focus-visible:ring-[#176F66] shadow-sm"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full h-10 bg-[#176F66] hover:bg-[#002529] text-[#F8F6F0] font-medium transition-colors shadow-sm"
            >
              Sign in as clinician
            </Button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-[#5B7573]">
            <Lock className="size-4 opacity-70" />
            <span>Doctors have read-only access to patient records.</span>
          </div>
        </div>
      </section>
    </main>
  );
}