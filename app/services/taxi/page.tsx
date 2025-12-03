"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Car,
  ShieldCheck,
  FileCheck,
  MapPin,
  Banknote,
  Fuel,
  Luggage,
  Clock,
  Smartphone,
  CreditCard,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function TaxiPage() {
  const router = useRouter();

  const handleBookNow = () => {
    const query = new URLSearchParams({
      service: "Taxi & Inter-City",
    }).toString();
    router.push(`/booking?${query}`);
  };

  const handleBookVehicle = (vehicle: string) => {
    const query = new URLSearchParams({
      service: "Taxi & Inter-City",
      vehicle,
    }).toString();
    router.push(`/booking?${query}`);
  };

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
            Book direct or find us on InDrive & Bolt.
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
            One Fleet, Two Ways to Travel
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Whether you are going to the mall or across the province, MR FLOAT
            offers a unified transport solution. We operate with the speed of
            e-hailing apps but with the reliability of a private chauffeur
            service. Safe, vetted drivers and well-maintained vehicles, every
            time.
          </p>
        </div>
      </section>

      {/* Service Features (Grid Style) */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Ride With Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#A4C639] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">App Friendly</h3>
              <p className="text-gray-600">
                Available on InDrive & Bolt, or book direct to save fees.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Door-to-Door</h3>
              <p className="text-gray-600">
                Direct pick-up and drop-off for both local and long distance.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#A4C639] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">24/7 Service</h3>
              <p className="text-gray-600">
                Operating around the clock for your convenience.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Vetted Drivers</h3>
              <p className="text-gray-600">
                All drivers have PDPs and clean safety records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FLEET SECTION --- */}
      <section id="fleet" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Select Your Ride</h2>
            <p className="text-gray-600 text-lg">
              Reliable, fuel-efficient vehicles for the road ahead.
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
                    <Car className="w-4 h-4 text-[#A4C639]" /> 5 seats
                  </span>
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <Luggage className="w-4 h-4 text-[#A4C639]" /> 2–3 bags
                  </span>
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <Fuel className="w-4 h-4 text-[#A4C639]" /> 1.3L
                  </span>
                </div>
                <Button
                  onClick={() => handleBookVehicle("sedan")}
                  className="w-full bg-black hover:bg-[#333] text-white rounded-xl h-12 text-lg"
                >
                  Book Ride
                </Button>
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
                  HYBRID
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Honda Fit GP5</h3>
                <div className="flex gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <Car className="w-4 h-4 text-[#A4C639]" /> 5 seats
                  </span>
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <Luggage className="w-4 h-4 text-[#A4C639]" /> 3–4 bags
                  </span>
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <Fuel className="w-4 h-4 text-[#A4C639]" /> Hybrid
                  </span>
                </div>
                <Button
                  onClick={() => handleBookVehicle("suv")}
                  className="w-full bg-black hover:bg-[#333] text-white rounded-xl h-12 text-lg"
                >
                  Book Ride
                </Button>
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
                    <Car className="w-4 h-4 text-[#A4C639]" /> 5 seats
                  </span>
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <Luggage className="w-4 h-4 text-[#A4C639]" /> 3–4 bags
                  </span>
                  <span className="flex items-center gap-1 bg-white px-2 py-1 rounded-md">
                    <Fuel className="w-4 h-4 text-[#A4C639]" /> 1.5L
                  </span>
                </div>
                <Button
                  onClick={() => handleBookVehicle("van")}
                  className="w-full bg-black hover:bg-[#333] text-white rounded-xl h-12 text-lg"
                >
                  Book Ride
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICE INFO & PRICING --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Pricing/Service Card (Dark Style) */}
            <div className="bg-[#1a1a1a] text-white rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#A4C639] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Banknote className="text-[#A4C639] w-8 h-8" /> Service Types
              </h3>

              <div className="space-y-8 relative z-10">
                {/* Local Rate */}
                <div className="border-b border-gray-700 pb-6">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-400 font-bold uppercase tracking-wider text-sm">
                      Local Taxi
                    </span>
                    <span className="bg-[#A4C639]/20 text-[#A4C639] text-xs px-2 py-1 rounded">
                      In-City
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#A4C639]">
                      Metered
                    </span>
                    <span className="text-lg text-gray-300">
                      or Fixed Quote
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    Comparable to InDrive/Bolt rates. First 10 mins waiting
                    free.
                  </p>
                </div>

                {/* Out of City Rate */}
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-gray-400 font-bold uppercase tracking-wider text-sm">
                      Inter-City
                    </span>
                    <span className="bg-white/10 text-white text-xs px-2 py-1 rounded">
                      Long Distance
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-white">
                      Per KM
                    </span>
                    <span className="text-lg text-gray-300">Calculation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 bg-black/30 p-3 rounded-lg border border-gray-700">
                    <CreditCard className="w-4 h-4 text-[#A4C639]" />
                    <span>50% Deposit required for long trips</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Rules/Requirements (White List) */}
            <div className="bg-white p-8">
              <h3 className="text-3xl font-bold mb-8 text-black flex items-center gap-3">
                <FileCheck className="text-[#A4C639] w-8 h-8" /> Important Info
              </h3>

              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#f5f5f0] flex items-center justify-center flex-shrink-0 mt-1">
                    <Luggage className="w-4 h-4 text-[#A4C639]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Luggage Policy</h4>
                    <p className="text-gray-600">
                      Standard: 1 large bag + 1 carry-on per person. Extra
                      luggage must be declared during booking.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#f5f5f0] flex items-center justify-center flex-shrink-0 mt-1">
                    <ShieldCheck className="w-4 h-4 text-[#A4C639]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Identification</h4>
                    <p className="text-gray-600">
                      Valid ID is required for all passengers on Inter-City
                      trips for police checkpoints.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#f5f5f0] flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertCircle className="w-4 h-4 text-[#A4C639]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Passenger Conduct</h4>
                    <p className="text-gray-600">
                      No smoking or alcohol consumption allowed inside the
                      vehicle at any time.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#f5f5f0] flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-[#A4C639]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Advance Booking</h4>
                    <p className="text-gray-600">
                      Inter-city trips must be booked 24h in advance. Local
                      trips can be on-demand.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Move?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Book your ride today. Simple, fast, and secure.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="https://wa.me/27710047018" target="_blank">
              <Button className="bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full px-8 py-6 text-lg">
                WhatsApp Booking
              </Button>
            </Link>
            <Button
              onClick={handleBookNow}
              className="bg-[#A4C639] hover:bg-[#8fb82e] text-white rounded-full px-8 py-6 text-lg"
            >
              Book Online
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
