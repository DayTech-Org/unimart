"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@unimart/ui";
import { AlertCircle, Clock, HelpCircle, Info, Sparkles } from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function TooltipSection() {
  return (
    <section id="tooltip" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <Info className="size-3.5" />
          Component: Tooltip
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Tooltip
        </h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          Contextual help for marketplace terminology.
        </p>
      </div>

      <ComponentPreview
        title="Item Condition Tooltips"
        description="Tooltips explaining item conditions and terms."
        code={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@unimart/ui";
import { AlertCircle, Clock, HelpCircle, Sparkles } from "lucide-react";

<div className="flex items-center gap-3">
  <span className="text-sm text-muted-foreground">Condition:</span>
  <TooltipProvider>
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300 cursor-help dashed underline underline-offset-4 decoration-emerald-300/50">
          Mint <HelpCircle className="size-3" />
        </span>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-[200px] p-4">
        <div className="space-y-2">
          <h5 className="font-bold text-emerald-500 flex items-center gap-2">
            <Sparkles className="size-3" /> Mint Condition
          </h5>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Item is perfect. Original packaging. No signs of wear.
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>

  <TooltipProvider>
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 dark:bg-amber-900/30 px-2.5 py-0.5 text-xs font-semibold text-amber-800 dark:text-amber-300 cursor-help dashed underline underline-offset-4 decoration-amber-300/50">
          Used <AlertCircle className="size-3" />
        </span>
      </TooltipTrigger>
      <TooltipContent side="right" className="max-w-[200px] p-4">
        <div className="space-y-2">
          <h5 className="font-bold text-amber-500 flex items-center gap-2">
            <Clock className="size-3" /> Used - Good
          </h5>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Minor cosmetic wear. Fully functional. No structural
            damage.
          </p>
        </div>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</div>`}
      >
        <div className="space-y-4">
          <h4 className="text-lg font-heading font-semibold">Item Condition</h4>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Condition:</span>
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300 cursor-help dashed underline underline-offset-4 decoration-emerald-300/50">
                    Mint <HelpCircle className="size-3" />
                  </span>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-[200px] p-4">
                  <div className="space-y-2">
                    <h5 className="font-bold text-emerald-500 flex items-center gap-2">
                      <Sparkles className="size-3" /> Mint Condition
                    </h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Item is perfect. Original packaging. No signs of wear.
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 dark:bg-amber-900/30 px-2.5 py-0.5 text-xs font-semibold text-amber-800 dark:text-amber-300 cursor-help dashed underline underline-offset-4 decoration-amber-300/50">
                    Used <AlertCircle className="size-3" />
                  </span>
                </TooltipTrigger>
                <TooltipContent side="right" className="max-w-[200px] p-4">
                  <div className="space-y-2">
                    <h5 className="font-bold text-amber-500 flex items-center gap-2">
                      <Clock className="size-3" /> Used - Good
                    </h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Minor cosmetic wear. Fully functional. No structural
                      damage.
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </ComponentPreview>
    </section>
  );
}
