import { Coffee, Leaf, Sparkles } from "lucide-react";
import latteArt from "@/assets/latte-art.jpg";
import icedCoffee from "@/assets/iced-coffee.jpg";
import pastryCoffee from "@/assets/pastry-coffee.jpg";

const drinks = [
  {
    id: 1,
    name: "The Signature",
    description: "Our distinguished espresso with velvety steamed milk, finished with artisan latte craftsmanship",
    price: "$12",
    image: latteArt,
    icon: Coffee,
    badge: "House Selection",
  },
  {
    id: 2,
    name: "Cold Reserve",
    description: "Slow-steeped for 24 hours, revealing subtle notes of dark chocolate and aged oak",
    price: "$14",
    image: icedCoffee,
    icon: Sparkles,
    badge: "Limited",
  },
  {
    id: 3,
    name: "The Continental",
    description: "Imported croissant paired with a meticulously crafted cappuccino",
    price: "$18",
    image: pastryCoffee,
    icon: Leaf,
    badge: "Morning Ritual",
  },
];

const FeaturedDrinks = () => {
  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-6 py-2 border border-primary/40 text-primary text-xs tracking-[0.3em] uppercase mb-6">
            The Collection
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            Curated with <span className="italic text-primary">Distinction</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Each creation is a testament to our unwavering commitment to excellence, crafted from the world's most exceptional beans.
          </p>
        </div>

        {/* Drinks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drinks.map((drink, index) => (
            <div
              key={drink.id}
              className="group relative bg-card border border-border overflow-hidden shadow-soft hover:shadow-gold transition-all duration-700 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                {/* Badge */}
                <span className="absolute top-4 left-4 px-4 py-1 bg-background/90 backdrop-blur-sm border border-primary/30 text-primary text-xs tracking-[0.15em] uppercase">
                  {drink.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-2xl text-card-foreground">{drink.name}</h3>
                  <div className="w-10 h-10 border border-primary/30 flex items-center justify-center">
                    <drink.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed font-light">
                  {drink.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-2xl font-serif text-primary">{drink.price}</span>
                  <button className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500">
                    Add to Order →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-primary hover:text-foreground text-xs tracking-[0.2em] uppercase transition-colors duration-500 group border-b border-primary/30 pb-2"
          >
            View Complete Collection
            <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDrinks;
