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
              Study in the <span className="highlight-uk">UK</span> with
              <span className="highlight-free"> 100% Free</span> online expert guidance
            </h1>
            <p>
              We provide completely free, online, personalized support to students from
              Asia and Africa who wish to study in the United Kingdom. From
              University Applications to visa guidance—delivered from the comfort of your home, at a time that suits you.
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
              src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="UK University Campus - Oxford University"
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
