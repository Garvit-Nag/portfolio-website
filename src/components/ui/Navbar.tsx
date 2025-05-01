/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SiInstagram, SiDiscord, SiX } from "react-icons/si";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

const navItems = [
  { name: "Home", path: "/#" },
  { name: "About me", path: "/#about" },
  { name: "Projects", path: "/#projects" },
  { name: "Contact", path: "/#contact" },
];

const socialLinks = [
  { name: "Discord", icon: SiDiscord, url: "https://discord.com/users/gonza02441" },
  { name: "Twitter", icon: SiX, url: "https://twitter.com/Garvit1505" },
];

const navbarVariants = {
  hidden: { opacity: 0, transform: 'translateY(-10px)' },
  visible: {
    opacity: 1,
    transform: 'translateY(0px)',
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const linkVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + custom * 0.05,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};
const mobileMenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      when: "afterChildren",
      staggerChildren: 0.03,
      staggerDirection: -1
    }
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const menuItemVariants = {
  closed: { opacity: 0, x: -10 },
  open: {
    opacity: 1,
    x: 0,
    transition: { ease: "easeOut", duration: 0.3 }
  }
};


const socialIconVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5 + custom * 0.05,
      duration: 0.3,
      ease: "easeOut"
    }
  })
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16" // Add explicit h-16 here
    >
      {/* Entire navbar with light transparency */}
      <div className={`w-full h-16 bg-[#0a0a1a]/40 backdrop-blur-sm transition-all duration-300 ${scrolled ? "shadow-lg shadow-[#2A0E61]/30" : ""}`}>
        <div className="w-full h-full flex items-center justify-between px-10">
          {/* Logo/Name */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-blue-200 hover:scale-110 inline-block transition-all duration-300">
                Garvit Nag
              </span>
            </motion.div>
          </Link>

          {/* Main Navigation - Higher transparency pill - DESKTOP */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-[#1a1a2e]/40 backdrop-blur-md rounded-full px-8 py-2"
            >
              <ul className="flex space-x-10">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    variants={linkVariants}
                  >
                    <Link
                      href={item.path}
                      className="text-gray-200 transition-all duration-300"
                    >
                      <span className="hover:scale-110 hover:text-white inline-block transition-all duration-300">
                        {item.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links - DESKTOP */}
          <div className="hidden md:flex items-center gap-4 mr-2">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                custom={index}
                variants={socialIconVariants}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all duration-300"
                aria-label={link.name}
              >
                <span className="hover:scale-110 inline-block transition-all duration-300">
                  <link.icon size={22} />
                </span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="md:hidden flex items-center"
          >
            <motion.button
              onClick={toggleMobileMenu}
              className="text-gray-200 focus:outline-none"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <RiCloseLine size={28} className="text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <RiMenu4Line size={28} className="text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden fixed top-16 left-0 right-0 bg-[#0a0a1a]/95 backdrop-blur-lg z-40 border-t border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-8">
              {/* Navigation Items */}
              <ul className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="text-center"
                    variants={menuItemVariants}
                    custom={index}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <Link
                      href={item.path}
                      className="text-gray-200 text-lg font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="hover:text-white inline-block transition-all duration-300">
                        {item.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Social Links for Mobile */}
              <motion.div
                className="flex justify-center space-x-8 pt-4 border-t border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-all duration-300"
                    aria-label={link.name}
                    // Remove whileHover and whileTap
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.4 + (index * 0.1) }
                    }}
                  >
                    <span className="hover:scale-110 inline-block transition-all duration-300">
                      <link.icon size={24} />
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}