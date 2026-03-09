import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dial-a-Delivery Service in Bulawayo, Zimbabwe",
  description:
    "Fast and secure package delivery across Bulawayo with Mr Float Holdings' Dial-a-Delivery service. Same-day delivery, real-time tracking, and reliable couriers for personal and business needs in Zimbabwe.",
  keywords: [
    "delivery service Bulawayo",
    "package delivery Zimbabwe",
    "courier Bulawayo",
    "same day delivery Zimbabwe",
    "dial-a-delivery Bulawayo",
    "parcel delivery Zimbabwe",
    "local delivery Bulawayo",
  ],
  alternates: {
    canonical: "/services/delivery",
  },
  openGraph: {
    title: "Dial-a-Delivery Service in Bulawayo | Mr Float Holdings",
    description:
      "Fast and secure package delivery across Bulawayo. Same-day delivery for personal and business needs.",
    url: "/services/delivery",
    images: [{ url: "/DeliveryHero.png", alt: "Delivery service in Bulawayo" }],
  },
};

export default function DeliveryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
