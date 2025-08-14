import React from "react";

const Hero = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById("consultation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Study in the <span className="highlight">UK</span> with
              <span className="highlight"> 100% Free</span> Online Expert Guidance
            </h1>
            <p>
              We provide completely free, Online, personalized support to students from
              Asia and Africa who want to study in the United Kingdom. From
              university applications to visa guidance, all at the comfort of your home and time.
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={scrollToConsultation}
              >
                📞 Book Free Consultation
              </button>
              <a href="#about" className="btn btn-secondary">
                Learn More About Us
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Students studying - UK Education Journey"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "20px",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
