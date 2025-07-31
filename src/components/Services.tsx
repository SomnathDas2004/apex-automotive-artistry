import { Settings, Palette, Zap, Camera } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Settings className="h-12 w-12 text-neon-red" />,
      title: "Engine Tuning",
      description: "Unlock your engine's true potential with our precision tuning and performance upgrades.",
      features: ["ECU Remapping", "Turbo Upgrades", "Exhaust Systems", "Cold Air Intakes"]
    },
    {
      icon: <Palette className="h-12 w-12 text-neon-blue" />,
      title: "Body Wraps",
      description: "Transform your vehicle's appearance with premium vinyl wraps and custom graphics.",
      features: ["Color Change Wraps", "Chrome Deletes", "Racing Stripes", "Custom Graphics"]
    },
    {
      icon: <Zap className="h-12 w-12 text-neon-red" />,
      title: "Lighting Upgrades",
      description: "Illuminate the road ahead with cutting-edge LED and HID lighting solutions.",
      features: ["LED Headlights", "Underglow Kits", "Interior Ambient", "Custom Halos"]
    },
    {
      icon: <Camera className="h-12 w-12 text-neon-blue" />,
      title: "Custom Rims",
      description: "Complete your build with high-performance wheels that match your style.",
      features: ["Forged Wheels", "Custom Finishes", "Performance Tires", "Brake Upgrades"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Our <span className="bg-gradient-neon bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            From performance upgrades to aesthetic enhancements, we offer comprehensive modification services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group bg-card/50 backdrop-blur-sm border-border hover:border-neon-red/50 transition-all duration-500 hover:transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4 group-hover:animate-neon-pulse">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-neon-red transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-neon-red rounded-full mr-3 group-hover:animate-neon-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;