"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
  Label,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@unimart/ui";
import { MessageSquare } from "lucide-react";
import { ComponentPreview } from "./component-preview";

export function PopoverSection() {
  return (
    <section id="popover" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <MessageSquare className="size-3.5" />
          Component: Popover
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Popover
        </h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          Displays rich content in a portal, triggered by a button.
        </p>
      </div>

      <ComponentPreview
        title="Seller Popover"
        description="A popover displaying seller information."
        code={`import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
  Label,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@unimart/ui";

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">View Seller Info</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/" />
          <AvatarFallback>LM</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-medium">Lymore</h4>
          <p className="text-sm text-muted-foreground">
            Computer Science &apos;25
          </p>
        </div>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>Rating</Label>
          <div className="col-span-2 text-sm">4.9/5 (12 reviews)</div>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>Response</Label>
          <div className="col-span-2 text-sm">Usually in 1 hour</div>
        </div>
      </div>
      <Button className="w-full">Message Seller</Button>
    </div>
  </PopoverContent>
</Popover>`}
      >
        <div className="flex justify-center">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">View Seller Info</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/" />
                    <AvatarFallback>LM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Kimi</h4>
                    <p className="text-sm text-muted-foreground">
                      Computer Science &apos;25
                    </p>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label>Rating</Label>
                    <div className="col-span-2 text-sm">4.9/5 (12 reviews)</div>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label>Response</Label>
                    <div className="col-span-2 text-sm">Usually in 1 hour</div>
                  </div>
                </div>
                <Button className="w-full">Message Seller</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </ComponentPreview>
    </section>
  );
}
