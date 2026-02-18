"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Textarea,
} from "@unimart/ui";
import { DollarSign, Info, MessageSquare } from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function DialogSection() {
  return (
    <section id="dialog" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <MessageSquare className="size-3.5" />
          Component: Dialog
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Dialog
        </h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          Complex interactions (e.g., Negotiation).
        </p>
      </div>

      <div className="grid gap-6">
        <ComponentPreview
          title="Negotiation Dialog"
          description="A complex dialog example with form inputs."
          code={`import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Textarea,
} from "@unimart/ui";
import { DollarSign, Info } from "lucide-react";

<Dialog>
  <DialogTrigger asChild>
    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-900/20">
      <DollarSign className="mr-2 size-4" /> Negotiate Price
    </Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md bg-background">
    <DialogHeader>
      <DialogTitle>Make an Offer</DialogTitle>
      <DialogDescription>
        The seller has listed this item for{" "}
        <span className="font-bold text-foreground">KES 4,500</span>.
      </DialogDescription>
    </DialogHeader>

    <div className="grid gap-6 py-4">
      <div className="space-y-2">
        <Label>Your Offer (KES)</Label>
        <div className="relative">
          <span className="absolute left-3 top-2.5 text-muted-foreground text-sm font-medium">
            KES
          </span>
          <Input className="pl-12" placeholder="4500" type="number" />
        </div>
        <div className="flex gap-2">
          {["-5%", "-10%", "-20%"].map((discount) => (
            <button
              key={discount}
              className="text-xs border rounded-full px-3 py-1 hover:bg-muted transition-colors"
            >
              {discount}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label>Message (Optional)</Label>
        <Textarea placeholder="I can pick it up at the Student Center..." />
      </div>
    </div>

    <DialogFooter className="sm:justify-between">
      <div className="flex items-center text-xs text-muted-foreground">
        <Info className="mr-1 size-3" /> Offer expires in 24h
      </div>
      <Button type="submit">Submit Offer</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
        >
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">
              Make an Offer
            </h4>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-900/20">
                  <DollarSign className="mr-2 size-4" /> Negotiate Price
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-background">
                <DialogHeader>
                  <DialogTitle>Make an Offer</DialogTitle>
                  <DialogDescription>
                    The seller has listed this item for{" "}
                    <span className="font-bold text-foreground">KES 4,500</span>
                    .
                  </DialogDescription>
                </DialogHeader>

                <div className="grid gap-6 py-4">
                  <div className="space-y-2">
                    <Label>Your Offer (KES)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-muted-foreground text-sm font-medium">
                        KES
                      </span>
                      <Input
                        className="pl-12"
                        placeholder="4500"
                        type="number"
                      />
                    </div>
                    <div className="flex gap-2">
                      {["-5%", "-10%", "-20%"].map((discount) => (
                        <button
                          key={discount}
                          className="text-xs border rounded-full px-3 py-1 hover:bg-muted transition-colors"
                        >
                          {discount}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Message (Optional)</Label>
                    <Textarea placeholder="I can pick it up at the Student Center..." />
                  </div>
                </div>

                <DialogFooter className="sm:justify-between">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Info className="mr-1 size-3" /> Offer expires in 24h
                  </div>
                  <Button type="submit">Submit Offer</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </ComponentPreview>
      </div>
    </section>
  );
}
