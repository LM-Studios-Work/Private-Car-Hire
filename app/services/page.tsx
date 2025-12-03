"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section id="services" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide comprehensive transport solutions tailored to your needs, from quick city rides to long-distance
              travel and specialized errands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Car Hire */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow rounded-3xl border-0 h-full flex flex-col">
              <div className="h-56 w-full overflow-hidden">
                <img src="/HeroHire.png" alt="Car Hire" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow justify-between">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-3">Car Hire</h3>
                  <p className="text-gray-600">
                    Affordable and flexible car hire options with clean, fuel-efficient vehicles for your personal or
                    business use.
                  </p>
                </div>
                <Link href="/services/car-hire">
                  <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-100">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Taxi / City Rides */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow rounded-3xl border-0 h-full flex flex-col">
              <div className="h-56 w-full overflow-hidden">
                <img src="/Uber.jpeg" alt="Taxi rides" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow justify-between">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-3">Taxi / City Rides</h3>
                  <p className="text-gray-600">Quick and reliable taxi services for all your city travel needs, available 24/7.</p>
                </div>
                <Link href="/services/taxi">
                  <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-100">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Airport Shuttle */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow rounded-3xl border-0 h-full flex flex-col">
              <div className="h-56 w-full overflow-hidden">
                <img src="/Airport.jpeg" alt="Airport shuttle" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow justify-between">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-3">Airport Shuttle</h3>
                  <p className="text-gray-600">Reliable on-time airport transfers with flight tracking to ensure you're never late.</p>
                </div>
                <Link href="/services/airport">
                  <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-100">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* School Runs */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow rounded-3xl border-0 h-full flex flex-col">
              <div className="h-56 w-full overflow-hidden">
                <img src="/School.jpeg" alt="School Runs" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow justify-between">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-3">School Runs</h3>
                  <p className="text-gray-600">Safe and dependable transport for your children, with vetted drivers and scheduled pickups.</p>
                </div>
                <Link href="/services/school-runs">
                  <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-100">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Dial-a-Delivery */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow rounded-3xl border-0 h-full flex flex-col">
              <div className="h-56 w-full overflow-hidden">
                <img src="/Courier.jpeg" alt="Delivery service" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow justify-between">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-3">Dial-a-Delivery</h3>
                  <p className="text-gray-600">Quick and secure package delivery across the city for your personal or business needs.</p>
                </div>
                <Link href="/services/delivery">
                  <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-100">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* CBD Errands */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow rounded-3xl border-0 h-full flex flex-col">
              <div className="h-56 w-full overflow-hidden">
                <img src="/Errands.jpeg" alt="CBD Errands" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow justify-between">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-3">CBD Errands</h3>
                  <p className="text-gray-600">Let us handle your city errands, from document delivery to personal shopping.</p>
                </div>
                <Link href="/services/cbd-errands">
                  <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-100">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">MR</span> <span className="text-gray-400">FLOAT</span>
              </h3>
              <p className="text-gray-400">Your trusted transport partner for all occasions.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/#home" className="hover:text-[#A4C639]">Home</Link></li>
                <li><Link href="/#services" className="hover:text-[#A4C639]">Services</Link></li>
                <li><Link href="/#fleet" className="hover:text-[#A4C639]">Fleet</Link></li>
                <li><Link href="/#about" className="hover:text-[#A4C639]">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services/taxi" className="hover:text-[#A4C639]">Taxi Service</Link></li>
                <li><Link href="/services/airport" className="hover:text-[#A4C639]">Airport Shuttle</Link></li>
                <li><Link href="/services/school-runs" className="hover:text-[#A4C639]">School Runs</Link></li>
                <li><Link href="/services/delivery" className="hover:text-[#A4C639]">Delivery</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+263 78 595 3345</li>
                <li>aaronphiri707@gmail.com</li>
                <li>Bulawayo, Zimbabwe</li>
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
        href="https://wa.me/263785953345"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
