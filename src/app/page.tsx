import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wallet, Briefcase, Plane, ArrowRight } from "lucide-react";

const apps = [
  {
    title: "Finance Tracker",
    description:
      "Track your income, expenses, and budgets. Get insights into your spending patterns and stay on top of your finances.",
    href: "/finance",
    icon: Wallet,
    badge: "Active",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    features: ["Track transactions", "Set budgets", "Expense categories"],
  },
  {
    title: "Job Hunter",
    description:
      "Organize your job search. Track applications, interviews, and offers all in one place.",
    href: "/job-hunt",
    icon: Briefcase,
    badge: "Active",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    features: ["Track applications", "Status pipeline", "Company notes"],
  },
  {
    title: "Travel Deals",
    description:
      "Find and track travel deals. Set up alerts for price drops on your favorite destinations.",
    href: "/travel",
    icon: Plane,
    badge: "Active",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    features: ["Price tracking", "Deal alerts", "Scraping API"],
  },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-3">
          Welcome back!
        </h1>
        <p className="text-lg text-muted-foreground">
          Your personal apps hub. Pick a tool to get started.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <Link key={app.href} href={app.href} className="group">
            <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/20 group-hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`h-12 w-12 rounded-xl ${app.bgColor} flex items-center justify-center`}
                  >
                    <app.icon className={`h-6 w-6 ${app.color}`} />
                  </div>
                  <Badge variant="secondary">{app.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{app.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {app.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-accent"
                >
                  Open App
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Transactions</CardDescription>
            <CardTitle className="text-3xl font-bold">--</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Connect your database to see stats
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Active Applications</CardDescription>
            <CardTitle className="text-3xl font-bold">--</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Connect your database to see stats
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Travel Alerts</CardDescription>
            <CardTitle className="text-3xl font-bold">--</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Connect your database to see stats
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
