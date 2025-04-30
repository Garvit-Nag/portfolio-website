"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const totalProjects = projects.length;
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  const getCardSpacing = () => {
    if (width < 640) return 240;
    if (width < 1024) return 320;
    return 360;
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
    setTimeout(() => setIsAnimating(false), 700); // Match transition duration
  };
  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
    setTimeout(() => setIsAnimating(false), 700); // Match transition duration
  };
  
  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 700); // Match transition duration
  };

  // Handle card click - calculate the shortest path to the clicked card
  const handleCardClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    
    // Calculate whether it's faster to go forward or backward
    const forwardSteps = (index - currentIndex + totalProjects) % totalProjects;
    const backwardSteps = (currentIndex - index + totalProjects) % totalProjects;
    
    if (forwardSteps <= backwardSteps) {
      setCurrentIndex(index);
    } else {
      setCurrentIndex(index);
    }
    
    setTimeout(() => setIsAnimating(false), 700);
  };
  
  // Function to calculate all visible indices with wrapping
  const getVisibleIndices = () => {
    const prev2 = (currentIndex - 2 + totalProjects) % totalProjects;
    const prev = (currentIndex - 1 + totalProjects) % totalProjects;
    const current = currentIndex;
    const next = (currentIndex + 1) % totalProjects;
    const next2 = (currentIndex + 2) % totalProjects;
    
    return [prev2, prev, current, next, next2];
  };
  
  // Calculate position for each card
  const getCardPosition = (index: number) => {
    const positions = getVisibleIndices();
    if (index === positions[0]) return -getCardSpacing() * 2; // prev2
    if (index === positions[1]) return -getCardSpacing();     // prev
    if (index === positions[2]) return 0;                     // current
    if (index === positions[3]) return getCardSpacing();      // next
    if (index === positions[4]) return getCardSpacing() * 2;  // next2
    return index < currentIndex ? -getCardSpacing() * 3 : getCardSpacing() * 3; // Off-screen
  };
  
  // Calculate z-index for proper layering
  const getZIndex = (index: number) => {
    return index === currentIndex ? 20 : 10;
  };
  
  // Calculate opacity for each card
  const getOpacity = (index: number) => {
    const positions = getVisibleIndices();
    if (index === positions[0] || index === positions[4]) return 0.3; // prev2 & next2
    if (index === positions[1] || index === positions[3]) return 0.7; // prev & next
    if (index === positions[2]) return 1;                             // current
    return 0; // Off-screen
  };
  
  // Calculate scale for each card
  const getScale = (index: number) => {
    const positions = getVisibleIndices();
    if (index === positions[0] || index === positions[4]) return 0.85; // prev2 & next2
    if (index === positions[1] || index === positions[3]) return 0.95; // prev & next
    if (index === positions[2]) return 1.05;                           // current
    return 0.8; // Off-screen
  };

  // Check if a card is clickable (visible)
  const isCardClickable = (index: number) => {
    const positions = getVisibleIndices();
    return positions.includes(index);
  };
  
  // Consistent smooth transition
  const smoothTransition = {
    type: "tween",
    ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for natural movement
    duration: 0.7,
  };

  return (
    <div className="relative py-12 px-4 overflow-hidden">
      <div className="flex justify-center items-center relative h-[320px]">
        {projects.map((project, index) => (
          <motion.div 
            key={`card-${index}`}
            className="absolute"
            style={{ 
              zIndex: getZIndex(index),
              // Only enable pointer events for visible cards
              pointerEvents: isCardClickable(index) ? "auto" : "none",
              // Add cursor pointer to show cards are clickable
              cursor: isCardClickable(index) && index !== currentIndex ? "pointer" : "default"
            }}
            initial={false}
            animate={{
              x: getCardPosition(index),
              opacity: getOpacity(index),
              scale: getScale(index),
              filter: index === currentIndex ? "blur(0px)" : "blur(0.5px)"
            }}
            transition={smoothTransition}
            onClick={() => handleCardClick(index)}
          >
            <ProjectCard 
              project={project} 
              isActive={index === currentIndex} 
            />
          </motion.div>
        ))}
      </div>
      
      {/* Navigation with dots and arrows */}
      <div className="flex justify-center items-center mt-6 gap-8">
        <button 
          onClick={prevSlide}
          disabled={isAnimating}
          className="text-gray-300 hover:text-[#45e3ff] transition-all duration-300 hover:scale-110 group"
          aria-label="Previous project"
        >
          <ChevronLeft 
            size={36} 
            className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(69,227,255,0.7)]" 
          />
        </button>
        
        {/* Pagination dots */}
        <div className="flex justify-center gap-3">
          {projects.map((_, index) => (
            <motion.button
              key={`dot-${index}`}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className="w-2.5 h-2.5 rounded-full focus:outline-none"
              initial={false}
              animate={{
                scale: currentIndex === index ? 1.2 : 1,
                backgroundColor: currentIndex === index ? "rgb(255, 255, 255)" : "rgb(113, 113, 122)"
              }}
              whileHover={{
                scale: currentIndex === index ? 1.2 : 1.1,
                backgroundColor: currentIndex === index 
                  ? "rgb(255, 255, 255)" 
                  : "rgb(161, 161, 170)"
              }}
              transition={{
                scale: { type: "spring", stiffness: 400, damping: 25 },
                backgroundColor: { duration: 0.2 }
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          disabled={isAnimating}
          className="text-gray-300 hover:text-[#45e3ff] transition-all duration-300 hover:scale-110 group"
          aria-label="Next project"
        >
          <ChevronRight 
            size={36} 
            className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(69,227,255,0.7)]" 
          />
        </button>
      </div>
    </div>
  );
}