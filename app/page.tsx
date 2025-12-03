"use client";

import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import {
  Car,
  Package,
  Clock,
  Shield,
  CreditCard,
  MessageCircle,
  Mail,
  Phone,
  ChevronDown,
  Smartphone, // Added
  UserCheck, // Added
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MRFloatLanding() {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [pickup, setPickup] = useState("");
  const router = useRouter();

  const handleQuoteSubmit = () => {
    const query = new URLSearchParams({
      name,
      phone,
      service,
      pickup,
    }).toString();
    router.push(`/booking?${query}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-8 py-4">
          <div className="text-2xl font-bold text-black">
            <span className="text-black">MR</span>{" "}
            <span className="text-gray-400">FLOAT</span>
          </div>
          <div className="hidden md:flex gap-8 items-center text-gray-700">
            <a
              href="#home"
              className="hover:text-[#A4C639] transition-colors font-medium"
            >
              Home
            </a>
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
                  <Link
                    href="/services/car-hire"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639]"
                  >
                    Car Hire
                  </Link>{" "}
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
              )}
            </div>
            <a
              href="#fleet"
              className="hover:text-[#A4C639] transition-colors font-medium"
            >
              Fleet
            </a>
            <a
              href="#about"
              className="hover:text-[#A4C639] transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-[#A4C639] transition-colors font-medium"
            >
              Contact
            </a>
            <Link href="/booking">
              <Button className="bg-[#A4C639] hover:bg-[#8FB02F] text-white rounded-xl">
                Book Online
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen bg-gray-100 overflow-hidden pt-16"
      >
        <div className="container mx-auto px-4 h-full min-h-[calc(100vh-64px)] flex items-center py-4">
          <div className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[85vh]">
            <div className="absolute inset-0">
              <img
                src="/HeroBlue.png"
                alt="City transport"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
            </div>
            <div className="relative grid md:grid-cols-2 gap-8 items-center w-full p-8 md:p-12 lg:p-16 min-h-[85vh]">
              {/* Left side - Hero text */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                  Your Reliable Transport Partner
                </h1>
                <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-lg">
                  Professional taxi rides, airport transfers, car hire and more
                  across the city and beyond.
                </p>
                <a href="#fleet">
                  <Button className="bg-white hover:bg-[#A4C639] hover:text-white text-black px-8 py-6 rounded-xl text-lg shadow-xl transition-colors">
                    View Our Fleet
                  </Button>
                </a>
              </div>

              <div className="bg-white/98 backdrop-blur-md rounded-2xl p-6 shadow-2xl max-w-md ml-auto">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Request a Quote
                </h2>
                <form className="space-y-3">
                  <Input
                    placeholder="Full Name"
                    className="bg-gray-50 border-gray-200 rounded-lg h-11"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    className="bg-gray-50 border-gray-200 rounded-lg h-11"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <Select onValueChange={setService} value={service}>
                    <SelectTrigger className="bg-gray-50 border-gray-200 rounded-lg h-11">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="taxi">Taxi / E-hailing</SelectItem>
                      <SelectItem value="airport">Airport Shuttle</SelectItem>
                      <SelectItem value="school">School Runs</SelectItem>
                      <SelectItem value="delivery">Dial-a-Delivery</SelectItem>
                      <SelectItem value="city">City-to-City</SelectItem>
                      <SelectItem value="cbd">CBD Errands</SelectItem>
                      <SelectItem value="hire">Car Hire</SelectItem>
                    </SelectContent>
                  </Select>

                  <Input
                    placeholder="Pickup Location"
                    className="bg-gray-50 border-gray-200 rounded-lg h-11"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                  />

                  <Button
                    type="button"
                    className="w-full bg-black hover:bg-gray-800 text-white py-5 rounded-lg text-base font-semibold mt-2"
                    onClick={handleQuoteSubmit}
                  >
                    Get My Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Services</h2>
            <p className="text-gray-600 text-lg">
              We provide comprehensive transport solutions tailored to your
              needs
            </p>
          </div>

          {/* Added gap-6 for tighter spacing, kept grid structure */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Car Hire */}
            {/* ADDED: h-full flex flex-col to ensure card takes full height */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow rounded-3xl border-0 h-full flex flex-col">
              {/* CHANGED: Removed aspect-square, used h-48 for consistent image height */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="/HeroHire.png"
                  alt="Car Hire"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* ADDED: flex flex-col flex-grow to stretch content area */}
              <CardContent className="p-6 flex flex-col flex-grow justify-between">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-3">Car Hire</h3>
                  <p className="text-gray-600">
                    Affordable and flexible car hire options with clean,
                    fuel-efficient vehicles.
                  </p>
                </div>
                <Link href="/services/car-hire">
                  <Button
                    variant="default"
                    className="bg-black hover:bg-black/90 w-fit rounded-xl"
                  >
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Taxi / City Rides */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow rounded-3xl border-0 h-full flex flex-col">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="/Uber.jpeg"
                  alt="Taxi rides"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow justify-between">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-3">Taxi / City Rides</h3>
                  <p className="text-gray-600">
                    Quick and reliable taxi services for all your city travel
                    needs.
                  </p>
                </div>
                <Link href="/services/taxi">
                  <Button
                    variant="default"
                    className="bg-black hover:bg-black/90 w-fit rounded-xl"
                  >
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Airport Shuttle */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow rounded-3xl border-0 h-full flex flex-col">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="/Airport.jpeg"
                  alt="Airport shuttle"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow justify-between">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-3">Airport Shuttle</h3>
                  <p className="text-gray-600">
                    Reliable on-time airport transfers with flight tracking.
                  </p>
                </div>
                <Link href="/services/airport">
                  <Button
                    variant="default"
                    className="bg-black hover:bg-black/90 w-fit rounded-xl"
                  >
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Dial-a-Delivery */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow rounded-3xl border-0 h-full flex flex-col">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src="/Courier.jpeg"
                  alt="Delivery service"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow justify-between">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-3">Dial-a-Delivery</h3>
                  <p className="text-gray-600">
                    Quick and secure package delivery across the city.
                  </p>
                </div>
                <Link href="/services/delivery">
                  <Button
                    variant="default"
                    className="bg-black hover:bg-black/90 w-fit rounded-xl"
                  >
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-[#A4C639] hover:bg-[#8FB02F] text-white px-8 py-4 rounded-xl text-lg">
                Book A Service
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Fleet Section */}
      <section id="fleet" className="py-20 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Our Fleet</h2>
            <p className="text-gray-600 text-lg">
              Modern and well-maintained vehicles for every transport need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mazda Demio (white) - Comfort Sedan */}
            <Card className="overflow-hidden rounded-3xl border-0 shadow-md">
              <div className="bg-white aspect-[665/375] flex items-center justify-center p-6">
                <img
                  src="/Mazda.png"
                  alt="Mazda Demio"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Mazda Demio</h3>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Car className="w-4 h-4" /> 5 seats
                  </span>
                  <span className="flex items-center gap-1">
                    <Package className="w-4 h-4" /> 2–3 bags
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Honda Fit GP5 Hybrid (blue) - Premium SUV / Compact Hybrid */}
            <Card className="overflow-hidden rounded-3xl border-0 shadow-md">
              <div className="bg-white aspect-[665/375] flex items-center justify-center p-6">
                <img
                  src="/HondaB.png"
                  alt="Honda Fit GP5 Hybrid"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Honda Fit GP5 Hybrid</h3>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Car className="w-4 h-4" /> 5 seats
                  </span>
                  <span className="flex items-center gap-1">
                    <Package className="w-4 h-4" /> 3–4 bags
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Honda Fit GP3 (grey) - Spacious Van / Practical Hatch */}
            <Card className="overflow-hidden rounded-3xl border-0 shadow-md">
              <div className="bg-white aspect-[665/375] flex items-center justify-center p-6">
                <img
                  src="/HondaG.png"
                  alt="Honda Fit GP3"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Honda Fit GP3</h3>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Car className="w-4 h-4" /> 5 seats
                  </span>
                  <span className="flex items-center gap-1">
                    <Package className="w-4 h-4" /> 3–4 bags
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">About Mr Float</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            MR FLOAT is your trusted transport partner, providing safe,
            reliable, and professional rides and delivery services across
            Johannesburg and beyond. Our mission is to make city travel
            seamless, comfortable, and convenient for every client, whether for
            daily commutes, airport transfers, school runs, or deliveries.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* HEADER - Split Layout (Title Left, Text Right) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-md text-left md:text-left leading-relaxed">
              At MR FLOAT, we pride ourselves in delivering extensive services
              to fulfill all of your needs with first-rate customer care.
            </p>
          </div>

          {/* GRID - Left Aligned Content */}
          <div className="grid md:grid-cols-4 gap-10">
            {/* Feature 1: Easy Booking (Green) */}
            <div className="flex flex-col items-start text-left group">
              <div className="w-24 h-24 bg-[#A4C639] rounded-[1.5rem] flex items-center justify-center mb-6 transition-transform group-hover:scale-105 duration-300">
                <Smartphone
                  className="w-10 h-10 text-white"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-bold mb-3 text-black">
                Easy Online Booking
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Book your ride in minutes through our simple and fast platform.
                hassle-free experience.
              </p>
            </div>

            {/* Feature 2: Professional Drivers (Black) */}
            <div className="flex flex-col items-start text-left group">
              <div className="w-24 h-24 bg-[#1a1a1a] rounded-[1.5rem] flex items-center justify-center mb-6 transition-transform group-hover:scale-105 duration-300">
                <UserCheck className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-black">
                Professional Drivers
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Experienced and vetted drivers committed to your safety and
                providing a professional service.
              </p>
            </div>

            {/* Feature 3: Variety of Cars (Green) */}
            <div className="flex flex-col items-start text-left group">
              <div className="w-24 h-24 bg-[#A4C639] rounded-[1.5rem] flex items-center justify-center mb-6 transition-transform group-hover:scale-105 duration-300">
                <Car className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-black">
                Variety of Car Brands
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Well-maintained vehicles equipped for comfort, from economy
                hatchbacks to premium sedans.
              </p>
            </div>

            {/* Feature 4: Online Payment (Black) */}
            <div className="flex flex-col items-start text-left group">
              <div className="w-24 h-24 bg-[#1a1a1a] rounded-[1.5rem] flex items-center justify-center mb-6 transition-transform group-hover:scale-105 duration-300">
                <CreditCard
                  className="w-10 h-10 text-white"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-bold mb-3 text-black">
                Online Payment
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Multiple secure payment options for your convenience, accepting
                cards and mobile payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg">
              Real experiences from satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-3xl border-0 shadow-md bg-white">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#A4C639] text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Exceptional service! The driver was professional and
                  punctual. MR FLOAT made my airport transfer stress-free.
                  Highly recommend!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#A4C639] rounded-full flex items-center justify-center text-white font-bold">
                    TM
                  </div>
                  <div>
                    <p className="font-bold">Thabo Molefe</p>
                    <p className="text-sm text-gray-500">Business Executive</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-md bg-white">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#A4C639] text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Reliable school run service! My kids are always safe and
                  picked up on time. The drivers are friendly and trustworthy."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#A4C639] rounded-full flex items-center justify-center text-white font-bold">
                    LN
                  </div>
                  <div>
                    <p className="font-bold">Lindiwe Nkosi</p>
                    <p className="text-sm text-gray-500">Parent</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-md bg-white">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#A4C639] text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Perfect for business trips! Professional chauffeur service
                  with comfortable vehicles. Always on time for important
                  meetings."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#A4C639] rounded-full flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div>
                    <p className="font-bold">Sipho Mthembu</p>
                    <p className="text-sm text-gray-500">CEO</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 text-lg">
              We're here to answer any questions you may have
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="rounded-3xl border-0 shadow-md text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#A4C639] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-600">+263 78 595 3345</p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-md text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#A4C639] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-600">info@mrfloat.co.za</p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-md text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#A4C639] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">WhatsApp Us</h3>
                <p className="text-gray-600">Quick response available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Button Section */}
      <section id="booking-cta" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-4">Ready to Ride?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Click the button below to book your ride in just a few clicks.
          </p>
          <Link href="/booking">
            <Button
              size="lg"
              className="bg-[#A4C639] hover:bg-[#8FB02F] text-white rounded-xl text-lg px-10 py-6"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+263 78 595 3345"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

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
                  <a href="#home" className="hover:text-[#A4C639]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#A4C639]">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#fleet" className="hover:text-[#A4C639]">
                    Fleet
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#A4C639]">
                    About
                  </a>
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
                <li>+263 78 595 3345</li>
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
    </div>
  );
}
