import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: gallery1,
      title: "Performance Beast",
      category: "Engine Tuning"
    },
    {
      src: gallery2,
      title: "Street Demon",
      category: "Full Build"
    },
    {
      src: gallery3,
      title: "Neon Dreams",
      category: "Lighting & Wraps"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-carbon">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Our <span className="bg-gradient-neon bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Witness the transformation. Each build tells a story of power, precision, and passion.
          </p>
        </div>

        {/* Featured Image Slider */}
        <div className="relative max-w-6xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative aspect-video rounded-2xl overflow-hidden group">
            <img 
              src={images[currentImage].src}
              alt={images[currentImage].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            
            {/* Image Info */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{images[currentImage].title}</h3>
              <p className="text-neon-blue">{images[currentImage].category}</p>
            </div>

            {/* Zoom Icon */}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button size="icon" variant="secondary" className="bg-background/20 backdrop-blur-sm">
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-all duration-300"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-all duration-300"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center mt-6 space-x-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  currentImage === index 
                    ? "border-neon-red shadow-neon" 
                    : "border-border hover:border-neon-red/50"
                }`}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setCurrentImage(index)}
            >
              <img 
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white font-semibold">{image.title}</h4>
                <p className="text-neon-blue text-sm">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;