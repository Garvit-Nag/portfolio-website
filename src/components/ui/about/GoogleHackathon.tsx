/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { itemVariants } from '@/data/about';
import { hackathonImages } from '@/data/hackathon';
import ClickIndicatorButton from '../ClickIndicatorButton';

interface GoogleHackathonProps {
  onOpenGenAIPopup: () => void;
}

export default function GoogleHackathon({ onOpenGenAIPopup }: GoogleHackathonProps) {
  const [currentHackathonIndex, setCurrentHackathonIndex] = useState(0);

  // Auto rotation for hackathon images
  useEffect(() => {
    const hackathonInterval = setInterval(() => {
      setCurrentHackathonIndex(prevIndex => (prevIndex + 1) % hackathonImages.length);
    }, 2000);

    return () => clearInterval(hackathonInterval);
  }, []);

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 25px 5px rgba(42, 14, 97, 0.6)"
      }}
      transition={{ duration: 0.3 }}
      className="lg:col-span-2 bg-[#1a1a2e]/20 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20 group relative cursor-pointer"
      onClick={onOpenGenAIPopup}
    >
      <div className="flex items-center mb-4">
        <Award className="mr-3 text-yellow-400" size={24} />
        <h3 className="text-2xl font-semibold text-gray-200">Gen AI Exchange Hackathon by Google</h3>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-1/3 h-48 rounded-lg overflow-hidden">
          {hackathonImages.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${index === currentHackathonIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={src}
                alt={`Hackathon Image ${index + 1}`}
                className="h-full w-full object-cover"
                style={{ opacity: 0.7 }}
              />
            </div>
          ))}
        </div>

        <div className="md:w-2/3">
          <p className="text-purple-300 font-medium mb-2">Winner Network 18 Track • October 2024</p>
          <p className="text-gray-300 mb-2">
            Won first place in the Network 18 track at the Gen AI Exchange Hackathon organized by Google and Devfolio.
          </p>
          <p className="text-gray-300 mb-4">
            Developed an innovative solution to combat misinformation in video content by engineering a robust media
            attribution and tampering detection system.
          </p>
          <a
            href="https://www.credify.fun"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300 inline-flex items-center group"
          >
            Project Link
            <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>

      {/* Click indicator button */}
      <ClickIndicatorButton
        onClick={onOpenGenAIPopup}
        position="top-right"
      />
    </motion.div>
  );
}