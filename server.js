require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));

// Simple API endpoint to book consultation (simplified version)
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

    // For now, just log the booking (replace with actual implementation later)
    console.log("New consultation booking:", formData);

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
