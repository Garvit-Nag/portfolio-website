/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { Project, projects } from "@/data/projects";

export default function ProjectsCarousel() {
  const totalProjects = projects.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(() => {
    const leftIndex = (totalProjects - 1) % totalProjects;
    const rightIndex = 1 % totalProjects;
    return [projects[leftIndex], projects[0], projects[rightIndex]];
  });
  const [direction, setDirection] = useState(0);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + totalProjects) % totalProjects;
      const leftIndex = (newIndex - 1 + totalProjects) % totalProjects;
      const rightIndex = (newIndex + 1) % totalProjects;
      setVisibleProjects([projects[leftIndex], projects[newIndex], projects[rightIndex]]);
      return newIndex;
    });
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % totalProjects;
      const leftIndex = (newIndex - 1 + totalProjects) % totalProjects;
      const rightIndex = (newIndex + 1) % totalProjects;
      setVisibleProjects([projects[leftIndex], projects[newIndex], projects[rightIndex]]);
      return newIndex;
    });
  };


  const handleCardClick = (index: number) => {
    if (index !== 1) {
      if (index === 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    }
  };

  const cardVariants = {
    enterLeft: {
      x: -120,
      opacity: 0,
      scale: 0.8,
      zIndex: 0
    },
    enterCenter: {
      x: direction > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.8,
      zIndex: 0
    },
    enterRight: {
      x: 120,
      opacity: 0,
      scale: 0.8,
      zIndex: 0
    },
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
    center: {
      x: 0,
      opacity: 0.9,
      scale: 1,
      zIndex: 2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        ease: "easeOut"
      }
    },
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
    exitLeft: {
      x: -120,
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    exitCenter: {
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    exitRight: {
      x: 120,
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
      transition: { duration: 0.4, ease: "easeInOut" }
    }
  };

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
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden py-2">
      <button 
        onClick={goToPrevious}
        className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-30 p-3 text-gray-300 hover:text-[#45e3ff] transition-all duration-300 hover:scale-110 group"
        aria-label="Previous project"
      >
        <ChevronLeft 
          size={36} 
          className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(69,227,255,0.7)]" 
        />
      </button>

      <button 
        onClick={goToNext}
        className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-30 p-3 text-gray-300 hover:text-[#45e3ff] transition-all duration-300 hover:scale-110 group"
        aria-label="Next project"
      >
        <ChevronRight 
          size={36} 
          className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(69,227,255,0.7)]" 
        />
      </button>

      <div className="flex justify-center items-center px-4 md:px-16 h-[440px]">
        <AnimatePresence initial={false} mode="popLayout">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={`${project.id}-pos-${index}`}
              custom={index}
              variants={cardVariants}
              initial={getVariant(index, true, false)}
              animate={getVariant(index, false, false)}
              exit={getVariant(index, false, true)}
              className={`absolute mx-4 md:mx-10 ${
                index === 1 ? 'z-20' : index === 0 ? 'left-12 md:left-28 z-10' : 'right-12 md:right-28 z-10'
              }`}
            >
              <ProjectCard 
                project={project} 
                onClick={() => handleCardClick(index)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      
    </div>
  );
}