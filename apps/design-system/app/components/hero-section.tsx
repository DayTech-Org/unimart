"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@unimart/ui";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="overview"
      className="space-y-8 pt-12 animate-in fade-in slide-in-from-bottom-4 duration-1000"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wide uppercase">
        <Sparkles className="size-3" /> System Architecture
      </div>
      <div className="space-y-4">
        <h2 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tighter leading-[1.1]">
          <span className="text-primary">Unimart</span> Design System
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl font-sans leading-relaxed">
          Design resources for building consistent user experiences
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Atomic",
            desc: "Built on Shadcn primitives.",
            color: "bg-blue-500",
          },
          {
            title: "Mango",
            desc: "OKLCH-powered vibrancy.",
            color: "bg-orange-500",
          },
          {
            title: "Lean",
            desc: "Minimal runtime CSS overhead.",
            color: "bg-green-500",
          },
        ].map((feature, i) => (
          <Card
            key={i}
            className="group relative overflow-hidden hover:border-primary/50 transition-colors"
          >
            <div
              className={`absolute top-0 right-0 size-24 ${feature.color} opacity-5 blur-2xl group-hover:opacity-20 transition-opacity`}
            />
            <CardHeader>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              <CardDescription>{feature.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
