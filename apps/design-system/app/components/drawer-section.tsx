"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Checkbox,
  Input,
  Label,
} from "@unimart/ui";
import { Button } from "@unimart/ui";
import { PanelBottom } from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function DrawerSection() {
  return (
    <section id="drawer" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <PanelBottom className="size-3.5" />
          Component: Drawer
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Drawer
        </h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          A slide-out panel for navigation, filters, and additional context.
        </p>
      </div>

      <ComponentPreview
        title="Filter Drawer"
        description="A bottom drawer for filtering content."
        code={`import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Checkbox,
  Input,
  Label,
  Button,
} from "@unimart/ui";

<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Filter Results</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Filter Products</DrawerTitle>
        <DrawerDescription>
          Narrow down your search by price and condition.
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4 pb-0 space-y-6">
        <div className="grid gap-4">
          <Label className="text-base">Price Range</Label>
          <div className="flex items-center gap-4">
            <div className="grid gap-1.5 flex-1">
              <Label
                htmlFor="min-price"
                className="text-xs text-muted-foreground"
              >
                Min ($)
              </Label>
              <Input id="min-price" type="number" placeholder="0" />
            </div>
            <div className="grid gap-1.5 flex-1">
              <Label
                htmlFor="max-price"
                className="text-xs text-muted-foreground"
              >
                Max ($)
              </Label>
              <Input id="max-price" type="number" placeholder="500" />
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <Label className="text-base">Condition</Label>
          <div className="grid gap-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="condition-new" />
              <Label htmlFor="condition-new" className="font-normal">
                New
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="condition-used" />
              <Label htmlFor="condition-used" className="font-normal">
                Used (Like New)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="condition-good" />
              <Label htmlFor="condition-good" className="font-normal">
                Used (Good)
              </Label>
            </div>
          </div>
        </div>
      </div>
      <DrawerFooter>
        <Button>Apply Filters</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`}
      >
        <div className="flex justify-center">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Filter Results</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Filter Products</DrawerTitle>
                  <DrawerDescription>
                    Narrow down your search by price and condition.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0 space-y-6">
                  <div className="grid gap-4">
                    <Label className="text-base">Price Range</Label>
                    <div className="flex items-center gap-4">
                      <div className="grid gap-1.5 flex-1">
                        <Label
                          htmlFor="min-price"
                          className="text-xs text-muted-foreground"
                        >
                          Min ($)
                        </Label>
                        <Input id="min-price" type="number" placeholder="0" />
                      </div>
                      <div className="grid gap-1.5 flex-1">
                        <Label
                          htmlFor="max-price"
                          className="text-xs text-muted-foreground"
                        >
                          Max ($)
                        </Label>
                        <Input id="max-price" type="number" placeholder="500" />
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <Label className="text-base">Condition</Label>
                    <div className="grid gap-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="condition-new" />
                        <Label htmlFor="condition-new" className="font-normal">
                          New
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="condition-used" />
                        <Label htmlFor="condition-used" className="font-normal">
                          Used (Like New)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="condition-good" />
                        <Label htmlFor="condition-good" className="font-normal">
                          Used (Good)
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Apply Filters</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </ComponentPreview>
    </section>
  );
}
