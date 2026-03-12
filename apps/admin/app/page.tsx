import { auth, signOut } from "@unimart/auth";
import { Button } from "@unimart/ui";
import {
  ArrowUpRight,
  BarChart3,
  Package,
  ShieldAlert,
  ShoppingBag,
  TrendingUp,
  Users,
} from "lucide-react";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
  const session = await auth();

  // Basic check: if not logged in, redirect to login
  // In a real app, you'd also check for an 'admin' role
  if (!session) {
    redirect("/api/auth/signin");
  }

  const stats = [
    {
      name: "Total Users",
      value: "2,543",
      icon: Users,
      change: "+12.5%",
      trend: "up",
    },
    {
      name: "Active Listings",
      value: "1,200",
      icon: Package,
      change: "+3.2%",
      trend: "up",
    },
    {
      name: "Sales Velocity",
      value: "48 / day",
      icon: TrendingUp,
      change: "+18%",
      trend: "up",
    },
    {
      name: "Reports",
      value: "12",
      icon: ShieldAlert,
      change: "-5%",
      trend: "down",
    },
  ];

  return (
    <div className="min-h-screen bg-muted/30 p-8">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {session.user?.name || "Admin"}.</p>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            className="rounded-lg bg-primary px-4 py-2 text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
          >
            Export Data
          </button>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button type="submit" variant="outline">
              Logout
            </Button>
          </form>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="rounded-lg bg-primary/10 p-2 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <stat.icon size={24} />
              </div>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  stat.trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.name}
              </p>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all group-hover:w-full" />
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <BarChart3 size={18} className="text-primary" />
              Platform Activity
            </h2>
            <button
              type="button"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              View All <ArrowUpRight size={14} />
            </button>
          </div>
          <div className="flex h-64 items-center justify-center rounded-lg border border-dashed text-muted-foregroundBg-muted/20">
            [Chart Placeholder: User Engagement]
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <ShoppingBag size={18} className="text-primary" />
              Recent Transactions
            </h2>
            <button
              type="button"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              View All <ArrowUpRight size={14} />
            </button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">MacBook Air M2</p>
                    <p className="text-xs text-muted-foreground">Order #34{i}9 • 2 min ago</p>
                  </div>
                </div>
                <p className="font-semibold text-foreground">$1,200.00</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
