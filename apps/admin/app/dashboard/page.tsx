"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { Vendor } from "@unimart/types";
import {
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  cn,
  DataTable,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@unimart/ui";
import {
  ArrowRight,
  ArrowUpDown,
  Check,
  Eye,
  type LucideIcon,
  MoreHorizontal,
  Package2,
  Share,
  ShoppingBag,
  Store,
  Users,
  X,
} from "lucide-react";
import * as React from "react";
import { DisputesSection } from "@/components/dashboard/disputes-section";
import { SignupAnalytics } from "@/components/dashboard/signup-analytics";
import DashboardContentLayout from "@/components/layouts/dashboard-content";
import { VendorDetailsSheet } from "@/components/vendor-details-sheet";

// Sample data
const vendors: Vendor[] = [
  {
    id: "1",
    name: "Emmanuel Korir",
    email: "e.korir@daystar.ac.ke",
    department: "Computer Science",
    category: "Electronics & Tech",
    appliedAt: "5m ago",
    status: "pending",
  },
  {
    id: "2",
    name: "Faith Mutua",
    email: "f.mutua@daystar.ac.ke",
    department: "Business Admin",
    category: "Fashion & Apparel",
    appliedAt: "12m ago",
    status: "pending",
  },
  {
    id: "3",
    name: "Brian Omondi",
    email: "b.omondi@daystar.ac.ke",
    department: "Architecture",
    category: "Art & Stationery",
    appliedAt: "1h ago",
    status: "pending",
  },
];

export default function MarketplaceHub() {
  const [selectedVendor, setSelectedVendor] = React.useState<Vendor | null>(null);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Electronics & Tech": "bg-blue-500/10 text-blue-600 border-blue-500/20",
      "Fashion & Apparel": "bg-rose-500/10 text-rose-600 border-rose-500/20",
      "Art & Stationery": "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
    };
    return colors[category] || "bg-muted/30 text-muted-foreground border-transparent";
  };

  // Column definitions
  const columns: ColumnDef<Vendor>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-transparent p-0 text-[10px] uppercase text-muted-foreground/60 w-fit"
          >
            Vendor
            <ArrowUpDown className="ml-2 h-3 w-3" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const name = row.getValue("name") as string;
        const email = row.original.email;
        return (
          <div className="flex items-center gap-4">
            <Avatar className="size-9 rounded-full border border-border/20">
              <AvatarFallback className="bg-primary/5 text-primary text-xs">
                {name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5">
              <p className="text-sm font-bold text-foreground">{name}</p>
              <p className="text-[10px] text-muted-foreground/50 font-medium">{email}</p>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "department",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-transparent p-0 text-[10px] uppercase text-muted-foreground/60 w-fit"
          >
            Department
            <ArrowUpDown className="ml-2 h-3 w-3" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const department = row.getValue("department") as string;
        return (
          <Badge
            variant="outline"
            className={cn(
              "border-none font-medium whitespace-nowrap",
              department === "Computer Science" && "bg-blue-500/10 text-blue-600",
              department === "Business Admin" && "bg-emerald-500/10 text-emerald-600",
              department === "Architecture" && "bg-purple-500/10 text-purple-600",
              !["Computer Science", "Business Admin", "Architecture"].includes(department) &&
                "bg-muted/30 text-muted-foreground"
            )}
          >
            {department}
          </Badge>
        );
      },
    },
    {
      accessorKey: "category",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-transparent p-0 text-[10px] uppercase text-muted-foreground/60 w-fit"
          >
            Category
            <ArrowUpDown className="ml-2 h-3 w-3" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const category = row.getValue("category") as string;
        return (
          <Badge
            variant="outline"
            className={cn("border-none font-medium whitespace-nowrap", getCategoryColor(category))}
          >
            {category}
          </Badge>
        );
      },
    },
    {
      accessorKey: "appliedAt",
      header: ({ column }) => {
        return (
          <div className="text-right">
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="hover:bg-transparent p-0 text-[10px] uppercase text-muted-foreground/60 w-fit ml-auto transition-colors hover:text-foreground"
            >
              Applied
              <ArrowUpDown className="ml-2 h-3 w-3" />
            </Button>
          </div>
        );
      },
      cell: ({ row }) => (
        <div className="text-right">
          <span className="text-[10px] font-bold text-muted-foreground/30 uppercase whitespace-nowrap">
            {row.getValue("appliedAt")}
          </span>
        </div>
      ),
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <div className="flex items-center justify-end">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-8 rounded-full bg-surface/30 border border-border/5 text-muted-foreground/50 hover:text-foreground hover:bg-surface hover:border-border transition-all duration-300"
              >
                <MoreHorizontal className="size-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              sideOffset={8}
              className="w-56 bg-background border-border p-1 overflow-hidden shadow-2xl z-50 rounded-xl animate-in fade-in zoom-in-95 duration-200"
            >
              <div className="px-3 py-2 border-b border-border mb-1">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  Vendor Actions
                </p>
              </div>
              <div className="space-y-0.5">
                <button
                  type="button"
                  onClick={() => setSelectedVendor(row.original)}
                  className="flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-all duration-200 text-left text-muted-foreground hover:text-foreground hover:bg-surface/50"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background">
                    <Eye className="size-3.5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[13px] leading-tight text-foreground">
                      View Application
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-all duration-200 text-left text-muted-foreground hover:text-foreground hover:bg-surface/50 group"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background group-hover:bg-emerald-500/5 group-hover:text-emerald-500">
                    <Check className="size-3.5" />
                  </div>
                  <div className="flex-1 text-foreground">
                    <p className="font-semibold text-[13px] leading-tight">Approve Vendor</p>
                  </div>
                </button>

                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-all duration-200 text-left text-muted-foreground hover:text-foreground hover:bg-surface/50 group"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background group-hover:bg-rose-500/5 group-hover:text-rose-500">
                    <X className="size-3.5" />
                  </div>
                  <div className="flex-1 text-foreground">
                    <p className="font-semibold text-[13px] leading-tight">Reject Request</p>
                  </div>
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ),
    },
  ];
  return (
    <DashboardContentLayout
      title="Marketplace Hub"
      description="Real-time performance metrics and operational overview."
      breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }, { label: "Overview" }]}
      actions={
        <>
          <Button variant="outline">Insight Hub</Button>
          <Button variant="default">
            <Share className="h-4 w-4" /> Export Audit
          </Button>
        </>
      }
    >
      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPIItem
          title="Gross Revenue"
          value="1,280,450"
          delta="+14.2%"
          icon={ShoppingBag}
          isCurrency
          showTrendPill
        />
        <KPIItem title="Active Merchants" value="2,482" delta="+8.1%" icon={Store} showTrendPill />
        <KPIItem title="Global Users" value="182,500" delta="+12.4%" icon={Users} showTrendPill />
        <KPIItem
          title="Total Products"
          value="45,200"
          delta="+4.2%"
          icon={Package2}
          showTrendPill
        />
      </div>

      {/* Main content grid */}
      <div className="flex flex-col gap-10 mt-8">
        <SignupAnalytics />

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-foreground">Vendor Verification</h3>
              <p className="text-sm text-muted-foreground font-medium opacity-70">
                Review student credentials from Daystar University.
              </p>
            </div>
            <div>
              <Button variant="link" className="text-primary cursor-pointer group text-xs">
                View All
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <DataTable
            columns={columns}
            data={vendors}
            searchKey="name"
            placeholder="Filter vendors by name..."
          />
        </section>

        <DisputesSection />
      </div>

      <VendorDetailsSheet
        vendor={selectedVendor}
        open={!!selectedVendor}
        onOpenChange={(open) => !open && setSelectedVendor(null)}
      />
    </DashboardContentLayout>
  );
}

