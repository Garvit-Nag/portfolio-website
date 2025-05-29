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
      className="lg:col-span-2 bg-[#1a1a2e]/20 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20"
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
        className="relative h-64 w-full overflow-hidden rounded-lg bg-[#1a1a2e]/30 border border-gray-800/30 p-4"
        id="drag-container"
      >
        {interests.map((interest, index) => {
        
          const positions = [
          { x: "8%", y: "20%" },  
          { x: "28%", y: "15%" },  
          { x: "65%", y: "30%" },  
          { x: "12%", y: "60%" },
          { x: "35%", y: "50%" }, 
          { x: "70%", y: "65%" }, 
          { x: "22%", y: "35%" },  
          { x: "55%", y: "75%" }, 
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
                touchAction: 'none',
                maxWidth: '42%',
                textOverflow: 'ellipsis' 
              }}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1a1a2e]/50 backdrop-blur-sm rounded-full border border-gray-800/50 flex items-center cursor-grab active:cursor-grabbing overflow-hidden whitespace-nowrap text-xs sm:text-sm md:text-base"
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