import CbdErrandsPage from "@/components/pages/services/CbdErrandsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CBD Errands Services | Mr Float Holdings",
  description:
    "We handle your city center errands efficiently. Document pickup, shopping, and more in Bulawayo CBD.",
  alternates: {
    canonical: "/services/cbd-errands",
  },
};

export default function Page() {
  return <CbdErrandsPage />;
}
