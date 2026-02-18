"use client";

import { useState, useEffect, ComponentType } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Store,
  Sun,
  Moon,
  Palette,
  Monitor,
  Search,
} from "lucide-react";
import Link from "next/link";
import { ScrollArea, useTheme } from "@unimart/ui";

export function MobileNav({
  groups,
  onSearchClick,
}: {
  groups: {
    title: string;
    items: {
      id: string;
      label: string;
      icon: ComponentType<{ className?: string }>;
    }[];
  }[];
  onSearchClick?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 h-16 border-b border-border/40 bg-background/80 backdrop-blur-md flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-primary shadow-[0_0_20px_rgba(var(--primary),0.3)] flex items-center justify-center">
            <Store className="size-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-heading font-bold tracking-tight">
            Design System
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onSearchClick?.()}
            className="p-2 text-muted-foreground hover:text-foreground active:text-primary transition-colors"
          >
            <Search className="size-6" />
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 -mr-2 text-muted-foreground hover:text-foreground active:text-primary transition-colors"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16 md:hidden" />

      {/* Full Screen Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl md:hidden flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-200">
          <div className="flex items-center justify-between px-4 h-16 border-b border-border/40 flex-none">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-primary shadow-[0_0_20px_rgba(var(--primary),0.3)] flex items-center justify-center">
                <Store className="size-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-heading font-bold tracking-tight">
                Design System
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 -mr-2 text-muted-foreground hover:text-foreground active:text-primary transition-colors"
            >
              <X className="size-6" />
            </button>
          </div>

          <ScrollArea className="flex-1 px-4 py-6">
            <nav className="space-y-6">
              {groups.map((group) => (
                <div key={group.title} className="space-y-1">
                  {group.title && (
                    <h4 className="px-4 text-xs font-semibold text-muted-foreground/70 uppercase tracking-widest mb-2">
                      {group.title}
                    </h4>
                  )}
                  {group.items.map((section) => (
                    <Link
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                    >
                      <section.icon className="size-4" />
                      {section.label}
                      <ChevronRight className="ml-auto size-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </ScrollArea>

          <div className="p-6 mt-auto flex-none border-t border-border/40">
            <p className="text-xs font-semibold text-primary mb-3">Theme</p>
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => setTheme("light")}
                className={`flex flex-col items-center justify-center gap-1 p-3 rounded-xl transition-all duration-300 ${
                  theme === "light"
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary bg-secondary/50"
                }`}
              >
                <Sun className="size-5" />
                <span className="text-[10px] font-medium">Light</span>
              </button>
              <button
                onClick={() => setTheme("dark")}
                className={`flex flex-col items-center justify-center gap-1 p-3 rounded-xl transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary bg-secondary/50"
                }`}
              >
                <Moon className="size-5" />
                <span className="text-[10px] font-medium">Dark</span>
              </button>
              <button
                onClick={() => setTheme("mango")}
                className={`flex flex-col items-center justify-center gap-1 p-3 rounded-xl transition-all duration-300 ${
                  theme === "mango"
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary bg-secondary/50"
                }`}
              >
                <Palette className="size-5" />
                <span className="text-[10px] font-medium">Mango</span>
              </button>
              <button
                onClick={() => setTheme("system")}
                className={`flex flex-col items-center justify-center gap-1 p-3 rounded-xl transition-all duration-300 ${
                  theme === "system"
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary bg-secondary/50"
                }`}
              >
                <Monitor className="size-5" />
                <span className="text-[10px] font-medium">System</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
