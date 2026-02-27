import TaxiPage from "@/components/pages/services/TaxiPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taxi & Inter-City Services | Mr Float Holdings",
  description:
    "Reliable taxi and inter-city travel services. Book a ride for local trips or long-distance journeys across Zimbabwe.",
  alternates: {
    canonical: "/services/taxi",
  },
};

export default function Page() {
  return <TaxiPage />;
}
