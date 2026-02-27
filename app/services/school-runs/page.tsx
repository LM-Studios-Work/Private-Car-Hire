import SchoolRunsPage from "@/components/pages/services/SchoolRunsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Runs & Transport Services | Mr Float Holdings",
  description:
    "Safe, reliable school run services for your children. Vetted drivers and punctual pickups for schools in Bulawayo.",
  alternates: {
    canonical: "/services/school-runs",
  },
};

export default function Page() {
  return <SchoolRunsPage />;
}
