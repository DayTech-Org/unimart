import {
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Button,
  Input,
  Label,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@unimart/ui";
import { AlertCircle, Check, HelpCircle, Layout, Loader2, PenTool } from "lucide-react";

export function CopywritingSection() {
  return (
    <section id="copywriting" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <PenTool className="size-3.5" />
          Foundation: Copywriting
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">Copywriting</h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          Guidelines for writing clear, consistent, and user-focused UI copy.
        </p>
      </div>

      <div className="space-y-12">
        {/* Section 1: Use verbs, not nouns */}
        <div className="space-y-4">
          <h4 className="text-xl font-heading font-semibold">Use verbs, not nouns</h4>
          <div className="rounded-xl border border-border bg-card/50 p-12 flex flex-col items-center justify-center gap-8">
            <div className="grid grid-cols-2 gap-x-16 gap-y-6 text-center">
              <div className="text-sm font-medium text-muted-foreground mb-2">Bad Example</div>
              <div className="text-sm font-medium text-muted-foreground mb-2">Good Example</div>

              {/* Set 1 */}
              <div className="flex justify-center">
                <Badge
                  variant="destructive"
                  className="text-sm font-normal bg-destructive/20 hover:bg-destructive/20 text-destructive border-destructive/20"
                >
                  Listing creation
                </Badge>
              </div>
              <div className="flex justify-center">
                <Badge
                  variant="outline"
                  className="text-sm font-normal bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/10 hover:border-green-500/20"
                >
                  Create listing
                </Badge>
              </div>

              {/* Set 2 */}
              <div className="flex justify-center">
                <Badge
                  variant="destructive"
                  className="text-sm font-normal bg-destructive/20 hover:bg-destructive/20 text-destructive border-destructive/20"
                >
                  Save action
                </Badge>
              </div>
              <div className="flex justify-center">
                <Badge
                  variant="outline"
                  className="text-sm font-normal bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/10 hover:border-green-500/20"
                >
                  Save changes
                </Badge>
              </div>

              {/* Set 3 */}
              <div className="flex justify-center">
                <Badge
                  variant="destructive"
                  className="text-sm font-normal bg-destructive/20 hover:bg-destructive/20 text-destructive border-destructive/20"
                >
                  Offer deletion
                </Badge>
              </div>
              <div className="flex justify-center">
                <Badge
                  variant="outline"
                  className="text-sm font-normal bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/10 hover:border-green-500/20"
                >
                  Delete offer
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Component Guidelines */}
        <div className="space-y-4">
          <h4 className="text-xl font-heading font-semibold">Component Guidelines</h4>
          <div className="grid gap-6">
            {/* Forms & Labels */}
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="bg-muted/50 p-4 border-b border-border">
                <h5 className="font-semibold flex items-center gap-2">
                  <Layout className="size-4" />
                  Forms & Labels
                </h5>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                <div className="p-6 space-y-4 bg-card/30">
                  <div className="text-sm font-medium text-destructive mb-2">Bad</div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-muted-foreground">User&apos;s Full Name:</Label>
                      <Input placeholder="Input your name here..." disabled />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Labels shouldn&apos;t have colons. Placeholders shouldn&apos;t repeat the
                      label.
                    </p>
                  </div>
                </div>
                <div className="p-6 space-y-4 bg-card/30">
                  <div className="text-sm font-medium text-green-600 mb-2">Good</div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Full Name</Label>
                      <Input placeholder="e.g. Alex Smith" disabled />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Clean label. Helpful example in placeholder.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Error Messages */}
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="bg-muted/50 p-4 border-b border-border">
                <h5 className="font-semibold flex items-center gap-2">
                  <AlertCircle className="size-4" />
                  Error Messages
                </h5>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                <div className="p-6 space-y-4 bg-card/30">
                  <div className="text-sm font-medium text-destructive mb-2">Bad</div>
                  <Alert variant="destructive" className="bg-destructive/10 border-destructive/20">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error 404</AlertTitle>
                    <AlertDescription>
                      The requested resource could not be found on the server.
                    </AlertDescription>
                  </Alert>
                  <p className="text-xs text-muted-foreground">
                    Too technical. Blames the user or system without a solution.
                  </p>
                </div>
                <div className="p-6 space-y-4 bg-card/30">
                  <div className="text-sm font-medium text-green-600 mb-2">Good</div>
                  <Alert variant="destructive" className="bg-destructive/10 border-destructive/20">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Listing not found</AlertTitle>
                    <AlertDescription>
                      This textbook listing may have been deleted or expired.
                    </AlertDescription>
                  </Alert>
                  <p className="text-xs text-muted-foreground">Clear, specific, and non-blaming.</p>
                </div>
              </div>
            </div>

            {/* Tooltips */}
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="bg-muted/50 p-4 border-b border-border">
                <h5 className="font-semibold flex items-center gap-2">
                  <HelpCircle className="size-4" />
                  Tooltips
                </h5>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                <div className="p-6 space-y-4 bg-card/30 flex flex-col justify-between">
                  <div>
                    <div className="text-sm font-medium text-destructive mb-2">Bad</div>
                    <div className="py-4">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" size="sm">
                              Search
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Search</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Redundant tooltip that repeats the button text.
                  </p>
                </div>
                <div className="p-6 space-y-4 bg-card/30 flex flex-col justify-between">
                  <div>
                    <div className="text-sm font-medium text-green-600 mb-2">Good</div>
                    <div className="py-4">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" size="sm">
                              Smart Search
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Search by ISBN, course code, or title</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Adds valuable context that doesn&apos;t fit in the UI.
                  </p>
                </div>
              </div>
            </div>

            {/* Confirmation Dialogs */}
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="bg-muted/50 p-4 border-b border-border">
                <h5 className="font-semibold flex items-center gap-2">
                  <AlertCircle className="size-4" />
                  Confirmation Dialogs
                </h5>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                <div className="p-6 space-y-4 bg-card/30">
                  <div className="text-sm font-medium text-destructive mb-2">Bad</div>
                  <div className="border border-border rounded-lg p-4 bg-background">
                    <h6 className="font-semibold mb-2">Are you sure?</h6>
                    <p className="text-sm text-muted-foreground mb-4">
                      This action cannot be undo.
                    </p>
                    <div className="flex gap-2 justify-end">
                      <Button variant="outline" size="sm">
                        No
                      </Button>
                      <Button size="sm">Yes</Button>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Generic title. Buttons don&apos;t explain the action.
                  </p>
                </div>
                <div className="p-6 space-y-4 bg-card/30">
                  <div className="text-sm font-medium text-green-600 mb-2">Good</div>
                  <div className="border border-border rounded-lg p-4 bg-background">
                    <h6 className="font-semibold mb-2">Delete this contact?</h6>
                    <p className="text-sm text-muted-foreground mb-4">
                      This will permanently remove Alex from your contacts.
                    </p>
                    <div className="flex gap-2 justify-end">
                      <Button variant="ghost" size="sm">
                        Cancel
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete Contact
                      </Button>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Specific title. Descriptive buttons.
                  </p>
                </div>
              </div>
            </div>

            {/* Loading States */}
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="bg-muted/50 p-4 border-b border-border">
                <h5 className="font-semibold flex items-center gap-2">
                  <Loader2 className="size-4" />
                  Loading States
                </h5>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                <div className="p-6 space-y-4 bg-card/30">
                  <div className="text-sm font-medium text-destructive mb-2">Bad</div>
                  <Button disabled>Loading...</Button>
                  <p className="text-xs text-muted-foreground">
                    Generic. Doesn&apos;t tell the user what is happening.
                  </p>
                </div>
                <div className="p-6 space-y-4 bg-card/30">
                  <div className="text-sm font-medium text-green-600 mb-2">Good</div>
                  <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing Payment...
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Indicative of the specific background process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Match button text (3-col table) */}
        <div className="space-y-4">
          <h4 className="text-xl font-heading font-semibold">Match button text to the action</h4>
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-12 bg-muted/50 border-b border-border">
              <div className="col-span-4 p-4 text-sm font-mono font-medium text-foreground">
                Action
              </div>
              <div className="col-span-4 p-4 text-sm font-mono font-medium text-foreground border-l border-border">
                Bad
              </div>
              <div className="col-span-4 p-4 text-sm font-mono font-medium text-foreground border-l border-border">
                Good
              </div>
            </div>
            <div className="divide-y divide-border">
              {/* Row 1 */}
              <div className="grid grid-cols-12 bg-card/30 items-center">
                <div className="col-span-4 p-4 text-sm text-muted-foreground">Primary action:</div>
                <div className="col-span-4 p-4 border-l border-border">
                  <div className="inline-flex items-center px-2.5 py-1 rounded bg-destructive/10 text-destructive text-xs font-medium">
                    &quot;Submit&quot;
                  </div>
                </div>
                <div className="col-span-4 p-4 border-l border-border">
                  <div className="inline-flex items-center px-2.5 py-1 rounded bg-green-500/10 text-green-600 text-xs font-medium">
                    &quot;Post Listing&quot;
                  </div>
                </div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-12 bg-card/30 items-center">
                <div className="col-span-4 p-4 text-sm text-muted-foreground">
                  Secondary action:
                </div>
                <div className="col-span-4 p-4 border-l border-border">
                  <div className="inline-flex items-center px-2.5 py-1 rounded bg-destructive/10 text-destructive text-xs font-medium">
                    &quot;Go back&quot;
                  </div>
                </div>
                <div className="col-span-4 p-4 border-l border-border">
                  <div className="inline-flex items-center px-2.5 py-1 rounded bg-green-500/10 text-green-600 text-xs font-medium">
                    &quot;Cancel&quot;
                  </div>
                </div>
              </div>
              {/* Row 3 */}
              <div className="grid grid-cols-12 bg-card/30 items-center">
                <div className="col-span-4 p-4 text-sm text-muted-foreground">
                  Destructive action:
                </div>
                <div className="col-span-4 p-4 border-l border-border">
                  <div className="inline-flex items-center px-2.5 py-1 rounded bg-destructive/10 text-destructive text-xs font-medium">
                    &quot;Erase&quot;
                  </div>
                </div>
                <div className="col-span-4 p-4 border-l border-border">
                  <div className="inline-flex items-center px-2.5 py-1 rounded bg-green-500/10 text-green-600 text-xs font-medium">
                    &quot;Delete Account&quot;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Be Specific (2-col table - moved down) */}
        <div className="space-y-4">
          <h4 className="text-xl font-heading font-semibold">Be specific</h4>
          <div className="rounded-xl border border-border overflow-hidden">
            <div className="grid grid-cols-2 bg-muted/50 border-b border-border">
              <div className="p-4 text-sm font-mono font-medium text-foreground">Bad</div>
              <div className="p-4 text-sm font-mono font-medium text-foreground border-l border-border">
                Good
              </div>
            </div>
            <div className="divide-y divide-border">
              <div className="grid grid-cols-2 bg-card/30">
                <div className="p-4 text-sm text-destructive">&quot;Remove&quot;</div>
                <div className="p-4 text-sm text-green-600 border-l border-border">
                  &quot;Delete listing&quot;
                </div>
              </div>
              <div className="grid grid-cols-2 bg-card/30">
                <div className="p-4 text-sm text-destructive">&quot;Change&quot;</div>
                <div className="p-4 text-sm text-green-600 border-l border-border">
                  &quot;Update price&quot;
                </div>
              </div>
              <div className="grid grid-cols-2 bg-card/30">
                <div className="p-4 text-sm text-destructive">&quot;Configure&quot;</div>
                <div className="p-4 text-sm text-green-600 border-l border-border">
                  &quot;Edit profile preferences&quot;
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Unimart Tone Guide Checklist */}
        <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 backdrop-blur-sm">
          <h4 className="text-xl font-heading font-semibold mb-6 flex items-center gap-2">
            <Check className="size-5 text-primary" />
            Unimart Voice Checklist
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Is it conversational? (Would you say it to a classmate?)",
              "Is it clear and concise? (Get to the point fast)",
              "Is appropriate for the context? (Celebratory vs serious)",
              "Is it inclusive? (Avoid gendered language)",
              "Does it guide the user? (What should they do next?)",
              "Is the terminology consistent? (Don't switch between 'post' and 'list')",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/30"
              >
                <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-primary">{i + 1}</span>
                </div>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
