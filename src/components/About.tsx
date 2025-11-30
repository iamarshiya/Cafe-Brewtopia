import { Heart, Users, Award, Leaf } from "lucide-react";
import cafeInterior from "@/assets/cafe-interior.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion First",
    description: "Every cup is crafted with love and dedication to the perfect brew.",
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "More than a cafe—a gathering place for friends, creatives, and neighbors.",
  },
  {
    icon: Award,
    title: "Quality Beans",
    description: "Ethically sourced, single-origin beans roasted to perfection.",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    description: "Committed to eco-friendly practices from farm to cup.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-warm">
              <img
                src={cafeInterior}
                alt="Cozy Brewtopia cafe interior with warm lighting and happy customers"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-warm max-w-xs hidden md:block">
              <p className="font-serif text-lg text-card-foreground italic">
                "The best coffee in town, and the coziest atmosphere!"
              </p>
              <p className="text-sm text-muted-foreground mt-2">— Sarah M., Regular</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
              A Cup of Coffee, A World of Connection
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded in 2019, Brewtopia started as a dream to create more than just another coffee shop. We wanted to build a sanctuary where people could escape the rush, savor exceptional coffee, and connect with their community.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Today, we proudly serve hundreds of neighbors daily, each cup poured with the same passion and care as our very first brew.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
