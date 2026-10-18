import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import FloatingLeftContact from "@/components/shared/FloatingLeftContact";
import CookieConsent from "@/components/ui/CookieConsent";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

import { generateLocalBusinessSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: {
    default: "Ram Enterprises | Safety Nets & Invisible Grills Chennai, Tamil Nadu",
    template: "%s | Ram Enterprises - Safety Nets & Invisible Grills Chennai, Tamil Nadu",
  },
  description:
    "Ram Enterprises provides premium balcony safety nets, anti-bird netting, child fall protection, and SS316 invisible grills across Chennai, including Adyar, Velachery, Anna Nagar, T. Nagar, Tambaram, Porur, and OMR Sholinganallur.",
  keywords: [
    "Safety Nets Chennai, Tamil Nadu",
    "Invisible Grills Chennai, Tamil Nadu",
    "Balcony Safety Nets Chennai, Tamil Nadu",
    "Pigeon Safety Nets Chennai, Tamil Nadu",
    "Window Invisible Grills Chennai, Tamil Nadu",
    "Ceiling Cloth Hangers Chennai, Tamil Nadu",
    "Anti Bird Spikes Chennai, Tamil Nadu",
    "Ram Enterprises Chennai, Tamil Nadu",
    "Safety Nets Adyar",
    "Safety Nets Anna Nagar",
    "Safety Nets Velachery",
  ],
  metadataBase: new URL("https://ramenterpriseschennai.com"),
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google6c0d20c12b2851bb",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Ram Enterprises | Safety Nets & Invisible Grills Chennai, Tamil Nadu",
    description:
      "Expert safety netting and modern invisible grill installation in Chennai across Adyar, Velachery, Anna Nagar, T. Nagar, Tambaram, Porur, and OMR Sholinganallur.",
    url: "https://ramenterpriseschennai.com",
    siteName: "Ram Enterprises",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Ram Enterprises - Safety Nets & Invisible Grills Chennai, Tamil Nadu",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram Enterprises | Safety Nets & Invisible Grills Chennai, Tamil Nadu",
    description:
      "Premium safety nets and invisible grill installers in Chennai serving Adyar, Velachery, Anna Nagar, T. Nagar, Tambaram, Porur, and OMR.",
    images: ["/images/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon fallback tags for all browsers & search engines */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 flex flex-col min-h-screen selection:bg-[#B87333] selection:text-white`}
      >
        {/* LocalBusiness JSON-LD Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        <Navbar />
        <main className="flex-grow pt-[84px] sm:pt-[92px]">{children}</main>
        <Footer />
        <FloatingCTA />
        <FloatingLeftContact />
        <CookieConsent />
      </body>
    </html>
  );
}
