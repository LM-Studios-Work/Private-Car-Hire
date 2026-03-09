import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/ui/Navbar";

// Note: Ensure these custom fonts are set up correctly in your project.
const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mrfloat.co.zw";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mr Float Holdings | Private Car Hire & Transport in Bulawayo, Zimbabwe",
    template: "%s | Mr Float Holdings",
  },
  description:
    "Mr Float Holdings offers professional private car hire, taxi rides, airport shuttles, school runs, CBD errands, city-to-city transport, and dial-a-delivery in Bulawayo, Zimbabwe. Book online today.",
  keywords: [
    "private car hire Bulawayo",
    "taxi Bulawayo",
    "airport shuttle Zimbabwe",
    "school runs Bulawayo",
    "city to city transport Zimbabwe",
    "car hire Zimbabwe",
    "delivery service Bulawayo",
    "CBD errands Bulawayo",
    "Mr Float Holdings",
    "transport Bulawayo",
    "e-hailing Zimbabwe",
  ],
  authors: [{ name: "Mr Float Holdings" }],
  creator: "Mr Float Holdings",
  publisher: "Mr Float Holdings",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: siteUrl,
    siteName: "Mr Float Holdings",
    title: "Mr Float Holdings | Private Car Hire & Transport in Bulawayo, Zimbabwe",
    description:
      "Professional private car hire, taxi rides, airport shuttles, school runs, CBD errands, city-to-city transport, and delivery services in Bulawayo, Zimbabwe.",
    images: [
      {
        url: "/HeroBluecrop.webp",
        width: 1200,
        height: 630,
        alt: "Mr Float Holdings - Professional Transport Services in Bulawayo, Zimbabwe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr Float Holdings | Private Car Hire & Transport in Bulawayo",
    description:
      "Professional private car hire, taxi rides, airport shuttles, school runs, CBD errands, city-to-city transport, and delivery services in Bulawayo, Zimbabwe.",
    images: ["/HeroBluecrop.webp"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/faviconFloat.png", sizes: "16x16", type: "image/png" },
      { url: "/faviconFloat.png", sizes: "32x32", type: "image/png" },
      { url: "/faviconFloat.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/faviconFloat.png", sizes: "180x180", type: "image/png" },
    shortcut: "/faviconFloat.png",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#A4C639" />
        <meta name="geo.region" content="ZW-BU" />
        <meta name="geo.placename" content="Bulawayo, Zimbabwe" />
      </head>
      <body className={`font-sans antialiased`}>
        <Toaster />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
