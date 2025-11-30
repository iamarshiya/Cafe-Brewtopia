import { Clock, MapPin, Phone, Wifi, Car, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Monday - Friday", time: "6:30 AM - 8:00 PM" },
  { day: "Saturday", time: "7:00 AM - 9:00 PM" },
  { day: "Sunday", time: "8:00 AM - 6:00 PM" },
];

const amenities = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Car, label: "Parking" },
  { icon: CreditCard, label: "Cards Accepted" },
];

const Location = () => {
  return (
    <section id="location" className="py-20 md:py-32 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Visit Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
            Find Your New Favorite Spot
          </h2>
          <p className="text-muted-foreground text-lg">
            We are conveniently located in the heart of downtown Portland. Stop by and experience the Brewtopia difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map Placeholder */}
          <div className="animate-fade-in">
            <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-warm bg-secondary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.2747988285!2d-122.6784!3d45.5152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMwJzU0LjciTiAxMjLCsDQwJzQyLjIiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
                title="Brewtopia location on map"
              />
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Address Card */}
            <div className="bg-card p-6 rounded-2xl shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-card-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    123 Coffee Lane<br />
                    Downtown Portland, OR 97201
                  </p>
                  <Button variant="link" className="px-0 mt-2">
                    Get Directions →
                  </Button>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-card p-6 rounded-2xl shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-card-foreground mb-4">Hours</h3>
                  <div className="space-y-2">
                    {hours.map((item) => (
                      <div key={item.day} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className="text-foreground font-medium">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-card p-6 rounded-2xl shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-card-foreground mb-2">Contact</h3>
                  <p className="text-muted-foreground mb-1">(503) 555-BREW</p>
                  <p className="text-muted-foreground">hello@brewtopia.cafe</p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="flex flex-wrap gap-3">
              {amenities.map((amenity) => (
                <div
                  key={amenity.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm"
                >
                  <amenity.icon className="w-4 h-4" />
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
