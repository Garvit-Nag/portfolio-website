// src/components/ui/about/ResearchPublication.tsx
"use client";

import { motion } from 'framer-motion';
import { ScrollText } from 'lucide-react';
import { itemVariants } from '@/data/about';

export default function ResearchPublication() {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-[#1a1a2e]/20 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20"
    >
      <div className="flex items-start mb-4">
        <ScrollText className="mr-3 text-green-400" size={24} />
        <h3 className="text-2xl font-semibold text-gray-200">Research Publication</h3>
      </div>

      <p className="text-gray-200 font-medium text-xl mb-2">
        AODV-PROPT: A Novel AODV-Based Routing Protocol Enhanced by Relational Parameter Indexing (ARPI)
      </p>
      <p className="text-gray-400 mb-4">Published in IJNRD • DOI: 10.1729/Journal.40670</p>
      <p className="text-gray-300 mb-4">
  Novel protocol enhancing network performance through parameter indexing methods.
</p>
      <a
        href="https://www.ijnrd.org/viewpaperforall?paper=IJNRD2407360"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition-colors duration-300 inline-flex items-center group"
      >
        Read Publication
        <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
      </a>
    </motion.div>
  );
}