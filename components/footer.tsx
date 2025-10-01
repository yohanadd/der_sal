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
      className="bg-gray-900 text-white py-16 px-4 border-t border-yellow-500/30"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-8"
          variants={staggerContainer}
        >
          {/* Contact Information */}
          <motion.div 
            className="text-center md:text-left"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-4 font-serif">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">Königsstraße 34 · 57334 Bad Laasphe</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300 font-orbitron-500">02752 / 22029205</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">info@dersalon-scharavin.de</span>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div 
            className="text-center"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-4 font-serif">Folgen Sie uns</h3>
            <div className="flex justify-center space-x-6">
              {[
                { name: "instagram", icon: Instagram, target:"_blank", href: "https://www.instagram.com/dersalon_inesscharavin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" },
                { name: "facebook", icon: Facebook, target:"_blank", href: "https://www.instagram.com/dersalon_inesscharavin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.target} 
                  className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center hover:bg-yellow-500/20 transition-colors cursor-pointer border border-yellow-500/30"
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
                  <social.icon className="w-6 h-6 text-yellow-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div 
            className="text-center md:text-right"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-4 font-serif">Öffnungszeiten</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between md:justify-end">
                <span className="md:mr-4">Di - Fr:</span>
                <span className="font-orbitron-500">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between md:justify-end">
                <span className="md:mr-4">Samstag:</span>
                <span className="font-orbitron-500">9:00 - 14:00</span>
              </div>
              <div className="flex justify-between md:justify-end">
                <span className="md:mr-4">Montag:</span>
                <span className="font-orbitron-500">Geschlossen</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-yellow-500/30 pt-8 text-center"
          variants={fadeInUp}
        >
          <motion.p 
            className="text-yellow-300 mb-2 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Bleiben Sie wild. Bleiben Sie schön. Der Salon.
          </motion.p>
          <motion.p 
            className="text-gray-400 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            © 2024 Der Salon. Alle Rechte vorbehalten.
          </motion.p>
          
          {/* Additional Info */}
          <motion.div 
            className="mt-4 flex justify-center space-x-6 text-xs text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <span>Datenschutz</span>
            <span>Impressum</span>
            <span>AGB</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}