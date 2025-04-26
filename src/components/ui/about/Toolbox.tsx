/* eslint-disable @next/next/no-img-element */
// src/components/ui/about/Toolbox.tsx
"use client";

import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { itemVariants } from '@/data/about';
import { techStack } from '@/data/techStack';

export default function Toolbox() {
  return (
    <motion.div
      variants={itemVariants}
      className="md:col-span-2 bg-[#1a1a2e]/20 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20 flex flex-col"
    >
      <div className="flex items-start mb-4">
        <Code className="mr-3 text-green-400" size={24} />
        <h3 className="text-2xl font-semibold text-gray-200">My Toolbox</h3>
      </div>
      <p className="text-gray-400 mb-4">
        Technologies I use to craft exceptional digital experiences.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 flex-grow">
        {techStack.map((tech, index) => (
          <div
            key={`tech-${index}`}
            className="flex items-center px-3 py-2 bg-[#1a1a2e]/50 backdrop-blur-sm rounded-lg border border-gray-800/50 transform hover:scale-105 hover:bg-[#252542]/50 transition-all duration-300"
          >
            <img 
              src={`/icons/${tech.name.toLowerCase().replace(/[/+]/g, '-').replace(/\s+/g, '')}.svg`} 
              alt={`${tech.name} logo`}
              className="w-5 h-5 mr-2 text-gray-300"
              style={{ filter: 'invert(70%) sepia(13%) saturate(210%) hue-rotate(179deg) brightness(92%) contrast(87%)' }}
            />
            <span className="text-gray-300 text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}