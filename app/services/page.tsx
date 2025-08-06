"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scissors, Palette, Sparkles, Leaf, Heart, Crown } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  // Animation variants - optimized for performance
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
      color: "from-pink-500 to-rose-500",
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
          image: "images/pexels-enginakyurt-curl.jpg",
        },
        {
          name: "Haarverlängerungen",
          price: "80-150€",
          description: "Länge und Volumen mit natürlich aussehenden Extensions",
          image: "images/pexels-enginakyurt-extension.jpg",
        },
      ],
    },
    {
      title: "Farb-Magie",
      icon: Palette,
      color: "from-purple-500 to-indigo-500",
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
          image: "images/pexels-enginakyurt-curl.jpg",
        },
        {
          name: "Farbkorrektur",
          price: "100-200€",
          description: "Expertenkorrektur für vorherige Farbpannen",
          image: "images/pexels-enginakyurt-extension.jpg",
        },
      ],
    },
    {
      title: "Herren-Styling",
      icon: Scissors,
      color: "from-blue-500 to-cyan-500",
      image: "/images/pexels-jibarofoto-1453005.jpg",
      services: [
        {
          name: "Klassischer Herrenschnitt",
          price: "25-35€",
          description: "Zeitlose Schnitte mit moderner Präzision",
          image: "images/pexels-ryank-12304509.jpg",
        },
        {
          name: "Bart trimmen & stylen",
          price: "15-25€",
          description: "Professionelle Bartformung und -pflege",
          image: "images/pexels-cottonbro-3998427.jpg",
        },
        {
          name: "Heißes Handtuch Rasur",
          price: "30-40€",
          description: "Traditionelles Barbier-Erlebnis",
          image: "images/pexels-mostafameraji-3037215.jpg",
        },
        {
          name: "Herren Farb-Touch-up",
          price: "40-60€",
          description: "Grauabdeckung und Farbverbesserung",
          image: "images/pexels-shkrabaanthony-6599038.jpg",
        },
      ],
    },
    {
      title: "Bio-Pflege",
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
      image: "/images/pexels-jibarofoto-1453005.jpg",
      services: [
        {
          name: "Tiefenpflege-Behandlung",
          price: "25-40€",
          description: "Intensive Feuchtigkeits und Reparaturtherapie Behandlung",
          image: "images/pexels-ryank-12304509.jpg",
        },
        {
          name: "Kopfhaut & Behandlung",
          price: "30-45€",
          description: "Entspannende Kopfhauttherapie mit Bio-Ölen",
          image: "images/pexels-cottonbro-3998427.jpg",
        },
        {
          name: "Keratin-Glättung",
          price: "120-180€",
          description: "Krauses Haar glätten für monatelang glattes Haar",
          image: "images/pexels-mostafameraji-3037215.jpg",
        },
        {
          name: "Bio-Haarmaske",
          price: "20-35€",
          description: "Natürliche Inhaltsstoffe für gesundes, glänzendes Haar",
          image: "images/pexels-shkrabaanthony-6599038.jpg",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            className="mb-8"
            variants={staggerContainer}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 20 }}
            >
              <Sparkles className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4 font-serif text-yellow-400"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Unsere Dschungel-Services
            </motion.h1>
            <motion.p 
              className="text-xl text-emerald-100 max-w-3xl mx-auto"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Wo urbane Eleganz auf natürliche Schönheit trifft. Jeder Service wird mit Präzision und Sorgfalt
              ausgeführt.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="py-20 px-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid gap-16"
            variants={staggerContainer}
          >
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex} 
                className="space-y-8"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div 
                  className="text-center"
                  variants={fadeInUp}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center shadow-xl`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <category.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <motion.h2 
                    className="text-4xl font-bold text-emerald-900 mb-2 font-serif"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {category.title}
                  </motion.h2>
                </motion.div>

                {/* Category Hero Image */}
                <motion.div 
                  className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={`${category.title} Salon Bild`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    style={{ objectPosition: '80% 6%' }}
                    priority={categoryIndex < 2} // Prioritize first 2 images
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <motion.div 
                      className="p-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <h3 className="text-3xl font-bold text-white font-serif">{category.title}</h3>
                      <p className="text-white/90 text-lg">Professionelle Services in entspannter Atmosphäre</p>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                      <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-emerald-100 hover:border-emerald-300 overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            loading="lazy" // Lazy load service images
                          />
                          <div className="absolute top-4 right-4">
                            <Badge className={`bg-gradient-to-r ${category.color} text-white transition-transform duration-200 hover:scale-105`}>
                              {service.price}
                            </Badge>
                          </div>
                        </div>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg font-bold text-emerald-900 font-serif">{service.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm">{service.description}</p>
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
        className="py-20 px-4 bg-gradient-to-br from-emerald-100 to-emerald-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 font-serif">Dschungel-Pakete</h2>
            <p className="text-xl text-emerald-700">Komplette Verwandlungen zu Sonderpreisen</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                name: "Das Wilde Makeover",
                price: "120€",
                original: "150€",
                includes: ["Schnitt & Style", "Vollfarbe", "Tiefenbehandlung", "Styling"],
                popular: true,
                image: "/images/done.png",
              },
              {
                name: "Dschungel-Auffrischung",
                price: "80€",
                original: "95€",
                includes: ["Schnitt & Style", "Highlights", "Föhnen", "Haarmaske"],
                popular: false,
                image: "/images/pexels-cottonbro-7440066.jpg",
              },
              {
                name: "Urban Gentleman",
                price: "55€",
                original: "70€",
                includes: ["Herrenschnitt", "Bart trimmen", "Heißes Handtuch", "Styling"],
                popular: false,
                image: "/images/man_service.png",
              },
            ].map((pkg, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`relative overflow-hidden ${pkg.popular ? "ring-4 ring-yellow-400 scale-105" : ""} hover:shadow-2xl transition-all duration-300`}
                >
                  {pkg.popular && (
                    <motion.div 
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                      animate={{ 
                        y: [0, -2, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Badge className="bg-yellow-400 text-emerald-900 px-4 py-1 text-sm font-bold">Beliebtestes</Badge>
                    </motion.div>
                  )}
                  <motion.div 
                    className="relative h-48 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </motion.div>
                  <CardContent className="p-8 text-center">
                    <motion.h3 
                      className="text-2xl font-bold text-emerald-900 mb-2 font-serif"
                      whileHover={{ scale: 1.05, color: "#059669" }}
                    >
                      {pkg.name}
                    </motion.h3>
                    <motion.div 
                      className="mb-6"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-4xl font-bold text-emerald-900">{pkg.price}</span>
                      <span className="text-lg text-gray-500 line-through ml-2">{pkg.original}</span>
                    </motion.div>
                    <motion.ul 
                      className="space-y-2 mb-8"
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      {pkg.includes.map((item, itemIndex) => (
                        <motion.li 
                          key={itemIndex} 
                          className="flex items-center justify-center"
                          variants={fadeInUp}
                          transition={{ delay: itemIndex * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <Heart className="w-4 h-4 text-emerald-600 mr-2" />
                          <span className="text-gray-700">{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className={`w-full ${pkg.popular ? "bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-emerald-900" : "bg-emerald-800 hover:bg-emerald-900 text-white"}`}
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
        className="py-20 px-4 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 font-serif text-yellow-400"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            Bereit für Ihre Verwandlung?
          </motion.h2>
          <motion.p 
            className="text-xl text-emerald-100 mb-8"
            variants={fadeInUp}
          >
            🌿 Lassen Sie Ihr Haar wild wachsen – wir bändigen es mit Stil!
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
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
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-emerald-900 font-semibold px-8"
              >
                <Scissors className="w-5 h-5 mr-2" />
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
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-emerald-900 px-8 bg-transparent"
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
