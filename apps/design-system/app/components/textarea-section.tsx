import { Label, Textarea } from "@unimart/ui";
import { Type } from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function TextareaSection() {
  return (
    <section id="textarea" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <Type className="size-3.5" />
          Component: Textarea
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">Textarea</h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          Displays a form textarea or a component that looks like a textarea.
        </p>
      </div>

      <ComponentPreview
        title="Message Field"
        description="A standard textarea for longer inputs."
        code={`import { Label, Textarea } from "@unimart/ui";

<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea placeholder="Type your message here." id="message" />
</div>`}
      >
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Your message</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
      </ComponentPreview>
    </section>
  );
}
