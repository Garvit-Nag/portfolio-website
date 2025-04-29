// src/components/ui/projects/ProjectsCarousel.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { Project, projects } from "@/data/projects";

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left
  const [isPaused, setIsPaused] = useState(false);
  const totalProjects = projects.length;
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  // Set up auto-scrolling with pause functionality
  useEffect(() => {
    // Clear any existing interval when component updates
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
    
    // Set up new interval if not paused
    if (!isPaused) {
      autoScrollRef.current = setInterval(() => {
        goToNext();
      }, 6000); // Change slides every 6 seconds
    }
    
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [isPaused, currentIndex]);

  // Pause carousel on interaction but resume after delay
  const handlePause = () => {
    setIsPaused(true);
    
    // Clear any existing timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    
    // Set timeout to resume autoplay after 5 seconds of inactivity
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  // Navigate to previous project
  const goToPrevious = () => {
    handlePause();
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects);
  };

  // Navigate to next project
  const goToNext = () => {
    handlePause();
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProjects);
  };

  // Navigate to a specific project
  const goToProject = (index: number) => {
    handlePause();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Handle card click (show center card if clicking side cards)
  const handleCardClick = (index: number) => {
    handlePause();
    if (index !== 1) { // If not the center card
      if (index === 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    }
  };

  // Custom variants for smoother animation with improved transitions
  const cardVariants = {
    // Left card entering
    enterLeft: {
      x: -120,
      opacity: 0,
      scale: 0.8,
      zIndex: 0
    },
    // Center card entering
    enterCenter: {
      x: direction > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.8,
      zIndex: 0
    },
    // Right card entering
    enterRight: {
      x: 120, 
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
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        ease: "easeOut"
      }
    },
    // Center card (position 1)
    center: { 
      x: 0,
      opacity: 0.9, // Made center card slightly transparent
      scale: 1.2,
      zIndex: 2,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 25,
        ease: "easeOut"
      }
    },
    // Right card (position 2)
    right: { 
      x: 0,
      opacity: 0.7,
      scale: 0.8,
      zIndex: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        ease: "easeOut"
      }
    },
    // Left card exiting
    exitLeft: {
      x: -120,
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    // Center card exiting
    exitCenter: {
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    // Right card exiting
    exitRight: {
      x: 120,
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
      transition: { duration: 0.4, ease: "easeInOut" }
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
    <div 
      className="relative w-full max-w-7xl mx-auto overflow-hidden py-4" // Reduced py-10 to py-4 to reduce the gap
      onMouseEnter={handlePause}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Removed the background color/glow effect */}
      
      {/* Improved carousel navigation arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 p-3 text-blue-200/80 hover:text-blue-100 transition-all duration-300 hover:scale-110 group"
        aria-label="Previous project"
      >
        <ChevronLeft 
          size={36} 
          className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(191,219,254,0.8)]" 
        />
      </button>

      <button 
        onClick={goToNext}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-30 p-3 text-blue-200/80 hover:text-blue-100 transition-all duration-300 hover:scale-110 group"
        aria-label="Next project"
      >
        <ChevronRight 
          size={36} 
          className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(191,219,254,0.8)]" 
        />
      </button>

      {/* Carousel with wider spacing */}
      <div className="flex justify-center items-center px-4 md:px-20 h-[480px]">
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

      {/* Improved pagination dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {projects.map((_, index) => (
          <button 
            key={index}
            onClick={() => goToProject(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-400 w-6 shadow-[0_0_8px_rgba(96,165,250,0.6)]' 
                : 'bg-gray-500/50 hover:bg-gray-400/50'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}