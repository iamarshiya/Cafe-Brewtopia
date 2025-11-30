import { Coffee } from "lucide-react";

const footerLinks = {
  explore: [
    { label: "The Collection", href: "#menu" },
    { label: "Our Legacy", href: "#about" },
    { label: "Visit Us", href: "#location" },
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
    <footer className="bg-background border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-primary flex items-center justify-center">
                <Coffee className="w-5 h-5 text-primary" />
              </div>
              <span className="font-serif text-2xl text-foreground tracking-wide">Brewtopia</span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6 font-light leading-relaxed">
              A distinguished establishment dedicated to the art of exceptional coffee since 2019. Your sanctuary for refined taste and timeless elegance.
            </p>
            <p className="text-xs text-muted-foreground tracking-[0.1em] uppercase">
              123 Pearl Lane, Pearl District<br />
              Portland, OR 97201
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-serif text-lg text-foreground mb-6">Explore</h3>
            <ul className="space-y-4">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-500 text-sm font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-serif text-lg text-foreground mb-6">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-500 text-sm font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-[0.1em] uppercase">
            © {currentYear} Brewtopia. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground italic">
            Crafted with distinction in Portland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
