import { Checkbox, Label } from "@unimart/ui";
import { CheckSquare } from "lucide-react";
import { ComponentPreview } from "./component-preview";
export function CheckboxSection() {
  return (
    <section id="checkbox" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <CheckSquare className="size-3.5" />
          Component: Checkbox
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">Checkbox</h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>

      <ComponentPreview
        title="Terms Checkbox"
        description="A standard checkbox with a label."
        code={`import { Checkbox, Label } from "@unimart/ui";

<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </ComponentPreview>
    </section>
  );
}
