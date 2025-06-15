import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import WaterBackground from "./components/WaterBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TrustFactors from "./components/TrustFactors";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import ConsultationForm from "./components/ConsultationForm";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* Interactive Water Background */}
        <WaterBackground />

        <Navbar />
        <Hero />
        <About />
        <Services />
        <TrustFactors />
        <Process />
        <Testimonials />
        <ConsultationForm />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
