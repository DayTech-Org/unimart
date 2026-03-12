import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  cn,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  VisuallyHidden,
} from "@unimart/ui";
import { cva, type VariantProps } from "class-variance-authority";
import {
  ArrowRight,
  Camera,
  Info,
  MapPin,
  Navigation,
  Package,
  QrCode,
  ShieldCheck,
  Star,
} from "lucide-react";
import Image from "next/image";
import type * as React from "react";

const conditionBadgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      condition: {
        new: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        "like-new": "border-transparent bg-emerald-500 text-white hover:bg-emerald-500/80",
        good: "border-transparent bg-blue-500 text-white hover:bg-blue-500/80",
        fair: "border-transparent bg-accent text-accent-foreground hover:bg-accent/80",
        poor: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
      },
    },
    defaultVariants: {
      condition: "new",
    },
  }
);

export interface ConditionBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof conditionBadgeVariants> {
  condition?: "new" | "like-new" | "good" | "fair" | "poor";
}

function ConditionBadge({ className, condition, ...props }: ConditionBadgeProps) {
  const labels = {
    new: "Brand New",
    "like-new": "Like New",
    good: "Good Condition",
    fair: "Fair Condition",
    poor: "Poor Condition",
  };

  return (
    <div className={cn(conditionBadgeVariants({ condition }), className)} {...props}>
      {labels[condition || "new"]}
    </div>
  );
}

// --- Seller Reputation Card Pattern ---
export interface SellerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  major?: string;
  rating?: number; // 0-5
  totalReviews?: number;
  reviewLabel?: string;
  isVerifiedStudent?: boolean;
  avatarUrl?: string;
  stats?: { label: string; value: string | number }[];
  actions?: React.ReactNode;
}

