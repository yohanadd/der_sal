"use client"

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import homepageImage from "@/public/images/homepageC.jpg";

export function HeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat sm:bg-fixed"
        style={{
          backgroundImage: `url(${homepageImage.src})`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20 relative w-full">
        <motion.div 
          className="max-w-4xl mx-auto text-center text-white"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="mb-8 sm:mb-12" variants={fadeInUp}>
            <motion.h1 
              className="font-ontario text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 px-2 sm:px-0"
              variants={fadeInUp}
            >
              Professionelle Haarpflege &{" "}
              <span className="text-white block sm:inline">
                Style-Expertise
              </span>
              <br />
              in Bad Laasphe
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-ontario px-4 sm:px-0"
              variants={fadeInUp}
            >
              Ihr Salon für außergewöhnliche Frisuren und persönliche Beratung
            </motion.p>
          </motion.div>

          {/* Buttons Section - Commented out as per original
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16"
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 shadow-lg transition-all duration-300 group border border-yellow-500/30 font-ontario w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-400" />
                Termin Buchen
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 font-ontario w-full sm:w-auto"
              >
                Unsere Arbeiten
              </Button>
            </motion.div>
          </motion.div>
          */}

          {/* Statistics Section */}
          <motion.div 
            className="pt-8 sm:pt-12 md:pt-16 flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-4 md:space-x-8 lg:space-x-12 text-gray-300 font-ontario"
            variants={fadeInUp}
          >
            {[
              { number: "500+", text: "Zufriedene Kunden" },
              { number: "5★", text: "Google Bewertungen" },
              { number: "8+", text: "Jahre Erfahrung" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center relative flex-1 min-w-[120px] sm:min-w-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col sm:flex-row items-center justify-center mb-2 space-y-1 sm:space-y-0">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {stat.number}
                  </p>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 px-2">{stat.text}</p>
                
                {/* Vertical dividers - only show on larger screens and not for last item */}
                {index < 2 && (
                  <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 -mr-2 md:-mr-4">
                    <div className="w-px h-8 md:h-12 bg-gray-400/30"></div>
                  </div>
                )}
                
                {/* Horizontal dividers for mobile */}
                {index < 2 && (
                  <div className="sm:hidden absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gray-400/30"></div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info for Mobile */}
          <motion.div 
            className="mt-8 sm:mt-12 md:hidden"
            variants={fadeInUp}
          >
            <p className="text-sm text-gray-300 font-ontario max-w-xs mx-auto">
              Scrollen Sie nach unten, um mehr über unsere Services zu erfahren
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on mobile, shown on larger screens */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2"
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Mobile scroll indicator */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 sm:hidden"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-1">
          <motion.div 
            className="w-4 h-4 border-l-2 border-b-2 border-white/50 transform -rotate-45"
            animate={{ 
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div 
            className="w-4 h-4 border-l-2 border-b-2 border-white/50 transform -rotate-45"
            animate={{ 
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
          />
          <motion.div 
            className="w-4 h-4 border-l-2 border-b-2 border-white/50 transform -rotate-45"
            animate={{ 
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;