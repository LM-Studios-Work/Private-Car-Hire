import AirportPage from "@/components/pages/services/AirportPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airport Transfers & Shuttle Services | Mr Float Holdings",
  description:
    "Book reliable airport transfers in Bulawayo. Meet & Greet service, flight monitoring, and comfortable shuttles.",
  alternates: {
    canonical: "/services/airport",
  },
};

export default function Page() {
  return <AirportPage />;
}
