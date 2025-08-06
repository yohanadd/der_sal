"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Filter, Instagram, Heart, Share2, Eye } from "lucide-react"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [playingVideos, setPlayingVideos] = useState<{ [key: number]: boolean }>({})

  const handleVideoClick = (videoId: number, videoElement: HTMLVideoElement) => {
    const isPlaying = playingVideos[videoId]
    
    if (isPlaying) {
      videoElement.pause()
      setPlayingVideos(prev => ({ ...prev, [videoId]: false }))
    } else {
      videoElement.play()
      setPlayingVideos(prev => ({ ...prev, [videoId]: true }))
    }
  }

  const filters = [
    { id: "all", label: "Alle Styles", count: 24 },
    { id: "color", label: "Farb-Zauber", count: 8 },
    { id: "cuts", label: "Präzisions-Schnitte", count: 10 },
    { id: "events", label: "Besondere Anlässe", count: 6 },
  ]

  const galleryItems = [
    {
      id: 1,
      category: "color",
      title: "Sonnenuntergang Balayage",
      description: "Warme goldene Töne mit natürlichen Highlights",
      likes: 127,
      stylist: "Maya",
      image: "/images/cu1.jpg",
    },
    {
      id: 2,
      category: "cuts",
      title: "Moderner Bob",
      description: "Eleganter Präzisionsschnitt mit subtilen Stufen",
      likes: 89,
      stylist: "Alex",
      image: "/images/cu2.jpg",
    },
    {
      id: 3,
      category: "events",
      title: "Braut-Hochsteckfrisur",
      description: "Elegante Hochzeitsfrisur mit botanischen Akzenten",
      likes: 156,
      stylist: "Luna",
      image: "/images/cu3.jpg",
    },
    {
      id: 4,
      category: "color",
      title: "Dschungel-Grün Ombré",
      description: "Kräftiger Smaragd-Verlauf mit natürlichem Ansatz",
      likes: 203,
      stylist: "Maya",
      image: "/images/cu4.jpg",
    },
    {
      id: 5,
      category: "cuts",
      title: "Strukturierte Stufen",
      description: "Voluminöser Schnitt mit Bewegung und Schwung",
      likes: 94,
      stylist: "Alex",
      image: "/images/cu5.jpg",
    },
    {
      id: 6,
      category: "events",
      title: "Abschlussball-Glamour",
      description: "Hollywood-Wellen mit goldenen Highlights",
      likes: 178,
      stylist: "Luna",
      image: "/images/cu6.jpg",
    },
    {
      id: 7,
      category: "color",
      title: "Kupfer-Highlights",
      description: "Satte Kupfertöne mit dimensionaler Tiefe",
      likes: 112,
      stylist: "Maya",
      image: "/images/cu7.jpg",
    },
    {
      id: 8,
      category: "cuts",
      title: "Pixie-Perfektion",
      description: "Kantiger Kurzhaarschnitt mit texturiertem Styling",
      likes: 145,
      stylist: "Alex",
      image: "/images/cu8.jpg",
    },
    {
      id: 9,
      category: "events",
      title: "Festival-Zöpfe",
      description: "Boho-Flechtfrisur mit farbigen Akzenten",
      likes: 167,
      stylist: "Luna",
      image: "/images/cu9.jpg",
    },
    {
      id: 10,
      category: "color",
      title: "Platinblond",
      description: "Eisblonde Verwandlung mit Toner",
      likes: 189,
      stylist: "Maya",
      image: "/images/cu10.jpg",
    },
    {
      id: 11,
      category: "cuts",
      title: "Shag-Revival",
      description: "70er-inspirierter Shag mit modernem Twist",
      likes: 134,
      stylist: "Alex",
      image: "/images/cu11.jpg",
    },
    {
      id: 12,
      category: "events",
      title: "Roter Teppich bereit",
      description: "Elegante Hochsteckfrisur für besondere Anlässe",
      likes: 198,
      stylist: "Luna",
      image: "/images/cu12.jpg",
    },
  ]

  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  const instagramReels = [
    {
      id: 1,
      title: "Haar-Verwandlung",
      views: "12.5K",
      videoSrc: "/video/Video-18.mp4",
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 2,
      title: "Styling-Prozess",
      views: "8.9K",
      videoSrc: "/video/Video-614.mp4",
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 3,
      title: "Vorher & Nachher",
      views: "15.2K",
      videoSrc: "/video/Video-659.mp4",
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 4,
      title: "Haar-Styling Zauber",
      views: "6.7K",
      videoSrc: "/video/Video-699.mp4",
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
  ]

  const instagramReels1 = [
    {
      id: 1,
      title: "Haar-Verwandlung",
      views: "12.5K",
      videoSrc: "/video/Video-66.mp4",
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 2,
      title: "Styling-Prozess",
      views: "8.9K",
      videoSrc: "/video/Video-987.mp4",
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 3,
      title: "Vorher & Nachher",
      views: "15.2K",
      videoSrc: "/video/Video-371.mp4",
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 5,
      title: "Haar-Styling Zauber",
      views: "6.7K",
      videoSrc: "/video/Video-847.mp4",
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Camera className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif text-yellow-400">Dschungel-Verwandlungen</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Erleben Sie die Magie, die wir jeden Tag schaffen. Von subtilen Veränderungen bis zu dramatischen Verwandlungen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-emerald-100 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Instagram className="w-16 h-16 mx-auto mb-4 text-emerald-600" />
            <p className="text-xl text-emerald-700">Schauen Sie unseren Stylisten dabei zu, wie sie ihre Magie in Echtzeit wirken</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {instagramReels1.map((reel) => (
              <Card
                key={reel.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div 
                  className="relative aspect-[9/16] overflow-hidden"
                  onClick={(e) => {
                    const video = e.currentTarget.querySelector('video') as HTMLVideoElement
                    if (video) {
                      handleVideoClick(reel.id, video)
                    }
                  }}
                >
                  <video
                    src={reel.videoSrc}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onPlay={() => setPlayingVideos(prev => ({ ...prev, [reel.id]: true }))}
                    onPause={() => setPlayingVideos(prev => ({ ...prev, [reel.id]: false }))}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${playingVideos[reel.id] ? 'opacity-0' : 'opacity-20'}`}>
                        <div className="w-0 h-0 border-l-[8px] border-l-emerald-600 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium mb-1">{reel.title}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 text-white mr-1" />
                          <span className="text-white text-xs">{reel.views} Aufrufe</span>
                        </div>
                        <div className="text-white text-xs">
                          {playingVideos[reel.id] ? 'Läuft automatisch' : 'Autoplay'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Folgen Sie @JungleGlamHair
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 px-4 bg-white border-b border-emerald-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-emerald-600 to-emerald-700 text-white"
                    : "border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                } px-6 py-2 rounded-full transition-all duration-300`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter.label}
                <Badge className="ml-2 bg-yellow-400 text-emerald-900">{filter.count}</Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-emerald-100 hover:border-emerald-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center space-x-2">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{item.likes}</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="ghost" className="text-white hover:text-yellow-400 p-1">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-white hover:text-yellow-400 p-1">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-yellow-400 text-emerald-900">von {item.stylist}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-emerald-900 mb-1 font-serif">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Reels Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-100 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Instagram className="w-16 h-16 mx-auto mb-4 text-emerald-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4 font-serif">Hinter den Kulissen</h2>
            <p className="text-xl text-emerald-700">Schauen Sie unseren Stylisten dabei zu, wie sie ihre Magie in Echtzeit wirken</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {instagramReels.map((reel) => (
              <Card
                key={reel.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div 
                  className="relative aspect-[9/16] overflow-hidden"
                  onClick={(e) => {
                    const video = e.currentTarget.querySelector('video') as HTMLVideoElement
                    if (video) {
                      handleVideoClick(reel.id, video)
                    }
                  }}
                >
                  <video
                    src={reel.videoSrc}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onPlay={() => setPlayingVideos(prev => ({ ...prev, [reel.id]: true }))}
                    onPause={() => setPlayingVideos(prev => ({ ...prev, [reel.id]: false }))}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${playingVideos[reel.id] ? 'opacity-0' : 'opacity-20'}`}>
                        <div className="w-0 h-0 border-l-[8px] border-l-emerald-600 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium mb-1">{reel.title}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 text-white mr-1" />
                          <span className="text-white text-xs">{reel.views} Aufrufe</span>
                        </div>
                        <div className="text-white text-xs">
                          {playingVideos[reel.id] ? 'Läuft automatisch' : 'Autoplay'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Folgen Sie @JungleGlamHair
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-yellow-400">Bereit für Ihren großen Auftritt?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Lassen Sie uns Ihre nächste atemberaubende Verwandlung schaffen, die galerie-würdig ist!
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-emerald-900 font-semibold px-8"
          >
            <Camera className="w-5 h-5 mr-2" />
            Buchen Sie Ihre Verwandlung
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
