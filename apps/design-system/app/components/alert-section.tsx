"use client";

import { Alert, AlertDescription, AlertTitle } from "@unimart/ui";
import { AlertCircle, CheckCircle2, Info, TriangleAlert } from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function AlertSection() {
  return (
    <section id="alerts" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <AlertCircle className="size-3.5" />
          Component: Callout
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Callouts
        </h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          Critical feedback and system messages.
        </p>
      </div>

      <div className="grid gap-6">
        <ComponentPreview
          title="Variants"
          code={`<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Note</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>

<Alert variant="warning">
  <TriangleAlert className="h-4 w-4" />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>
    Your session is about to expire. Please save your work.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your credit card was declined. Please try a different payment method.
  </AlertDescription>
</Alert>

<Alert variant="success">
  <CheckCircle2 className="h-4 w-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>`}
        >
          <div className="grid gap-4">
            <Alert
              variant="default"
              className="bg-surface/50 border-primary/20"
            >
              <Info className="h-4 w-4" />
              <AlertTitle>Note</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>

            <Alert
              variant="warning"
              className="bg-amber-500/10 border-amber-500/20"
            >
              <TriangleAlert className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                Your session is about to expire. Please save your work.
              </AlertDescription>
            </Alert>

            <Alert
              variant="destructive"
              className="bg-destructive/10 border-destructive/20"
            >
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Your credit card was declined. Please try a different payment
                method.
              </AlertDescription>
            </Alert>

            <Alert
              variant="success"
              className="bg-emerald-500/10 border-emerald-500/20"
            >
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your changes have been saved successfully.
              </AlertDescription>
            </Alert>
          </div>
        </ComponentPreview>
      </div>
    </section>
  );
}
