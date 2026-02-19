"use client";

import { Button, toast } from "@unimart/ui";
import { Bell } from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function SonnerSection() {
  return (
    <section id="sonner" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <Bell className="size-3.5" />
          Component: Sonner
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">Sonner</h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          An opinionated toast component for React.
        </p>
      </div>

      <ComponentPreview
        title="Toast Button"
        description="A button that triggers a toast notification."
        code={`import { Button, toast } from "@unimart/ui";

<Button
  variant="outline"
  onClick={() =>
    toast.success("Item listed successfully", {
      description:
        "Your 'Iphone 14 pro' is now live on the marketplace.",
      action: {
        label: "View Listing",
        onClick: () => console.log("View Listing"),
      },
    })
  }
>
  List Item
</Button>`}
      >
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={() =>
              toast.success("Item listed successfully", {
                description: "Your 'Iphone 14 pro' is now live on the marketplace.",
                action: {
                  label: "View Listing",
                  onClick: () => console.log("View Listing"),
                },
              })
            }
          >
            List Item
          </Button>
        </div>
      </ComponentPreview>
    </section>
  );
}
