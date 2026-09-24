/* \admin-portal/src/routes/login.tsx */


import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Shield, Lock, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const title = "MERIDIAN IBD — Admin Sign In";
const description =
  "Administrative governance workspace for the MERIDIAN IBD clinical platform: manage platform users, change requests, research posts, and system settings.";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AdminLoginPage,
});

function AdminLoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/admin/dashboard" });
  };

  return (
    <main className="grid min-h-screen lg:grid-cols-2 bg-[#F8F6F0]">
      <section className="relative hidden flex-col justify-between bg-[#01292D] p-12 lg:flex xl:p-20 text-[#F8F6F0]">
        <div className="flex items-center gap-3">
          <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-white/10 border border-white/20">
            <Activity className="size-5 text-[#F8F6F0]" />
          </div>
          <span className="text-base font-semibold tracking-wide text-[#F8F6F0]">
            MERIDIAN IBD
          </span>
        </div>

        <div className="max-w-lg">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-[#A8C2C0] mb-6">
            <Shield className="size-3.5 text-[#176F66]" />
            <span>Platform Governance & Administration</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[#F8F6F0] xl:text-5xl leading-[1.15]">
            Centralized control center for clinical platform management.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#A8C2C0]">
            Manage doctor access credentials, review clinician change requests, oversee research publications, and supervise system audit logs across all care units.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-[#A8C2C0]">
          <Shield className="size-4 opacity-80" />
          <span>Admin Portal · Meridian Health System Platform</span>
        </div>
      </section>

      <section className="flex items-center justify-center px-5 py-12 sm:px-10">
        <div className="w-full max-w-[380px]">
          <div className="mb-10 lg:hidden">
            <div className="flex items-center gap-3">
              <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#01292D] text-[#F8F6F0]">
                <Activity className="size-5" />
              </div>
              <span className="text-base font-semibold tracking-wide text-[#01292D]">
                MERIDIAN IBD
              </span>
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#01292D]">Admin Sign In</h2>
          <p className="mt-2 text-sm text-[#5B7573]">
            Access platform governance and administrative tools.
          </p>

          <form className="mt-8 space-y-6" onSubmit={handleLogin} noValidate>
            <div className="space-y-2">
              <Label htmlFor="admin-email" className="text-sm font-medium text-[#01292D]">
                Administrator email
              </Label>
              <Input
                id="admin-email"
                type="email"
                defaultValue="admin@meridian.health"
                className="h-10 bg-white border-[#D8E2E1] text-[#01292D] placeholder:text-[#A8C2C0] focus-visible:ring-[#176F66] shadow-xs"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="admin-password" className="text-sm font-medium text-[#01292D]">
                Password
              </Label>
              <Input
                id="admin-password"
                type="password"
                defaultValue="prototype"
                className="h-10 bg-white border-[#D8E2E1] text-[#01292D] placeholder:text-[#A8C2C0] focus-visible:ring-[#176F66] shadow-xs"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-10 bg-[#01292D] hover:bg-[#176F66] text-[#F8F6F0] font-medium transition-colors shadow-xs cursor-pointer"
            >
              Sign in as Administrator
            </Button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#5B7573]">
            <Lock className="size-3.5 opacity-70" />
            <span>Encrypted administrative prototype session</span>
          </div>
        </div>
      </section>
    </main>
  );
}