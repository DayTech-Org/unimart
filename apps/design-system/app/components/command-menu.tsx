"use client";

import * as React from "react";
import { type LucideIcon } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@unimart/ui";
import { useRouter } from "next/navigation";

interface CommandMenuProps {
  sections: {
    id: string;
    label: string;
    icon: LucideIcon;
  }[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandMenu({
  groups,
  open,
  onOpenChange,
}: {
  groups: {
    title: string;
    items: {
      id: string;
      label: string;
      icon: LucideIcon;
    }[];
  }[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      onOpenChange(false);
      command();
    },
    [onOpenChange],
  );

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {groups.map((group) => (
          <React.Fragment key={group.title}>
            <CommandGroup heading={group.title || "Components"}>
              {group.items.map((section) => (
                <CommandItem
                  key={section.id}
                  value={section.label}
                  onSelect={() => {
                    runCommand(() => {
                      router.push(`#${section.id}`);
                    });
                  }}
                >
                  <section.icon className="mr-2 h-4 w-4" />
                  <span>{section.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
          </React.Fragment>
        ))}
        <CommandGroup heading="Settings">
          <CommandItem>Search settings... (Coming Soon)</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
