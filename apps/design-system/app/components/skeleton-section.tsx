"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";

import { Skeleton } from "@unimart/ui";
import { ComponentPreview } from "./component-preview";

export function SkeletonSection() {
  return (
    <section id="skeleton" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <Loader2 className="size-3.5" />
          Component: Skeleton
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Skeleton
        </h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          Use to show a placeholder while content is loading.
        </p>
      </div>

      <ComponentPreview
        title="Card Loading State"
        description="A skeleton loader resembling a user card."
        code={`import { Skeleton } from "@unimart/ui";

<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
      >
        <div className="flex justify-center">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
      </ComponentPreview>
    </section>
  );
}
