import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/ui/Navbar";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mrfloat.com"),
  title: {
    default: "Mr Float Holdings - Reliable Transport Services in Zimbabwe",
    template: "%s | Mr Float Holdings",
  },
  description:
    "Professional taxi rides, airport transfers, car hire, school runs, and delivery services across Bulawayo and Zimbabwe.",
  keywords: [
    "Taxi",
    "Car Hire",
    "Airport Shuttle",
    "School Runs",
    "Delivery",
    "Zimbabwe",
    "Bulawayo",
    "Transport",
  ],
  authors: [{ name: "Mr Float Holdings" }],
  creator: "Mr Float Holdings",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mrfloat.com",
    siteName: "Mr Float Holdings",
    title: "Mr Float Holdings - Reliable Transport Services",
    description:
      "Professional taxi rides, airport transfers, car hire, school runs, and delivery services across Bulawayo and Zimbabwe.",
    images: [
      {
        url: "/MainHero2.png",
        width: 1200,
        height: 630,
        alt: "Mr Float Holdings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr Float Holdings - Reliable Transport Services",
    description:
      "Professional taxi rides, airport transfers, car hire, school runs, and delivery services across Bulawayo and Zimbabwe.",
    images: ["/MainHero2.png"],
  },
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
  alternates: {
    canonical: "./",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/faviconFloat.png",
        sizes: "16x16",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/FloatLogo.png",
        sizes: "32x32",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/faviconFloat.png",
        type: "image/png",
        sizes: "512x512",
      },
      {
        url: "/faviconFloat.png",
        sizes: "16x16",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: { url: "/faviconFloat.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Toaster />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
