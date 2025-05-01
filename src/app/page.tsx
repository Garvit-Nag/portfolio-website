// src/app/page.tsx
"use client";


import AboutSection from "@/components/ui/AboutSection";
import ContactSection from "@/components/ui/ContactSection";
import HeroSection from "@/components/ui/HeroSection";
import Navbar from "@/components/ui/Navbar";
import ProjectsSection from "@/components/ui/projects/ProjectsSection";
export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section Component */}
      <HeroSection />

      <AboutSection />

      <ProjectsSection />

      <ContactSection />
    </div>
  );
}