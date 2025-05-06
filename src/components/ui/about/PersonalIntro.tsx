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
      I build web apps that are clean, fast, and make sense — using tech that actually excites me.
      Turning messy problems into stuff people genuinely enjoy using is my favorite kind of challenge. 
      Always on the lookout for new ideas and challenges.
      </p>
      <p className="text-gray-300">
      When i&apos;m not coding, i&apos;m probably watching football, arguing over tactics, or hoping barça doesn&apos;t bottle it (and yeah, i still believe in spurs).
      </p>
    </motion.div>
  );
}