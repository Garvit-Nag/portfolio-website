/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import { Code, Eye } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  isActive?: boolean;
}

export default function ProjectCard({ project, isActive = false }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative w-[300px] h-[300px] rounded-xl overflow-hidden cursor-pointer 
        bg-transparent backdrop-blur-[3px] transition-all duration-300
        ${isHovered ? 'backdrop-blur-[8px]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: 'rgba(15, 15, 30, 0.6)'
      }}
    >
      <div className="absolute inset-0 w-full h-full">
        {/* Image container */}
        <div
          className={`absolute inset-0 w-full h-[65%] bg-cover bg-center transition-all duration-300
            ${isHovered ? 'opacity-40 filter blur-[2px]' : 'opacity-100'}`}
          style={{ backgroundImage: `url(${project.image})` }}
        />

        {/* Enhanced gradient overlay that blends image with the dark theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-[#0F0F1E]/90 via-65% to-[#0F0F1E]/95" />

        <div className={`absolute bottom-0 left-0 p-6 z-10 w-full transition-all duration-300
          ${isHovered ? 'opacity-40' : 'opacity-100'}`}>
          <h3 className="text-xl font-semibold text-gray-200 mb-1">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm line-clamp-2">
            {project.description}
          </p>
        </div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-12 opacity-0 transition-all duration-300"
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <Link
            href={project.githubLink}
            target="_blank"
            className="text-gray-300 hover:text-slate-100 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_12px_rgba(69,227,255,0.7)] z-20"
            onClick={(e) => e.stopPropagation()}
            aria-label="View code"
          >
            <Code size={32} />
          </Link>

          <Link
            href={project.liveLink}
            target="_blank"
            className="text-gray-300 hover:text-slate-100 transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_12px_rgba(69,227,255,0.7)] z-20"
            onClick={(e) => e.stopPropagation()}
            aria-label="Preview live"
          >
            <Eye size={32} />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}