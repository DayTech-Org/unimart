"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Button,
  Textarea,
} from "@unimart/ui";
import { FileText } from "lucide-react";
import { ComponentPreview } from "./component-preview";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  price: z.string().min(1, {
    message: "Price is required.",
  }),
  description: z.string().optional(),
});

export function FormSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      price: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section id="form" className="space-y-12 scroll-mt-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
          <FileText className="size-3.5" />
          Component: Form
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Form
        </h3>
        <p className="text-muted-foreground max-w-2xl font-sans">
          A collection of input fields that allow users to enter and submit data
          to a server or application.
        </p>
      </div>

      <ComponentPreview
        title="Listing Form"
        description="A form using react-hook-form and zod validation."
        code={`"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Button,
  Textarea,
} from "@unimart/ui";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  price: z.string().min(1, {
    message: "Price is required.",
  }),
  description: z.string().optional(),
});

export function ListingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      price: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Item Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Calculus Textbook" {...field} />
                </FormControl>
                <FormDescription>What are you selling?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price ($)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="25" {...field} />
                </FormControl>
                <FormDescription>
                  Set a fair price for students.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the condition, edition, etc."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">List Item</Button>
      </form>
    </Form>
  );
}`}
      >
        <div className="rounded-3xl bg-background/10 border border-primary/5 p-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Item Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. Calculus Textbook"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>What are you selling?</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price ($)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="25" {...field} />
                      </FormControl>
                      <FormDescription>
                        Set a fair price for students.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe the condition, edition, etc."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">List Item</Button>
            </form>
          </Form>
        </div>
      </ComponentPreview>
    </section>
  );
}
