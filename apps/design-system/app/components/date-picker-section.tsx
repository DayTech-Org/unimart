"use client";

import { Button, Calendar, cn, Label, Popover, PopoverContent, PopoverTrigger } from "@unimart/ui";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";
import { ComponentPreview } from "./component-preview";

export function DatePickerSection() {
  const [date, setDate] = React.useState<{
    from: Date | undefined;
    to?: Date;
  }>();

  return (
    <section id="datepicker" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <CalendarIcon className="size-3.5" />
          Component: Date Picker
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">Date Picker</h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          A date range picker with presets.
        </p>
      </div>

      <ComponentPreview
        title="Date Range Picker"
        description="Pick a date range with quick selection presets."
        code={`"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn, Button, Calendar, Popover, PopoverContent, PopoverTrigger } from "@unimart/ui";

export function DatePickerWithPresets() {
  const [date, setDate] = React.useState<{
    from: Date | undefined;
    to?: Date;
  }>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id="date"
          variant={"outline"}
          className={cn(
            "w-[300px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, "LLL dd, y")} -{" "}
                {format(date.to, "LLL dd, y")}
              </>
            ) : (
              format(date.from, "LLL dd, y")
            )
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="flex">
          <div className="flex flex-col gap-2 p-3 border-r border-border">
             {/* Simple presets */}
             <Button variant="ghost" className="justify-start font-normal" onClick={() => setDate({ from: new Date(), to: new Date() })}>
              Today
             </Button>
             {/* ... more presets */}
          </div>
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={1}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}`}
      >
        <div className="flex justify-center">
          <div className="grid gap-2">
            <Label>Date Range</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-[300px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <div className="flex">
                  <div className="flex flex-col gap-2 p-3 border-r border-border">
                    <Button
                      variant="ghost"
                      className="justify-start font-normal"
                      onClick={() => setDate({ from: new Date(), to: new Date() })}
                    >
                      Today
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start font-normal"
                      onClick={() => {
                        const yesterday = new Date();
                        yesterday.setDate(yesterday.getDate() - 1);
                        setDate({ from: yesterday, to: yesterday });
                      }}
                    >
                      Yesterday
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start font-normal"
                      onClick={() => {
                        const today = new Date();
                        const last7 = new Date();
                        last7.setDate(today.getDate() - 7);
                        setDate({ from: last7, to: today });
                      }}
                    >
                      Last 7 days
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start font-normal"
                      onClick={() => {
                        const today = new Date();
                        const last30 = new Date();
                        last30.setDate(today.getDate() - 30);
                        setDate({ from: last30, to: today });
                      }}
                    >
                      Last 30 days
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start font-normal"
                      onClick={() => {
                        const today = new Date();
                        const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
                        setDate({ from: firstDay, to: today });
                      }}
                    >
                      This Month
                    </Button>
                  </div>
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={1}
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </ComponentPreview>
    </section>
  );
}
