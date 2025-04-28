// src/components/ui/projects/ProjectCard.tsx
"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  isCenter: boolean;
  onClick: () => void;
}

export default function ProjectCard({ project, isCenter, onClick }: ProjectCardProps) {
  return (
    <motion.div
      className="relative transition-all duration-500 cursor-pointer"
      onClick={onClick}
      whileHover={!isCenter ? { scale: 1.05 } : {}}
    >
      {/* Card Container */}
      <div className="relative w-80 h-96 overflow-hidden rounded-xl bg-[#1a1a2e]/20 backdrop-blur-sm border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20">
        {/* Project image with proper fading effect */}
        <div className="relative w-full h-full">
          {/* Background image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          
          {/* Dark gradient overlay that gets darker at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-[#090325]/95" />
          
          {/* Content container positioned at bottom */}
          <div className="absolute inset-x-0 bottom-0 p-6 z-10">
            {/* Project title with glow effect */}
            <h3 className="text-2xl font-bold text-blue-100 mb-2">{project.title}</h3>
            
            {/* Project description */}
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            
            {/* Links at the bottom right */}
            <div className="flex justify-end space-x-3 mt-4">
              <Link 
                href={project.githubLink} 
                target="_blank" 
                className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/70 text-gray-300 transition-colors border border-gray-700/30"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={20} className="text-blue-400" />
              </Link>
              <Link 
                href={project.liveLink} 
                target="_blank" 
                className="p-2 rounded-full bg-blue-600/30 hover:bg-blue-500/50 text-gray-100 transition-colors border border-blue-500/30"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={20} className="text-blue-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}