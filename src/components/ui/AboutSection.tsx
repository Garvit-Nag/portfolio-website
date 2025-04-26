/* eslint-disable @next/next/no-img-element */
// src/components/ui/AboutSection.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Award, Film, WandSparklesIcon, Lightbulb, GraduationCap, ScrollText, Briefcase } from 'lucide-react';
import DialogPopup from './DialogPopup';
import EducationPopupContent from './popups/EducationPopupContent';
import GenAIPopupContent from './popups/GenAIPopupContent';
import ClickIndicatorButton from './ClickIndicatorButton';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};


// Tech stack data from resume
const techStack = [
  { name: "Python" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "SQL" },
  { name: "C" },
  { name: "C++" },
  { name: "Next.js" },
  { name: "React" },
  { name: "FastAPI" },
  { name: "Flask" },
  { name: "Tailwind CSS" },
  { name: "MongoDB" },
  { name: "Firebase" },
  { name: "Appwrite" },
  { name: "Pandas" },
  { name: "NumPy" },
  { name: "Matplotlib" },
  { name: "Git" },
  { name: "VS Code" },
  { name: "Linux" },
];
const interests = [
  { name: "Football", icon: "⚽" },
  { name: "Volleyball", icon: "🏐" },
  { name: "Gaming", icon: "🎮" },
  { name: "Trecking", icon: "🥾" },
  { name: "Cinephile", icon: "🎥" },
  { name: "Reading", icon: "📚" },
  { name: "Astronomy", icon: "🔭" },
  { name: "Sketching", icon: "🎨" },
];

// To this:
const movies = [
  "/movies/hacksaw_poster.jpg",
  "/movies/shawshank_poster.jpg",
  "/movies/southpaw_poster.jpg",
  "/movies/interstellar_poster.jpg",
  "/movies/green_mile_poster.jpg",
  "/movies/gkminus_poster.jpg",
  "/movies/dark_knight_poster.jpg",
  "/movies/bhaag_milkha_bhaag_poster.jpg",
  "/movies/apollo_thirteen_poster.jpg",
  "/movies/QB_poster.jpg",
  "/movies/office_us_poster.jpg",
  "/movies/creed_poster.jpg",
];

const hackathonImages = [
  "/hackathon/genAI_1.jpg",
  "/hackathon/genAI_2.jpg",
  "/hackathon/genAI_3.jpg",
  "/hackathon/genAI_4.jpg",
  "/hackathon/genAI_5.jpg",
  "/hackathon/genAI_6.jpg",
  "/hackathon/genAI_7.jpg",
];

