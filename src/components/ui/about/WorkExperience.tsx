"use client";

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { itemVariants } from '@/data/about';

export default function WorkExperience() {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-[#1a1a2e]/20 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20"
    >
      <div className="flex items-center mb-4">
        <Briefcase className="mr-3 text-blue-400" size={24} />
        <h3 className="text-xl font-semibold text-gray-200">Work Experience</h3>
      </div>

      {/* <p className="text-purple-300 font-medium mb-2">SDE Intern • 2025</p> */}
      <p className="text-purple-300 font-medium mb-2">Freelance Developer</p>
      <p className="text-gray-300 mb-2">
        {/* Stardom Web Application Development */}
        Web Application Development
      </p>
      <p className="text-gray-300 mb-4">
        {/* Built key CMS functionalities for Stardom&apos;s web application, focusing on product management, content creation, and secure user authentication.      </p> */}
        Built key CMS functionalities focusing on product management, content creation, and secure user authentication. </p>
      <a
        href="https://www.stardom.co.in"
        target="_blank"
        className="text-blue-400 hover:text-blue-300 transition-colors duration-300 inline-flex items-center group"
      >
        Project Link
        <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
      </a>
    </motion.div>
  );
}
