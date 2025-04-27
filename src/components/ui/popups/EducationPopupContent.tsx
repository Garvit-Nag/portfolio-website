import React from 'react';

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

  return (
    <div className="space-y-6">
      {/* Current Education */}
      {education.map((item, index) => (
        <div 
          key={index} 
          className="p-5 rounded-lg bg-gradient-to-r from-[#1a1a2e]/50 to-[#252542]/50 backdrop-blur-sm border border-gray-800/50 border-l-2 border-l-blue-400"
        >
          <h3 className="text-xl font-medium mb-1 text-blue-300">
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
      
      {/* Previous Education Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-purple-300 mb-4 pl-2 border-l-2 border-purple-400">Previous Education</h2>
        <div className="space-y-4">
          {previousEducation.map((item, index) => (
            <div 
              key={index} 
              className="p-4 rounded-lg bg-[#1a1a2e]/50 backdrop-blur-sm border border-gray-800/50 hover:border-purple-800/50 transition-all duration-300 border-l-2 border-l-purple-400/70"
            >
              <h3 className="text-lg font-medium mb-1 text-purple-200">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}