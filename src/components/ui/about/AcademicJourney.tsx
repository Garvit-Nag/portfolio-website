"use client";

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { itemVariants } from '@/data/about';
import ClickIndicatorButton from '../ClickIndicatorButton';

interface AcademicJourneyProps {
  onOpenEducationPopup: () => void;
}

export default function AcademicJourney({ onOpenEducationPopup }: AcademicJourneyProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 25px 5px rgba(42, 14, 97, 0.6)"
      }}
      transition={{ duration: 0.3 }}
      className="bg-[#1a1a2e]/20 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20 relative group cursor-pointer"
      onClick={onOpenEducationPopup}
    >
      <div className="flex items-start mb-4">
        <GraduationCap className="mr-3 text-indigo-400" size={24} />
        <h3 className="text-2xl font-semibold text-gray-200">Academic Journey</h3>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-xl font-medium text-blue-300">Chandigarh College Of Engineering & Technology</h4>
          <p className="text-gray-400">Bachelor of Engineering in Computer Science & Engineering</p>
          <p className="text-gray-400">CGPA: 8.04</p>
          <p className="text-gray-400">Dec. 2021 – June 2025</p>
        </div>

        <div>
          <h4 className="text-lg font-medium text-blue-300">Previous education</h4>
          <p className="text-gray-400">Senior Secondary (Science) and Secondary Education</p>
        </div>
      </div>

      {/* Click indicator button */}
      <ClickIndicatorButton
        onClick={onOpenEducationPopup}
        position="top-right"
      />
    </motion.div>
  );
}