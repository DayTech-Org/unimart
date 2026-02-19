"use client";

import { useTheme } from "@unimart/ui";
import { Monitor, Moon, PaintBucket, Palette, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function ThemesSection() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <section id="themes" className="scroll-mt-24 space-y-8">
        <div className="space-y-3 border-b border-border pb-6">
          <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
            <PaintBucket className="size-3.5" />
            Foundation: Theming
          </div>
          <h3 className="text-3xl font-heading font-bold text-foreground">Theming</h3>
          <p className="text-muted-foreground max-w-2xl font-sans">
            Built-in support for light, mango and dark modes with a robust CSS variable system.
          </p>
        </div>
        <div className="h-[400px] w-full bg-muted/10 animate-pulse rounded-xl" />
      </section>
    );
  }

  return (
    <section id="themes" className="scroll-mt-24 space-y-8">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <PaintBucket className="size-3.5" />
          Foundation: Theming
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">Theming</h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          Built-in support for light, mango and dark modes with a robust CSS variable system.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Interactive Preview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-heading font-semibold">Preview</h4>
            <div className="flex bg-muted/50 p-1 rounded-lg border border-border/50">
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  theme === "light"
                    ? "bg-background text-foreground shadow-sm ring-1 ring-border"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
              >
                <Sun className="size-3.5" />
                Light
              </button>
              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  theme === "dark"
                    ? "bg-background text-foreground shadow-sm ring-1 ring-border"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
              >
                <Moon className="size-3.5" />
                Dark
              </button>
              <button
                type="button"
                onClick={() => setTheme("system")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  theme === "system"
                    ? "bg-background text-foreground shadow-sm ring-1 ring-border"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
              >
                <Monitor className="size-3.5" />
                System
              </button>
              <button
                type="button"
                onClick={() => setTheme("mango")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  theme === "mango"
                    ? "bg-background text-foreground shadow-sm ring-1 ring-border"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
              >
                <Palette className="size-3.5" />
                Mango
              </button>
            </div>
          </div>

          <div className="border border-border rounded-xl overflow-hidden transition-all duration-500 shadow-sm">
            <div className="bg-background text-foreground p-8 min-h-[300px] transition-colors duration-300 flex flex-col items-center justify-center gap-6 relative">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

              <div className="w-full max-w-xs space-y-4 relative z-10">
                <div className="p-6 rounded-xl border border-border bg-card shadow-sm space-y-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <PaintBucket className="size-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm">Theme Card</h5>
                      <p className="text-xs text-muted-foreground">
                        Testing {theme === "system" ? `system (${resolvedTheme})` : theme} mode
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-muted rounded animate-pulse" />
                    <div className="h-2 w-1/2 bg-muted rounded animate-pulse" />
                  </div>

                  <div className="pt-2 flex gap-2">
                    <button
                      type="button"
                      className="flex-1 bg-primary text-primary-foreground text-xs font-medium py-2 rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Primary
                    </button>
                    <button
                      type="button"
                      className="flex-1 bg-secondary text-secondary-foreground text-xs font-medium py-2 rounded-md hover:bg-secondary/80 transition-colors"
                    >
                      Secondary
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between px-2">
                  <span className="text-xs text-muted-foreground">Status</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation / Info */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Usage</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Themes are managed via <code>next-themes</code> which toggles the data-theme
                attribute on the root element.
              </p>
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-lg border border-border bg-card/50 p-4 font-mono text-xs text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="text-pink-500">const</span>
                    <span className="text-foreground">&#123; setTheme &#125;</span>
                    <span className="text-blue-500">=</span>
                    <span className="text-yellow-500">useTheme</span>
                    <span className="text-foreground">()</span>
                  </div>
                  <div className="mt-2 text-foreground/50">{`// Switch to dark mode`}</div>
                  <div className="flex gap-2">
                    <span className="text-yellow-500">setTheme</span>
                    <span className="text-foreground">(</span>
                    <span className="text-green-500">&quot;dark&quot;</span>
                    <span className="text-foreground">)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Available Tokens</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "--background", desc: "Page background" },
                { name: "--foreground", desc: "Body text color" },
                { name: "--card", desc: "Card background" },
                { name: "--popover", desc: "Popover background" },
                { name: "--primary", desc: "Primary brand color" },
                { name: "--secondary", desc: "Secondary brand color" },
              ].map((token) => (
                <div
                  key={token.name}
                  className="flex flex-col gap-1 p-3 rounded-lg border border-border bg-card/30"
                >
                  <code className="text-xs font-mono text-primary font-bold">{token.name}</code>
                  <span className="text-[10px] text-muted-foreground">{token.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
