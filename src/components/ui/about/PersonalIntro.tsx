// src/components/ui/about/PersonalIntro.tsx
"use client";

import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import { itemVariants } from '@/data/about';

export default function PersonalIntro() {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-[#1a1a2e]/20 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20"
    >
      <div className="flex items-start mb-4">
        <Lightbulb className="mr-3 text-cyan-500" size={24} />
        <h3 className="text-2xl font-semibold text-gray-200">About Me</h3>
      </div>
      <p className="text-gray-300 mb-4">
        I&apos;m a passionate software developer with a focus on web development and AI applications.
        I enjoy tackling complex problems and turning them into elegant solutions through code.
        My journey in technology is driven by curiosity and a desire to create meaningful digital experiences.
      </p>
      <p className="text-gray-300">
        When I&apos;m not coding, you&apos;ll find me exploring new technologies, reading about the latest advancements in
        AI, or engaging in one of my many hobbies outside the digital realm.
      </p>
    </motion.div>
  );
}