"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Input,
  SidebarInset,
  SidebarProvider,
  useSidebar,
} from "@unimart/ui";
import { Bell, ListMinus, Search, Store } from "lucide-react";
import type * as React from "react";
import { AppSidebar } from "@/components/app-sidebar";

function MobileTrigger() {
  const { toggleSidebar } = useSidebar();
  return (
    <Button variant="ghost" size="icon" onClick={toggleSidebar}>
      <ListMinus className="h-4 w-4" />
    </Button>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider
      defaultOpen={false}
      defaultCollapsible="icon"
      style={{ "--sidebar-top": "3.5rem" } as React.CSSProperties}
    >
      <div className="flex flex-col h-screen w-full bg-background font-accent overflow-hidden">
        <header className="flex flex-col h-auto w-full shrink-0 border-b border-border bg-background/80 backdrop-blur-md z-50 fixed top-0 left-0 pr-4">
          <div className="w-full h-14 flex items-center justify-between">
            <div className="flex items-center h-full">
              <div className="w-[var(--sidebar-width-icon)] flex items-center justify-center shrink-0">
                <div className="size-8 rounded-lg bg-primary shadow-[0_0_20px_rgba(var(--brand-primary),0.3)] flex items-center justify-center">
                  <Store className="size-5 text-primary-foreground" />
                </div>
              </div>
              <span className="text-sm font-bold tracking-tight text-foreground pl-1">
                Welcome back, Limo
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative hidden sm:block">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                <Input
                  placeholder="Search..."
                  className="h-9 w-64 rounded-xl bg-surface/50 border-border pl-9 pr-3 text-xs focus-visible:ring-primary/20"
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-xl bg-surface/50 border-border hover:bg-surface text-muted-foreground hover:text-foreground"
              >
                <Bell className="h-4 w-4" />
              </Button>

              <Avatar className="h-9 w-9 border border-border cursor-pointer hover:border-primary/50 transition-all">
                <AvatarImage src="https://github.com/lymore01.png" alt="Lymore" />
                <AvatarFallback className="bg-surface text-[10px] font-bold text-muted-foreground">
                  JD
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
          {/* for mobile view */}
          <div className="flex lg:hidden h-14 w-full border-t border-border  items-center justify-start">
            <div className="w-[var(--sidebar-width-icon)] flex items-center justify-center shrink-0">
              <MobileTrigger />
            </div>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden pt-28 lg:pt-14">
          <AppSidebar />
          <SidebarInset className="bg-background flex-1 overflow-y-auto pb-24">
            {children}
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
