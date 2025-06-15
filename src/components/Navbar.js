import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a
          href="#home"
          className="navbar-logo"
          onClick={() => scrollToSection("home")}
        >
          UK<span>uni</span>advisor
        </a>

        <ul
          className={`navbar-nav ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
        >
          <li>
            <a href="#about" onClick={() => scrollToSection("about")}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => scrollToSection("services")}>
              Services
            </a>
          </li>
          <li>
            <a href="#process" onClick={() => scrollToSection("process")}>
              Process
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </a>
          </li>
          <li className="theme-toggle-nav">
            <ThemeToggle />
          </li>
          <li>
            <a
              href="#consultation"
              onClick={() => scrollToSection("consultation")}
              className="btn btn-primary navbar-cta"
            >
              Book Consultation
            </a>
          </li>
        </ul>

        <div
          className={`navbar-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen &&
        <div
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />}
    </nav>
  );
};

export default Navbar;
