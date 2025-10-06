"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.footer 
      className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 border-t border-yellow-500/30"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12"
          variants={staggerContainer}
        >
          {/* Contact Information */}
          <motion.div 
            className="text-center md:text-left"
            variants={fadeInUp}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4 sm:mb-6 font-serif">Kontakt</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">Königsstraße 34 · 57334 Bad Laasphe</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 font-orbitron-500 text-sm sm:text-base">02752 / 22029205</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">info@dersalon-scharavin.de</span>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div 
            className="text-center"
            variants={fadeInUp}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4 sm:mb-6 font-serif">Folgen Sie uns</h3>
            <div className="flex justify-center space-x-4 sm:space-x-6">
              {[
                { 
                  name: "instagram", 
                  icon: Instagram, 
                  target:"_blank", 
                  href: "https://www.instagram.com/dersalon_inesscharavin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" 
                },
                { 
                  name: "facebook", 
                  icon: Facebook, 
                  target:"_blank", 
                  href: "https://www.instagram.com/dersalon_inesscharavin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" 
                },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.target} 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/10 rounded-full flex items-center justify-center hover:bg-yellow-500/20 transition-colors cursor-pointer border border-yellow-500/30 flex-shrink-0"
                  variants={fadeInUp}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: "0 0 20px rgba(234, 179, 8, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  aria-label={`Visit our ${social.name} page`}
                >
                  <social.icon className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400" />
                </motion.a>
              ))}
            </div>
            
            {/* Additional social media text for mobile */}
            <motion.p 
              className="text-gray-400 text-xs sm:text-sm mt-4 sm:mt-6 md:hidden"
              variants={fadeInUp}
            >
              Bleiben Sie auf dem Laufenden mit unseren neuesten Styles
            </motion.p>
          </motion.div>

          {/* Hours */}
          <motion.div 
            className="text-center md:text-right"
            variants={fadeInUp}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4 sm:mb-6 font-serif">Öffnungszeiten</h3>
            <div className="space-y-2 sm:space-y-3 text-gray-300 max-w-xs mx-auto md:max-w-none md:ml-auto">
              <div className="flex justify-between md:justify-end items-center">
                <span className="text-sm sm:text-base md:mr-4 md:text-right">Di - Fr:</span>
                <span className="font-orbitron-500 text-sm sm:text-base">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between md:justify-end items-center">
                <span className="text-sm sm:text-base md:mr-4 md:text-right">Samstag:</span>
                <span className="font-orbitron-500 text-sm sm:text-base">9:00 - 14:00</span>
              </div>
              <div className="flex justify-between md:justify-end items-center">
                <span className="text-sm sm:text-base md:mr-4 md:text-right">Montag:</span>
                <span className="font-orbitron-500 text-sm sm:text-base">Geschlossen</span>
              </div>
            </div>
            
            {/* Mobile note */}
            <motion.p 
              className="text-yellow-400/80 text-xs mt-3 sm:mt-4 md:hidden"
              variants={fadeInUp}
            >
              Termine nach Vereinbarung
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="border-t border-yellow-500/30 pt-6 sm:pt-8"
          variants={fadeInUp}
        />

        {/* Bottom Section */}
        <motion.div 
          className="text-center pt-6 sm:pt-8"
          variants={fadeInUp}
        >
          <motion.p 
            className="text-yellow-300 mb-2 sm:mb-3 text-base sm:text-lg font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Bleiben Sie wild. Bleiben Sie schön. Der Salon.
          </motion.p>
          
          <motion.p 
            className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            © 2024 Der Salon. Alle Rechte vorbehalten.
          </motion.p>
          
          {/* Additional Info */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.a 
              href="#" 
              className="hover:text-yellow-400 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Datenschutz
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-yellow-400 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Impressum
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-yellow-400 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              AGB
            </motion.a>
          </motion.div>

          {/* Mobile Quick Contact */}
          <motion.div 
            className="mt-6 sm:mt-8 md:hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex justify-center space-x-4">
              <motion.a
                href="tel:0275222029205"
                className="flex items-center space-x-2 text-yellow-400 text-sm hover:text-yellow-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                <span>Anrufen</span>
              </motion.a>
              <motion.a
                href="mailto:info@dersalon-scharavin.de"
                className="flex items-center space-x-2 text-yellow-400 text-sm hover:text-yellow-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                <span>E-Mail</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Desktop additional info */}
          <motion.div 
            className="mt-6 hidden md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-gray-500 text-sm">
              Professionelle Haarpflege und Styling in Bad Laasphe seit 2016
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile bottom gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 md:hidden" />
    </motion.footer>
  )
}