function SellerCard({
  className,
  name,
  major,
  rating = 0,
  totalReviews,
  reviewLabel = "reviews",
  isVerifiedStudent,
  avatarUrl,
  stats,
  actions,
  ...props
}: SellerCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col space-y-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md",
        className
      )}
      {...props}
    >
      <div className="flex items-center space-x-4">
        <Avatar className="h-12 w-12 border-2 border-background ring-2 ring-muted/10">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="font-bold">
            {name.charAt(name.includes(":") ? name.indexOf(":") + 2 : 0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 overflow-hidden">
              <h4 className="text-sm font-bold leading-none truncate">{name}</h4>
              {isVerifiedStudent && (
                <ShieldCheck
                  className="h-3.5 w-3.5 text-emerald-500 shrink-0"
                  aria-label="Verified"
                />
              )}
            </div>
            {rating > 0 && (
              <div className="flex items-center gap-1 bg-amber-500/10 dark:bg-amber-900/30 px-1.5 py-0.5 rounded-md shrink-0 border border-amber-500/10">
                <Star className="h-2.5 w-2.5 fill-amber-500 text-amber-500" />
                <span className="text-[10px] font-black text-amber-600 dark:text-amber-400">
                  {rating.toFixed(1)}
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center text-xs text-muted-foreground font-medium">
            {major && <span className="mr-2 truncate max-w-[120px]">{major}</span>}
            {totalReviews !== undefined && (
              <span className="text-[10px] text-muted-foreground/60 uppercase font-bold">
                • {totalReviews} {reviewLabel}
              </span>
            )}
          </div>
        </div>
      </div>

      {stats && stats.length > 0 && (
        <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border/5">
          {stats.map((stat, idx) => (
            <div key={idx} className={cn("space-y-0.5", idx % 2 === 1 && "text-right")}>
              <p className="text-[9px] font-bold text-muted-foreground/30 uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="text-xs font-black text-foreground">{stat.value}</p>
            </div>
          ))}
          {actions && <div className="flex justify-end">{actions}</div>}
        </div>
      )}
    </div>
  );
}

interface SafetyZoneCardProps extends React.HTMLAttributes<HTMLDivElement> {
  locationName: string;
  description: string;
  distance?: string;
}

function SafetyZoneCard({
  className,
  locationName,
  description,
  distance,
  ...props
}: SafetyZoneCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-card dark:bg-card/5 backdrop-blur-xl transition-all duration-500 hover:border-primary/50",
        className
      )}
      {...props}
    >
      <div className="relative flex flex-col sm:flex-row gap-6 p-6">
        {/* Icon Interaction Box */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-card to-card/50 dark:from-card/10 dark:to-card/5 shadow-inner border border-white/20 dark:border-white/10 group-hover:scale-105 transition-transform duration-500">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary to-primary/80 text-primary shadow-lg shadow-primary/20">
            <MapPin className="h-6 w-6" />
          </div>
        </div>

        <div className="flex-1 space-y-3">
          <div className="flex flex-wrap items-start justify-between gap-y-2">
            <div>
              <h4
                className="max-w-[240px] truncate font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors"
                title={locationName}
              >
                {locationName}
              </h4>

              <div className="flex items-center gap-2 mt-2">
                <Badge
                  variant="outline"
                  className="bg-primary/5 text-primary border-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm"
                >
                  <ShieldCheck className="w-3 h-3 mr-1" /> Safe Zone
                </Badge>
                {distance && (
                  <span className="text-xs font-medium text-muted-foreground flex items-center gap-1 bg-background/50 px-2 py-0.5 rounded-full border border-border/50">
                    <Navigation className="h-3 w-3" /> {distance}
                  </span>
                )}
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
              <Camera className="h-3.5 w-3.5" />
              <span>24/7 Surveillance</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-secondary-foreground bg-secondary/10 px-2.5 py-1 rounded-md border border-secondary/20">
              <QrCode className="h-3.5 w-3.5" />
              <span>Check-in Point</span>
            </div>
          </div>
        </div>

        {/* Action Button - Visible on larger screens or pushed to bottom on mobile */}
        <div className="absolute top-4 right-4 sm:static sm:mt-2 sm:flex sm:self-center">
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full h-8 w-8 sm:h-12 sm:w-12 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all group-hover:translate-x-1"
          >
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export { ConditionBadge, SellerCard, SafetyZoneCard, ProductCard, ProductDetailsSheet };

interface ProductDetailsSheetProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  actions?: React.ReactNode;
}

function ProductDetailsSheet({ product, open, onOpenChange, actions }: ProductDetailsSheetProps) {
  if (!product) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-xl bg-background/95 backdrop-blur-xl border-l border-border/10 p-0 overflow-y-auto"
      >
        <VisuallyHidden>
          <SheetTitle>{product.name}</SheetTitle>
          <SheetDescription>{product.description || "Product details view"}</SheetDescription>
        </VisuallyHidden>
        <div className="relative h-72 w-full overflow-hidden">
          <Image src={product.image} alt={product.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-linear-to-t from-background to-transparent" />
          <Badge
            className={cn(
              "absolute top-6 left-6 uppercase text-[10px] font-black tracking-widest border-none px-3 py-1",
              product.status === "active"
                ? "bg-emerald-500"
                : product.status === "low_stock"
                  ? "bg-amber-500"
                  : "bg-rose-500"
            )}
          >
            {product.status.replace("_", " ")}
          </Badge>
        </div>

        <div className="px-8 pb-12 -mt-12 relative z-10 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-primary/5 text-primary border-primary/10 font-bold uppercase text-[9px]"
              >
                {product.category}
              </Badge>
              <span className="text-[10px] font-bold text-muted-foreground/30 font-lexend tracking-widest">
                {product.id}
              </span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-foreground leading-none">
              {product.name}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-surface/50 border border-border/5 space-y-1">
              <p className="text-[9px] font-bold text-muted-foreground/40 uppercase tracking-widest">
                Unit Price
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-xs font-bold text-muted-foreground/50">Ksh</span>
                <p className="text-xl font-black text-foreground font-lexend">
                  {product.price.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-surface/50 border border-border/5 space-y-1">
              <p className="text-[9px] font-bold text-muted-foreground/40 uppercase tracking-widest">
                Inventory
              </p>
              <p className="text-xl font-black text-foreground font-lexend">
                {product.stock}{" "}
                <span className="text-[10px] uppercase text-muted-foreground/30 font-sans tracking-tight">
                  Units
                </span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Info className="size-4 text-primary" />
              <h4 className="text-xs font-black uppercase tracking-widest">Description</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              {product.description ||
                "No detailed description provided for this product. Please contact the vendor for technical specifications and availability details."}
            </p>
          </div>

          <Separator className="bg-border/5" />

          {product.vendor && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Package className="size-4 text-primary" />
                <h4 className="text-xs font-black uppercase tracking-widest">Merchant Details</h4>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface/30 border border-border/5">
                <Avatar className="size-12 rounded-xl border-2 border-background ring-2 ring-muted/10">
                  <AvatarFallback className="font-bold text-primary bg-primary/5">
                    {product.vendor.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-black text-foreground">{product.vendor}</p>
                  <p className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-wider">
                    Verified Campus Partner
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[10px] font-black uppercase tracking-widest text-primary hover:bg-primary/5 rounded-lg h-8"
                >
                  View Shop
                </Button>
              </div>
            </div>
          )}

          {actions && <div className="pt-4 flex items-center gap-3">{actions}</div>}
        </div>
      </SheetContent>
    </Sheet>
  );
}

// --- Product Card Pattern ---
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: string;
  vendor?: string;
  image: string;
  description?: string;
}

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
  variant?: "grid" | "list";
  showVendor?: boolean;
  actions?: React.ReactNode;
  isCurrency?: boolean;
  currencySymbol?: string;
}

