import DeliveryPage from "@/components/pages/services/DeliveryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivery Services | Mr Float Holdings",
  description:
    "Fast and reliable delivery services for packages and parcels in Bulawayo. Same-day delivery available.",
  alternates: {
    canonical: "/services/delivery",
  },
};

export default function Page() {
  return <DeliveryPage />;
}
