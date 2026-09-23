/* \admin-portal/src/routes/admin.dashboard.tsx */

import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  Users, 
  UserCheck, 
  Activity, 
  Calendar, 
  FileText, 
  FlaskConical, 
  ArrowRight
} from "lucide-react";
import { pendingRequests, doctors, patients } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/dashboard")({
  component: AdminDashboardPage,
});

function AdminDashboardPage() {
  const pendingRequestsList = pendingRequests.filter(
    (r) => r.status === "Pending" || r.status === "In Review"
  );
  const activeCasesCount = patients.filter((p) => p.status !== "Stable").length;

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-[#01292D]">
          Administration Dashboard
        </h1>
        <p className="text-sm text-[#5B7573]">
          Overview of the Meridian IBD clinical platform.
        </p>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Doctors Card */}
        <div className="rounded-xl border border-[#E2DFD7] bg-white p-5 text-card-foreground shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5B7573]">
              Total Doctors
            </span>
            <div className="rounded-lg bg-[#176F66]/10 p-2 text-[#176F66]">
              <Users className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-bold text-[#01292D]">{doctors ? doctors.length : 6}</div>
            <p className="mt-1 text-xs text-[#5B7573]">1 pending verification</p>
          </div>
        </div>

        {/* Patients Card */}
        <div className="rounded-xl border border-[#E2DFD7] bg-white p-5 text-card-foreground shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5B7573]">
              Total Patients
            </span>
            <div className="rounded-lg bg-sky-500/10 p-2 text-sky-600">
              <UserCheck className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-bold text-[#01292D]">{patients.length}</div>
            <p className="mt-1 text-xs text-[#5B7573]">+2 registered this week</p>
          </div>
        </div>

        {/* Active Cases */}
        <div className="rounded-xl border border-[#E2DFD7] bg-white p-5 text-card-foreground shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5B7573]">
              Active Cases
            </span>
            <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-600">
              <Activity className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-bold text-[#01292D]">{activeCasesCount}</div>
            <p className="mt-1 text-xs text-[#5B7573]">2 require attention</p>
          </div>
        </div>

        {/* Today's Appointments */}
        <div className="rounded-xl border border-[#E2DFD7] bg-white p-5 text-card-foreground shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5B7573]">
              Today's Appointments
            </span>
            <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-600">
              <Calendar className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-bold text-[#01292D]">5</div>
            <p className="mt-1 text-xs text-[#5B7573]">4 confirmed · 1 pending</p>
          </div>
        </div>

        {/* Pending Requests Card */}
        <div className="rounded-xl border border-[#E2DFD7] bg-white p-5 text-card-foreground shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5B7573]">
              Pending Requests
            </span>
            <div className="rounded-lg bg-amber-500/10 p-2 text-amber-600">
              <FileText className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-bold text-[#01292D]">{pendingRequestsList.length}</div>
            <p className="mt-1 text-xs text-[#5B7573]">1 high priority</p>
          </div>
        </div>

        {/* Published Research */}
        <div className="rounded-xl border border-[#E2DFD7] bg-white p-5 text-card-foreground shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5B7573]">
              Published Research
            </span>
            <div className="rounded-lg bg-purple-500/10 p-2 text-purple-600">
              <FlaskConical className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-3xl font-bold text-[#01292D]">8</div>
            <p className="mt-1 text-xs text-[#5B7573]">1 awaiting review</p>
          </div>
        </div>
      </div>

      {/* Main Content Split: Pending Requests Table + Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Table Section */}
        <div className="rounded-xl border border-[#E2DFD7] bg-white p-5 text-card-foreground shadow-xs lg:col-span-2">
          <div className="flex items-center justify-between pb-4 border-b border-[#E2DFD7]">
            <div>
              <h2 className="text-base font-bold text-[#01292D]">Pending Requests</h2>
              <p className="text-xs text-[#5B7573]">
                Change requests awaiting administrative review.
              </p>
            </div>
            <Link 
              to="/admin/requests" 
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#176F66] hover:underline"
            >
              View Requests <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto mt-2">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-[#E2DFD7] bg-[#F8F6F0] text-xs font-semibold text-[#5B7573]">
                <tr>
                  <th className="py-2.5 px-3">Request ID</th>
                  <th className="py-2.5 px-3">Requester</th>
                  <th className="py-2.5 px-3">Type</th>
                  <th className="py-2.5 px-3">Patient</th>
                  <th className="py-2.5 px-3">Priority</th>
                  <th className="py-2.5 px-3">Date</th>
                  <th className="py-2.5 px-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2DFD7]">
                {pendingRequests.map((req) => (
                  <tr key={req.id} className="hover:bg-[#F8F6F0]/50 transition-colors">
                    <td className="py-3 px-3 font-mono text-xs font-semibold text-[#01292D]">{req.id}</td>
                    <td className="py-3 px-3 font-medium text-[#01292D]">{req.requester}</td>
                    <td className="py-3 px-3 text-xs text-[#5B7573]">{req.type}</td>
                    <td className="py-3 px-3 font-mono text-xs text-[#01292D]">{req.patient || "—"}</td>
                    <td className="py-3 px-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          req.priority === "High"
                            ? "bg-[#FDF2F2] text-[#9B1C1C]"
                            : req.priority === "Medium"
                              ? "bg-[#FEF8EC] text-[#8A5300]"
                              : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {req.priority}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-xs text-[#5B7573]">{req.date}</td>
                    <td className="py-3 px-3 text-right">
                      <span className="inline-flex items-center rounded-full bg-[#EBF5F4] px-2.5 py-0.5 text-xs font-medium text-[#176F66]">
                        {req.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-xl border border-[#E2DFD7] bg-white p-5 text-card-foreground shadow-xs">
          <h2 className="text-base font-bold text-[#01292D]">Recent Activity</h2>
          <p className="text-xs text-[#5B7573] mb-4">
            Latest actions across the platform.
          </p>

          <ul className="space-y-4 text-xs">
            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#176F66] shrink-0" />
              <div>
                <p className="text-[#01292D]">
                  <strong className="font-semibold">Administrator</strong> updated patient record <span className="font-mono text-xs">P003</span>
                </p>
                <span className="text-[#5B7573] text-[11px]">10 minutes ago</span>
              </div>
            </li>

            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#176F66] shrink-0" />
              <div>
                <p className="text-[#01292D]">
                  <strong className="font-semibold">Dr. Arjun Mehta</strong> submitted a change request <span className="font-mono text-xs">REQ-1024</span>
                </p>
                <span className="text-[#5B7573] text-[11px]">32 minutes ago</span>
              </div>
            </li>

            <li className="flex items-start gap-2.5">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#176F66] shrink-0" />
              <div>
                <p className="text-[#01292D]">
                  <strong className="font-semibold">Administrator</strong> published research article <em>Biologic Response Patterns in IBD</em>
                </p>
                <span className="text-[#5B7573] text-[11px]">1 hour ago</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}