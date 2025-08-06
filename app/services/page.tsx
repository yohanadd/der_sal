import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scissors, Palette, Sparkles, Leaf, Heart, Crown } from "lucide-react"
import Image from "next/image"

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Damen-Services",
      icon: Crown,
      color: "from-pink-500 to-rose-500",
      image: "/placeholder.svg?height=400&width=600",
      services: [
        {
          name: "Präzisionsschnitt & Styling",
          price: "45-65€",
          description: "Expertenschnitte, angepasst an Ihre Gesichtsform und Ihren Lebensstil",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "Waschen, Schneiden & Föhnen",
          price: "55-75€",
          description: "Komplettes Styling-Erlebnis mit Premium-Produkten",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "Festliches Styling",
          price: "35-50€",
          description: "Elegante Hochsteckfrisuren und Event-Frisuren",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "Haarverlängerungen",
          price: "80-150€",
          description: "Länge und Volumen mit natürlich aussehenden Extensions",
          image: "/placeholder.svg?height=300&width=300",
        },
      ],
    },
    {
      title: "Farb-Magie",
      icon: Palette,
      color: "from-purple-500 to-indigo-500",
      image: "/placeholder.svg?height=400&width=600",
      services: [
        {
          name: "Komplette Farb-Verwandlung",
          price: "70-120€",
          description: "Vollständiger Farbwechsel mit professioneller Beratung",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "Highlights & Lowlights",
          price: "60-100€",
          description: "Dimensionale Farbe für natürlich aussehende Tiefe",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "Balayage & Ombré",
          price: "80-140€",
          description: "Handgemalte Techniken für nahtlose Farbübergänge",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "Farbkorrektur",
          price: "100-200€",
          description: "Expertenkorrektur für vorherige Farbpannen",
          image: "/placeholder.svg?height=300&width=300",
        },
      ],
    },
    {
      title: "Herren-Styling",
      icon: Scissors,
      color: "from-blue-500 to-cyan-500",
      image: "/placeholder.svg?height=400&width=600",
      services: [
        {
          name: "Klassischer Herrenschnitt",
          price: "25-35€",
          description: "Zeitlose Schnitte mit moderner Präzision",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "Bart trimmen & stylen",
          price: "15-25€",
          description: "Professionelle Bartformung und -pflege",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "Heißes Handtuch Rasur",
          price: "30-40€",
          description: "Traditionelles Barbier-Erlebnis",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "Herren Farb-Touch-up",
          price: "40-60€",
          description: "Grauabdeckung und Farbverbesserung",
          image: "/placeholder.svg?height=300&width=300",
        },
      ],
    },
    {
      title: "Bio-Pflege",
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
      image: "/placeholder.svg?height=400&width=600",
      services: [
        {
          name: "Tiefenpflege-Behandlung",
          price: "25-40€",
          description: "Intensive Feuchtigkeits- und Reparaturtherapie",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "Kopfhaut-Massage & Behandlung",
          price: "30-45€",
          description: "Entspannende Kopfhauttherapie mit Bio-Ölen",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "Keratin-Glättung",
          price: "120-180€",
          description: "Krauses Haar glätten für monatelang glattes Haar",
          image: "/placeholder.svg?height=300&width=300",
        },
        {
          name: "Bio-Haarmaske",
          price: "20-35€",
          description: "Natürliche Inhaltsstoffe für gesundes, glänzendes Haar",
          image: "/placeholder.svg?height=300&width=300",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif text-yellow-400">
              Unsere Dschungel-Services
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Wo urbane Eleganz auf natürliche Schönheit trifft. Jeder Service wird mit Präzision und Sorgfalt
              ausgeführt.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <div className="text-center">
                  <div
                    className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center shadow-xl`}
                  >
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-emerald-900 mb-2 font-serif">{category.title}</h2>
                </div>

                {/* Category Hero Image */}
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={`${category.title} Salon Bild`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-3xl font-bold text-white font-serif">{category.title}</h3>
                      <p className="text-white/90 text-lg">Professionelle Services in entspannter Atmosphäre</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Card
                      key={serviceIndex}
                      className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-emerald-100 hover:border-emerald-300 overflow-hidden"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className={`bg-gradient-to-r ${category.color} text-white`}>{service.price}</Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg font-bold text-emerald-900 font-serif">{service.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-100 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 font-serif">Dschungel-Pakete</h2>
            <p className="text-xl text-emerald-700">Komplette Verwandlungen zu Sonderpreisen</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Das Wilde Makeover",
                price: "120€",
                original: "150€",
                includes: ["Schnitt & Style", "Vollfarbe", "Tiefenbehandlung", "Styling"],
                popular: true,
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "Dschungel-Auffrischung",
                price: "80€",
                original: "95€",
                includes: ["Schnitt & Style", "Highlights", "Föhnen", "Haarmaske"],
                popular: false,
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                name: "Urban Gentleman",
                price: "55€",
                original: "70€",
                includes: ["Herrenschnitt", "Bart trimmen", "Heißes Handtuch", "Styling"],
                popular: false,
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((pkg, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden ${pkg.popular ? "ring-4 ring-yellow-400 scale-105" : ""} hover:shadow-2xl transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-yellow-400 text-emerald-900 px-4 py-1 text-sm font-bold">Beliebtestes</Badge>
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-emerald-900 mb-2 font-serif">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-emerald-900">{pkg.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{pkg.original}</span>
                  </div>
                  <ul className="space-y-2 mb-8">
                    {pkg.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center justify-center">
                        <Heart className="w-4 h-4 text-emerald-600 mr-2" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${pkg.popular ? "bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-emerald-900" : "bg-emerald-800 hover:bg-emerald-900 text-white"}`}
                  >
                    Paket buchen
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-yellow-400">
            Bereit für Ihre Verwandlung?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            🌿 Lassen Sie Ihr Haar wild wachsen – wir bändigen es mit Stil!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-emerald-900 font-semibold px-8"
            >
              <Scissors className="w-5 h-5 mr-2" />
              Termin vereinbaren
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-emerald-900 px-8 bg-transparent"
            >
              Jetzt anrufen
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
