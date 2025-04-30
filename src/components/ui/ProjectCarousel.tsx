import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "../../data/projects";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectCarousel() {
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
    if (width < 1024) return 340;
    return 400;
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
  
  // Consistent smooth transition
  const smoothTransition = {
    type: "tween",
    ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for natural movement
    duration: 0.7,
  };

  return (
    <div className="relative py-12 px-4 overflow-hidden">
      <div className="flex justify-center items-center relative h-[480px]">
        {projects.map((project, index) => (
          <motion.div 
            key={`card-${index}`}
            className="absolute"
            style={{ 
              zIndex: getZIndex(index),
              pointerEvents: index === currentIndex ? "auto" : "none"
            }}
            initial={false}
            animate={{
              x: getCardPosition(index),
              opacity: getOpacity(index),
              scale: getScale(index),
              filter: index === currentIndex ? "blur(0px)" : "blur(0.5px)"
            }}
            transition={smoothTransition}
          >
            <ProjectCard 
              project={project} 
              isActive={index === currentIndex} 
            />
          </motion.div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-3 rounded-full z-30 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 transition-colors duration-300"
        aria-label="Previous project"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-white p-3 rounded-full z-30 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 transition-colors duration-300"
        aria-label="Next project"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Pagination dots */}
      <div className="flex justify-center gap-3 mt-8">
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
    </div>
  );
}

function ProjectCard({ project, isActive }: { project: Project; isActive: boolean }) {
  // Image reveal animation
  const imageVariants = {
    initial: { scale: 1.1 },
    animate: { scale: 1.0 },
    hover: { scale: 1.05 }
  };

  return (
    <motion.div 
      className={`
        w-[280px] sm:w-[300px] h-[440px] p-4 rounded-2xl bg-black border 
        ${isActive ? 'border-zinc-600' : 'border-zinc-800'}
        flex flex-col relative overflow-hidden
      `}
      whileHover={isActive ? { scale: 1.02 } : {}}
      transition={{ 
        type: "tween", 
        ease: "easeOut", 
        duration: 0.3 
      }}
    >
      <motion.div 
        className="relative w-full h-[45%] rounded-lg overflow-hidden mb-4"
        whileHover="hover"
        initial="initial"
        animate={isActive ? "animate" : "initial"}
      >
        <motion.div
          className="absolute inset-0"
          variants={imageVariants}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.1, 0.25, 1] 
          }}
        >
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            className="h-full w-full"
          />
        </motion.div>
      </motion.div>
      
      <div className="flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-zinc-400 mb-3 flex-grow text-sm">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex justify-between">
          <motion.a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 flex items-center gap-1 text-sm"
            whileHover={{ color: "#fff" }}
            transition={{ duration: 0.2 }}
          >
            GitHub <ArrowUpRight size={14} />
          </motion.a>
          <motion.a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 flex items-center gap-1 text-sm"
            whileHover={{ color: "#fff" }}
            transition={{ duration: 0.2 }}
          >
            Live Demo <ArrowUpRight size={14} />
          </motion.a>
        </div>
      </div>
      
      <div className="absolute top-4 right-4 text-5xl font-bold text-zinc-800/50">
        {project.id}
      </div>
    </motion.div>
  );
}