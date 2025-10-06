"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scissors, Palette, Sparkles, Leaf, Heart, Crown, Zap } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const serviceCategories = [
    {
      title: "Damen-Services",
      icon: Crown,
      color: "from-yellow-600 to-yellow-700",
      image: "/images/pexels-markusspiske-112782.jpg",
      services: [
        {
          name: "Präzisionsschnitt & Styling",
          price: "45-65€",
          description: "Expertenschnitte, angepasst an Ihre Gesichtsform und Ihren Lebensstil",
          image: "/images/pexels-cottonbro-cut.jpg",
        },
        {
          name: "Waschen & Föhnen",
          price: "55-75€",
          description: "Komplettes Styling-Erlebnis mit Premium-Produkten",
          image: "/images/pexels-cottonbro-wash.jpg",
        },
        {
          name: "Festliches Styling",
          price: "35-50€",
          description: "Elegante Hochsteckfrisuren und Event-Frisuren",
          image: "/images/pexels-enginakyurt-curl.jpg",
        },
        {
          name: "Haarverlängerungen",
          price: "80-150€",
          description: "Länge und Volumen mit natürlich aussehenden Extensions",
          image: "/images/pexels-enginakyurt-extension.jpg",
        },
      ],
    },
    {
      title: "Farb-Magie",
      icon: Palette,
      color: "from-yellow-600 to-yellow-700",
      image: "/images/pexels-john-diez-7388749.jpg",
      services: [
        {
          name: "Farb-Verwandlung",
          price: "70-120€",
          description: "Vollständiger Farbwechsel mit professioneller Beratung",
          image: "/images/pexels-cottonbro-cut.jpg",
        },
        {
          name: "Highlights & Lowlights",
          price: "60-100€",
          description: "Dimensionale Farbe für natürlich aussehende Tiefe",
          image: "/images/pexels-cottonbro-wash.jpg",
        },
        {
          name: "Balayage & Ombré",
          price: "80-140€",
          description: "Handgemalte Techniken für nahtlose Farbübergänge",
          image: "/images/pexels-enginakyurt-curl.jpg",
        },
        {
          name: "Farbkorrektur",
          price: "100-200€",
          description: "Expertenkorrektur für vorherige Farbpannen",
          image: "/images/pexels-enginakyurt-extension.jpg",
        },
      ],
    },
    {
      title: "Herren-Styling",
      icon: Scissors,
      color: "from-yellow-600 to-yellow-700",
      image: "/images/pexels-jibarofoto-1453005.jpg",
      services: [
        {
          name: "Klassischer Herrenschnitt",
          price: "25-35€",
          description: "Zeitlose Schnitte mit moderner Präzision",
          image: "/images/pexels-ryank-12304509.jpg",
        },
        {
          name: "Bart trimmen & stylen",
          price: "15-25€",
          description: "Professionelle Bartformung und -pflege",
          image: "/images/pexels-cottonbro-3998427.jpg",
        },
        {
          name: "Heißes Handtuch Rasur",
          price: "30-40€",
          description: "Traditionelles Barbier-Erlebnis",
          image: "/images/pexels-mostafameraji-3037215.jpg",
        },
        {
          name: "Herren Farb-Touch-up",
          price: "40-60€",
          description: "Grauabdeckung und Farbverbesserung",
          image: "/images/pexels-shkrabaanthony-6599038.jpg",
        },
      ],
    },
    {
      title: "Bio-Pflege",
      icon: Leaf,
      color: "from-yellow-600 to-yellow-700",
      image: "/images/pexels-jibarofoto-1453005.jpg",
      services: [
        {
          name: "Tiefenpflege-Behandlung",
          price: "25-40€",
          description: "Intensive Feuchtigkeits und Reparaturtherapie Behandlung",
          image: "/images/pexels-ryank-12304509.jpg",
        },
        {
          name: "Kopfhaut & Behandlung",
          price: "30-45€",
          description: "Entspannende Kopfhauttherapie mit Bio-Ölen",
          image: "/images/pexels-cottonbro-3998427.jpg",
        },
        {
          name: "Keratin-Glättung",
          price: "120-180€",
          description: "Krauses Haar glätten für monatelang glattes Haar",
          image: "/images/pexels-mostafameraji-3037215.jpg",
        },
        {
          name: "Bio-Haarmaske",
          price: "20-35€",
          description: "Natürliche Inhaltsstoffe für gesundes, glänzendes Haar",
          image: "/images/pexels-shkrabaanthony-6599038.jpg",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900">
      {/* Hero Section */}
      <motion.section 
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            className="mb-6 sm:mb-8"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-orbitron-500 text-white px-2 sm:px-0"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Unsere Services
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto font-orbitron-500 px-4 sm:px-0"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Mehr als nur Haare – bei uns geht's um Style, Persönlichkeit und das gewisse Extra.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Intro Section */}
      <motion.section 
        className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-700 to-gray-800"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 font-serif flex items-center">
                <Crown className="w-6 h-6 sm:w-8 sm:h-8 mr-3 text-yellow-400" />
                Cuts für Sie
              </h2>
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-orbitron-400">
                Schnitte, die sitzen. Individuell, modern und so vielseitig wie Sie.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 font-serif flex items-center">
                <Palette className="w-6 h-6 sm:w-8 sm:h-8 mr-3 text-yellow-400" />
                Color & Gloss
              </h2>
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-orbitron-400">
                Von dezenten Highlights bis zu Statement-Looks – wir bringen Farbe in Ihr Leben.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 font-serif flex items-center">
                <Scissors className="w-6 h-6 sm:w-8 sm:h-8 mr-3 text-yellow-400" />
                Men's Styles
              </h2>
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-orbitron-400">
                Präzise, clean und maskulin – Looks, die Eindruck machen.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 font-serif flex items-center">
                <Leaf className="w-6 h-6 sm:w-8 sm:h-8 mr-3 text-yellow-400" />
                Care & Specials
              </h2>
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-orbitron-400">
                Hochwertige Treatments für gesundes, glänzendes Haar, das sich einfach gut anfühlt.
              </p>
            </motion.div>
          </motion.div>

          {/* Team Description */}
          <motion.div 
            className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-yellow-600/20 to-yellow-700/20 rounded-xl sm:rounded-2xl border border-yellow-500/30"
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 font-serif">Unser Team</h2>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4 font-orbitron-400">
              Wir sind kein klassischer Friseursalon – wir sind ein Team mit Leidenschaft für Haare, Trends und Menschen. 
              Jede von uns bringt ihre eigene Handschrift mit, und genau das macht den Unterschied: 
              Kreativität, Professionalität und eine Atmosphäre, die man einfach erleben muss.
            </p>
            <p className="text-yellow-300 text-lg sm:text-xl font-semibold font-orbitron-700">
              👉 Jetzt Termin sichern und erleben, wie cool Perfektion aussehen kann.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="py-16 sm:py-20 px-4 sm:px-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid gap-12 sm:gap-16"
            variants={staggerContainer}
          >
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex} 
                className="space-y-6 sm:space-y-8"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Special styling for first category */}
                {categoryIndex === 0 ? (
                  <motion.div 
                    className="text-center relative"
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl border-2 border-yellow-300"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <category.icon className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-100" />
                    </motion.div>
                    <motion.h2 
                      className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 font-serif bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {category.title}
                    </motion.h2>
                    <motion.p 
                      className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 font-orbitron-500 max-w-2xl mx-auto px-4 sm:px-0"
                      variants={fadeInUp}
                    >
                      Premium Services für anspruchsvolle Damen – individuell und perfekt auf Sie abgestimmt
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.div 
                    className="text-center"
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center shadow-xl border border-yellow-500/30`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <category.icon className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-200" />
                    </motion.div>
                    <motion.h2 
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 font-serif"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {category.title}
                    </motion.h2>
                  </motion.div>
                )}

                {/* Category Hero Image */}
                <motion.div 
                  className={`relative rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8 ${
                    categoryIndex === 0 ? 'h-60 sm:h-80 md:h-96' : 'h-48 sm:h-64 md:h-80'
                  }`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={`${category.title} Salon Bild`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    style={{ objectPosition: '80% 6%' }}
                    priority={categoryIndex < 2}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <motion.div 
                      className="p-4 sm:p-6 lg:p-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <h3 className={`${categoryIndex === 0 ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl md:text-3xl'} font-bold text-white font-serif`}>
                        {category.title}
                      </h3>
                      <p className="text-white/90 text-sm sm:text-base lg:text-lg font-orbitron-400">
                        Professionelle Services in entspannter Atmosphäre
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {category.services.map((service, serviceIndex) => (
                    <motion.div 
                      key={serviceIndex} 
                      variants={fadeInUp}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                    >
                      <Card className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border-2 overflow-hidden bg-gray-800 h-full flex flex-col ${
                        categoryIndex === 0 
                          ? 'border-yellow-400 hover:border-yellow-300 shadow-lg' 
                          : 'border-yellow-500/30 hover:border-yellow-400'
                      }`}>
                        <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                          />
                          <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                            <Badge className={`bg-gradient-to-r ${category.color} text-white transition-transform duration-200 hover:scale-105 border ${
                              categoryIndex === 0 ? 'border-yellow-300' : 'border-yellow-400'
                            } font-orbitron-700 text-xs sm:text-sm`}>
                              {service.price}
                            </Badge>
                          </div>
                        </div>
                        <CardHeader className="pb-2 sm:pb-3 flex-shrink-0 px-4 sm:px-6">
                          <CardTitle className="text-base sm:text-lg font-bold text-white font-serif">
                            {service.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow px-4 sm:px-6 pb-4 sm:pb-6">
                          <p className="text-gray-300 text-xs sm:text-sm font-orbitron-400">
                            {service.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Special Packages */}
      <motion.section 
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-700 to-gray-800"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl border-2 border-yellow-300"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-100" />
            </motion.div>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 font-serif bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Premium-Pakete
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 font-orbitron-500 max-w-2xl mx-auto px-4 sm:px-0"
              variants={fadeInUp}
            >
              Komplette Verwandlungen zu Sonderpreisen – alles inklusive für den perfekten Look
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                name: "Das Premium Makeover",
                price: "120€",
                original: "150€",
                description: "Komplettes Premium-Paket für Ihre perfekte Verwandlung",
                includes: ["Schnitt & Style", "Vollfarbe", "Tiefenbehandlung", "Styling"],
                popular: false,
                image: "/images/done.png",
              },
              {
                name: "Komplett-Auffrischung",
                price: "80€",
                original: "95€",
                description: "Frische und Glanz für Ihren Look",
                includes: ["Schnitt & Style", "Highlights", "Föhnen", "Haarmaske"],
                popular: false,
                image: "/images/pexels-cottonbro-7440066.jpg",
              },
              {
                name: "Urban Gentleman",
                price: "55€",
                original: "70€",
                description: "Modernes Styling für den zeitgenössischen Mann",
                includes: ["Herrenschnitt", "Bart trimmen", "Heißes Handtuch", "Styling"],
                popular: false,
                image: "/images/man_service.png",
              },
            ].map((pkg, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex">
                <Card className={`group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border-2 overflow-hidden bg-gray-800 flex flex-col h-full w-full ${
                  pkg.popular 
                    ? 'border-yellow-400 hover:border-yellow-300 shadow-lg' 
                    : 'border-yellow-500/30 hover:border-yellow-400'
                }`}>
                  <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
                    <Image
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <Badge className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white transition-transform duration-200 hover:scale-105 border border-yellow-400 font-orbitron-700 text-xs sm:text-sm">
                        {pkg.price}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <CardHeader className="pb-2 sm:pb-3 flex-shrink-0 px-4 sm:px-6">
                    <CardTitle className="text-base sm:text-lg font-bold text-white font-serif">
                      {pkg.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 font-orbitron-400">
                      {pkg.description}
                    </p>
                    <motion.ul 
                      className="space-y-1 sm:space-y-2 mb-4 sm:mb-6"
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      {pkg.includes.map((item, itemIndex) => (
                        <motion.li 
                          key={itemIndex} 
                          className="flex items-center"
                          variants={fadeInUp}
                          transition={{ delay: itemIndex * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300 text-xs sm:text-sm font-orbitron-400">{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="text-xl sm:text-2xl font-bold text-yellow-400 font-orbitron-700">
                        {pkg.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through font-orbitron-500">
                        {pkg.original}
                      </span>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className={`w-full text-xs sm:text-sm ${
                          pkg.popular 
                            ? "bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white border border-yellow-400" 
                            : "bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 border border-yellow-500/30"
                        } font-orbitron-600 py-2 sm:py-3`}
                      >
                        Paket buchen
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-serif text-white"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            Bereit für Ihre Verwandlung?
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-100 mb-6 sm:mb-8 font-orbitron-500 px-4 sm:px-0"
            variants={fadeInUp}
          >
            Erleben Sie, wie cool Perfektion aussehen kann
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 font-semibold px-6 sm:px-8 border border-yellow-500/30 font-orbitron-600 text-sm sm:text-base w-full sm:w-auto"
              >
                <Scissors className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-400" />
                Termin vereinbaren
              </Button>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-6 sm:px-8 bg-transparent font-orbitron-600 text-sm sm:text-base w-full sm:w-auto"
              >
                Jetzt anrufen
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}