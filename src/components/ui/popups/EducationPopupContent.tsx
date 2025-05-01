import React from 'react';
import { motion } from 'framer-motion';

export default function EducationPopupContent() {
  const education = [
    {
      degree: "Bachelor of Engineering (B.E Computer Science & Engineering)",
      institution: "Chandigarh College of Engineering & Technology",
      period: "Dec. 2021 - June 2025",
      score: "7.92 CGPA"
    }
  ];

  const previousEducation = [
    {
      degree: "Intermediate/+2",
      institution: "Ryan International School",
      period: "2018-20",
      score: "92.4%"
    },
    {
      degree: "Matriculation",
      institution: "Ryan International School",
      period: "2017-18",
      score: "95%"
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-6">
      {/* Current Education */}
      {education.map((item, index) => (
        <motion.div
          key={index}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="p-5 rounded-xl bg-[#0D0D1E]/80 backdrop-blur-sm border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20 hover:border-blue-800/40 transition-all duration-300"
        >
          <h3 className="text-xl font-medium mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
            {item.degree}
          </h3>
          <div className="flex flex-col sm:flex-row justify-between sm:items-center">
            <p className="text-gray-300">{item.institution}</p>
            <p className="text-blue-300/90 text-sm font-medium">{item.period}</p>
          </div>
          <div className="mt-2 flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-green-400 mr-2"></div>
            <p className="text-green-300">{item.score}</p>
          </div>
        </motion.div>
      ))}

      {/* Previous Education Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 pl-2">
          Previous Education
        </h2>
        <div className="space-y-4">
          {previousEducation.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="p-4 rounded-xl bg-[#1a1a2e]/50 backdrop-blur-sm border border-gray-800/50 shadow-lg shadow-[#2A0E61]/10 hover:bg-[#1a1a2e]/60 hover:border-purple-800/40 transition-all duration-300"
            >
              <h3 className="text-lg font-medium mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-200">
                {item.degree}
              </h3>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                <p className="text-gray-300">{item.institution}</p>
                <p className="text-purple-300/80 text-sm">{item.period}</p>
              </div>
              <div className="mt-2 flex items-center">
                <div className="h-1.5 w-1.5 rounded-full bg-green-400 mr-2"></div>
                <p className="text-green-300">{item.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}