"use client";

import { Toggle } from "@unimart/ui";
import { Italic, ToggleRight } from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function ToggleSection() {
  return (
    <section id="toggle" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <ToggleRight className="size-3.5" />
          Component: Toggle
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">Toggle</h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          A two-state button that can be either on or off.
        </p>
      </div>

      <ComponentPreview
        title="Bold Toggle"
        description="A simple toggle button."
        code={`import { Toggle } from "@unimart/ui";
import { Italic } from "lucide-react";

<Toggle aria-label="Toggle bold" className="bg-muted/50">
  <Italic className="h-4 w-4" />
</Toggle>`}
      >
        <div className="flex justify-center">
          <Toggle aria-label="Toggle bold" className="bg-muted/50">
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>
      </ComponentPreview>
    </section>
  );
}
