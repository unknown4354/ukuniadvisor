import React from "react";
import About from "../components/About";
import TrustFactors from "../components/TrustFactors";

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About UKuniadvisor</h1>
          <p>Your trusted partner for British higher education</p>
        </div>
      </section>

      <About />
      <TrustFactors />

      {/* Additional About Content */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              UKuniadvisor was born from a simple belief: every deserving
              student should have access to world-class British education,
              regardless of their background or financial situation.
            </p>
            <p>
              Our founder's journey from India to the UK - earning a PGDBM from
              Cardiff University and an MSc in International Business from the
              University of Surrey - gave us firsthand insight into the
              challenges international students face.
            </p>
            <p>
              Today, we've helped over 500 students achieve their UK education
              dreams, maintaining a 95% success rate while keeping our services
              completely free.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="our-team">
        <div className="container">
          <div className="section-header">
            <h2>Our Expertise</h2>
            <p>
              Led by certified professionals with deep UK education experience
            </p>
          </div>
          <div className="expertise-grid">
            <div className="expertise-item">
              <div className="icon">🎓</div>
              <h3>UK-Educated Leadership</h3>
              <p>
                Personal experience studying in Cardiff and Surrey universities
              </p>
            </div>
            <div className="expertise-item">
              <div className="icon">📜</div>
              <h3>British Council Certified</h3>
              <p>
                Official certification ensuring ethical and accurate guidance
              </p>
            </div>
            <div className="expertise-item">
              <div className="icon">🏆</div>
              <h3>20+ Years Experience</h3>
              <p>Two decades of helping students navigate UK education</p>
            </div>
            <div className="expertise-item">
              <div className="icon">🌍</div>
              <h3>Global Perspective</h3>
              <p>
                Understanding diverse student backgrounds from Asia and Africa
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
