import React from "react";
import Testimonials from "../components/Testimonials";

const SuccessStories = () => {
  const additionalStories = [
    {
      name: "Raj Patel",
      location: "Mumbai, India",
      university: "Imperial College London",
      course: "MSc Computer Science",
      year: "2023",
      story:
        "The visa process seemed overwhelming until UKuniadvisor stepped in. Their mock interviews and document guidance made all the difference. Now I'm studying at one of the world's top universities for technology."
    },
    {
      name: "Amara Osei",
      location: "Accra, Ghana",
      university: "University of Bath",
      course: "MSc International Management",
      year: "2022",
      story:
        "I almost gave up on my UK dream due to financial concerns. UKuniadvisor helped me find a scholarship that covered 50% of my tuition. Their support was invaluable throughout the entire journey."
    },
    {
      name: "Hassan Ali",
      location: "Karachi, Pakistan",
      university: "University of Warwick",
      course: "MSc Finance",
      year: "2023",
      story:
        "What impressed me most was their honesty. When my profile didn't match certain universities, they guided me to better alternatives. I ended up at Warwick, which was perfect for my career goals."
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
                    <p className="location">
                      {story.location}
                    </p>
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
              <div className="detail">Across 50+ UK universities</div>
            </div>
            <div className="number-card">
              <div className="number">95%</div>
              <div className="label">Visa Success Rate</div>
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
                Students get into their preferred university
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
