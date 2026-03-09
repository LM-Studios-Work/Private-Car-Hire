import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "City-to-City Transport in Zimbabwe | Inter-City Travel",
  description:
    "Comfortable and affordable city-to-city transport across Zimbabwe with Mr Float Holdings. Travel between Bulawayo, Harare, Victoria Falls, Gweru, and more in well-maintained, air-conditioned vehicles.",
  keywords: [
    "city to city transport Zimbabwe",
    "intercity travel Zimbabwe",
    "Bulawayo to Harare transport",
    "inter-city taxi Zimbabwe",
    "long distance transport Zimbabwe",
    "Bulawayo to Victoria Falls",
    "private transport Zimbabwe",
  ],
  alternates: {
    canonical: "/services/city-to-city",
  },
  openGraph: {
    title: "City-to-City Transport in Zimbabwe | Mr Float Holdings",
    description:
      "Comfortable and affordable inter-city travel across Zimbabwe. Travel between major cities in well-maintained vehicles.",
    url: "/services/city-to-city",
    images: [{ url: "/Intercity.jpg", alt: "City to city transport in Zimbabwe" }],
  },
};

export default function CityToCityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
