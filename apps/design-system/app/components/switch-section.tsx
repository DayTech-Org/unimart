"use client";

import * as React from "react";
import { ToggleLeft } from "lucide-react";

import { Label, Switch } from "@unimart/ui";
import { ComponentPreview } from "./component-preview";

export function SwitchSection() {
  return (
    <section id="switch" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <ToggleLeft className="size-3.5" />
          Component: Switch
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Switch
        </h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          A control that allows the user to toggle between checked and not
          checked.
        </p>
      </div>

      <ComponentPreview
        title="Airplane Mode Switch"
        description="A toggle switch with a label."
        code={`import { Label, Switch } from "@unimart/ui";

<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
      >
        <div className="flex justify-center">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </div>
      </ComponentPreview>
    </section>
  );
}
