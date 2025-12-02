"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BookingPage() {
  const [agreed, setAgreed] = useState(false);
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
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="hover:text-[#A4C639] transition-colors font-medium flex items-center gap-1">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-xl py-2 min-w-[200px] border border-gray-100">
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
                    href="/services/school"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639]"
                  >
                    School Runs
                  </Link>
                  <Link
                    href="/services/city"
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
                    href="/services/cbd"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639]"
                  >
                    CBD Errands
                  </Link>
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

      {/* Booking Form Section */}
      <section className="pt-32 pb-20 bg-gray-100">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Book Your Ride</h1>
            <p className="text-gray-600 text-lg">
              Fill out the form below and we'll get back to you with a quote
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Request a Quote
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name"
                  className="bg-gray-50 border-gray-200 rounded-lg"
                />
                <Input
                  placeholder="# of passengers"
                  type="number"
                  className="bg-gray-50 border-gray-200 rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Phone"
                  type="tel"
                  className="bg-gray-50 border-gray-200 rounded-lg"
                />
                <Input
                  placeholder="Email"
                  type="email"
                  className="bg-gray-50 border-gray-200 rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger className="bg-gray-50 border-gray-200 rounded-lg">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="taxi">Taxi / E-hailing</SelectItem>
                    <SelectItem value="airport">Airport Shuttle</SelectItem>
                    <SelectItem value="delivery">Dial-a-Delivery</SelectItem>
                    <SelectItem value="school">School Runs</SelectItem>
                    <SelectItem value="city">City-to-City</SelectItem>
                    <SelectItem value="cbd">CBD Errands</SelectItem>
                    <SelectItem value="hire">Car Hire</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="bg-gray-50 border-gray-200 rounded-lg">
                    <SelectValue placeholder="Select vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="van">Van</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Input
                placeholder="Pick-up location"
                className="bg-gray-50 border-gray-200 rounded-lg"
              />

              <Button
                type="button"
                variant="outline"
                className="w-full border-gray-300 hover:bg-gray-50 rounded-lg bg-transparent"
              >
                + Add Stop
              </Button>

              <Input
                placeholder="Drop-off location"
                className="bg-gray-50 border-gray-200 rounded-lg"
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Pick-up date"
                  type="date"
                  className="bg-gray-50 border-gray-200 rounded-lg"
                />
                <Input
                  placeholder="Pick-up time"
                  type="time"
                  className="bg-gray-50 border-gray-200 rounded-lg"
                />
              </div>

              <Textarea
                placeholder="Additional Notes"
                className="bg-gray-50 border-gray-200 rounded-lg min-h-[80px]"
              />

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <label htmlFor="consent" className="text-xs text-gray-600">
                  I agree to receive SMS and email communications from MR FLOAT
                  regarding my quote request. You can reply STOP to opt out of
                  SMS at any time.
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white py-6 rounded-lg text-lg"
              >
                Get My Quote
              </Button>
            </form>
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
                    href="/services/school"
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
