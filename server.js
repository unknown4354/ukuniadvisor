require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5001;

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
      "areaOfInterest"
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    // Prepare email content
    const toEmail = process.env.EMAIL_TO || "contact@ukuniadviser.com";
    const subject = `🎓 New Consultation Request: ${formData.name} — ${formData.areaOfInterest}`;

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Consultation Booking - UkUniAdviser</title>
      </head>
      <body style="margin:0;padding:20px;background-color:#f8f9fa;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif">
        <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.1)">
          
          <!-- Header -->
          <div style="background:linear-gradient(135deg,#c8102e,#012169);padding:30px 40px;text-align:center">
            <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700">🎓 UkUniAdviser</h1>
            <p style="margin:8px 0 0;color:rgba(255,255,255,0.9);font-size:16px">New Consultation Booking</p>
          </div>
          
          <!-- Content -->
          <div style="padding:40px">
            <div style="background:#f8f9fa;border-left:4px solid #c8102e;padding:20px;margin-bottom:30px;border-radius:6px">
              <h2 style="margin:0 0 8px;color:#012169;font-size:18px">📞 New Student Consultation Request</h2>
              <p style="margin:0;color:#6c757d;font-size:14px">Submitted on ${new Date().toLocaleString(
                "en-GB",
                {
                  timeZone: "Asia/Kolkata",
                  dateStyle: "full",
                  timeStyle: "short"
                }
              )} (IST)</p>
            </div>
            
            <table style="width:100%;border-collapse:collapse;margin-bottom:30px">
          <tbody>
                <tr style="border-bottom:1px solid #e9ecef">
                  <td style="padding:12px 0;width:40%;color:#6c757d;font-weight:600;font-size:14px">👤 Full Name</td>
                  <td style="padding:12px 0;color:#212529;font-weight:600;font-size:15px">${formData.name}</td>
                </tr>
                <tr style="border-bottom:1px solid #e9ecef">
                  <td style="padding:12px 0;color:#6c757d;font-weight:600;font-size:14px">📧 Email Address</td>
                  <td style="padding:12px 0;color:#212529;font-size:15px"><a href="mailto:${formData.email}" style="color:#c8102e;text-decoration:none">${formData.email}</a></td>
                </tr>
                <tr style="border-bottom:1px solid #e9ecef">
                  <td style="padding:12px 0;color:#6c757d;font-weight:600;font-size:14px">📱 Phone Number</td>
                  <td style="padding:12px 0;color:#212529;font-size:15px"><a href="tel:${formData.phone}" style="color:#c8102e;text-decoration:none">${formData.phone}</a></td>
                </tr>
                <tr style="border-bottom:1px solid #e9ecef">
                  <td style="padding:12px 0;color:#6c757d;font-weight:600;font-size:14px">💬 Preferred Contact</td>
                  <td style="padding:12px 0;color:#212529;font-size:15px">${formData.preferredContactMethod}</td>
                </tr>

                <tr style="border-bottom:1px solid #e9ecef">
                  <td style="padding:12px 0;color:#6c757d;font-weight:600;font-size:14px">🎯 Area of Interest</td>
                  <td style="padding:12px 0;color:#012169;font-weight:700;font-size:15px">${formData.areaOfInterest}</td>
                </tr>
                ${formData.message
                  ? `
                <tr>
                  <td style="padding:12px 0;color:#6c757d;font-weight:600;font-size:14px;vertical-align:top">💭 Additional Message</td>
                  <td style="padding:12px 0;color:#212529;font-size:15px;line-height:1.5">${formData.message}</td>
                </tr>
                `
                  : ""}
          </tbody>
        </table>
            
            <!-- Action Required -->
            <div style="background:linear-gradient(135deg,#012169,#264796);color:#ffffff;padding:20px;border-radius:8px;text-align:center;margin-bottom:20px">
              <h3 style="margin:0 0 8px;font-size:16px">⚡ Action Required</h3>
              <p style="margin:0;font-size:14px;opacity:0.9">Please contact the student within 24 hours to confirm their consultation appointment.</p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background:#f8f9fa;padding:20px 40px;text-align:center;border-top:1px solid #e9ecef">
            <p style="margin:0;color:#6c757d;font-size:13px">
              📧 This notification was sent automatically by the UkUniAdviser website.<br>
              🌐 Visit: <a href="https://ukuniadviser.com" style="color:#c8102e;text-decoration:none">ukuniadviser.com</a>
            </p>
          </div>
      </div>
      </body>
      </html>
    `;

    const text = `🎓 UkUniAdviser - New Consultation Request
    
Student Details:
================
Full Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Consultation Preferences:
========================
Contact Method: ${formData.preferredContactMethod}
Area of Interest: ${formData.areaOfInterest}
${formData.message ? `\nAdditional Message:\n${formData.message}\n` : ""}

Submitted: ${new Date().toLocaleString("en-GB", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short"
    })} (IST)

⚡ Action Required: Please contact the student within 24 hours to schedule their consultation.

---
This notification was sent automatically by UkUniAdviser website.`;

    // Send email (skip if email credentials not configured)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
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
      console.log("Email sent successfully to:", toEmail);
    } else {
      console.log("Email not sent - EMAIL_USER and EMAIL_PASS not configured. Form data logged:", formData);
    }

    // Also log for audit
    console.log("New consultation request:", formData);

    // Success response
    res.status(200).json({
      success: true,
      message: "Consultation request submitted successfully",
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
  console.log(
    "ℹ️  For now, the server will log bookings to console and send notification emails (if EMAIL_USER/PASS are configured)."
  );
});

module.exports = app;
