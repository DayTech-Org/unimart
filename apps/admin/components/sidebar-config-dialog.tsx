"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  useSidebar,
} from "@unimart/ui";
import { Maximize, Minimize, Monitor, MousePointer2, Settings2, Smartphone } from "lucide-react";

export function SidebarConfigDialog() {
  const { collapsible, setCollapsible, state, setOpen } = useSidebar();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-zinc-100">
          <Settings2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-zinc-950 border-zinc-800 text-zinc-100 sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>Sidebar Configuration</DialogTitle>
          <DialogDescription className="text-zinc-400">
            Customize how the navigation sidebar behaves on your screen.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="space-y-3">
            <h4 className="text-sm font-medium leading-none text-zinc-300">Display Mode</h4>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant={state === "expanded" ? "default" : "outline"}
                className={
                  state === "expanded"
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400"
                }
                onClick={() => setOpen(true)}
              >
                <Maximize className="mr-2 h-4 w-4" />
                Expanded
              </Button>
              <Button
                variant={state === "collapsed" ? "default" : "outline"}
                className={
                  state === "collapsed"
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400"
                }
                onClick={() => setOpen(false)}
              >
                <Minimize className="mr-2 h-4 w-4" />
                Collapsed
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium leading-none text-zinc-300">Collapsible Behavior</h4>
            <div className="grid gap-2">
              <Button
                variant={collapsible === "offcanvas" ? "default" : "outline"}
                className={
                  collapsible === "offcanvas"
                    ? "bg-emerald-600 hover:bg-emerald-700 justify-start"
                    : "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 justify-start"
                }
                onClick={() => setCollapsible("offcanvas")}
              >
                <Monitor className="mr-2 h-4 w-4" />
                <div className="flex flex-col items-start">
                  <span>Off-canvas</span>
                  <span className="text-[10px] opacity-70">
                    Sidebar hides completely when closed
                  </span>
                </div>
              </Button>

              <Button
                variant={collapsible === "icon" ? "default" : "outline"}
                className={
                  collapsible === "icon"
                    ? "bg-emerald-600 hover:bg-emerald-700 justify-start"
                    : "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 justify-start"
                }
                onClick={() => setCollapsible("icon")}
              >
                <MousePointer2 className="mr-2 h-4 w-4" />
                <div className="flex flex-col items-start">
                  <span>Icon (Hover to Expand)</span>
                  <span className="text-[10px] opacity-70">
                    Sidebar minimizes to icons and expands on hover
                  </span>
                </div>
              </Button>

              <Button
                variant={collapsible === "none" ? "default" : "outline"}
                className={
                  collapsible === "none"
                    ? "bg-emerald-600 hover:bg-emerald-700 justify-start"
                    : "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 justify-start"
                }
                onClick={() => setCollapsible("none")}
              >
                <Smartphone className="mr-2 h-4 w-4" />
                <div className="flex flex-col items-start">
                  <span>Static</span>
                  <span className="text-[10px] opacity-70">
                    Sidebar is always visible and cannot be toggled
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
