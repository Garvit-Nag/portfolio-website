/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Linkedin,
  Github,
  Mail,
  Twitter,
  Database
} from "lucide-react";
import ContactForm from "./ContactForm";
import { getContactSocialLinks } from "@/data/socials";

export default function ContactSection() {
  
  const [cursorVisible, setCursorVisible] = useState(true);

  
  const [commandDisplay, setCommandDisplay] = useState("");
  const command = "python contact_me.py";

 
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);
  const [showFourthLine, setShowFourthLine] = useState(false);
  const [showFifthLine, setShowFifthLine] = useState(false);
  const contactSocialLinks = getContactSocialLinks();
  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'mail':
        return <Mail className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'database':
        return <Database className="w-5 h-5" />;
      case 'instagram':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        );
      default:
        return null;
    }
  };
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Terminal Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            {/* Terminal Component */}
            <div className="w-full relative mb-4"> {/* Added mb-12 for bottom margin */}
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
            <div className="grid grid-cols-2 gap-4 mb-6">
              {contactSocialLinks.map((link, index) => {
                // Custom display text based on link type
                let displayText = link.name;
                if (link.name === 'GitHub') {
                  displayText = 'Garvit-Nag';
                } else if (link.name === 'LinkedIn') {
                  displayText = 'garvit-nag';
                } else if (link.name === 'Email') {
                  displayText = 'garvit1505@gmail.com';
                } else if (link.name === 'Instagram') {
                  displayText = '@garwiitt';
                }

                return (
                  <a
                    key={index}
                    href={link.url}
                    target={link.name === 'Email' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg bg-[#1a1a2e]/40 backdrop-blur-sm border border-gray-800/50 hover:bg-[#1a1a2e]/60 transition-all duration-300 group"
                  >
                    <span className={`mr-3 transition-colors duration-300 ${link.color}`}>
                      {renderIcon(link.icon)}
                    </span>
                    <span className={`transition-colors duration-300 ${link.color}`}>
                      {displayText}
                    </span>
                  </a>
                );
              })}
            </div>

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