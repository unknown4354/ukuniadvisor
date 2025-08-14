import React from "react";
import Process from "../components/Process";

const ProcessPage = () => {
  return (
    <div className="process-page">
      <Process />

      {/* Getting Started Section */}
      <section className="getting-started">
        <div className="container">
          <div className="section-header">
            <h2>Ready to Get Started?</h2>
            <p>Choose the consultation method that works best for you</p>
          </div>

          <div className="consultation-options">
            <div className="consultation-card">
              <div className="icon">📞</div>
              <h3>Phone Consultation</h3>
              <p>Direct phone support available 8:00 AM – 10:30 PM (IST)</p>
              <div className="contact-info">
                <strong>Call us directly for immediate guidance</strong>
              </div>
            </div>

            <div className="consultation-card">
              <div className="icon">💬</div>
              <h3>WhatsApp Chat</h3>
              <p>Quick responses via WhatsApp 8:00 AM – 12:00 PM (IST)</p>
              <div className="contact-info">
                <strong>Message us for instant replies</strong>
              </div>
            </div>

            <div className="consultation-card featured">
              <div className="icon">🎥</div>
              <h3>Video Consultation</h3>
              <p>Face-to-face guidance via Zoom/Google Meet</p>
              <div className="contact-info">
                <strong>Book a personalized video session</strong>
              </div>
              <a href="/contact" className="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="what-to-expect">
        <div className="container">
          <h2>What to Expect in Your First Consultation</h2>
          <div className="expect-grid">
            <div className="expect-item">
              <div className="step">1</div>
              <h3>Profile Assessment</h3>
              <p>
                We'll review your academic background, career goals, and budget
              </p>
            </div>
            <div className="expect-item">
              <div className="step">2</div>
              <h3>University Matching</h3>
              <p>Receive personalized University and course recommendations</p>
            </div>
            <div className="expect-item">
              <div className="step">3</div>
              <h3>Timeline Planning</h3>
              <p>Get a clear roadmap with deadlines and milestones</p>
            </div>
            <div className="expect-item">
              <div className="step">4</div>
              <h3>Next Steps</h3>
              <p>Leave with actionable steps and ongoing support plan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;
