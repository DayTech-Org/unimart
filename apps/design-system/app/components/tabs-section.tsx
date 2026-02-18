"use client";

import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@unimart/ui";
import {
  ArrowRightLeft,
  CalendarClock,
  CreditCard,
  Layers,
} from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function TabsSection() {
  return (
    <section id="tabs" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <Layers className="size-3.5" />
          Component: Tabs
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Tabs
        </h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          For switching item acquisition modes.
        </p>
      </div>

      <ComponentPreview
        title="Transaction Modes"
        description="Tabs for switching between Buy, Rent, and Swap."
        code={`import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@unimart/ui";
import {
  ArrowRightLeft,
  CalendarClock,
  CreditCard,
} from "lucide-react";

<Tabs defaultValue="buy" className="w-full max-w-[500px]">
  <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-muted/50 rounded-xl">
    <TabsTrigger
      value="buy"
      className="gap-2 py-2 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-lg transition-all"
    >
      <CreditCard className="size-4" />
      Buy
    </TabsTrigger>
    <TabsTrigger
      value="rent"
      className="gap-2 py-2 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-lg transition-all"
    >
      <CalendarClock className="size-4" />
      Rent
    </TabsTrigger>
    <TabsTrigger
      value="swap"
      className="gap-2 py-2 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-lg transition-all"
    >
      <ArrowRightLeft className="size-4" />
      Swap
    </TabsTrigger>
  </TabsList>

  <div className="mt-4">
    <TabsContent value="buy">
      <Card className="border-none shadow-xl bg-gradient-to-br from-card to-secondary/10">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Scientific Calculator</span>
            <span className="text-primary text-xl">KES 4,500</span>
          </CardTitle>
          <CardDescription>
            Casio FX-991EX Classwiz. Slightly used.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full">
            <CreditCard className="mr-2 size-4" /> Buy Now
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
    {/* Other TabsContent... */}
  </div>
</Tabs>`}
      >
        <div className="space-y-4">
          <h4 className="text-lg font-heading font-semibold">
            Acquisition Mode
          </h4>
          <Tabs defaultValue="buy" className="w-full max-w-[500px]">
            <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-muted/50 rounded-xl">
              <TabsTrigger
                value="buy"
                className="gap-2 py-2 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-lg transition-all"
              >
                <CreditCard className="size-4" />
                Buy
              </TabsTrigger>
              <TabsTrigger
                value="rent"
                className="gap-2 py-2 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-lg transition-all"
              >
                <CalendarClock className="size-4" />
                Rent
              </TabsTrigger>
              <TabsTrigger
                value="swap"
                className="gap-2 py-2 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-lg transition-all"
              >
                <ArrowRightLeft className="size-4" />
                Swap
              </TabsTrigger>
            </TabsList>

            <div className="mt-4">
              <TabsContent value="buy">
                <Card className="border-none shadow-xl bg-gradient-to-br from-card to-secondary/10">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>Scientific Calculator</span>
                      <span className="text-primary text-xl">KES 4,500</span>
                    </CardTitle>
                    <CardDescription>
                      Casio FX-991EX Classwiz. Slightly used.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button className="w-full">
                      <CreditCard className="mr-2 size-4" /> Buy Now
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="rent">
                <Card className="border-none shadow-xl bg-gradient-to-br from-card to-secondary/10">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>Semester Rental</span>
                      <span className="text-primary text-xl">
                        KES 500
                        <span className="text-sm text-muted-foreground">
                          /mo
                        </span>
                      </span>
                    </CardTitle>
                    <CardDescription>
                      Rent it for the semester. Deposit required.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="secondary" className="w-full">
                      <CalendarClock className="mr-2 size-4" /> Start Rental
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="swap">
                <Card className="border-none shadow-xl bg-gradient-to-br from-card to-secondary/10">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>Open for Trade</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        Barter
                      </span>
                    </CardTitle>
                    <CardDescription>
                      Looking for: Engineering Drawing Board or Lab Coat (L).
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <ArrowRightLeft className="mr-2 size-4" /> Propose Swap
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </ComponentPreview>
    </section>
  );
}
