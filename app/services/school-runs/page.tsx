"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  GraduationCap,
  ShieldCheck,
  Clock,
  Users,
  ChevronDown,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

export default function SchoolRunsPage() {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [tripType, setTripType] = useState("Return Trip");
  const [numChildren, setNumChildren] = useState("1 Child");
  const [message, setMessage] = useState("");

  const scrollToForm = () => {
    const element = document.getElementById("enquiry-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEnquirySubmit = () => {
    if (!parentName || !phone || !pickupAddress || !schoolName) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const enquiryDetails = `
*SCHOOL RUN ENQUIRY*
-------------------------
*Parent Name:* ${parentName}
*Phone Number:* ${phone}
*Pickup Address:* ${pickupAddress}
*School Name:* ${schoolName}
*Trip Type:* ${tripType}
*Number of Children:* ${numChildren}
*Additional Notes:* ${message || "None"}
-------------------------
    `;

    const whatsappUrl = `https://wa.me/27672792090?text=${encodeURIComponent(
      enquiryDetails
    )}`;
    window.open(whatsappUrl, "_blank");
  };

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
                    {[
                      { href: "/services/car-hire", label: "Car Hire" },
                      { href: "/services/taxi", label: "Taxi / E-Hailing" },
                      { href: "/services/airport", label: "Airport Shuttle" },
                      { href: "/services/school-runs", label: "School Runs" },

                      { href: "/services/delivery", label: "Dial-a-Delivery" },
                      { href: "/services/cbd-errands", label: "CBD Errands" },
                    ].map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 hover:bg-gray-50 hover:text-[#A4C639]"
                      >
                        {service.label}
                      </Link>
                    ))}
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
            <Button
              onClick={scrollToForm}
              className="bg-[#A4C639] hover:bg-[#8fb82e] text-white rounded-full px-6"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/SchoolkidHero.png"
          alt="School Runs"
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <div className="inline-block bg-[#A4C639] px-4 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-wider shadow-lg">
            2026 Registrations Open
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">School Runs</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Safe, reliable, and punctual transportation for your children.
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-center">
            More Than Just a Ride
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Busy schedule? Let MR FLOAT handle the school run. We understand
            that sending your children with a driver requires immense trust.
            That's why we don't just provide a driver; we provide a guardian on
            the road. From door-to-door service to real-time punctuality, we
            ensure your child's journey is safe, happy, and reliable.
          </p>
        </div>
      </section>

      {/* What's Included (Using Taxi Card Style) */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Peace of Mind Included
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#A4C639] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Vetted Drivers</h3>
              <p className="text-gray-600">
                Background checks & PDP licensed professionals
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Always Punctual</h3>
              <p className="text-gray-600">
                We ensure your child arrives before the bell rings
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#A4C639] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Door-to-Door</h3>
              <p className="text-gray-600">
                Pick-up from home, drop-off inside school gates
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-3xl shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Safe Vehicles</h3>
              <p className="text-gray-600">
                Clean, road-worthy vehicles with safety belts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety List (Using Taxi List Style) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Why Parents Trust Us
          </h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[#A4C639] text-2xl">✓</span>
              <span>
                <strong>Safety First:</strong> All vehicles are tracked and
                drivers are vetted.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A4C639] text-2xl">✓</span>
              <span>
                <strong>Communication:</strong> Direct line to your driver and
                office support.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A4C639] text-2xl">✓</span>
              <span>
                <strong>Flexibility:</strong> Morning only, Afternoon only, or
                Return trip packages.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#A4C639] text-2xl">✓</span>
              <span>
                <strong>Consistent:</strong> The same driver picks up your child
                every day.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* How it Works Grid */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600">
              We create a custom route plan for every student
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl text-center shadow-sm">
              <div className="w-16 h-16 bg-white border-2 border-[#A4C639] text-[#A4C639] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Send Enquiry</h3>
              <p className="text-gray-600">
                Fill in the form below with your location and school details.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center shadow-sm">
              <div className="w-16 h-16 bg-white border-2 border-[#A4C639] text-[#A4C639] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Get a Quote</h3>
              <p className="text-gray-600">
                We calculate the distance and provide a monthly rate.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center shadow-sm">
              <div className="w-16 h-16 bg-[#A4C639] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Spot</h3>
              <p className="text-gray-600">
                We assign a driver and set the pickup schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM SECTION */}
      <section id="enquiry-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
            {/* Text Side */}
            <div className="lg:w-1/2 pt-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Request a <br />
                <span className="text-[#A4C639]">School Run Quote</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Every route is different. To give you an accurate price, we need
                to know where you are located and which school your child
                attends.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F5F0] flex items-center justify-center text-[#A4C639]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Coverage Areas</h4>
                    <p className="text-gray-500">
                      We cover most suburbs. Send us your address to confirm
                      availability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F5F0] flex items-center justify-center text-[#A4C639]">
                    <CalendarCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Flexible Schedules</h4>
                    <p className="text-gray-500">
                      One-way or return trip packages to suit your timetable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F5F0] p-6 rounded-3xl inline-block w-full">
                <p className="text-gray-500 mb-2 font-medium">
                  Prefer to chat on WhatsApp?
                </p>
                <Link
                  href="https://wa.me/27672792090"
                  className="text-[#25D366] font-bold text-xl flex items-center hover:underline"
                >
                  <Phone className="w-6 h-6 mr-2" />
                  +27 71 004 7018
                </Link>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Student Details</h3>
                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Parent Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        className="bg-[#F5F5F0] border-transparent h-12 rounded-xl focus:border-[#A4C639] focus:ring-[#A4C639]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="082 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-[#F5F5F0] border-transparent h-12 rounded-xl focus:border-[#A4C639] focus:ring-[#A4C639]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pickup">Pick-up Address / Suburb</Label>
                    <Input
                      id="pickup"
                      placeholder="e.g. 12 Main St, Midrand"
                      value={pickupAddress}
                      onChange={(e) => setPickupAddress(e.target.value)}
                      className="bg-[#F5F5F0] border-transparent h-12 rounded-xl focus:border-[#A4C639] focus:ring-[#A4C639]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="school">School Name</Label>
                    <Input
                      id="school"
                      placeholder="e.g. Curro Waterfall"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      className="bg-[#F5F5F0] border-transparent h-12 rounded-xl focus:border-[#A4C639] focus:ring-[#A4C639]"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Trip Type</Label>
                      <select
                        value={tripType}
                        onChange={(e) => setTripType(e.target.value)}
                        className="w-full h-12 px-3 rounded-xl border-transparent bg-[#F5F5F0] text-sm focus:border-[#A4C639] focus:ring-[#A4C639]"
                      >
                        <option>Return Trip</option>
                        <option>Morning Only</option>
                        <option>Afternoon Only</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label>No. of Children</Label>
                      <select
                        value={numChildren}
                        onChange={(e) => setNumChildren(e.target.value)}
                        className="w-full h-12 px-3 rounded-xl border-transparent bg-[#F5F5F0] text-sm focus:border-[#A4C639] focus:ring-[#A4C639]"
                      >
                        <option>1 Child</option>
                        <option>2 Children</option>
                        <option>3+ Children</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Notes</Label>
                    <Textarea
                      id="message"
                      placeholder="Pickup times, special requirements..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-[#F5F5F0] border-transparent rounded-xl focus:border-[#A4C639] focus:ring-[#A4C639] resize-none h-24"
                    />
                  </div>

                  <Button
                    onClick={handleEnquirySubmit}
                    className="w-full h-14 bg-[#A4C639] hover:bg-[#8fb82e] text-white text-lg rounded-xl mt-4 font-bold"
                  >
                    Send Enquiry
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
