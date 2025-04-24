/* eslint-disable react/no-unescaped-entities */
// src/components/ui/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";

export default function HeroSection() {
  // Cursor blink state
  const [cursorVisible, setCursorVisible] = useState(true);
  
  // Command state
  const [commandDisplay, setCommandDisplay] = useState("");
  const command = "npm run create:magic";
  
  // Terminal state
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    
    // Type the command character by character
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= command.length) {
        setCommandDisplay(command.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Show terminal output sequentially
        setTimeout(() => setShowFirstLine(true), 300);
        setTimeout(() => setShowSecondLine(true), 600);
        setTimeout(() => setShowCode(true), 900);
      }
    }, 100);
    
    return () => {
      clearInterval(cursorInterval);
      clearInterval(typingInterval);
    };
  }, []);
  
  return (
    <section className="relative z-10 min-h-screen flex items-center px-6 py-12 mt-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <div>
            <motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="text-5xl md:text-6xl font-bold leading-tight"
>
  Hi I&apos;m{" "}
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-blue-200">
    Garvit Nag
  </span>
</motion.h1>
            </div>
            
            <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className="text-gray-400 text-xl max-w-lg mx-auto md:mx-0"
>
  I build innovative web applications with cutting-edge technologies. 
  Turning complex problems into elegant solutions through code.
</motion.p>
            
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8, duration: 0.8 }}
  className="flex flex-wrap gap-4 justify-center md:justify-start"
>
<Link
  href="/resume"
  className="px-8 py-3 bg-gray-300 rounded-md text-black font-medium hover:bg-gray-400 hover:shadow-md transition-all duration-300 flex items-center gap-2"
>
  <FileText size={18} className="text-black" />
  Resume
</Link>
<Link
  href="/#projects"
  className="px-8 py-3 bg-transparent backdrop-blur-sm border border-gray-600 rounded-md text-gray-300 font-medium hover:bg-gray-800/30 hover:border-gray-400 hover:text-gray-100 transition-all duration-300"
>
  Learn More
</Link>
</motion.div>
          </motion.div>

          {/* Terminal Component - Updated with whitish-grey style and dark blueish tint */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-full max-w-xl relative">
              {/* Terminal window with whitish-grey with blueish tint */}
              <div className="rounded-lg overflow-hidden bg-[#1a1a2e]/20 backdrop-blur-sm">
                {/* Terminal header */}
                <div className="bg-[#0a0a1a]/60 px-4 py-2 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400">terminal@garvit-nag</div>
                </div>
                
                {/* Terminal body */}
                <div className="p-6 font-mono text-sm bg-[#1a1a2e]/10">
                  {/* Command line */}
                  <div className="flex items-center">
  <span className="text-green-400 mr-3">➜</span>
  <span className="text-blue-400 mr-3">~/projects</span>
  <span className="text-gray-400">$</span>
  <span className="ml-3 text-blue-300">
                      {commandDisplay}
                      <span className={cn("ml-0.5 inline-block w-2 h-4 bg-blue-300", 
                        cursorVisible ? "opacity-100" : "opacity-0"
                      )}></span>
                    </span>
                  </div>
                  
                  {/* Output section - Updated colors */}
                  {showFirstLine && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-cyan-200"
                    >
                      &gt; portfolio@1.0.0 create:magic
                    </motion.div>
                  )}
                  
                  {showSecondLine && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-indigo-300"
                    >
                      &gt; node scripts/create-magic.js
                    </motion.div>
                  )}
                  
                  {showCode && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="mt-2 space-y-1"
                    >
                      <div className="text-blue-300">
                        function createPortfolio() {"{"}
                      </div>
                      <div className="pl-12 text-gray-300">
                        const tech = ["React", "Next.js", "Tailwind"];
                      </div>
                      <div className="pl-12 text-gray-300">
                        const passion = "Building incredible web
                      </div>
                      <div className="pl-12 text-gray-300">
                        experiences";
                      </div>
                      <div className="pl-12 text-gray-300 mt-1">
                        return {"{"}
                      </div>
                      <div className="pl-24 text-green-300">
                        developer: "Garvit Nag",
                      </div>
                      <div className="pl-24 text-green-300">
                        mission: "Transform ideas into digital reality",
                      </div>
                      <div className="pl-24 text-green-300">
                        contact: "Let's collaborate!"
                      </div>
                      <div className="pl-12 text-gray-300">
                        {"};"}
                      </div>
                      <div className="text-blue-300">
                        {"}"}
                      </div>
                    </motion.div>
                  )}
                </div>
                
                {/* Terminal footer */}
                <div className="px-4 py-2 bg-[#0a0a1a]/60 flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    <span className="text-xs text-green-400">Process running</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Powering creativity...
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}