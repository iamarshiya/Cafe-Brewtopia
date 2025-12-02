import { useState } from "react";
import { Button } from "./ui/button";
import { Send, Instagram, Facebook, Twitter } from "lucide-react";
import { toast } from "../hooks/use-toast";
const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
];
const Contact = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            toast({
                title: "Welcome to Our Circle",
                description: "You've been added to our exclusive correspondence list.",
            });
            setEmail("");
            setIsLoading(false);
        }, 1000);
    };
    return (<section id="contact" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-foreground blur-3xl"/>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary-foreground blur-3xl"/>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Content */}
          <span className="inline-block px-6 py-2 border border-primary-foreground/30 text-primary-foreground/80 text-xs tracking-[0.3em] uppercase mb-6">
            Stay Connected
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-6">
            Join Our Inner Circle
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Receive exclusive invitations to private tastings, seasonal offerings, and distinguished events.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-16">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" required className="flex-1 h-14 px-6 bg-transparent border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/60 transition-all duration-500 text-sm tracking-wide"/>
            <Button type="submit" variant="outline" size="xl" disabled={isLoading} className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground">
              {isLoading ? ("Subscribing...") : (<>
                  Subscribe
                  <Send className="w-4 h-4"/>
                </>)}
            </Button>
          </form>

          {/* Divider */}
          <div className="w-24 h-px bg-primary-foreground/20 mx-auto mb-10"/>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <span className="text-primary-foreground/50 text-xs tracking-[0.2em] uppercase">Follow</span>
            {socialLinks.map((social) => (<a key={social.label} href={social.href} aria-label={social.label} className="w-12 h-12 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:border-primary-foreground/50 hover:text-primary-foreground transition-all duration-500">
                <social.icon className="w-5 h-5"/>
              </a>))}
          </div>
        </div>
      </div>
    </section>);
};
export default Contact;
