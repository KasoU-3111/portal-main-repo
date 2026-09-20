import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Activity, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const title = "name-portal IBD — Clinician Sign In";
const description =
  "Secure sign-in for the name-portal IBD clinician workspace: review assigned patients, clinical records, reports and treatment history.";

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
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="clinical-sidebar hidden flex-col justify-between p-12 text-primary-foreground lg:flex">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary-foreground/10">
            <Activity className="size-5" />
          </span>
          <p className="font-display text-sm font-semibold">name-portal IBD</p>
        </div>
        <div className="max-w-md">
          <h1 className="text-4xl font-semibold leading-tight">
            A calmer clinical record for inflammatory bowel disease care.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            Longitudinal disease activity, reports and treatment history for every patient under your care — in one
            reviewed, read-only record.
          </p>
        </div>
        <p className="flex items-center gap-2 text-xs text-primary-foreground/60">
          <ShieldCheck className="size-4" /> Prototype environment · fictional demonstration data
        </p>
      </div>

      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-semibold">Clinician sign in</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">Use any credentials to enter the prototype.</p>
          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              navigate({ to: "/doctor/dashboard" });
            }}
          >
            <div className="space-y-1.5">
              <Label htmlFor="email">Work email</Label>
              <Input id="email" type="email" defaultValue="arjun.mehta@name-portal.health" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" defaultValue="prototype" />
            </div>
            <Button type="submit" className="w-full">
              Sign in as clinician
            </Button>
          </form>
          <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="size-3.5" /> Doctors have read-only access to patient records.
          </p>
        </div>
      </div>
    </div>
  );
}
