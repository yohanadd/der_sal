"use client";

import { HeroSection } from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Scissors,
  Instagram,
  MapPin,
  Clock,
  Phone,
  Star,
  Heart,
  Sparkles,
  Award,
  Users,
  Palette,
  Shield,
  Gem,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import stylist1 from "@/public/images/member1.2.jpg";
import stylist2 from "@/public/images/member2.jpg";
import stylist3 from "@/public/images/member2.jpg";
import { motion } from "framer-motion";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Footer } from "@/components/footer";
import { useState, useRef } from "react";

export default function HomePage() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const newPosition = Math.max(0, scrollPosition - 400);
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
      const newPosition = Math.min(maxScroll, scrollPosition + 400);
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  const teamMembers = [
    {
      name: "Ines Scharavin",
      role: "Friseurmeisterin · Coloristin · Blondexpertin",
      specialties: ["Balayage", "moderne Farbtechniken", "Herrenstylings"],
      bio: "Spezialisiert auf Balayage, moderne Farbtechniken und Herrenstylings. Mit Leidenschaft für präzises Handwerk und individuelle Looks.",
      image: stylist1,
      rating: 5.0,
      reviews: 156,
    },
    {
      name: "Sandra Krause",
      role: "Spezialistin für Damenkurzhaar & Dauerwelle",
      specialties: ["Damenkurzhaar", "Dauerwelle", "klassische Damenschnitte"],
      bio: "Expertin für klassische Damenschnitte und typgerechte Stylings. Ihre Stärke: Präzision, Erfahrung und ein feines Gespür für Details.",
      image: stylist2,
      rating: 5,
      reviews: 127,
    },
  ];

  const galleryImages = [
    "images/pexels-cottonbro-3993469.jpg",
    "/images/pexels-cottonbro-3998427.jpg",
    "/images/pexels-cottonbro-7440131.jpg",
    "/images/pexels-cottonbro-wash.jpg",
    "/images/pexels-enginakyurt-3065209 (1).jpg",
    "/images/pexels-ryank-12304509.jpg",
    "/images/pexels-enginakyurt-extension.jpg",
    "/images/pexels-markusspiske-112782.jpg",
    "images/pexels-cottonbro-3993469.jpg",
    "/images/pexels-cottonbro-3998427.jpg",
    "/images/pexels-cottonbro-7440131.jpg",
    "/images/pexels-cottonbro-wash.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-900 font-orbitron">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Preview */}
      <motion.section
        className="py-20 px-4 bg-gray-900"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto tracking-wide">
              Professional hair services in an atmosphere of refined elegance
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                title: "Women's Cuts",
                icon: Scissors,
                desc: "Precision cutting techniques for modern women",
              },
              {
                title: "Color Services",
                icon: Palette,
                desc: "Expert coloring from natural tones to fashion shades",
              },
              {
                title: "Men's Grooming",
                icon: Shield,
                desc: "Classic and contemporary barbering services",
              },
              {
                title: "Hair Treatments",
                icon: Gem,
                desc: "Luxury treatments for healthy, beautiful hair",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 bg-gray-800/50 backdrop-blur-sm h-full flex flex-col">
                  <CardContent className="p-6 text-center flex flex-col flex-grow">
                    <motion.div
                      className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon className="w-12 h-12 text-yellow-400 mx-auto" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 tracking-wide flex-grow">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Preview */}
      <motion.section
        className="py-20 px-4 bg-gray-800"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
               Unser Team
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Erfahrene Profis mit Leidenschaft für Haar-Exzellenz
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-700/50 rounded-2xl p-8 mb-16 text-center border border-gray-600 shadow-2xl"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
              Warum Unser Salon?
            </h3>
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {[
                { icon: Heart, text: "Handwerkliche Perfektion" },
                { icon: Star, text: "Ausgezeichnetes Team" },
                { icon: Users, text: "Persönliche Beratung" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center space-x-3"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className="w-6 h-6 text-yellow-400" />
                  <span className="text-gray-300 tracking-wide">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex">
                <Card className="group hover:shadow-xl transition-all duration-300 bg-gray-700/30 border border-gray-600 backdrop-blur-sm flex flex-col w-full">
                  <CardContent className="p-6 text-center flex flex-col flex-grow">
                    {/* Increased image size with gold border */}
                    <motion.div
                      className="relative mb-4 flex justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-yellow-400 shadow-lg">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={160}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                    
                    {/* Decreased text size for name */}
                    <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                      {member.name}
                    </h3>
                    
                    {/* Updated badge styling with gold accent */}
                    <Badge className="bg-gray-600 text-gray-200 mb-3 font-semibold border border-gray-500 tracking-wide text-xs">
                      {member.role}
                    </Badge>
                    
                    {/* Decreased text size for bio */}
                    <p className="text-gray-400 text-xs mb-3 tracking-wide flex-grow">
                      {member.bio}
                    </p>
                    
                    {/* Decreased text size for specialties */}
                    <p className="text-gray-500 text-xs mb-3 tracking-wide">
                      {member.specialties.join(" • ")}
                    </p>
                    
                    {/* Gold star rating */}
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(member.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                      <span className="text-gray-500 text-xs ml-1 tracking-wide">
                        ({member.reviews})
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Description */}
          <motion.div
            className="mt-12 max-w-3xl mx-auto text-center"
            variants={fadeInUp}
          >
            <p className="text-gray-300 text-sm tracking-wide">
              👉 Gemeinsam stehen wir für Professionalität, Kreativität und
              persönliche Beratung – damit jeder Besuch bei uns ein Erlebnis
              wird.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Preview - Updated with Side Controls */}
      <motion.section
        className="py-20 px-4 bg-gray-900"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Our Work
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Excellence in hair styling and transformation
            </p>
          </motion.div>

          {/* Horizontal Scroll Container with Side Controls */}
          <div className="relative">
            {/* Left Scroll Button */}
            <motion.button
              onClick={scrollLeft}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-4 rounded-full bg-gray-800 border border-yellow-400 text-yellow-400 hover:bg-gray-700 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Scroll Container */}
            <motion.div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 px-4"
              style={{ scrollBehavior: 'smooth' }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {galleryImages.map((imageSrc, index) => (
                <motion.div
                  key={index}
                  className="group flex-shrink-0 relative overflow-hidden rounded-2xl border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ 
                    width: '450px', 
                    height: '560px'
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={imageSrc}
                      alt={`Professional hair work ${index + 1}`}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 450px"
                      priority={index < 2}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white w-full">
                      <p className="font-bold text-xl mb-2 tracking-wide">
                        Style #{index + 1}
                      </p>
                      <p className="text-gray-200 text-sm tracking-wide">
                        Professional hair transformation
                      </p>
                    </div>
                  </div>
                  
                  {/* Gold hover overlay */}
                  <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>

            {/* Right Scroll Button */}
            <motion.button
              onClick={scrollRight}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-4 rounded-full bg-gray-800 border border-yellow-400 text-yellow-400 hover:bg-gray-700 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Gradient fade effects on sides */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Optional: Add button here if needed */}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact & Location */}
      <motion.section
        className="py-20 px-4 bg-gray-800"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
              Ihr Style-Spot in Bad Laasphe
            </h2>
            <p className="text-xl text-gray-300 tracking-wide">
              Hier geht's nicht nur um Haare – hier geht's um Persönlichkeit,
              Ausstrahlung und den Look, der zu dir passt.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  desc: "Königsstraße 34 · 57334 Bad Laasphe",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  desc: "02752 / 22029205",
                },
                {
                  icon: Mail,
                  title: "Email",
                  desc: "info@dersalon-scharavin.de",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500/30"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 tracking-wide">{item.desc}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div className="pt-4" variants={fadeInUp}>
                <p className="text-gray-300 text-lg tracking-wide">
                  Schreiben Sie uns, rufen Sie uns an oder buchen Sie direkt Ihren Termin – wir sind für Sie da
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-gray-700/30 rounded-2xl p-8 border border-gray-600 backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                Buchen Sie Ihren Termin
              </h3>
              <p className="text-gray-300 mb-6 tracking-wide">
                Erleben Sie professionelle Haarpflege in unserem eleganten, modernen Salonambiente.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="w-full bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 font-semibold border border-yellow-500/30 tracking-wide"
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    <Scissors className="w-5 h-5 mr-2 text-yellow-400" />
                  </motion.div>
                  Termin buchen
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}