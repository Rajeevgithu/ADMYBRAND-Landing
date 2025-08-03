'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    // Scroll to contact section or pricing
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
      style={{ backgroundColor: '#0F172A' }}
    >
      {/* Background with glass effect */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(135deg, #0F172A 0%, #1F2937 50%, #0F172A 100%)'
        }}
      />
      <div 
        className="absolute inset-0 backdrop-blur-sm"
        style={{ 
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.05) 50%, rgba(56, 189, 248, 0.1) 100%)'
        }}
      />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(99, 102, 241, 0.3)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(236, 72, 153, 0.3)' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(56, 189, 248, 0.2)' }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block mb-3">AI-Powered Marketing</span>
          <span 
            className="block text-transparent bg-clip-text"
            style={{ 
              background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Built for Agencies
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Automate, optimize, and grow with ADmyBRAND AI Suite.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToContact}
          className="group inline-flex items-center gap-3 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 mb-16"
          style={{ 
            background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
            boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>

        {/* Hero Media Placeholder */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div 
            className="w-full max-w-5xl mx-auto h-80 md:h-[28rem] border rounded-2xl backdrop-blur-sm shadow-lg flex items-center justify-center"
            style={{ 
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="text-center text-white">
              <div className="text-6xl mb-6">🚀</div>
              <p className="text-2xl font-medium mb-2">Hero Video/Image Placeholder</p>
              <p className="text-lg opacity-80">Add your product demo or hero media here</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
} 