import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/ui/Navbar";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mr Float Holdings",
  description: "Mr Float",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/Float.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Float.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/Float.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "/Float.jpg",
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
