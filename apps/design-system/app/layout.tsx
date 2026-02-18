import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import { ThemeProvider, Toaster } from "@unimart/ui";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

// todo: Add calsans

export const metadata: Metadata = {
  title: "Unimart | Design System",
  description: "The ultimate student marketplace for everything campus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${lexend.variable} antialiased`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="mango"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark", "mango"]}
        >
          <Toaster richColors />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
