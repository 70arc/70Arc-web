import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import GlassCursor from "@/components/GlassCursor";
import SecurityLayer from "@/components/SecurityLayer";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import Compass from "@/components/Compass";
import BackgroundGrain from "@/components/BackgroundGrain";
import Logo from "@/components/Logo";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: content.global.metaTitle,
  description: content.global.metaDescription,
  keywords: ["AI", "event orchestration", "cinematography", "autonomous systems", "creative technology"],
  openGraph: {
    title: content.global.metaTitle,
    description: content.global.metaDescription,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <GlassCursor />
            <SecurityLayer />
            <Logo />
            <ThemeToggle />
            <Compass />
            <BackgroundGrain />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
