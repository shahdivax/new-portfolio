import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/cn";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ChatBot } from "@/components/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divax Shah — AI/ML Engineer Portfolio",
  description:
    "AI enthusiast and engineer building premium-grade AI systems: LLM fine-tuning, NLP, CV, and generative AI.",
  metadataBase: new URL("https://divax.sh"),
  openGraph: {
    title: "Divax Shah — AI/ML Engineer Portfolio",
    description:
      "AI enthusiast and engineer building premium-grade AI systems: LLM fine-tuning, NLP, CV, and generative AI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divax Shah — AI/ML Engineer Portfolio",
    description:
      "AI enthusiast and engineer building premium-grade AI systems: LLM fine-tuning, NLP, CV, and generative AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased min-h-dvh bg-bg text-fg transition-colors duration-500"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollProgress />
          <ChatBot />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
