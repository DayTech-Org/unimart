"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@unimart/ui";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SocialAuth } from "./social-auth";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

interface LoginFormProps {
  onSubmit: (values: LoginFormValues) => void;
  onSocialLogin?: (provider: "google") => void;
  isLoading?: boolean;
  signUpUrl?: string;
}

export function LoginForm({
  onSubmit,
  onSocialLogin,
  isLoading,
  signUpUrl = "/auth/sign-up",
}: LoginFormProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex flex-col w-full animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground mb-1.5 sm:text-[32px]">
          Welcome back!
        </h1>
        <p className="text-muted-foreground text-[14px] font-medium leading-relaxed">
          Sign in to your account
        </p>
      </div>

      <div className="mb-6">
        <SocialAuth isLoading={isLoading} onGoogleClick={() => onSocialLogin?.("google")} />
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-[12px] font-semibold text-muted-foreground">
          <span className="bg-background px-4">or</span>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel className="text-[13px] font-bold text-foreground">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="admin@test.com"
                      autoComplete="email"
                      disabled={isLoading}
                      className="h-[44px] bg-transparent border-border text-foreground px-3.5 text-[14px] focus-visible:ring-primary focus-visible:ring-1 transition-all rounded-[6px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[11px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-1.5 relative">
                  <div className="flex items-center justify-between">
                    <FormLabel className="text-[13px] font-bold text-foreground">
                      Password
                    </FormLabel>
                    <button
                      type="button"
                      className="text-[12px] font-semibold text-primary hover:text-primary-hover transition-colors focus:outline-none"
                    >
                      Forgot?
                    </button>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        autoComplete="current-password"
                        disabled={isLoading}
                        className="h-[44px] bg-transparent border-border text-foreground pl-3.5 pr-10 text-[14px] focus-visible:ring-primary focus-visible:ring-1 transition-all rounded-[6px]"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Toggle password visibility"
                      >
                        {showPassword ? (
                          <EyeOff className="h-[16px] w-[16px]" />
                        ) : (
                          <Eye className="h-[16px] w-[16px]" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-[11px]" />
                </FormItem>
              )}
            />
          </div>

          <Button
            className="w-full h-[44px] rounded-[6px] font-semibold text-[14px] bg-primary text-primary-foreground hover:bg-primary-hover transition-all mt-1 shadow-none"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Login"}
          </Button>
        </form>
      </Form>

      <div className="mt-8 text-center space-y-6">
        <p className="text-[13px] font-medium text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Button
            asChild
            variant="link"
            className="font-semibold text-primary hover:text-primary-hover p-0 h-auto text-[13px]"
          >
            <Link href={signUpUrl}>Create one</Link>
          </Button>
        </p>

        <p className="text-[12px] leading-relaxed text-muted-foreground font-medium max-w-[340px] mx-auto">
          By continuing, you agree to Unimart&apos;s{" "}
          <Link href="/terms" className="font-semibold text-primary hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="font-semibold text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
