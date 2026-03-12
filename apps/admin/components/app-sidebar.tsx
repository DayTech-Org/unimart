import {
  cn,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@unimart/ui";
import {
  Box,
  LayoutGrid,
  PieChart,
  Receipt,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Store,
  Users,
} from "lucide-react";
import type * as React from "react";
import { SidebarControl } from "./sidebar-control";

const navItems = [
  {
    title: "Marketplace Hub",
    url: "/dashboard",
    icon: LayoutGrid,
    isActive: true,
  },
  {
    title: "Product Catalog",
    url: "/dashboard/products",
    icon: Box,
  },
  {
    title: "Global Orders",
    url: "#",
    icon: ShoppingCart,
  },
  {
    title: "Merchant Center",
    url: "#",
    icon: Store,
  },
  {
    title: "Platform Users",
    url: "#",
    icon: Users,
  },
  {
    title: "Growth Metrics",
    url: "#",
    icon: PieChart,
  },
  {
    title: "Finance & Payouts",
    url: "#",
    icon: Receipt,
  },
  {
    title: "Trust & Safety",
    url: "#",
    icon: ShieldCheck,
  },
  {
    title: "System Config",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar({ className, ...props }: React.ComponentProps<typeof Sidebar>) {
  const { collapsible } = useSidebar();

  return (
    <Sidebar
      collapsible={collapsible}
      className={cn("bg-background border-r border-border", className)}
      {...props}
    >
      <SidebarContent className="p-2 gap-0 pt-6">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-1.5">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    tooltip={item.title}
                    className={cn(
                      "h-10 transition-all duration-200 group/btn",
                      item.isActive
                        ? "bg-primary/10 text-foreground font-semibold hover:bg-primary/10"
                        : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                    )}
                  >
                    <a href={item.url} className="flex items-center gap-3 w-full">
                      <item.icon
                        className={cn(
                          "size-4 shrink-0 opacity-70 group-hover/btn:opacity-100 transition-opacity",
                          item.isActive && "text-primary opacity-100"
                        )}
                      />
                      <span className="text-[13px] tracking-tight">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-2 h-14 border-t border-border/50 bg-surface/10 flex items-center">
        <SidebarControl />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
