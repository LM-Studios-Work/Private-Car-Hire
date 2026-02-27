import BookingPage from "@/components/pages/BookingPage";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Book a Ride | Mr Float Holdings",
  description:
    "Book your taxi, airport shuttle, car hire, or delivery service with Mr Float Holdings. Quick and easy booking process.",
  alternates: {
    canonical: "/booking",
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading booking form...</div>}>
      <BookingPage />
    </Suspense>
  );
}
