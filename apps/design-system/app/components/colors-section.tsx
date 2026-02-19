import { Palette } from "lucide-react";

export function ColorsSection() {
  const colorCategories = [
    {
      title: "Brand Colors",
      description: "Core brand identity colors used for primary actions and highlights.",
      colors: [
        {
          name: "Primary",
          class: "bg-primary",
          text: "text-primary-foreground",
          border: "border-primary",
        },
        {
          name: "Primary Hover",
          class: "bg-primary-hover",
          text: "text-primary-foreground",
          border: "border-primary-hover",
        },
        {
          name: "Secondary",
          class: "bg-secondary",
          text: "text-secondary-foreground",
          border: "border-secondary",
        },
        {
          name: "Accent",
          class: "bg-accent",
          text: "text-accent-foreground",
          border: "border-accent",
        },
      ],
    },
    {
      title: "Feedback",
      description: "Semantic colors for communicating status and system state.",
      colors: [
        {
          name: "Success",
          class: "bg-success",
          text: "text-white",
          border: "border-success",
        },
        {
          name: "Destructive",
          class: "bg-destructive",
          text: "text-white",
          border: "border-destructive",
        },
      ],
    },
    {
      title: "Backgrounds",
      description: "Layered surfaces for establishing hierarchy and depth.",
      colors: [
        {
          name: "Background",
          class: "bg-background",
          text: "text-foreground",
          border: "border-border",
        },
        {
          name: "Card",
          class: "bg-card",
          text: "text-card-foreground",
          border: "border-border",
        },
        {
          name: "Surface",
          class: "bg-surface",
          text: "text-foreground",
          border: "border-border",
        },
        {
          name: "Popover",
          class: "bg-popover",
          text: "text-popover-foreground",
          border: "border-border",
        },
        {
          name: "Muted",
          class: "bg-muted",
          text: "text-muted-foreground",
          border: "border-border",
        },
      ],
    },
  ];

  const borderColors = [
    { name: "Default", class: "border-border", var: "border" },
    { name: "Input", class: "border-input", var: "input" },
    { name: "Primary", class: "border-primary", var: "primary" },
    { name: "Secondary", class: "border-secondary", var: "secondary" },
    { name: "Destructive", class: "border-destructive", var: "destructive" },
  ];

  const foregroundColors = [
    {
      name: "Default",
      class: "text-foreground",
      bg: "bg-background/30",
    },
    {
      name: "Muted",
      class: "text-muted-foreground",
      bg: "bg-background/30",
    },
    {
      name: "Muted / 50",
      class: "text-muted-foreground/50",
      bg: "bg-background/30",
    },
    {
      name: "On Primary",
      class: "text-primary-foreground",
      bg: "bg-primary",
    },
    {
      name: "Primary",
      class: "text-primary",
      bg: "bg-background/30",
    },
    {
      name: "Destructive",
      class: "text-destructive",
      bg: "bg-background/30",
    },
    {
      name: "Success",
      class: "text-emerald-500",
      bg: "bg-background/30",
    },
    {
      name: "Warning",
      class: "text-amber-500",
      bg: "bg-background/30",
    },
  ];

  return (
    <section id="colors" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <Palette className="size-3.5" />
          Foundation: Colors
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">Color Usage</h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          A comprehensive guide to the semantic color system, optimized for P3 wide gamut displays.
        </p>
      </div>

      <div className="space-y-16">
        {/* Foregrounds Section (Custom Layout) */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h4 className="text-xl font-heading font-semibold">Foregrounds</h4>
            <p className="text-sm text-muted-foreground">
              Text and icon colors relative to their background context.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {foregroundColors.map((color, i) => (
              <div
                key={i}
                className={`relative group flex flex-col items-center justify-center p-8 gap-3 rounded-2xl border border-border/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-primary/20 ${color.bg}`}
              >
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />

                <span
                  className={`text-xl font-heading font-bold tracking-tight z-10 ${color.class}`}
                >
                  Unimart
                </span>

                <div className="flex flex-col items-center gap-1 z-10">
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest opacity-60">
                    {color.name}
                  </span>
                  <code
                    className={`text-[9px] px-2 py-0.5 rounded-md font-mono border border-border/50 ${
                      color.name === "On Primary"
                        ? "bg-white/20 text-white border-white/20"
                        : "bg-muted/50 text-muted-foreground shadow-sm"
                    }`}
                  >
                    {color.class.split(" ")[0]}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Standard Sections */}
        {colorCategories.map((category) => (
          <div key={category.title} className="space-y-6">
            <div className="space-y-1">
              <h4 className="text-xl font-heading font-semibold">{category.title}</h4>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {category.colors.map((color) => (
                <div
                  key={color.name}
                  className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden"
                >
                  <div
                    className={`h-24 w-full ${color.class} relative flex items-center justify-center`}
                  ></div>
                  <div className="p-4 space-y-2">
                    <p className="font-semibold text-sm">{color.name}</p>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-muted-foreground font-mono bg-muted/50 p-1.5 rounded">
                        <span>Class</span>
                        <span className="text-foreground">{color.class}</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-muted-foreground font-mono bg-muted/50 p-1.5 rounded">
                        <span>Usage</span>
                        <span className="text-foreground opacity-70">
                          var(--{color.class.replace("bg-", "")})
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Borders Section (Custom Layout) */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h4 className="text-xl font-heading font-semibold">Borders</h4>
            <p className="text-sm text-muted-foreground">
              Structural elements for separation and definition.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {borderColors.map((border, i) => (
              <div key={i} className="flex flex-col gap-3 group">
                <div
                  className={`h-24 w-full rounded-xl border-[3px] ${border.class} bg-card/30 flex items-center justify-center transition-all duration-300 group-hover:bg-card/50 group-hover:scale-[1.02]`}
                >
                  <span className="text-[10px] text-muted-foreground/50 font-mono">3px</span>
                </div>
                <div className="space-y-1.5 px-1">
                  <p className="font-semibold text-sm">{border.name}</p>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] text-muted-foreground font-mono bg-muted/50 p-1.5 rounded border border-border/40">
                      <span>Class</span>
                      <span className="text-foreground">{border.class}</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-muted-foreground font-mono bg-muted/50 p-1.5 rounded border border-border/40">
                      <span>Var</span>
                      <span className="text-foreground opacity-70">--{border.var}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
