'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from '../ui/TestimonialCard';

const testimonials = [
  {
    quote: "ADmyBRAND AI Suite has completely transformed our agency's workflow. We've increased our content output by 300% while maintaining quality. The AI understands our brand voice perfectly.",
    author: {
      name: "Sarah Johnson",
      title: "Marketing Director",
      company: "Digital Growth Agency"
    },
    rating: 5
  },
  {
    quote: "The multi-client management features are game-changing. We can now handle 10x more clients without sacrificing quality. The ROI tracking has helped us prove value to our clients.",
    author: {
      name: "Michael Chen",
      title: "Founder & CEO",
      company: "Social Media Masters"
    },
    rating: 5
  },
  {
    quote: "Finally, an AI tool that actually understands marketing agencies! The client collaboration tools and white-label options have made us look like tech wizards to our clients.",
    author: {
      name: "Emily Rodriguez",
      title: "Creative Director",
      company: "Brand Builders Co."
    },
    rating: 5
  },
  {
    quote: "The SEO optimization features alone have paid for the entire platform. Our clients' organic traffic has increased by 150% in just 3 months. Incredible results!",
    author: {
      name: "David Thompson",
      title: "SEO Specialist",
      company: "Search Success Agency"
    },
    rating: 5
  },
  {
    quote: "As a small agency, we were struggling to compete with larger players. ADmyBRAND leveled the playing field. We now deliver enterprise-level results at a fraction of the cost.",
    author: {
      name: "Lisa Park",
      title: "Managing Partner",
      company: "Boutique Marketing"
    },
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden" id="testimonials" style={{ backgroundColor: '#0F172A' }}>
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(135deg, #0F172A 0%, #1F2937 50%, #0F172A 100%)'
        }}
      />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-20 w-64 h-64 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-20 w-80 h-80 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(236, 72, 153, 0.2)' }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients
            <span 
              className="block text-transparent bg-clip-text"
              style={{ 
                background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of agencies that have transformed their marketing operations with ADmyBRAND AI Suite.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <TestimonialCard
              quote={testimonials[currentIndex].quote}
              author={testimonials[currentIndex].author}
              rating={testimonials[currentIndex].rating}
              className="max-w-4xl mx-auto"
            />
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:border-transparent transition-all duration-300"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: index === currentIndex 
                      ? 'transparent'
                      : 'rgba(255, 255, 255, 0.2)',
                    background: index === currentIndex 
                      ? 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)'
                      : 'rgba(255, 255, 255, 0.2)'
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:border-transparent transition-all duration-300"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Auto-play Toggle */}
          <div className="text-center">
            <motion.button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-play
            </motion.button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div 
            className="rounded-2xl p-8"
            style={{ 
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
            }}
          >
            <p className="text-white mb-6 text-lg font-medium">
              Trusted by 500+ agencies worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              {/* Professional Agency Logos */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="w-6 h-6 rounded-full" style={{ background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)' }}></div>
                <span className="text-white font-semibold text-sm">GrowthLab</span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="w-6 h-6 rounded-full" style={{ background: 'linear-gradient(135deg, #38BDF8 0%, #6366F1 100%)' }}></div>
                <span className="text-white font-semibold text-sm">DigitalFlow</span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="w-6 h-6 rounded-full" style={{ background: 'linear-gradient(135deg, #EC4899 0%, #38BDF8 100%)' }}></div>
                <span className="text-white font-semibold text-sm">BrandCraft</span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="w-6 h-6 rounded-full" style={{ background: 'linear-gradient(135deg, #6366F1 0%, #38BDF8 100%)' }}></div>
                <span className="text-white font-semibold text-sm">SocialBoost</span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="w-6 h-6 rounded-full" style={{ background: 'linear-gradient(135deg, #38BDF8 0%, #EC4899 100%)' }}></div>
                <span className="text-white font-semibold text-sm">AgencyPro</span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="w-6 h-6 rounded-full" style={{ background: 'linear-gradient(135deg, #EC4899 0%, #6366F1 100%)' }}></div>
                <span className="text-white font-semibold text-sm">MarketingHub</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 