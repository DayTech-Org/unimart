import { Avatar, AvatarFallback, AvatarImage, Badge, Button, cn } from "@unimart/ui";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight, Camera, MapPin, Navigation, QrCode, ShieldCheck, Star } from "lucide-react";
import type * as React from "react";

// --- Condition Badge Pattern ---
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
interface SellerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  major?: string;
  rating: number; // 0-5
  totalReviews: number;
  isVerifiedStudent?: boolean;
  avatarUrl?: string;
}

function SellerCard({
  className,
  name,
  major,
  rating,
  totalReviews,
  isVerifiedStudent,
  avatarUrl,
  ...props
}: SellerCardProps) {
  return (
    <div
      className={cn(
        "group relative flex items-center space-x-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md",
        className
      )}
      {...props}
    >
      <Avatar className="h-12 w-12 border-2 border-background ring-2 ring-muted">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <h4 className="text-sm font-semibold leading-none">{name}</h4>
            {isVerifiedStudent && (
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" aria-label="Verified Student" />
            )}
          </div>
          {rating > 0 && (
            <div className="flex items-center gap-1 bg-amber-100 dark:bg-amber-900/30 px-1.5 py-0.5 rounded-md">
              <Star className="h-2.5 w-2.5 fill-amber-500 text-amber-500" />
              <span className="text-xs font-medium text-amber-700 dark:text-amber-400">
                {rating.toFixed(1)}
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center text-xs text-muted-foreground">
          {major && <span className="mr-2 truncate max-w-[120px]">{major}</span>}
          <span className="text-xs text-muted-foreground/60">• {totalReviews} reviews</span>
        </div>
      </div>
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

export { ConditionBadge, SellerCard, SafetyZoneCard };
