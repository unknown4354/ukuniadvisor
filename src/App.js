import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import WaterBackground from "./components/WaterBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import Pages
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import ProcessPage from "./pages/Process";
import SuccessStories from "./pages/SuccessStories";
import Contact from "./pages/Contact";
import Referrals from "./pages/Referrals";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          {/* Interactive Water Background */}
          <WaterBackground />

          <Navbar />

          <main id="main-content" role="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/referrals" element={<Referrals />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
