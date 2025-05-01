"use client";

import { motion } from 'framer-motion';
import { sectionVariants } from '@/data/about';
import ProjectsCarousel from './ProjectsCarousel';

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 py-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl relative">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-4"
        >
          <motion.div
            variants={sectionVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-blue-200 mb-4 leading-[1.2] pb-2">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              A selection of my recent work and personal projects that showcase my skills and interests.
            </p>
          </motion.div>

          <ProjectsCarousel />
        </motion.div>
      </div>
    </section>
  );
}