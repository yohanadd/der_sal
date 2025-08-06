// "use client"

// import { Button } from "@/components/ui/button"
// import { Sparkles, Calendar } from "lucide-react"

// export function HeroSection() {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed",
//         }}
//       >
//         <div className="absolute inset-0 gradient-hero"></div>
//       </div>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 z-10 pointer-events-none">
//         <img
//           src="/placeholder.svg?height=64&width=64"
//           alt="Schwebende Schere"
//           className="absolute top-20 right-20 w-16 h-16 opacity-60 scissors-float"
//         />
//         <img
//           src="/placeholder.svg?height=48&width=48"
//           alt="Schwebendes Blatt"
//           className="absolute top-32 left-16 w-12 h-12 opacity-50 leaf-float"
//         />
//         <img
//           src="/placeholder.svg?height=80&width=80"
//           alt="Schwebendes Blatt"
//           className="absolute bottom-32 right-32 w-20 h-20 opacity-40 leaf-sway"
//         />
//         <img
//           src="/placeholder.svg?height=48&width=48"
//           alt="Schwebende Schere"
//           className="absolute bottom-20 left-20 w-12 h-12 opacity-50 scissors-float"
//           style={{ animationDelay: "2s" }}
//         />
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-4 z-20 relative">
//         <div className="max-w-4xl mx-auto text-center text-white">
//           <div className="mb-8">
//             <Sparkles className="w-12 h-12 text-jungle-gold mx-auto mb-4 leaf-float" />
//             <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
//               Dschungel-Vibes & <span className="text-jungle-gold">Haar-Magie</span>
//               <br />
//               in Bad Laasphe
//             </h1>
//             <p className="font-body text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
//               Erleben Sie die perfekte Mischung aus urbaner Eleganz und natürlicher Schönheit. Wo jeder Schnitt eine
//               Geschichte erzählt und jeder Style Ihre wilde Seite widerspiegelt.
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
//             <Button
//               size="lg"
//               className="gradient-gold text-jungle-black font-semibold text-lg px-8 py-4 shadow-gold hover:scale-105 transition-all duration-300 group"
//             >
//               <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
//               Termin Buchen
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-body font-semibold text-lg px-8 py-4 transition-all duration-300 bg-transparent"
//             >
//               Unsere Arbeiten
//             </Button>
//           </div>

//           <div className="mt-12 flex items-center justify-center space-x-8 text-white/80">
//             <div className="text-center">
//               <p className="font-heading text-2xl font-bold text-jungle-gold">500+</p>
//               <p className="font-body text-sm">Wilde Verwandlungen</p>
//             </div>
//             <div className="w-px h-12 bg-white/30"></div>
//             <div className="text-center">
//               <p className="font-heading text-2xl font-bold text-jungle-gold">5★</p>
//               <p className="font-body text-sm">Google Bewertungen</p>
//             </div>
//             <div className="w-px h-12 bg-white/30"></div>
//             <div className="text-center">
//               <p className="font-heading text-2xl font-bold text-jungle-gold">8+</p>
//               <p className="font-body text-sm">Jahre Erfahrung</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
//         <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-jungle-gold rounded-full mt-2 animate-bounce"></div>
//         </div>
//       </div>
//     </section>
//   )
// }
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar } from "lucide-react";

export function HeroSection () {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/hero-salon.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img 
          src="/images/floating-scissors.png" 
          alt="Floating scissors" 
          className="absolute top-20 right-20 w-16 h-16 opacity-60 scissors-float"
        />
        <img 
          src="/images/floating-leaf.png" 
          alt="Floating leaf" 
          className="absolute top-32 left-16 w-12 h-12 opacity-50 leaf-float"
        />
        <img 
          src="/images/floating-leaf.png" 
          alt="Floating leaf" 
          className="absolute bottom-32 right-32 w-20 h-20 opacity-40 leaf-sway"
        />
        <img 
          src="/images/floating-scissors.png" 
          alt="Floating scissors" 
          className="absolute bottom-20 left-20 w-12 h-12 opacity-50 scissors-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <Sparkles className="w-12 h-12 text-jungle-gold mx-auto mb-4 leaf-float" />
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
              Jungle Vibes &{" "}
              <span className="text-jungle-gold">Hair Magic</span>
              <br />
              in Bad Laasphe
            </h1>
            <p className="font-body text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Experience the perfect blend of urban sophistication and natural beauty. 
              Where every cut tells a story and every style reflects your wild side.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              className="gradient-gold text-jungle-black font-semibold text-lg px-8 py-4 shadow-gold hover:scale-105 transition-all duration-300 group"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Book Your Wild Side
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-body font-semibold text-lg px-8 py-4 transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-8 text-white/80">
            <div className="text-center">
              <p className="text-3xl font-bold text-jungle-gold" style={{fontFamily: 'Playfair Display, serif'}}>500+</p>
              <p className="font-body text-sm">Wild Transformations</p>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-jungle-gold" style={{fontFamily: 'Playfair Display, serif'}}>5★</p>
              <p className="font-body text-sm">Google Reviews</p>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-jungle-gold" style={{fontFamily: 'Playfair Display, serif'}}>8+</p>
              <p className="font-body text-sm">Years of Magic</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-jungle-gold rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

// export default HeroSection;