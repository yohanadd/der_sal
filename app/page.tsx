"use client"

import { HeroSection } from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Scissors,
  Instagram,
  MapPin,
  Clock,
  Phone,
  Star,
  Heart,
  Facebook,
  Music,
} from "lucide-react";
import Image from "next/image";
import stylist1 from "@/public/images/member1.2.jpg";
import stylist2 from "@/public/images/member3.jpeg";
import stylist3 from "@/public/images/member2.jpg";
import { motion } from "framer-motion";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Footer } from "@/components/footer";

export default function HomePage() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleInOnHover = {
    hover: { 
      scale: 1.05, 
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const teamMembers = [
    {
      name: "Sarah Wilde",
      role: "Leitende Coloristin & Inhaberin",
      mascot: "🦎",
      mascotName: "Chamäleon Chloe",
      specialties: ["Balayage", "Farbkorrektur", "Fantasy Farben"],
      funFact: "Kann 47 verschiedene Grüntöne aus dem Gedächtnis mischen",
      bio: "Mit 12 Jahren Erfahrung verwandelt Sarah Haare in lebende Kunst und erweckt den Dschungel durch Farbe zum Leben.",
      image: stylist1,
      rating: 5.0,
      reviews: 127,
    },
    {
      name: "Marco Stone",
      role: "Meister Barbier",
      mascot: "🐆",
      mascotName: "Panther Paulo",
      specialties: ["Präzisionsschnitte", "Bart-Styling", "Fades"],
      funFact: "Hat einmal für eine Wohltätigkeitsveranstaltung mit verbundenen Augen Haare geschnitten",
      bio: "Präzision trifft auf Kunstfertigkeit in Marcos Händen. Jeder Schnitt wird mit der Anmut seines Panther-Geistes gefertigt.",
      image: stylist3,
      rating: 4.9,
      reviews: 89,
    },
    {
      name: "Luna Forest",
      role: "Styling-Spezialistin",
      mascot: "🦜",
      mascotName: "Papagei Penny",
      specialties: ["Hochzeitsstyles", "Farbkorrektur", "Balayage"],
      funFact:
        "Spricht drei Sprachen und flechtet in vier verschiedenen kulturellen Stilen",
      bio: "Lunas kreativer Geist schwebt so hoch wie ihr Papageien-Begleiter und kreiert Styles, die Ihre einzigartige Geschichte erzählen.",
      image: stylist1,
      rating: 5.0,
      reviews: 156,
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Preview */}
      <motion.section 
        className="py-20 px-4 bg-white"
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
              Unsere Dschungel-Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wo urbane Eleganz auf natürliche Schönheit trifft
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                title: "Damenschnitte",
                icon: "✂️",
                desc: "Präzisionsschnitte mit botanischem Flair",
              },
              {
                title: "Farb-Magie",
                icon: "🎨",
                desc: "Natürliche Töne bis hin zu Dschungel-Nuancen",
              },
              {
                title: "Herren-Styling",
                icon: "🪒",
                desc: "Scharfe Styles für den modernen Gentleman",
              },
              {
                title: "Spezial-Pflege",
                icon: "🌿",
                desc: "Organische Behandlungen für gesundes Haar",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-emerald-100 hover:border-emerald-300"
                >
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-emerald-900 mb-2 font-serif">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* <section id="team" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 font-serif">
              Meet Our Wild Pack
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team of passionate stylists each brings their own unique magic
              to the jungle. Get to know the artists who will help unleash your
              wild side.
            </p>
          </div>

          <div className="bg-jungle-cream rounded-2xl p-8 mb-16 text-center shadow-leaf">
            <Sparkles className="w-12 h-12 text-jungle-gold mx-auto mb-4" />
            <h3 className=" text-3xl font-bold text-jungle-green mb-4">
              What Makes Our Team Special
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Heart className="w-6 h-6 text-jungle-gold" />
                <span className="font-body text-jungle-green">
                  Passion-Driven Artistry
                </span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Star className="w-6 h-6 text-jungle-gold" />
                <span className="font-body text-jungle-green">
                  Continuous Education
                </span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Scissors className="w-6 h-6 text-jungle-gold" />
                <span className="font-body text-jungle-green">
                  Eco-Conscious Products
                </span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="group hover-tilt shadow-leaf border-border hover:shadow-elegant transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <img
                      src={member.image.src}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-jungle-gold shadow-gold"
                    />
                    <div className="absolute -bottom-2 -right-2 text-4xl">
                      {member.mascot}
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <h3 className="font-heading text-xl font-bold text-jungle-green mb-1">
                      {member.name}
                    </h3>
                    <p className="font-body text-jungle-gold font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="font-body text-sm text-muted-foreground mb-4">
                      with {member.mascotName}
                    </p>

                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(member.rating)
                                ? "text-jungle-gold fill-current"
                                : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-body text-sm text-muted-foreground">
                        {member.rating} ({member.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <p className="font-body text-sm text-muted-foreground text-center mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-body font-semibold text-jungle-green text-sm mb-2">
                        Specialties:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty) => (
                          <Badge
                            key={specialty}
                            variant="secondary"
                            className="text-xs"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-jungle-cream/50 rounded-lg p-3">
                      <h4 className="font-body font-semibold text-jungle-green text-sm mb-1">
                        Fun Fact:
                      </h4>
                      <p className="font-body text-xs text-muted-foreground italic">
                        {member.funFact}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team Preview */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-emerald-100"
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
              Unser Dschungel-Team
            </h2>
            <p className="text-xl text-emerald-700">
              Jeder Stylist bringt seine eigene wilde Kreativität mit
            </p>
          </motion.div>

          <motion.div 
            className="bg-jungle-cream rounded-2xl p-8 mb-16 text-center shadow-leaf"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <Sparkles className="w-12 h-12 text-jungle-gold mx-auto mb-4" />
            </motion.div>
            <h3 className=" text-3xl font-bold text-jungle-green mb-4">
              Was unser Team besonders macht
            </h3>
            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {[
                { icon: Heart, text: "Leidenschaftliche Kunstfertigkeit" },
                { icon: Star, text: "Kontinuierliche Weiterbildung" },
                { icon: Scissors, text: "Umweltbewusste Produkte" }
              ].map(({ icon: Icon, text }, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-center space-x-3"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="w-6 h-6 text-jungle-gold" />
                  <span className="font-body text-jungle-green">
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className="group hover:shadow-xl transition-all duration-300 bg-white border-2 border-emerald-200 hover:border-yellow-400"
                >
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="relative mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.img
                        src={member.image.src}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-yellow-400 shadow-lg group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      />
                      <motion.div 
                        className="absolute -bottom-2 -right-2 text-2xl"
                        animate={{ 
                          rotate: [0, -10, 10, -10, 0],
                          scale: [1, 1.1, 1] 
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut"
                        }}
                      >
                        {member.mascot}
                      </motion.div>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-emerald-900 mb-1 font-serif">
                      {member.name}
                    </h3>
                    <Badge className="bg-yellow-400 text-emerald-900 mb-3">
                      {member.role}
                    </Badge>
                    <p className="text-gray-600">{member.specialties.join(" • ")}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Preview */}
      <motion.section 
        className="py-20 px-4 bg-white"
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
              Dschungel-Verwandlungen
            </h2>
            <p className="text-xl text-gray-600">
              Sehen Sie die Magie, die wir erschaffen
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              "/images/salon_inside.jpg",
              "/images/salon_seats.jpg", 
              "/images/salon_sits.jpg",
              "/images/women_service.jpg",
              "/images/man_service.png",
              "/images/waiting.jpg",
              "/images/outside.jpg",
              "/images/team.jpg"
            ].map((imageSrc, index) => (
              <motion.div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl border-4 border-emerald-100 hover:border-yellow-400 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={imageSrc}
                    alt={`Haar-Verwandlung ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div 
                    className="p-4 text-white"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <p className="font-semibold">Stil #{index + 1}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-emerald-800 hover:bg-emerald-900 text-white px-8"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Vollständige Galerie
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact & Location */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-yellow-400">
              Finden Sie Ihre Dschungel-Oase
            </h2>
            <p className="text-xl text-emerald-100">
              Im Herzen von Bad Laasphe gelegen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { icon: MapPin, title: "Standort", desc: "Musterstraße 123, Bad Laasphe" },
                { icon: Clock, title: "Öffnungszeiten", desc: "Di-Fr: 9:00-18:00 | Sa: 8:00-16:00", extra: "🦥 Montags geschlossen (Faultier-Tag!)" },
                { icon: Phone, title: "Kontakt", desc: "+49 123 456 789" }
              ].map(({ icon: Icon, title, desc, extra }, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-emerald-900" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400">
                      {title}
                    </h3>
                    <p className="text-emerald-100">{desc}</p>
                    {extra && (
                      <p className="text-emerald-200 text-sm">{extra}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="bg-emerald-800/50 rounded-2xl p-8 border-2 border-yellow-400/30"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 font-serif">
                Bereit für das Wilde?
              </h3>
              <p className="text-emerald-100 mb-6">
                🌿 Lassen Sie Ihr Haar wild wachsen – wir bändigen es mit Stil!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-emerald-900 font-semibold"
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Scissors className="w-5 h-5 mr-2" />
                  </motion.div>
                  Ihr Dschungel-Abenteuer buchen
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

const Sparkles = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
      fill="currentColor"
    />
    <path
      d="M19 3L19.5 5.5L22 6L19.5 6.5L19 9L18.5 6.5L16 6L18.5 5.5L19 3Z"
      fill="currentColor"
    />
    <path
      d="M5 15L5.5 17.5L8 18L5.5 18.5L5 21L4.5 18.5L2 18L4.5 17.5L5 15Z"
      fill="currentColor"
    />
  </svg>
);
