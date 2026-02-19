import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@unimart/ui";
import {
  AlertCircle,
  BookOpen,
  CheckCircle2,
  Clock,
  Coffee,
  HelpCircle,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
import { ComponentPreview } from "./component-preview";

const campusOrders = [
  {
    id: "ORD-7721",
    item: "Organic Chemistry II (Hardcover)",
    category: "Textbooks",
    icon: BookOpen,
    buyer: { name: "Mbavu", avatar: "https://github.com/shadcn.png" },
    status: "completed",
    amount: "KSH 2,500.00",
    method: "M-Pesa",
  },
  {
    id: "ORD-8829",
    item: "iPhone 13 - 128GB (Blue)",
    category: "Electronics",
    icon: Smartphone,
    buyer: { name: "Majembe", avatar: "" },
    status: "pending",
    amount: "KSH 45,000.00",
    method: "In-App Credits",
    iconColor: "text-blue-500",
  },
  {
    id: "ORD-9901",
    item: "Dorm Microwave (Used 1yr)",
    category: "Home Gear",
    icon: Coffee,
    buyer: { name: "Alfayo", avatar: "" },
    status: "cancelled",
    amount: "KSH 3,200.00",
    method: "M-Pesa",
    iconColor: "text-amber-600",
  },
];

export function TableSection() {
  return (
    <section id="marketplace-orders" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <ShoppingBag className="size-3.5" /> Component: Table
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">Table</h3>
        <p className="text-muted-foreground max-w-2xl">
          A robust data table designed for high-density information display, featuring custom cell
          rendering for marketplace transactions, status badges, and user profiles.
        </p>
      </div>

      <ComponentPreview
        title="Marketplace Orders"
        description="A complex table with avatars, badges, and tooltips."
        code={`import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@unimart/ui";
import {
  ShoppingBag,
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Smartphone,
  BookOpen,
  Coffee,
} from "lucide-react";

// Example Data
const campusOrders = [
  {
    id: "ORD-7721",
    item: "Organic Chemistry II (Hardcover)",
    category: "Textbooks",
    icon: BookOpen,
    buyer: { name: "Mbavu", avatar: "https://github.com/shadcn.png" },
    status: "completed",
    amount: "KSH 2,500.00",
    method: "M-Pesa",
  },
  // ... more orders
];

<div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl shadow-2xl shadow-primary/5 overflow-hidden">
  <div className="overflow-x-auto">
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent border-border/60 bg-muted/20">
          <TableHead className="py-5 px-6 font-heading font-bold text-xs uppercase tracking-wider min-w-[200px]">
            Item & Category
          </TableHead>
          <TableHead className="font-heading font-bold text-xs uppercase tracking-wider min-w-[150px]">
            Buyer
          </TableHead>
          <TableHead className="font-heading font-bold text-xs uppercase tracking-wider text-center min-w-[100px]">
            Status
          </TableHead>
          <TableHead className="font-heading font-bold text-xs uppercase tracking-wider min-w-[100px]">
            Method
          </TableHead>
          <TableHead className="text-right pr-8 font-heading font-bold text-xs uppercase tracking-wider min-w-[120px]">
            Amount
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {campusOrders.map((order) => (
          <TableRow
            key={order.id}
            className="group border-border/40 hover:bg-primary/5 transition-colors duration-300"
          >
            <TableCell className="py-6 px-6">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <order.icon className="size-5" />
                </div>
                <div>
                  <p className="font-bold text-sm tracking-tight w-max">
                    {order.item}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono w-max">
                    {order.category} • {order.id}
                  </p>
                </div>
              </div>
            </TableCell>

            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="size-8 border border-border">
                  <AvatarImage src={order.buyer.avatar} />
                  <AvatarFallback className="text-[10px] bg-secondary/20 font-bold">
                    {order.buyer.name[0]}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium w-max">
                  {order.buyer.name}
                </span>
              </div>
            </TableCell>

            <TableCell className="text-center">
              <Badge
                variant={
                  order.status === "completed"
                    ? "success"
                    : order.status === "pending"
                      ? "warning"
                      : "destructive"
                }
                className="gap-1.5 py-1 px-3 rounded-full text-[10px] font-bold uppercase tracking-wide border-none shadow-sm w-max mx-auto"
              >
                {order.status === "completed" && (
                  <CheckCircle2 className="size-3" />
                )}
                {order.status === "pending" && (
                  <Clock className="size-3 animate-pulse" />
                )}
                {order.status === "cancelled" && (
                  <AlertCircle className="size-3" />
                )}
                {order.status}
              </Badge>
            </TableCell>

            <TableCell>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium w-max">
                  {order.method}
                </span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="size-3 text-muted-foreground hover:text-primary transition-colors" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-popover border-border">
                      <p className="text-[10px]">
                        Verified via {order.method} gateway
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </TableCell>

            <TableCell className="text-right pr-8 font-heading font-bold text-primary tracking-tight">
              <span className="w-max inline-block">{order.amount}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
</div>`}
      >
        <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl shadow-2xl shadow-primary/5 overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-border/60 bg-muted/20">
                  <TableHead className="py-5 px-6 font-heading font-bold text-xs uppercase tracking-wider min-w-[200px]">
                    Item & Category
                  </TableHead>
                  <TableHead className="font-heading font-bold text-xs uppercase tracking-wider min-w-[150px]">
                    Buyer
                  </TableHead>
                  <TableHead className="font-heading font-bold text-xs uppercase tracking-wider text-center min-w-[100px]">
                    Status
                  </TableHead>
                  <TableHead className="font-heading font-bold text-xs uppercase tracking-wider min-w-[100px]">
                    Method
                  </TableHead>
                  <TableHead className="text-right pr-8 font-heading font-bold text-xs uppercase tracking-wider min-w-[120px]">
                    Amount
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campusOrders.map((order) => (
                  <TableRow
                    key={order.id}
                    className="group border-border/40 hover:bg-primary/5 transition-colors duration-300"
                  >
                    <TableCell className="py-6 px-6">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                          <order.icon className="size-5" />
                        </div>
                        <div>
                          <p className="font-bold text-sm tracking-tight w-max">{order.item}</p>
                          <p className="text-xs text-muted-foreground font-mono w-max">
                            {order.category} • {order.id}
                          </p>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="size-8 border border-border">
                          <AvatarImage src={order.buyer.avatar} />
                          <AvatarFallback className="text-[10px] bg-secondary/20 font-bold">
                            {order.buyer.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium w-max">{order.buyer.name}</span>
                      </div>
                    </TableCell>

                    <TableCell className="text-center">
                      <Badge
                        variant={
                          order.status === "completed"
                            ? "success"
                            : order.status === "pending"
                              ? "warning"
                              : "destructive"
                        }
                        className="gap-1.5 py-1 px-3 rounded-full text-[10px] font-bold uppercase tracking-wide border-none shadow-sm w-max mx-auto"
                      >
                        {order.status === "completed" && <CheckCircle2 className="size-3" />}
                        {order.status === "pending" && <Clock className="size-3 animate-pulse" />}
                        {order.status === "cancelled" && <AlertCircle className="size-3" />}
                        {order.status}
                      </Badge>
                    </TableCell>

                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium w-max">{order.method}</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="size-3 text-muted-foreground hover:text-primary transition-colors" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-popover border-border">
                              <p className="text-[10px]">Verified via {order.method} gateway</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </TableCell>

                    <TableCell className="text-right pr-8 font-heading font-bold text-primary tracking-tight">
                      <span className="w-max inline-block">{order.amount}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </ComponentPreview>

      {/* Goofy Marketplace Hint */}
      <p className="text-center text-[10px] text-muted-foreground italic opacity-50">
        &ldquo;Legend says Lymore only buys the highest rated textbooks to maintain his 98% trust
        score.&rdquo;
      </p>
    </section>
  );
}
