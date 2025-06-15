import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Your Trusted Advisor for British Education</h2>
            <p>
              At UKuniadvisor, we specialize exclusively in guiding students to
              pursue quality education in the United Kingdom — and we've been
              doing it with integrity, experience, and results for over 20
              years.
            </p>
            <p>
              Founded and led by a British Council Certified Education
              Counsellor with two postgraduate degrees from the UK — a PGDBM
              from Cardiff University and an MSc in International Business from
              the University of Surrey — our consultancy is built on deep
              personal experience and professional expertise.
            </p>
            <p>
              Our founder's journey from India to the UK and back gave us a
              firsthand understanding of the challenges students face when
              applying, what universities look for, how to settle in the UK as
              an international student, and how British education can shape a
              global career.
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
              <p>No fees, no confusion - just honest expert guidance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
