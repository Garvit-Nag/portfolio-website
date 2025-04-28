// src/components/ui/ProjectsSection.tsx
"use client";

import { motion } from 'framer-motion';
import { sectionVariants } from '@/data/about';
import ProjectsCarousel from './ProjectsCarousel';

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 py-20 px-6 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div
            variants={sectionVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-blue-200 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work and personal projects that showcase my skills and interests.
            </p>
          </motion.div>

          {/* Projects Carousel */}
          <ProjectsCarousel />
          
        </motion.div>
      </div>
    </section>
  );
}