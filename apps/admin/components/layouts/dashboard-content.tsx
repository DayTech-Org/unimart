import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@unimart/ui";
import Link from "next/link";
import React from "react";

interface BreadcrumbProp {
  label: string;
  href?: string;
}

interface DashboardContentProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbProp[];
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export default function DashboardContentLayout({
  children,
  title,
  description,
  breadcrumbs,
  actions,
}: DashboardContentProps) {
  return (
    <main className="pt-6 px-6 pb-40 text-foreground min-h-full flex flex-col gap-8 overflow-y-visible">
      <div className="space-y-4">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.label}>
                  <BreadcrumbItem>
                    {crumb.href ? (
                      <BreadcrumbLink asChild>
                        <Link href={crumb.href}>{crumb.label}</Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        )}

        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground">{title}</h1>
            {description && (
              <p className="text-muted-foreground text-sm font-medium opacity-70">{description}</p>
            )}
          </div>
          {actions && <div className="flex items-center gap-3">{actions}</div>}
        </header>
      </div>
      {children}
      {/* spacer */}
      <div className="h-32 shrink-0 pointer-events-none" />
    </main>
  );
}
