import CarHirePage from "@/components/pages/services/CarHirePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Hire Services | Mr Float Holdings",
  description:
    "Affordable and reliable car hire services in Zimbabwe. Choose from our fleet of well-maintained vehicles for your trip.",
  alternates: {
    canonical: "/services/car-hire",
  },
};

export default function Page() {
  return <CarHirePage />;
}
