"use client";

import { useState, useEffect } from "react";
import FullLogoColored from "@/icons/Logo/FullLogoColored";
import FullLogoWhite from "@/icons/Logo/FullLogoWhite";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero section is min-h-screen, so switch logo when scrolled past viewport height
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsScrolled(scrollY > viewportHeight * 0.2); // Start transition at 80% of viewport
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 md:h-20">
          <div className="transition-opacity duration-300">
            {isScrolled ? (
              <FullLogoColored width={280} />
            ) : (
              <FullLogoWhite width={280} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
