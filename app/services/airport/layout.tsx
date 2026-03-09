import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airport Shuttle & Transfer Service in Bulawayo",
  description:
    "Reliable and punctual airport shuttle transfers in Bulawayo, Zimbabwe with Mr Float Holdings. Flight tracking, professional drivers, and 24/7 availability for Joshua Mqabuko Nkomo International Airport.",
  keywords: [
    "airport shuttle Bulawayo",
    "airport transfer Zimbabwe",
    "Joshua Mqabuko Nkomo airport transfer",
    "airport taxi Bulawayo",
    "airport pickup Zimbabwe",
    "flight transfer Bulawayo",
  ],
  alternates: {
    canonical: "/services/airport",
  },
  openGraph: {
    title: "Airport Shuttle & Transfer Service | Mr Float Holdings",
    description:
      "Reliable airport shuttle transfers in Bulawayo, Zimbabwe. Flight tracking and professional drivers available 24/7.",
    url: "/services/airport",
    images: [{ url: "/AirportHero.png", alt: "Airport shuttle service in Bulawayo" }],
  },
};

export default function AirportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
