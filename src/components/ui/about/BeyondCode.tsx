// src/components/ui/about/BeyondCode.tsx
"use client";

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { WandSparklesIcon } from 'lucide-react';
import { itemVariants, interests } from '@/data/about';

export default function BeyondCode() {
  const dragContainerRef = useRef(null);

  return (
    <motion.div
      variants={itemVariants}
      className="md:col-span-2 bg-[#1a1a2e]/20 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20"
    >
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
    </motion.div>
  );
}