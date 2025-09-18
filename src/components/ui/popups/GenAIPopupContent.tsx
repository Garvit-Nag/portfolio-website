/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GenAIPopupContent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hackathonImages = [
    "/hackathon/genAI_1.jpg",
    "/hackathon/genAI_2.jpg",
    "/hackathon/genAI_3.jpg",
    "/hackathon/genAI_4.jpg",
    "/hackathon/genAI_5.jpg",
    "/hackathon/genAI_6.jpg",
    "/hackathon/genAI_7.jpg",
  ];

  // Auto rotation for images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % hackathonImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* Image Carousel */}
      <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20">
        {hackathonImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={src}
              alt={`Hackathon Image ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        {/* Image Counter */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#0D0D1E]/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
          {hackathonImages.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-blue-400' : 'bg-gray-600'
                }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Title and Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex items-center space-x-2 mb-4"
      >
        <Award className="text-yellow-400" size={24} />
        <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
          Gen AI Exchange Hackathon by Google
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="p-5 bg-[#0D0D1E]/80 backdrop-blur-sm border border-gray-800/50 rounded-xl shadow-lg shadow-[#2A0E61]/20"
      >
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 font-medium mb-2">
          Winner Network 18 Track • October 2024
        </p>
        <p className="text-gray-300 mb-2">
          Won first place in the Network 18 track at the Gen AI Exchange Hackathon organized by Google and Devfolio.
        </p>
        <p className="text-gray-300 mb-4">
          Developed an innovative solution to combat misinformation in video content by engineering a robust media
          attribution and tampering detection system.
        </p>
      </motion.div>

      {/* Project Details */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="space-y-4 p-5 bg-[#1a1a2e]/50 backdrop-blur-sm border border-gray-800/50 rounded-xl shadow-lg shadow-[#2A0E61]/10"
      >
        <h4 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
          About Credify
        </h4>
        <p className="text-gray-300">
          Together with my team, we built Credify - our solution to Network 18&apos;s challenge of reimagining how we verify and protect digital content in the age of AI.
        </p>

        <div className="space-y-3 mt-4">
          <h5 className="text-lg font-medium text-gray-200">Solving Core Problems:</h5>
          <div className="flex items-start space-x-2">
            <CheckCircle size={18} className="text-green-400 mt-1 flex-shrink-0" />
            <p className="text-gray-300">Detecting tampered images and videos</p>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle size={18} className="text-green-400 mt-1 flex-shrink-0" />
            <p className="text-gray-300">Tracking content attribution across platforms</p>
          </div>
        </div>

        <div className="space-y-3 mt-4">
          <h5 className="text-lg font-medium text-gray-200">Technology Stack:</h5>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Perceptual fingerprinting that survives format changes and compression
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Hierarchical tracking of content uploaders (works independent of media metadata)
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Seamless integration with Gemini API for real-time media understanding and fact enrichment
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Open Source Models tweaked to our use case to detect potential tampering
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Project Link */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="pt-4 mt-2"
      >
        <a
          href="https://verifiedbycredify.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[#1a1a2e]/70 hover:bg-[#1a1a2e]/90 text-blue-300 font-medium rounded-lg transition-all duration-300 border border-blue-600/30 shadow-md shadow-[#2A0E61]/10 hover:shadow-lg hover:shadow-[#2A0E61]/20"
        >
          Visit Project ↗
        </a>
      </motion.div>
    </motion.div>
  );
}
