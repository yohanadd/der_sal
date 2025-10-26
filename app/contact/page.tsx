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
  Loader2,
  CheckCircle,
  AlertCircle,
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

  const [formState, setFormState] = useState<{
    loading: boolean
    success: boolean
    error: string | null
  }>({
    loading: false,
    success: false,
    error: null,
  })

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Set loading state
    setFormState({ loading: true, success: false, error: null })

    try {
      // Prepare the data to send to backend
      const submissionData = {
        ...formData,
        address: "dersalon" // This is the required field for your backend
      }

      console.log("Sending data to backend:", submissionData)

      // Send POST request to your backend
      const response = await fetch('https://algonod.onrender.com/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`)
      }

      // Parse the response
      const result = await response.json()
      console.log("Backend response:", result)

      // Success!
      setFormState({ loading: false, success: true, error: null })
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, success: false }))
      }, 5000)

    } catch (error) {
      console.error('Error submitting form:', error)
      setFormState({ 
        loading: false, 
        success: false, 
        error: error instanceof Error ? error.message : 'An unknown error occurred' 
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 font-orbitron">
      {/* Hero Section */}
      <motion.section 
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            className="mb-6 sm:mb-8"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white px-2 sm:px-0"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              Finden Sie Uns
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Im Herzen von Bad Laasphe gelegen, freuen wir uns darauf, Sie in unserem Salon willkommen zu heißen
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Information & Map */}
      <motion.section 
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <motion.div 
              className="space-y-6 sm:space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">Kontakt aufnehmen</h2>
              </motion.div>

              {/* Location */}
              <motion.div 
                variants={slideInLeft}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-2 border-gray-700 hover:border-gray-600 transition-colors duration-300 bg-gray-800">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <motion.div 
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-100" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Unser Standort</h3>
                        <p className="text-gray-300 text-sm sm:text-base mb-2">Königstraße 34</p>
                        <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">57334 Bad Laasphe, Germany</p>
                        <motion.div 
                          className="flex flex-wrap gap-2"
                          variants={staggerContainer}
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: true }}
                        >
                          <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                            <Badge className="bg-gray-700 text-gray-100 font-orbitron text-xs">
                              <Car className="w-3 h-3 mr-1 text-gray-300" />
                              Kostenlose Parkplätze
                            </Badge>
                          </motion.div>
                          <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}>
                            <Badge className="bg-gray-700 text-gray-100 font-orbitron text-xs">
                              <Bus className="w-3 h-3 mr-1 text-gray-300" />
                              Bushaltestelle in der Nähe
                            </Badge>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Phone & Email - Equal Height Cards */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div 
                  variants={slideInLeft}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="border-2 border-gray-700 hover:border-gray-600 transition-colors duration-300 bg-gray-800 h-full">
                    <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                      <div className="flex items-start space-x-3 sm:space-x-4 flex-grow">
                        <motion.div 
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center flex-shrink-0"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-amber-100" />
                        </motion.div>
                        <div className="flex-grow">
                          <h3 className="text-base sm:text-lg font-bold text-white">Rufen Sie uns an</h3>
                          <p className="text-gray-300 text-sm sm:text-base">+49 123 456 789</p>
                          <p className="text-xs sm:text-sm text-gray-400 mt-2">Erreichbar während der Öffnungszeiten</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div 
                  variants={slideInRight}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="border-2 border-gray-700 hover:border-gray-600 transition-colors duration-300 bg-gray-800 h-full">
                    <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                      <div className="flex items-start space-x-3 sm:space-x-4 flex-grow">
                        <motion.div 
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center flex-shrink-0"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-amber-100" />
                        </motion.div>
                        <div className="flex-grow">
                          <h3 className="text-base sm:text-lg font-bold text-white">E-Mail senden</h3>
                          <p className="text-gray-300 text-sm sm:text-base">info@dersalon-scharavin.de</p>
                          <p className="text-xs sm:text-sm text-gray-400 mt-2">Wir antworten innerhalb von 24 Stunden</p>
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
                <Card className="border-2 border-gray-700 hover:border-gray-600 transition-colors duration-300 bg-gray-800">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Folgen Sie Uns</h3>
                    <motion.div 
                      className="flex flex-col xs:flex-row gap-3 sm:gap-4"
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      {[
                        { icon: Instagram, label: "@SalonBadLaasphe", color: "from-gray-700 to-gray-800" },
                        { icon: Facebook, label: "Der Salon", color: "from-gray-700 to-gray-800" },
                        { icon: MessageCircle, label: "WhatsApp", color: "from-gray-700 to-gray-800" },
                      ].map((social, index) => (
                        <motion.div 
                          key={index}
                          variants={fadeInUp}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1"
                        >
                          <Button
                            className={`bg-gradient-to-r ${social.color} hover:scale-105 transition-transform duration-300 text-white font-orbitron border border-gray-600 w-full text-xs sm:text-sm`}
                          >
                            <social.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-amber-400" />
                            <span className="truncate">{social.label}</span>
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
              className="space-y-6 sm:space-y-8 flex flex-col items-center justify-center"
              variants={slideInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div whileHover={{ scale: 1.01 }} className="w-full">
                <div className="border-2 border-gray-700 overflow-hidden bg-gray-800 rounded-lg">
                  <div className="aspect-square relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.123456789!2d8.2234567!3d50.9234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc123456789abc%3A0x123456789abcdef0!2sK%C3%B6nigstra%C3%9Fe%2034%2C%2057334%20Bad%20Laasphe%2C%20Germany!5e0!3m2!1sen!2sde!4v1234567890123!5m2!1sen!2sde&q=Königstraße+34,+57334+Bad+Laasphe,+Germany&center=50.9234567,8.2234567&zoom=15"
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
                      className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 bg-gray-800/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg border-2 border-gray-700"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <motion.div 
                          className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center flex-shrink-0"
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
                          <Scissors className="w-4 h-4 sm:w-5 sm:h-5 text-amber-100" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-bold text-white truncate">Der Salon</h3>
                          <p className="text-xs sm:text-sm text-gray-300 truncate">Königstraße 34, Bad Laasphe</p>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button 
                            size="sm"
                            className="bg-gray-700 hover:bg-gray-600 text-white font-orbitron border border-gray-600 text-xs sm:text-sm"
                            onClick={() => window.open('https://maps.google.com/directions/?api=1&destination=Königstraße+34,+57334+Bad+Laasphe,+Germany', '_blank')}
                          >
                            Route
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* Additional location info */}
              <motion.div 
                className="grid grid-cols-2 gap-3 sm:gap-4 w-full"
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
                  <Card className="border-2 border-gray-700 hover:border-gray-600 transition-colors duration-300 p-3 sm:p-4 bg-gray-800">
                    <div className="text-center">
                      <motion.div 
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-2"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Car className="w-4 h-4 sm:w-5 sm:h-5 text-amber-100" />
                      </motion.div>
                      <p className="text-xs sm:text-sm font-semibold text-white">Kostenlose</p>
                      <p className="text-xs text-gray-300">Parkplätze</p>
                    </div>
                  </Card>
                </motion.div>
                
                <motion.div 
                  variants={fadeInUp}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="border-2 border-gray-700 hover:border-gray-600 transition-colors duration-300 p-3 sm:p-4 bg-gray-800">
                    <div className="text-center">
                      <motion.div 
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-2"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      >
                        <Bus className="w-4 h-4 sm:w-5 sm:h-5 text-amber-100" />
                      </motion.div>
                      <p className="text-xs sm:text-sm font-semibold text-white">Bushaltestelle</p>
                      <p className="text-xs text-gray-300">in der Nähe</p>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section 
        className="py-12 sm:py-16 px-4 sm:px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-6 sm:mb-8"
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
              Schreib uns!
            </h2>
          </motion.div>

          <motion.div
            variants={slideInLeft}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.01 }}
          >
            <Card className="border-2 border-gray-700 bg-gray-800">
              <CardHeader className="bg-gradient-to-r from-gray-700/30 to-gray-800/30 p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl text-white">Kontakt aufnehmen</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                {/* Success Message */}
                {formState.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-3 sm:mb-4 p-3 bg-green-900/20 border border-green-700 rounded-lg flex items-center"
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 flex-shrink-0" />
                    <span className="text-green-300 text-sm sm:text-b
                    ase">
                      Nachricht erfolgreich gesendet! Wir melden uns bald bei Ihnen.
                    </span>
                  </motion.div>
                )}

                {/* Error Message */}
                {formState.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-3 sm:mb-4 p-3 bg-red-900/20 border border-red-700 rounded-lg flex items-center"
                  >
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mr-2 flex-shrink-0" />
                    <span className="text-red-300 text-sm sm:text-base">Fehler: {formState.error}</span>
                  </motion.div>
                )}

                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {/* Hidden address field for backend */}
                  <input type="hidden" name="address" value="dersalon" />
                  
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    variants={staggerContainer}
                  >
                    <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Ihr Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-gray-700 focus:border-gray-600 bg-gray-900 text-white text-sm sm:text-base placeholder:text-gray-400"
                        placeholder="Geben Sie Ihren vollständigen Namen ein"
                        disabled={formState.loading}
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        E-Mail-Adresse *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-gray-700 focus:border-gray-600 bg-gray-900 text-white text-sm sm:text-base placeholder:text-gray-400"
                        placeholder="ihre.email@beispiel.com"
                        disabled={formState.loading}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    variants={staggerContainer}
                  >
                    <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Telefonnummer
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-gray-700 focus:border-gray-600 bg-gray-900 text-white text-sm sm:text-base placeholder:text-gray-400"
                        placeholder="+49 123 456 789"
                        disabled={formState.loading}
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp} transition={{ duration: 0.6, ease: "easeOut" }}>
                      <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                        Service-Interesse
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600 bg-gray-900 text-white text-sm sm:text-base placeholder:text-gray-400"
                        disabled={formState.loading}
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
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Ihre Nachricht *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-gray-700 focus:border-gray-600 bg-gray-900 text-white text-sm sm:text-base placeholder:text-gray-400"
                      placeholder="Erzählen Sie uns von Ihren Haar-Zielen, bevorzugten Terminen oder Fragen, die Sie haben..."
                      disabled={formState.loading}
                    />
                  </motion.div>

                  <motion.div 
                    className="text-center"
                    variants={fadeInUp}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <motion.div
                      whileHover={{ scale: formState.loading ? 1 : 1.05 }}
                      whileTap={{ scale: formState.loading ? 1 : 0.95 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-6 sm:px-8 font-orbitron border border-gray-600 text-sm sm:text-base w-full sm:w-auto"
                        disabled={formState.loading}
                      >
                        {formState.loading ? (
                          <>
                            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin text-amber-400" />
                            Wird gesendet...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-amber-400" />
                            Nachricht senden
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}