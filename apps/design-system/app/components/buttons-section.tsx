"use client";

import { Button } from "@unimart/ui";
import {
  ArrowRight,
  Bell,
  Check,
  ChevronRight,
  Copy,
  Loader2,
  MousePointer2,
  Settings,
  Sparkles,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { ComponentPreview } from "./component-preview";

export function ButtonsSection() {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAction = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <section id="buttons" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <MousePointer2 className="size-3.5" />
          Component: Button
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Buttons
        </h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          With built-in micro-interactions.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Primary Action */}
        <ComponentPreview
          title="Primary Action"
          description="Used for the main call-to-action on a page. High emphasis."
          code={`import { Button } from "@unimart/ui";
import { ChevronRight } from "lucide-react";

<Button variant="default">
  Get Started <ChevronRight className="ml-2 h-4 w-4" />
</Button>
<Button variant="default" disabled>
  Disabled
</Button>`}
        >
          <div className="flex items-center gap-4">
            <Button variant="default" className="shadow-lg shadow-primary/20">
              Get Started <ChevronRight className="size-4 ml-2" />
            </Button>
            <Button variant="default" disabled>
              Disabled
            </Button>
          </div>
        </ComponentPreview>

        {/* Secondary Action */}
        <ComponentPreview
          title="Secondary Action"
          description="Alternative actions that are less important than the primary one."
          code={`import { Button } from "@unimart/ui";

<Button variant="secondary">View Details</Button>
<Button variant="secondary" disabled>Unavailable</Button>`}
        >
          <div className="flex items-center gap-4">
            <Button variant="secondary">View Details</Button>
            <Button variant="secondary" disabled>
              Unavailable
            </Button>
          </div>
        </ComponentPreview>

        {/* Outline / Tertiary */}
        <ComponentPreview
          title="Outline / Tertiary"
          description="Low emphasis actions (e.g., cancel, back). Often used in groups."
          code={`import { Button } from "@unimart/ui";
import { Settings } from "lucide-react";

<Button variant="outline">Back</Button>
<Button variant="outline">
  <Settings className="mr-2 h-4 w-4" /> Configure
</Button>`}
        >
          <div className="flex items-center gap-4">
            <Button variant="outline">Back</Button>
            <Button variant="outline">
              <Settings className="mr-2 size-3.5" /> Configure
            </Button>
          </div>
        </ComponentPreview>

        {/* Destructive */}
        <ComponentPreview
          title="Destructive"
          description="Used for actions that delete or remove data. Use sparingly."
          code={`import { Button } from "@unimart/ui";
import { Trash2 } from "lucide-react";

<Button variant="destructive">
  <Trash2 className="mr-2 h-4 w-4" /> Delete Account
</Button>`}
        >
          <div className="flex items-center gap-4">
            <Button variant="destructive">
              <Trash2 className="mr-2 size-4" /> Delete Account
            </Button>
          </div>
        </ComponentPreview>

        {/* Ghost & Icon Only */}
        <ComponentPreview
          title="Ghost & Icon Actions"
          description="Lowest emphasis. Used for toolbars or inline actions."
          code={`import { Button } from "@unimart/ui";
import { Bell } from "lucide-react";

<Button variant="ghost">Cancel</Button>
<Button variant="ghost" size="icon">
  <Bell className="h-4 w-4" />
</Button>`}
        >
          <div className="flex items-center gap-4">
            <Button variant="ghost">Cancel</Button>
            <Button variant="ghost" size="icon">
              <Bell className="size-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Bell className="size-4" />
            </Button>
          </div>
        </ComponentPreview>

        {/* Loading States */}
        <ComponentPreview
          title="Loading States"
          description="Communicate processing status."
          code={`import { Button } from "@unimart/ui";
import { Loader2 } from "lucide-react";

<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`}
        >
          <div className="flex items-center gap-4">
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          </div>
        </ComponentPreview>
      </div>

      {/* Micro-interactions */}
      <h3 className="text-xl font-heading font-semibold mt-12 mb-6">
        Micro-interactions
      </h3>
      <ComponentPreview
        title="Interactive Buttons"
        description="Dynamic states that provide immediate feedback to user actions."
        code={`import { Button } from "@unimart/ui";
import { ArrowRight, Check, Copy, Loader2, Settings, Sparkles } from "lucide-react";
import { useState } from "react";

// Copy Button
<Button onClick={handleCopy}>
  {copied ? <Check /> : <Copy />} Copy Code
</Button>

// Hover Shine
<Button className="group relative overflow-hidden transition-all hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-primary/25">
  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/20 to-transparent" />
  <Sparkles className="mr-2 size-4 transition-transform group-hover:rotate-12" />
  Hover Me
</Button>

// Animated Arrow
<Button variant="secondary" className="group pl-4 pr-3">
  Explore
  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
</Button>

// Loading State Toggle
<Button disabled={loading} onClick={handleAction}>
  {loading ? <Loader2 className="animate-spin" /> : <Settings />}
  {loading ? "Saving..." : "Save Changes"}
</Button>`}
      >
        <div className="flex flex-wrap items-center gap-6">
          {/* Copy Interaction */}
          <Button
            variant="outline"
            onClick={handleCopy}
            className="min-w-32 w-fit transition-all duration-300 active:scale-95"
          >
            {copied ? (
              <>
                <Check className="mr-2 size-4 text-green-500" /> Copied!
              </>
            ) : (
              <>
                <Copy className="mr-2 size-4" /> Copy Code
              </>
            )}
          </Button>

          {/* Hover Lift & Shine */}
          <Button className="group relative overflow-hidden transition-all hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-primary/25">
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/20 to-transparent" />
            <Sparkles className="mr-2 size-4 transition-transform group-hover:rotate-12" />
            Hover Me
          </Button>

          {/* Animated Arrow */}
          <Button variant="secondary" className="group pl-4 pr-3">
            Explore
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Loading to Success */}
          <Button
            onClick={handleAction}
            disabled={loading}
            className="w-32 transition-all"
          >
            {loading ? (
              <Loader2 className="mr-2 size-4 animate-spin" />
            ) : (
              <Settings className="mr-2 size-4" />
            )}
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </ComponentPreview>
    </section>
  );
}
