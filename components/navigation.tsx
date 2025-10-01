"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Scissors, X } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: "/", label: "Startseite" },
    { href: "/team", label: "Team" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Galerie" },
    { href: "/contact", label: "Kontakt" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-1000 ease-in-out ${
        isScrolled 
          ? "bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-700" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div 
              className={`text-xl font-bold font-orbitron tracking-tight transition-colors duration-800 ease-in-out flex items-center ${
                isScrolled ? "text-white" : "text-white"
              }`}
              whileHover={{ scale: 1.05 }}
            >
             <p className="pr-1">D</p> 
              {/* Custom E with three horizontal lines */}
              <span className="relative inline-block mr-1">
                <span className="block w-3 h-0.5 bg-white mb-1"></span>
                <span className="block w-3 h-0.5 bg-white mb-1"></span>
                <span className="block w-3 h-0.5 bg-white"></span>
              </span>
             <p >R SALON</p> 
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className={`hover:text-gray-300 transition-colors duration-800 ease-in-out font-medium relative group font-orbitron tracking-wide ${
                    isScrolled ? "text-gray-200" : "text-gray-200"
                  }`}
                >
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.label}
                  </motion.span>
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300"
                    whileHover={{ scaleX: 1 }}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 font-semibold border border-yellow-500/30 font-orbitron tracking-wide">
                    Termin buchen
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon" className={`hover:text-gray-300 transition-colors duration-800 ease-in-out ${
                  isScrolled ? "text-white" : "text-white"
                }`}>
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900 border-gray-700">
              <motion.div 
                className="flex flex-col space-y-6 mt-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-200 hover:text-gray-300 transition-colors duration-200 text-lg font-medium block font-orbitron tracking-wide"
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.span
                        whileHover={{ scale: 1.05, x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.label}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 font-semibold mt-4 border border-yellow-500/30 font-orbitron tracking-wide w-full">
                        Termin buchen
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}


  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const navItems = [
  //   { name: "Home", href: "#home" },
  //   { name: "Team", href: "#team" },
  //   { name: "Services", href: "#services" },
  //   { name: "Gallery", href: "#gallery" },
  //   { name: "Booking", href: "#booking" },
  //   { name: "Contact", href: "#contact" },
  // ];

  // return (
  //   <header 
  //     className={`fixed top-0 w-full z-50 transition-all duration-300 ${
  //       isScrolled 
  //         ? "bg-background/95 backdrop-blur-md shadow-elegant" 
  //         : "bg-transparent"
  //     }`}
  //   >
  //     <div className="container mx-auto px-4">
  //       <div className="flex items-center justify-between h-20">
  //         {/* Logo */}
  //         <div className="flex items-center space-x-3">
  //           <div className="relative">
  //             <Scissors className="w-8 h-8 text-jungle-gold scissors-float" />
  //             <img 
  //               src={floatingLeaf.src} 
  //               alt="Leaf decoration" 
  //               className="absolute -top-2 -right-2 w-6 h-6 leaf-sway opacity-70"
  //             />
  //           </div>
  //           <div>
  //             <h1 className="font-heading text-2xl font-bold text-jungle-green">
  //               Jungle Glam Hair
  //             </h1>
  //             <p className="text-xs text-muted-foreground font-body">
  //               Bad Laasphe
  //             </p>
  //           </div>
  //         </div>

  //         {/* Desktop Navigation */}
  //         <nav className="hidden lg:flex items-center space-x-8">
  //           {navItems.map((item) => (
  //             <a
  //               key={item.name}
  //               href={item.href}
  //               className="text-foreground hover:text-jungle-gold transition-smooth font-body font-medium relative group"
  //             >
  //               {item.name}
  //               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-jungle-gold transition-all duration-300 group-hover:w-full"></span>
  //             </a>
  //           ))}
  //         </nav>

  //         {/* CTA Button */}
  //         <Button 
  //           variant="default" 
  //           className="hidden lg:inline-flex gradient-gold text-jungle-black font-semibold shadow-gold hover:scale-105 transition-all duration-300"
  //         >
  //           Book Now
  //         </Button>

  //         {/* Mobile Menu Button */}
  //         <button
  //           className="lg:hidden p-2"
  //           onClick={() => setIsMenuOpen(!isMenuOpen)}
  //         >
  //           {isMenuOpen ? (
  //             <X className="w-6 h-6 text-jungle-green" />
  //           ) : (
  //             <Menu className="w-6 h-6 text-jungle-green" />
  //           )}
  //         </button>
  //       </div>

  //       {/* Mobile Menu */}
  //       {isMenuOpen && (
  //         <div className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-t border-border shadow-elegant">
  //           <nav className="flex flex-col space-y-4 p-6">
  //             {navItems.map((item) => (
  //               <a
  //                 key={item.name}
  //                 href={item.href}
  //                 className="text-foreground hover:text-jungle-gold transition-smooth font-body font-medium"
  //                 onClick={() => setIsMenuOpen(false)}
  //               >
  //                 {item.name}
  //               </a>
  //             ))}
  //             <Button 
  //               variant="default" 
  //               className="gradient-gold text-jungle-black font-semibold shadow-gold mt-4"
  //             >
  //               Book Now
  //             </Button>
  //           </nav>
  //         </div>
  //       )}
  //     </div>
  //   </header>
  // );