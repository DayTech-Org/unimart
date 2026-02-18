"use client";

import {
  ConditionBadge,
  SafetyZoneCard,
  SellerCard,
} from "@unimart/ui-patterns";
import { BadgeCheck, Scale, ShieldCheck, Users } from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function MarketplaceSection() {
  return (
    <section id="marketplace" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <BadgeCheck className="size-3.5" />
          Pattern: Marketplace
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Student Marketplace
        </h3>
        <p className="text-muted-foreground max-w-2xl font-sans text-lg">
          UI patterns designed specifically for peer-to-peer student
          transactions, focusing on <span className="font-medium">trust</span>,{" "}
          <span className="font-medium">clarity</span>, and{" "}
          <span className="font-medium">safety</span>.
        </p>
      </div>

      <div className="space-y-16">
        <ComponentPreview
          title="Condition Grading"
          description="Standardized visual indicators for item quality."
          code={`import { ConditionBadge } from "@unimart/ui-patterns";

<div className="flex flex-wrap gap-3">
  <ConditionBadge condition="new" />
  <ConditionBadge condition="like-new" />
  <ConditionBadge condition="good" />
  <ConditionBadge condition="fair" />
  <ConditionBadge condition="poor" />
</div>`}
        >
          <div className="justify-center p-10 rounded-3xl bg-background/10 border border-primary/5 space-y-6">
            <div className="flex flex-wrap gap-3">
              <ConditionBadge condition="new" />
              <ConditionBadge condition="like-new" />
              <ConditionBadge condition="good" />
              <ConditionBadge condition="fair" />
              <ConditionBadge condition="poor" />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Standardized visual indicators help students quickly assess item
              quality at a glance.
            </p>
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Trusted Seller Profile"
          description="A summary card for seller reputation."
          code={`import { SellerCard } from "@unimart/ui-patterns";

<SellerCard
  name="Sarah Jenkins"
  major="Computer Science '25"
  rating={4.8}
  totalReviews={42}
  isVerifiedStudent={true}
/>`}
        >
          <div className="flex justify-center p-10 rounded-3xl bg-background/10 border border-primary/5">
            <SellerCard
              name="Sarah Jenkins"
              major="Computer Science '25"
              rating={4.8}
              totalReviews={42}
              isVerifiedStudent={true}
            />
          </div>
        </ComponentPreview>

        <ComponentPreview
          title="Campus Safety Zones"
          description="Designated locations for safe exchanges."
          code={`import { SafetyZoneCard } from "@unimart/ui-patterns";

<SafetyZoneCard
  locationName="PAC"
  description="24/7 staffed reception area. Best for high-value item exchanges like laptops or phones."
/>`}
        >
          <div className="flex justify-center p-10 rounded-3xl bg-background/10 border border-primary/5">
            <SafetyZoneCard
              locationName="PAC"
              description="24/7 staffed reception area. Best for high-value item exchanges like laptops or phones."
            />
          </div>
        </ComponentPreview>
      </div>
    </section>
  );
}
