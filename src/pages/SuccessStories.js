import React from "react";
import Testimonials from "../components/Testimonials";

const SuccessStories = () => {
  const additionalStories = [
    {
      name: "Chitranjan Jodha",
      university: "Birmingham City University",
      course: "MBA",
      year: "2023",
      story:
        "The comprehensive guidance from UkUniAdviser made my MBA journey seamless. Their expertise in University Applications and visa processing was invaluable in achieving my academic goals."
    },
    {
      name: "Dev Sutreja",
      university: "Cranfield University",
      course: "MSc Management",
      year: "2023",
      story:
        "UkUniAdviser's personalized approach helped me secure admission to my dream program. Their support throughout the application process was exceptional and completely free."
    },
    {
      name: "Yash Thakker",
      university: "Regents University",
      course: "MA International Business",
      year: "2023",
      story:
        "From University selection to visa approval, UkUniAdviser guided me every step of the way. Their professional expertise made my UK education dream a reality."
    },
    {
      name: "Yashvi Thakker",
      university: "Regents University",
      course: "MA International Business",
      year: "2023",
      story:
        "The free consultation and ongoing support from UkUniAdviser exceeded my expectations. They helped me navigate the complex application process with confidence."
    },
    {
      name: "Parth Lalwani",
      university: "University of Warwick",
      course: "MSc Entrepreneurship",
      year: "2023",
      story:
        "UkUniAdviser's detailed guidance and mock interviews prepared me perfectly for my University application. I'm now pursuing my entrepreneurship dreams at Warwick."
    }
  ];

  return (
    <div className="success-stories-page">
      <Testimonials />

      {/* Additional Success Stories */}
      <section className="more-stories">
        <div className="container">
          <div className="section-header">
            <h2>More Success Stories</h2>
            <p>
              Every student's journey is unique, but the destination is the
              same: success
            </p>
          </div>

          <div className="detailed-stories">
            {additionalStories.map((story, index) =>
              <div key={index} className="detailed-story-card">
                <div className="story-header">
                  <div className="student-info">
                    <h3>
                      {story.name}
                    </h3>

                    <p className="education">
                      {story.course}
                    </p>
                    <p className="university">
                      {story.university}
                    </p>
                    <span className="year">
                      {story.year}
                    </span>
                  </div>
                </div>
                <div className="story-content">
                  <p>
                    "{story.story}"
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Success by Numbers */}
      <section className="success-numbers">
        <div className="container">
          <h2>Success by Numbers</h2>
          <div className="numbers-grid">
            <div className="number-card">
              <div className="number">500+</div>
              <div className="label">Students Successfully Placed</div>
              <div className="detail">Across 50+ UK Universities</div>
            </div>
            <div className="number-card">
                    <div className="number">99%</div>
      <div className="label">Success Rate</div>
              <div className="detail">Above industry average</div>
            </div>
            <div className="number-card">
              <div className="number">£2M+</div>
              <div className="label">Scholarships Secured</div>
              <div className="detail">For our students over 5 years</div>
            </div>
            <div className="number-card">
              <div className="number">85%</div>
              <div className="label">First Choice Acceptances</div>
              <div className="detail">
                Students get into their preferred University
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="stories-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Your Success Story Starts Here</h2>
            <p>
              Join hundreds of students who have achieved their UK education
              dreams with our free guidance
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Start Your Journey
              </a>
              <a href="/process" className="btn btn-secondary">
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
