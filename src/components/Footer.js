import React, { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setShowBackToTop(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Section */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <h3>
                UkUniAdviser
              </h3>
            </div>
            <p className="footer-tagline">
              Your Trusted Online Partner for UK Education
            </p>
            <p className="footer-description">
              Making British higher education accessible, affordable, and
              achievable for every deserving student through free, Online, personalized,
              and ethical counselling.
            </p>

            {/* Trust Badges */}
            <div className="trust-badges">
              <div className="badge">
                <span className="badge-icon">🏆</span>
                <span>British Council Certified</span>
              </div>
              <div className="badge">
                <span className="badge-icon">✅</span>
                <span>20+ Years Experience</span>
              </div>
              <div className="badge">
                <span className="badge-icon">🆓</span>
                <span>100% Free Service</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Our Services</a>
              </li>
              <li>
                <a href="#process">How It Works</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#consultation">Book Consultation</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <p className="contact-label">Phone Support</p>
                  <p className="contact-value">+91-XXXX-XXXX-XX</p>
                  <p className="contact-hours">8:00 AM – 10:30 PM (IST)</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <div className="contact-details">
                  <p className="contact-label">WhatsApp Chat</p>
                  <p className="contact-value">+91-XXXX-XXXX-XX</p>
                  <p className="contact-hours">8:00 AM – 12:00 PM (IST)</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <p className="contact-label">Email</p>
                  <p className="contact-value">info@ukuniadvisor.com</p>
                  <p className="contact-value">support@ukuniadvisor.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Hours */}
          <div className="footer-section">
            <h4>Support Hours</h4>
            <div className="support-schedule">
              <div className="schedule-item">
                <span className="day">Monday - Friday</span>
                <span className="time">8:00 AM - 10:30 PM</span>
              </div>
              <div className="schedule-item">
                <span className="day">Saturday - Sunday</span>
                <span className="time">9:00 AM - 8:00 PM</span>
              </div>
              <div className="schedule-item">
                <span className="day">Video Consultations</span>
                <span className="time">By appointment</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h5>Follow Us</h5>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <span>📘</span>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <span>🐦</span>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <span>💼</span>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <span>📷</span>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <span>📺</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} UkUniAdviser. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#disclaimer">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <span className="back-to-top-icon">↑</span>
      </button>
    </footer>
  );
};

export default Footer;
