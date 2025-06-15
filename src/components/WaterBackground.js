import React, { useEffect, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";

const WaterBackground = () => {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const focusRef = useRef(true);
  const scrollRef = useRef(0);
  const wavePointsRef = useRef([]);
  const rippleRef = useRef([]);

  useEffect(
    () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // Set canvas size
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initializeWavePoints();
      };

      // Initialize wave points
      const initializeWavePoints = () => {
        wavePointsRef.current = [];
        const waveCount = 6;
        for (let i = 0; i < waveCount; i++) {
          wavePointsRef.current.push({
            x: 0,
            y: canvas.height * 0.3 + i * 20,
            amplitude: 30 + i * 10,
            frequency: 0.01 + i * 0.005,
            phase: i * Math.PI / 3,
            speed: 0.02 + i * 0.01,
            opacity: 0.15 - i * 0.02
          });
        }
      };

      // Window focus handlers
      const handleFocus = () => {
        focusRef.current = true;
        // Add ripple effect when window gains focus
        rippleRef.current.push({
          x: canvas.width * 0.5,
          y: canvas.height * 0.4,
          radius: 0,
          maxRadius: 200,
          opacity: 0.4,
          created: Date.now()
        });
      };

      const handleBlur = () => {
        focusRef.current = false;
        // Add ripple effect when window loses focus
        rippleRef.current.push({
          x: canvas.width * 0.3,
          y: canvas.height * 0.6,
          radius: 0,
          maxRadius: 150,
          opacity: 0.3,
          created: Date.now()
        });
      };

      // Scroll handler
      const handleScroll = () => {
        scrollRef.current = window.scrollY;
      };

      // Animation loop
      const animate = time => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Theme-aware background gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        if (theme === "dark") {
          gradient.addColorStop(0, "rgba(0, 0, 0, 0.08)");
          gradient.addColorStop(0.5, "rgba(55, 55, 55, 0.05)");
          gradient.addColorStop(1, "rgba(155, 155, 155, 0.03)");
        } else {
          gradient.addColorStop(0, "rgba(255, 255, 255, 0.08)");
          gradient.addColorStop(0.5, "rgba(200, 200, 200, 0.05)");
          gradient.addColorStop(1, "rgba(100, 100, 100, 0.03)");
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw water waves
        wavePointsRef.current.forEach((wave, index) => {
          ctx.beginPath();
          ctx.globalAlpha = wave.opacity;

          // Create wave path
          const points = [];
          for (let x = 0; x <= canvas.width; x += 5) {
            // Focus influence instead of mouse influence
            const focusInfluence = focusRef.current
              ? Math.sin(time * 0.003 + x * 0.01) * 15
              : Math.sin(time * 0.001 + x * 0.005) * 5;

            const scrollInfluence =
              Math.sin(scrollRef.current * 0.005 + index) * 10;

            const y =
              wave.y +
              Math.sin(x * wave.frequency + time * wave.speed + wave.phase) *
                wave.amplitude +
              focusInfluence +
              scrollInfluence;

            points.push({ x, y });
          }

          // Draw wave
          ctx.moveTo(points[0].x, points[0].y);
          for (let i = 1; i < points.length; i++) {
            const xc = (points[i].x + points[i - 1].x) / 2;
            const yc = (points[i].y + points[i - 1].y) / 2;
            ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
          }

          // Fill wave area
          ctx.lineTo(canvas.width, canvas.height);
          ctx.lineTo(0, canvas.height);
          ctx.closePath();

          // Theme-aware wave gradient
          const waveGradient = ctx.createLinearGradient(
            0,
            wave.y,
            0,
            canvas.height
          );
          if (theme === "dark") {
            waveGradient.addColorStop(
              0,
              `rgba(255, 255, 255, ${wave.opacity * 0.2})`
            );
            waveGradient.addColorStop(
              1,
              `rgba(205, 205, 205, ${wave.opacity * 0.1})`
            );
          } else {
            waveGradient.addColorStop(
              0,
              `rgba(0, 0, 0, ${wave.opacity * 0.2})`
            );
            waveGradient.addColorStop(
              1,
              `rgba(50, 50, 50, ${wave.opacity * 0.1})`
            );
          }

          ctx.fillStyle = waveGradient;
          ctx.fill();

          // Theme-aware wave surface shine
          if (theme === "dark") {
            ctx.strokeStyle = `rgba(0, 0, 0, ${wave.opacity * 0.4})`;
          } else {
            ctx.strokeStyle = `rgba(255, 255, 255, ${wave.opacity * 0.4})`;
          }
          ctx.lineWidth = 1;
          ctx.stroke();
        });

        // Draw ripples
        rippleRef.current = rippleRef.current.filter(ripple => {
          const age = Date.now() - ripple.created;
          const progress = age / 2000; // 2 second lifespan

          if (progress >= 1) return false;

          ripple.radius = progress * ripple.maxRadius;
          ripple.opacity = (1 - progress) * 0.3;

          ctx.beginPath();
          ctx.globalAlpha = ripple.opacity;
          // Theme-aware ripple outline
          if (theme === "dark") {
            ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
          } else {
            ctx.strokeStyle = "rgba(0, 0, 0, 0.4)";
          }
          ctx.lineWidth = 2;
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
          ctx.stroke();

          // Theme-aware inner ripple
          ctx.beginPath();
          if (theme === "dark") {
            ctx.strokeStyle = "rgba(0, 0, 0, 0.6)";
          } else {
            ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
          }
          ctx.lineWidth = 1;
          ctx.arc(ripple.x, ripple.y, ripple.radius * 0.5, 0, Math.PI * 2);
          ctx.stroke();

          return true;
        });

        // Floating particles - Multiple layers for depth
        const particleCount = 60;
        for (let i = 0; i < particleCount; i++) {
          // Layer 1: Surface particles
          if (i < 25) {
            const x = i / 25 * canvas.width + Math.sin(time * 0.001 + i) * 60;
            const y =
              canvas.height * 0.15 + Math.sin(time * 0.002 + i * 2) * 40;

            const size = 1.2 + Math.sin(time * 0.003 + i) * 0.6;
            const opacity = focusRef.current
              ? Math.max(0.15, 0.5 + Math.sin(time * 0.001 + i) * 0.2)
              : Math.max(0.08, 0.25 + Math.sin(time * 0.0005 + i) * 0.1);

            ctx.beginPath();
            ctx.globalAlpha = opacity;
            if (theme === "dark") {
              ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
            } else {
              ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
            }
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();

            // Theme-aware particle glow
            ctx.beginPath();
            ctx.globalAlpha = opacity * 0.4;
            if (theme === "dark") {
              ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
            } else {
              ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
            }
            ctx.arc(x, y, size * 1.8, 0, Math.PI * 2);
            ctx.fill();
          } else if (i < 45) {
            // Layer 2: Mid-depth particles
            const x =
              (i - 25) / 20 * canvas.width + Math.sin(time * 0.0008 + i) * 80;
            const y =
              canvas.height * 0.3 + Math.sin(time * 0.0015 + i * 1.5) * 60;

            const size = 0.8 + Math.sin(time * 0.0025 + i) * 0.4;
            const opacity = focusRef.current
              ? Math.max(0.1, 0.35 + Math.sin(time * 0.0008 + i) * 0.15)
              : Math.max(0.05, 0.18 + Math.sin(time * 0.0004 + i) * 0.08);

            ctx.beginPath();
            ctx.globalAlpha = opacity;
            if (theme === "dark") {
              ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
            } else {
              ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
            }
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();

            // Theme-aware subtle glow
            ctx.beginPath();
            ctx.globalAlpha = opacity * 0.3;
            if (theme === "dark") {
              ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
            } else {
              ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
            }
            ctx.arc(x, y, size * 1.5, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Layer 3: Deep particles
            const x =
              (i - 45) / 15 * canvas.width + Math.sin(time * 0.0006 + i) * 100;
            const y = canvas.height * 0.5 + Math.sin(time * 0.001 + i) * 80;

            const size = 0.5 + Math.sin(time * 0.002 + i) * 0.3;
            const opacity = focusRef.current
              ? Math.max(0.05, 0.25 + Math.sin(time * 0.0006 + i) * 0.1)
              : Math.max(0.02, 0.12 + Math.sin(time * 0.0003 + i) * 0.05);

            ctx.beginPath();
            ctx.globalAlpha = opacity;
            if (theme === "dark") {
              ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
            } else {
              ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
            }
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();

            // Theme-aware very subtle glow
            ctx.beginPath();
            ctx.globalAlpha = opacity * 0.2;
            if (theme === "dark") {
              ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
            } else {
              ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
            }
            ctx.arc(x, y, size * 1.2, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Additional scattered particles for ambiance
        const ambientParticleCount = 30;
        for (let i = 0; i < ambientParticleCount; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const size = 0.3 + Math.sin(time * 0.001 + i) * 0.2;
          const opacity = focusRef.current
            ? Math.max(0.02, 0.1 + Math.sin(time * 0.0005 + i) * 0.05)
            : Math.max(0.01, 0.05 + Math.sin(time * 0.0002 + i) * 0.02);

          ctx.beginPath();
          ctx.globalAlpha = opacity;
          if (theme === "dark") {
            ctx.fillStyle = "rgba(200, 200, 200, 0.4)";
          } else {
            ctx.fillStyle = "rgba(128, 128, 128, 0.4)";
          }
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.globalAlpha = 1;
        animationRef.current = requestAnimationFrame(animate);
      };

      // Initialize
      resizeCanvas();
      animate(0);

      // Event listeners
      window.addEventListener("resize", resizeCanvas);
      window.addEventListener("focus", handleFocus);
      window.addEventListener("blur", handleBlur);
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("resize", resizeCanvas);
        window.removeEventListener("focus", handleFocus);
        window.removeEventListener("blur", handleBlur);
        window.removeEventListener("scroll", handleScroll);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    },
    [theme]
  );

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        background:
          theme === "dark"
            ? "linear-gradient(135deg, #070809 0%, #161a1d 50%, #212529 100%)"
            : "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)"
      }}
    />
  );
};

export default WaterBackground;
