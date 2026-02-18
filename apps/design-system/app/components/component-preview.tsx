"use client";

import * as React from "react";
import { Check, ChevronDown, ChevronUp, Copy } from "lucide-react";
import { cn, Button, ScrollArea } from "@unimart/ui";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-bash";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  code: string;
  language?: string;
}

export function ComponentPreview({
  title,
  description,
  children,
  code,
  language = "tsx",
  className,
  ...props
}: ComponentPreviewProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCopied, setIsCopied] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      Prism.highlightAll();
    }
  }, [isOpen]);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-xl border border-border bg-card/30 overflow-hidden",
        className,
      )}
      {...props}
    >
      <style jsx global>{`
        code[class*="language-"],
        pre[class*="language-"] {
          color: #e4e4e7;
          text-shadow: none;
          font-family:
            "JetBrains Mono", Menlo, Monaco, Consolas, "Andale Mono",
            "Ubuntu Mono", "Courier New", monospace;
          font-size: 13px;
          line-height: 1.6;
          direction: ltr;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          tab-size: 2;
          hyphens: none;
        }

        /* "Neon Night" Custom Theme */
        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: #71717a; /* Zinc 500 */
          font-style: italic;
        }
        .token.punctuation {
          color: #a1a1aa; /* Zinc 400 */
        }
        .token.namespace {
          opacity: 0.7;
        }
        .token.property,
        .token.tag,
        .token.constant,
        .token.symbol,
        .token.deleted {
          color: #f472b6; /* Pink 400 */
        }
        .token.boolean,
        .token.number {
          color: #fbbf24; /* Amber 400 */
        }
        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.inserted {
          color: #4ade80; /* Green 400 */
        }
        .token.operator,
        .token.entity,
        .token.url,
        .language-css .token.string,
        .style .token.string {
          color: #2dd4bf; /* Teal 400 */
        }
        .token.atrule,
        .token.attr-value,
        .token.keyword {
          color: #c084fc; /* Purple 400 */
        }
        .token.function,
        .token.class-name {
          color: #60a5fa; /* Blue 400 */
        }
        .token.regex,
        .token.important,
        .token.variable {
          color: #f472b6; /* Pink 400 */
        }
        .token.important,
        .token.bold {
          font-weight: bold;
        }
        .token.italic {
          font-style: italic;
        }
        .token.entity {
          cursor: help;
        }
      `}</style>
      {(title || description) && (
        <div className="flex flex-col space-y-1.5 p-6 border-b border-border/50">
          {title && (
            <h3 className="font-semibold leading-none tracking-tight">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}

      <div className="flex-1 p-6 flex flex-col gap-4">{children}</div>

      <div className="flex items-center justify-end p-2 border-t border-border/50 bg-muted/20">
        <Button
          variant="ghost"
          size="sm"
          className="h-7 gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Hide code" : "View code"}
          {isOpen ? (
            <ChevronUp className="h-3 w-3 transition-transform" />
          ) : (
            <ChevronDown className="h-3 w-3 transition-transform" />
          )}
        </Button>
      </div>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out border-t border-border/50 bg-[#0d1117]",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden min-w-0 min-h-0">
          <div className="relative h-full">
            <div className="absolute right-4 top-4 z-10">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-muted-foreground hover:bg-muted"
                onClick={onCopy}
              >
                {isCopied ? (
                  <Check className="h-3 w-3 text-green-500" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
                <span className="sr-only">Copy code</span>
              </Button>
            </div>
            <ScrollArea
              className="max-h-100 w-full h-full"
              type="auto"
              orientation="both"
            >
              <div className="p-4 pt-4 pr-10">
                <pre
                  className={cn(
                    `language-${language}`,
                    "bg-transparent! p-0! m-0! border-0!",
                  )}
                >
                  <code className={`language-${language}`}>{code}</code>
                </pre>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
}
