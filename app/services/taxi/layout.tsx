import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taxi & E-Hailing Service in Bulawayo",
  description:
    "Book a reliable taxi or e-hailing ride in Bulawayo, Zimbabwe with Mr Float Holdings. Professional drivers, 24/7 availability, and affordable rates for city rides and inter-city travel.",
  keywords: [
    "taxi Bulawayo",
    "e-hailing Bulawayo",
    "city rides Zimbabwe",
    "taxi hire Zimbabwe",
    "affordable taxi Bulawayo",
    "private taxi Zimbabwe",
  ],
  alternates: {
    canonical: "/services/taxi",
  },
  openGraph: {
    title: "Taxi & E-Hailing Service in Bulawayo | Mr Float Holdings",
    description:
      "Book a reliable taxi or e-hailing ride in Bulawayo, Zimbabwe. Professional drivers, 24/7 availability, and affordable rates.",
    url: "/services/taxi",
    images: [{ url: "/UberHero.png", alt: "Taxi and E-hailing service in Bulawayo" }],
  },
};

export default function TaxiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
