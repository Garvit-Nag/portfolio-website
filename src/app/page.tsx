// src/app/page.tsx
"use client";

import { Particles } from "@/components/magicui/particles";
import AboutSection from "@/components/ui/AboutSection";
import ContactSection from "@/components/ui/ContactSection";
import HeroSection from "@/components/ui/HeroSection";
import Navbar from "@/components/ui/Navbar";
import { ProjectCarousel } from '@/components/ui/ProjectCarousel';
import ProjectsSection from "@/components/ui/projects/ProjectsSection";
export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          className="absolute inset-0"
          quantity={200}
          staticity={30}
          color="#ffffff"
          ease={30}
        />
      </div>
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section Component */}
      <HeroSection />

      <AboutSection />

      <ProjectsSection />

      <ContactSection />
      <ProjectCarousel />
    </div>
  );
}