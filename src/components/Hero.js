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
              <span className="highlight"> 100% Free</span> Expert Guidance
            </h1>
            <p>
              We provide completely free, personalized support to students from
              Asia and Africa who want to study in the United Kingdom. From
              university applications to visa guidance, we're here to make your
              UK education dream a reality.
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
            <div
              style={{
                width: "100%",
                height: "400px",
                background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "600",
                textAlign: "center",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
              }}
            >
              🎓 Your UK Education Journey Starts Here
              <br />
              📚 Top Universities Await You
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
