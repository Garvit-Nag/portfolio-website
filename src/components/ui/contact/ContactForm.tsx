/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2, Send, AlertCircle, X } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success');
  const [notificationMessage, setNotificationMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Display notification
  const displayNotification = (type: 'success' | 'error', message: string) => {
    setNotificationType(type);
    setNotificationMessage(message);
    setShowNotification(true);

    // Auto hide after 5 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check email validation first
    if (!validateEmail(formData.email)) {
      displayNotification('error', 'Please enter a valid email address');
      return;
    }

    setFormState('submitting');

    try {
      // Using FormSubmit service
      const response = await fetch(`https://formsubmit.co/ajax/612dc0060d6ff326ef50881b31c128a4`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact",
          message: formData.message,
          _subject: `Portfolio Inquiry: ${formData.subject || "New Message"}`,
          _captcha: "false",
          _next: window.location.href, // Add the current URL as the redirect
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        displayNotification('success', 'Thanks for reaching out! I\'ll get back to you soon.');

        // Reset form state after 5 seconds
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      setFormState('error');
      
      let errorMsg = 'Something went wrong. Please try again later.';
      // If we have a more specific error message, use it
      if (error.message && error.message !== 'Failed to send message') {
        errorMsg = error.message;
      }
      
      displayNotification('error', errorMsg);

      // Reset form state after 5 seconds
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  // Close notification on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowNotification(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="bg-[#0D0D1E]/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-lg shadow-[#2A0E61]/20 relative">
      <div className={`relative transition-all duration-300 ${showNotification ? 'blur-[2px]' : ''}`}>
        <h3 className="text-2xl font-semibold text-gray-200 mb-6 flex items-center">
          <Send className="mr-3 text-gray-400" size={22} />
          Send a Message
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name and Email in a grid for desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name input */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full bg-[#1a1a2e]/50 text-gray-200 border border-gray-800/50 px-4 py-3 rounded-lg focus:outline-none focus:border-gray-700/80 transition-all duration-300 placeholder-gray-500"
              />
            </div>

            {/* Email input */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full bg-[#1a1a2e]/50 text-gray-200 border border-gray-800/50 px-4 py-3 rounded-lg focus:outline-none focus:border-gray-700/80 transition-all duration-300 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Subject field (typeable) */}
          <div>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full bg-[#1a1a2e]/50 text-gray-200 border border-gray-800/50 px-4 py-3 rounded-lg focus:outline-none focus:border-gray-700/80 transition-all duration-300 placeholder-gray-500"
            />
          </div>

          {/* Message input */}
          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              placeholder="Your Message"
              className="w-full bg-[#1a1a2e]/50 text-gray-200 border border-gray-800/50 px-4 py-3 rounded-lg focus:outline-none focus:border-gray-700/80 transition-all duration-300 resize-none placeholder-gray-500"
            ></textarea>
          </div>

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={formState === 'submitting'}
            className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all duration-300 ${formState === 'submitting'
                ? 'bg-[#1a1a2e] text-gray-400 cursor-not-allowed border border-gray-700/50'
                : formState === 'success'
                  ? 'bg-green-600/30 text-green-300 border border-green-700/50 hover:bg-green-600/40'
                  : 'bg-slate-300 text-gray-900 hover:bg-gray-200 hover:shadow-md hover:shadow-[#2A0E61]/20'
              }`}
            whileHover={{ scale: formState === 'submitting' ? 1 : 1.02 }}
            whileTap={{ scale: formState === 'submitting' ? 1 : 0.98 }}
          >
            {formState === 'submitting' ? (
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            ) : formState === 'success' ? (
              <Check className="w-5 h-5 mr-2" />
            ) : (
              <Send className="w-5 h-5 mr-2" />
            )}
            {formState === 'submitting'
              ? 'Sending...'
              : formState === 'success'
                ? 'Message Sent!'
                : 'Send Message'}
          </motion.button>
        </form>
      </div>

      {/* Notification Overlay */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`absolute inset-0 flex items-center justify-center z-50`}
          >
            <div
              className={`px-8 py-6 rounded-lg shadow-xl ${notificationType === 'success'
                  ? 'bg-green-900/90 text-green-200 border border-green-700/50'
                  : 'bg-red-900/90 text-red-200 border border-red-700/50'
                }`}
              style={{ backdropFilter: 'blur(8px)' }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="flex items-center">
                  {notificationType === 'success' ? (
                    <Check size={20} className="text-green-300 mr-2" />
                  ) : (
                    <AlertCircle size={20} className="text-red-300 mr-2" />
                  )}
                  <span className="font-semibold">
                    {notificationType === 'success' ? 'Success' : 'Error'}
                  </span>
                </span>
                <button
                  onClick={() => setShowNotification(false)}
                  className="p-1 rounded-full hover:bg-gray-800/50 transition-colors"
                  aria-label="Close notification"
                >
                  <X size={16} className="text-gray-300" />
                </button>
              </div>
              <p className="text-center">{notificationMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}