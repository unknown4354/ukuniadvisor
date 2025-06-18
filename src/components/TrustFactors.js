import React from "react";

const TrustFactors = () => {
  const trustFactors = [
    {
      icon: "🏆",
      title: "British Council Certified",
      description: "for accurate and ethical guidance"
    },
    {
      icon: "🎓",
      title: "UK-educated leadership",
      description: "with lived experience"
    },
    {
      icon: "📅",
      title: "Over two decades",
      description: "of counselling experience"
    },
    {
      icon: "🆓",
      title: "Free services",
      description: "supported by our UK institutional partners"
    },
    {
      icon: "🎯",
      title: "100% focus on UK",
      description: "not distracted by other destinations"
    },
    {
      icon: "✅",
      title: "High success rate",
      description: "in admissions and visa approvals"
    }
  ];

  return (
    <section className="trust-factors">
      <div className="container">
        <div className="section-header">
          <h2>Why Students Trust Us</h2>
          <div className="underline" />
        </div>

        <div className="trust-hero-image">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Professional Education Consultancy"
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
              To make British higher education accessible, affordable, and
              achievable for every deserving student — regardless of background
              — through free, personalized, and ethical counselling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustFactors;
