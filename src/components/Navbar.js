import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePage = path => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          UkUniAdviser
        </Link>

        <ul
          className={`navbar-nav ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
        >
          <li>
            <Link
              to="/about"
              className={isActivePage("/about") ? "active" : ""}
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={isActivePage("/services") ? "active" : ""}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/process"
              className={isActivePage("/process") ? "active" : ""}
              onClick={closeMobileMenu}
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              to="/success-stories"
              className={isActivePage("/success-stories") ? "active" : ""}
              onClick={closeMobileMenu}
            >
              Success Stories
            </Link>
          </li>
          <li className="theme-toggle-nav">
            <ThemeToggle />
          </li>
          <li>
            <Link
              to="/contact"
              className={`btn btn-primary navbar-cta ${isActivePage("/contact")
                ? "active"
                : ""}`}
              onClick={closeMobileMenu}
            >
              Book Consultation
            </Link>
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
        <div className="mobile-menu-overlay" onClick={closeMobileMenu} />}
    </nav>
  );
};

export default Navbar;
