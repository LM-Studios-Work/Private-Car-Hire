"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, ChevronDown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AirportServicePage() {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-8 py-4">
          <Link href="/">
            <div className="text-2xl font-bold text-black cursor-pointer">
              <span className="text-black">MR</span>{" "}
              <span className="text-gray-400">FLOAT</span>
            </div>
          </Link>
          <div className="hidden md:flex gap-8 items-center text-gray-700">
            <Link
              href="/#home"
              className="hover:text-[#A4C639] transition-colors font-medium"
            >
              Home
            </Link>

            {/* Services Dropdown - GAP FIX APPLIED */}
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
              className="hover:text-[#A4C639] transition-colors font-medium"
            >
              Fleet
            </Link>
            <Link
              href="/#about"
              className="hover:text-[#A4C639] transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="hover:text-[#A4C639] transition-colors font-medium"
            >
              Contact
            </Link>
            <Link href="/booking">
              <Button className="bg-[#A4C639] hover:bg-[#8FB02F] text-white rounded-xl">
                Book Online
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/professional-driver-at-airport-terminal.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-8 text-center text-white">
          <h1 className="text-6xl font-bold mb-6">
            Start Your Journey with Peace of Mind.
          </h1>
          <p className="text-2xl mb-8 text-gray-200">
            Punctual transfers to OR Tambo, Lanseria, and private airstrips. We
            wait, so you don't have to.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/booking">
              <Button
                size="lg"
                className="bg-[#A4C639] hover:bg-[#8FB02F] text-white rounded-xl text-lg px-8"
              >
                Book Shuttle
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white/20 rounded-xl text-lg px-8"
            >
              View Rates
            </Button>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Executive Airport Transfers
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Avoid the stress of airport parking and the uncertainty of finding a
            ride upon arrival. MR FLOAT offers a reliable airport shuttle
            service designed for travelers who value punctuality. We check
            flight schedules manually to ensure our driver is ready at the
            arrivals terminal whether your flight is early, on time, or delayed.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 rounded-3xl border-0 bg-white">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-[#A4C639] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Meet & Greet</h3>
                  <p className="text-gray-600">
                    Driver waits in the arrivals hall with a name board.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 rounded-3xl border-0 bg-white">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-[#A4C639] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-2">
                    Flight Schedule Checks
                  </h3>
                  <p className="text-gray-600">
                    We adjust pickup times if your flight is delayed.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 rounded-3xl border-0 bg-white">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-[#A4C639] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Luggage Assistance</h3>
                  <p className="text-gray-600">
                    Drivers assist with loading and unloading bags.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 rounded-3xl border-0 bg-white">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-[#A4C639] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Wait Time</h3>
                  <p className="text-gray-600">
                    Complimentary 60-minute wait time for international
                    arrivals.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <Check className="w-6 h-6 text-[#A4C639] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-2">
                  Guaranteed Punctuality
                </h3>
                <p className="text-gray-600">
                  We aim to arrive 15 minutes before your pickup time.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Check className="w-6 h-6 text-[#A4C639] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-2">Fixed Rates</h3>
                <p className="text-gray-600">
                  Know exactly what you pay before you fly. No meter anxiety.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Check className="w-6 h-6 text-[#A4C639] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-2">Comfort</h3>
                <p className="text-gray-600">
                  Relax in a quiet vehicle before or after your flight.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Check className="w-6 h-6 text-[#A4C639] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-2">Reliability</h3>
                <p className="text-gray-600">We don't cancel last minute.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Vehicles */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Available Vehicles
          </h2>
          <Card className="p-8 rounded-3xl border-0 bg-white text-center">
            <div className="aspect-square max-w-md mx-auto mb-6 bg-[#E5E5E5] rounded-2xl flex items-center justify-center">
              <img
                src="/greycar.jpg"
                alt="Comfort Sedan"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Comfort Sedan</h3>
            <p className="text-gray-600">Solo Traveler / Couple</p>
          </Card>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-4">Don't miss your flight.</h2>
          <p className="text-xl text-gray-600 mb-8">
            Secure your booking at least 24 hours in advance.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://wa.me/27XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl text-lg px-8"
              >
                Reserve Shuttle
              </Button>
            </a>
            <Link href="/booking">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white rounded-xl text-lg px-8 bg-transparent"
              >
                Book Online
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">MR</span>{" "}
                <span className="text-gray-400">FLOAT</span>
              </h3>
              <p className="text-gray-400">
                Your trusted transport partner for all occasions.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/#home" className="hover:text-[#A4C639]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-[#A4C639]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#fleet" className="hover:text-[#A4C639]">
                    Fleet
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-[#A4C639]">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services/taxi" className="hover:text-[#A4C639]">
                    Taxi Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/airport"
                    className="hover:text-[#A4C639]"
                  >
                    Airport Shuttle
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/school-runs"
                    className="hover:text-[#A4C639]"
                  >
                    School Runs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/delivery"
                    className="hover:text-[#A4C639]"
                  >
                    Delivery
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+27 XX XXX XXXX</li>
                <li>info@mrfloat.co.za</li>
                <li>Johannesburg, South Africa</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MR FLOAT. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/27XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
