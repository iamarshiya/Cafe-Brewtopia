import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-coffee.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Elegant coffee house interior with vintage ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/40 mb-8 animate-fade-in">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/80 tracking-[0.2em] uppercase">Est. 2019 • Portland</span>
          </div>

          {/* Heading */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-tight mb-8 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Where Tradition{" "}
            <span className="text-primary italic">Meets Excellence</span>
          </h1>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed animate-fade-in font-light"
            style={{ animationDelay: "0.2s" }}
          >
            An intimate sanctuary for connoisseurs of fine coffee, refined conversation, and timeless elegance.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" className="group">
              View Our Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
            </Button>
            <Button variant="elegant" size="xl">
              Make a Reservation
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <p className="text-3xl md:text-4xl font-serif text-primary">V</p>
              <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mt-1">Years of Excellence</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif text-primary">L</p>
              <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mt-1">Thousand Served</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif text-primary">★</p>
              <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mt-1">Premium Quality</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default Hero;
