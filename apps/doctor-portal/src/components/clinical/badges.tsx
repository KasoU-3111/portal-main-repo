import { cn } from "@/lib/utils";
import type { PatientStatus, Severity } from "@/lib/mock-data";

const base =
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium whitespace-nowrap";

const tones = {
  calm: "border-tone-calm/25 bg-tone-calm-soft text-tone-calm",
  watch: "border-tone-watch/25 bg-tone-watch-soft text-tone-watch",
  alert: "border-tone-alert/25 bg-tone-alert-soft text-tone-alert",
  neutral: "border-border bg-secondary text-secondary-foreground",
};

export function StatusBadge({ status }: { status: PatientStatus }) {
  const tone = status === "Stable" ? "calm" : status === "Monitoring" ? "watch" : "alert";
  return (
    <span className={cn(base, tones[tone])}>
      <span className="size-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

export function SeverityBadge({ severity }: { severity: Severity }) {
  const tone = severity === "Mild" ? "calm" : severity === "Moderate" ? "watch" : "alert";
  return <span className={cn(base, tones[tone])}>{severity}</span>;
}

export function MetaBadge({ children }: { children: React.ReactNode }) {
  return <span className={cn(base, tones.neutral)}>{children}</span>;
}
