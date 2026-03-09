import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Runs & Child Transport Service in Bulawayo",
  description:
    "Safe and reliable school runs in Bulawayo, Zimbabwe with Mr Float Holdings. Vetted drivers, scheduled pickups, and real-time tracking to keep your children safe on every journey to and from school.",
  keywords: [
    "school runs Bulawayo",
    "school transport Zimbabwe",
    "child transport Bulawayo",
    "safe school transport Zimbabwe",
    "school pickup Bulawayo",
    "kids transport Zimbabwe",
  ],
  alternates: {
    canonical: "/services/school-runs",
  },
  openGraph: {
    title: "School Runs & Child Transport in Bulawayo | Mr Float Holdings",
    description:
      "Safe and reliable school transport in Bulawayo. Vetted drivers and scheduled pickups for your children.",
    url: "/services/school-runs",
    images: [{ url: "/SchoolkidHero.png", alt: "School runs service in Bulawayo" }],
  },
};

export default function SchoolRunsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
