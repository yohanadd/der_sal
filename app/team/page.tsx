"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Heart, Scissors, Palette } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Footer } from "@/components/footer"

export default function TeamPage() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const teamMembers = [
    {
      name: "Maya Rodriguez",
      role: "Farb-Spezialistin & Salon-Inhaberin",
      animal: "🦋",
      image: "/images/member.jpg",
      objectPosition: "center 20%",
      specialties: ["Balayage", "Farbkorrekturen", "Kreative Farben"],
      experience: "12 Jahre",
      funFact: "Kann jede Farbe aus dem Gedächtnis mischen und liebt es, Regenbogen-Verwandlungen zu kreieren",
      bio: "Maya gründete Der Salon Hair mit der Vision, urbane Raffinesse mit natürlicher Schönheit zu verbinden. Ihre Expertise in der Farbtheorie und Leidenschaft für kreativen Ausdruck hat sie zu einer der gefragtesten Coloristinnen in Bad Laasphe gemacht.",
      certifications: ["Wella Master Colorist", "Olaplex Zertifiziert", "Balayage Spezialist"],
    },
    {
      name: "Alex Thompson",
      role: "Schnitt-Meister & Style-Direktor",
      animal: "🦁",
      image: "/images/member2.jpg",
      objectPosition: "80% 6%",
      specialties: ["Präzisionsschnitte", "Herren-Styling", "Textur-Arbeit"],
      experience: "10 Jahre",
      funFact: "Kann den perfekten Schnitt für jede Gesichtsform kreieren und sammelt heimlich Vintage-Scheren",
      bio: "Alex bringt Präzision und Kunstfertigkeit in jeden Schnitt. Mit einem Hintergrund im Fashion-Styling versteht er, wie der richtige Haarschnitt nicht nur Ihr Aussehen, sondern auch Ihr Selbstvertrauen verwandeln kann.",
      certifications: ["Vidal Sassoon Ausgebildet", "Tigi Creative Team", "Herren-Styling Experte"],
    },
    // {
    //   name: "Luna Chen",
    //   role: "Bio-Pflege Spezialistin",
    //   animal: "🦥",
    //   image: "/images/member3.jpeg",
    //   objectPosition: "center 10%",
    //   specialties: ["Kopfhaut-Behandlungen", "Bio-Produkte", "Haar-Gesundheit"],
    //   experience: "8 Jahre",
    //   funFact: "Züchtet ihre eigenen Kräuter für individuelle Haarbehandlungen und praktiziert Meditation zwischen den Terminen",
    //   bio: "Lunas ganzheitlicher Ansatz zur Haarpflege konzentriert sich auf Gesundheit von innen heraus. Sie spezialisiert sich auf Bio-Behandlungen und glaubt, dass gesundes Haar schönes Haar ist.",
    //   certifications: ["Bio-Haarpflege Spezialist", "Kopfhaut-Therapie Experte", "Ayurvedische Haar-Behandlungen"],
    // },
    {
      name: "Rico Martinez",
      role: "Herren-Styling Experte",
      animal: "🐺",
      image: "/images/member.jpg",
      objectPosition: "center 28%",
      specialties: ["Klassische Schnitte", "Bart-Styling", "Heißtuch-Rasuren"],
      experience: "15 Jahre",
      funFact: "Ausgebildet in traditionellen Barbier-Techniken und kann Geschichten aus aller Welt erzählen",
      bio: "Rico bringt altbewährte Barbier-Traditionen in die moderne Herren-Pflege. Seine Liebe zum Detail und warme Persönlichkeit machen jeden Besuch zu einem unvergesslichen Erlebnis.",
      certifications: ["Meister-Barbier Lizenz", "Traditionelle Rasur Experte", "Bart-Styling Spezialist"],
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
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            className="mb-8"
            variants={fadeInUp}
          >
            <motion.div 
              className="flex justify-center space-x-4 mb-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {["🦋", "🦁", "🦥", "🐺"].map((animal, index) => (
                <motion.span
                  key={index}
                  className="text-4xl"
                  // variants={fadeInUp}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  {animal}
                </motion.span>
              ))}
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4 font-serif text-yellow-400"
              variants={fadeInUp}
            >
              Lern unser Jungle-Team kennen
            </motion.h1>
            <motion.p 
              className="text-xl text-emerald-100 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Jeder Stylist bringt seine eigene wilde Kreativität und Expertise mit, um deinen perfekten Look zu kreieren
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Members */}
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
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                whileInView="animate"
                initial="initial"
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Image */}
                <motion.div 
                  className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="relative group"
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className="absolute -inset-4 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
                      <div className="aspect-square overflow-hidden rounded-xl">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: member.objectPosition }}
                          />
                        </motion.div>
                      </div>
                      <motion.div 
                        className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {member.animal}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  variants={fadeInUp}
                >
                  <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.h2 
                      className="text-4xl font-bold text-emerald-900 mb-2 font-serif"
                      whileHover={{ scale: 1.02, color: "#059669" }}
                    >
                      {member.name}
                    </motion.h2>
                    <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-lg px-4 py-1">
                      {member.role}
                    </Badge>
                  </motion.div>

                  <motion.p 
                    className="text-gray-700 text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {member.bio}
                  </motion.p>

                  <motion.div 
                    className="grid md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    <motion.div variants={fadeInUp}>
                      <h3 className="text-xl font-bold text-emerald-900 mb-3 flex items-center">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Scissors className="w-5 h-5 mr-2 text-emerald-600" />
                        </motion.div>
                        Spezialitäten
                      </h3>
                      <ul className="space-y-2">
                        {member.specialties.map((specialty, specIndex) => (
                          <motion.li 
                            key={specIndex} 
                            className="flex items-center"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: specIndex * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <motion.div
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            >
                              <Star className="w-4 h-4 text-yellow-500 mr-2" />
                            </motion.div>
                            <span className="text-gray-700">{specialty}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <h3 className="text-xl font-bold text-emerald-900 mb-3 flex items-center">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 15 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Palette className="w-5 h-5 mr-2 text-emerald-600" />
                        </motion.div>
                        Erfahrung
                      </h3>
                      <p className="text-gray-700 mb-4">{member.experience} in der Branche</p>

                      <div className="space-y-2">
                        {member.certifications.map((cert, certIndex) => (
                          <motion.div
                            key={certIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: certIndex * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge
                              variant="outline"
                              className="mr-2 mb-2 border-emerald-300 text-emerald-700"
                            >
                              {cert}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border-l-4 border-yellow-400"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ x: 5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                  >
                    <h3 className="text-lg font-bold text-emerald-900 mb-2 flex items-center">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Heart className="w-5 h-5 mr-2 text-red-500" />
                      </motion.div>
                      Witziger Fakt
                    </h3>
                    <p className="text-emerald-800 italic">{member.funFact}</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8">
                      Termin bei {member.name.split(" ")[0]} buchen
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Stats */}
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
          >
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 font-serif">
              Was unser Team besonders macht
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { number: "45+", label: "Jahre Erfahrung", icon: "⭐" },
              { number: "2000+", label: "Zufriedene Kunden", icon: "😊" },
              { number: "15+", label: "Zertifikate", icon: "🏆" },
              { number: "100%", label: "Leidenschaft für Haare", icon: "❤️" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className="text-center p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-emerald-200 hover:border-yellow-400"
                >
                  <CardContent className="p-0">
                    <motion.div 
                      className="text-4xl mb-4"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div 
                      className="text-4xl font-bold text-emerald-900 mb-2"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300,
                        delay: index * 0.1 
                      }}
                      whileHover={{ scale: 1.1, color: "#059669" }}
                    >
                      {stat.number}
                    </motion.div>
                    <motion.div 
                      className="text-gray-600 font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {stat.label}
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
          >
            Bereit, deinen perfekten Stylisten zu treffen?
          </motion.h2>
          <motion.p 
            className="text-xl text-emerald-100 mb-8"
            variants={fadeInUp}
          >
            Jedes Mitglied unseres Jungle-Teams ist bereit, dir zu helfen, deine wilde Seite zu entdecken
          </motion.p>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-emerald-900 font-semibold px-8"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Scissors className="w-5 h-5 mr-2" />
              </motion.div>
              Beratungstermin buchen
            </Button>
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
