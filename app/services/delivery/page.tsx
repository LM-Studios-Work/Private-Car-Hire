"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Package,
  MapPin,
  CalendarClock,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DeliveryPage() {
  const router = useRouter();

  const handleBookNow = () => {
    router.push(`/booking?service=${encodeURIComponent("Dial-a-Delivery")}`);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/DeliveryHero.png" // Ensure you have a relevant delivery image
          alt="Delivery Service"
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Dial-a-Delivery
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Fast, Reliable Package & Parcel Delivery
          </p>
        </div>
      </section>

      {/* About Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-center">
            About Our Delivery Service
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Need something delivered quickly and safely? MR FLOAT's
            Dial-a-Delivery service offers fast, secure package and parcel
            delivery across the city. Whether it's documents, gifts, groceries,
            or business supplies, we ensure your items reach their destination
            on time and in perfect condition.
          </p>
        </div>
      </section>

      {/* What's Included - Grid Layout */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Same Day */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#A4C639] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Same-Day Delivery</h3>
              <p className="text-gray-600">
                Fast delivery within hours across the city
              </p>
            </div>

            {/* Secure Handling */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Secure Handling</h3>
              <p className="text-gray-600">
                Your packages are handled with extreme care
              </p>
            </div>

            {/* Real-Time Tracking */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#A4C639] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">
                Track your delivery live from pickup to drop-off
              </p>
            </div>

            {/* Flexible Scheduling */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CalendarClock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Choose your pickup and delivery time slots
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose - List Layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Why Choose MR FLOAT Delivery
          </h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[#A4C639] text-2xl">✓</span>
              <span>
                <strong>Speed:</strong> Fast same-day and next-day delivery
                options available.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A4C639] text-2xl">✓</span>
              <span>
                <strong>Professionalism:</strong> Dedicated drivers who handle
                packages with care.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A4C639] text-2xl">✓</span>
              <span>
                <strong>Visibility:</strong> Real-time tracking so you always
                know where your package is.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A4C639] text-2xl">✓</span>
              <span>
                <strong>Affordability:</strong> Competitive pricing for all
                delivery sizes.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A4C639] text-2xl">✓</span>
              <span>
                <strong>Peace of Mind:</strong> Secure handling and digital
                proof of delivery.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Send Your Package?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Get a quote or book your delivery now.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="https://wa.me/1234567890">
              <Button className="bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full px-8 py-6 text-lg">
                WhatsApp Us
              </Button>
            </Link>
            <Button
              onClick={handleBookNow}
              className="bg-[#A4C639] hover:bg-[#8fb82e] text-white rounded-full px-8 py-6 text-lg"
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
