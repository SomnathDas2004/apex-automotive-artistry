import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-car.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modified Sports Car"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Transform
            </span>
            <br />
            <span className="text-foreground">Your Ride</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Unleash the beast within. Premium car modifications that turn heads and deliver heart-pounding performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-neon text-background hover:opacity-90 transition-all duration-300 text-lg px-8 py-4 animate-glow"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-border text-foreground hover:bg-accent transition-all duration-300 text-lg px-8 py-4"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-neon-red">500+</div>
              <div className="text-muted-foreground">Cars Modified</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-neon-blue">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-neon-red">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-red rounded-full mt-2 animate-neon-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;