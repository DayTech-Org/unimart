"use client";

import type { Vendor } from "@unimart/types";
import {
  Button,
  cn,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  VisuallyHidden,
} from "@unimart/ui";
import { CheckCircle2, MapPin, ShoppingBag } from "lucide-react";

interface VendorDetailsSheetProps {
  vendor: Vendor | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function VendorDetailsSheet({ vendor, open, onOpenChange }: VendorDetailsSheetProps) {
  if (!vendor) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md bg-background border-l border-border/40 p-0 overflow-hidden flex flex-col shadow-2xl">
        <VisuallyHidden>
          <SheetHeader>
            <SheetTitle>Vendor Application Details</SheetTitle>
            <SheetDescription>Reviewing application for {vendor.name}</SheetDescription>
          </SheetHeader>
        </VisuallyHidden>

        <div className="px-8 pb-8 flex-1 overflow-y-auto pt-16">
          {/* Identity Section */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">{vendor.name}</h2>
              <div className="flex items-center gap-2 text-muted-foreground/60">
                <span className="text-sm font-lexend lowercase">{vendor.email}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 transition-all hover:bg-emerald-500/10">
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                  <CheckCircle2 className="size-4" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-bold uppercase text-emerald-700">
                    Campus Verified
                  </p>
                  <p className="text-xs text-emerald-600/70">
                    Successfully passed Daystar student authentication.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-6">
            <div className="space-y-4">
              <p className="text-xs font-bold">Marketplace Identity</p>

              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-4 p-3 rounded-xl border border-border bg-surface/30 group hover:border-primary/20 transition-colors">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-background shadow-sm">
                    <MapPin className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <div className="space-y-0.5 text-left">
                    <p className="text-[10px] font-medium text-muted-foreground uppercase">
                      Academic Dept
                    </p>
                    <div className={cn("text-sm font-semibold text-foreground")}>
                      {vendor.department}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl border border-border bg-surface/30 group hover:border-primary/20 transition-colors">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-background shadow-sm">
                    <ShoppingBag className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <div className="space-y-0.5 text-left">
                    <p className="text-[10px] font-medium text-muted-foreground uppercase">
                      Store Category
                    </p>
                    <div className={cn("text-sm font-semibold text-foreground")}>
                      {vendor.category}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Board */}
        <div className="p-8 border-t border-border/10 bg-surface/5">
          <div className="flex flex-col gap-3">
            <Button size="lg" className="w-full">
              Approve Application
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full hover:border-destructive hover:text-destructive-foreground hover:bg-destructive"
            >
              Reject Request
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
