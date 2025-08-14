import React from "react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Free Initial Counselling",
      description:
        "Call, WhatsApp, or book a video session to discuss your academic profile, career goals, and study options in the UK.",
      icon: "💬"
    },
    {
      number: "02",
      title: "University & Course Shortlisting",
      description:
        "We help you shortlist the right UK Universities and courses based on your background, budget, and career plans.",
      icon: "🎓"
    },
    {
      number: "03",
      title: "Document Support",
      description:
        "Get help preparing Personal Statement/SOP, Academic documents, LORs and Resume.",
      icon: "📑"
    },
    {
      number: "04",
      title: "University Applications",
      description:
        "We submit your Applications to UK Universities and follow up with them directly on your behalf.",
      icon: "📤"
    },
    {
      number: "05",
      title: "Offers & Decision Guidance",
      description:
        "Once you receive offers, we help you choose the right one and accept it properly.",
      icon: "🎯"
    },
    {
      number: "06",
      title: "Visa Assistance",
      description:
        "We guide you through CAS process, Visa documents, Financial requirements, and Mock interviews.",
      icon: "📋"
    },
    {
      number: "07",
      title: "Pre-Departure Support",
      description:
        "Final preparation for your journey: Flight & accommodation tips, Packing checklist, Student life advice in the UK.",
      icon: "🧳"
    }
  ];

  const availability = [
    {
      type: "📞 Phone Support",
      time: "8:00 AM – 10:30 PM (IST)"
    },
    {
      type: "💬 WhatsApp Chat",
      time: "8:00 AM – 12:00 PM (IST)"
    },
    {
      type: "🎥 Video Counselling",
      time: "By appointment only (via Zoom/Google Meet)"
    }
  ];

  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>
            A simple, free, and personalized process to help you study in the UK
          </p>
          <div className="underline" />
        </div>

        <div className="steps-section">
          <h3>🧭 Step-by-Step Process</h3>
          <div className="steps-timeline">
            {steps.map((step, index) =>
              <div key={index} className="step-item">
                <div className="step-number">
                  {step.number}
                </div>
                <div className="step-content">
                  <div className="step-icon">
                    {step.icon}
                  </div>
                  <h4>
                    {step.title}
                  </h4>
                  <p>
                    {step.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="promise-section">
          <div className="promise-content">
            <h3>🎯 Our Promise</h3>
            <div className="promise-points">
              <span>• No fees</span>
              <span>• No confusion</span>
              <span>
                • Just honest, expert guidance backed by 20+ years of experience
                and British Council certification
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
