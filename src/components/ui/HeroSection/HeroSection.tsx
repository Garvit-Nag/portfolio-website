/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";

export default function HeroSection() {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [commandDisplay, setCommandDisplay] = useState("");
  const command = "python dev_profile.py";
  const [commandExecuted, setCommandExecuted] = useState(false);
  const [outputStage, setOutputStage] = useState(0);
  const [codeVisible, setCodeVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on client-side for device detection
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Initial check
      checkMobile();

      // Add event listener for window resize
      window.addEventListener("resize", checkMobile);

      // Clean up event listener
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= command.length) {
        setCommandDisplay(command.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);

        setTimeout(() => {
          setCommandExecuted(true);

          setTimeout(() => setOutputStage(1), 300);

          setTimeout(() => setOutputStage(2), 900);

          setTimeout(() => setOutputStage(3), 1500);

          setTimeout(() => setCodeVisible(true), 2100);
        }, 500);
      }
    }, 100);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="relative z-10 min-h-screen flex items-center px-6 py-12 mt-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl lg:text-6xl font-bold leading-tight"
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
              className="text-gray-400 text-xl max-w-lg mx-auto lg:mx-0"
            >
              I build innovative web applications with cutting-edge technologies.
              Turning complex problems into elegant solutions through code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {/* Device-specific resume button */}
              {isMobile ? (
                <a
                  href="/Resume.pdf"
                  download="Garvit_Nag_Resume.pdf"
                  className="px-8 py-3 bg-gray-300 rounded-md text-black font-medium hover:bg-gray-400 hover:shadow-md transition-all duration-300 flex items-center gap-2"
                >
                  <FileText size={18} className="text-black" />
                  Resume
                </a>
              ) : (
                // For desktop: Open in new tab
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gray-300 rounded-md text-black font-medium hover:bg-gray-400 hover:shadow-md transition-all duration-300 flex items-center gap-2"
                >
                  <FileText size={18} className="text-black" />
                  Resume
                </a>
              )}

              <Link
                href="/#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                className="px-8 py-3 bg-transparent backdrop-blur-sm border border-gray-600 rounded-md text-gray-300 font-medium hover:bg-gray-800/30 hover:border-gray-400 hover:text-gray-100 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Terminal Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-xl relative">
              {/* Terminal window */}
              <div className="rounded-lg overflow-hidden bg-[#1a1a2e]/40 backdrop-blur-sm shadow-lg">
                {/* Terminal header */}
                <div className="bg-[#0a0a1a]/60 px-4 py-2 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400">terminal@Garvit-Nag</div>
                </div>

                {/* Terminal body */}
                <div className="p-6 font-mono text-sm bg-[#1a1a2e]/10">
                  {/* Command line */}
                  <div>
                    {/* Desktop version (single line) - hidden on mobile */}
                    <div className="hidden sm:flex items-center">
                      <span className="text-green-400 mr-2">➜</span>
                      <span className="text-blue-400 mr-2">~/garvit</span>
                      <span className="text-gray-400">$</span>
                      <span className="ml-2 text-gray-200">
                        {commandDisplay}
                        <span
                          className={cn("ml-0.5 inline-block w-2 h-4 bg-gray-300",
                            cursorVisible ? "opacity-100" : "opacity-0"
                          )}
                        ></span>
                      </span>
                    </div>

                    {/* Mobile version (two lines) */}
                    <div className="sm:hidden">
                      <div className="flex items-center">
                        <span className="text-green-400 mr-2">➜</span>
                        <span className="text-blue-400 mr-2">~/garvit</span>
                        <span className="text-gray-400">$</span>
                      </div>
                      <div className="pl-4 mt-1 text-gray-200">
                        {commandDisplay}
                        <span
                          className={cn("ml-0.5 inline-block w-2 h-4 bg-gray-300",
                            cursorVisible ? "opacity-100" : "opacity-0"
                          )}
                        ></span>
                      </div>
                    </div>
                  </div>

                  {/* Output section */}
                  {outputStage >= 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-blue-300"
                    >
                      &gt; Booting up environment...
                    </motion.div>
                  )}

                  {outputStage >= 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-blue-200"
                    >
                      &gt; Warming up codebase...
                    </motion.div>
                  )}

                  {outputStage >= 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-blue-100"
                    >
                      &gt; All systems ready. Let&apos;s build.
                    </motion.div>
                  )}

                  {/* Code display with inverted colors */}
                  {codeVisible && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="mt-4 space-y-1"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        className="text-purple-300 flex"
                      >
                        class DeveloperProfile:
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                        className="pl-4 text-cyan-300"
                      >
                        def __init__(self):
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.3 }}
                        className="pl-8"
                      >
                        <span className="text-green-300">self.name = </span>
                        <span className="text-gray-200">&quot;Garvit Nag&quot;</span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.4 }}
                        className="pl-8"
                      >
                        <span className="text-green-300">self.title = </span>
                        <span className="text-gray-200">&quot;Engineer passionate about design, detail, and doing things right&quot;</span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.5 }}
                        className="pl-8"
                      >
                        <span className="text-green-300">self.currently = </span>
                        <span className="text-gray-200">&quot;Crafting tools I&apos;d actually use. No fluff. Just clean, purposeful builds that feel good.&quot;</span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 5 }}
                        transition={{ duration: 0.2, delay: 0.6 }}
                        className="text-gray-400"
                      >
                        # All set. Ready to ship things that are well-crafted.
                      </motion.div>
                    </motion.div>
                  )}
                </div>

                {/* Terminal footer with updated date and time */}
                <div className="px-4 py-2 bg-[#0a0a1a]/60 flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    <span className="text-xs text-green-400">Process running</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    • Python 3.10.6
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