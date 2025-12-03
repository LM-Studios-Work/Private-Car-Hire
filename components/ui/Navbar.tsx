"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

export function Navbar() {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="text-2xl font-bold text-black">
            <Link href="/">
              <span className="text-black">MR</span> <span className="text-gray-400">FLOAT</span>
            </Link>
          </div>
          <div className="hidden md:flex gap-8 items-center text-gray-700">
            <Link href="/#home" className="hover:text-[#A4C639] transition-colors font-medium">
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
                <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-xl py-2 min-w-[200px] border border-gray-100">
                  <Link href="/services/car-hire" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639]">
                    Car Hire
                  </Link>
                  <Link href="/services/taxi" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639]">
                    Taxi / E-Hailing
                  </Link>
                  <Link href="/services/airport" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639]">
                    Airport Shuttle
                  </Link>
                  <Link href="/services/school-runs" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639]">
                    School Runs
                  </Link>
                  <Link href="/services/delivery" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639]">
                    Dial-a-Delivery
                  </Link>
                  <Link href="/services/cbd-errands" className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639]">
                    CBD Errands
                  </Link>
                </div>
              )}
            </div>
            <Link href="/#fleet" className="hover:text-[#A4C639] transition-colors font-medium">
              Fleet
            </Link>
            <Link href="/#about" className="hover:text-[#A4C639] transition-colors font-medium">
              About
            </Link>
            <Link href="/#contact" className="hover:text-[#A4C639] transition-colors font-medium">
              Contact
            </Link>
            <Link href="/booking">
              <button className="bg-[#A4C639] hover:bg-[#8FB02F] text-white px-6 py-2 rounded-xl">Book Online</button>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="w-6 h-6 text-black" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col p-4 md:hidden">
          <div className="flex justify-between items-center mb-8">
            <div className="text-2xl font-bold text-black">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-black">MR</span> <span className="text-gray-400">FLOAT</span>
              </Link>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-6 h-6 text-black" />
            </button>
          </div>
          <div className="flex flex-col gap-6 text-lg text-gray-700">
            <Link href="/#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#A4C639] transition-colors font-medium">
              Home
            </Link>
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="hover:text-[#A4C639] transition-colors font-medium flex items-center gap-1 w-full"
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesDropdownOpen && (
                <div className="mt-2 pl-4 flex flex-col gap-4">
                  <Link href="/services/car-hire" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-[#A4C639]">
                    Car Hire
                  </Link>
                  <Link href="/services/taxi" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-[#A4C639]">
                    Taxi / E-Hailing
                  </Link>
                  <Link href="/services/airport" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-[#A4C639]">
                    Airport Shuttle
                  </Link>
                  <Link href="/services/school-runs" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-[#A4C639]">
                    School Runs
                  </Link>
                  <Link href="/services/delivery" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-[#A4C639]">
                    Dial-a-Delivery
                  </Link>
                  <Link href="/services/cbd-errands" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-[#A4C639]">
                    CBD Errands
                  </Link>
                </div>
              )}
            </div>
            <Link href="/#fleet" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#A4C639] transition-colors font-medium">
              Fleet
            </Link>
            <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#A4C639] transition-colors font-medium">
              About
            </Link>
            <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#A4C639] transition-colors font-medium">
              Contact
            </Link>
            <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="bg-[#A4C639] hover:bg-[#8FB02F] text-white px-6 py-3 rounded-xl w-full mt-4">Book Online</button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
