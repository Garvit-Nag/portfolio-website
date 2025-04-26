// src/components/ui/EducationPopupContent.tsx
import React from 'react';

export default function EducationPopupContent() {
  const education = [
    {
      degree: "Bachelor of Engineering (B.E Computer Science & Engineering)",
      institution: "Chandigarh College of Engineering & Technology",
      period: "Dec. 2021 - June 2025",
      score: "7.92 CGPA"
    },
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

  return (
    <div className="space-y-6">
      {education.map((item, index) => (
        <div 
          key={index} 
          className={`p-5 rounded-lg bg-[#1a1a2e]/50 backdrop-blur-sm border border-gray-800/50 ${
            index === 0 ? 'bg-gradient-to-r from-[#1a1a2e]/50 to-[#252542]/50 border-l-2 border-l-blue-400' : ''
          }`}
        >
          <h3 className={`text-xl font-medium mb-1 ${index === 0 ? 'text-blue-300' : 'text-gray-200'}`}>
            {item.degree}
          </h3>
          <div className="flex flex-col sm:flex-row justify-between sm:items-center">
            <p className="text-gray-300">{item.institution}</p>
            <p className="text-purple-300 text-sm">{item.period}</p>
          </div>
          <div className="mt-2 flex items-center">
            <div className="h-1.5 w-1.5 rounded-full bg-green-400 mr-2"></div>
            <p className="text-green-300">{item.score}</p>
          </div>
        </div>
      ))}
      
    </div>
  );
}