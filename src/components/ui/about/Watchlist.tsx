/* eslint-disable @next/next/no-img-element */
// src/components/ui/about/Watchlist.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Film } from 'lucide-react';
import { itemVariants } from '@/data/about';
import { movies } from '@/data/movies';

export default function Watchlist() {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  // Auto rotation for movie images
  useEffect(() => {
    const movieInterval = setInterval(() => {
      setCurrentMovieIndex(prevIndex => (prevIndex + 1) % movies.length);
    }, 2000);

    return () => clearInterval(movieInterval);
  }, []);

  return (
    <motion.div
      variants={itemVariants}
      className="bg-[#1a1a2e]/20 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20"
    >
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
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentMovieIndex ? 'opacity-100' : 'opacity-0'
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
    </motion.div>
  );
}