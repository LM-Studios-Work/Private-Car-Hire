"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
import toast from "react-hot-toast";

function BookingForm() {
  const searchParams = useSearchParams();
  const [agreed, setAgreed] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  // Form state
  const [fullName, setFullName] = useState(searchParams.get("name") || "");
  const [passengers, setPassengers] = useState("");
  const [phone, setPhone] = useState(searchParams.get("phone") || "");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(searchParams.get("service") || "");
  const [vehicle, setVehicle] = useState(searchParams.get("vehicle") || "");
  const [pickupLocation, setPickupLocation] = useState(
    searchParams.get("pickup") || ""
  );
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [notes, setNotes] = useState("");

  // Conditional state
  const [hours, setHours] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [tripType, setTripType] = useState("Return Trip");

  const today = new Date().toISOString().split("T")[0];

  const handleBookingSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // --- Validation ---
    const requiredFields: { [key: string]: string } = {
      "Full Name": fullName,
      "Phone Number": phone,
      Email: email,
      "Number of Passengers": passengers,
      "Service Type": service,
      "Pickup Location": pickupLocation,
    };

    if (service !== "School Runs") {
      requiredFields["Drop-off Location"] = dropoffLocation;
      requiredFields["Pickup Date"] = pickupDate;
      requiredFields["Pickup Time"] = pickupTime;
    }

    for (const [fieldName, value] of Object.entries(requiredFields)) {
      if (!value) {
        toast.error(`Please fill in the "${fieldName}" field.`);
        return;
      }
    }

    if (parseInt(passengers, 10) < 1) {
      toast.error("Number of passengers cannot be less than 1.");
      return;
    }

    // Date/Time validation (only if not a school run)
    if (service !== "School Runs") {
      const now = new Date();
      const selectedPickupDateTime = new Date(`${pickupDate}T${pickupTime}`);

      if (selectedPickupDateTime < now) {
        toast.error("Pickup date and time cannot be in the past.");
        return;
      }

      if (service === "Car Hire") {
        if (!returnDate || !returnTime) {
          toast.error(
            "Please specify the return date and time for the car hire."
          );
          return;
        }
        const selectedReturnDateTime = new Date(`${returnDate}T${returnTime}`);
        if (selectedReturnDateTime <= selectedPickupDateTime) {
          toast.error(
            "Return date and time must be after the pickup date and time."
          );
          return;
        }
      }
    }

    if (service === "CBD Errands" && !hours) {
      toast.error("Please specify the number of hours for CBD errands.");
      return;
    }

    if (service === "School Runs") {
      if (!schoolName) {
        toast.error("Please provide the school name.");
        return;
      }
    }
    // --- End Validation ---

    const phoneNumber = "27672792090";

    // --- Build Message ---
    let serviceSpecificDetails = "";
    if (service === "CBD Errands") {
      serviceSpecificDetails = `*Hours for Errands:* ${hours}\n`;
    }
    if (service === "Car Hire") {
      serviceSpecificDetails = `
*Return Date:* ${returnDate}
*Return Time:* ${returnTime}
`;
    }
    if (service === "School Runs") {
      serviceSpecificDetails = `
*School Name:* ${schoolName}
*Trip Type:* ${tripType}
`;
    }

    let tripDetails = "";
    if (service !== "School Runs") {
      tripDetails = `
      *Drop-off Location:* ${dropoffLocation}
      *Pickup Date:* ${pickupDate}
      *Pickup Time:* ${pickupTime}
`;
    }

    const message = `
      *New Quote Request*

      *Full Name:* ${fullName}
      *Phone Number:* ${phone}
      *Email:* ${email}
      *Number of Passengers:* ${passengers}

      *Service Type:* ${service}
      *Vehicle Preference:* ${vehicle || "Not specified"}

      *Pickup Location:* ${pickupLocation}
      ${tripDetails}
      ${serviceSpecificDetails}
      *Additional Notes:*
      ${notes}
    `
      .trim()
      .replace(/^\s*\n/gm, "");

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name"
                  className="bg-gray-50 border-gray-200 rounded-lg"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <Input
                  placeholder="# of passengers"
                  type="number"
                  min="1"
                  className="bg-gray-50 border-gray-200 rounded-lg"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Phone"
                  type="tel"
                  className="bg-gray-50 border-gray-200 rounded-lg"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <Input
                  placeholder="Email"
                  type="email"
                  className="bg-gray-50 border-gray-200 rounded-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger className="bg-gray-50 border-gray-200 rounded-lg">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Taxi & Inter-City">
                      Taxi / E-hailing
                    </SelectItem>
                    <SelectItem value="Airport Shuttle">
                      Airport Shuttle
                    </SelectItem>
                    <SelectItem value="Dial-a-Delivery">
                      Dial-a-Delivery
                    </SelectItem>
                    <SelectItem value="School Runs">School Runs</SelectItem>
                    <SelectItem value="City-to-City">City-to-City</SelectItem>
                    <SelectItem value="CBD Errands">CBD Errands</SelectItem>
                    <SelectItem value="Car Hire">Car Hire</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={vehicle} onValueChange={setVehicle}>
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

              {/* Conditional Fields for School Runs */}
              {service === "School Runs" && (
                <div className="space-y-4">
                  <Input
                    placeholder="School Name"
                    className="bg-gray-50 border-gray-200 rounded-lg"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    required
                  />
                  <Select value={tripType} onValueChange={setTripType}>
                    <SelectTrigger className="bg-gray-50 border-gray-200 rounded-lg">
                      <SelectValue placeholder="Select trip type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Return Trip">Return Trip</SelectItem>
                      <SelectItem value="Morning Only">Morning Only</SelectItem>
                      <SelectItem value="Afternoon Only">
                        Afternoon Only
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <Input
                placeholder="Pick-up location"
                className="bg-gray-50 border-gray-200 rounded-lg"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                required
              />

              {service !== "School Runs" && (
                <>
                  <Input
                    placeholder="Drop-off location"
                    className="bg-gray-50 border-gray-200 rounded-lg"
                    value={dropoffLocation}
                    onChange={(e) => setDropoffLocation(e.target.value)}
                    required
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="pickupDate"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Pickup Date
                      </label>
                      <Input
                        id="pickupDate"
                        type="date"
                        min={today}
                        className="bg-gray-50 border-gray-200 rounded-lg"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="pickupTime"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Pickup Time
                      </label>
                      <Input
                        id="pickupTime"
                        type="time"
                        className="bg-gray-50 border-gray-200 rounded-lg"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Conditional Fields for CBD Errands */}
              {service === "CBD Errands" && (
                <Input
                  placeholder="Number of hours for errands"
                  type="number"
                  min="1"
                  className="bg-gray-50 border-gray-200 rounded-lg"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  required
                />
              )}

              {/* Conditional Fields for Car Hire */}
              {service === "Car Hire" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="returnDate"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Return Date
                    </label>
                    <Input
                      id="returnDate"
                      type="date"
                      min={pickupDate || today}
                      className="bg-gray-50 border-gray-200 rounded-lg"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="returnTime"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Return Time
                    </label>
                    <Input
                      id="returnTime"
                      type="time"
                      className="bg-gray-50 border-gray-200 rounded-lg"
                      value={returnTime}
                      onChange={(e) => setReturnTime(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}

              <Textarea
                placeholder="Additional Notes"
                className="bg-gray-50 border-gray-200 rounded-lg min-h-[80px]"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
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
                type="button"
                className="w-full bg-black hover:bg-gray-800 text-white py-6 rounded-lg text-lg"
                onClick={handleBookingSubmit}
                disabled={!agreed}
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
                <li>+27 71 004 7018</li>
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
        href="https://wa.me/27710047018"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingForm />
    </Suspense>
  );
}
