import { Coffee } from "lucide-react";

const footerLinks = {
  explore: [
    { label: "Menu", href: "#menu" },
    { label: "About Us", href: "#about" },
    { label: "Locations", href: "#location" },
    { label: "Careers", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Coffee className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-2xl text-foreground">Brewtopia</span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-4">
              Crafting exceptional coffee experiences since 2019. Your neighborhood spot for quality brews and warm community.
            </p>
            <p className="text-sm text-muted-foreground">
              123 Coffee Lane, Downtown Portland, OR 97201
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-serif text-lg text-foreground mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-serif text-lg text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Brewtopia. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ☕ in Portland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
