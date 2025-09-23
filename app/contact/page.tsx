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
import { motion } from "framer-motion"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.1 } }
  }

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  }

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 }
  }
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
    { day: "Montag", hours: "9:00 - 18:00", icon: "🦥", },
    { day: "Dienstag", hours: "9:00 - 18:00", icon: "✂️", note: "" },
    { day: "Mittwoch", hours: "9:00 - 18:00", icon: "🎨", note: "" },
    { day: "Donnerstag", hours: "9:00 - 18:00", icon: "💇‍♀️", note: "" },
    { day: "Freitag", hours: "9:00 - 18:00", icon: "✨", note: "" },
    { day: "Samstag", hours: "8:00 - 16:00", icon: "🌟", },
    { day: "Sonntag", hours: "9:00 - 18:00", icon: "🌿", },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            className="mb-8"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div 
              className="flex justify-center space-x-4 mb-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                style={{
                  animationDuration: "2s",
                  animationIterationCount: "infinite",
                  animationTimingFunction: "ease-in-out"
                }}
              >
                <MapPin className="w-12 h-12 text-yellow-400" />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0]
                }}
                style={{
                  animationDuration: "2s",
                  animationIterationCount: "infinite",
                  animationTimingFunction: "ease-in-out",
                  animationDelay: "0.2s"
                }}
              >
                <Scissors className="w-12 h-12 text-yellow-400" />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, -5, 5, 0]
                }}
                style={{
                  animationDuration: "2s",
                  animationIterationCount: "infinite",
                  animationTimingFunction: "ease-in-out",
                  animationDelay: "0.4s"
                }}
              >
                <Leaf className="w-12 h-12 text-yellow-400" />
              </motion.div>
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4 font-serif text-yellow-400"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              Finden Sie Ihre Dschungel-Oase
            </motion.h1>
            <motion.p 
              className="text-xl text-emerald-100 max-w-3xl mx-auto"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Im Herzen von Bad Laasphe gelegen, freuen wir uns darauf, Sie in unserem grünen Refugium willkommen zu heißen
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Information & Map */}
      <motion.section 
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                <h2 className="text-4xl font-bold text-emerald-900 mb-8 font-serif">Kontakt aufnehmen</h2>
              </motion.div>

              {/* Location */}
              <motion.div 
                variants={slideInLeft}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-2 border-emerald-200 hover:border-emerald-400 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <MapPin className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-emerald-900 mb-2">Unser Dschungel-Standort</h3>
                        <p className="text-gray-700 mb-2">Königstraße 34</p>
                        <p className="text-gray-700 mb-4">57334 Bad Laasphe, Germany</p>
                        <motion.div 
                          className="flex flex-wrap gap-2"
                          variants={staggerContainer}
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: true }}
                        >
                          <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                            <Badge className="bg-emerald-100 text-emerald-800">
                              <Car className="w-3 h-3 mr-1" />
                              Kostenlose Parkplätze
                            </Badge>
                          </motion.div>
                          <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                            <Badge className="bg-emerald-100 text-emerald-800">
                              <Bus className="w-3 h-3 mr-1" />
                              Bushaltestelle in der Nähe
                            </Badge>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Phone & Email */}
              <motion.div 
                className="grid md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div 
                  variants={slideInLeft}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="border-2 border-emerald-200 hover:border-emerald-400 transition-colors duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Phone className="w-6 h-6 text-emerald-900" />
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-bold text-emerald-900">Rufen Sie uns an</h3>
                          <p className="text-gray-700">+49 123 456 789</p>
                          <p className="text-sm text-emerald-600">Erreichbar während der Öffnungszeiten</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div 
                  variants={slideInRight}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="border-2 border-emerald-200 hover:border-emerald-400 transition-colors duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Mail className="w-6 h-6 text-emerald-900" />
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-bold text-emerald-900">E-Mail senden</h3>
                          <p className="text-gray-700">hello@jungleglam.de</p>
                          <p className="text-sm text-emerald-600">Wir antworten innerhalb von 24 Stunden</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Social Media */}
              <motion.div 
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-2 border-emerald-200 hover:border-emerald-400 transition-colors duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-emerald-900 mb-4">Folgen Sie unserer Dschungel-Reise</h3>
                    <motion.div 
                      className="flex space-x-4"
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      {[
                        { icon: Instagram, label: "@jungleglam", color: "from-pink-500 to-purple-600" },
                        { icon: Facebook, label: "Der Salon Hair", color: "from-blue-500 to-blue-600" },
                        { icon: MessageCircle, label: "WhatsApp", color: "from-green-500 to-green-600" },
                      ].map((social, index) => (
                        <motion.div 
                          key={index}
                          variants={fadeInUp}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            className={`bg-gradient-to-r ${social.color} hover:scale-105 transition-transform duration-300 text-white`}
                          >
                            <social.icon className="w-5 h-5 mr-2" />
                            {social.label}
                          </Button>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Interactive Map */}
            <motion.div 
              className="space-y-8"
              variants={slideInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div whileHover={{ scale: 1.01 }}>
                <Card className="border-2 border-emerald-200 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-square relative">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.123456789!2d8.2234567!3d50.9234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc123456789abc%3A0x123456789abcdef0!2sK%C3%B6nigstra%C3%9Fe%2034%2C%2057334%20Bad%20Laasphe%2C%20Germany!5e0!3m2!1sen!2sde!4v1234567890123!5m2!1sen!2sde&q=Königstraße+34,+57334+Bad+Laasphe,+Germany"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                        title="Der Salon Location"
                      />
                      
                      {/* Floating info card over the map */}
                      <motion.div 
                        className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border-2 border-emerald-200"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                      >
                        <div className="flex items-center space-x-3">
                          <motion.div 
                            className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0"
                            animate={{ 
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, -5, 0]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <Scissors className="w-5 h-5 text-white" />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-emerald-900 font-serif">Der Salon</h3>
                            <p className="text-sm text-emerald-700">Königstraße 34, Bad Laasphe</p>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button 
                              size="sm"
                              className="bg-emerald-600 hover:bg-emerald-700 text-white"
                              onClick={() => window.open('https://maps.google.com/directions/?api=1&destination=Königstraße+34,+57334+Bad+Laasphe,+Germany', '_blank')}
                            >
                              Route
                            </Button>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Additional location info */}
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="border-2 border-emerald-200 hover:border-emerald-400 transition-colors duration-300 p-4">
                    <div className="text-center">
                      <motion.div 
                        className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Car className="w-5 h-5 text-white" />
                      </motion.div>
                      <p className="text-sm font-semibold text-emerald-900">Kostenlose</p>
                      <p className="text-xs text-emerald-700">Parkplätze</p>
                    </div>
                  </Card>
                </motion.div>
                
                <motion.div 
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="border-2 border-emerald-200 hover:border-emerald-400 transition-colors duration-300 p-4">
                    <div className="text-center">
                      <motion.div 
                        className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      >
                        <Bus className="w-5 h-5 text-white" />
                      </motion.div>
                      <p className="text-sm font-semibold text-emerald-900">Bushaltestelle</p>
                      <p className="text-xs text-emerald-700">in der Nähe</p>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Opening Hours */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-br from-emerald-100 to-emerald-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Clock className="w-16 h-16 mx-auto mb-4 text-emerald-600" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 font-serif">Öffnungszeiten</h2>
            <p className="text-xl text-emerald-700">Wenn unser Dschungel für Verwandlungen geöffnet ist</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-7 gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {openingHours.map((day, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card
                  className={`text-center p-4 transition-all duration-300 hover:shadow-lg ${
                    day.hours === "Closed"
                      ? "bg-gray-100 border-gray-200"
                      : "bg-white border-emerald-200 hover:border-emerald-400"
                  }`}
                >
                  <CardContent className="p-0">
                    <motion.div 
                      className="text-3xl mb-2"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                    >
                      {day.icon}
                    </motion.div>
                    <h3 className="font-bold text-emerald-900 mb-1">{day.day}</h3>
                    <p className={`text-sm mb-2 ${day.hours === "Closed" ? "text-gray-500" : "text-emerald-700"}`}>
                      {day.hours}
                    </p>
                    {day.note && <p className="text-xs text-emerald-600 italic">{day.note}</p>}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section 
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 font-serif">Senden Sie uns eine Nachricht</h2>
            <p className="text-xl text-gray-600">Haben Sie Fragen? Möchten Sie buchen? Wir würden gerne von Ihnen hören!</p>
          </motion.div>

          <motion.div
            variants={slideInLeft}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.01 }}
          >
            <Card className="border-2 border-emerald-200">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-emerald-100">
                <CardTitle className="text-2xl text-emerald-900 font-serif">Kontakt aufnehmen</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="grid md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                  >
                    <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                      <label htmlFor="name" className="block text-sm font-medium text-emerald-900 mb-2">
                        Ihr Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-emerald-200 focus:border-emerald-400"
                        placeholder="Geben Sie Ihren vollständigen Namen ein"
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                      <label htmlFor="email" className="block text-sm font-medium text-emerald-900 mb-2">
                        E-Mail-Adresse *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-emerald-200 focus:border-emerald-400"
                        placeholder="ihre.email@beispiel.com"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="grid md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                  >
                    <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                      <label htmlFor="phone" className="block text-sm font-medium text-emerald-900 mb-2">
                        Telefonnummer
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
                    </motion.div>
                    <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                      <label htmlFor="service" className="block text-sm font-medium text-emerald-900 mb-2">
                        Service-Interesse
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-emerald-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
                      >
                        <option value="">Wählen Sie einen Service</option>
                        <option value="cut">Haarschnitt & Styling</option>
                        <option value="color">Coloration</option>
                        <option value="treatment">Haar-Behandlungen</option>
                        <option value="event">Event-Styling</option>
                        <option value="consultation">Beratung</option>
                      </select>
                    </motion.div>
                  </motion.div>

                  <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                    <label htmlFor="message" className="block text-sm font-medium text-emerald-900 mb-2">
                      Ihre Nachricht *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="border-emerald-200 focus:border-emerald-400"
                      placeholder="Erzählen Sie uns von Ihren Haar-Zielen, bevorzugten Terminen oder Fragen, die Sie haben..."
                    />
                  </motion.div>

                  <motion.div 
                    className="text-center"
                    variants={fadeInUp}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Nachricht senden
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Emergency Contact */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 font-serif text-yellow-400"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            Brauchen Sie sofortige Hilfe?
          </motion.h2>
          <motion.p 
            className="text-xl text-emerald-100 mb-8"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            🌿 Haar-Notfall? Color-Katastrophe? Wir sind hier, um bei jeder Haar-Krise zu helfen!
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                </motion.div>
                Notfall-Hotline
              </Button>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                </motion.div>
                WhatsApp schreiben
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
