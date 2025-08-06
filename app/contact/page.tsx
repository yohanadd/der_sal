"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  Car,
  Bus,
  Scissors,
  Leaf,
  Send,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const openingHours = [
    { day: "Monday", hours: "Closed", icon: "🦥", note: "Sloth Day - We're resting!" },
    { day: "Tuesday", hours: "9:00 - 18:00", icon: "✂️", note: "" },
    { day: "Wednesday", hours: "9:00 - 18:00", icon: "🎨", note: "" },
    { day: "Thursday", hours: "9:00 - 18:00", icon: "💇‍♀️", note: "" },
    { day: "Friday", hours: "9:00 - 18:00", icon: "✨", note: "" },
    { day: "Saturday", hours: "8:00 - 16:00", icon: "🌟", note: "Early bird special!" },
    { day: "Sunday", hours: "Closed", icon: "🌿", note: "Nature day" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center space-x-4 mb-6">
              <MapPin className="w-12 h-12 text-yellow-400 animate-bounce" />
              <Scissors className="w-12 h-12 text-yellow-400 animate-pulse" />
              <Leaf className="w-12 h-12 text-yellow-400 animate-bounce" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif text-yellow-400">Find Your Jungle Oasis</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Located in the heart of Bad Laasphe, we're ready to welcome you to our green sanctuary
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Map */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-emerald-900 mb-8 font-serif">Get in Touch</h2>
              </div>

              {/* Location */}
              <Card className="border-2 border-emerald-200 hover:border-emerald-400 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-emerald-900 mb-2">Our Jungle Location</h3>
                      <p className="text-gray-700 mb-2">Musterstraße 123</p>
                      <p className="text-gray-700 mb-4">57334 Bad Laasphe, Germany</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-emerald-100 text-emerald-800">
                          <Car className="w-3 h-3 mr-1" />
                          Free Parking
                        </Badge>
                        <Badge className="bg-emerald-100 text-emerald-800">
                          <Bus className="w-3 h-3 mr-1" />
                          Bus Stop Nearby
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-emerald-200 hover:border-emerald-400 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-emerald-900" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-emerald-900">Call Us</h3>
                        <p className="text-gray-700">+49 123 456 789</p>
                        <p className="text-sm text-emerald-600">Available during opening hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-emerald-200 hover:border-emerald-400 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-emerald-900" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-emerald-900">Email Us</h3>
                        <p className="text-gray-700">hello@jungleglam.de</p>
                        <p className="text-sm text-emerald-600">We reply within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <Card className="border-2 border-emerald-200 hover:border-emerald-400 transition-colors duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-emerald-900 mb-4">Follow Our Jungle Journey</h3>
                  <div className="flex space-x-4">
                    {[
                      { icon: Instagram, label: "@jungleglam", color: "from-pink-500 to-purple-600" },
                      { icon: Facebook, label: "Jungle Glam Hair", color: "from-blue-500 to-blue-600" },
                      { icon: MessageCircle, label: "WhatsApp", color: "from-green-500 to-green-600" },
                    ].map((social, index) => (
                      <Button
                        key={index}
                        className={`bg-gradient-to-r ${social.color} hover:scale-105 transition-transform duration-300 text-white`}
                      >
                        <social.icon className="w-5 h-5 mr-2" />
                        {social.label}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div className="space-y-8">
              <Card className="border-2 border-emerald-200">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* Map placeholder with jungle theme */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-10 left-10 w-16 h-16 text-emerald-400">
                        <Leaf className="w-full h-full rotate-12" />
                      </div>
                      <div className="absolute bottom-10 right-10 w-12 h-12 text-emerald-400">
                        <Leaf className="w-full h-full -rotate-45" />
                      </div>
                    </div>
                    <div className="text-center z-10">
                      <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                        <Scissors className="w-10 h-10 text-emerald-900" />
                      </div>
                      <h3 className="text-2xl font-bold text-emerald-900 mb-2 font-serif">We're Here!</h3>
                      <p className="text-emerald-700">Musterstraße 123, Bad Laasphe</p>
                      <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white">
                        <MapPin className="w-4 h-4 mr-2" />
                        Open in Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-100 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Clock className="w-16 h-16 mx-auto mb-4 text-emerald-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 font-serif">Opening Hours</h2>
            <p className="text-xl text-emerald-700">When our jungle is open for transformations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-4">
            {openingHours.map((day, index) => (
              <Card
                key={index}
                className={`text-center p-4 transition-all duration-300 hover:shadow-lg ${
                  day.hours === "Closed"
                    ? "bg-gray-100 border-gray-200"
                    : "bg-white border-emerald-200 hover:border-emerald-400"
                }`}
              >
                <CardContent className="p-0">
                  <div className="text-3xl mb-2">{day.icon}</div>
                  <h3 className="font-bold text-emerald-900 mb-1">{day.day}</h3>
                  <p className={`text-sm mb-2 ${day.hours === "Closed" ? "text-gray-500" : "text-emerald-700"}`}>
                    {day.hours}
                  </p>
                  {day.note && <p className="text-xs text-emerald-600 italic">{day.note}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 font-serif">Send Us a Message</h2>
            <p className="text-xl text-gray-600">Have questions? Want to book? We'd love to hear from you!</p>
          </div>

          <Card className="border-2 border-emerald-200">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-emerald-100">
              <CardTitle className="text-2xl text-emerald-900 font-serif">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-emerald-900 mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-emerald-200 focus:border-emerald-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-emerald-900 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-emerald-200 focus:border-emerald-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-emerald-900 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-emerald-200 focus:border-emerald-400"
                      placeholder="+49 123 456 789"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-emerald-900 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-emerald-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
                    >
                      <option value="">Select a service</option>
                      <option value="cut">Hair Cut & Style</option>
                      <option value="color">Color Services</option>
                      <option value="treatment">Hair Treatments</option>
                      <option value="event">Special Event Styling</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-emerald-900 mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="border-emerald-200 focus:border-emerald-400"
                    placeholder="Tell us about your hair goals, preferred appointment times, or any questions you have..."
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-yellow-400">Need Immediate Help?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            🌿 Hair emergency? Color disaster? We're here to help tame any hair crisis!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8"
            >
              <Phone className="w-5 h-5 mr-2" />
              Emergency Hotline
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
