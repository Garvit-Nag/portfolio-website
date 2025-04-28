// src/components/ui/projects/ProjectsCarousel.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { Project, projects } from "@/data/projects";

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left
  const totalProjects = projects.length;

  // Set up visible projects
  useEffect(() => {
    // Function to get projects with wrapping
    const getProjectsWithWrapping = (centerIndex: number) => {
      const leftIndex = (centerIndex - 1 + totalProjects) % totalProjects;
      const rightIndex = (centerIndex + 1) % totalProjects;
      
      return [projects[leftIndex], projects[centerIndex], projects[rightIndex]];
    };

    setVisibleProjects(getProjectsWithWrapping(currentIndex));
  }, [currentIndex, totalProjects]);

  // Set up auto-scrolling
  useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      goToNext();
    }, 6000); // Change slides every 6 seconds
    
    return () => clearInterval(autoScrollInterval);
  }, []);

  // Navigate to previous project
  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects);
  };

  // Navigate to next project
  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProjects);
  };

  // Navigate to a specific project
  const goToProject = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Handle card click (show center card if clicking side cards)
  const handleCardClick = (index: number) => {
    if (index !== 1) { // If not the center card
      if (index === 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    }
  };

  // Custom variants for smoother animation
  const cardVariants = {
    // Left card entering
    enterLeft: {
      x: -100,
      opacity: 0,
      scale: 0.8,
      zIndex: 0
    },
    // Center card entering
    enterCenter: {
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      zIndex: 0
    },
    // Right card entering
    enterRight: {
      x: 100, 
      opacity: 0,
      scale: 0.8,
      zIndex: 0
    },
    // Left card (position 0)
    left: { 
      x: 0,
      opacity: 0.7,
      scale: 0.8,
      zIndex: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    // Center card (position 1)
    center: { 
      x: 0,
      opacity: 1,
      scale: 1.2,
      zIndex: 2,
      transition: { type: "spring", stiffness: 300, damping: 25 }
    },
    // Right card (position 2)
    right: { 
      x: 0,
      opacity: 0.7,
      scale: 0.8,
      zIndex: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    // Left card exiting
    exitLeft: {
      x: -100,
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
      transition: { duration: 0.3 }
    },
    // Center card exiting
    exitCenter: {
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
      transition: { duration: 0.3 }
    },
    // Right card exiting
    exitRight: {
      x: 100,
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
      transition: { duration: 0.3 }
    }
  };

  // Get animation variant based on position and direction
  const getVariant = (index: number, isInitial: boolean, isExit: boolean) => {
    if (isInitial) {
      if (index === 0) return "enterLeft";
      if (index === 1) return "enterCenter";
      return "enterRight";
    }
    
    if (isExit) {
      if (direction > 0) {
        if (index === 0) return "exitLeft";
        if (index === 1) return "exitLeft";
        return "exitRight";
      } else {
        if (index === 0) return "exitLeft";
        if (index === 1) return "exitRight";
        return "exitRight";
      }
    }
    
    if (index === 0) return "left";
    if (index === 1) return "center";
    return "right";
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden py-16">
      {/* Cosmic-themed glow effect behind carousel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-blue-600/5 blur-[100px] rounded-full" />
      
      {/* Carousel navigation arrows - improved styling */}
      <button 
        onClick={goToPrevious}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-blue-900/20 backdrop-blur-sm border border-blue-800/40 text-white hover:bg-blue-800/30 transition-colors shadow-glow"
        aria-label="Previous project"
      >
        <ChevronLeft size={28} className="text-blue-300" />
      </button>

      <button 
        onClick={goToNext}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-blue-900/20 backdrop-blur-sm border border-blue-800/40 text-white hover:bg-blue-800/30 transition-colors shadow-glow"
        aria-label="Next project"
      >
        <ChevronRight size={28} className="text-blue-300" />
      </button>

      {/* Carousel with wider spacing */}
      <div className="flex justify-center items-center px-4 md:px-20 h-[500px]">
        <AnimatePresence initial={false} mode="popLayout">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={`${project.id}-pos-${index}`}
              custom={index}
              variants={cardVariants}
              initial={getVariant(index, true, false)}
              animate={getVariant(index, false, false)}
              exit={getVariant(index, false, true)}
              className={`absolute mx-2 md:mx-4 ${
                index === 1 ? 'z-20' : index === 0 ? 'left-16 md:left-32 z-10' : 'right-16 md:right-32 z-10'
              }`}
            >
              <ProjectCard 
                project={project} 
                isCenter={index === 1}
                onClick={() => handleCardClick(index)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination dots - improved styling */}
      <div className="flex justify-center mt-12 space-x-3">
        {projects.map((_, index) => (
          <button 
            key={index}
            onClick={() => goToProject(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-400 w-6 shadow-glow' 
                : 'bg-gray-500/50 hover:bg-gray-400/50'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}