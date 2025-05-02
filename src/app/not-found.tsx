"use client";

import { Particles } from "@/components/magicui/particles";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      checkMobile();
      
      window.addEventListener("resize", checkMobile);
      
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background - Conditional rendering */}
      <div className="absolute inset-0 z-0">
        {!isMobile ? (
          <Particles
            className="absolute inset-0"
            quantity={200}
            staticity={30}
            color="#ffffff"
            ease={30}
          />
        ) : (
          <div 
            className="absolute inset-0" 
            style={{ backgroundColor: "rgba(1, 6, 18, 0.97)" }}
          ></div>
        )}
      </div>

      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-6">
        <div className="flex flex-col items-center max-w-2xl mx-auto -mt-10">
          {/* Astronaut Image with loading animation */}
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 50,
              damping: 15,
              duration: 0.8
            }}
            className="mb-0 -mb-10"
          >
            <Image 
              src="/404.png" 
              alt="Lost astronaut" 
              width={500} 
              height={500}
              className="mx-auto"
              priority
            />
          </motion.div>
          
          {/* Error Messages with entrance animations */}
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-blue-200 mb-3 leading-[1.2]"
            >
              404 - Space Oddity
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-300 mb-2"
            >
              Your coordinates are off the charts, Captain!
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-gray-400 max-w-lg mx-auto mb-6"
            >
              You&apos;ve stumbled upon a star that never made it into my constellation.
            </motion.p>
            
            {/* Back Home Button with entrance animation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mx-auto"
            >
              <Link 
                href="/" 
                className="inline-flex items-center space-x-2 px-8 py-3 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-all duration-300"
              >
                <span>Return to Home Base</span>
                <svg 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  className="ml-1"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" 
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}