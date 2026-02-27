import ServicesPage from "@/components/pages/ServicesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Mr Float Holdings",
  description:
    "Explore our comprehensive transport services including taxi rides, airport shuttles, car hire, school runs, and delivery services.",
  alternates: {
    canonical: "/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}
