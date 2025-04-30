/* eslint-disable react/no-unescaped-entities */
// src/components/ui/ContactSection.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Linkedin,
  Github,
  Mail,
  Twitter,
  Database,
} from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  // Cursor blink state
  const [cursorVisible, setCursorVisible] = useState(true);
  
  // Command state
  const [commandDisplay, setCommandDisplay] = useState("");
  const command = "python contact_me.py";
  
  // Terminal state
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);
  const [showFourthLine, setShowFourthLine] = useState(false);
  const [showFifthLine, setShowFifthLine] = useState(false);

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
        setTimeout(() => setShowThirdLine(true), 900);
        setTimeout(() => setShowFourthLine(true), 1200);
        setTimeout(() => setShowFifthLine(true), 1500);
      }
    }, 100);
    
    return () => {
      clearInterval(cursorInterval);
      clearInterval(typingInterval);
    };
  }, []);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/garvit-nag',
      color: 'group-hover:text-blue-400',
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/Garvit-Nag',
      color: 'group-hover:text-gray-300',
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:garvit1505@gmail.com',
      color: 'group-hover:text-red-400',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://x.com/Garvit1505',
      color: 'group-hover:text-blue-500',
    },
    {
      name: 'Kaggle',
      icon: <Database className="w-5 h-5" />,
      url: 'https://www.kaggle.com/garvitcpp',
      color: 'group-hover:text-blue-300',
    },
  ];

  return (
    <section id="contact" className="relative z-10 py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-blue-200 mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Ready to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Terminal Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            {/* Terminal Component */}
            <div className="w-full relative">
              {/* Terminal window */}
              <div className="rounded-lg overflow-hidden bg-[#1a1a2e]/20 backdrop-blur-sm border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20">
                {/* Terminal header */}
                <div className="bg-[#0a0a1a]/80 px-4 py-2 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400">terminal@garvit-nag</div>
                </div>
                
                {/* Terminal body */}
                <div className="p-5 font-mono text-sm bg-[#1a1a2e]/10">
                  {/* Command line */}
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">➜</span>
                    <span className="text-blue-400 mr-2">~/connect</span>
                    <span className="text-gray-400">$</span>
                    <span className="ml-2 text-blue-300">
                      {commandDisplay}
                      <span className={cn("ml-0.5 inline-block w-2 h-4 bg-blue-300", 
                        cursorVisible ? "opacity-100" : "opacity-0"
                      )}></span>
                    </span>
                  </div>
                  
                  {/* Output section */}
                  {showFirstLine && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-cyan-200"
                    >
                      &gt; Running contact script...
                    </motion.div>
                  )}
                  
                  {showSecondLine && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-purple-300"
                    >
                      def send_message():
                    </motion.div>
                  )}
                  
                  {showThirdLine && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4 text-gray-300"
                    >
                      """Let's build something amazing together"""
                    </motion.div>
                  )}
                  
                  {showFourthLine && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4 text-cyan-200"
                    >
                      return {"{`status: \"Ready for collaboration\", response_time: \"< 24 hours\"`}"}
                    </motion.div>
                  )}
                  
                  {showFifthLine && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-green-400"
                    >
                      &gt; Awaiting your input...
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.97 }}
                  className={`group p-3 rounded-full bg-[#1a1a2e]/40 backdrop-blur-sm border border-gray-800/50 hover:shadow-md hover:shadow-[#2A0E61]/30 transition-all duration-300`}
                  title={link.name}
                >
                  <span className={`transition-colors duration-300 ${link.color}`}>
                    {link.icon}
                  </span>
                </motion.a>
              ))}
              <motion.a
                href="tel:+919877926632"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.97 }}
                className="group p-3 rounded-full bg-[#1a1a2e]/40 backdrop-blur-sm border border-gray-800/50 hover:shadow-md hover:shadow-[#2A0E61]/30 transition-all duration-300"
                title="Phone"
              >
                <span className="transition-colors duration-300 group-hover:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
              </motion.a>
            </div>
            <p className="text-center text-gray-500 text-sm">+91-9877926632 • garvit1505@gmail.com</p>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}