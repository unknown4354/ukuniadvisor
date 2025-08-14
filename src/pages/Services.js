import React from "react";
import Services from "../components/Services";

const ServicesPage = () => {
  return (
    <div className="services-page">

      <Services />

      {/* Additional Service Information */}
      <section className="service-promise">
        <div className="container">
          <div className="promise-grid">
            <div className="promise-item">
              <div className="icon">🎯</div>
              <h3>Personalized Approach</h3>
              <p>
                Every student's journey is unique. We tailor our guidance to
                your specific goals, background, and circumstances.
              </p>
            </div>
            <div className="promise-item">
              <div className="icon">📞</div>
              <h3>Always Available</h3>
              <p>
                Phone support 8 AM - 10:30 PM IST, WhatsApp 8 AM - 12 PM IST,
                and video consultations by appointment.
              </p>
            </div>
            <div className="promise-item">
              <div className="icon">🤝</div>
              <h3>End-to-End Support</h3>
              <p>
                From your first inquiry to settling in the UK, we're with you
                every step of the way.
              </p>
            </div>
            <div className="promise-item">
              <div className="icon">💯</div>
              <h3>No Hidden Costs</h3>
              <p>
                Our services are ABSOLUTELY Free from choosing the University of your choice to Visa and Beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="services-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            
            <div className="faq-item">
              <h3>Do you guarantee University admission?</h3>
              <p>
                While we can't guarantee admissions (no ethical consultant can),
                our 95% success rate speaks to our expertise in maximizing your
                chances of acceptance.
              </p>
            </div>
            <div className="faq-item">
              <h3>What makes you different from other consultants?</h3>
              <p>
                Our exclusive UK focus, British Council certification, founder's
                UK education experience, and completely free services set us
                apart from the competition.
              </p>
            </div>
            <div className="faq-item">
              <h3>How long does the application process take?</h3>
              <p>
                                 The timeline varies by program and University, but typically
                ranges from 2-6 months from Application to offer. We'll provide
                a personalized timeline during your consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
