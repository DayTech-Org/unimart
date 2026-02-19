"use client";

import { Button } from "@unimart/ui";
import {
  EmptyState,
  EmptyStateAction,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "@unimart/ui-patterns";
import { Bell, Ghost, RefreshCw, Search, ShieldCheck } from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function EmptyStateSection() {
  return (
    <section id="empty-state" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <Ghost className="size-3.5" />
          Pattern: Empty State
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">Empty State</h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          Placeholders for when data is missing or hasn&apos;t been created yet.
        </p>
      </div>

      <div className="space-y-16">
        <ComponentPreview
          title="Search Results (Action Oriented)"
          description="Empty state for when a search returns no results."
          code={`import { Button } from "@unimart/ui";
import {
  EmptyState,
  EmptyStateAction,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "@unimart/ui-patterns";
import { Search } from "lucide-react";

<div className="rounded-4xl border border-border bg-card p-12 flex items-center justify-center min-h-[400px]">
  <EmptyState>
    <EmptyStateIcon>
      <Search />
    </EmptyStateIcon>
    <EmptyStateTitle>No listings found</EmptyStateTitle>
    <EmptyStateDescription>
      We couldn't find any listings matching your current
      filters. Try removing some filters or search for something else.
    </EmptyStateDescription>
    <EmptyStateAction>
      <Button>Clear all filters</Button>
    </EmptyStateAction>
  </EmptyState>
</div>`}
        >
          <div className="rounded-4xl border border-border bg-card p-2 md:p-12 flex items-center justify-center min-h-[400px]">
            <EmptyState>
              <EmptyStateIcon>
                <Search />
              </EmptyStateIcon>
              <EmptyStateTitle>No listings found</EmptyStateTitle>
              <EmptyStateDescription>
                We couldn&apos;t find any listings matching your current filters. Try removing some
                filters or search for something else.
              </EmptyStateDescription>
              <EmptyStateAction>
                <Button>Clear all filters</Button>
              </EmptyStateAction>
            </EmptyState>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Notifications (Minimalist)"
          description="A simple empty state for feed-based content."
          code={`import {
  EmptyState,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "@unimart/ui-patterns";
import { Bell } from "lucide-react";

<div className="rounded-4xl border border-border bg-card p-12 flex items-center justify-center min-h-[400px]">
  <EmptyState>
    <EmptyStateIcon className="bg-muted/30">
      <Bell />
    </EmptyStateIcon>
    <EmptyStateTitle className="text-xl">
      No new notifications
    </EmptyStateTitle>
    <EmptyStateDescription className="mb-0">
      You're all caught up! Check back later for updates.
    </EmptyStateDescription>
  </EmptyState>
</div>`}
        >
          <div className="rounded-4xl border border-border bg-card p-2 md:p-12 flex items-center justify-center min-h-[400px]">
            <EmptyState>
              <EmptyStateIcon className="bg-muted/30">
                <Bell />
              </EmptyStateIcon>
              <EmptyStateTitle className="text-xl">No new notifications</EmptyStateTitle>
              <EmptyStateDescription className="mb-0">
                You&apos;re all caught up! Check back later for updates.
              </EmptyStateDescription>
            </EmptyState>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Success State (Celebratory)"
          description="Use positive colors to indicate a job well done."
          code={`import { Button } from "@unimart/ui";
import {
  EmptyState,
  EmptyStateAction,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "@unimart/ui-patterns";
import { RefreshCw, ShieldCheck } from "lucide-react";

<div className="rounded-4xl border border-border bg-card p-12 flex items-center justify-center min-h-[400px]">
  <EmptyState>
    <EmptyStateIcon className="bg-emerald-100 text-emerald-600 ring-emerald-100/50 dark:bg-emerald-900/20 dark:text-emerald-400 dark:ring-emerald-900/10">
      <ShieldCheck />
    </EmptyStateIcon>
    <EmptyStateTitle>All disputes resolved</EmptyStateTitle>
    <EmptyStateDescription>
      Great job! There are no active disputes requiring your attention
      right now.
    </EmptyStateDescription>
    <EmptyStateAction>
      <Button variant="outline" className="gap-2">
        <RefreshCw className="size-4" />
        Refresh Queue
      </Button>
    </EmptyStateAction>
  </EmptyState>
</div>`}
        >
          <div className="rounded-4xl border border-border bg-card p-2 md:p-12 flex items-center justify-center min-h-[400px]">
            <EmptyState>
              <EmptyStateIcon className="bg-emerald-100 text-emerald-600 ring-emerald-100/50 dark:bg-emerald-900/20 dark:text-emerald-400 dark:ring-emerald-900/10">
                <ShieldCheck />
              </EmptyStateIcon>
              <EmptyStateTitle>All disputes resolved</EmptyStateTitle>
              <EmptyStateDescription>
                Great job! There are no active disputes requiring your attention right now.
              </EmptyStateDescription>
              <EmptyStateAction>
                <Button variant="outline" className="gap-2">
                  <RefreshCw className="size-4" />
                  Refresh Queue
                </Button>
              </EmptyStateAction>
            </EmptyState>
          </div>
        </ComponentPreview>
      </div>
    </section>
  );
}
