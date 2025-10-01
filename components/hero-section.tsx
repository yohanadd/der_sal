"use client"

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/homepage (2).jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center text-white"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="mb-8" variants={fadeInUp}>
            <motion.h1 
              className="font-ontario text-4xl md:text-6xl font-bold leading-tight mb-6"
              variants={fadeInUp}
            >
              Professionelle Haarpflege &{" "}
              <span className="text-white">
                Style-Expertise
              </span>
              <br />
              in Bad Laasphe
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-ontario"
              variants={fadeInUp}
            >
       
            </motion.p>
          </motion.div>

          {/* <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 font-semibold text-base px-8 py-4 shadow-lg transition-all duration-300 group border border-yellow-500/30 font-ontario"
              >
                <Calendar className="w-5 h-5 mr-2 text-yellow-400" />
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
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-base px-8 py-4 transition-all duration-300 font-ontario"
              >
                Unsere Arbeiten
              </Button>
            </motion.div>
          </motion.div> */}

          {/* Statistics Section with pt-10 */}
          <motion.div 
            className="pt-16 flex items-center justify-center space-x-8 text-gray-300 font-ontario"
            variants={fadeInUp}
          >
            {[
              { number: "500+", text: "Zufriedene Kunden" },
              { number: "5★", text: "Google Bewertungen" },
              { number: "8+", text: "Jahre Erfahrung" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-center mb-2">
                  <p className="text-2xl font-bold text-white">
                    {stat.number}
                  </p>
                </div>
                <p className="text-sm text-gray-300">{stat.text}</p>
                {index < 2 && (
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4">
                    <div className="w-px h-12 bg-gray-400/30"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ 
              y: [0, 15, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;