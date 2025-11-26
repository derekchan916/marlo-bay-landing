"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import FullLogoColored from "@/icons/Logo/FullLogoColored";
import FullLogoWhite from "@/icons/Logo/FullLogoWhite";

interface HeaderProps {
  logoVariant?: "color" | "white" | "auto";
  handleScroll?: boolean;
}

export default function Header({
  logoVariant = "auto",
  handleScroll = true,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!handleScroll) {
      return;
    }

    const handleScrollEvent = () => {
      // Hero section is min-h-screen, so switch logo when scrolled past viewport height
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsScrolled(scrollY > viewportHeight * 0.2); // Start transition at 80% of viewport
    };

    // Check initial scroll position
    handleScrollEvent();

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, [handleScroll]);

  // Determine which logo to show
  const showColoredLogo =
    logoVariant === "color" ||
    (logoVariant === "auto" && handleScroll && isScrolled);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        showColoredLogo ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-base">
        <div className="flex items-center h-16 md:h-18">
          <Link
            className="transition-opacity duration-300 cursor-pointer"
            href="/"
          >
            {showColoredLogo ? (
              <FullLogoColored width={280} />
            ) : (
              <FullLogoWhite width={280} />
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
