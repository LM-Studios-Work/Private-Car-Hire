import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/ui/Navbar";

// Note: Ensure these custom fonts are set up correctly in your project.
const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mr Float Holdings",
  description: "Mr Float",
  generator: "v0.app",
  icons: {
    icon: [
      // Standard browser tab size (16x16)
      // Browser will use /FloatLogo.png and scale it down to 16x16.
      {
        url: "/faviconFloat.png",
        sizes: "16x16",
        media: "(prefers-color-scheme: light)",
      },
      // Standard desktop/taskbar size (32x32)
      {
        url: "/FloatLogo.png",
        sizes: "16x16",
        media: "(prefers-color-scheme: light)",
      },
      // High-resolution icon for desktop shortcuts, etc. (512x512)
      {
        url: "/faviconFloat.png",
        type: "image/png",
        sizes: "512x512",
      },
      // Dark mode icons using the same file (32x32)
      {
        url: "/faviconFloat.png",
        sizes: "16x16",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    // Apple Touch Icon for iOS 'Add to Home Screen' (180x180)
    apple: { url: "/faviconFloat.png", sizes: "180x180" },

    // Optional: Recommended manifest for PWA/Android support
    // Ensure you have this file in your public directory if using.
    // manifest: "/site.webmanifest",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Toaster />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
