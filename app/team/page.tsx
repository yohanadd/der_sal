"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Heart, Scissors, Palette, Clock, Smile, Award, Users } from "lucide-react"
import Image from "next/image"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Footer } from "@/components/footer"
import InesImage from "@/public/images/Ines.jpg"
import SandraImage from "@/public/images/sandra.jpg"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Ines Scharavin",
      role: "Friseurmeisterin · Coloristin · Blondexpertin",
      icon: "palette",
      image: InesImage,
      objectPosition: "center 20%",
      specialties: ["Balayage & Strähnen", "Blond-Expertise & Glossing", "Haarverlängerungen", "Herren- und Barber-Cuts"],
      experience: "Seit 2018 Friseurin · Seit 2022 Friseurmeisterin",
      achievements: ["Klassenbeste in der Berufsschule", "4. Platz bei der Landesmeisterschaft"],
      funFact: "Schon während meiner Ausbildung war ich Klassenbeste in der Berufsschule – ein Erfolg, der mir gezeigt hat, wie sehr Präzision, Kreativität und Durchhaltevermögen meinen Weg prägen.",
      bio: "Seit 2018 arbeite ich mit Leidenschaft als Friseurin, 2022 habe ich meinen Meistertitel im Crashkurs erfolgreich abgeschlossen. Mein Fachgebiet sind Farb- und Blondtechniken, Balayage, Strähnen, Haarverlängerungen sowie präzises Herren- und Barber-Styling. Für mich zählt nicht nur ein perfektes Ergebnis, sondern auch, dass jeder Kunde mit einem Look nach Hause geht, der zu seiner Persönlichkeit passt und sich im Alltag genauso gut anfühlt wie auf Fotos.",
      certifications: ["Friseurmeisterin", "Color-Spezialistin", "Balayage Expert", "Haarverlängerungen"],
    },
    {
      name: "Sandra Krause",
      role: "Friseurin · Spezialistin für Damenkurzhaar & Dauerwelle",
      icon: "scissors",
      image: SandraImage,
      objectPosition: "80% 6%",
      specialties: ["Damenkurzhaar", "Dauerwelle", "Klassische Herrenfrisuren"],
      experience: "23 Jahre Berufserfahrung · 2 Jahre Salonleitung in der Schweiz",
      achievements: ["Internationale Erfahrung", "Salonleitung"],
      funFact: "Durch meine Zeit als Salonleiterin in der Schweiz konnte ich nicht nur meine fachlichen Kompetenzen vertiefen, sondern auch wertvolle Erfahrung in Beratung, Organisation und im Umgang mit einem internationalen Kundenkreis sammeln.",
      bio: "Mit über 23 Jahren Berufserfahrung bringe ich Handwerk, Routine und Leidenschaft in jedes Detail. Besonders Damenkurzhaarfrisuren, Dauerwellen und klassische Herrenfrisuren gehören zu meinen Stärken – präzise, typgerecht und mit dem Blick für das gewisse Etwas. Mein Anspruch: klassische Techniken modern interpretieren – für Looks, die zeitlos, gepflegt und individuell sind.",
      certifications: ["Damenkurzhaar-Spezialistin", "Dauerwelle-Expertin", "Klassische Schnitttechniken"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-orbitron-500 text-white px-2 sm:px-0">
              Unser Expertenteam
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto font-orbitron-500 px-4 sm:px-0">
              Jede Stylistin bringt ihre eigene kreative Expertise mit, um Ihren perfekten Look zu kreieren
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 sm:gap-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative group">
                    <div className="relative bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl">
                      <div className="aspect-square overflow-hidden rounded-lg sm:rounded-xl">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: member.objectPosition }}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 font-serif">
                      {member.name}
                    </h2>
                    <Badge className="bg-gray-700 text-white text-sm sm:text-base px-3 sm:px-4 py-1 border border-gray-600 font-orbitron-600">
                      {member.role}
                    </Badge>
                  </div>

                  <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-orbitron-400">
                    {member.bio}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 flex items-center font-orbitron-700">
                        <Scissors className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-400" />
                        Spezialgebiete
                      </h3>
                      <ul className="space-y-1 sm:space-y-2">
                        {member.specialties.map((specialty, specIndex) => (
                          <li key={specIndex} className="flex items-center">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mr-2 flex-shrink-0" />
                            <span className="text-gray-200 text-sm sm:text-base font-orbitron-400">{specialty}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 flex items-center font-orbitron-700">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-400" />
                        Erfahrung & Erfolge
                      </h3>
                      <p className="text-gray-200 text-sm sm:text-base mb-2 sm:mb-3 font-orbitron-400">{member.experience}</p>
                      
                      <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                        {member.achievements.map((achievement, achieveIndex) => (
                          <div key={achieveIndex} className="flex items-center">
                            <Award className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mr-2 flex-shrink-0" />
                            <span className="text-gray-200 text-xs sm:text-sm font-orbitron-400">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {member.certifications.map((cert, certIndex) => (
                          <Badge
                            key={certIndex}
                            variant="outline"
                            className="border-gray-600 text-gray-300 text-xs sm:text-sm font-orbitron-500"
                          >
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-gray-600">
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center font-orbitron-700">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-400" />
                      Persönlicher Fakt
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base italic font-orbitron-400">{member.funFact}</p>
                  </div>

                  <Button className="bg-gray-700 text-gray-200 hover:bg-gray-600 font-semibold px-6 sm:px-8 py-2 sm:py-3 border border-gray-600 font-orbitron-600 text-sm sm:text-base w-full sm:w-auto">
                    Termin bei {member.name.split(" ")[0]} buchen
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-700 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-serif px-2 sm:px-0">
              Was unser Team besonders macht
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 font-orbitron-500 px-4 sm:px-0">Erfahrung und Leidenschaft vereint</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { number: "8+", label: "Jahre Erfahrung", icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" /> },
              { number: "500+", label: "Zufriedene Kunden", icon: <Smile className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" /> },
              { number: "10+", label: "Zertifikate", icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" /> },
              { number: "100%", label: "Leidenschaft für Haare", icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" /> },
            ].map((stat, index) => (
              <div key={index} className="flex">
                <Card className="text-center p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-gray-600 hover:border-gray-500 bg-gray-800 flex-1 flex flex-col">
                  <CardContent className="p-0 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="text-gray-300 mb-3 sm:mb-4 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 mb-1 sm:mb-2 font-orbitron-700">
                        {stat.number}
                      </div>
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm font-medium font-orbitron-500 mt-2 sm:mt-4">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-serif text-white px-2 sm:px-0">
            Bereit für Ihren neuen Look?
          </h2>
          <p className="text-lg sm:text-xl text-gray-100 mb-6 sm:mb-8 font-orbitron-500 px-4 sm:px-0">
            Unsere Expertinnen freuen sich darauf, Sie persönlich kennenzulernen und Ihren perfekten Style zu kreieren
          </p>
          <Button
            size="lg"
            className="bg-gray-700 text-gray-200 hover:bg-gray-600 font-semibold px-6 sm:px-8 border border-gray-600 font-orbitron-600 text-sm sm:text-base"
          >
            <Scissors className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-400" />
            Beratungstermin buchen
          </Button>
        </div>
      </section>
      
      <Footer />
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}