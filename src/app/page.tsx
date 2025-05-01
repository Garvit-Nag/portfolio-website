"use client";

import { Particles } from "@/components/magicui/particles";
import AboutSection from "@/components/ui/AboutSection";
import ContactSection from "@/components/ui/contact/ContactSection";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import Navbar from "@/components/ui/Navbar";
import ProjectsSection from "@/components/ui/projects/ProjectsSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 900); 
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Conditional Background */}
      <div className="absolute inset-0 z-0">
        {isMobile ? (
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{ backgroundColor: "rgba(1, 6, 18, 0.97)" }}
            aria-hidden="true"
          />
        ) : (
          <Particles
            className="absolute inset-0"
            quantity={200}
            staticity={30}
            color="#ffffff"
            ease={30}
          />
        )}
      </div>

      <Navbar />

      <HeroSection />

      <AboutSection />

      <ProjectsSection />

      <ContactSection />
    </div>
  );
}