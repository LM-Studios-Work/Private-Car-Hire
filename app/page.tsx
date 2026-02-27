import HomePage from "@/components/pages/HomePage";
import JsonLd from "@/components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mr Float Holdings - Reliable Transport in Bulawayo",
  description:
    "Book reliable taxi rides, airport transfers, car hire, and school runs in Bulawayo. Your trusted transport partner.",
  alternates: {
    canonical: "./",
  },
};

export default function Page() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mr Float Holdings",
    image: "https://mrfloat.com/FloatLogo.png",
    telephone: "+263785953345",
    email: "aaronphiri707@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bulawayo",
      addressCountry: "ZW",
    },
    url: "https://mrfloat.com",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <HomePage />
    </>
  );
}
