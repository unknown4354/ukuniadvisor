import React from "react";

const TrustFactors = () => {
  const trustFactors = [
    {
      icon: "🏆",
      title: "British Council Certified Counsellors",
      description: "accurate and ethical guidance"
    },
    {
      icon: "🎓",
      title: "UK‑Educated Leadership",
      description: "With lived experience"
    },
    {
      icon: "📅",
      title: "Over two decades",
      description: "of counselling experience"
    },
    {
      icon: "🆓",
      title: "Free Services",
      description: "No fees. No confusion. Just honest, expert guidance."
    },
    {
      icon: "🎯",
      title: "100% Focus on the UK",
      description: "Online guidance from the comfort of your home, at a time that suits you"
    },
    {
      icon: "✅",
      title: "99% Success Rate",
      description: "in admissions and visa approvals"
    }
  ];

  return (
    <section className="trust-factors">
      <div className="container">
        <div className="section-header">
                      <h2>Why Students Trust UkUniAdviser</h2>
          <div className="underline" />
        </div>

        <div className="trust-hero-image">
          <img
            src="https://images.unsplash.com/photo-1520975922291-9cd175dc1be7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Professional Education Consultancy in the UK"
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "20px",
              marginBottom: "40px",
              boxShadow: "0 15px 25px rgba(0,0,0,0.1)"
            }}
          />
        </div>

        <div className="trust-grid">
          {trustFactors.map((factor, index) =>
            <div key={index} className="trust-card">
              <div className="trust-icon">
                {factor.icon}
              </div>
              <h3>
                {factor.title}
              </h3>
              <p>
                {factor.description}
              </p>
            </div>
          )}
        </div>

        <div className="mission-statement">
          <div className="mission-content">
            <h3>📌 Our Mission</h3>
            <p className="mission-text">
              Making British Higher Education accessible, affordable, and achievable for every deserving student through free Online, personalized, and Ethical counselling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustFactors;
