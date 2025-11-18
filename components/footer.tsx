"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  // Get current year dynamically
  const currentYear = new Date().getFullYear()

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
      className="bg-[#201d24] text-white py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 border-t border-[#3a3640] font-posterama"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          variants={staggerContainer}
        >
          {/* Contact Information */}
      <motion.div 
  className="text-left col-span-1 xs:col-span-2 lg:col-span-1"
  variants={fadeInUp}
>
  <h3
    className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8 tracking-wider uppercase"
    style={{ fontFamily: 'var(--font-posterama)' }}
  >
    Kontakt
  </h3>

  <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">

    {/* Address */}
    <div className="flex items-start justify-start space-x-2 sm:space-x-3 md:space-x-4">
      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] flex-shrink-0 mt-0.5">
        <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
      </div>
      <span
        className="text-white text-sm sm:text-base md:text-lg font-black tracking-wider uppercase break-words text-left"
        style={{ fontFamily: 'var(--font-posterama)' }}
      >
        Königsstraße 34 · 57334 Bad Laasphe
      </span>
    </div>

    {/* Phone */}
    <div className="flex items-start justify-start space-x-2 sm:space-x-3 md:space-x-4">
      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] flex-shrink-0 mt-0.5">
        <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
      </div>

      <span
        className="text-white text-sm sm:text-base md:text-lg font-black tracking-wider uppercase break-words text-left"
        style={{ fontFamily: 'var(--font-posterama)' }}
      >
        02752 / 2029205
      </span>
    </div>

    {/* Email */}
    <div className="flex items-start justify-start space-x-2 sm:space-x-3 md:space-x-4">
      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#2d2a32] rounded-full flex items-center justify-center border border-[#3a3640] flex-shrink-0 mt-0.5">
        <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
      </div>

      <span
        className="text-white text-sm sm:text-base md:text-lg font-black tracking-wider uppercase break-words whitespace-normal max-w-full text-left"
        style={{ fontFamily: 'var(--font-posterama)' }}
      >
        info@dersalon-scharavin.de
      </span>
    </div>

  </div>
</motion.div>


          {/* Social Media */}
          <motion.div 
            className="text-center xs:text-center lg:text-center"
            variants={fadeInUp}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8 tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)' }}>Folgen Sie uns</h3>
            <div className="flex justify-center space-x-4 sm:space-x-5 md:space-x-6 lg:space-x-8">
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
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#2d2a32] rounded-full flex items-center justify-center hover:bg-[#3a3640] transition-colors cursor-pointer border border-[#3a3640] flex-shrink-0"
                  variants={fadeInUp}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 360,
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  aria-label={`Visit our ${social.name} page`}
                >
                  <social.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                </motion.a>
              ))}
            </div>
            
            {/* Additional social media text for mobile */}
            <motion.p 
              className="text-white text-xs sm:text-sm md:text-base font-black mt-4 sm:mt-5 md:mt-6 lg:mt-8 lg:hidden tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)' }}
              variants={fadeInUp}
            >
              Bleiben Sie auf dem Laufenden mit unseren neuesten Styles
            </motion.p>
          </motion.div>

          {/* Hours */}
          <motion.div 
            className="text-center xs:text-right lg:text-right col-span-1 xs:col-span-2 lg:col-span-1"
            variants={fadeInUp}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8 tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)' }}>Öffnungszeiten</h3>
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-white max-w-xs mx-auto xs:max-w-none xs:ml-auto">
              <div className="flex justify-between xs:justify-end items-center">
                <span className="text-sm sm:text-base md:text-lg font-black xs:mr-4 md:mr-6 text-right tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)' }}>Di - Fr:</span>
                <span className="text-sm sm:text-base md:text-lg font-black tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)' }}>9:00 - 18:00</span>
              </div>
              <div className="flex justify-between xs:justify-end items-center">
                <span className="text-sm sm:text-base md:text-lg font-black xs:mr-4 md:mr-6 text-right tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)' }}>Samstag:</span>
                <span className="text-sm sm:text-base md:text-lg font-black tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)' }}>9:00 - 14:00</span>
              </div>
              <div className="flex justify-between xs:justify-end items-center">
                <span className="text-sm sm:text-base md:text-lg font-black xs:mr-4 md:mr-6 text-right tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)' }}>Montag:</span>
                <span className="text-sm sm:text-base md:text-lg font-black tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)' }}>Geschlossen</span>
              </div>
            </div>
            
            {/* Mobile note */}
            <motion.p 
              className="text-white text-xs sm:text-sm md:text-base font-black mt-3 sm:mt-4 md:mt-5 lg:mt-6 lg:hidden tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)' }}
              variants={fadeInUp}
            >
              Termine nach Vereinbarung
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="border-t border-[#3a3640] pt-6 sm:pt-7 md:pt-8 lg:pt-10"
          variants={fadeInUp}
        />

        {/* Bottom Section */}
        <motion.div 
          className="text-center pt-6 sm:pt-7 md:pt-8 lg:pt-10"
          variants={fadeInUp}
        >
          <motion.p 
            className="text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-lg sm:text-xl md:text-2xl font-black tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Bleiben Sie wild. Bleiben Sie schön. Der Salon.
          </motion.p>
          
          <motion.p 
            className="text-white text-sm sm:text-base md:text-lg font-black mb-4 sm:mb-5 md:mb-6 lg:mb-8 tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            © {currentYear} Der Salon. Alle Rechte vorbehalten.
          </motion.p>
          
          {/* Additional Info - Now in a single row */}
          <motion.div 
            className="flex flex-row justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 text-sm sm:text-base md:text-lg font-black mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.a 
              href="#" 
              className="text-white transition-colors cursor-pointer tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)' }}
              whileHover={{ scale: 1.05 }}
            >
              Datenschutz
            </motion.a>
            <motion.a 
              href="#" 
              className="text-white transition-colors cursor-pointer tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)' }}
              whileHover={{ scale: 1.05 }}
            >
              Impressum
            </motion.a>
            <motion.a 
              href="#" 
              className="text-white transition-colors cursor-pointer tracking-wider uppercase" style={{ fontFamily: 'var(--font-posterama)' }}
              whileHover={{ scale: 1.05 }}
            >
              AGB
            </motion.a>
          </motion.div>

          {/* Mobile Quick Contact */}
          <motion.div 
            className="mt-6 sm:mt-7 md:mt-8 lg:hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex flex-col xs:flex-row justify-center items-center space-y-3 xs:space-y-0 xs:space-x-4 sm:xs:space-x-6">
              <motion.a
                href="tel:027522029205"
                className="flex items-center space-x-2 text-white text-sm sm:text-base font-black hover:text-gray-300 transition-colors bg-[#2d2a32] px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg border border-[#3a3640] tracking-wider uppercase w-full xs:w-auto justify-center" style={{ fontFamily: 'var(--font-posterama)' }}
                whileHover={{ scale: 1.05, backgroundColor: "#3a3640" }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
                <span>Anrufen</span>
              </motion.a>
              <motion.a
                href="mailto:info@dersalon-scharavin.de"
                className="flex items-center space-x-2 text-white text-sm sm:text-base font-black hover:text-gray-300 transition-colors bg-[#2d2a32] px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg border border-[#3a3640] tracking-wider uppercase w-full xs:w-auto justify-center" style={{ fontFamily: 'var(--font-posterama)' }}
                whileHover={{ scale: 1.05, backgroundColor: "#3a3640" }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
                <span>E-Mail</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile bottom gradient */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2d2a32] via-[#3a3640] to-[#2d2a32] lg:hidden" />
    </motion.footer>
  )
}