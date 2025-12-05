import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import CartDropdown from "@/components/CartDropdown";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#location", label: "Visit Us" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border border-primary flex items-center justify-center group-hover:bg-primary/10 transition-all duration-500">
              <Coffee className="w-5 h-5 text-primary" />
            </div>
            <span className="font-serif text-xl md:text-2xl text-foreground tracking-wide">Brewtopia</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-500 text-sm tracking-[0.15em] uppercase"
              >
                {link.label}
              </a>
            ))}
            <CartDropdown />
            <Link to="/auth">
              <Button variant="outline" size="lg">
                Sign In
              </Button>
            </Link>
            <Link to="/reserve">
              <Button variant="hero" size="lg">
                Reserve
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500",
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-6 pt-6 border-t border-border/30">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-500 text-sm tracking-[0.15em] uppercase"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link to="/auth" className="w-full mt-2">
              <Button variant="outline" size="lg" className="w-full">
                Sign In
              </Button>
            </Link>
            <Link to="/reserve" className="w-full mt-2">
              <Button variant="hero" size="lg" className="w-full">
                Reserve
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
