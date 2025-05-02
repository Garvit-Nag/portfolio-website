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
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768); 
      };
      
      checkMobile();
      
      window.addEventListener("resize", checkMobile);
      
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background - Conditional rendering */}
      <div className="absolute inset-0 z-0">
        {!isMobile ? (
          <Particles
            className="absolute inset-0"
            quantity={200}
            staticity={30}
            color="#ffffff"
            ease={30}
          />
        ) : (
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