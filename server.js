require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Function to format consultation email
const formatConsultationEmail = (formData) => {
  return `
    <h2>New Consultation Booking - UkUniAdviser</h2>
    
    <h3>Client Information:</h3>
    <ul>
      <li><strong>Name:</strong> ${formData.name}</li>
      <li><strong>Email:</strong> ${formData.email}</li>
      <li><strong>Phone:</strong> ${formData.phone}</li>
      <li><strong>Preferred Contact Method:</strong> ${formData.preferredContactMethod || 'Not specified'}</li>
    </ul>
    
    <h3>Consultation Details:</h3>
    <ul>
      <li><strong>Preferred Date:</strong> ${formData.preferredDate}</li>
      <li><strong>Preferred Time:</strong> ${formData.preferredTime}</li>
      <li><strong>Area of Interest:</strong> ${formData.areaOfInterest}</li>
    </ul>
    
    ${formData.message ? `
    <h3>Additional Message:</h3>
    <p>${formData.message}</p>
    ` : ''}
    
    <hr>
    <p><small>This consultation booking was submitted on ${new Date().toLocaleString()}</small></p>
  `;
};

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));

// API endpoint to book consultation with email functionality
app.post("/api/book-consultation", async (req, res) => {
  try {
    const formData = req.body;

    // Validate required fields
    const requiredFields = [
      "name",
      "email",
      "phone",
      "preferredDate",
      "preferredTime",
      "areaOfInterest"
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    // Log the booking
    console.log("New consultation booking:", formData);

    // Send email notification
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER || 'noreply@ukuniadviser.com',
        to: 'contact@ukuniadviser.com',
        subject: `New Consultation Booking - ${formData.name}`,
        html: formatConsultationEmail(formData)
      };

      await transporter.sendMail(mailOptions);
      console.log("Email notification sent successfully");
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      // Continue with success response even if email fails
    }

    // Simulate successful booking
    res.status(200).json({
      success: true,
      message: "Consultation booked successfully",
      eventId: `event_${Date.now()}`
    });
  } catch (error) {
    console.error("Error booking consultation:", error);
    res.status(500).json({
      error: "Failed to book consultation. Please try again."
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running!" });
});

// Serve React app (only if build directory exists)
app.get("*", (req, res) => {
  const buildPath = path.join(__dirname, "build", "index.html");

  // Check if we're in development mode
  if (process.env.NODE_ENV !== "production") {
    res.json({
      message: "Server is running in development mode",
      note: "React app will be served on port 3000"
    });
  } else {
    // In production, try to serve the built React app
    try {
      res.sendFile(buildPath);
    } catch (error) {
      res.status(404).json({
        error: 'Build folder not found. Please run "npm run build" first.'
      });
    }
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error("Server error:", error);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📍 Server URL: http://localhost:${PORT}`);
  console.log("");
  console.log("📝 Next steps to enable full functionality:");
  console.log("1. Set up Google Calendar API credentials");
  console.log("2. Configure email settings");
  console.log("3. Update environment variables");
  console.log("");
  console.log("ℹ️  For now, the server will log bookings to console");
});

module.exports = app;
