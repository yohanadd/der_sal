import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Heart, Scissors, Palette } from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Maya Rodriguez",
      role: "Color Specialist & Salon Owner",
      animal: "🦋",
      image: "/placeholder.svg?height=400&width=400",
      specialties: ["Balayage", "Color Correction", "Creative Colors"],
      experience: "12 years",
      funFact: "Can mix any color from memory and loves creating rainbow transformations",
      bio: "Maya founded Jungle Glam Hair with a vision to blend urban sophistication with natural beauty. Her expertise in color theory and passion for creative expression has made her one of Bad Laasphe's most sought-after colorists.",
      certifications: ["Wella Master Colorist", "Olaplex Certified", "Balayage Specialist"],
    },
    {
      name: "Alex Thompson",
      role: "Cut Master & Style Director",
      animal: "🦁",
      image: "/placeholder.svg?height=400&width=400",
      specialties: ["Precision Cuts", "Men's Styling", "Texture Work"],
      experience: "10 years",
      funFact: "Can create the perfect cut for any face shape and secretly collects vintage scissors",
      bio: "Alex brings precision and artistry to every cut. With a background in fashion styling, he understands how the right haircut can transform not just your look, but your confidence.",
      certifications: ["Vidal Sassoon Trained", "Tigi Creative Team", "Men's Grooming Expert"],
    },
    {
      name: "Luna Chen",
      role: "Organic Care Specialist",
      animal: "🦥",
      image: "/placeholder.svg?height=400&width=400",
      specialties: ["Scalp Treatments", "Organic Products", "Hair Health"],
      experience: "8 years",
      funFact: "Grows her own herbs for custom hair treatments and practices meditation between clients",
      bio: "Luna's holistic approach to hair care focuses on health from the inside out. She specializes in organic treatments and believes that healthy hair is beautiful hair.",
      certifications: ["Organic Hair Care Specialist", "Scalp Therapy Expert", "Ayurvedic Hair Treatments"],
    },
    {
      name: "Rico Martinez",
      role: "Men's Grooming Expert",
      animal: "🐺",
      image: "/placeholder.svg?height=400&width=400",
      specialties: ["Classic Cuts", "Beard Styling", "Hot Towel Shaves"],
      experience: "15 years",
      funFact: "Trained in traditional barbering techniques and can tell stories from around the world",
      bio: "Rico brings old-school barbering traditions to modern men's grooming. His attention to detail and warm personality make every visit a memorable experience.",
      certifications: ["Master Barber License", "Traditional Shaving Expert", "Beard Styling Specialist"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center space-x-4 mb-6">
              <span className="text-4xl animate-bounce">🦋</span>
              <span className="text-4xl animate-pulse">🦁</span>
              <span className="text-4xl animate-bounce">🦥</span>
              <span className="text-4xl animate-pulse">🐺</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif text-yellow-400">Meet Our Jungle Crew</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Each stylist brings their own wild creativity and expertise to create your perfect look
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
                      <div className="aspect-square overflow-hidden rounded-xl">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {member.animal}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div>
                    <h2 className="text-4xl font-bold text-emerald-900 mb-2 font-serif">{member.name}</h2>
                    <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-lg px-4 py-1">
                      {member.role}
                    </Badge>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">{member.bio}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-emerald-900 mb-3 flex items-center">
                        <Scissors className="w-5 h-5 mr-2 text-emerald-600" />
                        Specialties
                      </h3>
                      <ul className="space-y-2">
                        {member.specialties.map((specialty, specIndex) => (
                          <li key={specIndex} className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 mr-2" />
                            <span className="text-gray-700">{specialty}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-emerald-900 mb-3 flex items-center">
                        <Palette className="w-5 h-5 mr-2 text-emerald-600" />
                        Experience
                      </h3>
                      <p className="text-gray-700 mb-4">{member.experience} in the industry</p>

                      <div className="space-y-2">
                        {member.certifications.map((cert, certIndex) => (
                          <Badge
                            key={certIndex}
                            variant="outline"
                            className="mr-2 mb-2 border-emerald-300 text-emerald-700"
                          >
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border-l-4 border-yellow-400">
                    <h3 className="text-lg font-bold text-emerald-900 mb-2 flex items-center">
                      <Heart className="w-5 h-5 mr-2 text-red-500" />
                      Fun Fact
                    </h3>
                    <p className="text-emerald-800 italic">{member.funFact}</p>
                  </div>

                  <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8">
                    Book with {member.name.split(" ")[0]}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-100 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 font-serif">
              What Makes Our Team Special
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "45+", label: "Years Combined Experience", icon: "⭐" },
              { number: "2000+", label: "Happy Clients", icon: "😊" },
              { number: "15+", label: "Certifications", icon: "🏆" },
              { number: "100%", label: "Passion for Hair", icon: "❤️" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-emerald-200 hover:border-yellow-400"
              >
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold text-emerald-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
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
            Ready to Meet Your Perfect Stylist?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Each member of our jungle crew is ready to help you discover your wild side
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-emerald-900 font-semibold px-8"
          >
            <Scissors className="w-5 h-5 mr-2" />
            Book Your Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