export default function AboutSection() {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [currentHackathonIndex, setCurrentHackathonIndex] = useState(0);
  const dragContainerRef = useRef(null);
  const [educationPopupOpen, setEducationPopupOpen] = useState(false);
  const [genAIPopupOpen, setGenAIPopupOpen] = useState(false);

  // Auto rotation for movie images
  // Adjust timing for both intervals (1 second instead of 5 seconds)
  // Separate useEffect for hackathon images to isolate any issues
  useEffect(() => {
    const hackathonInterval = setInterval(() => {
      setCurrentHackathonIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % hackathonImages.length;
        console.log('Updating hackathon index to:', newIndex); // Add logging
        return newIndex;
      });
    }, 2000);

    return () => clearInterval(hackathonInterval);
  }, []);

  // Keep movie rotation in its own effect
  useEffect(() => {
    const movieInterval = setInterval(() => {
      setCurrentMovieIndex(prevIndex => (prevIndex + 1) % movies.length);
    }, 2000);

    return () => clearInterval(movieInterval);
  }, []);

  return (
    <section id="about" className="relative z-10 py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12"
        >
          {/* Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-blue-200 mb-4">
              A Glimpse Into My World
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Learn more about who I am, what I do, and what inspires me.
            </p>
          </motion.div>

          {/* Main Introduction & Academics Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Personal Introduction */}
            <div className="bg-[#1a1a2e]/20 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20">
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
            </div>

            {/* Academic Background */}
            <div className="bg-[#1a1a2e]/20 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20 relative group cursor-pointer" onClick={() => setEducationPopupOpen(true)}>
            <div className="flex items-start mb-4">
    <GraduationCap className="mr-3 text-indigo-400" size={24} />
    <h3 className="text-2xl font-semibold text-gray-200">Academic Journey</h3>
  </div>

  <div className="space-y-4">
    <div>
      <h4 className="text-xl font-medium text-blue-300">Chandigarh College Of Engineering & Technology</h4>
      <p className="text-gray-400">Bachelor of Engineering in Computer Science & Engineering</p>
      <p className="text-gray-400">CGPA: 7.79</p>
      <p className="text-gray-400">Dec. 2021 – June 2025</p>
    </div>

    <div>
      <h4 className="text-lg font-medium text-blue-300">Schooling Background</h4>
      <p className="text-gray-400">Senior Secondary (Science) and Secondary Education</p>
    </div>
  </div>
  
  {/* Click indicator button */}
  <ClickIndicatorButton 
    onClick={() => setEducationPopupOpen(true)} 
    position="top-right"
  />
</div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Google Hackathon */}
            <div className="md:col-span-2 bg-[#1a1a2e]/20 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20 group relative cursor-pointer" onClick={() => setGenAIPopupOpen(true)}>
            <div className="flex items-start mb-4">
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
            style={{ opacity: 0.7 }} // Apply transparency directly to images
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
    onClick={() => setGenAIPopupOpen(true)}
    position="top-right"
  />
</div>

            {/* Work Experience */}
<div className="bg-[#1a1a2e]/20 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20">
  <div className="flex items-start mb-4">
    <Briefcase className="mr-3 text-blue-400" size={24} />
    <h3 className="text-xl font-semibold text-gray-200">Work Experience</h3>
  </div>

  <p className="text-purple-300 font-medium mb-2">Freelance Developer • 2025</p>
  <p className="text-gray-300 mb-2">
    Stardom Web Application Development
  </p>
  <p className="text-gray-300 mb-4">
    Implemented authentication using Appwrite, created functional dashboards, and developed product management features for a web application.
  </p>
  <a
    href="https://www.stardom.co.in"
    target="_blank"
    className="text-blue-400 hover:text-blue-300 transition-colors duration-300 inline-flex items-center group">
    Project Link
    <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
  </a>
</div>
          </motion.div>

          {/* Research Publication */}

<motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Research Publication - taking 1/3 of width */}
  <div className="bg-[#1a1a2e]/20 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20">
    <div className="flex items-start mb-4">
      <ScrollText className="mr-3 text-green-400" size={24} />
      <h3 className="text-2xl font-semibold text-gray-200">Research Publication</h3>
    </div>

    <p className="text-gray-200 font-medium text-xl mb-2">
      AODV-PROPT: A Novel AODV-Based Routing Protocol Enhanced by Relational Parameter Indexing (ARPI)
    </p>
    <p className="text-gray-400 mb-4">Published in IJNRD • DOI: 10.1729/Journal.40670</p>
    <p className="text-gray-300 mb-4">
      This research paper presents an advanced routing protocol that enhances network performance in dynamic
      environments through relational parameter indexing.
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
  </div>

  {/* My Toolbox Section - With Static Grid - taking 2/3 of width */}
  <div className="md:col-span-2 bg-[#1a1a2e]/20 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20 flex flex-col">    <div className="flex items-start mb-4">
      <Code className="mr-3 text-green-400" size={24} />
      <h3 className="text-2xl font-semibold text-gray-200">My Toolbox</h3>
    </div>
    <p className="text-gray-400 mb-4">
      Technologies I use to craft exceptional digital experiences.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 flex-grow">
            {techStack.map((tech, index) => (
        <div
          key={`tech-${index}`}
          className="flex items-center px-3 py-2 bg-[#1a1a2e]/50 backdrop-blur-sm rounded-lg border border-gray-800/50 transform hover:scale-105 hover:bg-[#252542]/50 transition-all duration-300"
        >
          <img 
            src={`/icons/${tech.name.toLowerCase().replace(/[/+]/g, '-').replace(/\s+/g, '')}.svg`} 
            alt={`${tech.name} logo`}
            className="w-5 h-5 mr-2 text-gray-300"
            style={{ filter: 'invert(70%) sepia(13%) saturate(210%) hue-rotate(179deg) brightness(92%) contrast(87%)' }}
          />
          <span className="text-gray-300 text-sm">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
</motion.div>

          {/* Bottom Row Grid - My Watches & Beyond Code */}
<motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Beyond the Code - taking 2/3 of width */}
  <div className="md:col-span-2 bg-[#1a1a2e]/20 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20">
    <div className="flex items-start mb-4">
      <WandSparklesIcon className="mr-3 text-emerald-400" size={24} />
      <h3 className="text-2xl font-semibold text-gray-200">Beyond the Code</h3>
    </div>
    <p className="text-gray-400 mb-6">
      Explore my interests and hobbies beyond the digital realm.
    </p>

    {/* Interactive draggable playground */}
    <div 
      ref={dragContainerRef}
      className="relative h-64 w-full overflow-hidden rounded-lg bg-[#1a1a2e]/30 border border-gray-800/30"
      id="drag-container"
    >
      {interests.map((interest, index) => {
        // Calculate positions to scatter across the entire container
        const positions = [
          { x: 50, y: 50 },  // top left
          { x: 220, y: 40 },  // top right
          { x: 400, y: 80 },  // top right further
          { x: 100, y: 150 }, // bottom left
          { x: 270, y: 130 }, // middle
          { x: 450, y: 160 }, // bottom right
          { x: 150, y: 90 },  // center left
          { x: 350, y: 180 }, // bottom center
        ];
        
        const pos = index < positions.length 
          ? positions[index] 
          : { x: Math.random() * 400 + 50, y: Math.random() * 150 + 30 };
        
        return (
          <motion.div
            key={index}
            drag
            dragMomentum={false}
            dragElastic={0.1}
            whileDrag={{ scale: 1.05, zIndex: 10 }}
            dragConstraints={dragContainerRef}
            style={{
              position: 'absolute',
              left: pos.x,
              top: pos.y,
              touchAction: 'none' // Improves touch device behavior
            }}
            className="px-4 py-2 bg-[#1a1a2e]/50 backdrop-blur-sm rounded-full border border-gray-800/50 flex items-center cursor-grab active:cursor-grabbing"
          >
            <span className="mr-2">{interest.icon}</span>
            <span className="text-gray-300">{interest.name}</span>
          </motion.div>
        );
      })}
    </div>
  </div>

  {/* My Watches Section - taking 1/3 of width */}
  <div className="bg-[#1a1a2e]/20 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20">
    <div className="flex items-start mb-4">
      <Film className="mr-3 text-red-400" size={24} />
      <h3 className="text-2xl font-semibold text-gray-200">My Watchlist</h3>
    </div>
    <p className="text-gray-400 mb-4">
      Explore Movies shaping my perspectives.
    </p>

    <div className="relative w-48 h-64 rounded-lg overflow-hidden mx-auto">
      {movies.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentMovieIndex ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="bg-purple-500/20 absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src={src}
            alt={`Movie Cover ${index + 1}`}
            className="h-full w-full object-cover"
            style={{ opacity: 0.7, background: 'transparent' }}
          />
        </div>
      ))}
    </div>
  </div>
</motion.div>
        </motion.div>
      </div>
      {/* Popups */}
<DialogPopup 
  isOpen={educationPopupOpen} 
  onClose={() => setEducationPopupOpen(false)} 
  title="Academic Background"
>
  <EducationPopupContent />
</DialogPopup>

<DialogPopup 
  isOpen={genAIPopupOpen} 
  onClose={() => setGenAIPopupOpen(false)} 
  title="Gen AI Exchange Hackathon"
>
  <GenAIPopupContent />
</DialogPopup>
    </section>
  );
}