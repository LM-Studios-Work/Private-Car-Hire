"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Timer, Smartphone, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CBDErrandsPage() {
  const router = useRouter();

  const handleBookNow = () => {
    router.push(`/booking?service=${encodeURIComponent("CBD Errands")}`);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/CbdHero.png" // Ensure you have a relevant city image
          alt="CBD Errands"
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">CBD Errands</h1>
          <p className="text-xl md:text-2xl font-light">
            Quick City Center Errands Made Easy
          </p>
        </div>
      </section>

      {/* About Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-center">
            About Our CBD Errands Service
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Short on time? Let MR FLOAT handle your CBD errands! Whether you
            need to pick up documents, grab lunch, collect parcels, or run quick
            shopping errands in the city center, our drivers are ready to help.
            We offer fast, reliable service for all your urban errands, saving
            you time and hassle in the busy CBD.
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
            {/* Quick Service */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#A4C639] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Timer className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Quick Service</h3>
              <p className="text-gray-600">
                Fast turnaround times for busy schedules
              </p>
            </div>

            {/* Any Errand */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Any Errand</h3>
              <p className="text-gray-600">
                Documents, shopping, lunch, or parcels
              </p>
            </div>

            {/* On-Demand */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#A4C639] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">On-Demand</h3>
              <p className="text-gray-600">Book instantly when you need us</p>
            </div>

            {/* Reliable */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Reliable</h3>
              <p className="text-gray-600">
                Professional service every single time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose - List Layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Why Choose MR FLOAT for CBD Errands
          </h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[#A4C639] text-2xl">✓</span>
              <span>
                <strong>Urgency:</strong> Fast service for urgent errands and
                time-sensitive tasks.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A4C639] text-2xl">✓</span>
              <span>
                <strong>Flexibility:</strong> Versatile service for any type of
                CBD errand.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A4C639] text-2xl">✓</span>
              <span>
                <strong>Value:</strong> Affordable rates for quick city center
                tasks.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A4C639] text-2xl">✓</span>
              <span>
                <strong>Knowledge:</strong> Professional drivers who know the
                CBD area well.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A4C639] text-2xl">✓</span>
              <span>
                <strong>Convenience:</strong> Save time and avoid the hassle of
                city traffic and parking.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Help with CBD Errands?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Fast, reliable service for all your city center needs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="https://wa.me/63785953345">
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
