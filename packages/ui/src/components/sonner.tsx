"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme === "mango" ? "light" : (theme as ToasterProps["theme"])}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group-has-[.toaster]:group toast group-has-[.toaster]:bg-background group-has-[.toaster]:text-foreground group-has-[.toaster]:border-border group-has-[.toaster]:shadow-lg",
          description: "group-has-[.toaster]:text-muted-foreground",
          actionButton:
            "group-has-[.toaster]:bg-primary group-has-[.toaster]:text-primary-foreground",
          cancelButton: "group-has-[.toaster]:bg-muted group-has-[.toaster]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
