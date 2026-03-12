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
  ArrowDownLeft,
  ArrowUpRight,
  Plus,
  TrendingUp,
  TrendingDown,
  DollarSign,
} from "lucide-react";

const sampleTransactions = [
  {
    id: "1",
    description: "Salary",
    amount: 5000,
    type: "income",
    category: "Employment",
    date: "2026-03-01",
  },
  {
    id: "2",
    description: "Rent Payment",
    amount: 1500,
    type: "expense",
    category: "Housing",
    date: "2026-03-02",
  },
  {
    id: "3",
    description: "Grocery Shopping",
    amount: 120,
    type: "expense",
    category: "Food",
    date: "2026-03-05",
  },
  {
    id: "4",
    description: "Freelance Project",
    amount: 800,
    type: "income",
    category: "Freelance",
    date: "2026-03-07",
  },
  {
    id: "5",
    description: "Electric Bill",
    amount: 85,
    type: "expense",
    category: "Utilities",
    date: "2026-03-10",
  },
];

const categories = [
  { name: "Housing", spent: 1500, budget: 1600, color: "bg-blue-500" },
  { name: "Food", spent: 120, budget: 400, color: "bg-emerald-500" },
  { name: "Utilities", spent: 85, budget: 200, color: "bg-amber-500" },
  { name: "Entertainment", spent: 0, budget: 150, color: "bg-purple-500" },
];

export default function FinancePage() {
  const totalIncome = sampleTransactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = sampleTransactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div className="max-w-6xl mx-auto">
      <PageHeader
        title="Finance Tracker"
        description="Track your income, expenses, and manage budgets."
        badge="Beta"
      />

      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Total Balance</CardDescription>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${balance.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Current month balance
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Income</CardDescription>
            <TrendingUp className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">
              +${totalIncome.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardDescription>Expenses</CardDescription>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              -${totalExpenses.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">This month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="budgets">Budgets</TabsTrigger>
          </TabsList>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Transaction
          </Button>
        </div>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>
                Your latest financial activity. Connect a database to persist
                data.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {sampleTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-3 rounded-lg border"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-9 w-9 rounded-full flex items-center justify-center ${
                          transaction.type === "income"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        {transaction.type === "income" ? (
                          <ArrowDownLeft className="h-4 w-4" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          {transaction.description}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {transaction.category} &middot; {transaction.date}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`font-semibold text-sm ${
                        transaction.type === "income"
                          ? "text-emerald-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.type === "income" ? "+" : "-"}$
                      {transaction.amount.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="budgets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Budgets</CardTitle>
              <CardDescription>
                Track your spending against budgets for each category.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categories.map((cat) => {
                  const percentage = Math.min(
                    (cat.spent / cat.budget) * 100,
                    100
                  );
                  return (
                    <div key={cat.name} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{cat.name}</span>
                        <span className="text-muted-foreground">
                          ${cat.spent} / ${cat.budget}
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary">
                        <div
                          className={`h-full rounded-full ${cat.color} transition-all`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <div className="flex justify-end">
                        <Badge
                          variant={
                            percentage > 90 ? "destructive" : "secondary"
                          }
                          className="text-xs"
                        >
                          {percentage.toFixed(0)}% used
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
