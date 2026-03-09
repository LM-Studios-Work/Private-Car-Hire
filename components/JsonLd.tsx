const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mrfloat.co.zw";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: "Mr Float Holdings",
    alternateName: "MR FLOAT",
    description:
      "Professional private car hire, taxi rides, airport shuttles, school runs, CBD errands, city-to-city transport, and dial-a-delivery services in Bulawayo, Zimbabwe.",
    url: siteUrl,
    telephone: "+263785953345",
    email: "aaronphiri707@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bulawayo",
      addressCountry: "ZW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -20.1325,
      longitude: 28.6263,
    },
    openingHoursSpecification: [
      {
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
    ],
    sameAs: [`https://wa.me/263785953345`],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Transport Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Taxi / E-hailing",
            description: "Quick and reliable taxi services for all your city travel needs, available 24/7.",
            url: `${siteUrl}/services/taxi`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Airport Shuttle",
            description: "Reliable on-time airport transfers with flight tracking.",
            url: `${siteUrl}/services/airport`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Car Hire",
            description: "Affordable and flexible car hire with clean, fuel-efficient vehicles.",
            url: `${siteUrl}/services/car-hire`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "School Runs",
            description: "Safe and dependable transport for children with vetted drivers.",
            url: `${siteUrl}/services/school-runs`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dial-a-Delivery",
            description: "Quick and secure package delivery across the city.",
            url: `${siteUrl}/services/delivery`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CBD Errands",
            description: "City errands including document delivery and personal shopping.",
            url: `${siteUrl}/services/cbd-errands`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "City-to-City Transport",
            description: "Comfortable and affordable inter-city travel across Zimbabwe.",
            url: `${siteUrl}/services/city-to-city`,
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "3",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Thabo Molefe" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Exceptional service! The driver was professional and punctual. MR FLOAT made my airport transfer stress-free. Highly recommend!",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Lindiwe Nkosi" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Reliable school run service! My kids are always safe and picked up on time. The drivers are friendly and trustworthy.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sipho Mthembu" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Perfect for business trips! Professional chauffeur service with comfortable vehicles. Always on time for important meetings.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
  imageUrl,
}: {
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: "Mr Float Holdings",
      url: siteUrl,
      telephone: "+263785953345",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bulawayo",
        addressCountry: "ZW",
      },
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Bulawayo, Zimbabwe",
    },
    ...(imageUrl && {
      image: imageUrl.startsWith("http") ? imageUrl : `${siteUrl}${imageUrl}`,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
