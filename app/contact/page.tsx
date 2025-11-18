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
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  Car,
  Bus,
  Scissors,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { motion } from "framer-motion"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  // Ultra-fast animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.2, ease: "easeOut" }
  }

  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.03 } }
  }

  const slideInLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.2, ease: "easeOut" }
  }

  const slideInRight = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.2, ease: "easeOut" }
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

  // Instagram URL for both buttons
  const instagramUrl = "https://www.instagram.com/dersalon_inesscharavin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"

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
    <div className="min-h-screen bg-[#201d24] font-posterama mt-8">
      {/* Hero Section */}
      <motion.section 
        className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#2d2a32] text-white"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            className="mb-4 sm:mb-6 md:mb-8"
            variants={fadeInUp}
          >
            <motion.h1 
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 text-white px-2 sm:px-0 tracking-wider md:tracking-widest uppercase" 
              style={{ fontFamily: 'var(--font-posterama)' }}
              variants={fadeInUp}
            >
              Kontakt & Anfahrt
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto px-2 sm:px-0 tracking-normal sm:tracking-wider uppercase" 
              style={{ fontFamily: 'var(--font-posterama)' }}
              variants={fadeInUp}
            >
              Finden Sie unseren Salon in Bad Laasphe - Königstraße 34. Kostenlose Parkplätze & beste Erreichbarkeit.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Information & Map */}
      <motion.section 
        className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-20px" }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Contact Info */}
            <motion.div 
              className="space-y-4 sm:space-y-6 md:space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-10px" }}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-6 md:mb-8 tracking-wider md:tracking-widest uppercase" 
                    style={{ fontFamily: 'var(--font-posterama)' }}>
                  Ihr Salon in Bad Laasphe
                </h2>
              </motion.div>

              {/* Location */}
              <motion.div 
                variants={slideInLeft}
              >
                <Card className="border border-[#3a3640] hover:border-white transition-colors duration-150 bg-[#2d2a32]">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                      <motion.div 
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#3a3640] rounded-full flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 180, scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg md:text-xl font-black text-white mb-1 sm:mb-2 tracking-wide md:tracking-wider uppercase" 
                            style={{ fontFamily: 'var(--font-posterama)' }}>
                          Unser Standort
                        </h3>
                        <p className="text-white text-sm sm:text-base mb-1 sm:mb-2 tracking-wide uppercase" 
                           style={{ fontFamily: 'var(--font-posterama)' }}>
                          Königstraße 34
                        </p>
                        <p className="text-white text-sm sm:text-base mb-2 sm:mb-3 md:mb-4 tracking-wide uppercase" 
                           style={{ fontFamily: 'var(--font-posterama)' }}>
                          57334 Bad Laasphe, Germany
                        </p>
                        <motion.div 
                          className="flex flex-wrap gap-1 sm:gap-2"
                          variants={staggerContainer}
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: true }}
                        >
                          <motion.div variants={fadeInUp}>
                            <Badge className="bg-[#3a3640] text-white text-xs border border-white tracking-wide uppercase" 
                                   style={{ fontFamily: 'var(--font-posterama)' }}>
                              <Car className="w-3 h-3 mr-1 text-white" />
                              Kostenlose Parkplätze
                            </Badge>
                          </motion.div>
                          <motion.div variants={fadeInUp}>
                            <Badge className="bg-[#3a3640] text-white text-xs border border-white tracking-wide uppercase" 
                                   style={{ fontFamily: 'var(--font-posterama)' }}>
                              <Bus className="w-3 h-3 mr-1 text-white" />
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
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-10px" }}
              >
                <motion.div 
                  variants={slideInLeft}
                  className="h-full"
                >
                  <Card className="border border-[#3a3640] hover:border-white transition-colors duration-150 bg-[#2d2a32] h-full">
                    <CardContent className="p-3 sm:p-4 md:p-6 h-full flex flex-col">
                      <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 flex-grow">
                        <motion.div 
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#3a3640] rounded-full flex items-center justify-center flex-shrink-0"
                          whileHover={{ rotate: 180, scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                        </motion.div>
                        <div className="flex-grow">
                          <h3 className="text-sm sm:text-base md:text-lg font-black text-white tracking-wide md:tracking-wider uppercase" 
                              style={{ fontFamily: 'var(--font-posterama)' }}>
                            Telefon
                          </h3>
                          <p className="text-white text-sm sm:text-base tracking-wide uppercase" 
                             style={{ fontFamily: 'var(--font-posterama)' }}>
                            02752 / 2029205
                          </p>
                          <p className="text-xs sm:text-sm text-white mt-1 sm:mt-2 tracking-wide uppercase" 
                             style={{ fontFamily: 'var(--font-posterama)' }}>
                            Erreichbar während der Öffnungszeiten
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div 
                  variants={slideInRight}
                  className="h-full"
                >
                  <Card className="border border-[#3a3640] hover:border-white transition-colors duration-150 bg-[#2d2a32] h-full">
                    <CardContent className="p-3 sm:p-4 md:p-6 h-full flex flex-col">
                      <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 flex-grow">
                        <motion.div 
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#3a3640] rounded-full flex items-center justify-center flex-shrink-0"
                          whileHover={{ rotate: 180, scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                        </motion.div>
                        <div className="flex-grow">
                          <h3 className="text-sm sm:text-base md:text-lg font-black text-white tracking-wide md:tracking-wider uppercase" 
                              style={{ fontFamily: 'var(--font-posterama)' }}>
                            E-Mail
                          </h3>
                          <p className="text-white text-sm sm:text-base tracking-wide uppercase" 
                             style={{ fontFamily: 'var(--font-posterama)' }}>
                            <a href="mailto:info@dersalon-scharavin.de" className="break-words whitespace-normal max-w-full inline-block">
                              info@dersalon-scharavin.de
                            </a>
                          </p>
                          <p className="text-xs sm:text-sm text-white mt-1 sm:mt-2 tracking-wide uppercase" 
                             style={{ fontFamily: 'var(--font-posterama)' }}>
                            Wir antworten innerhalb von 24 Stunden
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Social Media */}
              <motion.div 
                variants={fadeInUp}
              >
                <Card className="border border-[#3a3640] hover:border-white transition-colors duration-150 bg-[#2d2a32]">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-black text-white mb-2 sm:mb-3 md:mb-4 tracking-wide md:tracking-wider uppercase" 
                        style={{ fontFamily: 'var(--font-posterama)' }}>
                      Folgen Sie uns
                    </h3>
                    <motion.div 
                      className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4"
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      {[
                        { 
                          icon: Instagram, 
                          label: "@DerSalonBadLaasphe",
                          href: instagramUrl
                        },
                        { 
                          icon: Facebook, 
                          label: "Der Salon Bad Laasphe",
                          href: instagramUrl
                        },
                        { 
                          icon: MessageCircle, 
                          label: "WhatsApp",
                          href: "#"
                        },
                      ].map((social, index) => (
                        <motion.div 
                          key={index}
                          variants={fadeInUp}
                          className="flex-1 min-w-0"
                        >
                          <Button
                            className="bg-[#3a3640] hover:bg-white hover:text-[#201d24] text-white font-black border border-white transition-colors duration-150 w-full text-xs sm:text-sm tracking-wide uppercase" 
                            style={{ fontFamily: 'var(--font-posterama)' }}
                            onClick={() => window.open(social.href, '_blank')}
                          >
                            <social.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 text-white flex-shrink-0" />
                            <span className="truncate text-xs sm:text-sm">{social.label}</span>
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
              className="space-y-4 sm:space-y-6 md:space-y-8 flex flex-col items-center justify-center"
              variants={slideInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-10px" }}
            >
              <div className="w-full">
                <div className="border border-[#3a3640] overflow-hidden bg-[#2d2a32] rounded-lg">
                  <div className="aspect-square sm:aspect-video lg:aspect-square relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.123456789!2d8.2234567!3d50.9234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc123456789abc%3A0x123456789abcdef0!2sK%C3%B6nigstra%C3%9Fe%2034%2C%2057334%20Bad%20Laasphe%2C%20Germany!5e0!3m2!1sen!2sde!4v1234567890123!5m2!1sen!2sde&q=Königstraße+34,+57334+Bad+Laasphe,+Germany&center=50.9234567,8.2234567&zoom=15"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                      title="Der Salon Standort Bad Laasphe"
                    />
                    
                    {/* Floating info card over the map */}
                    <motion.div 
                      className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 bg-[#2d2a32]/95 backdrop-blur-sm rounded-lg p-2 sm:p-3 md:p-4 shadow-lg border border-[#3a3640]"
                      initial={{ opacity: 0, y: -5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
                    >
                      <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-[#3a3640] rounded-full flex items-center justify-center flex-shrink-0">
                          <Scissors className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm sm:text-base md:text-lg font-black text-white truncate tracking-wide md:tracking-wider uppercase" 
                              style={{ fontFamily: 'var(--font-posterama)' }}>
                            Der Salon Bad Laasphe
                          </h3>
                          <p className="text-xs sm:text-sm text-white truncate tracking-wide uppercase" 
                             style={{ fontFamily: 'var(--font-posterama)' }}>
                            Königstraße 34, 57334 Bad Laasphe
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <Button 
                            size="sm"
                            className="bg-[#3a3640] hover:bg-white hover:text-[#201d24] text-white font-black border border-white text-xs sm:text-sm tracking-wide uppercase" 
                            style={{ fontFamily: 'var(--font-posterama)' }}
                            onClick={() => window.open('https://maps.google.com/directions/?api=1&destination=Königstraße+34,+57334+Bad+Laasphe,+Germany', '_blank')}
                          >
                            Anfahrt
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Additional location info */}
              <motion.div 
                className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 w-full"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInUp}>
                  <Card className="border border-[#3a3640] hover:border-white transition-colors duration-150 p-2 sm:p-3 md:p-4 bg-[#2d2a32]">
                    <div className="text-center">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-[#3a3640] rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                        <Car className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <p className="text-xs sm:text-sm font-black text-white tracking-wide uppercase" 
                         style={{ fontFamily: 'var(--font-posterama)' }}>
                        Kostenlose
                      </p>
                      <p className="text-xs text-white tracking-wide uppercase" 
                         style={{ fontFamily: 'var(--font-posterama)' }}>
                        Parkplätze
                      </p>
                    </div>
                  </Card>
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <Card className="border border-[#3a3640] hover:border-white transition-colors duration-150 p-2 sm:p-3 md:p-4 bg-[#2d2a32]">
                    <div className="text-center">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-[#3a3640] rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                        <Bus className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <p className="text-xs sm:text-sm font-black text-white tracking-wide uppercase" 
                         style={{ fontFamily: 'var(--font-posterama)' }}>
                        Bushaltestelle
                      </p>
                      <p className="text-xs text-white tracking-wide uppercase" 
                         style={{ fontFamily: 'var(--font-posterama)' }}>
                        in der Nähe
                      </p>
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
        className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-20px" }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-4 sm:mb-6 md:mb-8"
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2 sm:mb-3 md:mb-4 px-2 sm:px-0 tracking-wider md:tracking-widest uppercase" 
                style={{ fontFamily: 'var(--font-posterama)' }}>
              Termin anfragen
            </h2>
          </motion.div>

          <motion.div
            variants={slideInLeft}
          >
            <Card className="border border-[#3a3640] bg-[#2d2a32]">
              <CardHeader className="bg-[#3a3640]/30 p-3 sm:p-4 md:p-6">
                <CardTitle className="text-lg sm:text-xl md:text-2xl text-white tracking-wide md:tracking-wider uppercase" 
                           style={{ fontFamily: 'var(--font-posterama)' }}>
                  Anfrage stellen
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 md:p-6">
                {/* Success Message */}
                {formState.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-2 sm:mb-3 md:mb-4 p-2 sm:p-3 bg-green-900/20 border border-green-700 rounded-lg flex items-center"
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 flex-shrink-0" />
                    <span className="text-green-300 text-sm sm:text-base tracking-wide uppercase" 
                          style={{ fontFamily: 'var(--font-posterama)' }}>
                      Anfrage erfolgreich gesendet! Wir melden uns bald bei Ihnen.
                    </span>
                  </motion.div>
                )}

                {/* Error Message */}
                {formState.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-2 sm:mb-3 md:mb-4 p-2 sm:p-3 bg-red-900/20 border border-red-700 rounded-lg flex items-center"
                  >
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mr-2 flex-shrink-0" />
                    <span className="text-red-300 text-sm sm:text-base tracking-wide uppercase" 
                          style={{ fontFamily: 'var(--font-posterama)' }}>
                      Fehler: {formState.error}
                    </span>
                  </motion.div>
                )}

                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-3 sm:space-y-4"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {/* Hidden address field for backend */}
                  <input type="hidden" name="address" value="dersalon" />
                  
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
                    variants={staggerContainer}
                  >
                    <motion.div variants={fadeInUp}>
                      <label htmlFor="name" className="block text-sm font-black text-white mb-1 sm:mb-2 tracking-wide uppercase" 
                             style={{ fontFamily: 'var(--font-posterama)' }}>
                        Ihr Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-[#3a3640] focus:border-white bg-[#201d24] text-white text-sm sm:text-base placeholder:text-white tracking-wide uppercase" 
                        style={{ fontFamily: 'var(--font-posterama)' }}
                        placeholder="Geben Sie Ihren vollständigen Namen ein"
                        disabled={formState.loading}
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <label htmlFor="email" className="block text-sm font-black text-white mb-1 sm:mb-2 tracking-wide uppercase" 
                             style={{ fontFamily: 'var(--font-posterama)' }}>
                        E-Mail-Adresse *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-[#3a3640] focus:border-white bg-[#201d24] text-white text-sm sm:text-base placeholder:text-white tracking-wide uppercase" 
                        style={{ fontFamily: 'var(--font-posterama)' }}
                        placeholder="ihre.email@beispiel.com"
                        disabled={formState.loading}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
                    variants={staggerContainer}
                  >
                    <motion.div variants={fadeInUp}>
                      <label htmlFor="phone" className="block text-sm font-black text-white mb-1 sm:mb-2 tracking-wide uppercase" 
                             style={{ fontFamily: 'var(--font-posterama)' }}>
                        Telefonnummer
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-[#3a3640] focus:border-white bg-[#201d24] text-white text-sm sm:text-base placeholder:text-white tracking-wide uppercase" 
                        style={{ fontFamily: 'var(--font-posterama)' }}
                        placeholder="+49 123 456 789"
                        disabled={formState.loading}
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <label htmlFor="service" className="block text-sm font-black text-white mb-1 sm:mb-2 tracking-wide uppercase" 
                             style={{ fontFamily: 'var(--font-posterama)' }}>
                        Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-2 sm:px-3 py-2 border border-[#3a3640] rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white bg-[#201d24] text-white text-sm sm:text-base placeholder:text-white tracking-wide uppercase" 
                        style={{ fontFamily: 'var(--font-posterama)' }}
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

                  <motion.div variants={fadeInUp}>
                    <label htmlFor="message" className="block text-sm font-black text-white mb-1 sm:mb-2 tracking-wide uppercase" 
                           style={{ fontFamily: 'var(--font-posterama)' }}>
                      Ihre Anfrage *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-[#3a3640] focus:border-white bg-[#201d24] text-white text-sm sm:text-base placeholder:text-white tracking-wide uppercase" 
                      style={{ fontFamily: 'var(--font-posterama)' }}
                      placeholder="Erzählen Sie uns von Ihren Wünschen, bevorzugten Terminen oder Fragen..."
                      disabled={formState.loading}
                    />
                  </motion.div>

                  <motion.div 
                    className="text-center"
                    variants={fadeInUp}
                  >
                    <div className="flex justify-center">
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-[#3a3640] hover:bg-white hover:text-[#201d24] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 font-black border border-white text-sm sm:text-base w-full sm:w-auto tracking-wide uppercase" 
                        style={{ fontFamily: 'var(--font-posterama)' }}
                        disabled={formState.loading}
                      >
                        {formState.loading ? (
                          <>
                            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin text-white" />
                            Anfrage wird gesendet...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-white" />
                            Termin anfragen
                          </>
                        )}
                      </Button>
                    </div>
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