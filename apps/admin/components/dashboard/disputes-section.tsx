"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { Badge, Button, cn, DataTable } from "@unimart/ui";
import { ArrowRight, ArrowUpDown, MessageSquare, MoreHorizontal } from "lucide-react";
import Link from "next/link";

interface Dispute {
  id: string;
  user: { name: string; avatar: string };
  vendor: string;
  reason: string;
  severity: string;
  status: string;
  time: string;
}

const disputes: Dispute[] = [
  {
    id: "DSP-001",
    user: { name: "John Doe", avatar: "JD" },
    vendor: "Gizmo Tech",
    reason: "Damaged item received",
    severity: "critical",
    status: "pending",
    time: "12m ago",
  },
  {
    id: "DSP-002",
    user: { name: "Sarah King", avatar: "SK" },
    vendor: "Fashion Hub",
    reason: "Incorrect size shipped",
    severity: "high",
    status: "investigating",
    time: "1h ago",
  },
  {
    id: "DSP-003",
    user: { name: "Mike Ross", avatar: "MR" },
    vendor: "Daily Eats",
    reason: "Order not delivered",
    severity: "medium",
    status: "pending",
    time: "2h ago",
  },
];

export function DisputesSection() {
  const columns: ColumnDef<Dispute>[] = [
    {
      accessorKey: "id",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-transparent p-0 text-[10px] uppercase text-muted-foreground/60"
        >
          Dispute ID
          <ArrowUpDown className="ml-2 h-3 w-3" />
        </Button>
      ),
      cell: ({ row }) => (
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground/40">
          {row.getValue("id")}
        </span>
      ),
    },
    {
      accessorKey: "reason",
      header: "Reason & Severity",
      cell: ({ row }) => {
        const severity = row.original.severity;
        return (
          <div className="flex items-center gap-3">
            <div className="space-y-0.5">
              <p className="text-sm font-bold text-foreground leading-none">
                {row.getValue("reason")}
              </p>
              <Badge
                variant="outline"
                className={cn(
                  "border-none text-[9px] uppercase p-0 h-auto bg-transparent",
                  severity === "critical"
                    ? "text-rose-500"
                    : severity === "high"
                      ? "text-orange-500"
                      : "text-blue-500"
                )}
              >
                {severity}
              </Badge>
            </div>
          </div>
        );
      },
    },
    {
      id: "parties",
      header: "Involved Parties",
      cell: ({ row }) => (
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">
            <span className="font-bold text-foreground/80">{row.original.user.name}</span>
            <span className="mx-1.5 opacity-30">→</span>
            <span className="font-bold text-foreground/80">{row.original.vendor}</span>
          </p>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "text-xs text-foreground/70 capitalize",
              row.getValue("status") === "pending"
                ? "text-rose-500 animate-pulse"
                : "text-orange-500"
            )}
          >
            {row.getValue("status")}
          </span>
        </div>
      ),
    },
    {
      accessorKey: "time",
      header: ({ column }) => (
        <div className="text-right">
          <Button
            variant="ghost"
            className="hover:bg-transparent p-0 text-[10px] uppercase text-muted-foreground/60 ml-auto"
          >
            Reported
          </Button>
        </div>
      ),
      cell: ({ row }) => (
        <div className="text-right flex items-center justify-end gap-1.5 text-muted-foreground/40 font-bold uppercase text-[10px]">
          {row.getValue("time")}
        </div>
      ),
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <div className="flex items-center justify-end gap-2">
          <Link href={`/dashboard/disputes/${row.original.id}`}>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-3 rounded-lg font-bold text-[10px] gap-2 border border-border/5 hover:bg-surface/50 transition-all"
            >
              <MessageSquare className="size-3" /> Review
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 rounded-full bg-surface/30 border border-border/5 text-muted-foreground/50 hover:text-foreground hover:bg-surface hover:border-border transition-all duration-300"
          >
            <MoreHorizontal className="size-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
            Disputes & Reports
            <Badge
              variant="surface"
              className="bg-rose-500/10 text-rose-500 border-none text-[10px]"
            >
              {disputes.length} Active
            </Badge>
          </h3>
          <p className="text-sm text-muted-foreground font-medium opacity-70">
            Resolution center for marketplace conflicts and safety reports.
          </p>
        </div>
        <Button variant="link" className="text-primary cursor-pointer group text-xs">
          View All Reports
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={disputes}
        searchKey="reason"
        placeholder="Search by reason..."
      />
    </section>
  );
}
