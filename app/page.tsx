"use client"

import { useState } from "react"
import { Car, Package, Clock, Shield, CreditCard, MessageCircle, Mail, Phone, MapPin, User, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function MRFloatLanding() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-8 py-4">
          <div className="text-2xl font-bold text-black">
            <span className="text-black">MR</span> <span className="text-gray-400">FLOAT</span>
          </div>
          <div className="hidden md:flex gap-8 items-center text-gray-700">
            <a href="#home" className="hover:text-[#A4C639] transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="hover:text-[#A4C639] transition-colors font-medium">
              Services
            </a>
            <a href="#fleet" className="hover:text-[#A4C639] transition-colors font-medium">
              Fleet
            </a>
            <a href="#testimonials" className="hover:text-[#A4C639] transition-colors font-medium">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-[#A4C639] transition-colors font-medium">
              Contact
            </a>
            <Button
              className="bg-[#A4C639] hover:bg-[#8FB02F] text-white rounded-xl"
              onClick={() => document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Online Booking
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-gray-100 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-60">
          <img src="/modern-city-road-at-sunset.jpg" alt="City transport" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-8 h-full min-h-[calc(100vh-80px)] flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            {/* Left side - Hero text */}
            <div>
              <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">Your Reliable Transport Partner</h1>
              <p className="text-2xl text-white mb-8 drop-shadow-md">
                Professional rides and delivery services across the city and beyond
              </p>
            </div>

            {/* Right side - Quote Form */}
            <Card className="bg-gray-100/95 backdrop-blur-sm rounded-3xl shadow-2xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">REQUEST A QUOTE</h2>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Input
                        placeholder="First and Last name"
                        className="bg-white pl-4 pr-10 py-6 rounded-lg border-gray-300"
                      />
                      <User className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    <div className="relative">
                      <Input
                        placeholder="# of passengers"
                        type="number"
                        className="bg-white pl-4 pr-10 py-6 rounded-lg border-gray-300"
                      />
                      <Users className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Input
                        placeholder="Phone"
                        type="tel"
                        className="bg-white pl-4 pr-10 py-6 rounded-lg border-gray-300"
                      />
                      <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    <div className="relative">
                      <Input
                        placeholder="Email"
                        type="email"
                        className="bg-white pl-4 pr-10 py-6 rounded-lg border-gray-300"
                      />
                      <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Select>
                      <SelectTrigger className="bg-white py-6 rounded-lg border-gray-300">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="taxi">Taxi / e-hailing</SelectItem>
                        <SelectItem value="airport">Airport Shuttle</SelectItem>
                        <SelectItem value="delivery">Dial-a-Delivery</SelectItem>
                        <SelectItem value="school">School Runs</SelectItem>
                        <SelectItem value="cityride">City-to-City Rides</SelectItem>
                        <SelectItem value="cbd">CBD Errands</SelectItem>
                        <SelectItem value="hire">Car Hire</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger className="bg-white py-6 rounded-lg border-gray-300">
                        <SelectValue placeholder="Select vehicle" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedan">Sedan</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="van">Van</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="relative">
                    <Input
                      placeholder="Pick-up time"
                      type="datetime-local"
                      className="bg-white pl-4 pr-10 py-6 rounded-lg border-gray-300"
                    />
                    <Clock className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>

                  <div className="relative">
                    <Input
                      placeholder="Pick-up location"
                      className="bg-white pl-4 pr-10 py-6 rounded-lg border-gray-300"
                    />
                    <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>

                  <Button type="button" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                    Add Stop
                  </Button>

                  <div className="relative">
                    <Input
                      placeholder="Drop-off location"
                      className="bg-white pl-4 pr-10 py-6 rounded-lg border-gray-300"
                    />
                    <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>

                  <Textarea
                    placeholder="Additional Notes"
                    className="bg-white min-h-[100px] rounded-lg border-gray-300"
                  />

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      checked={agreed}
                      onCheckedChange={(checked) => setAgreed(checked as boolean)}
                      className="mt-1"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-700 leading-tight cursor-pointer">
                      I agree to receive SMS and email communications from MR FLOAT regarding my quote request. You can
                      reply STOP to opt out of SMS at any time.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-lg text-lg font-semibold"
                  >
                    Get My Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Services</h2>
            <p className="text-gray-600 text-lg">We provide comprehensive transport solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow rounded-3xl border-0">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/professional-driver-at-airport-terminal.jpg"
                  alt="Airport shuttle"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Airport Shuttle</h3>
                <p className="text-gray-600 mb-4">
                  Reliable on-time airport transfers with flight tracking to ensure smooth pickups and drop-offs.
                </p>
                <Button variant="default" className="bg-black hover:bg-black/90 w-fit rounded-xl">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow rounded-3xl border-0">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/professional-chauffeur-driving-on-highway.jpg"
                  alt="City rides"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">City-to-City Rides</h3>
                <p className="text-gray-600 mb-4">
                  Comfortable long-distance transport for intercity travel with experienced drivers.
                </p>
                <Button variant="default" className="bg-black hover:bg-black/90 w-fit rounded-xl">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow rounded-3xl border-0">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/delivery-driver-with-packages.jpg"
                  alt="Delivery service"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Dial-a-Delivery</h3>
                <p className="text-gray-600 mb-4">
                  Quick and secure package delivery across the city with real-time tracking for peace of mind.
                </p>
                <Button variant="default" className="bg-black hover:bg-black/90 w-fit rounded-xl">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow rounded-3xl border-0">
              <div className="aspect-square overflow-hidden">
                <img src="/school-bus-with-children.jpg" alt="School runs" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">School Runs</h3>
                <p className="text-gray-600 mb-4">
                  Safe and dependable daily school transport with vetted drivers you can trust.
                </p>
                <Button variant="default" className="bg-black hover:bg-black/90 w-fit rounded-xl">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow rounded-3xl border-0">
              <div className="aspect-square overflow-hidden bg-[#E8F0DC] flex items-center justify-center">
                <img
                  src="/luxury-black-suv-three-quarter-view.jpg"
                  alt="CBD Errands"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">CBD Errands</h3>
                <p className="text-gray-600 mb-4">
                  Quick city errands and business runs with professional drivers at your service.
                </p>
                <Button variant="default" className="bg-black hover:bg-black/90 w-fit rounded-xl">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow rounded-3xl border-0">
              <div className="aspect-square overflow-hidden bg-[#E5E5E5] flex items-center justify-center">
                <img src="/black-suv-side.png" alt="Car Hire" className="w-full h-full object-contain p-8" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">Car Hire</h3>
                <p className="text-gray-600 mb-4">
                  Hourly and daily car hire with professional chauffeur service for all occasions.
                </p>
                <Button variant="default" className="bg-black hover:bg-black/90 w-fit rounded-xl">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Fleet Section */}
      <section id="fleet" className="py-20 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Our Fleet</h2>
            <p className="text-gray-600 text-lg">Modern and well-maintained vehicles for every transport need</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden rounded-3xl border-0 shadow-md">
              <div className="bg-[#E8F0DC] aspect-square flex items-center justify-center p-8">
                <img src="/greycar.jpg" alt="Sedan" className="w-full h-full object-contain" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Comfort Sedan</h3>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Car className="w-4 h-4" /> 4 seats
                  </span>
                  <span className="flex items-center gap-1">
                    <Package className="w-4 h-4" /> 2 bags
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-3xl border-0 shadow-md">
              <div className="bg-[#E5E5E5] aspect-square flex items-center justify-center p-8">
                <img src="/bluecar.png" alt="SUV" className="w-full h-full object-contain" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Premium SUV</h3>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Car className="w-4 h-4" /> 6 seats
                  </span>
                  <span className="flex items-center gap-1">
                    <Package className="w-4 h-4" /> 4 bags
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-3xl border-0 shadow-md">
              <div className="bg-[#E8F0DC] aspect-square flex items-center justify-center p-8">
                <img src="/whitecar.png" alt="Van" className="w-full h-full object-contain" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Spacious Van</h3>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Car className="w-4 h-4" /> 8 seats
                  </span>
                  <span className="flex items-center gap-1">
                    <Package className="w-4 h-4" /> 6 bags
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-lg">At MR FLOAT, we deliver exceptional service with every ride</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#A4C639] rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Easy Booking</h3>
              <p className="text-gray-600">Book your ride in minutes through our simple and fast platform</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-[#1a1a1a] rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Drivers</h3>
              <p className="text-gray-600">Experienced and vetted drivers committed to your safety</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-[#A4C639] rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Car className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Modern Fleet</h3>
              <p className="text-gray-600">Well-maintained vehicles equipped for comfort and reliability</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-[#1a1a1a] rounded-3xl flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Payment</h3>
              <p className="text-gray-600">Multiple secure payment options for your convenience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg">Real experiences from satisfied customers</p>
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
                  "Exceptional service! The driver was professional and punctual. MR FLOAT made my airport transfer
                  stress-free. Highly recommend!"
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
                  "We use MR FLOAT for our school runs daily. The drivers are trustworthy and the kids love them.
                  Perfect service for busy parents!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#A4C639] rounded-full flex items-center justify-center text-white font-bold">
                    LS
                  </div>
                  <div>
                    <p className="font-bold">Lindiwe Sithole</p>
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
                  "Great for business travel! Reliable, clean vehicles and always on time. MR FLOAT is now our go-to
                  transport solution."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#A4C639] rounded-full flex items-center justify-center text-white font-bold">
                    JK
                  </div>
                  <div>
                    <p className="font-bold">John Khumalo</p>
                    <p className="text-sm text-gray-500">Corporate Client</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Get a Quote</h2>
            <p className="text-gray-600 text-lg">Fill out the form below and we'll get back to you shortly</p>
          </div>

          <Card className="rounded-3xl border-0 shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <Input placeholder="John Doe" className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="rounded-xl" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <Input type="tel" placeholder="+27 123 456 7890" className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Service Required</label>
                    <Select>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="taxi">Taxi / E-hailing Service</SelectItem>
                        <SelectItem value="airport">Airport Shuttle</SelectItem>
                        <SelectItem value="delivery">Dial-a-Delivery</SelectItem>
                        <SelectItem value="school">School Runs</SelectItem>
                        <SelectItem value="intercity">City-to-City Rides</SelectItem>
                        <SelectItem value="cbd">CBD Errands</SelectItem>
                        <SelectItem value="hire">Car Hire</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Pick-up Location</label>
                    <Input placeholder="Enter pickup address" className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Drop-off Location</label>
                    <Input placeholder="Enter destination" className="rounded-xl" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Date</label>
                    <Input type="date" className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Time</label>
                    <Input type="time" className="rounded-xl" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Additional Information</label>
                  <Textarea
                    placeholder="Tell us more about your transport needs..."
                    className="rounded-xl min-h-[120px]"
                  />
                </div>

                <Button
                  type="button"
                  size="lg"
                  className="w-full bg-[#A4C639] hover:bg-[#8FB02F] text-white rounded-xl text-lg"
                  onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Submit via WhatsApp
                </Button>

                <p className="text-center text-sm text-gray-500">
                  You can also reach us at{" "}
                  <a href="mailto:info@mrfloat.com" className="text-[#A4C639] hover:underline">
                    info@mrfloat.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:+27123456789" className="text-[#A4C639] hover:underline">
                    +27 123 456 789
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => window.open("https://wa.me/1234567890", "_blank")}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </button>

      {/* Footer */}
      <footer id="contact" className="bg-[#1a1a1a] text-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">MR FLOAT</h4>
              <p className="text-white/70 mb-4">Your trusted transport partner for all occasions</p>
              <div className="space-y-2 text-white/70">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +27 123 456 789
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@mrfloat.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Johannesburg, SA
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Top Services</h4>
              <ul className="space-y-2 text-white/70">
                <li>Taxi / E-hailing</li>
                <li>Airport Shuttle</li>
                <li>School Runs</li>
                <li>CBD Errands</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Explore</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#fleet" className="hover:text-white transition-colors">
                    Our Fleet
                  </a>
                </li>
                <li>
                  <a href="#quote-form" className="hover:text-white transition-colors">
                    Get Quote
                  </a>
                </li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">More Services</h4>
              <ul className="space-y-2 text-white/70">
                <li>City-to-City Rides</li>
                <li>Dial-a-Delivery</li>
                <li>Car Hire</li>
                <li>Corporate Packages</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2025 MR FLOAT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
