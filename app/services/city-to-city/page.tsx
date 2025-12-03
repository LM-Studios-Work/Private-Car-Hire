"use client";

import { Button } from "@/components/ui/button";
import {
  Car,
  MapPin,
  ShieldCheck,
  Coffee,
  UserCheck,
  Luggage,
  Fuel,
  Music,
  FileText,
  AlertCircle,
  CreditCard,
  Ban,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function InterCityPage() {
  return (
    <div className="min-h-screen bg-white font-sans scroll-smooth">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Background Image */}
        <Image
          src="/Intercity.png"
          alt="Transport Services"
          fill
          className="object-cover"
          priority
        />

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Short Trips & <br />
            <span className="text-[#A4C639]">Long Journeys.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
            From quick local taxi runs to private inter-city travel.
            <br className="hidden md:block" />
            Book direct or find us on InDrive.
          </p>

          <a href="#fleet">
            <Button className="bg-[#A4C639] hover:bg-[#8fb82e] text-white rounded-full px-10 py-4 text-lg font-semibold shadow-xl transition-all">
              Choose Vehicle
            </Button>
          </a>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Your Private Long-Distance Partner
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Traveling between cities? MR FLOAT offers comfortable and affordable
            Inter-City rides. Whether you're going for business, leisure, or
            visiting family, our professional drivers will get you there safely
            and on time. Enjoy a stress-free journey in our modern,
            well-maintained vehicles.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            The Inter-City Standard
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#A4C639] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Modern Fleet</h3>
              <p className="text-gray-600">Reliable cars for long distances</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Safe Travel</h3>
              <p className="text-gray-600">Experienced highway drivers</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#A4C639] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Rest Stops</h3>
              <p className="text-gray-600">Scheduled comfort breaks included</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Door-to-Door</h3>
              <p className="text-gray-600">
                Directly from your home to destination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FLEET SELECTION --- */}
      <section id="fleet" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Select Your Ride</h2>
            <p className="text-gray-600 text-lg">
              Reliable, fuel-efficient vehicles perfect for the long road.
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
                  BUDGET SAVER
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Mazda Demio</h3>
                <div className="flex gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <UserCheck className="w-4 h-4 text-[#A4C639]" /> 2-3 Pax
                  </span>
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <Luggage className="w-4 h-4 text-[#A4C639]" /> 2 Bags
                  </span>
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <Music className="w-4 h-4 text-[#A4C639]" /> Aux
                  </span>
                </div>
                <Link href="/booking">
                  <Button className="w-full bg-black hover:bg-[#333] text-white rounded-xl h-12 text-lg">
                    Book Trip
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
                  LONG RANGE
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Honda Fit GP5</h3>
                <div className="flex gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <UserCheck className="w-4 h-4 text-[#A4C639]" /> 3-4 Pax
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
                    Book Trip
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
                  EXTRA LUGGAGE
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Honda Fit GP3</h3>
                <div className="flex gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <UserCheck className="w-4 h-4 text-[#A4C639]" /> 4 Pax
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
                    Book Trip
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRAVEL REQUIREMENTS & POLICIES (NEW SECTION) --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Policies & Conduct (White) */}
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-sm h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FileText className="text-[#A4C639] w-8 h-8" /> Travel Policies
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#f5f5f0] flex items-center justify-center flex-shrink-0 mt-1">
                    <Luggage className="w-4 h-4 text-[#A4C639]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Luggage Limits</h4>
                    <p className="text-gray-600">
                      Strictly 1 large bag + 1 carry-on per passenger unless
                      discussed.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#f5f5f0] flex items-center justify-center flex-shrink-0 mt-1">
                    <UserCheck className="w-4 h-4 text-[#A4C639]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Passenger ID</h4>
                    <p className="text-gray-600">
                      All passengers must have valid ID for road checkpoints.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#f5f5f0] flex items-center justify-center flex-shrink-0 mt-1">
                    <Ban className="w-4 h-4 text-[#A4C639]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Prohibited Items</h4>
                    <p className="text-gray-600">
                      No alcohol consumption, smoking, or illegal substances on
                      board.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right: Booking & Payment (Dark) */}
            <div className="bg-[#1a1a1a] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#A4C639] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CreditCard className="text-[#A4C639] w-8 h-8" /> Booking Rules
              </h3>

              <ul className="space-y-6 relative z-10">
                <li className="border-b border-gray-700 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <AlertCircle className="w-5 h-5 text-[#A4C639]" />
                    <span className="font-bold text-lg">Advance Booking</span>
                  </div>
                  <p className="text-gray-400 pl-8">
                    Trips must be booked at least <strong>24 hours</strong> in
                    advance to secure a driver.
                  </p>
                </li>

                <li className="border-b border-gray-700 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <CreditCard className="w-5 h-5 text-[#A4C639]" />
                    <span className="font-bold text-lg">Payment Terms</span>
                  </div>
                  <p className="text-gray-400 pl-8">
                    50% Deposit required to confirm booking. Balance due upon
                    pickup.
                  </p>
                </li>

                <li>
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="w-5 h-5 text-[#A4C639]" />
                    <span className="font-bold text-lg">Cancellations</span>
                  </div>
                  <p className="text-gray-400 pl-8">
                    Free cancellation up to 12 hours before travel. Deposit
                    non-refundable thereafter.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Improved CTA */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Skip the Bus Queue.</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience the freedom of private Inter-City travel. Book your trip
            today and travel on your own terms.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="https://wa.me/63785953345" target="_blank">
              <Button className="bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full px-8 py-6 text-lg">
                WhatsApp Quote
              </Button>
            </Link>
            <Link href="/booking">
              <Button className="bg-[#A4C639] hover:bg-[#8fb82e] text-white rounded-full px-8 py-6 text-lg">
                Book Inter-City
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
