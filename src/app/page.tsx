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
    // Check if we're on client-side
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768); // Consider devices with width < 768px as mobile
      };
      
      // Initial check
      checkMobile();
      
      // Add event listener for window resize
      window.addEventListener("resize", checkMobile);
      
      // Clean up event listener
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background - Conditional rendering */}
      <div className="absolute inset-0 z-0">
        {!isMobile ? (
          // Particles for desktop
          <Particles
            className="absolute inset-0"
            quantity={200}
            staticity={30}
            color="#ffffff"
            ease={30}
          />
        ) : (
          // Plain background for mobile with exact same color as in the Particles component
          <div 
            className="absolute inset-0" 
            style={{ backgroundColor: "rgba(1, 6, 18, 0.97)" }}
          ></div>
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