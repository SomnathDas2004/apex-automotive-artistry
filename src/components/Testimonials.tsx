import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcus Rodriguez",
      vehicle: "BMW M4",
      rating: 5,
      text: "The team at Velocity Mods transformed my M4 into an absolute monster. The engine tune and body kit exceeded all my expectations. Professional service from start to finish.",
      image: "🏎️"
    },
    {
      name: "Sarah Chen",
      vehicle: "Audi S5",
      rating: 5,
      text: "Amazing work on my Audi! The custom wrap and lighting package turned heads everywhere I go. Their attention to detail is unmatched in the industry.",
      image: "🚗"
    },
    {
      name: "Jake Thompson",
      vehicle: "Mustang GT",
      rating: 5,
      text: "Best investment I've made for my car. The performance gains are incredible and the visual upgrades are stunning. These guys know what they're doing!",
      image: "🏁"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-neon-red rounded-full animate-neon-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-neon-blue rounded-full animate-neon-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            What Our <span className="bg-gradient-neon bg-clip-text text-transparent">Clients</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Don't just take our word for it. Here's what car enthusiasts say about their experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="bg-card/30 backdrop-blur-sm border-border hover:border-neon-red/50 transition-all duration-500 hover:transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.2 + 0.4}s` }}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-8 w-8 text-neon-red opacity-50" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-neon-red text-neon-red" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-neon flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-neon-blue">{testimonial.vehicle}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center animate-fade-in" style={{ animationDelay: "1s" }}>
          <div>
            <div className="text-3xl font-bold text-neon-red mb-2">5.0</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-neon-blue mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-neon-red mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-neon-blue mb-2">5Y</div>
            <div className="text-sm text-muted-foreground">Warranty Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;