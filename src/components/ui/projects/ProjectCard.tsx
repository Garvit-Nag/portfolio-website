// src/components/ui/projects/ProjectCard.tsx
"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import { Code, Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  isCenter: boolean;
  onClick: () => void;
}

export default function ProjectCard({ project, isCenter, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative transition-all duration-500 cursor-pointer"
      onClick={onClick}
      whileHover={!isCenter ? { scale: 1.05 } : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className="relative w-80 h-[300px] overflow-hidden rounded-xl bg-[#1a1a2e]/20 backdrop-blur-sm border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20">
        {/* Project image with proper fading effect */}
        <div className="relative w-full h-full">
          {/* Background image */}
          <div 
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-300 ${
              isHovered ? 'blur-sm scale-105' : ''
            }`}
            style={{ backgroundImage: `url(${project.image})` }}
          />
          
          {/* Dark gradient overlay that gets darker at bottom */}
          <div className={`absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-[#090325]/95 transition-opacity duration-300 ${
            isHovered ? 'opacity-90' : 'opacity-100'
          }`} />
          
          {/* Content container positioned at bottom */}
          <div className={`absolute inset-x-0 bottom-0 p-6 z-10 transition-all duration-300 ${
            isHovered ? 'blur-sm' : ''
          }`}>
            {/* Project title with glow effect */}
            <h3 className="text-2xl font-bold text-blue-100 mb-2">{project.title}</h3>
            
            {/* Project description */}
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
          </div>

          {/* Overlay with action buttons on hover */}
          <div 
            className={`absolute inset-0 flex items-center justify-center gap-6 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Link 
              href={project.githubLink} 
              target="_blank" 
              className="p-3 rounded-full bg-[#1a1a2e]/70 hover:bg-[#252542]/90 text-blue-400 transition-transform hover:scale-110 border border-blue-900/40 shadow-lg backdrop-blur-md hover:text-blue-300 transform hover:rotate-3"
              onClick={(e) => e.stopPropagation()}
              aria-label="View code"
            >
              <Code size={24} className="text-blue-400" />
            </Link>
            <Link 
              href={project.liveLink} 
              target="_blank" 
              className="p-3 rounded-full bg-[#1a1a2e]/70 hover:bg-[#252542]/90 text-blue-400 transition-transform hover:scale-110 border border-blue-900/40 shadow-lg backdrop-blur-md hover:text-blue-300 transform hover:-rotate-3"
              onClick={(e) => e.stopPropagation()}
              aria-label="Preview live"
            >
              <Eye size={24} className="text-blue-400" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}