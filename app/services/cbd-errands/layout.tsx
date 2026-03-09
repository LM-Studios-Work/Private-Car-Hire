import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CBD Errands Service in Bulawayo, Zimbabwe",
  description:
    "Let Mr Float Holdings handle your CBD errands in Bulawayo, Zimbabwe. From document delivery and bill payments to personal shopping and office supplies — we run your city errands so you don't have to.",
  keywords: [
    "CBD errands Bulawayo",
    "errand service Zimbabwe",
    "document delivery Bulawayo",
    "personal shopping Zimbabwe",
    "errand runner Bulawayo",
    "office errands Zimbabwe",
  ],
  alternates: {
    canonical: "/services/cbd-errands",
  },
  openGraph: {
    title: "CBD Errands Service in Bulawayo | Mr Float Holdings",
    description:
      "Let us handle your CBD errands in Bulawayo — document delivery, bill payments, personal shopping, and more.",
    url: "/services/cbd-errands",
    images: [{ url: "/CbdHero.png", alt: "CBD errands service in Bulawayo" }],
  },
};

export default function CbdErrandsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
