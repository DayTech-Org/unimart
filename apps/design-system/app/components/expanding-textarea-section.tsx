"use client";

import { ExpandingTextarea } from "@unimart/ui";
import { TextSelect } from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function ExpandingTextareaSection() {
  return (
    <section id="expanding-textarea" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <TextSelect className="size-3.5" />
          Component: Expanding Textarea
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Expanding Textarea
        </h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          A textarea that automatically expands as you type.
        </p>
      </div>

      <ComponentPreview
        title="Auto-Growing Input"
        description="Textarea that adjusts its height based on content."
        code={`import { ExpandingTextarea } from "@unimart/ui";

<ExpandingTextarea placeholder="Type something here..." />`}
      >
        <div className="flex justify-center">
          <ExpandingTextarea placeholder="Type something here..." />
        </div>
      </ComponentPreview>
    </section>
  );
}
