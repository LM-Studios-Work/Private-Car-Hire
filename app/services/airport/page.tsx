"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Plane,
  Clock,
  UserCheck,
  Briefcase,
  ChevronDown,
  Car,
  Fuel,
  Luggage, // Ensure this is imported
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AirportServicePage() {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

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
                    <Link
                      href="/services/taxi"
                      className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639]"
                    >
                      Taxi / E-Hailing
                    </Link>
                    <Link
                      href="/services/airport"
                      className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639]"
                    >
                      Airport Shuttle
                    </Link>
                    <Link
                      href="/services/school-runs"
                      className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639]"
                    >
                      School Runs
                    </Link>
                    <Link
                      href="/services/city-to-city"
                      className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639]"
                    >
                      City-to-City Rides
                    </Link>
                    <Link
                      href="/services/delivery"
                      className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639]"
                    >
                      Dial-a-Delivery
                    </Link>
                    <Link
                      href="/services/car-hire"
                      className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639]"
                    >
                      Car Hire
                    </Link>
                    <Link
                      href="/services/cbd-errands"
                      className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639]"
                    >
                      CBD Errands
                    </Link>
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
              <Button className="bg-[#A4C639] hover:bg-[#8fb82e] text-white rounded-xl px-6">
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
          src="/AirportHero.png"
          alt="Airport Transfer"
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Airport Transfers
          </h1>
          <p className="text-xl md:text-2xl">We Wait, So You Don't Have To.</p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Executive Airport Shuttle
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Avoid the chaos of airport parking and the uncertainty of
            ride-hailing apps. MR FLOAT offers a seamless Meet & Greet service
            for OR Tambo and Lanseria. We monitor your flight schedule manually,
            ensuring your driver is waiting at arrivals whether you land early
            or delayed.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#A4C639] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Meet & Greet</h3>
              <p className="text-gray-600">
                Driver waits in arrivals with a name board
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Flight Monitoring</h3>
              <p className="text-gray-600">
                We track delays and adjust pickup times
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#A4C639] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Luggage Assist</h3>
              <p className="text-gray-600">Help with heavy bags to the car</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Free Wait Time</h3>
              <p className="text-gray-600">60 mins complimentary wait time</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR FLEET (Added Fleet Options) --- */}
      <section id="fleet" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Choose Your Shuttle</h2>
            <p className="text-gray-600 text-lg">
              Reliable vehicles for solo travelers, couples, and groups.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mazda Demio */}
            <div className="bg-[#F5F5F0] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#A4C639]">
              <div className="aspect-[4/3] bg-white flex items-center justify-center p-6 relative">
                <img
                  src="/Mazda.png"
                  alt="Mazda Demio"
                  className="w-full h-full object-contain drop-shadow-xl"
                />
                <span className="absolute top-4 right-4 bg-[#A4C639] text-white text-xs font-bold px-3 py-1 rounded-full">
                  ECONOMY
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Mazda Demio</h3>
                <div className="flex gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <Car className="w-4 h-4 text-[#A4C639]" /> 4 seats
                  </span>
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <Luggage className="w-4 h-4 text-[#A4C639]" /> 2 Bags
                  </span>
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <Fuel className="w-4 h-4 text-[#A4C639]" /> AC
                  </span>
                </div>
                <Link href="/booking">
                  <Button className="w-full bg-black hover:bg-[#333] text-white rounded-xl h-12 text-lg">
                    Book Shuttle
                  </Button>
                </Link>
              </div>
            </div>

            {/* Honda Fit Hybrid */}
            <div className="bg-[#F5F5F0] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#A4C639]">
              <div className="aspect-[4/3] bg-white flex items-center justify-center p-6 relative">
                <img
                  src="/HondaB.png"
                  alt="Honda Fit GP5 Hybrid"
                  className="w-full h-full object-contain drop-shadow-xl"
                />
                <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  QUIET RIDE
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Honda Fit GP5</h3>
                <div className="flex gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <Car className="w-4 h-4 text-[#A4C639]" /> 4 seats
                  </span>
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <Luggage className="w-4 h-4 text-[#A4C639]" /> 3 Bags
                  </span>
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <Fuel className="w-4 h-4 text-[#A4C639]" /> Hybrid
                  </span>
                </div>
                <Link href="/booking">
                  <Button className="w-full bg-black hover:bg-[#333] text-white rounded-xl h-12 text-lg">
                    Book Shuttle
                  </Button>
                </Link>
              </div>
            </div>

            {/* Honda Fit GP3 */}
            <div className="bg-[#F5F5F0] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#A4C639]">
              <div className="aspect-[4/3] bg-white flex items-center justify-center p-6 relative">
                <img
                  src="/HondaG.png"
                  alt="Honda Fit GP3"
                  className="w-full h-full object-contain drop-shadow-xl"
                />
                <span className="absolute top-4 right-4 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                  SPACIOUS
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Honda Fit GP3</h3>
                <div className="flex gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <Car className="w-4 h-4 text-[#A4C639]" /> 4 seats
                  </span>
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <Luggage className="w-4 h-4 text-[#A4C639]" /> 4 Bags
                  </span>
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <Fuel className="w-4 h-4 text-[#A4C639]" /> AC
                  </span>
                </div>
                <Link href="/booking">
                  <Button className="w-full bg-black hover:bg-[#333] text-white rounded-xl h-12 text-lg">
                    Book Shuttle
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Why Choose Our Shuttle?
          </h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[#A4C639] text-2xl">✓</span>
              <span>
                <strong>Guaranteed Punctuality:</strong> We arrive 15 minutes
                before your pickup.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A4C639] text-2xl">✓</span>
              <span>
                <strong>Fixed Rates:</strong> Know exactly what you pay before
                you fly. No surprises.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A4C639] text-2xl">✓</span>
              <span>
                <strong>Clean Vehicles:</strong> Relax in a sanitized,
                air-conditioned car after your flight.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A4C639] text-2xl">✓</span>
              <span>
                <strong>Door-to-Door:</strong> Direct transport from terminal to
                your front door.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A4C639] text-2xl">✓</span>
              <span>
                <strong>24/7 Availability:</strong> We operate around the clock
                for all flight times.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't Miss Your Flight</h2>
          <p className="text-xl text-gray-700 mb-8">
            Secure your booking at least 24 hours in advance.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="https://wa.me/27XXXXXXXXX" target="_blank">
              <Button className="bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full px-8 py-6 text-lg">
                WhatsApp Quote
              </Button>
            </Link>
            <Link href="/booking">
              <Button className="bg-[#A4C639] hover:bg-[#8fb82e] text-white rounded-full px-8 py-6 text-lg">
                Book Shuttle
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
