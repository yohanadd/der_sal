"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"

export function ScrollToTop() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-yellow-400/30 hover:border-yellow-400"
          aria-label="Nach oben scrollen"
        >
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
