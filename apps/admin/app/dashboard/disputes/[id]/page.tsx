"use client";

import {
  Badge,
  Button,
  Card,
  cn,
  Dialog,
  DialogContent,
  DialogTitle,
  VisuallyHidden,
} from "@unimart/ui";
import { SellerCard } from "@unimart/ui-patterns";
import { Clock, ExternalLink, MoreVertical, ShieldAlert } from "lucide-react";
import Image from "next/image";
import React from "react";
import DashboardContentLayout from "@/components/layouts/dashboard-content";

const disputeData = {
  id: "DSP-001",
  status: "investigating",
  severity: "critical",
  reason: "Damaged item received & Unresponsive Vendor",
  description:
    "The customer reported that the laptop screen was cracked upon arrival. They have attempted to reach the vendor 'Gizmo Tech' three times over the last 48 hours with no response. Shipping insurance was purchased but the vendor has not initiated a claim.",
  reportedAt: "March 11, 2024 at 10:45 AM",
  user: {
    name: "Kim Che",
    email: "k.che@daystar.ac.ke",
    avatar: "JD",
    ordersCount: 12,
    joinDate: "Sept 2023",
  },
  vendor: {
    name: "Gizmo Tech",
    owner: "Alex Kamau",
    avatar: "GT",
    rating: 4.8,
    disputesCount: 2,
  },
  evidence: [
    {
      id: 1,
      type: "image",
      url: "https://images.unsplash.com/photo-1597673030062-0a0f1a801a31?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Laptop Screen on Unboxing",
    },
    {
      id: 2,
      type: "image",
      url: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=60",
      caption: "Condition of original shipping box",
    },
  ],
  timeline: [
    {
      id: 1,
      type: "report",
      title: "Dispute Opened",
      description: "John Doe reported damaged delivery.",
      time: "Mar 11, 10:45 AM",
    },
    {
      id: 2,
      type: "message",
      title: "System Notification",
      description: "Auto-notification sent to Gizmo Tech.",
      time: "Mar 11, 10:46 AM",
    },
    {
      id: 3,
      type: "internal",
      title: "Admin Assigned",
      description: "Admin assigned to investigate the claim.",
      time: "Mar 11, 2:15 PM",
    },
    {
      id: 4,
      type: "update",
      title: "Status Changed",
      description: "Vulnerability check initiated on vendor response.",
      time: "Mar 12, 9:00 AM",
    },
  ],
};

