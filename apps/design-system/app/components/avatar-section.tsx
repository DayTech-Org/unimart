import { Avatar, AvatarFallback, AvatarImage } from "@unimart/ui";
import { User } from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function AvatarSection() {
  return (
    <section id="avatar" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <User className="size-3.5" />
          Component: Avatar
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">Avatar</h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          The visual representation of a campus user. Includes status rings and presence dots.
        </p>
      </div>

      <ComponentPreview
        title="Avatar Variants"
        description="Different sizes and status indicators for user profiles."
        code={`import { Avatar, AvatarFallback, AvatarImage } from "@unimart/ui";

<div className="flex flex-wrap items-center justify-center gap-12">
  {/* Large Presence Avatar */}
  <div className="relative group">
    <Avatar className="h-24 w-24 border-4 border-background ring-4 ring-emerald-500/20 shadow-2xl transition-transform group-hover:scale-105">
      <AvatarImage src="https://github.com/lymore01.png" alt="Lymore" />
      <AvatarFallback className="text-2xl font-bold bg-primary/10">
        LY
      </AvatarFallback>
    </Avatar>
    <span className="absolute bottom-1 right-1 size-6 bg-emerald-500 border-4 border-card rounded-full shadow-sm animate-pulse" />
  </div>

  {/* Medium Marketplace Avatar */}
  <div className="relative">
    <Avatar className="h-16 w-16 border-2 border-background ring-2 ring-primary/10 shadow-lg">
      <AvatarImage src="https://i.pravatar.cc/" alt="User" />
      <AvatarFallback className="font-bold">JD</AvatarFallback>
    </Avatar>
    <span className="absolute bottom-0 right-0 size-4 bg-amber-500 border-2 border-card rounded-full shadow-sm" />
  </div>

  {/* Small Inbox Avatar */}
  <div className="relative">
    <Avatar className="h-10 w-10 border-2 border-background shadow-md">
      <AvatarFallback className="text-xs bg-muted">CN</AvatarFallback>
    </Avatar>
    <span className="absolute -bottom-0.5 -right-0.5 size-3 bg-muted-foreground border-2 border-card rounded-full" />
  </div>

  {/* Verified Ring Variant */}
  <div className="relative">
    <Avatar className="h-16 w-16 border-2 border-background ring-2 ring-blue-500 shadow-lg">
      <AvatarImage src="https://github.com/vercel.png" />
      <AvatarFallback>V</AvatarFallback>
    </Avatar>
  </div>
</div>`}
      >
        <div className="flex flex-wrap items-center justify-center gap-12">
          {/* Large Presence Avatar */}
          <div className="relative group">
            <Avatar className="h-24 w-24 border-4 border-background ring-4 ring-emerald-500/20 shadow-2xl transition-transform group-hover:scale-105">
              <AvatarImage src="https://github.com/lymore01.png" alt="Lymore" />
              <AvatarFallback className="text-2xl font-bold bg-primary/10">LY</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-1 right-1 size-6 bg-emerald-500 border-4 border-card rounded-full shadow-sm animate-pulse" />
          </div>

          {/* Medium Marketplace Avatar */}
          <div className="relative">
            <Avatar className="h-16 w-16 border-2 border-background ring-2 ring-primary/10 shadow-lg">
              <AvatarImage src="https://i.pravatar.cc/" alt="User" />
              <AvatarFallback className="font-bold">JD</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 size-4 bg-amber-500 border-2 border-card rounded-full shadow-sm" />
          </div>

          {/* Small Inbox Avatar */}
          <div className="relative">
            <Avatar className="h-10 w-10 border-2 border-background shadow-md">
              <AvatarFallback className="text-xs bg-muted">CN</AvatarFallback>
            </Avatar>
            <span className="absolute -bottom-0.5 -right-0.5 size-3 bg-muted-foreground border-2 border-card rounded-full" />
          </div>

          {/* Verified Ring Variant */}
          <div className="relative">
            <Avatar className="h-16 w-16 border-2 border-background ring-2 ring-blue-500 shadow-lg">
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>V</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </ComponentPreview>
    </section>
  );
}
