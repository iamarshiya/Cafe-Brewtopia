import { Heart, Users, Award, Leaf } from "lucide-react";
import cafeInterior from "../assets/cafe-interior.jpg";
const values = [
    {
        icon: Heart,
        title: "Heritage",
        description: "Time-honored techniques passed through generations of master roasters.",
    },
    {
        icon: Users,
        title: "Exclusivity",
        description: "An intimate gathering place for those who appreciate the finer things.",
    },
    {
        icon: Award,
        title: "Provenance",
        description: "Single-estate beans from the world's most distinguished growing regions.",
    },
    {
        icon: Leaf,
        title: "Sustainability",
        description: "Committed to ethical sourcing and environmental stewardship.",
    },
];
const About = () => {
    return (<section id="about" className="py-24 md:py-32 gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/3] overflow-hidden border border-border shadow-gold">
              <img src={cafeInterior} alt="Elegant Brewtopia interior with vintage ambiance and refined patrons" className="w-full h-full object-cover"/>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-card border border-primary/30 p-8 max-w-xs hidden md:block shadow-gold">
              <p className="font-serif text-lg text-card-foreground italic leading-relaxed">
                "A sanctuary of sophistication in a world of haste."
              </p>
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase">— Portland Quarterly</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block px-6 py-2 border border-primary/40 text-primary text-xs tracking-[0.3em] uppercase mb-6">
              Our Legacy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-8 leading-tight">
              A Commitment to <span className="italic text-primary">Timeless Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed font-light">
              Established in 2019, Brewtopia was founded upon the principle that exceptional coffee deserves an equally exceptional setting. We created not merely a café, but a retreat for the discerning.
            </p>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-light">
              Today, we remain devoted to our founding vision—serving only the most distinguished single-origin coffees in an atmosphere of understated elegance.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value) => (<div key={value.title} className="flex items-start gap-4 p-5 border border-border/50 hover:border-primary/30 transition-colors duration-500">
                  <div className="w-10 h-10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary"/>
                  </div>
                  <div>
                    <h3 className="font-serif text-foreground mb-1">{value.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>))}
            </div>
          </div>
        </div>
      </div>
    </section>);
};
export default About;
