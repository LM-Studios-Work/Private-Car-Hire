"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component for optimization
import { ChevronDown, Menu, X } from "lucide-react";

export function Navbar() {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-8 py-4">
          {/* Logo Section - DESKTOP */}
          <div className="flex items-center">
            <Link href="/">
              {/* Recommended size adjustment for desktop navbar */}
              <Image
                src="/FloatLogo.png" // **Update this path to your logo file**
                alt="MR FLOAT Logo"
                width={200} // Increased width for better aspect ratio calculation
                height={44} // Set the height to 44px (h-11 in Tailwind)
                className="h-11 w-auto" // Enforce h-11 (44px) height with Tailwind
              />
            </Link>
          </div>
          {/* End Logo Section */}

          <div className="hidden md:flex gap-8 items-center text-gray-700">
            <Link
              href="/#home"
              className="hover:text-[#A4C639] transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] rounded-sm"
            >
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setServicesDropdownOpen(false);
                }
              }}
            >
              <button
                className="hover:text-[#A4C639] transition-colors font-medium flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] rounded-sm"
                onFocus={() => setServicesDropdownOpen(true)}
                onClick={() => setServicesDropdownOpen(true)}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-xl py-2 min-w-[200px] border border-gray-100">
                  <Link
                    href="/services/car-hire"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] focus-visible:ring-inset"
                  >
                    Car Hire
                  </Link>
                  <Link
                    href="/services/taxi"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] focus-visible:ring-inset"
                  >
                    Taxi / E-Hailing
                  </Link>
                  <Link
                    href="/services/airport"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] focus-visible:ring-inset"
                  >
                    Airport Shuttle
                  </Link>
                  <Link
                    href="/services/school-runs"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] focus-visible:ring-inset"
                  >
                    School Runs
                  </Link>
                  <Link
                    href="/services/delivery"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] focus-visible:ring-inset"
                  >
                    Dial-a-Delivery
                  </Link>
                  <Link
                    href="/services/cbd-errands"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] focus-visible:ring-inset"
                  >
                    CBD Errands
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/#fleet"
              className="hover:text-[#A4C639] transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] rounded-sm"
            >
              Fleet
            </Link>
            <Link
              href="/#about"
              className="hover:text-[#A4C639] transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] rounded-sm"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="hover:text-[#A4C639] transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] rounded-sm"
            >
              Contact
            </Link>
            <Link href="/booking" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] focus-visible:ring-offset-2 rounded-xl">
              <div className="bg-[#A4C639] hover:bg-[#8FB02F] text-white px-6 py-2 rounded-xl transition-colors cursor-pointer">
                Book Online
              </div>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] rounded-md p-1"
            >
              <Menu className="w-6 h-6 text-black" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col p-4 md:hidden">
          <div className="flex justify-between items-center mb-8">
            {/* Mobile Logo Section */}
            <div className="flex items-center">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                {/* Recommended size adjustment for mobile menu */}
                <Image
                  src="/FloatLogo.png" // **Update this path to your logo file**
                  alt="MR FLOAT Logo"
                  width={168}
                  height={56}
                  className="h-14 w-auto" // Enforce h-14 (56px) height for mobile menu
                />
              </Link>
            </div>
            {/* End Mobile Logo Section */}

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] rounded-md p-1"
            >
              <X className="w-6 h-6 text-black" />
            </button>
          </div>
          <div className="flex flex-col gap-6 text-lg text-gray-700">
            <Link
              href="/#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#A4C639] transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] rounded-sm inline-block"
            >
              Home
            </Link>
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                aria-expanded={servicesDropdownOpen}
                className="hover:text-[#A4C639] transition-colors font-medium flex items-center gap-1 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] rounded-sm"
              >
                Services{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesDropdownOpen && (
                <div className="mt-2 pl-4 flex flex-col gap-4">
                  <Link
                    href="/services/car-hire"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block hover:text-[#A4C639] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] rounded-sm"
                  >
                    Car Hire
                  </Link>
                  <Link
                    href="/services/taxi"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block hover:text-[#A4C639] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] rounded-sm"
                  >
                    Taxi / E-Hailing
                  </Link>
                  <Link
                    href="/services/airport"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block hover:text-[#A4C639] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] rounded-sm"
                  >
                    Airport Shuttle
                  </Link>
                  <Link
                    href="/services/school-runs"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block hover:text-[#A4C639] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] rounded-sm"
                  >
                    School Runs
                  </Link>
                  <Link
                    href="/services/delivery"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block hover:text-[#A4C639] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] rounded-sm"
                  >
                    Dial-a-Delivery
                  </Link>
                  <Link
                    href="/services/cbd-errands"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block hover:text-[#A4C639] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] rounded-sm"
                  >
                    CBD Errands
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/#fleet"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#A4C639] transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] rounded-sm inline-block"
            >
              Fleet
            </Link>
            <Link
              href="/#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#A4C639] transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] rounded-sm inline-block"
            >
              About
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#A4C639] transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] rounded-sm inline-block"
            >
              Contact
            </Link>
            <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A4C639] focus-visible:ring-offset-2 rounded-xl block">
              <div className="bg-[#A4C639] hover:bg-[#8FB02F] text-white px-6 py-3 rounded-xl w-full text-center transition-colors cursor-pointer">
                Book Online
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
