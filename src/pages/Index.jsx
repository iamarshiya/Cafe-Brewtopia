import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedDrinks from "@/components/FeaturedDrinks";
import About from "@/components/About";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Brewtopia - Artisan Coffee Shop in Portland | Fresh Brews & Warm Community</title>
        <meta
          name="description"
          content="Discover Brewtopia, Portland's coziest artisan coffee shop. Enjoy handcrafted espresso drinks, fresh pastries, and a welcoming atmosphere. Visit us downtown!"
        />
        <meta
          name="keywords"
          content="coffee shop, artisan coffee, Portland cafe, espresso, latte, cold brew, breakfast, pastries"
        />
        <link rel="canonical" href="https://brewtopia.cafe" />

        {/* Open Graph */}
        <meta property="og:title" content="Brewtopia - Artisan Coffee Shop in Portland" />
        <meta
          property="og:description"
          content="Your neighborhood spot for exceptional coffee and warm community vibes."
        />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CafeOrCoffeeShop",
            name: "Brewtopia",
            description:
              "Artisan coffee shop in downtown Portland offering handcrafted espresso drinks and fresh pastries",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Coffee Lane",
              addressLocality: "Portland",
              addressRegion: "OR",
              postalCode: "97201",
            },
            telephone: "(503) 555-BREW",
            openingHours: ["Mo-Fr 06:30-20:00", "Sa 07:00-21:00", "Su 08:00-18:00"],
            priceRange: "$$",
            servesCuisine: "Coffee, Pastries, Breakfast",
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <FeaturedDrinks />
        <About />
        <Location />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
import React from "react";