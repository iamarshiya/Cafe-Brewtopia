import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingBag, X, Plus, Minus } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { items, total, itemCount, removeFromCart, updateQuantity, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCheckout = () => {
    const user = localStorage.getItem("brewtopia_user");
    if (!user) {
      navigate("/auth", { state: { from: "/checkout" } });
    } else {
      // For now, just show success
      alert(`Order total: $${total}. Payment integration coming soon!`);
      clearCart();
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-foreground hover:text-primary transition-colors duration-500"
        aria-label="Shopping cart"
      >
        <ShoppingBag className="w-5 h-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-card border border-border shadow-gold z-50">
          <div className="p-4 border-b border-border">
            <h3 className="font-serif text-lg text-card-foreground">Your Order</h3>
          </div>

          {items.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground text-sm">
              Your cart is empty
            </div>
          ) : (
            <>
              <div className="max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="p-4 border-b border-border/50 flex gap-3">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm text-card-foreground truncate">{item.name}</h4>
                      <p className="text-primary text-sm">${item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 border border-border flex items-center justify-center hover:border-primary transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 border border-border flex items-center justify-center hover:border-primary transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-border">
                <div className="flex justify-between mb-4">
                  <span className="text-muted-foreground text-sm uppercase tracking-wider">Total</span>
                  <span className="font-serif text-xl text-primary">${total}</span>
                </div>
                <Button variant="hero" size="lg" className="w-full" onClick={handleCheckout}>
                  Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
