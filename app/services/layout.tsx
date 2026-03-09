import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore all transport services offered by Mr Float Holdings in Bulawayo, Zimbabwe — taxi rides, airport shuttles, car hire, school runs, CBD errands, city-to-city travel, and dial-a-delivery.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | Mr Float Holdings",
    description:
      "Explore all transport services in Bulawayo, Zimbabwe — taxi rides, airport shuttles, car hire, school runs, CBD errands, city-to-city travel, and dial-a-delivery.",
    url: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
