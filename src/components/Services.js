import React from "react";

const Services = () => {
  const services = [
    {
      icon: "🎓",
      title: "UK University Application Assistance",
      description:
        "Choosing the right university and course is the first step.",
      features: [
        "Identify the best universities based on your goals and budget",
        "Understand entry requirements",
        "Apply to multiple UK universities with strong success rates",
        "Track your application and respond to offers"
      ]
    },
    {
      icon: "✍️",
      title: "Personal Statement & SOP Guidance",
      description:
        "A strong personal statement can make your application stand out.",
      features: [
        "Brainstorming sessions",
        "Review and editing support",
        "Final proofing to match UK academic standards"
      ]
    },
    {
      icon: "📑",
      title: "Visa & Immigration Support",
      description: "Applying for a UK student visa (Tier 4/Student Route)?",
      features: [
        "Visa application documentation",
        "CAS letter and financial requirements",
        "Visa interview tips and mock interviews",
        "Common mistakes to avoid"
      ]
    },
    {
      icon: "🎯",
      title: "Scholarship & Funding Advice",
      description: "Don't miss out on opportunities to reduce your cost.",
      features: [
        "List of available UK scholarships",
        "Help with scholarship applications and documents",
        "Advice on part-time work rules and financial planning"
      ]
    },
    {
      icon: "🧳",
      title: "Pre-Departure & Arrival Support",
      description: "We prepare you for a smooth transition to the UK.",
      features: [
        "Accommodation guidance (university halls/private housing)",
        "Flight and travel tips",
        "What to pack checklist",
        "Cultural orientation and student life info"
      ]
    },
    {
      icon: "💬",
      title: "Ongoing Support After Admission",
      description: "Our services don't stop once you get your offer.",
      features: [
        "Help with deferrals or reapplications if needed",
        "UK-based contacts for emergency advice",
        "Post-study work visa (Graduate Route) info"
      ]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Helping You Study in the UK – 100% Free, Online, Personalized support</p>
          <div className="underline" />
        </div>

        <div className="services-hero-image">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="UK Universities - Your Education Journey"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "15px",
              marginBottom: "40px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
            }}
          />
        </div>

        <div className="services-intro">
          <p>
            At UkUniAdviser, we provide 100% free, Online, personalized support to students who want to study in the United Kingdom. Whether you're applying for an undergraduate, postgraduate, or foundation course, our expert Online guidance simplifies the process and increases your chances of success at the comfort of your home and time.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) =>
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>
                {service.title}
              </h3>
              <p className="service-description">
                {service.description}
              </p>
              <ul className="service-features">
                {service.features.map((feature, idx) =>
                  <li key={idx}>
                    {feature}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        <div className="why-free">
          <div className="why-free-content">
            <h3>🆓 Why Free?</h3>
            <p>
              Our goal is to make UK education accessible to all, regardless of background.
            </p>
            <h3>💯 No Hidden Costs</h3>
            <p>Our services are ABSOLUTELY Free from choosing the university of your choice to Visa and Beyond.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
