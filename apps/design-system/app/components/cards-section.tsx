import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@unimart/ui";
import { Bell, ChevronRight, Layout, Star } from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function CardsSection() {
  return (
    <section id="cards" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <Layout className="size-3.5" />
          Component: Card
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Cards
        </h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          Displays a card with header, content, and footer.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <ComponentPreview
          title="Notification Card"
          description="Used for displaying lists of activity or updates."
          code={`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button
} from "@unimart/ui";
import { Bell, ChevronRight } from "lucide-react";

<Card className="border-none shadow-2xl bg-linear-to-b from-card to-card/50">
  <CardHeader>
    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
      <Bell className="size-5 text-primary" />
    </div>
    <CardTitle>Activity Feed</CardTitle>
    <CardDescription>
      Real-time updates from your campus.
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    {[1, 2].map((i) => (
      <div
        key={i}
        className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors cursor-pointer"
      >
        <div className="size-2 rounded-full bg-primary animate-pulse" />
        <div className="flex-1">
          <p className="text-sm font-bold">New Listing: iPhone 15</p>
          <p className="text-xs text-muted-foreground">
            Posted in Electronics • 2m ago
          </p>
        </div>
        <ChevronRight className="size-4 text-muted-foreground" />
      </div>
    ))}
  </CardContent>
  <CardFooter>
    <Button variant="link" className="px-0">
      View all notifications
    </Button>
  </CardFooter>
</Card>`}
        >
          <Card className="border-none shadow-2xl bg-linear-to-b from-card to-card/50">
            <CardHeader>
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Bell className="size-5 text-primary" />
              </div>
              <CardTitle>Activity Feed</CardTitle>
              <CardDescription>
                Real-time updates from your campus.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="size-2 rounded-full bg-primary animate-pulse" />
                  <div className="flex-1">
                    <p className="text-sm font-bold">New Listing: iPhone 15</p>
                    <p className="text-xs text-muted-foreground">
                      Posted in Electronics • 2m ago
                    </p>
                  </div>
                  <ChevronRight className="size-4 text-muted-foreground" />
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="link" className="px-0">
                View all notifications
              </Button>
            </CardFooter>
          </Card>
        </ComponentPreview>

        <ComponentPreview
          title="Seller Profile Card"
          description="Detailed card with rating and metrics."
          code={`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button
} from "@unimart/ui";
import { Star } from "lucide-react";

<Card className="border-primary/10 bg-card">
  <CardHeader className="flex-row items-start justify-between">
    <div className="space-y-1">
      <CardTitle>Seller Rating</CardTitle>
      <CardDescription>Based on 48 transactions.</CardDescription>
    </div>
    <div className="flex items-center gap-1 bg-primary/20 px-2 py-1 rounded-md">
      <Star className="size-3 text-primary fill-primary" />
      <span className="text-xs font-bold text-primary">4.9</span>
    </div>
  </CardHeader>
  <CardContent>
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
          <span>Trust Score</span>
          <span>98%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
          <div className="h-full w-[98%] bg-primary transition-all duration-1000" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="size-8 rounded-full border-2 border-card bg-muted flex items-center justify-center text-[10px] font-bold"
            >
              U{i}
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground flex items-center">
          +45 other students recommend this seller
        </p>
      </div>
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full" variant="outline">
      Review Seller History
    </Button>
  </CardFooter>
</Card>`}
        >
          <Card className="border-primary/10 bg-card">
            <CardHeader className="flex-row items-start justify-between">
              <div className="space-y-1">
                <CardTitle>Seller Rating</CardTitle>
                <CardDescription>Based on 48 transactions.</CardDescription>
              </div>
              <div className="flex items-center gap-1 bg-primary/20 px-2 py-1 rounded-md">
                <Star className="size-3 text-primary fill-primary" />
                <span className="text-xs font-bold text-primary">4.9</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                    <span>Trust Score</span>
                    <span>98%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-[98%] bg-primary transition-all duration-1000" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="size-8 rounded-full border-2 border-card bg-muted flex items-center justify-center text-[10px] font-bold"
                      >
                        U{i}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    +45 other students recommend this seller
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Review Seller History
              </Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
      </div>
    </section>
  );
}
