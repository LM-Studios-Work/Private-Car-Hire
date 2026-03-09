import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Hire in Bulawayo, Zimbabwe",
  description:
    "Affordable and flexible car hire in Bulawayo, Zimbabwe with Mr Float Holdings. Choose from a fleet of fuel-efficient vehicles including Mazda Demio and Honda Fit hybrids. Daily, weekly, and monthly rates available.",
  keywords: [
    "car hire Bulawayo",
    "car rental Zimbabwe",
    "vehicle hire Bulawayo",
    "rent a car Bulawayo",
    "car hire Zimbabwe",
    "affordable car rental Bulawayo",
    "Mazda hire Zimbabwe",
    "Honda Fit hire Bulawayo",
  ],
  alternates: {
    canonical: "/services/car-hire",
  },
  openGraph: {
    title: "Car Hire in Bulawayo, Zimbabwe | Mr Float Holdings",
    description:
      "Affordable and flexible car hire in Bulawayo with fuel-efficient vehicles. Daily, weekly, and monthly rates available.",
    url: "/services/car-hire",
    images: [{ url: "/HeroHire.png", alt: "Car hire vehicles in Bulawayo" }],
  },
};

export default function CarHireLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
