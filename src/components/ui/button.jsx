import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 tracking-wider uppercase",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-gold rounded-none border border-primary/20",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-none",
        outline:
          "border border-primary bg-transparent text-primary hover:bg-primary/10 rounded-none",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-none border border-border",
        ghost: "hover:bg-primary/10 hover:text-primary rounded-none",
        link: "text-primary underline-offset-4 hover:underline",
        hero:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold hover:shadow-glow rounded-none border border-primary/30",
        warm:
          "bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none",
        elegant:
          "bg-transparent border border-foreground/30 text-foreground hover:border-primary hover:text-primary rounded-none tracking-[0.2em]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
