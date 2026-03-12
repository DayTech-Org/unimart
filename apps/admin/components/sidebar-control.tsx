"use client";

import {
  cn,
  Popover,
  PopoverContent,
  PopoverTrigger,
  SidebarMenuButton,
  useSidebar,
} from "@unimart/ui";
import { Columns, MousePointer2, PanelLeft, PanelLeftOpen } from "lucide-react";

export function SidebarControl() {
  const { collapsible, setCollapsible, state, setOpen } = useSidebar();

  const options = [
    {
      id: "expanded",
      label: "Always Expanded",
      icon: <PanelLeftOpen className="h-4 w-4" />,
      isActive: state === "expanded",
      onClick: () => {
        setCollapsible("offcanvas");
        setOpen(true);
      },
    },
    {
      id: "collapsed",
      label: "Collapsed (Icons)",
      icon: <Columns className="h-4 w-4" />,
      isActive: state === "collapsed" && collapsible === "icon",
      onClick: () => {
        setCollapsible("icon");
        setOpen(false);
      },
    },
    {
      id: "hover",
      label: "Expand on Hover",
      icon: <MousePointer2 className="h-4 w-4" />,
      isActive: state === "collapsed" && collapsible === "hover",
      onClick: () => {
        setCollapsible("hover");
        setOpen(false);
      },
    },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <SidebarMenuButton
          variant="outline"
          className="h-10 bg-surface/50 border-border hover:bg-surface text-muted-foreground hover:text-foreground rounded-lg transition-all"
          tooltip={state === "collapsed" ? "Display Mode" : undefined}
        >
          <PanelLeft className="h-4 w-4 shrink-0" />
          <span className="text-[11px] font-medium truncate group-data-[state=collapsed]:hidden group-data-[collapsible=hover]:group-hover:inline">
            Display Mode
          </span>
          <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-sm ml-auto group-data-[state=collapsed]:hidden group-data-[collapsible=hover]:group-hover:block" />
        </SidebarMenuButton>
      </PopoverTrigger>
      <PopoverContent
        side="right"
        align="end"
        sideOffset={12}
        className="w-56 bg-background border-border p-1 overflow-hidden shadow-2xl z-50 rounded-xl animate-in fade-in zoom-in-95 duration-200"
      >
        <div className="px-3 py-2 border-b border-border mb-1">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            Sidebar Mode
          </p>
        </div>
        <div className="space-y-0.5">
          {options.map((option) => (
            <button
              type="button"
              key={option.id}
              onClick={option.onClick}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-all duration-200 text-left",
                option.isActive
                  ? "text-foreground bg-surface ring-1 ring-border"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface/50"
              )}
            >
              <div
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background",
                  option.isActive && "bg-primary/10 text-primary border-primary/20"
                )}
              >
                {option.icon}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[13px] leading-tight">{option.label}</p>
              </div>
              {option.isActive && (
                <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--brand-primary)]" />
              )}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
