import React from "react";
import ConsultationForm from "../components/ConsultationForm";

const Contact = () => {
  return (
    <div className="contact-page">
      <ConsultationForm />

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="container">
          <div className="section-header">
            <h2>Multiple Ways to Connect</h2>
            <p>Choose the consultation method that works best for you</p>
          </div>

          <div className="contact-options">
            <div className="contact-card">
              <div className="icon">📞</div>
              <h3>Phone Consultation</h3>
              <p>Direct phone support for immediate guidance</p>
              <div className="contact-details">
                <p>
                  <strong>Hours:</strong> 8:00 AM – 10:30 PM (IST)
                </p>
                <p>
                  <strong>Best for:</strong> Urgent questions, quick
                  clarifications
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon">💬</div>
              <h3>WhatsApp Chat</h3>
              <p>Quick responses for your questions</p>
              <div className="contact-details">
                <p>
                  <strong>Hours:</strong> 8:00 AM – 12:00 PM (IST)
                </p>
                <p>
                  <strong>Best for:</strong> Document sharing, quick updates
                </p>
              </div>
            </div>

            <div className="contact-card featured">
              <div className="icon">🎥</div>
              <h3>Video Consultation</h3>
              <p>Personalized face-to-face guidance</p>
              <div className="contact-details">
                <p>
                  <strong>Platform:</strong> Zoom/Google Meet
                </p>
                <p>
                  <strong>Best for:</strong> Detailed discussions, first
                  consultation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="consultation-process">
        <div className="container">
          <h2>What Happens After You Contact Us?</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Immediate Response</h3>
                <p>
                  We'll respond to your inquiry within 2-4 hours during business
                  hours
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-content">
                <h3>Schedule Consultation</h3>
                <p>Choose a convenient time for your detailed consultation</p>
              </div>
              <div className="step-number">2</div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Profile Assessment</h3>
                <p>We'll evaluate your background and education goals</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-content">
                <h3>Personalized Plan</h3>
                <p>Receive your customized roadmap to UK education</p>
              </div>
              <div className="step-number">4</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <h2>Before You Contact Us</h2>
          <div className="faq-items">
            <div className="faq-item">
              <h3>What information should I have ready?</h3>
              <p>
                Your academic transcripts, test scores (IELTS/TOEFL if
                available), passport, and a rough idea of your preferred course
                and budget.
              </p>
            </div>
            <div className="faq-item">
              <h3>How long is the first consultation?</h3>
              <p>
                Initial consultations typically last 30-45 minutes, giving us
                time to understand your profile and provide meaningful guidance.
              </p>
            </div>
            <div className="faq-item">
              <h3>Is there really no cost for your services?</h3>
              <p>
                Absolutely none. We're funded by our university partners,
                allowing us to provide completely free guidance to students.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you help with all types of UK programs?</h3>
              <p>
                Yes, we assist with undergraduate, postgraduate, foundation
                courses, and research programs across all major UK universities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
