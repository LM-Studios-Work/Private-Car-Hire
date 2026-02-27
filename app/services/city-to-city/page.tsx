import CityToCityPage from "@/components/pages/services/CityToCityPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "City-to-City Travel | Mr Float Holdings",
  description:
    "Comfortable and private long-distance travel between cities in Zimbabwe. Book your inter-city ride today.",
  alternates: {
    canonical: "/services/city-to-city",
  },
};

export default function Page() {
  return <CityToCityPage />;
}
