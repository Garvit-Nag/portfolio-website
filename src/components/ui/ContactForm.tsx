/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// src/components/ui/ContactForm.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2, SendHorizonal } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (field: string) => {
    setIsFocused(prev => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleBlur = (field: string) => {
    setIsFocused(prev => ({
      ...prev,
      [field]: false,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    try {
      // Using FormSubmit service
      const response = await fetch(`https://formsubmit.co/garvit1505@gmail.com`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Portfolio Contact: ${formData.subject}`,
        }),
      });
      
      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormState('error');
      setErrorMessage('Something went wrong. Please try again later.');
      
      setTimeout(() => {
        setFormState('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <div className="bg-[#1a1a2e]/20 backdrop-blur-sm rounded-xl p-8 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20">
      <h3 className="text-2xl font-semibold text-gray-200 mb-6 flex items-center">
        <SendHorizonal className="mr-3 text-blue-400" size={22} />
        Send a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-6">
          {/* Name input with floating label and glow effect */}
          <div className="relative">
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
              required
              className={`w-full bg-[#0D0D1E]/60 text-gray-200 border px-4 py-4 rounded-lg focus:outline-none transition-all duration-300 z-10 ${
                isFocused.name || formData.name ? 'border-blue-500/70' : 'border-gray-700/50'
              }`}
              style={{
                boxShadow: (isFocused.name || formData.name) ? '0 0 15px rgba(59, 130, 246, 0.15)' : 'none',
              }}
            />
            <motion.label
              htmlFor="name"
              className={`absolute left-4 transition-all duration-300 z-0 ${
                isFocused.name || formData.name
                  ? 'text-xs text-blue-400 -top-2.5 bg-[#0D0D1E]/80 px-2'
                  : 'text-gray-400 top-4'
              }`}
              initial={false}
              animate={{
                y: isFocused.name || formData.name ? 0 : 0
              }}
            >
              Your Name
            </motion.label>
          </div>

          {/* Email input with floating label and glow effect */}
          <div className="relative">
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              required
              className={`w-full bg-[#0D0D1E]/60 text-gray-200 border px-4 py-4 rounded-lg focus:outline-none transition-all duration-300 z-10 ${
                isFocused.email || formData.email ? 'border-blue-500/70' : 'border-gray-700/50'
              }`}
              style={{
                boxShadow: (isFocused.email || formData.email) ? '0 0 15px rgba(59, 130, 246, 0.15)' : 'none',
              }}
            />
            <motion.label
              htmlFor="email"
              className={`absolute left-4 transition-all duration-300 z-0 ${
                isFocused.email || formData.email
                  ? 'text-xs text-blue-400 -top-2.5 bg-[#0D0D1E]/80 px-2'
                  : 'text-gray-400 top-4'
              }`}
            >
              Email Address
            </motion.label>
          </div>

          {/* Subject input with floating label and glow effect */}
          <div className="relative">
            <motion.input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => handleFocus('subject')}
              onBlur={() => handleBlur('subject')}
              required
              className={`w-full bg-[#0D0D1E]/60 text-gray-200 border px-4 py-4 rounded-lg focus:outline-none transition-all duration-300 z-10 ${
                isFocused.subject || formData.subject ? 'border-blue-500/70' : 'border-gray-700/50'
              }`}
              style={{
                boxShadow: (isFocused.subject || formData.subject) ? '0 0 15px rgba(59, 130, 246, 0.15)' : 'none',
              }}
            />
            <motion.label
              htmlFor="subject"
              className={`absolute left-4 transition-all duration-300 z-0 ${
                isFocused.subject || formData.subject
                  ? 'text-xs text-blue-400 -top-2.5 bg-[#0D0D1E]/80 px-2'
                  : 'text-gray-400 top-4'
              }`}
            >
              Subject
            </motion.label>
          </div>

          {/* Message input with floating label and glow effect */}
          <div className="relative">
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={() => handleBlur('message')}
              required
              rows={5}
              className={`w-full bg-[#0D0D1E]/60 text-gray-200 border px-4 py-4 rounded-lg focus:outline-none transition-all duration-300 z-10 resize-none ${
                isFocused.message || formData.message ? 'border-blue-500/70' : 'border-gray-700/50'
              }`}
              style={{
                boxShadow: (isFocused.message || formData.message) ? '0 0 15px rgba(59, 130, 246, 0.15)' : 'none',
              }}
            ></motion.textarea>
            <motion.label
              htmlFor="message"
              className={`absolute left-4 transition-all duration-300 z-0 ${
                isFocused.message || formData.message
                  ? 'text-xs text-blue-400 -top-2.5 bg-[#0D0D1E]/80 px-2'
                  : 'text-gray-400 top-4'
              }`}
            >
              Your Message
            </motion.label>
          </div>

          {/* Submit button with hover effects */}
          <motion.button
            type="submit"
            disabled={formState === 'submitting'}
            className={`w-full py-4 px-6 rounded-lg font-medium text-white flex items-center justify-center transition-all duration-300 ${
              formState === 'submitting' 
                ? 'bg-blue-500/50 cursor-not-allowed' 
                : formState === 'success' 
                  ? 'bg-green-500/80 hover:bg-green-600/80' 
                  : 'bg-gradient-to-r from-blue-600/80 to-indigo-600/80 hover:from-blue-700/80 hover:to-indigo-700/80'
            }`}
            whileHover={{ scale: formState === 'submitting' ? 1 : 1.02 }}
            whileTap={{ scale: formState === 'submitting' ? 1 : 0.98 }}
            style={{
              boxShadow: formState === 'submitting' ? 'none' : '0 4px 14px 0 rgba(59, 130, 246, 0.25)'
            }}
          >
            {formState === 'submitting' ? (
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            ) : formState === 'success' ? (
              <Check className="w-5 h-5 mr-2" />
            ) : (
              <SendHorizonal className="w-5 h-5 mr-2" />
            )}
            {formState === 'submitting' 
              ? 'Sending...' 
              : formState === 'success' 
                ? 'Message Sent!' 
                : 'Send Message'}
          </motion.button>
          
          {/* Status messages */}
          {formState === 'error' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm text-center mt-4"
            >
              {errorMessage}
            </motion.div>
          )}
          
          {formState === 'success' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-sm text-center mt-4"
            >
              Thanks for reaching out! I'll get back to you soon.
            </motion.div>
          )}
          
          {/* FormSubmit anti-spam fields */}
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_captcha" value="false" />
        </div>
      </form>
    </div>
  );
}