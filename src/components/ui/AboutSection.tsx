"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import DialogPopup from './DialogPopup';
import EducationPopupContent from './popups/EducationPopupContent';
import GenAIPopupContent from './popups/GenAIPopupContent';
import { sectionVariants } from '@/data/about';
import PersonalIntro from './about/PersonalIntro';
import AcademicJourney from './about/AcademicJourney';
import GoogleHackathon from './about/GoogleHackathon';
import WorkExperience from './about/WorkExperience';
import ResearchPublication from './about/ResearchPublication';
import Toolbox from './about/Toolbox';
import BeyondCode from './about/BeyondCode';
import Watchlist from './about/Watchlist';

export default function AboutSection() {
  const [educationPopupOpen, setEducationPopupOpen] = useState(false);
  const [genAIPopupOpen, setGenAIPopupOpen] = useState(false);

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
            variants={sectionVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-blue-200 mb-4 leading-[1.2] pb-2">
              A Glimpse Into My World
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Learn more about who I am, what I do, and what inspires me.
            </p>
          </motion.div>

          {/* Main Introduction & Academics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PersonalIntro />
            <AcademicJourney onOpenEducationPopup={() => setEducationPopupOpen(true)} />
          </div>

          {/* Achievements Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <GoogleHackathon onOpenGenAIPopup={() => setGenAIPopupOpen(true)} />
            <WorkExperience />
          </div>

          {/* Research Publication & Tools Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <ResearchPublication />
            <Toolbox />
          </div>

          {/* Bottom Row Grid - Beyond Code & My Watches */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <BeyondCode />
            <Watchlist />
          </div>
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