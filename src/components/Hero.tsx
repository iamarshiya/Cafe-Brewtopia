import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-coffee.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cozy coffee shop interior with steaming latte"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6 animate-fade-in">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm text-secondary-foreground">Downtown Portland</span>
          </div>

          {/* Heading */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Where Every Cup{" "}
            <span className="text-gradient">Tells a Story</span>
          </h1>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Discover the perfect blend of artisan coffee, freshly baked treats, and warm community vibes at Brewtopia.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" className="group">
              Explore Our Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Find Us
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <p className="text-2xl md:text-3xl font-serif text-foreground">5+</p>
              <p className="text-sm text-muted-foreground">Years Brewing</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-serif text-foreground">50k+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-serif text-foreground">4.9</p>
              <p className="text-sm text-muted-foreground">Star Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block animate-float">
        <div className="w-20 h-20 rounded-full bg-accent/20 blur-xl" />
      </div>
    </section>
  );
};

export default Hero;
