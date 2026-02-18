import { Input, Label } from "@unimart/ui";
import { CaseSensitive } from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function InputSection() {
  return (
    <section id="input" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <CaseSensitive className="size-3.5" />
          Component: Input
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Input
        </h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          Displays a form input field or a component that looks like an input
          field.
        </p>
      </div>

      <ComponentPreview
        title="Input Fields"
        description="Standard text and file inputs."
        code={`import { Input, Label } from "@unimart/ui";

<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>
<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="picture">Picture</Label>
  <Input id="picture" type="file" />
</div>`}
      >
        <div className="space-y-6">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
        </div>
      </ComponentPreview>
    </section>
  );
}
