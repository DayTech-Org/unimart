"use client";

import { cn } from "@unimart/ui";
import { ChevronLeft, ChevronRight, Hexagon } from "lucide-react";
import * as React from "react";

const testimonials = [
  {
    quote:
      "Unimart is the first marketplace that actually understands the student struggle. Whether I'm looking for dorm essentials or selling items I no longer need, the hostel delivery makes the whole process effortless.",
    name: "Wanjiku Njoroge",
    role: "Student, Daystar University",
    avatar: "https://i.pravatar.cc/150?u=wanjiku",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=100&w=2000&auto=format&fit=crop",
  },
  {
    quote:
      "As an international student, finding reliable places to shop was tough until I found Unimart. I managed to get great deals on campus fashion and electronics without the stress of navigating unfamiliar markets.",
    name: "Kevin Mutua",
    role: "Student, JKUAT",
    avatar: "https://i.pravatar.cc/150?u=kevin",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=100&w=2000&auto=format&fit=crop",
  },
  {
    quote:
      "Selling my old laptop was incredibly fast and secure. The university email verification gave me peace of mind knowing I was dealing with a fellow student. It's the ultimate campus plug!",
    name: "Amina Said",
    role: "Student, University of Nairobi",
    avatar: "https://i.pravatar.cc/150?u=amina",
    image:
      "https://images.unsplash.com/photo-1772203151689-9aef3e0396be?q=100&w=2000&auto=format&fit=crop",
  },
];

interface AuthLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function AuthLayout({ children, className }: AuthLayoutProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[activeIndex];

  return (
    <div className="flex h-[100dvh] w-full bg-background relative p-3 lg:p-4 font-accent overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_100%_0%,rgba(var(--primary-rgb),0.05),transparent_50%)]" />

      <div className="hidden lg:flex flex-col w-1/2 relative bg-surface rounded-2xl overflow-hidden shadow-sm h-full">
        <div className="absolute inset-0 bg-black">
          <img
            key={active.image}
            src={active.image}
            alt="Kenyan university students studying together"
            className="h-full w-full object-cover object-center animate-in fade-in duration-1000"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10 mix-blend-multiply" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 to-transparent" />
        </div>

        {/* <div className="relative z-10 p-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black shadow-lg">
            <Hexagon className="h-6 w-6 fill-black" />
          </div>
          <span className="text-2xl font-black tracking-tight text-white drop-shadow-md">
            Unimart
          </span>
        </div> */}

        <div className="relative z-10 mt-auto p-8 text-white max-w-2xl w-full">
          <div className="min-h-[140px] flex flex-col justify-end">
            <h2
              key={active.quote}
              className="text-2xl font-medium leading-[1.3] tracking-tight mb-6 animate-in slide-in-from-bottom-2 fade-in duration-500"
            >
              "{active.quote}"
            </h2>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white/20">
                <img
                  key={active.avatar}
                  src={active.avatar}
                  className="h-full w-full object-cover animate-in fade-in duration-500"
                  alt="Student avatar"
                />
              </div>
              <div
                key={active.name}
                className="animate-in slide-in-from-left-2 fade-in duration-500"
              >
                <p className="text-lg font-bold">{active.name}</p>
                <p className="text-xs font-medium text-white/70">{active.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevTestimonial}
                className="h-10 w-10 rounded-full flex items-center justify-center border border-white/20 bg-black/20 hover:bg-black/40 backdrop-blur-md transition-all text-white focus:outline-hidden focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                className="h-10 w-10 rounded-full flex items-center justify-center border border-white/20 bg-black/20 hover:bg-black/40 backdrop-blur-md transition-all text-white focus:outline-hidden focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "flex-1 flex flex-col items-center p-6 relative z-10 h-full overflow-y-auto",
          className
        )}
      >
        <div className="absolute top-6 left-6 lg:hidden flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Hexagon className="h-4 w-4 fill-current" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">Unimart</span>
        </div>

        <div className="w-full max-w-[380px] flex flex-col my-auto min-h-fit py-12">{children}</div>
      </div>
    </div>
  );
}
