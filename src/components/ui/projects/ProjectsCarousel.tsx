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
    setTimeout(() => setIsAnimating(false), 700);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 700);
  };


  const handleCardClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;

    setIsAnimating(true);


    const forwardSteps = (index - currentIndex + totalProjects) % totalProjects;
    const backwardSteps = (currentIndex - index + totalProjects) % totalProjects;

    if (forwardSteps <= backwardSteps) {
      setCurrentIndex(index);
    } else {
      setCurrentIndex(index);
    }

    setTimeout(() => setIsAnimating(false), 700);
  };


  const getVisibleIndices = () => {
    const prev2 = (currentIndex - 2 + totalProjects) % totalProjects;
    const prev = (currentIndex - 1 + totalProjects) % totalProjects;
    const current = currentIndex;
    const next = (currentIndex + 1) % totalProjects;
    const next2 = (currentIndex + 2) % totalProjects;

    return [prev2, prev, current, next, next2];
  };


  const getCardPosition = (index: number) => {
    const positions = getVisibleIndices();
    if (index === positions[0]) return -getCardSpacing() * 2;
    if (index === positions[1]) return -getCardSpacing();
    if (index === positions[2]) return 0;
    if (index === positions[3]) return getCardSpacing();
    if (index === positions[4]) return getCardSpacing() * 2;
    return index < currentIndex ? -getCardSpacing() * 3 : getCardSpacing() * 3;
  };


  const getZIndex = (index: number) => {
    return index === currentIndex ? 20 : 10;
  };


  const getOpacity = (index: number) => {
    const positions = getVisibleIndices();
    if (index === positions[0] || index === positions[4]) return 0.3;
    if (index === positions[1] || index === positions[3]) return 0.7;
    if (index === positions[2]) return 1;
    return 0; // Off-screen
  };


  const getScale = (index: number) => {
    const positions = getVisibleIndices();
    if (index === positions[0] || index === positions[4]) return 0.85;
    if (index === positions[1] || index === positions[3]) return 0.95;
    if (index === positions[2]) return 1.05;
    return 0.8;
  };


  const isCardClickable = (index: number) => {
    const positions = getVisibleIndices();
    return positions.includes(index);
  };

  // Consistent smooth transition
  const smoothTransition = {
    type: "tween",
    ease: [0.25, 0.1, 0.25, 1],
    duration: 0.7,
  };

  return (
    <div className="relative py-3 px-4 overflow-hidden">
      <div className="flex justify-center items-center relative h-[320px]">
        {projects.map((project, index) => (
          <motion.div
            key={`card-${index}`}
            className="absolute"
            style={{
              zIndex: getZIndex(index),

              pointerEvents: isCardClickable(index) ? "auto" : "none",

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
          className="text-gray-300 hover:text-slate-100 transition-all duration-300 hover:scale-125 group"
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
          className="text-gray-300 hover:text-slate-100 transition-all duration-300 hover:scale-125 group"
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