import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Ride or Service",
  description:
    "Book your transport service with Mr Float Holdings in Bulawayo, Zimbabwe. Taxi rides, airport shuttles, car hire, school runs, deliveries, and more — all bookable in minutes.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/booking",
  },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
