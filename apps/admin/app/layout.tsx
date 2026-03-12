import { ThemeProvider, Toaster } from "@unimart/ui";
import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unimart | Admin Dashboard",
  description: "Management portal for Unimart administrators.",
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
          defaultTheme="dark"
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
