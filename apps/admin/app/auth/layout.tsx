"use client";
import { AuthLayout } from "@unimart/ui-patterns";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
