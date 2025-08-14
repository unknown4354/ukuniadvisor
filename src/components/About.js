import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="about-hero-image">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="UK University Campus"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "15px",
                  marginBottom: "30px",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
              />
            </div>
                         <h2>Your Trusted Online Partner for British Higher Education</h2>
            <p>
              At UkUniAdviser, we specialize exclusively in guiding students to
              pursue quality education in the United Kingdom—and we've been
              doing it with integrity, experience, and results for over 20
              years.
            </p>
            <p>
              Founded and led by British Council Certified Counsellors with postgraduate degrees from the UK—including a PGDBM from Cardiff University and an MSc in International Business from the University of Surrey—our consultancy is built on deep personal experience and professional expertise.
            </p>
            <p>
              Our online guidance brings expert counselling to you—from the comfort of your home, at a time that suits you—with a firsthand understanding of the challenges students face when applying, what Universities look for, how to settle in the UK as an international student, and how British education can shape a global career.
            </p>
          </div>
          <div className="about-features">
            <div className="feature-item">
              <div className="icon">🎓</div>
              <h3>20+ Years Experience</h3>
              <p>
                Over two decades of helping students achieve their UK education
                dreams
              </p>
            </div>
            <div className="feature-item">
              <div className="icon">🏆</div>
              <h3>British Council Certified</h3>
              <p>
                Officially certified for accurate and ethical education guidance
              </p>
            </div>
            <div className="feature-item">
              <div className="icon">🎯</div>
              <h3>UK-Focused Expertise</h3>
              <p>
                100% focus on UK education - not distracted by other
                destinations
              </p>
            </div>
            <div className="feature-item">
              <div className="icon">💯</div>
              <h3>100% Free Services</h3>
              <p>No Fees. No Confusion. Just Honest Expert Guidance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
