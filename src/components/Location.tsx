import { Clock, MapPin, Phone, Wifi, Car, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Monday – Friday", time: "7:00 AM – 9:00 PM" },
  { day: "Saturday", time: "8:00 AM – 10:00 PM" },
  { day: "Sunday", time: "9:00 AM – 7:00 PM" },
];

const amenities = [
  { icon: Wifi, label: "Private WiFi" },
  { icon: Car, label: "Valet Available" },
  { icon: CreditCard, label: "All Cards Accepted" },
];

const Location = () => {
  return (
    <section id="location" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-6 py-2 border border-primary/40 text-primary text-xs tracking-[0.3em] uppercase mb-6">
            Visit Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            An Invitation to <span className="italic text-primary">Indulge</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            Discover our establishment in the distinguished Pearl District of Portland.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Map Placeholder */}
          <div className="animate-fade-in">
            <div className="aspect-video lg:aspect-square overflow-hidden border border-border shadow-gold">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.2747988285!2d-122.6784!3d45.5152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMwJzU0LjciTiAxMjLCsDQwJzQyLjIiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-1000"
                title="Brewtopia location on map"
              />
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Address Card */}
            <div className="bg-background border border-border p-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-3">Address</h3>
                  <p className="text-muted-foreground font-light">
                    123 Pearl Lane<br />
                    Pearl District, Portland, OR 97201
                  </p>
                  <Button variant="link" className="px-0 mt-3 text-xs tracking-[0.15em] uppercase">
                    Get Directions →
                  </Button>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-background border border-border p-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-foreground mb-4">Hours of Operation</h3>
                  <div className="space-y-3">
                    {hours.map((item) => (
                      <div key={item.day} className="flex justify-between text-sm">
                        <span className="text-muted-foreground font-light">{item.day}</span>
                        <span className="text-foreground">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-background border border-border p-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-3">Reservations</h3>
                  <p className="text-muted-foreground font-light mb-1">(503) 555-BREW</p>
                  <p className="text-muted-foreground font-light">reservations@brewtopia.cafe</p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="flex flex-wrap gap-4">
              {amenities.map((amenity) => (
                <div
                  key={amenity.label}
                  className="flex items-center gap-2 px-5 py-3 border border-border text-muted-foreground text-xs tracking-[0.1em] uppercase"
                >
                  <amenity.icon className="w-4 h-4 text-primary" />
                  {amenity.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
