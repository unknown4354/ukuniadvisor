import React from "react";
import Hero from "../components/Hero";
import TrustFactors from "../components/TrustFactors";
import Testimonials from "../components/Testimonials";
import ConsultationForm from "../components/ConsultationForm";

const Home = () => {
  const keyServices = [
    {
      icon: "🎓",
      title: "University Applications",
      description:
        "Expert guidance for choosing and applying to the right UK Universities."
    },
    {
      icon: "📑",
      title: "Visa Support",
      description:
        "Complete assistance with UK student visa Applications and interviews."
    },
    {
      icon: "🎯",
      title: "Scholarship Guidance",
      description:
        "Help finding and applying for scholarships to reduce your costs."
    }
  ];

  return (
    <div className="home-page">
      <Hero />

      {/* Success Stories Section - Featured prominently */}
      <Testimonials />

      {/* Brief About Section */}
      <section className="home-about">
        <div className="container">
          <div className="home-about-content">
            <h2>Your Trusted Partner for UK Education</h2>
            <p>
              With over 20 years of experience and British Council
              certification, we provide completely free, online, expert guidance
              to students from Asia and Africa who want to study in the United
              Kingdom—from the comfort of their home, at a time that suits them.
            </p>
            <div className="home-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Students Helped</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Free Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Preview */}
      <section className="home-services">
        <div className="container">
          <div className="section-header">
            <h2>How We Help You</h2>
            <p>Our core services to make your UK education dream a reality.</p>
          </div>
          <div className="services-preview-grid">
            {keyServices.map((service, index) =>
              <div key={index} className="service-preview-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>
                  {service.title}
                </h3>
                <p>
                  {service.description}
                </p>
              </div>
            )}
          </div>
          <div className="home-services-cta">
            <a href="/services" className="btn btn-primary">
              View All Services
            </a>
          </div>
        </div>
      </section>

      <TrustFactors />

      {/* Success Stories Feature Section */}
      <section className="home-success-feature">
        <div className="container">
          <div className="section-header">
            <h2>🌟 Join Our Success Stories</h2>
            <p>
              Over 500+ students have achieved their UK education dreams with
              our guidance.
            </p>
          </div>
          <div className="success-highlight-grid">
            <div className="success-highlight-card">
              <div className="success-number">500+</div>
              <div className="success-label">Students Successfully Placed</div>
              <div className="success-detail">Across 50+ UK Universities</div>
            </div>
            <div className="success-highlight-card">
              <div className="success-number">99%</div>
              <div className="success-label">Success Rate</div>
              <div className="success-detail">Above industry average</div>
            </div>
            <div className="success-highlight-card">
              <div className="success-number">£2M+</div>
              <div className="success-label">Scholarships Secured</div>
              <div className="success-detail">
                For our students over 5 years
              </div>
            </div>
          </div>
          <div className="success-cta-buttons">
            <a href="/success-stories" className="btn btn-primary">
              🌟 View All Success Stories
            </a>
            <a href="/contact" className="btn btn-secondary">
              Start Your Success Journey
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your UK Education Journey?</h2>
            <p>
              Book a free consultation today and take the first step toward
              studying in the UK.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Book Free Consultation
              </a>
              <a href="/about" className="btn btn-secondary">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
