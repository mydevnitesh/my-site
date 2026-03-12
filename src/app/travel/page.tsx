"use client";

import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Plus,
  Plane,
  Bell,
  ExternalLink,
  ArrowRight,
  MapPin,
} from "lucide-react";

const sampleDeals = [
  {
    id: "1",
    origin: "New York (JFK)",
    destination: "London (LHR)",
    price: 389,
    airline: "British Airways",
    departDate: "2026-06-15",
    returnDate: "2026-06-22",
    source: "Google Flights",
    url: "https://example.com",
  },
  {
    id: "2",
    origin: "San Francisco (SFO)",
    destination: "Tokyo (NRT)",
    price: 520,
    airline: "ANA",
    departDate: "2026-07-01",
    returnDate: "2026-07-14",
    source: "Skyscanner",
    url: "https://example.com",
  },
  {
    id: "3",
    origin: "Chicago (ORD)",
    destination: "Paris (CDG)",
    price: 445,
    airline: "Air France",
    departDate: "2026-05-20",
    returnDate: "2026-05-28",
    source: "Google Flights",
    url: "https://example.com",
  },
  {
    id: "4",
    origin: "Los Angeles (LAX)",
    destination: "Bali (DPS)",
    price: 610,
    airline: "Singapore Airlines",
    departDate: "2026-08-10",
    returnDate: "2026-08-24",
    source: "Kayak",
    url: "https://example.com",
  },
];

const sampleAlerts = [
  {
    id: "1",
    origin: "New York",
    destination: "London",
    maxPrice: 500,
    active: true,
  },
  {
    id: "2",
    origin: "San Francisco",
    destination: "Tokyo",
    maxPrice: 600,
    active: true,
  },
  {
    id: "3",
    origin: "Chicago",
    destination: "Cancun",
    maxPrice: 300,
    active: false,
  },
];

export default function TravelPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader
        title="Travel Deals"
        description="Find cheap flights and set up price alerts for your favorite routes."
        badge="Beta"
      />

      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Deals Found</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sampleDeals.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Latest scraped results
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Active Alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {sampleAlerts.filter((a) => a.active).length}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Monitoring prices
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Best Price</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">
              ${Math.min(...sampleDeals.map((d) => d.price))}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Lowest fare found
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="deals" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="deals">Deals</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
          </TabsList>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Alert
          </Button>
        </div>

        <TabsContent value="deals" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {sampleDeals.map((deal) => (
              <Card key={deal.id}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-purple-50 flex items-center justify-center">
                        <Plane className="h-4 w-4 text-purple-600" />
                      </div>
                      <span className="text-sm font-medium">
                        {deal.airline}
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-emerald-600">
                      ${deal.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm font-medium">{deal.origin}</span>
                    </div>
                    <ArrowRight className="h-3 w-3 text-muted-foreground" />
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm font-medium">
                        {deal.destination}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                      {deal.departDate} - {deal.returnDate}
                    </span>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {deal.source}
                      </Badge>
                      {deal.url && (
                        <a
                          href={deal.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-foreground"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Price Alerts</CardTitle>
              <CardDescription>
                Get notified when prices drop below your target.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {sampleAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-center justify-between p-3 rounded-lg border"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          alert.active
                            ? "bg-blue-50 text-blue-600"
                            : "bg-gray-50 text-gray-400"
                        }`}
                      >
                        <Bell className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          {alert.origin} to {alert.destination}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Max price: ${alert.maxPrice}
                        </p>
                      </div>
                    </div>
                    <Badge variant={alert.active ? "default" : "secondary"}>
                      {alert.active ? "Active" : "Paused"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Travel Scraping API</CardTitle>
              <CardDescription>
                Use these API endpoints to programmatically access travel deals.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-emerald-600">GET</Badge>
                    <code className="text-sm font-mono">
                      /api/travel/deals
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fetch all travel deals. Supports query params:{" "}
                    <code>origin</code>, <code>destination</code>,{" "}
                    <code>maxPrice</code>
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-600">POST</Badge>
                    <code className="text-sm font-mono">
                      /api/travel/alerts
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Create a new price alert. Body: <code>origin</code>,{" "}
                    <code>destination</code>, <code>maxPrice</code>
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-amber-600">POST</Badge>
                    <code className="text-sm font-mono">
                      /api/travel/scrape
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Trigger a new scrape for a route. Body: <code>origin</code>,{" "}
                    <code>destination</code>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
