require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));

// Email Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Simple API endpoint to book consultation (enhanced with email notification)
app.post("/api/book-consultation", async (req, res) => {
  try {
    const formData = req.body;

    // Validate required fields
    const requiredFields = [
      "name",
      "email",
      "phone",
      "preferredContactMethod",
      "preferredDate",
      "preferredTime",
      "areaOfInterest"
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    // Prepare email content
    const toEmail = "contact@ukuniadviser.com";
    const subject = `New Consultation Booking: ${formData.name} — ${formData.areaOfInterest}`;

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111">
        <h2 style="margin:0 0 12px">New Consultation Booking</h2>
        <p style="margin:4px 0">A new consultation has been booked via the website. Details are below:</p>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:12px 0" />
        <table style="width:100%;max-width:640px;border-collapse:collapse">
          <tbody>
            <tr><td style="padding:6px 0;width:220px;color:#555">Full Name</td><td style="padding:6px 0;font-weight:600">${formData.name}</td></tr>
            <tr><td style="padding:6px 0;color:#555">Email</td><td style="padding:6px 0">${formData.email}</td></tr>
            <tr><td style="padding:6px 0;color:#555">Phone</td><td style="padding:6px 0">${formData.phone}</td></tr>
            <tr><td style="padding:6px 0;color:#555">Preferred Contact Method</td><td style="padding:6px 0">${formData.preferredContactMethod}</td></tr>
            <tr><td style="padding:6px 0;color:#555">Preferred Date</td><td style="padding:6px 0">${formData.preferredDate}</td></tr>
            <tr><td style="padding:6px 0;color:#555">Preferred Time</td><td style="padding:6px 0">${formData.preferredTime}</td></tr>
            <tr><td style="padding:6px 0;color:#555">Area of Interest</td><td style="padding:6px 0">${formData.areaOfInterest}</td></tr>
            ${formData.message ? `<tr><td style="padding:6px 0;color:#555">Additional Message</td><td style="padding:6px 0">${formData.message}</td></tr>` : ""}
          </tbody>
        </table>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:12px 0" />
        <p style="margin:4px 0;color:#555">This notification was sent automatically by UkUniAdviser website.</p>
      </div>
    `;

    const text = `New Consultation Booking\n\n` +
      `Full Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Preferred Contact Method: ${formData.preferredContactMethod}\n` +
      `Preferred Date: ${formData.preferredDate}\n` +
      `Preferred Time: ${formData.preferredTime}\n` +
      `Area of Interest: ${formData.areaOfInterest}\n` +
      (formData.message ? `Message: ${formData.message}\n` : ``);

    // Send email
    await transporter.sendMail({
      from: {
        name: "UkUniAdviser Notifications",
        address: process.env.EMAIL_USER || "no-reply@ukuniadviser.com"
      },
      to: toEmail,
      replyTo: formData.email,
      subject,
      text,
      html
    });

    // Also log for audit
    console.log("New consultation booking:", formData);

    // Success response
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
  console.log("ℹ️  For now, the server will log bookings to console and send notification emails (if EMAIL_USER/PASS are configured).");
});

module.exports = app;