function KPIItem({
  title,
  value,
  delta,
  icon: Icon,
  showTrendPill = false,
  isCurrency = false,
}: {
  title: string;
  value: string;
  delta: string;
  icon: LucideIcon;
  showTrendPill?: boolean;
  isCurrency?: boolean;
}) {
  const isNegative = delta.startsWith("-");

  return (
    <div
      className={cn(
        "p-6 rounded-xl border border-border bg-surface/50 backdrop-blur-xl flex flex-col justify-between min-h-45 transition-all duration-700 group cursor-default relative overflow-hidden",
        "hover:bg-surface/60 hover:border-primary/20"
      )}
    >
      <div className="flex items-center justify-between relative z-10">
        <div
          className={cn(
            "flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-all shadow-sm"
          )}
        >
          <Icon className="size-5" />
        </div>
        {showTrendPill ? (
          <Badge
            variant="surface"
            className={cn(
              "text-[10px] font-black px-2.5 py-1 border-none bg-surface/80",
              isNegative ? "text-rose-500 bg-rose-500/10" : "text-emerald-500 bg-emerald-500/10"
            )}
          >
            {delta}
          </Badge>
        ) : (
          <div
            className={cn(
              "text-[11px] font-black py-1",
              isNegative ? "text-rose-400" : "text-emerald-400"
            )}
          >
            {delta}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1.5 relative z-10">
        <p className="text-xs uppercase text-muted-foreground/50 group-hover:text-muted-foreground transition-colors">
          {title}
        </p>
        <div className="flex items-baseline gap-2">
          {isCurrency && (
            <span className="text-xs text-muted-foreground/50 group-hover:text-muted-foreground transition-colors">
              Ksh
            </span>
          )}
          <p className="text-3xl font-extrabold text-foreground/90 group-hover:text-foreground transition-colors">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}
