/* \admin-portal/src/routes/admin.$.tsx */
import { Link, createFileRoute } from "@tanstack/react-router";
import { Construction } from "lucide-react";

import { Button } from "@/components/ui/button";
import { findNavItem } from "@/components/admin/nav-config";

export const Route = createFileRoute("/admin/$")({
  head: () => ({
    meta: [
      { title: "Coming Soon — IBD Administration" },
      {
        name: "description",
        content: "This administration module is part of the [Name] IBD roadmap and not yet built.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ComingSoon,
});

function ComingSoon() {
  const { _splat } = Route.useParams();
  const item = findNavItem(`/admin/${_splat ?? ""}`);
  const Icon = item?.icon ?? Construction;

  return (
    <div className="mx-auto max-w-2xl py-12">
      <div className="rounded-xl border border-border bg-card p-8 text-center shadow-card">
        <span className="mx-auto flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-6" />
        </span>
        <p className="mt-5 inline-block rounded-full border border-border bg-muted px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Coming Soon
        </p>
        <h1 className="mt-3 text-2xl font-semibold">{item?.label ?? "Module"}</h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          This module is part of the [Name] IBD administration roadmap. In this prototype
          iteration only the Administration Dashboard is functional.
        </p>
        <Button asChild className="mt-6">
          <Link to="/admin/dashboard">Back to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
