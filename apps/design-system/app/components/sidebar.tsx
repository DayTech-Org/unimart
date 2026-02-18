"use client";

import {
  ChevronRight,
  Monitor,
  Moon,
  Palette,
  Store,
  Sun,
  Search,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { ScrollArea, useTheme } from "@unimart/ui";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function Sidebar({
  groups,
  onSearchClick,
}: {
  groups: {
    title: string;
    items: { id: string; label: string; icon: LucideIcon }[];
  }[];
  onSearchClick: () => void;
}) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 border-r border-border/50 bg-card/30 backdrop-blur-2xl hidden md:flex flex-col h-screen">
      <div className="p-8 flex-none pb-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="size-8 rounded-lg bg-primary shadow-[0_0_20px_rgba(var(--primary),0.3)] flex items-center justify-center">
            <Store className="size-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-heading font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-br from-foreground to-foreground/60">
            Design System
          </h1>
        </div>
        <button
          onClick={onSearchClick}
          className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground bg-muted/50 hover:bg-muted/80 hover:text-foreground border border-border/50 rounded-lg transition-colors group"
        >
          <Search className="size-4" />
          <span>Search...</span>
          <kbd className="pointer-events-none ml-auto h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 hidden xl:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </button>
      </div>

      <ScrollArea className="flex-1 px-4 py-2">
        <nav className="space-y-6 pb-4">
          {groups.map((group) => (
            <div key={group.title} className="space-y-1">
              {group.title && (
                <h4 className="px-4 text-xs font-semibold text-muted-foreground/70 uppercase tracking-widest mb-2 font-mono">
                  {group.title}
                </h4>
              )}
              {group.items.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                >
                  <section.icon className="size-4 group-hover:scale-110 transition-transform" />
                  {section.label}
                  <ChevronRight className="ml-auto size-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </ScrollArea>

      <div className="p-6 mt-auto flex-none">
        <div className="rounded-2xl bg-linear-to-tr from-primary/10 to-transparent p-4 border border-primary/10 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-primary">Theme</p>
            {mounted && (
              <span className="text-[10px] uppercase font-bold text-muted-foreground">
                {theme}
              </span>
            )}
          </div>

          <div className="grid grid-cols-4 gap-1">
            <button
              onClick={() => setTheme("light")}
              className={`flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                mounted && theme === "light"
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
              title="Light Mode"
            >
              <Sun className="size-4" />
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                mounted && theme === "dark"
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
              title="Dark Mode"
            >
              <Moon className="size-4" />
            </button>
            <button
              onClick={() => setTheme("mango")}
              className={`flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                mounted && theme === "mango"
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
              title="Mango Mode"
            >
              <Palette className="size-4" />
            </button>
            <button
              onClick={() => setTheme("system")}
              className={`flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                mounted && theme === "system"
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
              title="System Default"
            >
              <Monitor className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
