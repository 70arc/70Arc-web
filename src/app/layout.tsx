import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/app/components/SmoothScrollProvider";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import ScrollProgress from "@/app/components/ScrollProgress";
import BackToTop from "@/app/components/BackToTop";
import CookieConsent from "@/app/components/CookieConsent";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "70Arc | Autonomous Creative Systems",
  description: "We remove gravity from the creative process. Neural event orchestration, computational cinematography, and anti-gravity workflows.",
  keywords: ["70Arc", "autonomous", "creative", "AI", "event orchestration", "cinematography"],
  authors: [{ name: "70Arc" }],
  openGraph: {
    title: "70Arc | Autonomous Creative Systems",
    description: "We remove gravity from the creative process.",
    type: "website",
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://70arc.com/#organization",
      name: "70Arc",
      url: "https://70arc.com",
      logo: {
        "@type": "ImageObject",
        url: "https://70arc.com/images/brand/logo.png",
      },
      description: "AI-native systems architecting creative futures. Neural orchestration, generative synthesis, and autonomous execution.",
      foundingDate: "2024",
      sameAs: [
        "https://linkedin.com/company/70arc",
        "https://instagram.com/70arc.hq",
        "https://twitter.com/70arc_hq",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "seventyarc@proton.me",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://70arc.com/#website",
      url: "https://70arc.com",
      name: "70Arc",
      description: "Autonomous Creative Systems",
      publisher: {
        "@id": "https://70arc.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-warm-white text-charcoal">
        <ThemeProvider>
          <SmoothScrollProvider>
            <ScrollProgress />
            {children}
            <BackToTop />
            <CookieConsent />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