export default function DisputeDetailPage() {
  const [selectedImage, setSelectedImage] = React.useState<{
    url: string;
    caption: string;
  } | null>(null);

  return (
    <DashboardContentLayout
      title={`Case #${disputeData.id}`}
      description="Detailed investigation and evidence review for marketplace conflict resolution."
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        { label: "Reports", href: "/dashboard" },
        { label: disputeData.id },
      ]}
      actions={
        <>
          <Badge
            variant="surface"
            className={cn(
              "border-none text-[10px] uppercase px-3 py-1 mr-2",
              disputeData.status === "investigating"
                ? "bg-orange-500/10 text-orange-500"
                : "bg-rose-500/10 text-rose-500"
            )}
          >
            {disputeData.status}
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 rounded-full bg-surface/30 border border-border/5 text-muted-foreground/50 hover:text-foreground hover:bg-surface hover:border-border transition-all duration-300"
          >
            <MoreVertical className="size-4" />
          </Button>
          <Button>Resolve Case</Button>
        </>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-20">
        {/* Left Column: Evidence & Description */}
        <div className="lg:col-span-8 space-y-8">
          <Card className="bg-surface/30 backdrop-blur-2xl border-border/10 overflow-hidden shadow-2xl rounded-xl">
            <div className="p-8 space-y-8">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 text-rose-500">
                    <ShieldAlert className="size-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">
                      Critical Claim
                    </span>
                  </div>
                  <h2 className="text-2xl font-black text-foreground tracking-tight leading-tight">
                    {disputeData.reason}
                  </h2>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-[10px] text-muted-foreground/30 uppercase">Timestamp</p>
                  <div className="flex items-center gap-2 justify-end text-xs font-bold text-muted-foreground/60">
                    {disputeData.reportedAt}
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-surface/20 border border-border/5 text-sm leading-relaxed text-muted-foreground/90 font-medium">
                {disputeData.description}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs uppercase text-foreground/50">Evidence Gallery</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {disputeData.evidence.map((img) => (
                    <button
                      type="button"
                      key={img.id}
                      onClick={() => setSelectedImage({ url: img.url, caption: img.caption })}
                      className="group relative rounded-xl overflow-hidden border border-border/10 aspect-video bg-background cursor-zoom-in w-full text-left"
                    >
                      <Image
                        src={img.url}
                        alt={img.caption}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                      <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                        <p className="text-[10px] font-bold text-white uppercase">{img.caption}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Party Cards */}
          <div className="flex items-center gap-4">
            <SellerCard
              className="flex-1 bg-surface/30 backdrop-blur-xl border-border rounded-xl"
              name={`Reporter: ${disputeData.user.name}`}
              avatarUrl="https://i.pravatar.cc/150"
              major={disputeData.user.email}
              isVerifiedStudent={true}
              stats={[{ label: "Total Orders", value: disputeData.user.ordersCount }]}
              actions={
                <Button variant="link" className="text-primary cursor-pointer group text-xs">
                  View Profile{" "}
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Button>
              }
            />

            <div className="flex flex-col items-center gap-1 shrink-0">
              <span className="text-sm text-muted-foreground/30 font-lexend italic">to</span>
            </div>

            <SellerCard
              className="flex-1 bg-surface/30 backdrop-blur-xl border-border rounded-xl"
              name={`Shop: ${disputeData.vendor.name}`}
              major={disputeData.vendor.owner}
              rating={disputeData.vendor.rating}
              totalReviews={124}
              stats={[
                {
                  label: "Total Disputes",
                  value: disputeData.vendor.disputesCount,
                },
              ]}
              actions={
                <Button variant="link" className="text-primary cursor-pointer group text-xs">
                  View Profile{" "}
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Button>
              }
            />
          </div>
        </div>

        {/* Right Column: Timeline & Resolution Panel */}
        <div className="lg:col-span-4 space-y-8 flex flex-col">
          {/* Internal Thread */}
          <Card className="bg-surface/40 flex-1 backdrop-blur-2xl border-border/10 p-6 rounded-xl shadow-xl flex flex-col max-h-125">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-xs font-black uppercase">Case Audit Log</h3>
              </div>
              <Button variant="ghost" size="icon" className="size-8 rounded-lg hover:bg-surface/50">
                <Clock className="size-4 text-muted-foreground/50" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar">
              {disputeData.timeline.map((event, idx) => (
                <div key={event.id} className="relative pl-6 pb-2">
                  {idx !== disputeData.timeline.length - 1 && (
                    <div className="absolute left-1.75 top-4 w-0.5 h-full bg-border/20" />
                  )}
                  <div className="absolute left-0 top-1.5 size-4 rounded-full border-2 border-background ring-4 ring-background z-10 bg-muted-foreground/20" />

                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-black text-foreground">{event.title}</p>
                      <span className="text-[9px] font-bold text-muted-foreground/40 whitespace-nowrap">
                        {event.time}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground/70 font-medium leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Stats Panel */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-surface/20 border border-border/5 space-y-2">
              <p className="text-[10px] font-bold text-muted-foreground/50 uppercase">
                Resolution Target
              </p>
              <p className="text-xl font-black text-foreground font-lexend tracking-tighter">48h</p>
            </div>
            <div className="p-5 rounded-xl bg-surface/20 border border-border/5 space-y-2">
              <p className="text-[10px] font-bold text-muted-foreground/50 uppercase">
                Priority Weight
              </p>
              <div className="flex items-baseline gap-1">
                <p className="text-xl font-black text-rose-500 font-lexend tracking-tighter">9.8</p>
                <span className="text-[10px] font-bold text-muted-foreground/30 lowercase">
                  /10
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-transparent border-none p-0 overflow-hidden shadow-none flex flex-col items-center justify-center gap-4">
          <VisuallyHidden>
            <DialogTitle>{selectedImage?.caption || "Evidence Image"}</DialogTitle>
          </VisuallyHidden>

          <div className="relative w-full aspect-video md:aspect-auto md:h-[80vh] bg-surface/20 backdrop-blur-3xl rounded-3xl overflow-hidden border border-border/10 group">
            {selectedImage && (
              <Image
                src={selectedImage.url}
                alt={selectedImage.caption}
                fill
                className="object-contain"
                priority
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-sm font-bold text-white uppercase text-center">
                {selectedImage?.caption}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </DashboardContentLayout>
  );
}
