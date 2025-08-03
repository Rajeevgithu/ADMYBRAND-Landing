'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Zap, Users, BarChart3 } from 'lucide-react';

export default function DemoSection() {
  const [currentFeature, setCurrentFeature] = useState(0);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Zap,
      title: "AI Campaign Generation",
      description: "Watch how our AI creates compelling campaigns in seconds",
      time: "0:15",
      videoId: "RV9BmWnG7rk"
    },
    {
      icon: Users,
      title: "Multi-Client Management",
      description: "See seamless client switching and collaboration tools",
      time: "0:45",
      videoId: "MF9whtPLW-k"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Explore comprehensive dashboards and insights",
      time: "1:20",
      videoId: "sj3Zu-uqGWQ"
    }
  ];

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index);
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden" id="demo" style={{ backgroundColor: '#0F172A' }}>
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(135deg, #0F172A 0%, #1F2937 50%, #0F172A 100%)'
        }}
      />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/3 left-20 w-72 h-72 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-20 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(56, 189, 248, 0.2)' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See ADmyBRAND
            <span 
              className="block text-transparent bg-clip-text"
              style={{ 
                background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              In Action
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Watch how our AI-powered platform transforms marketing workflows and delivers exceptional results for agencies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              {/* Real Video Player */}
              <div className="aspect-video relative">
                                 <iframe
                   src={`https://www.youtube.com/embed/${features[currentFeature].videoId}?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1`}
                   title="ADmyBRAND AI Suite Demo"
                   className="w-full h-full rounded-t-2xl"
                   frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
                   key={features[currentFeature].videoId}
                 />
                
                {/* Video Overlay for Feature Highlighting */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="bg-black/80 backdrop-blur-sm rounded-xl p-3">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ 
                          background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)'
                        }}
                      >
                        {React.createElement(features[currentFeature].icon, { className: "w-4 h-4 text-white" })}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">
                          {features[currentFeature].title}
                        </h4>
                        <p className="text-gray-300 text-xs">
                          {features[currentFeature].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Key Features Demo</h3>
            
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  currentFeature === index ? 'border-transparent' : 'border-transparent'
                }`}
                style={{
                  background: currentFeature === index 
                    ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  border: currentFeature === index 
                    ? '1px solid rgba(99, 102, 241, 0.3)'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
                onClick={() => handleFeatureClick(index)}
                whileHover={{ scale: 1.02, x: 5 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: currentFeature === index 
                        ? 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)'
                        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
                    }}
                  >
                    <feature.icon className={`w-6 h-6 ${
                      currentFeature === index ? 'text-white' : 'text-gray-400'
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`font-semibold ${
                        currentFeature === index ? 'text-white' : 'text-gray-300'
                      }`}>
                        {feature.title}
                      </h4>
                      <span className="text-sm text-gray-500">{feature.time}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              className="rounded-xl p-6 mt-8"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-2">Ready to try it yourself?</h4>
              <p className="text-gray-300 text-sm mb-4">
                Start your free trial and experience the power of AI-driven marketing.
              </p>
              <motion.button
                onClick={scrollToPricing}
                className="text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                  boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 