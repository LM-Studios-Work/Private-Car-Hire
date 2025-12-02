"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Plane,
  Clock,
  UserCheck,
  Briefcase,
  ChevronDown,
  ShieldCheck,
  MapPin,
  Car,
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
                      href="/services/car-hire"
                      className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639]"
                    >
                      Car Hire
                    </Link>
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

      {/* Vehicle Selection - ADDED HERE */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-[#1a1a1a] rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 relative z-10">
                <span className="inline-block px-3 py-1 bg-[#A4C639] text-black font-bold text-xs rounded-full mb-4">
                  AIRPORT TRANSFER
                </span>
                <h2 className="text-4xl font-bold mb-4">Executive Sedan</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Arrive in comfort and style. Our executive sedans are perfect
                  for solo travelers or couples. Ample trunk space for large
                  suitcases.
                </p>

                <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
                  <div className="flex items-center gap-2 text-gray-300">
                    <UserCheck className="w-5 h-5 text-[#A4C639]" />
                    <span>Max 3 Passengers</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Car className="w-5 h-5 text-[#A4C639]" />
                    <span>Air Conditioned</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Briefcase className="w-5 h-5 text-[#A4C639]" />
                    <span>2 Large Suitcases</span>
                  </div>
                </div>

                <Link href="/booking">
                  <Button className="bg-[#A4C639] hover:bg-[#8FB02F] text-white rounded-full px-8 py-6 text-lg w-full md:w-auto">
                    Book This Vehicle
                  </Button>
                </Link>
              </div>

              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-inner p-4">
                  {/* Using object-contain so the whole car shows */}
                  <Image
                    src="/greycar.jpg"
                    alt="Executive Sedan"
                    fill
                    className="object-contain"
                  />
                </div>
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
