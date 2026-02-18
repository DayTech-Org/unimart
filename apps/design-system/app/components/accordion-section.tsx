"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@unimart/ui";
import { DollarSign, Gavel, List, ShieldCheck, User } from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function AccordionSection() {
  return (
    <section id="accordion" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <List className="size-3.5" />
          Component: Accordion
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Accordion
        </h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          Progressive disclosure for trust & safety info.
        </p>
      </div>

      <ComponentPreview
        title="Trust Center Accordion"
        description="A collapsible section for displaying policies or guidelines."
        code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@unimart/ui";
import { DollarSign, Gavel, ShieldCheck, User } from "lucide-react";

<div className="space-y-4 max-w-lg">
  <h4 className="flex items-center gap-2 text-lg font-heading font-semibold">
    <ShieldCheck className="text-primary size-5" /> Trust Center
  </h4>
  <Accordion
    type="single"
    collapsible
    className="w-full bg-card rounded-xl border px-4"
  >
    <AccordionItem value="item-1" className="border-b-0">
      <AccordionTrigger className="hover:no-underline hover:text-primary">
        <span className="flex items-center gap-2">
          <User className="size-4 text-muted-foreground" /> Student
          Verification
        </span>
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground pl-6">
        Every user must verify their campus email (e.g., @daystar.ac.ke)
        before listing items.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2" className="border-t border-b-0">
      <AccordionTrigger className="hover:no-underline hover:text-primary">
        <span className="flex items-center gap-2">
          <DollarSign className="size-4 text-muted-foreground" /> Escrow
          Payment
        </span>
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground pl-6">
        Funds are held safely in M-Pesa escrow until you confirm the
        item is as described.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3" className="border-t border-b-0">
      <AccordionTrigger className="hover:no-underline hover:text-primary">
        <span className="flex items-center gap-2">
          <Gavel className="size-4 text-muted-foreground" /> Dispute
          Resolution
        </span>
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground pl-6">
        Our student mediation team reviews evidence and resolves
        disputes within 24 hours.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</div>`}
      >
        <div className="space-y-4 max-w-lg">
          <h4 className="flex items-center gap-2 text-lg font-heading font-semibold">
            <ShieldCheck className="text-primary size-5" /> Trust Center
          </h4>
          <Accordion
            type="single"
            collapsible
            className="w-full bg-card rounded-xl border px-4"
          >
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="hover:no-underline hover:text-primary">
                <span className="flex items-center gap-2">
                  <User className="size-4 text-muted-foreground" /> Student
                  Verification
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-6">
                Every user must verify their campus email (e.g., @daystar.ac.ke)
                before listing items.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-t border-b-0">
              <AccordionTrigger className="hover:no-underline hover:text-primary">
                <span className="flex items-center gap-2">
                  <DollarSign className="size-4 text-muted-foreground" /> Escrow
                  Payment
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-6">
                Funds are held safely in M-Pesa escrow until you confirm the
                item is as described.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-t border-b-0">
              <AccordionTrigger className="hover:no-underline hover:text-primary">
                <span className="flex items-center gap-2">
                  <Gavel className="size-4 text-muted-foreground" /> Dispute
                  Resolution
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-6">
                Our student mediation team reviews evidence and resolves
                disputes within 24 hours.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ComponentPreview>
    </section>
  );
}
