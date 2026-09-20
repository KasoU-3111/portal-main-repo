import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Printer, ArrowLeft, FileEdit, FileText, Lock } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ReTooltip,
  ResponsiveContainer,
} from "recharts";
import { DoctorLayout } from "@/components/clinical/DoctorLayout";
import { MetaBadge, SeverityBadge, StatusBadge } from "@/components/clinical/badges";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { addChangeRequest, getPatient, type Patient, type ReportEntry } from "@/lib/mock-data";

export const Route = createFileRoute("/doctor/patients/$patientId")({
  loader: ({ params }) => {
    const patient = getPatient(params.patientId);
    if (!patient) throw notFound();
    return { patient };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Patient record unavailable — name-portal IBD" }, { name: "robots", content: "noindex" }] };
    }
    const { patient } = loaderData;
    const title = `${patient.name} (${patient.id}) — Clinical Record | name-portal IBD`;
    const description = `Read-only clinical record for ${patient.name}: ${patient.diagnosis}, ${patient.severity} severity, reports, treatment history, notes, vitals and timeline.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: PatientRecord,
});

const tabs = ["Overview", "Reports", "Treatment", "Doctor Notes", "Vitals", "Timeline"];

function PatientRecord() {
  const { patient } = Route.useLoaderData();
  const [requestOpen, setRequestOpen] = useState(false);
  const [report, setReport] = useState<ReportEntry | null>(null);

  return (
    <DoctorLayout>
      <div className="mx-auto max-w-7xl space-y-6">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
          <Link to="/doctor/dashboard" className="hover:text-foreground">
            Doctor Dashboard
          </Link>
          <span className="px-1.5">›</span>
          <Link to="/doctor/patients" className="hover:text-foreground">
            My Patients
          </Link>
          <span className="px-1.5">›</span>
          <span className="text-foreground">{patient.name}</span>
        </nav>

        <div className="clinical-panel p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <h1 className="text-2xl font-semibold">{patient.name}</h1>
                <SeverityBadge severity={patient.severity} />
                <StatusBadge status={patient.status} />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Patient ID <span className="font-mono">{patient.id}</span> · Currently{" "}
                {patient.status === "Stable" ? "stable" : patient.status === "Monitoring" ? "monitoring" : "under close review"}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" onClick={() => setRequestOpen(true)}>
                <FileEdit className="size-4" /> Request Change
              </Button>
              <Button size="sm" variant="outline" onClick={() => toast("Print / Export is a prototype action.")}>
                <Printer className="size-4" /> Print / Export
              </Button>
              <Button size="sm" variant="ghost" asChild>
                <Link to="/doctor/patients">
                  <ArrowLeft className="size-4" /> Back to Patients
                </Link>
              </Button>
            </div>
          </div>

          <dl className="mt-6 grid gap-x-6 gap-y-4 border-t border-border pt-5 sm:grid-cols-2 lg:grid-cols-4">
            <Field label="Age" value={`${patient.age} years`} />
            <Field label="Gender" value={patient.gender} />
            <Field label="Diagnosis" value={patient.diagnosis} />
            <Field label="Disease Type" value={patient.diseaseType} />
            <Field label="Severity" value={patient.severity} />
            <Field label="Assigned Doctor" value={patient.assignedDoctor} />
            <Field label="Last Visit" value={patient.lastVisit} />
            <Field label="Next Appointment" value={patient.nextAppointment} />
          </dl>
        </div>

        <Tabs defaultValue="Overview">
          <TabsList className="w-full justify-start overflow-x-auto">
            {tabs.map((t) => (
              <TabsTrigger key={t} value={t}>
                {t}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="Overview" className="mt-4">
            <OverviewTab patient={patient} />
          </TabsContent>
          <TabsContent value="Reports" className="mt-4">
            <ReportsTab patient={patient} onOpen={setReport} />
          </TabsContent>
          <TabsContent value="Treatment" className="mt-4">
            <TreatmentTab patient={patient} />
          </TabsContent>
          <TabsContent value="Doctor Notes" className="mt-4">
            <NotesTab patient={patient} />
          </TabsContent>
          <TabsContent value="Vitals" className="mt-4">
            <VitalsTab patient={patient} />
          </TabsContent>
          <TabsContent value="Timeline" className="mt-4">
            <TimelineTab patient={patient} />
          </TabsContent>
        </Tabs>
      </div>

      <RequestChangeDialog patient={patient} open={requestOpen} onOpenChange={setRequestOpen} />
      <ReportDialog report={report} onClose={() => setReport(null)} />
    </DoctorLayout>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-sm font-medium">{value}</dd>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="clinical-panel">
      <h2 className="border-b border-border px-5 py-3.5 text-sm font-semibold">{title}</h2>
      <div className="p-5">{children}</div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border/70 py-2.5 last:border-0">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-sm font-medium text-right">{value}</span>
    </div>
  );
}

function OverviewTab({ patient }: { patient: Patient }) {
  const values = [
    { label: "CRP", value: patient.clinicalValues.crp, note: "Reference < 5 mg/L" },
    { label: "ESR", value: patient.clinicalValues.esr, note: "Reference < 20 mm/hr" },
    { label: "Fecal Calprotectin", value: patient.clinicalValues.calprotectin, note: "Reference < 50 µg/g" },
    { label: "Weight", value: patient.clinicalValues.weight, note: "Recorded at last visit" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Current Condition">
          <Row label="Disease" value={patient.diagnosis} />
          <Row label="Disease Location" value={patient.diseaseLocation} />
          <Row label="Severity" value={patient.severity} />
          <Row label="Current Status" value={patient.status} />
          <Row label="Diagnosis Date" value={patient.diagnosisDate} />
        </Panel>
        <Panel title="Current Treatment">
          <Row label="Medication" value={patient.currentTreatment.medication} />
          <Row label="Treatment Status" value={patient.currentTreatment.status} />
          <Row label="Treatment Start" value={patient.currentTreatment.start} />
          <Row label="Response" value={patient.currentTreatment.response} />
        </Panel>
      </div>

      <div>
        <h2 className="mb-3 text-sm font-semibold">Latest Clinical Values</h2>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {values.map((v) => (
            <div key={v.label} className="clinical-panel p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{v.label}</p>
              <p className="mt-2 font-display text-2xl font-semibold">{v.value}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">{v.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[11px] text-muted-foreground">
          These values are fictional demonstration data.
        </p>
      </div>
    </div>
  );
}

function ReportsTab({ patient, onOpen }: { patient: Patient; onOpen: (r: ReportEntry) => void }) {
  return (
    <div className="clinical-panel overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/60 text-left text-xs uppercase tracking-wide text-muted-foreground">
              {["Report Type", "Date", "Status", "Doctor", "Action"].map((h) => (
                <th key={h} className="px-4 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {patient.reports.map((r) => (
              <tr key={r.id} className="hover:bg-secondary/40">
                <td className="px-4 py-3.5 font-medium">
                  <span className="flex items-center gap-2">
                    <FileText className="size-4 text-muted-foreground" />
                    {r.type}
                  </span>
                </td>
                <td className="px-4 py-3.5 text-muted-foreground">{r.date}</td>
                <td className="px-4 py-3.5">
                  <MetaBadge>{r.status}</MetaBadge>
                </td>
                <td className="px-4 py-3.5 text-muted-foreground">{r.doctor}</td>
                <td className="px-4 py-3.5">
                  <Button size="sm" variant="outline" onClick={() => onOpen(r)}>
                    View Report
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TreatmentTab({ patient }: { patient: Patient }) {
  return (
    <div className="space-y-6">
      <Panel title="Current Treatment">
        <Row label="Medication" value={patient.currentTreatment.medication} />
        <Row label="Status" value={patient.currentTreatment.status} />
        <Row label="Start Date" value={patient.currentTreatment.start} />
        <Row label="Response" value={patient.currentTreatment.response} />
      </Panel>
      <Panel title="Treatment History">
        <ol className="relative space-y-6 border-l border-border pl-6">
          {patient.treatmentHistory.map((t) => (
            <li key={t.medication + t.period} className="relative">
              <span className="absolute -left-[27px] top-1.5 size-2.5 rounded-full border-2 border-card bg-primary" />
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-medium">{t.medication}</p>
                <MetaBadge>{t.status}</MetaBadge>
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground">{t.period}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.note}</p>
            </li>
          ))}
        </ol>
      </Panel>
    </div>
  );
}

function NotesTab({ patient }: { patient: Patient }) {
  return (
    <div className="space-y-4">
      <p className="flex items-center gap-2 text-xs text-muted-foreground">
        <Lock className="size-3.5" /> Clinical notes are read-only. Use “Request Change” for any correction.
      </p>
      {patient.notes.map((n) => (
        <article key={n.date} className="clinical-panel p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Clinical note</p>
            <p className="text-xs text-muted-foreground">{n.date}</p>
          </div>
          <p className="mt-3 text-sm leading-relaxed">“{n.note}”</p>
          <p className="mt-3 text-xs font-medium">{n.doctor}</p>
        </article>
      ))}
    </div>
  );
}

const metrics = [
  { key: "weight", label: "Weight (kg)" },
  { key: "systolic", label: "Blood Pressure (systolic)" },
  { key: "heartRate", label: "Heart Rate (bpm)" },
  { key: "crp", label: "CRP (mg/L)" },
  { key: "calprotectin", label: "Fecal Calprotectin (µg/g)" },
] as const;

function VitalsTab({ patient }: { patient: Patient }) {
  const [metric, setMetric] = useState<(typeof metrics)[number]["key"]>("crp");
  const current = metrics.find((m) => m.key === metric)!;

  return (
    <section className="clinical-panel">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-3.5">
        <h2 className="text-sm font-semibold">Historical Trend — {current.label}</h2>
        <Select value={metric} onValueChange={(v) => setMetric(v as typeof metric)}>
          <SelectTrigger className="w-56" aria-label="Select metric">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {metrics.map((m) => (
              <SelectItem key={m.key} value={m.key}>
                {m.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="h-80 p-5">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={patient.vitals} margin={{ top: 8, right: 12, bottom: 0, left: -12 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
            <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} />
            <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
            <ReTooltip
              contentStyle={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Line
              type="monotone"
              dataKey={metric}
              name={current.label}
              stroke="var(--color-primary)"
              strokeWidth={2}
              dot={{ r: 3 }}
            />
            {metric === "systolic" && (
              <Line
                type="monotone"
                dataKey="diastolic"
                name="Blood Pressure (diastolic)"
                stroke="var(--color-tone-watch)"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

function TimelineTab({ patient }: { patient: Patient }) {
  return (
    <ol className="space-y-3">
      {patient.timeline.map((t) => (
        <li key={t.date + t.event} className="clinical-panel flex flex-col gap-1 p-5 sm:flex-row sm:gap-6">
          <p className="w-32 shrink-0 text-xs font-medium text-muted-foreground">{t.date}</p>
          <div>
            <p className="text-sm font-medium">{t.event}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function ReportDialog({ report, onClose }: { report: ReportEntry | null; onClose: () => void }) {
  return (
    <Dialog open={!!report} onOpenChange={(o) => !o && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{report?.type}</DialogTitle>
          <DialogDescription>
            {report?.date} · Reported by {report?.doctor}
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">{report?.summary}</p>
        <ul className="mt-2 space-y-1.5 text-sm">
          {report?.findings.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
              {f}
            </li>
          ))}
        </ul>
        <p className="text-[11px] text-muted-foreground">
          Sample prototype report content — fictional demonstration data.
        </p>
      </DialogContent>
    </Dialog>
  );
}

function RequestChangeDialog({
  patient,
  open,
  onOpenChange,
}: {
  patient: Patient;
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) {
  const [type, setType] = useState("Patient Record");
  const [priority, setPriority] = useState("Medium");
  const [description, setDescription] = useState("");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request Change</DialogTitle>
          <DialogDescription>
            Doctors have read-only access. Submit a request for Administration to action.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label>Request Type</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {["Patient Record", "Report", "Treatment Information", "Doctor Notes", "Other"].map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="req-desc">Description</Label>
            <Textarea
              id="req-desc"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the change required..."
            />
          </div>
          <div className="space-y-1.5">
            <Label>Priority</Label>
            <Select value={priority} onValueChange={setPriority}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {["Low", "Medium", "High"].map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => {
              addChangeRequest({
                patientId: patient.id,
                patientName: patient.name,
                type,
                description: description || "No additional detail provided.",
                priority: priority as "Low" | "Medium" | "High",
              });
              setDescription("");
              onOpenChange(false);
              toast.success("Change request submitted to Administration.");
            }}
          >
            Submit Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
