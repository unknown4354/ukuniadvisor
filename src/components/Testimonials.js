import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi, India",
      university: "University of Manchester",
      course: "MSc Data Science",
      rating: 5,
      text:
        "UKuniadvisor made my dream of studying in the UK a reality! Their free guidance was invaluable, and they helped me navigate the entire process from university applications to visa approval. I'm now pursuing my MSc at Manchester and couldn't be happier.",
      image: "👩‍🎓"
    },
    {
      name: "James Okafor",
      location: "Lagos, Nigeria",
      university: "University of Edinburgh",
      course: "MBA",
      rating: 5,
      text:
        "The team at UKuniadvisor was incredibly supportive throughout my application journey. Their expertise in UK education and free consultation saved me time and money. I received offers from multiple universities and chose Edinburgh for my MBA.",
      image: "👨‍🎓"
    },
    {
      name: "Fatima Al-Zahra",
      location: "Cairo, Egypt",
      university: "King's College London",
      course: "LLM International Law",
      rating: 5,
      text:
        "I was initially overwhelmed by the UK application process, but UKuniadvisor's step-by-step guidance made everything clear. They helped me craft a compelling personal statement and prepared me for the visa interview. Now I'm studying law at KCL!",
      image: "👩‍💼"
    }
  ];

  const renderStars = rating => {
    return "⭐".repeat(rating);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Students Say</h2>
          <p>
            Success stories from students who achieved their UK education dreams
          </p>
          <div className="underline" />
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) =>
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="student-avatar">
                  {testimonial.image}
                </div>
                <div className="student-info">
                  <h4>
                    {testimonial.name}
                  </h4>
                  <p className="location">
                    {testimonial.location}
                  </p>
                  <p className="education">
                    {testimonial.course}
                  </p>
                  <p className="university">
                    {testimonial.university}
                  </p>
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <p>
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="testimonial-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Students Helped</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-label">Success Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Free Service</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
