import React, { useState } from "react";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContactMethod: "",
    preferredDate: "",
    preferredTime: "",
    areaOfInterest: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [errors, setErrors] = useState({});

  const areasOfInterest = [
    "Undergraduate Courses",
    "Postgraduate Courses",
    "MBA Programs",
    "PhD/Research Programs",
    "Foundation Courses",
    "Visa Guidance",
    "Scholarship Information",
    "General Inquiry"
  ];

  const timeSlots = [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM",
    "07:00 PM - 08:00 PM"
  ];

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.preferredContactMethod) {
      newErrors.preferredContactMethod = "Preferred contact method is required";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Preferred date is required";
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = "Preferred time is required";
    }

    if (!formData.areaOfInterest) {
      newErrors.areaOfInterest = "Area of interest is required";
    }

    return newErrors;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/book-consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setShowThankYou(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          preferredContactMethod: "",
          preferredDate: "",
          preferredTime: "",
          areaOfInterest: "",
          message: ""
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  if (showThankYou) {
    return (
      <section id="consultation" className="consultation-form">
        <div className="container">
          <div className="thank-you-message">
            <div className="thank-you-content">
              <div className="success-icon">✅</div>
              <h2>Thank You!</h2>
              <p>Your consultation has been successfully booked.</p>
              <div className="success-details">
                <p>
                  📧 You will receive a confirmation email shortly with your
                  meeting details.
                </p>
                <p>📅 A calendar invite will be sent to your email address.</p>
                <p>
                  🎥 We'll send you the Zoom/Google Meet link before your
                  scheduled time.
                </p>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => setShowThankYou(false)}
              >
                Book Another Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation" className="consultation-form">
      <div className="container">
        <div className="section-header">
                     <h2>Book Your Free Consultation</h2>
          <p>Take the first step toward your UK education journey.</p>
          <div className="underline" />
        </div>

        <div className="form-container">
          <div className="form-info">
            <h3>🎯 What to Expect</h3>
            <ul>
              <li>✅ Personalized guidance based on your profile</li>
              <li>✅ University and course recommendations</li>
              <li>✅ Application timeline and requirements</li>
              <li>✅ Scholarship and funding opportunities</li>
              <li>✅ Visa and immigration guidance</li>
            </ul>

            <div className="consultation-types">
              <h4>📞 Consultation Options</h4>
              <div className="option-item">
                <strong>Phone Consultation</strong>
                <p>Direct call with our expert counsellor</p>
              </div>
              <div className="option-item">
                <strong>Video Consultation</strong>
                <p>Face-to-face session via Zoom/Google Meet</p>
              </div>
              <div className="option-item">
                <strong>WhatsApp Consultation</strong>
                <p>Chat-based guidance at your convenience</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="booking-form">
            <h3>📞 Book Your Consultation</h3>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={errors.name ? "error" : ""}
                placeholder="Enter your full name"
              />
              {errors.name &&
                <span className="error-message">
                  {errors.name}
                </span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? "error" : ""}
                placeholder="Enter your email address"
              />
              {errors.email &&
                <span className="error-message">
                  {errors.email}
                </span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={errors.phone ? "error" : ""}
                placeholder="Enter your phone number with country code"
              />
              {errors.phone &&
                <span className="error-message">
                  {errors.phone}
                </span>}
            </div>

            <div className="form-group">
              <label htmlFor="preferredContactMethod">Preferred Contact Method *</label>
              <select
                id="preferredContactMethod"
                name="preferredContactMethod"
                value={formData.preferredContactMethod}
                onChange={handleInputChange}
                className={errors.preferredContactMethod ? "error" : ""}
              >
                <option value="">Select a contact method</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Phone Call">Phone Call</option>
                <option value="Email">Email</option>
              </select>
              {errors.preferredContactMethod &&
                <span className="error-message">
                  {errors.preferredContactMethod}
                </span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="preferredDate">Preferred Date *</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className={errors.preferredDate ? "error" : ""}
                  min={getTomorrowDate()}
                />
                {errors.preferredDate &&
                  <span className="error-message">
                    {errors.preferredDate}
                  </span>}
              </div>

              <div className="form-group">
                <label htmlFor="preferredTime">Preferred Time *</label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className={errors.preferredTime ? "error" : ""}
                >
                  <option value="">Select time slot</option>
                  {timeSlots.map((slot, index) =>
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  )}
                </select>
                {errors.preferredTime &&
                  <span className="error-message">
                    {errors.preferredTime}
                  </span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="areaOfInterest">Area of Interest *</label>
              <select
                id="areaOfInterest"
                name="areaOfInterest"
                value={formData.areaOfInterest}
                onChange={handleInputChange}
                className={errors.areaOfInterest ? "error" : ""}
              >
                <option value="">Select your area of interest</option>
                {areasOfInterest.map((area, index) =>
                  <option key={index} value={area}>
                    {area}
                  </option>
                )}
              </select>
              {errors.areaOfInterest &&
                <span className="error-message">
                  {errors.areaOfInterest}
                </span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                placeholder="Tell us more about your goals, concerns, or specific questions..."
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "📤 Booking..." : "📞 Book Free Consultation"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
