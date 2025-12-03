"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  FileText,
  Timer,
  Smartphone,
  Award,
  ChevronDown,
  MapPin,
  Car,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CBDErrandsPage() {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const router = useRouter();

  const handleBookNow = () => {
    router.push(`/booking?service=${encodeURIComponent("CBD Errands")}`);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="text-2xl font-bold text-black cursor-pointer">
              <span className="text-black">MR</span>{" "}
              <span className="text-gray-400">FLOAT</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-gray-700">
            <Link
              href="/"
              className="text-gray-600 hover:text-[#A4C639] transition-colors font-medium"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <div className="hover:text-[#A4C639] transition-colors font-medium flex items-center gap-1 cursor-pointer py-2">
                Services <ChevronDown className="w-4 h-4" />
              </div>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-[220px]">
                  <div className="bg-white shadow-lg rounded-xl py-2 border border-gray-100">
                    {[
                      { href: "/services/car-hire", label: "Car Hire" },
                      { href: "/services/taxi", label: "Taxi / E-Hailing" },
                      { href: "/services/airport", label: "Airport Shuttle" },
                      { href: "/services/school-runs", label: "School Runs" },

                      { href: "/services/delivery", label: "Dial-a-Delivery" },
                      { href: "/services/cbd-errands", label: "CBD Errands" },
                    ].map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639]"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#fleet"
              className="text-gray-600 hover:text-[#A4C639] transition-colors font-medium"
            >
              Fleet
            </Link>
            <Link
              href="/#about"
              className="text-gray-600 hover:text-[#A4C639] transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-gray-600 hover:text-[#A4C639] transition-colors font-medium"
            >
              Contact
            </Link>
            <Link href="/booking">
              <Button className="bg-[#A4C639] hover:bg-[#8fb82e] text-white rounded-full px-6">
                Book Online
              </Button>
            </Link>
          </div>
        </div>
      </nav>

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
