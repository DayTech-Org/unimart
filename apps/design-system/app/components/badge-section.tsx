import { Badge } from "@unimart/ui";
import { Tag } from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function BadgeSection() {
  return (
    <section id="badges" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <Tag className="size-3.5" />
          Component: Badge
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Badges
        </h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          Status indicators and labels for high-density data.
        </p>
      </div>

      <div className="grid gap-6">
        <ComponentPreview
          title="Badge Variants"
          description="Available styles for different contexts."
          code={`import { Badge } from "@unimart/ui";

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="surface">Surface</Badge>`}
        >
          <div className="flex flex-wrap gap-4 items-center">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="surface">Surface</Badge>
          </div>
        </ComponentPreview>
      </div>
    </section>
  );
}
