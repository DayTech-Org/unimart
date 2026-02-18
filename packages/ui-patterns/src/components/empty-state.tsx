import * as React from "react";
import { cn } from "@unimart/ui";

const EmptyState = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col items-center justify-center text-center p-8 md:p-12 animate-in fade-in-50 zoom-in-95 duration-300",
      className,
    )}
    {...props}
  />
));
EmptyState.displayName = "EmptyState";

const EmptyStateIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-20 w-20 items-center justify-center rounded-full bg-muted/50 p-4 mb-6 ring-8 ring-muted/20",
      "[&>svg]:h-10 [&>svg]:w-10 [&>svg]:text-muted-foreground",
      className,
    )}
    {...props}
  />
));
EmptyStateIcon.displayName = "EmptyStateIcon";

const EmptyStateTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold tracking-tight text-foreground font-heading mb-2",
      className,
    )}
    {...props}
  />
));
EmptyStateTitle.displayName = "EmptyStateTitle";

const EmptyStateDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-muted-foreground text-sm max-w-sm mx-auto mb-6",
      className,
    )}
    {...props}
  />
));
EmptyStateDescription.displayName = "EmptyStateDescription";

const EmptyStateAction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-center gap-2", className)}
    {...props}
  />
));
EmptyStateAction.displayName = "EmptyStateAction";

export {
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateAction,
};
