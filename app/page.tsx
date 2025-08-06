import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scissors, Instagram, MapPin, Clock, Phone } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 font-serif">
              Unsere Dschungel-Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Wo urbane Eleganz auf natürliche Schönheit trifft</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Damenschnitte", icon: "✂️", desc: "Präzisionsschnitte mit botanischem Flair" },
              { title: "Farb-Magie", icon: "🎨", desc: "Natürliche Töne bis hin zu lebendigen Dschungel-Nuancen" },
              { title: "Herren-Styling", icon: "🪒", desc: "Scharfe Styles für den modernen Gentleman" },
              { title: "Spezial-Pflege", icon: "🌿", desc: "Organische Behandlungen für gesundes Haar" },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-emerald-100 hover:border-emerald-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-2 font-serif">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 font-serif">Unser Dschungel-Team</h2>
            <p className="text-xl text-emerald-700">Jeder Stylist bringt seine eigene wilde Kreativität mit</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Maya", role: "Farb-Spezialistin", animal: "🦋", specialty: "Lebendige Verwandlungen" },
              { name: "Alex", role: "Schnitt-Meister", animal: "🦁", specialty: "Präzisions-Styling" },
              { name: "Luna", role: "Pflege-Expertin", animal: "🦥", specialty: "Organische Behandlungen" },
            ].map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 bg-white border-2 border-emerald-200 hover:border-yellow-400"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                    {member.animal}
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-900 mb-1 font-serif">{member.name}</h3>
                  <Badge className="bg-yellow-400 text-emerald-900 mb-3">{member.role}</Badge>
                  <p className="text-gray-600">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 font-serif">Dschungel-Verwandlungen</h2>
            <p className="text-xl text-gray-600">Sehen Sie die Magie, die wir erschaffen</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl border-4 border-emerald-100 hover:border-yellow-400 transition-all duration-300"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300&query=Friseur Verwandlung ${index + 1}`}
                  alt={`Haar-Verwandlung ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-semibold">Style #{index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-emerald-800 hover:bg-emerald-900 text-white px-8">
              <Instagram className="w-5 h-5 mr-2" />
              Vollständige Galerie
            </Button>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-yellow-400">
              Finden Sie Ihre Dschungel-Oase
            </h2>
            <p className="text-xl text-emerald-100">Im Herzen von Bad Laasphe gelegen</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400">Standort</h3>
                  <p className="text-emerald-100">Musterstraße 123, Bad Laasphe</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-emerald-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400">Öffnungszeiten</h3>
                  <p className="text-emerald-100">Di-Fr: 9:00-18:00 | Sa: 8:00-16:00</p>
                  <p className="text-emerald-200 text-sm">🦥 Montags geschlossen (Faultier-Tag!)</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-emerald-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400">Kontakt</h3>
                  <p className="text-emerald-100">+49 123 456 789</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-800/50 rounded-2xl p-8 border-2 border-yellow-400/30">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 font-serif">Bereit für das Wilde?</h3>
              <p className="text-emerald-100 mb-6">🌿 Lassen Sie Ihr Haar wild wachsen – wir bändigen es mit Stil!</p>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-emerald-900 font-semibold"
              >
                <Scissors className="w-5 h-5 mr-2" />
                Ihr Dschungel-Abenteuer buchen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            {["instagram", "facebook", "tiktok"].map((social) => (
              <div
                key={social}
                className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors cursor-pointer"
              >
                <div className="w-6 h-6 bg-emerald-900 rounded-full"></div>
              </div>
            ))}
          </div>

          <div className="border-t border-emerald-800 pt-8">
            <p className="text-emerald-300 mb-2">🌱 Bleiben Sie wild. Bleiben Sie schön. Der Salon.</p>
            <p className="text-emerald-400 text-sm">© 2024 Jungle Glam Hair. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
