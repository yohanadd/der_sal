"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook } from "lucide-react"

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
      className="bg-emerald-950 text-white py-12 px-4"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div 
          className="flex justify-center space-x-6 mb-8"
          variants={staggerContainer}
        >
          {[
            { name: "instagram", icon: Instagram, href: "#" },
            { name: "facebook", icon: Facebook, href: "#" },
            // { name: "tiktok", icon: Music, href: "#" }
          ].map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors cursor-pointer"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              aria-label={`Visit our ${social.name} page`}
            >
              <social.icon className="w-6 h-6 text-emerald-900" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="border-t border-emerald-800 pt-8"
          variants={fadeInUp}
        >
          <motion.p 
            className="text-emerald-300 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            🌱 Bleiben Sie wild. Bleiben Sie schön. Der Salon.
          </motion.p>
          <motion.p 
            className="text-emerald-400 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            © 2024 Der Salon. Alle Rechte vorbehalten.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
