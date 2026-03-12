"use client";

import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Plus,
  Building2,
  ExternalLink,
  Calendar,
  Briefcase,
} from "lucide-react";

const statusConfig: Record<
  string,
  { label: string; variant: "default" | "secondary" | "destructive" | "outline" }
> = {
  applied: { label: "Applied", variant: "secondary" },
  interviewing: { label: "Interviewing", variant: "default" },
  offered: { label: "Offered", variant: "outline" },
  rejected: { label: "Rejected", variant: "destructive" },
  accepted: { label: "Accepted", variant: "default" },
};

const sampleApplications = [
  {
    id: "1",
    company: "TechCorp Inc.",
    position: "Senior Frontend Developer",
    status: "interviewing",
    salary: "$120k - $150k",
    appliedDate: "2026-03-01",
    url: "https://example.com",
    notes: "Had first round, waiting for technical",
  },
  {
    id: "2",
    company: "StartupXYZ",
    position: "Full Stack Engineer",
    status: "applied",
    salary: "$100k - $130k",
    appliedDate: "2026-03-05",
    url: "https://example.com",
    notes: null,
  },
  {
    id: "3",
    company: "BigBank Co.",
    position: "React Developer",
    status: "offered",
    salary: "$140k",
    appliedDate: "2026-02-20",
    url: "https://example.com",
    notes: "Offer received, reviewing terms",
  },
  {
    id: "4",
    company: "MegaCorp",
    position: "Software Engineer II",
    status: "rejected",
    salary: "$110k - $135k",
    appliedDate: "2026-02-15",
    url: null,
    notes: "Rejected after final round",
  },
  {
    id: "5",
    company: "InnovateLab",
    position: "Frontend Lead",
    status: "applied",
    salary: "$130k - $160k",
    appliedDate: "2026-03-10",
    url: "https://example.com",
    notes: null,
  },
];

export default function JobsPage() {
  const stats = {
    total: sampleApplications.length,
    active: sampleApplications.filter(
      (a) => !["rejected", "accepted"].includes(a.status)
    ).length,
    interviews: sampleApplications.filter((a) => a.status === "interviewing")
      .length,
    offers: sampleApplications.filter((a) => a.status === "offered").length,
  };

  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader
        title="Job Hunter"
        description="Track your job applications and manage your search."
        badge="Beta"
      />

      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Applied</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Active</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {stats.active}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Interviews</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">
              {stats.interviews}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Offers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">
              {stats.offers}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
          </TabsList>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Application
          </Button>
        </div>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4">
            {sampleApplications.map((app) => (
              <ApplicationCard key={app.id} application={app} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4">
            {sampleApplications
              .filter((a) => !["rejected", "accepted"].includes(a.status))
              .map((app) => (
                <ApplicationCard key={app.id} application={app} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="closed" className="space-y-4">
          <div className="grid gap-4">
            {sampleApplications
              .filter((a) => ["rejected", "accepted"].includes(a.status))
              .map((app) => (
                <ApplicationCard key={app.id} application={app} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ApplicationCard({
  application,
}: {
  application: (typeof sampleApplications)[number];
}) {
  const status = statusConfig[application.status];

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
              <Building2 className="h-5 w-5 text-muted-foreground" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold">{application.position}</h3>
                <Badge variant={status.variant}>{status.label}</Badge>
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Briefcase className="h-3 w-3" />
                {application.company}
              </p>
              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                {application.salary && (
                  <span className="font-medium text-foreground">
                    {application.salary}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Applied {application.appliedDate}
                </span>
              </div>
              {application.notes && (
                <p className="text-sm text-muted-foreground mt-2 italic">
                  {application.notes}
                </p>
              )}
            </div>
          </div>
          {application.url && (
            <a
              href={application.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-9 w-9 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
