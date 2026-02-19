import { Checkbox, Label } from "@unimart/ui";
import { Tag } from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function LabelSection() {
  return (
    <section id="label" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <Tag className="size-3.5" />
          Component: Label
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">Label</h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          Renders an accessible label associated with controls.
        </p>
      </div>

      <ComponentPreview
        title="Form Label"
        description="An accessible label for a checkbox."
        code={`import { Label, Checkbox } from "@unimart/ui";

<div className="flex items-center space-x-2">
  <Checkbox id="verify-student" />
  <Label htmlFor="verify-student">
    I agree to verify my student status
  </Label>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Checkbox id="verify-student" />
          <Label htmlFor="verify-student">I agree to verify my student status</Label>
        </div>
      </ComponentPreview>
    </section>
  );
}
