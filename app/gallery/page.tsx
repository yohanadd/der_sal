"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Filter, Instagram, Heart, Share2, Eye } from "lucide-react"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { videos } from "@/lib/videos"

import cu1 from "@/public/images/cu1.jpg"
import cu2 from "@/public/images/cu2.jpg"
import cu3 from "@/public/images/cu3.jpg"
import cu4 from "@/public/images/cu4.jpg"
import cu5 from "@/public/images/cu5.jpg"
import cu6 from "@/public/images/cu6.jpg"
import cu7 from "@/public/images/cu7.jpg"
import cu8 from "@/public/images/cu8.jpg"
import cu9 from "@/public/images/cu9.jpg"
import cu10 from "@/public/images/cu10.jpg"
import cu11 from "@/public/images/cu11.jpg"
import cu12 from "@/public/images/cu12.jpg"

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
      stylist: "Ines",
      image: cu1,
    },
    {
      id: 2,
      category: "cuts",
      title: "Moderner Bob",
      description: "Eleganter Präzisionsschnitt mit subtilen Stufen",
      likes: 89,
      stylist: "Ines",
      image: cu2,
    },
    {
      id: 3,
      category: "events",
      title: "Braut-Hochsteckfrisur",
      description: "Elegante Hochzeitsfrisur mit botanischen Akzenten",
      likes: 156,
      stylist: "Ines",
      image: cu3,
    },
    {
      id: 4,
      category: "color",
      title: "Blond Ombrė",
      description: "Kräftiger Smaragd-Verlauf mit natürlichem Ansatz",
      likes: 203,
      stylist: "Ines",
      image: cu4,
    },
   
    {
      id: 6,
      category: "events",
      title: "Abschlussball-Glamour",
      description: "Hollywood-Wellen mit goldenen Highlights",
      likes: 178,
      stylist: "Ines",
      image: cu6,
    },
    {
      id: 7,
      category: "color",
      title: "Kupfer-Highlights",
      description: "Satte Kupfertöne mit dimensionaler Tiefe",
      likes: 112,
      stylist: "Ines",
      image: cu7,
    },
    {
      id: 8,
      category: "cuts",
      title: "Pixie-Perfektion",
      description: "Kantiger Kurzhaarschnitt mit texturiertem Styling",
      likes: 145,
      stylist: "Ines",
      image: cu8,
    },
    {
      id: 9,
      category: "events",
      title: "Festival-Zöpfe",
      description: "Boho-Flechtfrisur mit farbigen Akzenten",
      likes: 167,
      stylist: "Ines",
      image: cu9,
    },
    {
      id: 10,
      category: "color",
      title: "Platinblond",
      description: "Eisblonde Verwandlung mit Toner",
      likes: 189,
      stylist: "Ines",
      image: cu10,
    },
    {
      id: 11,
      category: "cuts",
      title: "Shag-Revival",
      description: "70er-inspirierter Shag mit modernem Twist",
      likes: 134,
      stylist: "Ines",
      image: cu11,
    },
    {
      id: 12,
      category: "events",
      title: "Roter Teppich bereit",
      description: "Elegante Hochsteckfrisur für besondere Anlässe",
      likes: 198,
      stylist: "Ines",
      image: cu12,
    },
  ]

  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  const instagramReels = [
    {
      id: 1,
      title: "Haar-Verwandlung",
      views: "12.5K",
      videoSrc: videos.hairTransformation1,
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 2,
      title: "Styling-Prozess",
      views: "8.9K",
      videoSrc: videos.stylingProcess1,
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 3,
      title: "Vorher & Nachher",
      views: "15.2K",
      videoSrc: videos.beforeAfter1,
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 4,
      title: "Haar-Styling Zauber",
      views: "6.7K",
      videoSrc: videos.stylingMagic1,
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
  ]

  const instagramReels1 = [
    {
      id: 1,
      title: "Haar-Verwandlung",
      views: "12.5K",
      videoSrc: videos.hairTransformation2,
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 2,
      title: "Styling-Prozess",
      views: "8.9K",
      videoSrc: videos.stylingProcess2,
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 3,
      title: "Vorher & Nachher",
      views: "15.2K",
      videoSrc: videos.beforeAfter2,
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
    {
      id: 5,
      title: "Haar-Styling Zauber",
      views: "6.7K",
      videoSrc: videos.stylingMagic2,
      thumbnail: "/placeholder.svg?height=300&width=200",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-800 font-orbitron">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white px-2 sm:px-0">
              Unsere Arbeiten
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              Erleben Sie die Magie, die wir jeden Tag schaffen. Von subtilen Veränderungen bis zu dramatischen Verwandlungen.
            </p>
          </div>
        </div>
      </section>

      {/* First Instagram Reels Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Instagram className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-white" />
            <p className="text-lg sm:text-xl text-gray-300 px-4 sm:px-0">
              Schauen Sie unseren Stylisten dabei zu, wie sie ihre Magie in Echtzeit wirken
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {instagramReels1.map((reel) => (
              <Card
                key={reel.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer bg-gray-800"
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
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${playingVideos[reel.id] ? 'opacity-0' : 'opacity-80'}`}>
                        <div className="w-0 h-0 border-l-[6px] sm:border-l-[8px] border-l-gray-800 border-t-[4px] sm:border-t-[6px] border-t-transparent border-b-[4px] sm:border-b-[6px] border-b-transparent ml-0.5 sm:ml-1"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                      <p className="text-white text-xs sm:text-sm font-medium mb-1">{reel.title}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 text-white mr-1" />
                          <span className="text-white text-xs">{reel.views} Aufrufe</span>
                        </div>
                        <div className="text-white text-xs hidden xs:block">
                          {playingVideos[reel.id] ? 'Läuft automatisch' : 'Autoplay'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button
              size="lg"
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 sm:px-8 font-orbitron text-sm sm:text-base"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-white" />
              Folgen Sie @SalonBadLaasphe
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-800 border-b border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`font-orbitron text-xs sm:text-sm ${
                  activeFilter === filter.id
                    ? "bg-gray-700 text-white"
                    : "border-gray-600 text-gray-300 hover:bg-gray-700"
                } px-3 sm:px-6 py-1.5 sm:py-2 rounded-full transition-all duration-300`}
              >
                <Filter className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-white" />
                {filter.label}
                <Badge className="ml-1 sm:ml-2 bg-gray-600 text-gray-100 font-orbitron text-xs">
                  {filter.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border-2 border-gray-700 hover:border-gray-600 bg-gray-800"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                          <span className="text-xs sm:text-sm">{item.likes}</span>
                        </div>
                        <div className="flex space-x-1 sm:space-x-2">
                          <Button size="sm" variant="ghost" className="text-white hover:text-gray-300 p-1 h-6 w-6 sm:h-8 sm:w-8">
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-white hover:text-gray-300 p-1 h-6 w-6 sm:h-8 sm:w-8">
                            <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-gray-700 text-gray-100 font-orbitron text-xs">
                    von Ines
                  </Badge>
                </div>
                <CardContent className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Second Instagram Reels Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Instagram className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-white" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
              Hinter den Kulissen
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 px-4 sm:px-0">
              Schauen Sie unseren Stylisten dabei zu, wie sie ihre Magie in Echtzeit wirken
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {instagramReels.map((reel) => (
              <Card
                key={reel.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer bg-gray-800"
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
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${playingVideos[reel.id] ? 'opacity-0' : 'opacity-80'}`}>
                        <div className="w-0 h-0 border-l-[6px] sm:border-l-[8px] border-l-gray-800 border-t-[4px] sm:border-t-[6px] border-t-transparent border-b-[4px] sm:border-b-[6px] border-b-transparent ml-0.5 sm:ml-1"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                      <p className="text-white text-xs sm:text-sm font-medium mb-1">{reel.title}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 text-white mr-1" />
                          <span className="text-white text-xs">{reel.views} Aufrufe</span>
                        </div>
                        <div className="text-white text-xs hidden xs:block">
                          {playingVideos[reel.id] ? 'Läuft automatisch' : 'Autoplay'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button
              size="lg"
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 sm:px-8 font-orbitron text-sm sm:text-base"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-white" />
              Folgen Sie @SalonBadLaasphe
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white px-2 sm:px-0">
            Bereit für Ihren großen Auftritt?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4 sm:px-0">
            Lassen Sie uns Ihre nächste atemberaubende Verwandlung schaffen, die galerie-würdig ist!
          </p>
          <Button
            size="lg"
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 sm:px-8 font-orbitron text-sm sm:text-base"
          >
            <Camera className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-white" />
            Buchen Sie Ihre Verwandlung
          </Button>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}