function ProductCard({
  className,
  product,
  variant = "grid",
  showVendor = true,
  actions,
  isCurrency = true,
  currencySymbol = "Ksh",
  ...props
}: ProductCardProps) {
  const statusColors: Record<string, string> = {
    active: "bg-emerald-500",
    out_of_stock: "bg-rose-500",
    low_stock: "bg-amber-500",
    pending: "bg-blue-500",
  };

  return (
    <div
      className={cn(
        "group relative bg-surface/30 backdrop-blur-xl border border-border/10 rounded-xl overflow-hidden transition-all duration-500 hover:border-primary/20 hover:shadow-2xl cursor-pointer",
        variant === "list" ? "flex items-center gap-6 p-4" : "flex flex-col",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative overflow-hidden shrink-0",
          variant === "list" ? "size-24 rounded-2xl" : "h-48 w-full"
        )}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <Badge
          className={cn(
            "absolute top-3 left-3 text-[9px] font-black uppercase tracking-tighter border-none",
            statusColors[product.status] || "bg-muted-foreground"
          )}
        >
          {product.status.replace("_", " ")} ({product.stock})
        </Badge>
      </div>

      <div className={cn("flex flex-col gap-1", variant === "list" ? "flex-1" : "p-6")}>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black text-primary uppercase tracking-widest leading-none">
            {product.category}
          </span>
          <span className="text-[10px] font-bold text-muted-foreground/30 font-lexend tracking-tight">
            {product.id}
          </span>
        </div>
        <h4 className="text-lg font-black text-foreground truncate leading-tight mt-1">
          {product.name}
        </h4>

        <div className="flex items-center justify-between mt-3">
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-muted-foreground/40 uppercase tracking-wider">
              Price
            </span>
            <span className="text-lg font-black text-foreground font-lexend leading-none">
              {isCurrency && (
                <span className="text-[10px] mr-1 opacity-50 font-sans">{currencySymbol}</span>
              )}
              {product.price.toLocaleString()}
            </span>
          </div>

          {showVendor && product.vendor && (
            <div className="flex flex-col text-right">
              <span className="text-[9px] font-bold text-muted-foreground/40 uppercase tracking-wider">
                Vendor
              </span>
              <span className="text-[11px] font-extrabold text-foreground/70 truncate max-w-[100px]">
                {product.vendor}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
