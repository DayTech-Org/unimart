import { Type } from "lucide-react";

export function TypographySection() {
  return (
    <section id="typography" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <Type className="size-3.5" />
          Foundation: Typography
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Typography
        </h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          Using Lexend for UI and Inter for impact.
        </p>
      </div>

      <div className="grid gap-12 p-8 rounded-3xl bg-card/50 border border-border/50 backdrop-blur-sm">
        <div className="space-y-2">
          <p className="text-[10px] font-mono uppercase text-primary mb-4 tracking-widest">
            Display Text
          </p>
          <h1 className="text-6xl font-heading font-black tracking-tighter">
            Campus Marketplace
          </h1>
          <p className="text-sm font-mono text-muted-foreground">
            font-heading / 6xl / black
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-[10px] font-mono uppercase text-primary mb-4 tracking-widest">
            Body Text
          </p>
          <p className="text-lg leading-relaxed max-w-2xl font-sans text-foreground/80">
            Every product listed on Unimart goes through a rigorous campus
            validation. We ensure that student-to-student commerce is safe,
            fast, and exciting.
          </p>
          <p className="text-sm font-mono text-muted-foreground">
            font-sans / lg / leading-relaxed
          </p>
        </div>
      </div>
    </section>
  );
}
