"use client";

import { Card, CardContent, CardHeader } from "@unimart/ui";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const data = [
  { name: "Mon", signups: 10, visitors: 120 },
  { name: "Tue", signups: 25, visitors: 300 },
  { name: "Wed", signups: 15, visitors: 200 },
  { name: "Thu", signups: 35, visitors: 450 },
  { name: "Fri", signups: 20, visitors: 350 },
  { name: "Sat", signups: 45, visitors: 600 },
  { name: "Sun", signups: 30, visitors: 400 },
];

export function SignupAnalytics() {
  return (
    <Card className="bg-surface/50 backdrop-blur-xl border-border/40 overflow-hidden group hover:border-primary/20 transition-all duration-700 shadow-2xl">
      <CardHeader className="p-8 pb-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-foreground">Growth Analytics</h3>
            <p className="text-xs text-muted-foreground/50">Vendor Signups & Platform engagement</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-xs text-muted-foreground/40">Total Signups</p>
              <div className="flex items-center gap-2 justify-end">
                <span className="text-2xl font-black text-foreground">1,284</span>
                <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  +12%
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground/40">Engagement</p>
              <div className="flex items-center gap-2 justify-end">
                <span className="text-2xl font-black text-foreground">84.2k</span>
                <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  +8%
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 h-80 w-full mt-8 relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
            <defs>
              {/* Neon Glow Filter */}
              <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              <linearGradient id="colorSignups" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff6531" stopOpacity={0.2} />
                <stop offset="50%" stopColor="#ff6531" stopOpacity={0.05} />
                <stop offset="95%" stopColor="#ff6531" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4} />
                <stop offset="40%" stopColor="#0ea5e9" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="name"
              hide={false}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "rgba(255,255,255,0.2)",
                fontSize: 10,
                fontWeight: "bold",
              }}
              padding={{ left: 30, right: 30 }}
            />

            <CartesianGrid strokeDasharray="0" vertical={false} stroke="rgba(255,255,255,0.03)" />

            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-background/80 backdrop-blur-2xl border border-white/10 p-4 rounded-2xl shadow-2xl min-w-32 animate-in fade-in zoom-in-95 duration-300">
                      <p className="text-[10px] uppercase font-black text-muted-foreground/50 mb-3 tracking-widest">
                        {payload[0].payload.name}
                      </p>
                      <div className="space-y-2">
                        {payload.map((entry, index) => (
                          <div key={index} className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                              <div
                                className="size-1.5 rounded-full"
                                style={{ backgroundColor: entry.color }}
                              />
                              <span className="text-[11px] font-bold text-foreground/80 lowercase">
                                {entry.name}
                              </span>
                            </div>
                            <span className="text-sm font-black text-foreground">
                              {entry.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
                return null;
              }}
              cursor={{ stroke: "rgba(255,255,255,0.1)", strokeWidth: 1 }}
            />

            <Area
              type="monotone"
              dataKey="visitors"
              name="Visitors"
              stroke="#0ea5e9"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorVisitors)"
              filter="url(#neon-glow)"
              activeDot={{
                r: 6,
                fill: "#0ea5e9",
                stroke: "#fff",
                strokeWidth: 2,
                className: "animate-pulse",
              }}
              animationDuration={2500}
            />

            <Area
              type="monotone"
              dataKey="signups"
              name="Signups"
              stroke="#ff6531"
              strokeWidth={3}
              strokeDasharray="6 4"
              fillOpacity={1}
              fill="url(#colorSignups)"
              filter="url(#neon-glow)"
              activeDot={{
                r: 5,
                fill: "#ff6531",
                stroke: "#fff",
                strokeWidth: 2,
              }}
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
