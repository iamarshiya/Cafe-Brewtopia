import { Coffee, Leaf, Sparkles } from "lucide-react";
import latteArt from "@/assets/latte-art.jpg";
import icedCoffee from "@/assets/iced-coffee.jpg";
import pastryCoffee from "@/assets/pastry-coffee.jpg";

const drinks = [
  {
    id: 1,
    name: "Signature Latte",
    description: "Our award-winning espresso with velvety steamed milk and handcrafted latte art",
    price: "$5.50",
    image: latteArt,
    icon: Coffee,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Cold Brew Bliss",
    description: "Smooth, slow-steeped cold brew with hints of chocolate and caramel",
    price: "$4.75",
    image: icedCoffee,
    icon: Sparkles,
    badge: "Refreshing",
  },
  {
    id: 3,
    name: "Breakfast Combo",
    description: "Fresh croissant paired with a perfectly crafted cappuccino",
    price: "$8.50",
    image: pastryCoffee,
    icon: Leaf,
    badge: "Popular",
  },
];

const FeaturedDrinks = () => {
  return (
    <section id="menu" className="py-20 md:py-32 gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Favorites
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
            Crafted with Passion
          </h2>
          <p className="text-muted-foreground text-lg">
            Each cup is a masterpiece, carefully prepared by our skilled baristas using the finest beans from around the world.
          </p>
        </div>

        {/* Drinks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drinks.map((drink, index) => (
            <div
              key={drink.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                  {drink.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-xl text-card-foreground">{drink.name}</h3>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <drink.icon className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {drink.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif text-accent">{drink.price}</span>
                  <button className="text-sm font-medium text-primary hover:text-accent transition-colors">
                    Add to Order →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors group"
          >
            View Full Menu
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDrinks;
